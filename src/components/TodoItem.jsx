    import { useState } from 'react'
    import check from '../assets/icon-check.svg'
    import cross from '../assets/icon-cross.svg'

    export const TodoItem = ({ todo, onDeleteTodo, onUpdateTodo  }) => {
        const [isComplete, setIsComplete] = useState(todo.complete);

        const handleCheckboxChange = () => {
            const updatedTodo = {...todo, complete: !isComplete};
            setIsComplete(!isComplete)
            onUpdateTodo(todo.id, updatedTodo)
        }

        const handleDelete = () => {
            onDeleteTodo(todo.id)
        }

        return (
            <li className="flex items-center w-full bg-white rounded-t-lg px-5 py-2 border-b">
                <button
                onClick={handleCheckboxChange}
                className={`relative flex justify-between rounded-full border p-2 border-gray-300 cursor-pointer mr-5 ${
                    isComplete ? 'bg-check-background' : ''
                }`}
                >
                {isComplete ? (
                    <img
                    src={check}
                    alt="Checkmark"
                    className='absolute inset-0 m-auto z-12'
                    />
                ) : null}
            </button>
            <input
                className={`outline-none h-10 w-full ${isComplete ? 'line-through' : ''} transition-all duration-500`} 
                type="text"
                defaultValue={todo.name}/>
            <button 
                onClick={ handleDelete }
                className="absolute right-0 mt-2 mr-2 p-2 cursor-pointer">
                <img src={cross} alt="Cross"/>
            </button>
            </li>
        )
    }
