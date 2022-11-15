import { ItemTable } from './ItemTable'
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
    return (
      <div className="flex justify-center">
        <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
      </div>
    )
  }

  return <ItemTable items={items} />
}

export default UserListPlain
