import { QueryClient, QueryClientProvider } from 'react-query'
import UserListPlain from './components/UserListPlain'
import UserListQuery from './components/UserListQuery'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ margin: '2em' }}>
        <h1>ユーザ情報</h1>
        <UserListPlain />
        <hr />
        <UserListQuery />
      </div>
    </QueryClientProvider>
  )
}

export default App
