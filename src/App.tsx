import { NavItem, Navs } from './components/Navs'
import { Tabs } from './components/Tabs'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import UserListPlain from '~/components/UserListPlain'

function App() {
  return (
    <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
      <div className="flex items-start justify-between">
        <div className="h-screen hidden lg:block shadow-lg relative w-80">
          <div className="bg-white h-full dark:bg-gray-700">
            <div className="flex items-center justify-start pt-6 ml-8">
              <p className="font-bold dark:text-white text-xl">
                React Examples
              </p>
            </div>
            <nav className="mt-6">
              <Navs />
            </nav>
          </div>
        </div>
        <div className="flex flex-col w-full md:space-y-4">
          <div className="overflow-auto h-screen pb-24 px-4 md:px-6 my-8">
            <Routes>
              <Route path="/" element={<Tabs initialTab="use_state" />} />
              <Route
                path="/state_management/*"
                element={<Tabs initialTab="use_state" />}
              />
              <Route path="/about" element={<div>about this page</div>} />
            </Routes>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
