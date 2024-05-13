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

export const fetchTodoById = (todoId) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${baseUrl}/get-todo-item/${todoId}`);

            dispatch({ type: actionTypes.FETCH_SINGLE_TODO_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: actionTypes.FETCH_SINGLE_TODO_FAILURE, payload: error.message });
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

            dispatch({ type: actionTypes.ADD_TODO_SUCCESS, payload: response });

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



// Delete action method implements 


export const deleteTodo = (todoId) => {
    return async (dispatch) => {
        try {
            // Make delete API request to delete a specific todo
            const response = await axios.delete(`${baseUrl}/delete-todo-list/${todoId}`);

            // Dispatch DELETE_TODO_SUCCESS action with the deleted todoId
            dispatch({
                type: actionTypes.DELETE_TODO_SUCCESS,
                payload: todoId
            });


            console.log(`Todo with ID ${todoId} deleted successfully`);

        } catch (error) {
            // Handle error (e.g., show toast message)
            console.error(`Error deleting todo with ID ${todoId}: ${error.message}`);

            dispatch({
                type: actionTypes.DELETE_TODOS_FAILURE,
                payload: error
            });
        }
    };
};

