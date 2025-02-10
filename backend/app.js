import express from 'express';
import cors from 'cors';
import todoRouter from './routes/todo.routes.js';
const app = express();

// handling cors middleware
app.use(cors({
    origin:"*",
}));


// handling static file middleware
app.use(express.static('public/temp'));

// handling json parser middleware
app.use(express.json());

// routing
app.use('/api/v1/todos',todoRouter);



export default app;