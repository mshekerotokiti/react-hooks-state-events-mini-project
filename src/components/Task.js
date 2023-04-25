import React from "react";

function Task({text, category, handleDelete}) {

  function handleClick(){
   //we dont have access to state from here so we need to get access from the parent component
   //pass a delete function from app to tasklist to task as a prop

   handleDelete(text)   //we pass in tet cause it is the unique identifier

  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button  className="delete" onClick = {handleClick}>X</button>
    </div>
  );
}

export default Task;