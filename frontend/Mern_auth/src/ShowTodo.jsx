import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTodo, deleteTodo, todoComplete } from './store/todoReducer';

const ShowTodo = ({ item }) => {
  const [todoMsg, setTodoMsg] = useState(item.content);
  const [editable, setEditable] = useState(false);
  const dispatch = useDispatch();

  const editTodoItem = function () {
    if (!todoMsg) return;
    if (!editable) {
      setEditable((prev) => !prev);
    } else {
      dispatch(editTodo({ _id: item._id, todoMsg }));
      setEditable((prev) => !prev);
    }
  };

  const deleteTodoHandler = () => {
    dispatch(deleteTodo(item._id));
  };

  const todoCompleteHandler = () => {
    if (!editable) {
      dispatch(todoComplete(item._id));
    }
  };

  return (
    <div className='p-4 w-full bg-white/20 backdrop-blur-md max-w-3xl flex flex-row gap-2 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out'>
      <div className='flex flex-row w-full max-w-2xl gap-2 items-center'>
        <input
          type="checkbox"
          className='w-5 h-5 cursor-pointer'
          onChange={todoCompleteHandler}
          checked={item.completed}
        />
        <input
          type="text"
          className={`w-full p-2 max-w-2xl bg-transparent rounded outline-none transition-all duration-300 ease-in-out
            ${editable ? 'outline bg-white cursor-text' : ''}
            ${item.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}
          onChange={(event) => setTodoMsg(event.target.value)}
          value={todoMsg}
          readOnly={!editable}
        />
      </div>
      <div className='flex flex-row gap-2'>
        <button
          className={`py-1 px-3 rounded text-white font-bold transition duration-300 ease-in-out transform hover:scale-105
            ${editable ? 'bg-purple-600 hover:bg-purple-700' : 'bg-yellow-400 hover:bg-yellow-500'}`}
          onClick={editTodoItem}
          disabled={item.completed}
        >
          {editable ? 'Save' : 'Edit'}
        </button>
        <button
          className='bg-red-500 hover:bg-red-600 py-1 px-3 rounded text-white font-bold transition duration-300 ease-in-out transform hover:scale-105'
          onClick={deleteTodoHandler}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ShowTodo;