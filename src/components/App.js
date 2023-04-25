import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
    //we need to update some data (add task button) so we need to use state
    const [tasks,  setTasks] = useState(TASKS);
    const [selectedCategory, setSelectedCategory] = useState("All")

    function handleDelete(deletedText){
      setTasks(tasks.filter(task => task.text !== deletedText))   //filter and give array that doesnt contain deleted text
       
    }

    function handleSelectedCategory(category){
      setSelectedCategory(category)
    }
    const filteredTasks = tasks.filter((task) => task.category === selectedCategory || selectedCategory === "All")   //only display selected tasks
   
     const addNewTask = (newTask) => {
      setTasks([...tasks, newTask])
     }
    return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} selectedCategory = {selectedCategory} handleSelectedCategory={handleSelectedCategory}/> 
      <NewTaskForm categories = {CATEGORIES.filter(category => category !== "All") } onTaskFormSubmit ={addNewTask}/>
      <TaskList tasks = {filteredTasks} handleDelete = {handleDelete}/>
    </div>
  );
}

export default App;