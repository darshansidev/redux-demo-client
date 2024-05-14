import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateTodoData } from "../../redux/action/action";

const TodoActions = () => {
    const { todoId } = useParams();
    const todoData = useSelector(state => state.todo.singleTodo.data);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: todoData ? todoData.title : '',
        description: todoData ? todoData.description : '',
    });
    useEffect(() => {
        if (!todoData) {
            window.location.reload();
        }
    }, [])



    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    }
    const handleUpdateSubmit = (event) => {

        const todoPaylaod = {
            todoId: todoId,
            title: formData.title,
            description: formData.description
        }

        dispatch(updateTodoData(todoPaylaod));
        navigate(`/`);
    }

    return (
        <>
            <div className="container  p-5 ">
                <div >
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label ">Title</label>
                        <input type="text" name="title" className="form-control" value={formData.title} id="title" required onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label " >Description</label>
                        <input type="text" name="description" className="form-control" value={formData.description} id="description" required onChange={handleChange} />
                    </div>
                    <div className="container text-center">
                        <button className="btn btn-secondary form-control" value="Update Todo" onClick={handleUpdateSubmit} >Submit</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default TodoActions