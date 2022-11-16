import { useState, useEffect } from 'react'

import { ItemTable } from '~/components/ItemTable'
import { Loading } from '~/components/Loading'
import { createApi } from '~/mockapi/api'
import { Item } from '~/utils/types'

const api = createApi()

export const UseStateExample = () => {
  console.log('render start...')
  const [loading, setLoading] = useState<boolean>(true)
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    api.fetchItems().then((data) => {
      setItems(data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <Loading />
  }

  return <ItemTable items={items} />
}
