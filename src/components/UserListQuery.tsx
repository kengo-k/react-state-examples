import { useQuery, useMutation } from 'react-query'
import { QueryClient, QueryClientProvider } from 'react-query'

import { Tabs } from '~/components/Tabs'
import { getIdGenerator, wait } from '~/lib'
import { User } from '~/utils/types'

const getNextId = getIdGenerator()
const queryClient = new QueryClient()

const DATA: User[] = [
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

const UserListQuery = () => {
  console.log('render start...')
  const { data, isLoading } = useQuery<User[]>('users', fetchUsers)
  console.log('fetch loading? ', isLoading)
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

  // return (
  //   <div>
  //     <h2>ユーザ一覧</h2>
  //     <div>
  //       {data?.map((user) => (
  //         <div key={user.id}>{user.name}</div>
  //       ))}
  //     </div>
  //     <button
  //       onClick={() => {
  //         console.log('clicked...')
  //         mutation.mutate()
  //       }}
  //     >
  //       update
  //     </button>
  //   </div>
  // )
  return (
    <Tabs tabId="useQuery">
      <div>Hello,UseQuery</div>
    </Tabs>
  )
}

const UserListQueryWrapper = () => (
  <QueryClientProvider client={queryClient}>
    <UserListQuery />
  </QueryClientProvider>
)

export default UserListQueryWrapper
