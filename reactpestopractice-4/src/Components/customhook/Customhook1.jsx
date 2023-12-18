import React from 'react'
import {useCounter} from "../../hooks/useCounter";
function Customhook1() {
    const [count, increment,decrement,reset] = useCounter(0);
  return (
    <div>
        <h1>Customhook1 {count}</h1>
        <button onClick={()=>increment(5)}>Increment</button>
        <button onClick={()=>decrement(5)}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Customhook1