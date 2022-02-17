import React,{useEffect, useState} from 'react';

const Counter=()=> {
    const [count,setCount] = useState(0)
    const countup=()=>{
        setCount(prevState=>prevState+1)
    }
    const countDown=()=>{
        setCount(prevState=>prevState-1)
    }
    useEffect(()=>{
        console.log("Current count is ...",count)
    },[count])
  return( 
  <div>
      <p>現在:{count}</p>
      <button onClick={countup}>up</button>
      <button onClick={countDown}>down</button>
  </div>
  )
}

export default Counter;
