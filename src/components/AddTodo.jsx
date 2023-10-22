import { useState } from 'react';
import moonButtonImage from '../assets/icon-moon.svg';
import sunButtonImage from '../assets/icon-sun.svg';
import check from '../assets/icon-check.svg'

export const AddTodo = ({ onAddTodo, onChangeAllTodos, isAllComplete, theme, onToggleTheme }) => {
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
        <header className="container mx-auto px-4 pt-8 md:max-w-xl z-10 mb-6">
            <div className="flex items-center justify-between mb-6">
            <h1 className="items-center justify-center text-5xl font-bold mb-0 text-white tracking-[1rem]">TODO</h1>
            <span className="z-20 cursor-pointer"
                onClick={ onToggleTheme }>
                <img src={ theme === 'dark' ? (sunButtonImage): (moonButtonImage) } alt="" />
            </span>
            </div>
            <div className='flex items-center w-full bg-white dark:bg-very-dark-desaturated-blue rounded-lg px-5 py-2'>
                <button
                    onClick={ handleAllComplete }
                    className={`relative flex justify-between rounded-full border border-light-grayish-blue dark:border-dark-grayish-blue p-2 hover:border-bright-blue dark:hover:hover:border-bright-blue cursor-pointer mr-5 ${isAllComplete ? 'bg-gradient-to-r from-primary-check to-secondary-check' : ''
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
                    className="outline-none h-10 bg-inherit dark:text-light-grayish-blue"
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
