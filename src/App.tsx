import { BrowserRouter, Routes, Route } from 'react-router-dom'

import UserListPlain from '~/components/UserListPlain'
import UserListQuery from '~/components/UserListQuery'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserListPlain />} />
        <Route path="/use_state" element={<UserListPlain />} />
        <Route path="/use_query" element={<UserListQuery />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
