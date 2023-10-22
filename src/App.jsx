
import { useEffect, useState } from 'react';
import { Search, TodoList } from './components';


export const App = () => {
  const [theme, setTheme] = useState(localStorage.theme || 'dark');
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 480;
      setIsMobile(mobile);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 
  const toggleThemeMode = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.theme = newTheme;
    document.documentElement.classList.toggle('dark');
  };
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
  ]);

  const [filter, setFilter] = useState('all');

  const [isAllComplete, setIsAllComplete] = useState(false);
  
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
    const isCompleteTodos = updatedTodos.every( todo => todo.complete);
    setIsAllComplete(isCompleteTodos);
  };


  const changeAllTodos = ( complete ) => {
    const updatedTodos = todos.map((todo) => ({ ...todo, complete }));
    setTodos(updatedTodos);
    setIsAllComplete(complete);
  }

  const reorderTodos = (reorderedTodos) => {
    setTodos(reorderedTodos);
  };

  
  const clearComplete = () => {
    const updatedTodos = todos.filter( todo => !todo.complete);
    setTodos(updatedTodos);
    setIsAllComplete(false); 
  }

  const countIncompleteTodos = () => {
    return todos.filter(todo => !todo.complete).length;
  }

  const filteredTodos = todos.filter( (todo) => {
    if( filter === 'active'){
      return !todo.complete
    }else if ( filter === 'completed'){
      return  todo.complete
    }
    return true;
  })

  return (
    <main className='min-h-screen relative bg-very-light-gray dark:bg-very-dark-blue bg-mobile-light transition-all duration-300  md:bg-desktop-light dark:bg-mobile-dark md:dark:bg-desktop-dark bg-no-repeat bg-contain'>

      <section className= 'container relative flex flex-col items-center mx-auto px-4 pt-8 md:max-w-xl'>
          <Search
              theme = { theme } 
              onAddTodo = {addTodo } 
              onChangeAllTodos = { changeAllTodos}
              onToggleTheme = { toggleThemeMode }
              isAllComplete={isAllComplete} />
          <TodoList
            isMobile = { isMobile}
            todos= {filteredTodos}
            onReorderTodos={reorderTodos}
            onDeleteTodo = { deleteTodo }
            onFilterChange={handleFilterChange} 
            onUpdateTodo={updateTodo}
            onClearComplete={ clearComplete }
            onIncompleteTodos={countIncompleteTodos}
          />
          <footer className=' text-dark-grayish-blue flex justify-center bg-inherit'>
            Drag and drog to reorder list
          </footer>
      </section>

    </main>
  )
}
