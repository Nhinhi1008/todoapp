import { useReducer } from 'react';
import TodoContext from './TodoContext';

export const todoReducer = (state: { todos: any[]; }, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case "ADD": {
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: state.todos.length + 1,
                        text: action.payload,
                        status: "active",

                    },
                ],
            }
        };
            
        case "CLEAR": {
            return {
                ...state,
                todos: [],
            };
        };
            
        case "DELETE": {
            return {
                ...state,
                todos: state.todos.filter((todo: { id: any; }) => todo.id !== action.payload),
            };
        }
            
        case "TOGGLE": {
            return {
                ...state,
                todos: state.todos.map((todo: { id: any; status: string; }) =>
                    todo.id === action.payload
                        ? { ...todo, status: todo.status === "active" ? "completed" : "active" }
                        : todo
                ),
            };
        }

        default: {
            throw new Error("Unhandled action");
        }
            
       
    }
}
export default function TodoProvider({ children }: {children: any}) {
    const [state, dispatch] = useReducer(todoReducer, {
        todos: [
            {
                id: "number",
                text: "Đi siêu thị",
                status: "active",
            },
            {
                id: 2,
                text: "Đi công việc",
                status: "completed",
            },
        ],
    })

    return (
        <TodoContext.Provider value={{state, dispatch}}>{children}</TodoContext.Provider>
    );
}
