import React, { useState } from "react";

import { MdDelete } from "react-icons/md";
import './List.css'
import './New-todo'

export function List({id, title, checked, onDelete}) {

  const [isChecked, setChecked] = useState(checked)

  const handleToggleCheck = () => {
    setChecked(!isChecked);
  };


  return(
    <div className="list-inteface">
      <ul className="todo-list">
        <li></li>
        <span
          className={`todo ${isChecked ? 'checked' : ''}`}
          onClick={handleToggleCheck}
        >
          {title}
        </span>

        <button
          type='button'
          className="delete-button"
          onClick={() => {
            onDelete(id);
            alert('Você deletou a Task:' + " " + title);
          }}
        >
          <MdDelete size={30} />
        </button>
      </ul>
    </div>
  )
}
