// actions.js
import axios from 'axios';
import * as actionTypes from './ActionTypes';

export const baseUrl = `http://localhost:3000/todo`;


export const fetchTodoList = () => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${baseUrl}/get-todo-list`);

            dispatch({ type: actionTypes.FETCH_TODOS_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: actionTypes.FETCH_TODOS_FAILURE, payload: error.message });
        }
    };
};

export const addTodo = (todo) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${baseUrl}/add-todo-list`, {
                title: todo.title,
                description: todo.description
            });
        } catch (error) {
            // Dispatch ADD_TODO_FAILURE action with the error message
            dispatch({ type: actionTypes.ADD_TODOS_FAILURE, payload: error.message });
        }
    };
};

export const updateTodoSuccess = (todo) => ({
    type: actionTypes.UPDATE_TODO_SUCCESS,
    payload: todo
});

export const deleteTodoSuccess = (todoId) => ({
    type: actionTypes.DELETE_TODO_SUCCESS,
    payload: todoId
});

// export const signup = createAsyncThunk('auth/signup', async (userData) => {
//     try {
//         const response = await axios.post(`${baseURL}auth/signup`, userData);
//         return response.data;
//     } catch (error) {
//         throw error.response.data;
//     }
// });

