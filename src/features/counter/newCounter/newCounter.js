import React from 'react'
import { useState } from 'react'
import useCounter from './useCounter'

export default function NewCounter() {
  const [changeValue, setChangeValue] = useState(0)
  const { count, increment, decrement, setByAmount, reset } = useCounter()
  return (
    <div>
    <h1>Counter app</h1>
        <p>Count: {count}</p>
        <button onClick={() => increment()}>add</button>
        <button onClick={() => decrement()}>subtract</button>
        <input type='number' value={changeValue} onChange={(e) => setChangeValue(e.target.value)}></input>
        <button onClick={() => setByAmount(changeValue)}>add/remove amount</button>
        <button onClick={() => reset()}>reset</button>
    </div>
  )
}
