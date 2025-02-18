import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/Todo/TodoSlice';



function Todo() {

    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();

    return (
        <>
            <div>Todos</div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}
                        <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todo;
