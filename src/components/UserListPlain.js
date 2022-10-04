import { getIdGenerator, wait } from '../lib'
import { useState, useEffect } from 'react'

const getNextId = getIdGenerator()

const DATA = [
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
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data)
    })
  }, [])

  return (
    <div>
      <h2>ユーザ一覧</h2>
      <div>
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
      <button
        onClick={() => {
          console.log('clicked...')
          const kudo = { id: getNextId(), name: 'kudo' }
          const newState = [...users, kudo]
          setUsers(newState)
        }}
      >
        update
      </button>
    </div>
  )
}

export default UserListPlain
