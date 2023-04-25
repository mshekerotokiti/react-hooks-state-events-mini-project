import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit }) {
  const [text, setText] = useState("")
  const [category, setCategory] = useState("")


  function handleChange(e){
    setText(e.target.value)
  }

  function handleCategoryChange(e){
    setCategory(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
   
    onTaskFormSubmit({text, category})

  }
  
  return (
    <form className="new-task-form" onSubmit={(e) => handleSubmit(e)}>
      <label>
        Details
        <input type="text" name="text" value = {text} onChange= {handleChange}/>
      </label>
      <label>
        Category
        <select name="category" value = {category} onChange = {handleCategoryChange}>
          <option></option>
          {/* render <option> elements for each category here */}
          {categories.map((category) => <option key = {category} >{category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
