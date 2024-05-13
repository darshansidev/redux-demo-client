import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchTodoById } from '../../redux/action/action';

const TodoActions = () => {
    const { todoId } = useParams();

    const todoData = useSelector(state => state.todo.singleTodo.data);
    const dispatch = useDispatch();
    console.log(todoData)

    const [formData, setFormData] = useState({
        title: todoData ? todoData.title : '',
        description: todoData ? todoData.description : '',
    });
    useEffect(() => {
        // dispatch(fetchTodoById(todoId));

    }, [])

    if (formData.title.trim() === '') {
        window.location.reload();
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }
    const handleUpdateSubmit = () => { }

    return (
        <>
            <div className="container  p-5 ">
                <form onSubmit={handleUpdateSubmit}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label ">Title</label>
                        <input type="text" name="title" className="form-control" value={formData?.title} id="title" required onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label " >Description</label>
                        <input type="text" name="description" className="form-control" value={formData?.description} id="description" required onChange={handleChange} />
                    </div>
                    <div className="container text-center">
                        <input type="submit" className="btn btn-dark form-control" value="Add Todo" />
                    </div>
                </form>
            </div>
        </>

    )
}

export default TodoActions