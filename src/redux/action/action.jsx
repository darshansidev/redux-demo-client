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

export const addTodoSuccess = (todo) => ({
    type: actionTypes.ADD_TODO_SUCCESS,
    payload: todo
});

export const updateTodoSuccess = (todo) => ({
    type: actionTypes.UPDATE_TODO_SUCCESS,
    payload: todo
});

export const deleteTodoSuccess = (todoId) => ({
    type: actionTypes.DELETE_TODO_SUCCESS,
    payload: todoId
});
