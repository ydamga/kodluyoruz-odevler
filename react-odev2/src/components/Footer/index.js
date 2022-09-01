import {useState} from "react";

function Footer({ todos, setTodos, setFilter, filter }) {
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => todo.isActive === true));
  };

  const [selected, setSelected] = useState("all")

  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong> {filter.length} </strong>
          items left
        </span>

        <ul className="filters">
          <li>
            <a className={selected == "all" ? "selected":""} onClick={() => {setFilter([...todos]); setSelected("all");}
               }>
              All
            </a>
          </li>
          <li>
            <a
              className={selected == "active" ? "selected":""}
              onClick={() =>
                {setFilter([...todos.filter((todo) => todo.isActive == true)]); setSelected("active");}   
              }
            >
              Active
            </a>
          </li>
          <li>
            <a
              className={selected == "completed" ? "selected":""}
              onClick={() =>
                {setFilter([...todos.filter((todo) => todo.isActive == false)]); setSelected("completed");}
              }
            >
              Completed
            </a>
          </li>
        </ul>

        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
    </div>
  );
}

export default Footer;
