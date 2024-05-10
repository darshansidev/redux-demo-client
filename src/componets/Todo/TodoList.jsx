import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodoList } from '../../redux/action/action';
import { ToastContainer, toast } from "react-toastify";

const TodoList = () => {
    const todoList = useSelector(state => state.todo.todoList.data);
    const error = useSelector(state => state.todo.error);
    const dispatch = useDispatch();

    // const fetchTodoListData = () => {
    //     dispatch(fetchTodoList());
    // };
    // console.log("first")

    // useEffect(() => {
    //     fetchTodoListData();

    // }, []);


    // console.log("second")


    // // No Todo Available .....
    // const notify = () => toast("No Todo available", {
    //     position: "top-right",
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark"
    // });

    // // Have an any error ....
    // const errorNotify = (error) => toast(`Error ${error}`, {
    //     position: "top-right",
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "dark",

    // });

    // if (error) {
    //     errorNotify(error);
    // }

    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchTodoList());
                toast.success("Todo list loaded successfully", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });
            } catch (error) {
                toast.error(`Error fetching todo list: ${error}`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                });
            }
        };

        fetchData(); // Call the async function to fetch data
    }, [dispatch]); // Run effect only when dispatch changes


    return (
        <>

            <div>
                <h1>Todo List</h1>
                <ul>
                    {todoList.length !== 0 ? todoList.map(todo => (
                        <li key={todo.id}>{todo.title}</li>
                    )) : <p>No Data Found</p>}
                </ul>
            </div>
            <ToastContainer />
        </>
    );
};

export default TodoList;
