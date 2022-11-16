import { ItemTable } from './ItemTable'
import { Loading } from './Loading'
import { useState, useEffect } from 'react'

import { createApi } from '~/mockapi/api'
import { Item } from '~/utils/types'

const api = createApi()

const UserListPlain = () => {
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

export default UserListPlain
