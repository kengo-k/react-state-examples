import * as React from 'react'
import { useState } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import { RecoilExample } from '~/components/state_management/recoilExample'
import { UserQueryExample } from '~/components/state_management/useQueryExample'
import { UseStateExample } from '~/components/state_management/useStateExample'

export type TabId =
  | 'use_state'
  | 'use_query'
  | 'redux_toolKit'
  | 'recoil'
  | 'jotai'
  | 'zustand'

export const TabItem = (props: {
  tabId: TabId
  selected?: boolean
  onTabClicked: (tabId: TabId) => void
}) => {
  const selectedClass =
    'inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500'
  const noSelectedClass =
    'inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
  let className = noSelectedClass
  if (props.selected) {
    className = selectedClass
  }
  return (
    <li className="mr-2" onClick={() => props.onTabClicked(props.tabId)}>
      <Link to={`/state_management/${props.tabId}`} className={className}>
        {props.tabId}
      </Link>
    </li>
  )
}

export const Tabs = (props: { initialTab: TabId }) => {
  const [selectedTabId, setSelectedTabId] = useState<TabId>(props.initialTab)
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        <TabItem
          tabId="use_state"
          selected={selectedTabId === 'use_state'}
          onTabClicked={setSelectedTabId}
        />
        <TabItem
          tabId="use_query"
          selected={selectedTabId === 'use_query'}
          onTabClicked={setSelectedTabId}
        />
        <TabItem
          tabId="redux_toolKit"
          selected={selectedTabId === 'redux_toolKit'}
          onTabClicked={setSelectedTabId}
        />
        <TabItem
          tabId="recoil"
          selected={selectedTabId === 'recoil'}
          onTabClicked={setSelectedTabId}
        />
        <TabItem
          tabId="jotai"
          selected={selectedTabId === 'jotai'}
          onTabClicked={setSelectedTabId}
        />
        <TabItem
          tabId="zustand"
          selected={selectedTabId === 'zustand'}
          onTabClicked={setSelectedTabId}
        />
      </ul>
      <Routes>
        <Route path="/" element={<UseStateExample />} />
        <Route path="/use_state" element={<UseStateExample />} />
        <Route path="/use_query" element={<UserQueryExample />} />
        <Route path="/recoil" element={<RecoilExample />} />
      </Routes>
    </div>
  )
}
