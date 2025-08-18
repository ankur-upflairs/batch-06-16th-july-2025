import React, { useContext, useEffect, useState } from "react";
import { taskContext } from "./TaskContext";
import axios from "axios";

function UpdateTask({ id, setIsEdit ,setIsChange}) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    date: "",
  });
  function handleChange(e) {
    setTask({ ...task, [e.target.name]: e.target.value });
  }
  useEffect(() => {
    async function getData() {
      let res = await axios.get("http://localhost:3000/tasks/" + id);
      setTask(res.data);
    }
    getData();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.put("http://localhost:3000/tasks/"+id, task);
    setTask({
      title: "",
      description: "",
      date: "",
    });
    setIsChange(id) 
    setIsEdit(null)
    console.log(task);
  }
  return (
    <main>
      <h2>Update Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          onChange={handleChange}
          value={task.title}
          type="text"
          name="title"
          placeholder="Enter task title"
          required
        />
        <label>Description</label>
        <textarea
          onChange={handleChange}
          value={task.description}
          name="description"
          placeholder="Task description"
        ></textarea>
        <label>Due Date</label>
        <input
          onChange={handleChange}
          value={task.date}
          name="date"
          type="date"
        />
        <button type="submit">Update Task</button>
        <button onClick={() => setIsEdit(null)} type="button">
          Cancel
        </button>
      </form>
    </main>
  );
}

export default UpdateTask;
