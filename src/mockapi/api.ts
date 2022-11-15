import { getIdGenerator, wait } from '~/lib'
import { Item } from '~/utils/types'

const getNextItemId = getIdGenerator()

const createItem = (
  name: string,
  color: string,
  price: number,
  category: string
): Item => {
  return { id: getNextItemId(), name, color, price, category }
}

const ITEM_TABLE: Item[] = [
  { ...createItem('Apple MacBook Pro 17', 'Sliver', 2999, 'Laptop') },
  { ...createItem('Microsoft Surface Pro', 'White', 1999, 'Laptop') },
  { ...createItem('Magic Mouse 2', 'Black', 99, 'Accessories') },
]

export const fetchItems = async () => {
  await wait(1)
  return [...ITEM_TABLE]
}
