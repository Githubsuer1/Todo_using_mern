import TodoList from '..//models/todoList.models.js';
import APIError from '../middlewares/APIError.js'

// fetch todos controller
async function TodoHandler(req,res) {
    try {
        const allTodos = await TodoList.find({});
        res.status(200).json(allTodos);
    } catch (error) {
        throw new APIError(404,"Data not found!")
    }
   
}

// add todo controller
async function addTodo(req,res){
    try {
        const {data} = req.body;
        if (!data) return null;
        const newTodo = await TodoList.create({
            content:data,
            completed:false
        });            
        return res.status(200).json(newTodo);
    } catch (error) {
        throw new APIError(500,"Something went wrong durung add todo operation!")
    }

}


// edit todo controller
async function editTodo(req,res) {
    try {

        // getting the id and content send by front end
        const id = req.params.id;
        const content = req.body.content;

        // console.log(req.body.content)
        // console.log(id)

        if(!id) throw new APIError(400,"Id is required to update the todo item");
        if(!content) throw new APIError(400,"Content is required to update the todo item");

        // updating the content on mongodb database
        const updatedMsg = await TodoList.findByIdAndUpdate(id,{content:content},{new:true});
        // console.log(updatedMsg);

        if(!updatedMsg) throw new APIError(400,"Todo item not found!")
        res.status(200).json(updatedMsg);

    } catch (error) {
        throw new APIError(404,"Unable to update the todo item!")
    }
    
}

// remove todo controller
async function removeTodo(req,res){
    try {
        const id = req.params.id;
        // console.log(id);
        const deletedTodo = await TodoList.findByIdAndDelete(id);
        // console.log(deletedTodo)
        if(!deletedTodo){
            res.status(400).send(json({message:"todo not found"}))
        }
        res.status(200).json({msg:"Deleted successfully"});
    } catch (error) {
        throw new APIError(204,"Something went wrong during todo deletion!")
    }

}


// todo complete controller 
async function todoComplete(req,res){
    const id = req.params.id;
    try {
        const user = await TodoList.findById(id);
        // console.log(user.completed);
        const completeTodo = await TodoList.findByIdAndUpdate(id,{completed:!user.completed});
        res.status(200).json(completeTodo);
    } catch (error) {
        console.log("todo not completed!!",error);
    }
}




// exporting controllers
export {
    TodoHandler,
    addTodo,
    editTodo,
    removeTodo,
    todoComplete
};