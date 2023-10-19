import React, { useState } from 'react'

export const TodoOptions = ({ size, onFilterChange }) => {

    const handleFilteredChange = (newFilter) => {
        onFilterChange(newFilter);
    }
    return (
        <footer className="flex justify-between px-5 py-2 text-sm">
            <span> { size} item left</span>
            <ul className="flex justify-between">
            <li className="mx-2">
                <a href="#" onClick={ ()=> handleFilteredChange('all') }>All</a>
            </li>
            <li  className="mx-2">
                <a href="#" onClick={ ()=> handleFilteredChange('active') }>Active</a>
            </li>
            <li  className="mx-2">
                <a href="#" onClick={ ()=> handleFilteredChange('completed') }>Completed</a>
            </li>
            </ul>
            <button>Clear completed</button>
        </footer>
    )
}
