import { useEffect, useState } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";


function Todos() {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")));

  useEffect(() => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")))
    }
  }, [])


  const [status, setStatus] = useState("");
  const [filteredTodos, setFilteredTodos] = useState([]);


  useEffect(() => {
    const filterHandler = () => {

      switch (status) {
        case "completed":
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case "active":
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    saveLocalTodos()
    filterHandler();
    // eslint-disable-next-line
  }, [todos, status]);

  // Local Storage
  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }


  return (
    <div className="App">
      <section className="todoapp">
        <Header
          todos={filteredTodos}
          addTodos={setTodos}
        />
        <Main
          todos={filteredTodos}
          setTodos={setTodos}
        />
        <Footer
          todos={todos}
          status={status}
          setStatus={setStatus}
          filteredTodos={filteredTodos}
          setTodos={setTodos}
        />
      </section>

      <footer className="info">
        <p>Click to edit a todo</p>
        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>

    </div>
  )
}

export default Todos