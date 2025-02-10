import { TodoHandler, addTodo, removeTodo, editTodo, todoComplete} from "../controllers/todo.controller.js";
import { Router } from "express";

const router = Router();

router.route('/').get(TodoHandler);
router.route('/add').post(addTodo);
router.route('/edit/:id').patch(editTodo);
router.route('/delete/:id').delete(removeTodo);
router.route('/completed/:id').patch(todoComplete);

export default router;