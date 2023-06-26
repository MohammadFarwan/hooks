import { useEffect, useState } from "react"

export default function Effect() {

  const [inputValue, setInputValue] = useState('')
  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    return () => {return false}
    }, [])
  
  useEffect(() => {
    const filter = users.filter(
      user => user.name.toLowerCase().includes(inputValue)
    )
    setFilteredUsers(filter);
  }, [inputValue])

  useEffect(()=> {
    setFilteredUsers(users)
  } , [users])

  

  return (
    <>
    <input type="text" className="search" onInput={(e) => setInputValue(e.target.value)} />
    {
      filteredUsers.map(user => (
        <h3 key={user.id}>
          {user.name}
        </h3>
      ))
    }
    </>
  )
}
