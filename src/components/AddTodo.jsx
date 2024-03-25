import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/Todo/TodoSlice';

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('')
    }

    return (
        <div>
            <form onSubmit={addTodoHandler} className="flex">
                <input
                    value={input}
                    type="text"
                    placeholder="Write Todo..."
                    className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
                >
                    Add
                </button>
            </form>
        </div>
    );
}

export default AddTodo;
