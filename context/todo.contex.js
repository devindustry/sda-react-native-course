import { createContext, useContext, useReducer } from 'react';

const TodoContext = createContext();

const TODO_ACTIONS = {
    SET_TODOS: 'SET_TODOS',
    MARK_TODO: 'MARK_TODO',
    ADD_TODO: 'ADD_TODO'
}
const todoReducer = (state, action) => {
    switch (action.type) {
        case TODO_ACTIONS.SET_TODOS:
            return {
                ...state,
                todos: action.payload
            }
        case TODO_ACTIONS.MARK_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
            }
        case TODO_ACTIONS.ADD_TODO:
            console.log(action);
            return {
                ...state,
                todos: [action.payload, ...state.todos]
            }
        default:
            return state;
    }
}
export const TodoProvider = ({children}) => {
    const [state, dispatch] = useReducer(todoReducer, {todos: []});

    const setTodos = (todos) => dispatch({
        type: TODO_ACTIONS.SET_TODOS,
        payload: todos,
    });

    const markTodo = (id) => dispatch({
        type: TODO_ACTIONS.MARK_TODO,
        payload: id,
    });

    const addTodo = (todo) => dispatch({
        type: TODO_ACTIONS.ADD_TODO,
        payload: todo,
    });

    return (
        <TodoContext.Provider value={{todos: state.todos, setTodos, markTodo, addTodo}}>
            {children}
        </TodoContext.Provider>
    )
}

export const useTodos = () => useContext(TodoContext)