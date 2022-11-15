import { ItemTable } from './ItemTable'
import { Loading } from './Loading'
import { useQuery } from 'react-query'
import { QueryClient, QueryClientProvider } from 'react-query'

import { fetchItems } from '~/mockapi/api'
import { Item } from '~/utils/types'

const queryClient = new QueryClient()

const UserListQuery = () => {
  console.log('render start...')
  const { data: items, isLoading } = useQuery<Item[]>('items', fetchItems)
  console.log('fetch loading? ', isLoading)
  // const mutation = useMutation(postUsers, {
  //   onSuccess: () => {
  //     console.log('invalidate "users" query...')
  //     queryClient.invalidateQueries('users')
  //   },
  // })

  if (isLoading || items == null) {
    return <Loading />
  }

  return <ItemTable items={items} />
}

const UserListQueryWrapper = () => (
  <QueryClientProvider client={queryClient}>
    <UserListQuery />
  </QueryClientProvider>
)

export default UserListQueryWrapper
