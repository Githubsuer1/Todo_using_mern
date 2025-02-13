import { useState, useEffect } from 'react';
import React from 'react';
import AddTodo from '../AddTodo';
import ShowTodo from '../ShowTodo';
import Footer from './footer';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodo } from '../store/todoReducer';

function Home() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);

  // Fetch the data from the backend
  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  if (!todos)
    return (
      <div className='w-full max-w-3xl h-28 p-2'>
        <AddTodo />
        <div>Add Todo Items</div>
      </div>
    );

  return (
    <div className='bg-gradient-to-r from-blue-500 to-purple-600 w-full min-h-screen p-3 flex flex-col items-center'>
      {/* Sticky Input Box */}
      <div className='w-full max-w-3xl p-2 sticky top-16 z-40 '>
      <h1 className='text-center text-2xl sm:text-4xl font-bold p-2'>Todo App</h1>
        <AddTodo />
      </div>

      {/* Scrollable container for todo items */}
      <div className='w-full max-w-3xl flex-1 overflow-y-auto mt-4' style={{ maxHeight: 'calc(100vh - 200px)' }}>
        {todos.map((item) => (
          <div key={item._id} className='p-2 w-full max-w-3xl'>
            <ShowTodo item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;