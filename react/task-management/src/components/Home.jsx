import React, { useState } from 'react'
import Tasks from './Tasks'
import AddTask from './AddTask'
import ViewTask from './ViewTask'

function Home() {
    let navOptions = ["Home","Add Task","View Tasks"]
    const [selectedTab,setSelectedTab] = useState(0)
    function changeTab(index){
        setSelectedTab(index)
    }
  return (<>
     <nav>
    <h1>Task Manager</h1>
    <ul>
        {navOptions.map((v,i)=>{
            return <li key={i} onClick={()=>changeTab(i)}>{v}</li>
        })}
      {/* <li>Home</li>
      <li>Add Task</li>
      <li>View Tasks</li> */}
    </ul>
  </nav>
    {/* {selectedTab == 0 ? 'home' : null}
    {selectedTab == 1 && 'Add Task'}
    {selectedTab == 2 && 'View Task'} */}
    {selectedTab == 0 && <Tasks />}
    {selectedTab == 1 && <AddTask />}
    {selectedTab == 2 && <ViewTask />}
    
  </>    
  )
}

export default Home