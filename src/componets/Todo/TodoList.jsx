import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, fetchTodoById, fetchTodoList } from '../../redux/action/action';
import { ToastContainer, toast } from "react-toastify";

import { Link, useNavigate } from 'react-router-dom';


const TodoList = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });
    const navigate = useNavigate();

    const todoList = useSelector(state => state.todo.todoList.data);
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchData = async () => {
            try {
                await dispatch(fetchTodoList());
                if (todoList?.length > 0) {
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
                }
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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async event => {
        event.preventDefault();
        const { title, description } = formData;
        const todoData = { title, description };

        try {
            // Simulate API call to add a todo (replace with your actual API call)
            // await apiCallToAddTodo(todoData);

            // Dispatch action to update Redux store upon successful todo addition
            await dispatch(addTodo(todoData));
            await dispatch(fetchTodoList());
            setFormData({
                title: '',
                description: '',
            })
            // Show success message
            toast.success('Todo added successfully', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });

        } catch (error) {
            console.log(error, "<error from tiit>")
            toast.error(`Error adding todo: ${error}`, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
            });
        }
    };

    const handledelete = async (todoId) => {
        if (window.confirm('Are you sure you want to delete this todo?')) {
            await dispatch(deleteTodo(todoId));
            await dispatch(fetchTodoList());
        }
    }

    const handleUpdate = async (todoId) => {
        dispatch(fetchTodoById(todoId));
        navigate(`/todo/item/${todoId}`);
    }
    return (
        <>

            <div className='container border  border-1  border-dark rounded-4 mt-5'>
                <div className='container border  border-1  border-primary rounded-3 p-3 mt-3'>
                    <h1 className='d-flex justify-content-center '>Todo List</h1>
                </div>
                <hr className="border border-dark border-1 opacity-50 rounded-3 " />
                <div className="container  p-5 ">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label ">Title</label>
                            <input type="text" name="title" className="form-control" value={formData.title} id="title" required onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label " >Description</label>
                            <input type="text" name="description" className="form-control" value={formData.description} id="description" required onChange={handleChange} />
                        </div>
                        <div className="container text-center">
                            <input type="submit" className="btn btn-dark form-control" value="Add Todo" />
                        </div>
                    </form>
                </div>
                <hr className="border border-dark border-1 opacity-50 rounded-3 " />


                <div className='my-3'>
                    <div className="card">

                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead className="bg-dark text-white">
                                    <tr>
                                        <th>Title</th>
                                        <th>Description</th>
                                        <th>
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        (todoList && todoList.length !== 0) ? todoList.map(todo =>
                                            <tr key={todo._id}>

                                                <td>{todo.title}</td>
                                                <td>{todo.description}</td>

                                                <td className='d-flex justify-content-evenly '>
                                                    {/* <Link to={`/todo/item/${todo._id}`} className="btn btn-primary" onClick={() => dispatch(fetchTodoById(todo._id))}>Edit</Link> */}
                                                    <button onClick={() => { handleUpdate(todo._id) }} className="btn btn-primary">Edit</button>
                                                    <button onClick={() => { handledelete(todo._id) }} className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        ) : <p>No Data Found</p>
                                    }

                                </tbody>

                            </table>
                        </div>

                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default TodoList;




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