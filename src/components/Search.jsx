
import { useState } from 'react';
import darkButtonImage from '../assets/icon-moon.svg';

export const Search = ({ onAddTodo }) => {
    const [newTodo, setNewTodo] = useState('');  
    const handleNewTodoChange = (event) =>{
        setNewTodo(event.target.value);
    }

    const handleKeyPress = ( event ) => {
        if (event.key === 'Enter' && newTodo.trim() !== '') {
            onAddTodo(newTodo);
            setNewTodo('');
        }
    }
    return (
        <header className="relative z-10 w-[30rem]">
            <div className="flex items-center justify-between mb-6">
            <h1 className="items-center justify-center text-5xl font-bold mb-0">TODO</h1>
            <span className="z-20">
                <img src={ darkButtonImage } alt="" />
            </span>
            </div>
            <div className="flex items-center w-full bg-white rounded-lg px-5 py-2">
            <input type="checkbox" className="hidden" id="myCheckbox" />
            <label htmlFor="myCheckbox" className="rounded-full p-2 border border-gray-300 cursor-pointer mr-5">
            </label>
            <input 
                className="outline-none h-10"
                type="text"
                placeholder="Create a new todo..."
                value= { newTodo}
                onChange={handleNewTodoChange}
                onKeyDown={handleKeyPress}
                />
            </div>
        </header>
    )
}
