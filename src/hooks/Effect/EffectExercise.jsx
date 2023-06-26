// import { useState, useEffect } from "react"

// export const EffectExercise = () => {

// const [counter, setCounter] = useState(0)

//   useEffect(()=> {
//     console.log("update");
//   }, [counter])

//   const update = () => setCounter( prev => prev + 1 )

//   return (
//     <div>
//       <div>
//         <h1>{counter}</h1>
//       </div>
//       <div>
//         <button onClick={update}>Click</button>
//       </div>
//     </div>
//   )
// }

// ??????????????????????????????????????????????????????????????????????????????????//


// import { useState, useEffect } from "react"

// export const EffectExercise = () => {

//   const [users, setUsers] = useState([])


//   //useEffect for fetch api data and store in users state
//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => setUsers(data))
//     return () => { return false }
//   }, [])
  
//   //useEffect for use data api in my App
//   useEffect(() => {
//     if(users.length > 0 ) console.log(users);
//   }, [users])

//   return (
//     <div>
//       {
//         users.map(
//           user => <h3 key={user.id} >{user.name}</h3>
//         )
//       }
//     </div>
//   )
// }



/////////////////////////////////////////////////////////////////////////////////////////


import { useState, useEffect } from "react"

export const EffectExercise = () => {

  const [users, setUsers] = useState([])
  const [filteredUsers, setFilteredUsers] = useState([])


  //useEffect for fetch api data and store in users state
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
    return () => { return false }
  }, [])
  
  //useEffect for use data api in my App
  // useEffect(() => {
  //   if(users.length > 0 ) console.log(users);
  // }, [users])

  // function to show names that I will search about it.
  //////////////// Way-1 /////////////////
  // const handleChange = (e) => {
  //   const filter = users.filter(
  //     user => user.name.toLowerCase().includes(e.target.value)
  //   )
  //   setFilteredUsers(filter);
  //}
  /////////////// Way-2 --> Simple //////////////////
  //State
  const [inputValue, setInputValue] = useState('')
  //Function
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  //useEffect
  useEffect(() => {
    setFilteredUsers(users.filter(user => user.name.toLowerCase().includes(inputValue)));
  }, [inputValue])
  


  //useEffect to show the first time when loading
  useEffect(() => {
    setFilteredUsers(users)
  }, [users])

  return (
    <div>
      <input type="text" className="search" onInput={handleChange} />
      {
        filteredUsers.map(
          user => <h3 key={user.id} >{user.name}</h3>
        )
      }
    </div>
  )
}