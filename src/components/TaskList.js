import React from "react";
import Task from "./Task"

function TaskList({tasks, handleDelete}) {
  const taskList = tasks.map((task) => 
  <Task
  key = {task.text}   //we need a unique key, with different details form each other
  text = {task.text}
  category = {task.category}
  handleDelete = {handleDelete}
  
  />)
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {taskList}
    </div>
  );
} 

export default TaskList;
