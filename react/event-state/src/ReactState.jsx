import React, { useState } from 'react'

//state is memory of component .
//when state changes then it updates the ui (re-render the component)
//it preserve the value b/w re-renders 
//state is immutable (not changable)
//to change the state use the setter function

function ReactState() {
    const [count,setCount] = useState(0)
    let x =0 
    function increase(){
        setCount(count + 1)
        x++;
        console.log(x)
    }
  return (
    <div>
        <button onClick={increase}>increase</button>
        {count} - {x}
        <button   >decrease</button>
    </div>
  )
}

export default ReactState