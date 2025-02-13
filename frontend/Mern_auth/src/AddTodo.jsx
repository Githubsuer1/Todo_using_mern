import React, { useState } from 'react';
import { addTodo } from './store/todoReducer';
import { useDispatch } from 'react-redux';

function AddTodo() {
  const [data, setData] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!data) return;
    dispatch(addTodo({ data, todoCompleted: false }));
    setData('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='w-full max-w-3xl h-24 bg-white/20 backdrop-blur-md flex flex-row items-center rounded-lg p-4 shadow-lg'>
        <div className='flex flex-row w-full gap-2'>
          <input
            type="text"
            className='w-full max-w-3xl px-4 py-2 rounded-md outline-none bg-white/70 placeholder-gray-600 focus:bg-white focus:ring-2 focus:ring-blue-500'
            placeholder='Enter the todos'
            value={data}
            onChange={(event) => setData(event.target.value)}
          />
          <button
            type='submit'
            className='bg-green-500 hover:bg-green-600 py-2 px-4 rounded text-white font-bold transition duration-300 ease-in-out transform hover:scale-105'
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

export default AddTodo;