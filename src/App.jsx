
import { useEffect, useState } from 'react';
import lightDesktopBackgroundImage  from './assets/bg-desktop-light.jpg';
import lightMobileBackgroundImage  from './assets/bg-mobile-light.jpg';
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
  ]);

  const [isMobile, setIsMobile] = useState(false);

  const [filter, setFilter] = useState('all');

  const [isAllComplete, setIsAllComplete] = useState(false);


  useEffect(() => {
    
    const handleResize = () =>{
      setIsMobile(window.innerWidth < 480);
    }
    
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])
  
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
    <main className="h-screen relative bg-very-light-gray">

      <section className='h-40vh relative flex justify-center items-center'>
        <img 
          className="h-full w-full absolute object-cover object-center"
          src={ isMobile? lightMobileBackgroundImage : lightDesktopBackgroundImage } alt="image-background" />
      </section>

      <section className="bg-very-light-gray h-60vh relative flex flex-col items-center">
        <div className='relative transform translate-y-[-11rem] max-w-[21rem] sm:min-w-[30rem]'>
          <Search 
              onAddTodo = {addTodo } 
              onChangeAllTodos = { changeAllTodos}
              isAllComplete={isAllComplete} />
          <TodoList 
            todos= {filteredTodos}
            onDeleteTodo = { deleteTodo }
            onFilterChange={handleFilterChange} 
            onUpdateTodo={updateTodo}
            onClearComplete={ clearComplete }
            onIncompleteTodos={countIncompleteTodos}
          />
          <footer className='text-dark-grayish-blue flex justify-center'>
            Drag and drog to reorder list
          </footer>
        </div>    
      </section>

    </main>
  )
}
