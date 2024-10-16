import { useContext } from 'react';
import TodoContext from '../contexts/TodoContext';

export type Todo = {
    id: number;
    text: string;
    status: string;
};

export type State = {
    todos: Todo[];
};


export const useTodo= () => {
    const { state, dispatch} = useContext(TodoContext) as any;
    
    const addTodo = (text: string) => {
        dispatch({ type: "ADD", payload: text });
    };

    const clearTodos = () => {
        dispatch({ type: "CLEAR" });
    };

    const deleteTodo = (id: number) => {
        dispatch({ type: "DELETE", payload: id });
    };

    const toggleTodo = (id: number) => {
    dispatch({ type: "TOGGLE", payload: id });
    };
    
    return {
        state,
        addTodo,
        clearTodos,
        deleteTodo,
        toggleTodo,
    };
}
