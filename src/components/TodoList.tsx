import React from 'react';
import { Todo } from '../models/Todo';

const TodoList = () => {

    const todos: Todo[] = [
        { id: 1, title: 'Ir ao supermecado', done: false },
        { id: 2, title: 'Passear com cachorro', done: true },
    ];   

    return(
        <div>Todo Content</div>
    );
}

export default TodoList;