// reducers.js
import * as actionTypes from '../action/ActionTypes';

const initialState = {
    todoList: [],
    error: null,
    singleTodo: {}
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        //-------------------------------------- Get Todos--------------------------------------
        case actionTypes.FETCH_TODOS_SUCCESS:
            return { ...state, todoList: action.payload, error: null, singleTodo: {} };

        case actionTypes.FETCH_TODOS_FAILURE:
            return { ...state, error: action.payload, singleTodo: {} };

        //-------------------------------------- Get By Id --------------------------------------
        case actionTypes.FETCH_SINGLE_TODO_SUCCESS:
            return { ...state, todoList: [], error: null, singleTodo: action.payload }

        case actionTypes.FETCH_SINGLE_TODO_FAILURE:
            return { ...state, error: action.payload };

        //-------------------------------------- Add Todos --------------------------------------
        case actionTypes.ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            };

        case actionTypes.ADD_TODOS_FAILURE:
            return { ...state, error: action.payload };


        //-------------------------------------- Update Todos --------------------------------------
        case actionTypes.UPDATE_TODO_SUCCESS:
            return {
                ...state,
                todos: state.todos.map(todo =>
                    todo._id === action.payload._id ? action.payload : todo
                )
            };


        //-------------------------------------- Delete Todos --------------------------------------
        case actionTypes.DELETE_TODO_SUCCESS:
            const updatedTodos = state.todos.filter(todo => todo._id !== action.payload);

            return {
                ...state,
                todos: updatedTodos
            };

        case actionTypes.DELETE_TODOS_FAILURE:
            return state;


        default:
            return state;
    }
};

export default todoReducer;
