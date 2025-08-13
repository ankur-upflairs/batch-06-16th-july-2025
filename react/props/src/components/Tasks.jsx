import React from 'react'
import SingleTask from './SingleTask'
import { tasks } from './data'

function Tasks() {
  return (
    <div>
       {tasks.map((task,i)=>{
        return <SingleTask key={i} {...task} />
       })}
    </div>
  )
}

// function Tasks() {
//   return (
//     <div>
//         {/* <SingleTask /> */}
//         <SingleTask title='to complete project' description="Complete project before deadline"
//         date="2025-11-11" />
//         <SingleTask title='complete assignment' description="Complete assignment before deadline"
//         date="2025-11-11" />
//         <SingleTask title={tasks[0].title} description={tasks[0].description}
//         date={tasks[0].date} />
//         {/* spread operator  */}
//         <SingleTask {...tasks[1]} />
//     </div>
//   )
// }



// function Tasks() {
//   return (
//     <div>
//         {/* <SingleTask /> */}
//         <SingleTask title='to complete project' description="Complete project before deadline"
//         date="2025-11-11" />
//         <SingleTask title='complete assignment' description="Complete assignment before deadline"
//         date="2025-11-11" />
//     </div>
//   )
// }

export default Tasks 