    import {  useEffect, useState } from 'react';
    import check from '../assets/icon-check.svg'
    import cross from '../assets/icon-cross.svg'

    export const TodoItem = ({ todo, onDeleteTodo, onUpdateTodo, provided }) => {
        const [isFocused, setIsFocused] = useState(false);
        const [isHovered, setIsHovered] = useState(false);
        const [isEditing, setIsEditing] = useState(false);
        const [editText, setEditText] = useState(todo.name)

        const handleCheckboxChange = () => {
            const updatedTodo = {...todo, complete: !todo.complete};
            onUpdateTodo(todo.id, updatedTodo)
        }

        const handleInputChange = (e) => {
            setEditText(e.target.value);
        };

        const handleDoubleClick = () => {
            if(todo.complete) return
            setIsEditing(true);
        };

        const handleBlur = () => {
            if (editText.trim() !== '') {
                const updatedTodo = { ...todo, name: editText };
                onUpdateTodo(todo.id, updatedTodo);
              }
              setIsEditing(false);
              setIsFocused(false);
              setIsHovered(false);
        };

        const handleDelete = () => {
            onDeleteTodo(todo.id)
        }

        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
              const updatedTodo = { ...todo, name: editText };
              onUpdateTodo(todo.id, updatedTodo);
              setIsEditing(false);
              setIsFocused(false)
              setIsHovered(false)
            }
        };
        useEffect(() => {
            setIsEditing(false);
            setEditText(todo.name);
          }, [todo]);

        return (
            <div className="flex items-center w-full  rounded-t-lg px-5 py-2 border-b bg-inherit border-light-grayish-blue dark:border-dark-grayish-blue"
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                onFocus={ ()=> setIsFocused(true)}
                onBlur={ ()=> setIsFocused(false)}
                onDoubleClick={handleDoubleClick}
                onMouseEnter={()=> setIsHovered(true)}
                onMouseLeave={()=> setIsHovered(false)}
            >
                <button
                onClick={handleCheckboxChange}
                className={`relative flex justify-between rounded-full border border-light-grayish-blue dark:border-dark-grayish-blue p-2 hover:border-bright-blue dark:hover:hover:border-bright-blue cursor-pointer mr-5 ${
                    todo.complete ? 'bg-gradient-to-r from-primary-check to-secondary-check' : ''
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
                {isEditing ? (
                    <input
                        className={`bg-inherit outline-none h-10 ${isFocused || isHovered ? 'w-4/5' : 'w-full'} ${todo.complete ? 'line-through text-dark-grayish-blue' : ''} transition-all duration-500`}
                        type="text"
                        value={editText}
                        onBlur={handleBlur}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        autoFocus
                            />
                        ) : (
                    <div
                        className={`flex items-center outline-none h-10 ${isFocused || isHovered ? 'w-4/5' : 'w-full'} ${todo.complete ? 'line-through text-dark-grayish-blue dark:text-light-grayish-blue-hover' : 'dark:text-light-grayish-blue'} transition-all duration-500`}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        >
                        {todo.name}
                    </div>
                    )}
                    {
                        (isFocused || isHovered )&& (

                        <button 
                            onClick={ handleDelete }
                            className="absolute right-0 mt-2 mr-2 p-2 cursor-pointer">
                            <img src={cross} alt="Cross"/>
                        </button>    
                    )}
            </div>
        )
    };
