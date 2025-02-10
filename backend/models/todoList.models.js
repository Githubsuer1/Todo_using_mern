import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    completed:{
        type:Boolean,
    },
},
{timestamps:true});

const TodoList = mongoose.model("TodoList",todoSchema);
export default TodoList;