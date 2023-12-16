import React, { useReducer } from 'react'

function Counter1() {
    const INITIALSTATE=0;
    const reducer=(state=INITIALSTATE,action)=>{
        switch(action){
            case "INCREMENT":return state+1;
            case "DECREMENT":return state-1;
            case "RESET":return 0;
            default: return state;
        }
    }
    const [state,dispatch]=useReducer(reducer,INITIALSTATE);
  return (
    <div>
        <h1>Counter {state}</h1>
        <button onClick={()=>dispatch("INCREMENT")}>Increment</button>
        <button onClick={()=>dispatch("DECREMENT")}>Decrement</button>
        <button onClick={()=>dispatch("RESET")}>Reset</button>
    </div>
  )
}

export default Counter1