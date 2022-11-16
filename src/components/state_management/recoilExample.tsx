import { ItemTable } from '../ItemTable'
import { RecoilRoot, selector, useRecoilValue } from 'recoil'

import { createApi } from '~/mockapi/api'

const api = createApi()

export const selectItems = selector({
  key: 'items',
  get: async () => {
    const response = await api.fetchItems()
    return response
  },
})

const RecoilExampleInner = () => {
  const items = useRecoilValue(selectItems)
  return <ItemTable items={items} />
}

export const RecoilExample = () => {
  return (
    <RecoilRoot>
      <RecoilExampleInner />
    </RecoilRoot>
  )
}
