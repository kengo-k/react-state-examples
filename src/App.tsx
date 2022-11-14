import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import UserListPlain from '~/components/UserListPlain'
import UserListQuery from '~/components/UserListQuery'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/user_list_plain" element={<UserListPlain />} />
        <Route path="/user_list_query" element={<UserListQuery />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
