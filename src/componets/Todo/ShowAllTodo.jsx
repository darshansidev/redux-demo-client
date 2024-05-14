import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllTodoList } from '../../redux/action/action';
import _ from "lodash";

const ShowAllTodo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const allTodoData = useSelector(state => state.todo.allTodos.data);
  const dispatch = useDispatch();


  useEffect(() => {
    if (searchTerm.trim() === "") {
      dispatch(fetchAllTodoList());
      setResults(allTodoData)
    }
  }, [searchTerm])


  const handleSearch = (event) => {
    setSearchTerm(event.target.value);

    const filteredResults = _.filter(
      allTodoData,
      (item) => item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filteredResults);

  };


  return (
    <>
      <div className="container mt-5 d-md-flex ">
        <div className='history-text'>
          <h1>Todo History</h1>
        </div>
        <div className='w-100'>
          <div>
            <form className="d-flex my-3 " role="search">
              <input className="form-control me-2  border-black w-100  " type="search" placeholder="Search" aria-label="Search" value={searchTerm} onChange={handleSearch} />

            </form>
          </div>

          <div style={{ 'overflowX': 'auto' }}>
            <table className="table table-striped  table-hover ">
              <thead className=' border border-1 border-dark '>
                <tr>
                  <th scope="col">Index</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Status</th>
                  {/* <th scope="col">Action</th> */}
                </tr>
              </thead>
              <tbody>
                {
                  (results && results.length > 0)
                    ?
                    results?.map((todo, index) => {
                      return (
                        <tr>
                          <td>{index + 1}</td>
                          <td>{todo.title}</td>
                          <td>{todo.description}</td>
                          <td>{
                            (todo.isDelete === true) ?
                              <p>deleted </p> : <p>exist </p>
                          }</td>
                          {/* <td><button type="button" class="btn btn-primary">View</button></td> */}

                        </tr>
                      )
                    })
                    //  :
                    // (allTodoData && allTodoData.length > 0)
                    //   ?
                    //   allTodoData?.map((todo, index) => {
                    //     return (
                    //       <tr>
                    //         <td>{index + 1}</td>
                    //         <td>{todo.title}</td>
                    //         <td>{todo.description}</td>
                    //         <td>{
                    //           (todo.isDelete === true) ?
                    //             <p>deleted </p> : <p>exist </p>
                    //         }</td>
                    //         {/* <td><button type="button" class="btn btn-primary">View</button></td> */}

                    //       </tr>
                    //     )
                    //   })
                    : <p>No Data Found</p>
                }

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShowAllTodo