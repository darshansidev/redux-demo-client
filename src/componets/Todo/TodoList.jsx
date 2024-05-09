import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodoList } from '../../redux/action/action';

const TodoList = () => {
    const todoList = useSelector(state => state.todo.todoList.data);
    const error = useSelector(state => state.todo.error);
    const dispatch = useDispatch();

    console.log(todoList, "SADFASdfsf");

    useEffect(() => {
        dispatch(fetchTodoList());
    }, [dispatch]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todoList.length !== 0 ? todoList.map(todo => (
                    <li key={todo.id}>{todo.title}</li>
                )) : "no list found"}
            </ul>
        </div>
    );
};

export default TodoList;
