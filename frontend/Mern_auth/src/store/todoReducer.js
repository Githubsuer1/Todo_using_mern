import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import { useEffect } from 'react';


/**************** creating thunks that deals with async operations ***************/


// fetch todo 
export const fetchTodo = createAsyncThunk(
    'todos/fetchTodos',
    async ()=>{
        try {
            const response = await axios.get('https://todo-using-mern-zeta.vercel.app/api/v1/todos');
            // console.log(response);            
            return response.data;
        } catch (error) {
            console.log('error',error);
        }
    }
)

// add todo 
export const addTodo = createAsyncThunk(
    'todos/addTodo',
    async (newTodos)=>{
       try {
        const response = await axios.post(`https://todo-using-mern-zeta.vercel.app/api/v1/todos/add`,newTodos);
        return response.data;
       } catch (error) {
        console.log('error',error);
       }
    }
)

// edit todo 
export const editTodo = createAsyncThunk(
    'todos/editTodo',
    async (item)=>{
        try {
            // console.log(item.todoMsg)
            const response = await axios.patch(`https://todo-using-mern-zeta.vercel.app/api/v1/todos/edit/${item._id}`,{content:item.todoMsg});
            return response.data;
        } catch (error) {
          console.log("Update data error",error);
        }
       }
)

// delete todo
export const deleteTodo = createAsyncThunk(
    'todos/deleteTodo',
    async (id)=>{
        try {
          const response = await axios.delete(`https://todo-using-mern-zeta.vercel.app/api/v1/todos/delete/${id}`)
          return id;
        } catch (error) {
          console.log("Todo not deleted",error);
        }
      }
)

// todocomplete 
export const todoComplete = createAsyncThunk(
    'todos/todoCompleted',
    async (id)=>{
        try {
            if(id){
              const response = await axios.patch(`https://todo-using-mern-zeta.vercel.app/api/v1/todos/completed/${id}`);
              return response.data;
            //   setTodos((prevTodo)=>prevTodo.map((todo)=>id===todo._id?{...todo,completed:!todo.completed}:todo))
            }
          } catch (error) {
            console.log("Something went wrong marking complete todo");
          }
    }
)


const initialState = {
    items:[],
}


const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchTodo.fulfilled, (state,action)=>{
            state.items = action.payload;
        })
        .addCase(addTodo.fulfilled, (state,action)=>{
            state.items.push(action.payload);
        })
        .addCase(editTodo.fulfilled, (state,action)=>{
            state.items = state.items.map((todo)=>todo._id===action.payload._id?{...action.payload}:todo)
        })
        .addCase(deleteTodo.fulfilled, (state,action)=>{
            state.items = state.items.filter((todo)=>todo._id!==action.payload)
        })
        .addCase(todoComplete.fulfilled, (state,action)=>{
            state.items = state.items.map((todo)=>todo._id===action.payload._id?{...todo,completed:!todo.completed}:todo)
        })
    }
});

// export const {addTodo, getTodo, editTodo, removeTodo, todoComplete} = todoSlice.actions;
export default todoSlice.reducer;