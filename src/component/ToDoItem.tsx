import React from 'react'
interface getToDoItemProps {
    i: {
        name: string;
        id: number;
        completed: boolean;
    }
    handleChecked: (a: number)=> void;
    handleDelete: (a: number)=> void;
}
function ToDoItem({i,handleChecked, handleDelete}:getToDoItemProps) {
  return (
    <div>
      <li className='todoitem'>
            <input
                type="checkbox"
                name="task"
                value="task"
                checked = {i.completed}
                onChange={() => handleChecked(i.id)}
            />
            <span className='task-item' style={{textDecoration: i.completed ? 'line-through' : 'none'}}>{i.name}</span>
              <span
                  className='delete-bar'
                onClick={()=> handleDelete(i.id)}
             >delete</span>
        </li>
    </div>
  )
}

export default ToDoItem
