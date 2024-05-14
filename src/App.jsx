import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import ShowAllTodo from './componets/Todo/ShowAllTodo';
import HeadNav from './componets/HeadNav';
import TodoList from './componets/Todo/TodoList';
import TodoActions from './componets/Todo/TodoActions';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <HeadNav />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/todo/showAll" element={<ShowAllTodo />} />
          <Route path="/todo/item/:todoId" element={<TodoActions />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
