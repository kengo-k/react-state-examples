import { useQuery } from 'react-query'
import { QueryClient, QueryClientProvider } from 'react-query'

import { fetchItems } from '~/mockapi/api'
import { Item } from '~/utils/types'

const queryClient = new QueryClient()

const UserListQuery = () => {
  console.log('render start...')
  const { data, isLoading } = useQuery<Item[]>('items', fetchItems)
  console.log('fetch loading? ', isLoading)
  // const mutation = useMutation(postUsers, {
  //   onSuccess: () => {
  //     console.log('invalidate "users" query...')
  //     queryClient.invalidateQueries('users')
  //   },
  // })

  if (isLoading) {
    console.log('now loading...')
    return <span>Loading...</span>
  }

  return (
    <div>
      <h2>ユーザ一覧</h2>
      <div>
        {data?.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
      <button
        onClick={() => {
          console.log('clicked...')
          //mutation.mutate()
        }}
      >
        update
      </button>
    </div>
  )
}

const UserListQueryWrapper = () => (
  <QueryClientProvider client={queryClient}>
    <UserListQuery />
  </QueryClientProvider>
)

export default UserListQueryWrapper
