import { spawn } from 'child_process';
import React from 'react';
import { Todo } from '../models/Todo';

const TodoList = () => {

    const todos: Todo[] = [
        { id: 1, title: 'Ir ao supermecado', done: false },
        { id: 2, title: 'Passear com cachorro', done: true },
    ];   

    return(
        <table className="uk-table">
            <caption>Lista de Tarefas</caption>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Tarefa</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map(
                        todo => (<div key={todo.id}>{todo.title}</div>)
                    )
                }
            </tbody>
        </table>
    );
}

export default TodoList;