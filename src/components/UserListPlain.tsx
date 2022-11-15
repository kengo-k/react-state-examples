import { ItemTable } from './ItemTable'
import { Loading } from './Loading'
import { useState, useEffect } from 'react'

import { fetchItems } from '~/mockapi/api'
import { Item } from '~/utils/types'

const UserListPlain = () => {
  console.log('render start...')
  const [loading, setLoading] = useState<boolean>(true)
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    fetchItems().then((data) => {
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
