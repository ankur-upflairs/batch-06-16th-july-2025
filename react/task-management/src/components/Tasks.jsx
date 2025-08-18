import React, { useContext, useEffect, useState } from "react";
import { taskContext } from "./TaskContext";
import axios from "axios";
function Tasks() {
  const [tasks,setTasks] = useState([])
  useEffect(() => {
    async function getData() {
      let res = await axios.get('http://localhost:3000/tasks')
      // console.log(res.data)
      setTasks(res.data)
    }
    // async function getData() {
    //   let res = await axios.get('http://localhost:3000/tasks')
    //   console.log(res.data)
    //   setTasks(res.data)
    // } 
  getData()  
  },[])
  
  return (
    <main>
      <h2>Welcome to Task Manager</h2>
      <p>Manage your tasks efficiently with this simple system.</p>
      <section class="task-section">
        <h3>Recent Tasks</h3>
        {tasks.map((task, i) => {
          return (
            <div class="task-card">
              <h4>{task.title}</h4>
              <p>{task.description}</p>
              <p>
                <strong>Due:</strong> {task.date}
              </p>
            </div>
          );
        })}
      </section>
      {/* <section class="task-section">
      <h3>Recent Tasks</h3>
      <div class="task-card">
        <h4>Submit Project Report</h4>
        <p>Finalize and email the project report by tomorrow.</p>
        <p><strong>Due:</strong> 2025-05-07</p>
      </div>
      <div class="task-card">
        <h4>Buy Groceries</h4>
        <p>Get milk, vegetables, and bread from the market.</p>
        <p><strong>Due:</strong> 2025-05-08</p>
      </div>
      <div class="task-card">
        <h4>Meeting with Client</h4>
        <p>Discuss feedback and future plans.</p>
        <p><strong>Due:</strong> 2025-05-10</p>
      </div>
    </section> */}
    </main>
  );
}

export default Tasks;
