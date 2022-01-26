import React, { useState, useEffect } from 'react'
import ToDoItem from './ToDoItem'
interface taskProps  {
  id: number;
  name: string;
  completed: boolean;
}
function ToDoList() {
    const [task, setTask] = useState<string>('')
    //const [allTask, setAllTask] = useState([{}] as taskProps[]) 
   const [allTask, setAllTask] = useState<taskProps[]>([]) 
  useEffect(() => {
    //localStorage.removeItem("task")
    if (localStorage.getItem("task")) {
        setAllTask(JSON.parse(localStorage.getItem("task") as string));
      }
        
    },[])
    const handleChange = (e:any) => {
        setTask(e.currentTarget.value);
    }
    const addToList = (e: any) => {
        e.preventDefault();
        var b = { name: task, completed: false, id: allTask.length+1}
        setAllTask([...allTask, b])
        setTask('')
       localStorage.setItem("task",JSON.stringify([...allTask, b]))
    } 
  const handleChecked = (id: number) => {
    const arr = allTask.map(i => {
      if (i.id === id) {
        i.completed = !i.completed;
      }
      return i;
    });
      setAllTask(arr)
    localStorage.setItem("task",JSON.stringify(arr))
    //console.log(allTask);
  }
  const handleDelete = (id: number) => {
    var counter = 0;
    var n = allTask.filter(i => {
      if (id !== i.id) { 
        return i;
      }
    });
    var nn = n.map(i => {
      i.id = counter++;
      return i;
    })
    setAllTask(nn)
    localStorage.setItem("task",JSON.stringify(nn))
    //console.log(n)  
  }
  return (
      <div className='container'>
          <form onSubmit={addToList}>
            <input type='text' value={task} onChange={handleChange} />
            <input type='submit' value='submit'/>
            <div className="taskList">
               <ul className=''> {
                  allTask?.map((i) =>
                    <ToDoItem
                      i={i}
                      key={i.id}
                      handleChecked={()=> handleChecked(i.id)}
                      handleDelete={()=>handleDelete(i.id)}
                    />
                    )
                  }
                  
              </ul> 
            </div>
          </form> 
    </div>
  )
}

export default ToDoList
