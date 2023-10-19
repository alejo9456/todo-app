
import { useState } from 'react';
import lightBackgroundImage  from './assets/bg-desktop-light.jpg';
import { Search, TodoList } from './components';


export const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      name: 'Complete online JavaScript course',
      complete: false,
    },
    {
      id: 2,
      name: 'Jog around th park 3x',
      complete: false,
    },
    {
      id: 3,
      name: '10 minutes meditation',
      complete: false,
    },
    {
      id: 4,
      name: 'Read for hour',
      complete: false,
    },
    {
      id: 5,
      name: 'Pick up groceries',
      complete: false,
    },
    {
      id: 6,
      name: 'Complete Todo App on Frontend Mentor',
      complete: false,
    },
  ])

  const [filter, setFilter] = useState('all');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  }

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: todos.length +1, name: newTodo, complete: false}])
  };

  const deleteTodo = (todoId) => {
    const updatedTodos = todos.filter( todo => todo.id !== todoId );
    setTodos(updatedTodos);
  };

  const updateTodo = (todoId, updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId ? updatedTodo : todo
    );
    setTodos(updatedTodos);
  };
  

  const filteredTodos = todos.filter( (todo) => {
    if( filter === 'active'){
      return !todo.complete
    }else if ( filter === 'completed'){
      return  todo.complete
    }
    return true;
  })

  return (
    <main className="h-screen relative bg-very-light-gray">

      <section className='h-40vh relative flex justify-center items-center'>
        <img className="h-full w-full absolute object-cover object-center" src={lightBackgroundImage} alt="image" />
        {/* Search */}
        <Search onAddTodo = {addTodo }/>
      </section>

      <section className="bg-very-light-gray h-60vh relative flex flex-col items-center">

        {/* { TodoList} */}
        <TodoList todos= {filteredTodos} onDeleteTodo = { deleteTodo } onFilterChange={handleFilterChange} onUpdateTodo={updateTodo} />

        <footer>
          Drag and drog to reorder list
        </footer>
    
      </section>

    </main>
  )
}
