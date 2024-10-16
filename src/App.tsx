
import "./App.css";
import TodoProvider from "./contexts/TodoProvider";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";



function App() {
  
  // const [count, setCount] = useState(0);
  // const { state} = useTodo();
  return (
    <TodoProvider>
      <div className="todo-app-container">
        <div className="todo-app">
          <div className="title">To do list</div>
          
          <TodoForm />

          <TodoList />          
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;