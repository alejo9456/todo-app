import { TodoItem } from "./TodoItem"
import { TodoOptions } from "./TodoOptions"

export const TodoList = ( { todos, onDeleteTodo, onFilterChange, onUpdateTodo }) => {
  return (
    <section className="relative transform translate-y-[-3rem] w-[30rem] rounded-md shadow-md">
        <ul>
            {/* TodoItem */}
            {
                todos.map( todo => (
                    <TodoItem key={ todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onUpdateTodo={onUpdateTodo}/>
                ))
            }

        </ul>
        <TodoOptions size = { todos.length} onFilterChange= { onFilterChange }/>
    </section>
  )
}
