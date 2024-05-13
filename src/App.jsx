import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import AddTodo from "./componets/Todo/AddTodo";
import ShowAllTodo from './componets/Todo/ShowAllTodo';
import HeadNav from './componets/HeadNav';
import TodoList from './componets/Todo/TodoList';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <HeadNav />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/todo/add" element={<AddTodo />} />
          <Route path="/todo/showAll" element={<ShowAllTodo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
