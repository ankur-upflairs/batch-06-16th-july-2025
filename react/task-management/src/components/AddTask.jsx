import React, { useContext, useState } from 'react'
import { taskContext } from './TaskContext'
import axios from 'axios'

function AddTask() {
    
    const [task,setTask] = useState({
        title:'',
        description: '',
        date:''
    })
    function handleChange(e) {
        setTask({...task,[e.target.name]:e.target.value})
    }
    async function handleSubmit(e) {
       e.preventDefault()
       await axios.post('http://localhost:3000/tasks',task)
       setTask({
        title:'',
        description: '',
        date:'' 
    })
       console.log(task)
    }
  return (
    <main>
    <h2>Add New Task</h2>
    <form onSubmit={handleSubmit}  >
      <label>Title</label>
      <input onChange={handleChange} value={task.title} type="text" name="title" placeholder="Enter task title" required />
      <label>Description</label>
      <textarea onChange={handleChange} value={task.description} name="description" placeholder="Task description"></textarea>
      <label>Due Date</label>
      <input onChange={handleChange} value={task.date} name="date" type="date" />
      <button type="submit">Add Task</button>
    </form>
  </main>
  )
}

export default AddTask