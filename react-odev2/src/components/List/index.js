import React from 'react'

function List({todos, setTodos, filter}) {
    const destroy = e => {
        todos.splice((e.target.id),1)
        setTodos([...todos])
    }

    const checkboxCheck = e => {
        todos[e.target.id].isActive = todos[e.target.id].isActive ? false : true
        setTodos([...todos])
    }

  return (
    <div>
        <ul className="todo-list">
			{
                filter.map((todo, i) =>(
                    <li key={i} className={todo.isActive ? "" : "completed"} >
                        <div className='view'>
                        <input className="toggle" type="checkbox" checked={!todo.isActive} id={i} onChange={checkboxCheck} />
                        <label>{todo.text}</label>
                        <button className="destroy" id={i} onClick={destroy} ></button>
                        </div>
                    </li>
                ))
            }
		</ul>
    </div>
  )
}

export default List