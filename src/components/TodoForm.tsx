import { useTodo } from "../hooks/useTodo";


export default function todoForm() {
    const { addTodo } = useTodo();

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const text = e.target[0].value;
        addTodo(text);
        e.target.reset()
    }
    return (
    <form action="" className="todo-form" onSubmit={handleSubmit}>
        <input type="text" placeholder= "Bạn cần làm gì hôm nay?" className="todo-input" />
        <button className="button-create">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14" /><path d="M12 5v14" />
            </svg>
            Thêm
        </button>
    </form>
  )
}
