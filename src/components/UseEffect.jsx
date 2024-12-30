import React, { useEffect, useState } from 'react'

const UseEffect = () => {
  const [counter, setCounter] = useState(0)
  
  useEffect(() => {
    
    document.title = counter
  
  }, [counter])
  

  
  return (
    <div className='m-2'>
      <h1>UseEffect Hook</h1>
      <h1>{counter}</h1>
      <button className='pl-1 pr-1 text-black bg-white' onClick={()=>setCounter(counter+1)}>Click Me</button>
    </div>
  )
}

export default UseEffect