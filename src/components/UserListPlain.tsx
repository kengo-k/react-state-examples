import { useState, useEffect } from 'react'

import { TabId, Tabs } from '~/components/Tabs'
import { getIdGenerator, wait } from '~/lib'
import { User } from '~/utils/types'

const getNextId = getIdGenerator()

const DATA: User[] = [
  { id: getNextId(), name: 'yamada' },
  { id: getNextId(), name: 'tanaka' },
  { id: getNextId(), name: 'suzuki' },
]

const fetchUsers = async () => {
  await wait(1)
  return DATA
}

const UserListPlain = () => {
  console.log('render start...')
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data)
    })
  }, [])

  // return (
  //   <div>
  //     <h2>ユーザ一覧</h2>
  //     <div>
  //       {users.map((user) => (
  //         <div key={user.id}>{user.name}</div>
  //       ))}
  //     </div>
  //     <button
  //       onClick={() => {
  //         console.log('clicked...')
  //         const kudo = { id: getNextId(), name: 'kudo' }
  //         const newState = [...users, kudo]
  //         setUsers(newState)
  //       }}
  //     >
  //       update
  //     </button>
  //   </div>
  // )
  return (
    <Tabs initialTab="use_state">
      <div>Hello,useState</div>
    </Tabs>
  )
}

export default UserListPlain
