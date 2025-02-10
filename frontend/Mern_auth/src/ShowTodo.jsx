import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { editTodo,deleteTodo,todoComplete } from './store/todoReducer';
const ShowTodo = ({item}) => {

    const [todoMsg,setTodoMsg] = useState(item.content);
    const [editable,setEditable] = useState(false)
    const dispatch = useDispatch();

    // update handler to update the todo.
    const editTodoItem = function (){
        if(!todoMsg) return;
        if(!editable){
            setEditable((prev)=>!prev);
        }else{
            // console.log(todoMsg);
            dispatch(editTodo({_id:item._id,todoMsg}))
            setEditable((prev)=>!prev)
        }
    }


    // delete handler to delete the todo
    const deleteTodoHandler = ()=>{
        dispatch(deleteTodo(item._id))
    }
    // todo complete handler
    const todoCompleteHandler = ()=>{
        if (!editable){
            dispatch(todoComplete(item._id))
        }
    }


  return (
    <div className='p-2 w-full bg-white/10 max-w-3xl flex flex-row gap-1 rounded'>
        <div className='flex flex-row w-full max-w-2xl gap-1'>
            <input 
                type="checkbox" 
                className=''
                onChange={todoCompleteHandler}
                checked={item.completed}
            />
            <input 
                type="text"
                className={`w-full p-1 max-w-2xl bg-transparent rounded outline-none 
                ${editable?"outline bg-white cursor-text":""}
                ${item.completed?"line-through":""}`}
                onChange={(event)=>setTodoMsg(event.target.value)}
                value={todoMsg} 
                readOnly={!editable}
            />
        </div>
        <div className='flex flex-row gap-1.5'>

            <button 
                className = {`bg-yellow-200 py-1 px-2 rounded ${editable?"bg-purple-600":""}`}
                onClick={editTodoItem}
                disabled={item.completed}
                >{editable?"Save":"Edit"}
            </button>

            <button 
                className='bg-red-500 py-1 px-2 rounded'
                onClick={deleteTodoHandler}>
                Delete
            </button>
        </div>
    </div>
  )
}

export default ShowTodo