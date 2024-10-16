import { useTodo } from "../hooks/useTodo";
import TodoItem from "./TodoItem";

export type Todo = {
    id: number;
    text: string;
    status: string;
    completed: string;
}

export default function TodoList() {
    const { state, clearTodos, deleteTodo, toggleTodo } = useTodo();
    
    return (
        <div className="todo-list">
            <div className="todo-list_item">
                {state.todos.map((todo: Todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                    />
                ))}
            </div>
        
            <div className="todo-list_footer">
                <div className="todo-count">Bạn còn {state.todos.filter((todo: Todo) => !todo.completed).length} công việc</div>
                <button className="button-clear" onClick={clearTodos}>
                    Xóa hết
                </button>
            </div>

            

        </div>
    );
}
