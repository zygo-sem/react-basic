import React, { useReducer } from 'react'

const initialState = 0
const reducer = (currentState, action) => {
  switch(action) {
    case 'add_1':
      return currentState + 1
    case 'multiple_3':
      return currentState * 3
    case 'reset':
      return initialState
    default:
      return currentState
  }
}

const BasiicReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <div>Count {count}</div>
      <button onClick={()=>dispatch('add_1')}>Add + 1</button>
      <button onClick={()=>dispatch('multiple_3')}>Multiple_3</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}

export default BasiicReducer
