import { TodoItem } from "./TodoItem"
import { TodoOptions } from "./TodoOptions"
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

export const TodoList = ( { todos,onReorderTodos, onDeleteTodo, onFilterChange, onUpdateTodo, onClearComplete, onIncompleteTodos }) => {
  const onDragEnd = (result) => {
    if (!result.destination) {
      return; 
    }

    const reorderedTodos = [...todos];
    const [reorderedTodo] = reorderedTodos.splice(result.source.index, 1);
    reorderedTodos.splice(result.destination.index, 0, reorderedTodo);
    onReorderTodos(reorderedTodos);
  };
  
  return (
      <section className='container relative items-center px-4 mx-auto md:max-w-xl'>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <ul
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="text-very-dark-grayish-blue relative bg-white dark:bg-very-dark-desaturated-blue"
            >
              {todos.map((todo, index) => (
                <Draggable key={todo.id.toString()} draggableId={todo.id.toString()} index={index}>
                  {(provided) => (
                     <TodoItem
                      todo={todo}
                      onDeleteTodo={onDeleteTodo}
                      onUpdateTodo={onUpdateTodo}
                      provided={provided} // Pasa provided al componente TodoItem
                   />
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <TodoOptions className="hidden" size={onIncompleteTodos()} onFilterChange={onFilterChange} onClearComplete={onClearComplete} />
    </section>
  )
}
