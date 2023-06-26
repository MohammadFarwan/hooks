import { useState, useMemo } from "react"
export const Memo = () => {

  const [counterOne, setCounterOne] = useState(0)
  const [counterTwo, setCounterTwo] = useState(0)

  const changeOne = () => {setCounterOne(prev => prev + 1)}
  const changeTwo = () => {setCounterTwo(prev => prev + 1)}

  // Way very slow don't forget put the () for isEven which between br
  // const isEven = () => {
  //   let i = 0
  //   while (i < 200000000 ) i++
  //   return counterOne % 2 === 0 
  // }

    const isEven = useMemo(() => {
    let i = 0
    while (i < 400000000 ) i++
    return counterOne % 2 === 0 
  }, [counterOne])


  return (
    <div>
      <button onClick={changeOne}> {counterOne}</button>
      <br />
      {isEven ? "Even" : "Odd"}
      <br />
      <button onClick={changeTwo}> {counterTwo}</button>
    </div>
  )
}