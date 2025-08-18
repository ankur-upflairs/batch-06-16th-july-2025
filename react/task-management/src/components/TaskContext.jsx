import React, { createContext, useState } from 'react'

export const taskContext = createContext(null)
let initialState = [{
    title:'Submit Project Report',
    description:'Finalize and email the project report by tomorrow.',
    date:'2025-05-07'
}]
function TaskContext({children}) {
    const [tasks,setTasks] = useState(initialState)
    function addTask(task) {
        setTasks([...tasks,task])
    }
    function deleteTask(index) {
        setTasks(tasks.filter((task,i)=> i != index))
    }

  return (
    <taskContext.Provider value={{tasks,setTasks,addTask}} >
        {children}
    </taskContext.Provider>
  )
}

export default TaskContext