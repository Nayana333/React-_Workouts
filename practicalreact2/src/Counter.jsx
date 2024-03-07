import React from 'react'

const Counter = (props) => {
  return (
    <div>
      <h1>Counter:{props.count}</h1>
      <button onClick={props.counter}></button>
    </div>
  )
}

export default Counter
