import {Router} from 'express';

import { Todo } from '../models/todo';          //named imprt therefore have to use curly braces not needed for default imports

let todos: Todo[] = [];

const router = Router();

router.get('/', (req,res,next) => {
    res.status(200).json({ todos:todos});
})

router.post('/todo',(req,res,next) => {
    const newTodo: Todo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(201).json({message:'added TOdo',todo: newTodo,todos:todos});
});


router.put('/todo/:todoId',(req,res,next) => {
    const tid = req.params.todoId;
    const todoIndex=todos.findIndex((todoItem) => todoItem.id ===tid);
    if(todoIndex >=0){
        todos[todoIndex] ={id: todos[todoIndex].id,text:req.body.text};
        return res.status(200).json({message:'updated todo',todos : todos})
    }
    res.status(404).json({message:'could not find todo for this id.'});
});


router.delete('/todo/:todoId',(req,res,next) =>{

    todos=todos.filter(todoItem => todoItem.id !== req.params.todoId);
    res.status(200).json({message:'deleted todo',todos:todos});
})

export default router;