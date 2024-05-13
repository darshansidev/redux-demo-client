import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, fetchTodoList } from '../../redux/action/action';
import { ToastContainer, toast } from "react-toastify";


const TodoList = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });

    // "title":"test",
    // "description":"newest things"
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

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     const { title, description } = formData;
    //     const todoData = new FormData();
    //     todoData.append('title', title);
    //     todoData.append('description', description);

    //     // post api call here
    //     dispatch(addTodo(todoData));
    // };

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
                            <input type="text" name="title" className="form-control" id="title" required onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-label ">Description</label>
                            <input type="text" name="description" className="form-control" id="description" required onChange={handleChange} />
                        </div>
                        <div className="container text-center">
                            <input type="submit" className="btn btn-dark form-control" value="Add Todo" />
                        </div>
                    </form>
                </div>
                <hr className="border border-dark border-1 opacity-50 rounded-3 " />
                <ul>
                    {todoList.length !== 0 ? todoList.map(todo => (
                        <li key={todo.id}>{todo.title} / {todo.description}</li>
                    )) : <p>No Data Found</p>}
                </ul>
            </div>
            <ToastContainer />
        </>
    );
};

export default TodoList;


/*

    const [formData, setFormData] = useState({
        fullName: '',
        contactNo: '',
        email: '',
        password: '',
        photoProof: null,
    });

    const handleChange = event => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFileChange = event => {
        const file = event.target.files[0];
        setFormData(prevState => ({
            ...prevState,
            photoProof: file,
        }));
    };

    const handleSubmit = event => {
        event.preventDefault();
        const { fullName, contactNo, email, password, photoProof } = formData;
        const userData = new FormData();
        userData.append('fullName', fullName);
        userData.append('contactNo', contactNo);
        userData.append('email', email);
        userData.append('password', password);
        userData.append('photoProof', photoProof);
        dispatch(signup(userData));
    };
*/

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