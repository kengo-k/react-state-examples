import * as React from 'react'

export const TabItem = (props: { tabId: TabId; selected?: boolean }) => {
  const selectedClass =
    'inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500'
  const noSelectedClass =
    'inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'
  let className = noSelectedClass
  if (props.selected) {
    className = selectedClass
  }
  return (
    <li className="mr-2">
      <a href="#" className={className}>
        {props.tabId}
      </a>
    </li>
  )
}

export type TabId =
  | 'useState'
  | 'useQuery'
  | 'ReduxToolKit'
  | 'Recoli'
  | 'Jotai'
  | 'Zustand'
export const Tabs = (props: {
  tabId: TabId
  children: React.ReactElement<any>
}) => {
  return (
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
      <ul className="flex flex-wrap -mb-px">
        <TabItem tabId="useState" selected={props.tabId === 'useState'} />
        <TabItem tabId="useQuery" selected={props.tabId === 'useQuery'} />
        <TabItem
          tabId="ReduxToolKit"
          selected={props.tabId === 'ReduxToolKit'}
        />
        <TabItem tabId="Recoli" selected={props.tabId === 'Recoli'} />
        <TabItem tabId="Jotai" selected={props.tabId === 'Jotai'} />
        <TabItem tabId="Zustand" selected={props.tabId === 'Zustand'} />
      </ul>
      {props.children}
    </div>
  )
}
