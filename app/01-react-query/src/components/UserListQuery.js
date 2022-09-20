import { getIdGenerator, wait } from '../lib'
import { useQuery, useMutation, useQueryClient } from 'react-query'

const getNextId = getIdGenerator()

const DATA = [
  { id: getNextId(), name: 'yamada' },
  { id: getNextId(), name: 'tanaka' },
  { id: getNextId(), name: 'suzuki' },
]

const fetchUsers = async () => {
  console.log('execute query...')
  await wait(1)
  return DATA
}

const postUsers = async () => {
  console.log('execute mutate...')
  await wait(1)
  DATA.push({ id: getNextId(), name: 'kudou' })
}

function UserListQuery() {
  console.log('render start...')
  const result = useQuery('users', fetchUsers)
  console.log('query result: ', result)
  const data = result.data
  const isLoading = result.isLoading
  console.log('fetch loading? ', isLoading)
  const queryClient = useQueryClient()
  const mutation = useMutation(postUsers, {
    onSuccess: () => {
      console.log('invalidate "users" query...')
      queryClient.invalidateQueries('users')
    },
  })

  if (isLoading) {
    console.log('now loading...')
    return <span>Loading...</span>
  }

  return (
    <div>
      <h2>ユーザ一覧</h2>
      <div>
        {data.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
      <button
        onClick={() => {
          console.log('clicked...')
          mutation.mutate()
        }}
      >
        update
      </button>
    </div>
  )
}

export default UserListQuery
