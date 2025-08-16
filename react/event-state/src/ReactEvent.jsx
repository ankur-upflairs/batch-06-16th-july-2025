import React from 'react'
//event name is camelcase
//write only function name (dont call it )
function Event() {
  function show(){
    alert(`you clicked the button`)
  }
  function greet(name){
    alert(`hi ${name} ,you clicked the button`)
  }
  return (
    <div>
      <button onClick={show}>click</button><br />
      <button onClick={()=>greet('pankaj')}>click here</button>
    </div>
  )
}

export default Event


