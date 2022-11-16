import { useQuery } from 'react-query'
import { QueryClient, QueryClientProvider } from 'react-query'

import { ItemTable } from '~/components/ItemTable'
import { Loading } from '~/components/Loading'
import { createApi } from '~/mockapi/api'
import { Item } from '~/utils/types'

const api = createApi()
const queryClient = new QueryClient()

const UseQueryExampleInner = () => {
  console.log('render start...')
  const { data: items, isLoading } = useQuery<Item[]>('items', api.fetchItems)
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

export const UserQueryExample = () => (
  <QueryClientProvider client={queryClient}>
    <UseQueryExampleInner />
  </QueryClientProvider>
)
