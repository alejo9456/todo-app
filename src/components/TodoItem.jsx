    import { useState } from 'react';
    import check from '../assets/icon-check.svg'
    import cross from '../assets/icon-cross.svg'

    export const TodoItem = ({ todo, onDeleteTodo, onUpdateTodo  }) => {

        const [isFocused, setIsFocused] = useState(false);
        const [isHovered, setIsHovered] = useState(false);

        const handleCheckboxChange = () => {
            const updatedTodo = {...todo, complete: !todo.complete};
            onUpdateTodo(todo.id, updatedTodo)
        }

        const handleDelete = () => {
            onDeleteTodo(todo.id)
        }

        return (
            <li className="flex items-center w-full bg-white rounded-t-lg px-5 py-2 border-b"
                onFocus={ ()=> setIsFocused(true)}
                onBlur={ ()=> setIsFocused(false)}
                onMouseEnter={()=> setIsHovered(true)}
                onMouseLeave={()=> setIsHovered(false)}
            >
                <button
                onClick={handleCheckboxChange}
                className={`relative flex justify-between rounded-full border p-2 border-gray-300 cursor-pointer mr-5 ${
                    todo.complete ? 'bg-check-background' : ''
                }`}
                >
                {todo.complete ? (
                    <img
                    src={check}
                    alt="Checkmark"
                    className='absolute inset-0 m-auto z-12'
                    />
                ) : null}
                </button>
                <input
                    className={`outline-none h-10 w-full ${todo.complete ? 'line-through text-dark-grayish-blue' : ''} transition-all duration-500`} 
                    type="text"
                    defaultValue={todo.name}/>
                {
                    (isFocused || isHovered )&& (

                    <button 
                        onClick={ handleDelete }
                        className="absolute right-0 mt-2 mr-2 p-2 cursor-pointer">
                        <img src={cross} alt="Cross"/>
                    </button>    
                )}
            </li>
        )
    }
