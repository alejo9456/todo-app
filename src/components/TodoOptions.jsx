import { useState } from "react";

export const TodoOptions = ({ isMobile, size, onFilterChange, onClearComplete }) => {

    const [activeFilter, setActiveFiler] = useState('all');

    const handleFilteredChange = (newFilter) => {
        onFilterChange(newFilter);
        setActiveFiler(newFilter);
    }
    
    return (
        <footer>
        {isMobile ? (
            <>
                <div className="rounded-t-lg text-dark-grayish-blue flex justify-between px-5 py-3 text-sm bg-inherit mb-5 sm:mb-0 bg-white dark:bg-very-dark-desaturated-blue">
                    <span> { size} item left</span>
                    <button 
                        onClick={ onClearComplete}
                        className="hover:text-very-dark-grayish-blue dark:hover:text-light-grayish-blue"
                        >Clear completed</button>
                </div>
                <div className="rounded-lg text-dark-grayish-blue flex justify-between px-5 py-3 text-sm bg-inherit mb-5 sm:mb-0 bg-white dark:bg-very-dark-desaturated-blue">
                    <ul className="flex justify-between container">
                        <li className={`font-bold mx-2 ${activeFilter !== 'all' ? 'hover:text-very-dark-grayish-blue dark:hover:text-light-grayish-blue' : ''} ${activeFilter === 'all' ? 'text-bright-blue' : 'text-dark-grayish-blue dark:text-light-grayish-blue'}`}>
                            <a href="#" onClick={() => handleFilteredChange('all')}>All</a>
                        </li>
                        <li
                            className={`font-bold mx-2 ${activeFilter !== 'active' ? 'hover:text-very-dark-grayish-blue dark:hover:text-light-grayish-blue' : ''} ${activeFilter === 'active' ? 'text-bright-blue': 'text-dark-grayish-blue'}`}>
                            <a href="#" onClick={ ()=> handleFilteredChange('active') }>Active</a>
                        </li>
                        <li 
                            className={`font-bold mx-2 ${activeFilter !== 'completed' ? 'hover:text-very-dark-grayish-blue dark:hover:text-light-grayish-blue' : ''} ${activeFilter === 'completed' ? 'text-bright-blue': 'text-dark-grayish-blue'}`}>
                            <a href="#" onClick={ ()=> handleFilteredChange('completed') }>Completed</a>
                        </li>
                    </ul>
                </div>
            </>
        ) : (
            <div className="rounded-b-lg bg-white dark:bg-very-dark-desaturated-blue text-dark-grayish-blue flex justify-between px-5 py-3 text-sm bg-inherit mb-5">
                <span> { size} item left</span>
                <ul className="flex justify-between">
                    <li className={`font-bold mx-2 ${activeFilter !== 'all' ? 'hover:text-very-dark-grayish-blue dark:hover:text-light-grayish-blue' : ''} ${activeFilter === 'all' ? 'text-bright-blue' : 'text-dark-grayish-blue dark:text-light-grayish-blue'}`}>
                        <a href="#" onClick={() => handleFilteredChange('all')}>All</a>
                    </li>
                    <li
                        className={`font-bold mx-2 ${activeFilter !== 'active' ? 'hover:text-very-dark-grayish-blue dark:hover:text-light-grayish-blue' : ''} ${activeFilter === 'active' ? 'text-bright-blue': 'text-dark-grayish-blue'}`}>
                        <a href="#" onClick={ ()=> handleFilteredChange('active') }>Active</a>
                    </li>
                    <li 
                        className={`font-bold mx-2 ${activeFilter !== 'completed' ? 'hover:text-very-dark-grayish-blue dark:hover:text-light-grayish-blue' : ''} ${activeFilter === 'completed' ? 'text-bright-blue': 'text-dark-grayish-blue'}`}>
                        <a href="#" onClick={ ()=> handleFilteredChange('completed') }>Completed</a>
                    </li>
                </ul>
                <button 
                    onClick={ onClearComplete}
                    className="hover:text-very-dark-grayish-blue dark:hover:text-light-grayish-blue"
                    >Clear completed</button>
            </div>
        )}
        </footer>
    )
}
