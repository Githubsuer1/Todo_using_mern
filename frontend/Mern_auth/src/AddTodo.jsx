import React, { useState } from 'react'
// import axios from 'axios';
import { addTodo } from './store/todoReducer';
import { useDispatch } from 'react-redux';

function AddTodo() {
  const [data, setData] = useState('');
  const dispatch = useDispatch();

  // handlesubmit function to add todos by calling addTodo function getting via props
  const handleSubmit = (event)=>{
    event.preventDefault();
    if(!data) return;
    dispatch(addTodo({data,todoCompleted:false}));
    setData('');
  }

  return (
        <form onSubmit={handleSubmit}>
          <div className='w-full max-w-3xl h-24 bg-white/10  flex flex-row items-center rounded p-4'>
                <div className='flex flex-row w-full gap-2'>
                  <input 
                    type="text" 
                    className='w-full max-w-3xl px-2.5 rounded-md outline-none'
                    placeholder='Enter the todos'
                    value={data}
                    onChange={(event)=>setData(event.target.value)}
                    />
                    <button type='submit' className='bg-green-500 py-1.5 px-3 rounded text-white font-bold'>Add</button>
                </div>
          </div>
        </form>
  )
}

export default AddTodo