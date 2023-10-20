import { useState } from "react";

export const TodoOptions = ({ size, onFilterChange, onClearComplete }) => {

    const [activeFilter, setActiveFiler] = useState('all');

    const handleFilteredChange = (newFilter) => {
        onFilterChange(newFilter);
        setActiveFiler(newFilter);
    }
    
    return (
        <footer className="text-dark-grayish-blue flex justify-between px-5 py-3 text-sm bg-white">
            <span> { size} item left</span>
            <ul className="flex justify-between">
                <li className={`font-bold mx-2 ${activeFilter !== 'all' ? 'hover:text-very-dark-grayish-blue' : ''} ${activeFilter === 'all' ? 'text-bright-blue' : 'text-dark-grayish-blue'}`}>
                    <a href="#" onClick={() => handleFilteredChange('all')}>All</a>
                </li>
                <li
                    className={`font-bold mx-2 ${activeFilter !== 'active' ? 'hover:text-very-dark-grayish-blue' : ''} ${activeFilter === 'active' ? 'text-bright-blue': 'text-dark-grayish-blue'}`}>
                    <a href="#" onClick={ ()=> handleFilteredChange('active') }>Active</a>
                </li>
                <li 
                    className={`font-bold mx-2 ${activeFilter !== 'completed' ? 'hover:text-very-dark-grayish-blue' : ''} ${activeFilter === 'completed' ? 'text-bright-blue': 'text-dark-grayish-blue'}`}>
                    <a href="#" onClick={ ()=> handleFilteredChange('completed') }>Completed</a>
                </li>
            </ul>
            <button 
                onClick={ onClearComplete}
                className="hover:text-very-dark-grayish-blue"
                >Clear completed</button>
        </footer>
    )
}
