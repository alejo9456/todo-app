import { TodoItem } from "./TodoItem"
import { TodoOptions } from "./TodoOptions"

export const TodoList = ( { todos, onDeleteTodo, onFilterChange, onUpdateTodo, onClearComplete, onIncompleteTodos }) => {
  return (
    <section className="bg-very-light-gray rounded-md shadow-md mb-3">
        <ul className="text-very-dark-grayish-blue">
            {/* TodoItem */}
            {
                todos.map( todo => (
                    <TodoItem key={ todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onUpdateTodo={onUpdateTodo}/>
                ))
            }

        </ul>
        <TodoOptions size = { onIncompleteTodos() } onFilterChange= { onFilterChange } onClearComplete={ onClearComplete}/>
    </section>
  )
}
