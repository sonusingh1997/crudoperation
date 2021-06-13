
import React, { useState, useEffect } from 'react'
var intialvalue = 0;
export const ClassLifeCycle = () => {
  const [count, setCount] = useState(intialvalue)
  const [like, setLike] = useState(0)
  console.log("render fun called every time");


  const DercreseHandle = () => {
    setCount(count-1)
  }
  
  const increaseHandle = () => {
    setCount(count+1)
  }
  const Like=() => {
    setLike(count*2);
  }
  useEffect(() => {
    console.log("useEffect")
    return () => {
      console.log("cleanup")
    }
  },[like]);

  return (
    <div>
      <h1>current count value is {count}</h1>
      <h2>current count value of like:{like}</h2> 
      <button onClick={DercreseHandle}>Decrement</button>
     
      <button onClick={increaseHandle}>Increment</button>
      <button onClick={Like}>Like </button>
      
    </div>
  )
}
