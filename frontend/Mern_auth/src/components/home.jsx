import { useState, useEffect } from 'react';
import React from 'react';
import AddTodo from '../AddTodo';
import ShowTodo from '../ShowTodo';
import {useSelector,useDispatch} from 'react-redux';
import { fetchTodo } from '../store/todoReducer';


function Home() {

  const dispatch = useDispatch(); 
  const todos = useSelector((state) => state.todos.items);
  // console.log(todos);
  
  // fetch the data from backend 
  useEffect(()=>{
    dispatch(fetchTodo())
  },[dispatch])





  if (!todos) return (
    <div className='w-full max-w-3xl h-28 p-2'>
        <AddTodo/>
        <div>Add Todo Items</div>
    </div>
  )

  return (
    <div className='bg-gray-700 w-full min-h-screen sm:h-screen  p-3 flex flex-col items-center'>
      <div className='w-full max-w-3xl h-28 p-2'>
        <AddTodo/>
      </div>

      <div className='w-full max-w-3xl'>
      {
          todos.map((item)=>(
            <div key={item._id} className='p-2 w-full max-w-3xl'>
              <ShowTodo item={item}/>
            </div>
          ))
        }
      </div>
        
    </div>
  )
}

export default Home;










/* <ShowTodo 
  deleteTodo={deleteTodo} 
  editTodo={editTodo} 
  todoComplete={todoComplete} 
  item={item}
/> 
*/



/* 

const [todos,setTodos] = useState([]);
/***********     1. displaying all todos       *****************
  useEffect(()=>{
    axios.get('/api/v1/todos')
    .then(
      (response)=>{
        setTodos(response.data)
      }
    )
  },[])


/*****************  2. add todos *****************
    const addTodo = async ({data,todoCompleted})=>{
      try {
        const response = await axios.post('/api/v1/todos/add',{data,todoCompleted});
        // console.log(response.data)
        // console.log("Data added successfully",response.data)
        setTodos((prevTodo)=> [...prevTodo, {...response.data}])
      } catch (error) {
        console.log("Error data adding",error)
      }
    }
  

/******************  3. edit todos  ****************
   const editTodo = async (id,todoMsg)=>{
    try {
      const response = await axios.put(`/api/v1/todos/edit/${id}`,{todoMsg});
      // console.log('Data updated',response.data)
    } catch (error) {
      console.log("Update data error",error);
    }
   }


/************** 4. deleting the todos  *******************
  const deleteTodo = async (id)=>{
    try {
      await axios.delete(`/api/v1/todos/delete/${id}`)
      .then(()=>{
        setTodos((prevTodo)=>prevTodo.filter((todo)=>todo._id!==id))
      })
    } catch (error) {
      console.log("Todo not deleted",error);
    }
  }

/************ 5. todo complete  *********************
const todoComplete = async (id)=>{
  try {
    if(id){
      const response = await axios.put(`/api/v1/todos/completed/${id}`);
      console.log("Todo completed marked",response);
      setTodos((prevTodo)=>prevTodo.map((todo)=>id===todo._id?{...todo,completed:!todo.completed}:todo))
    }
  } catch (error) {
    console.log("Something went wrong marking complete todo");
  }
}

*/