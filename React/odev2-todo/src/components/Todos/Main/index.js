function Main({ todos, setTodos }) {

  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all" onClick={() => {
        setTodos(
          
          todos.map((item) => {
            const isCompleted = todos.some((element) => {
              return element.completed === false
            })
            return isCompleted === true
             ? { ...item, completed: true }
             : { ...item, completed: false }
          })
        )
      }}>
        Mark all as complete
      </label>

      <ul className="todo-list">
        {todos.map((todo, i) => (
          <li key={i} className={todo.completed ? "completed" : ''} >
            <div className="view">
              <input
                type="checkbox"
                className="toggle"
                checked={todo.completed}
                onChange={() => {
                  setTodos(
                    todos.map((item) => {
                      return item === todo
                        ? { ...item, completed: !item.completed }
                        : item;
                    })
                  );
                }}
              />
              <label>{todo.todoName}</label>
              <button className="destroy" onClick={() => {
                setTodos(todos.filter((item) => item !== todo))
              }} ></button>
            </div>
          </li>
        ))}
      </ul>
    </section >
  )
}

export default Main