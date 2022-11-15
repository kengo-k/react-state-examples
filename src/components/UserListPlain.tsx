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

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg my-4">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Product name
            </th>
            <th scope="col" className="py-3 px-6">
              Color
            </th>
            <th scope="col" className="py-3 px-6">
              Category
            </th>
            <th scope="col" className="py-3 px-6">
              Price
            </th>
            <th scope="col" className="py-3 px-6">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.name}
                </th>
                <td className="py-4 px-6">{item.color}</td>
                <td className="py-4 px-6">{item.category}</td>
                <td className="py-4 px-6">${item.price}</td>
                <td className="py-4 px-6 text-right">
                  <a
                    href="#"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UserListPlain
