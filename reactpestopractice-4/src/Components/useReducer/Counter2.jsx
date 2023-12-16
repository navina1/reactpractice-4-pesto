import React, { useReducer } from 'react'

function Counter2() {
    const INITIALSTATE=0;
    const reducer=(state=INITIALSTATE,action)=>{
        switch(action.type){
            case "INCREMENT": return state+action.value;
            case "DECREMENT":return state-action.value;
            case "RESET":return INITIALSTATE;
            default:return state;
        }
    }
    const [state,dispatch]=useReducer(reducer,INITIALSTATE);
  return (
    <div>
        <h1>Counter {state}</h1>
        <h6>Passing action+payload</h6>
        <button onClick={()=>dispatch({type:"INCREMENT",value:5})}>Increment</button>
        <button onClick={()=>dispatch({type:"DECREMENT",value:2})}>Decrement</button>
        <button onClick={()=>{dispatch({type:"RESET"})}}>Reset</button>
    </div>
  )
}

export default Counter2