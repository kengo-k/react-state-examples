import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import UserListPlain from '~/components/UserListPlain'
import UserListQuery from '~/components/UserListQuery'

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1 className="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900 !mb-4 lg:!text-4xl">
          React Examples
        </h1>

        <ul>
          <li>
            <Link to="user_list_plain">従来スタイル</Link>
          </li>
          <li>
            <Link to="user_list_query">useQueryスタイル</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/" element={<></>} />
        <Route path="/user_list_plain" element={<UserListPlain />} />
        <Route path="/user_list_query" element={<UserListQuery />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
