import React,{useState,useEffect} from 'react'
interface taskProps  {
    name: string
}
function ToDoList() {
    const [task, setTask] = useState<string>('')
    const [allTask, setAllTask] = useState([{}] as taskProps[]) 
    const [num,setNum] = useState<number[]>([])
    useEffect(() => {
        setAllTask(JSON.parse(localStorage.getItem("task") as string));
    },[])
    const handleChange = (e:any) => {
        setTask(e.currentTarget.value);
    }
    const addToList = (e: any) => {
        e.preventDefault();
        var b = { name: task}
        setAllTask([...allTask, b])
        setTask('')
        console.log(allTask);
       localStorage.setItem("task",JSON.stringify(allTask))
    } 

  return (
      <div className='container'>
          <form onSubmit={addToList}>
            <input type='text' value={task} onChange={handleChange} />
            <input type='submit' value='submit'/>
            <div className="taskList">
               <ul> {
                  allTask?.map((i,key) =>
                     <li key={i.name}>{i.name}</li>
                    )
                  }
                  
              </ul> 
            </div>
          </form> 
    </div>
  )
}

export default ToDoList
