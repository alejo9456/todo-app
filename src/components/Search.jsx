
import { useState } from 'react';
import darkButtonImage from '../assets/icon-moon.svg';
import check from '../assets/icon-check.svg'

export const Search = ({ onAddTodo, onChangeAllTodos, isAllComplete }) => {
    const [newTodo, setNewTodo] = useState(''); 
    
    const handleAllComplete = () => {
        onChangeAllTodos(!isAllComplete);
    }

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
        <header className="relative z-10 mb-6">
            <div className="flex items-center justify-between mb-6">
            <h1 className="items-center justify-center text-5xl font-bold mb-0 text-white tracking-[1rem]">TODO</h1>
            <span className="z-20">
                <img src={ darkButtonImage } alt="" />
            </span>
            </div>
            <div className="flex items-center w-full bg-white rounded-lg px-5 py-2">
                <button
                    onClick={ handleAllComplete }
                    className={`relative flex justify-between rounded-full border p-2 border-gray-300 cursor-pointer mr-5 ${isAllComplete ? 'bg-check-background' : ''
                    }`}
                    >
                    {isAllComplete ? (
                        <img
                        src={check}
                        alt="Checkmark"
                        className='absolute inset-0 m-auto z-12'
                        />
                    ) : null}
                </button>
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
