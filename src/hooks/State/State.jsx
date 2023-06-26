import { useState } from "react"

export default function State() {

  const [counter, setCounter] = useState(0)

  const updateUp = () => setCounter(prev => prev + 1);
  const updateDown = () => {
    if (counter > 0) {
      setCounter(prev => prev - 1)
    } 
  }
  const Reset = () => setCounter(0);


  return (
    <>
      <h1>{counter}</h1> 
      <button onClick={updateUp}>+</button>
      <button onClick={updateDown}>-</button>
      <br/>
      <button onClick={Reset}>Reset</button>
    </>
  )
}
