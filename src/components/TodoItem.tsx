import { Todo } from "./TodoList";

// export type Todo = {
//     id: number;
//     text: string;
//     status: string;
// };


export type TodoItemProps = {
    todo: Todo;
    deleteTodo: (id: number) => void;
    toggleTodo: (id: number) => void;
}
export default function TodoItem({todo, deleteTodo, toggleTodo}: TodoItemProps) {
    return (
        <div className="todo-item">
            <input type="checkbox" className="checkbox" checked={todo.status === "completed"}
            onChange={() => toggleTodo(todo.id)}
            />


            <div className="todo-item_text">
                <span className="todo-label">{todo.text}</span>
                <button className="button-delete"
                    onClick={() => deleteTodo(todo.id)}>
                    Xóa
                </button>


            </div>
        </div>
  )
}
