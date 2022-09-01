import { useState, useEffect } from "react";

function Form({ todos, setTodos }) {
  const [form, setForm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (form === "") {
      return false;
    }
    setTodos([...todos, { text: form, isActive: true }]);
    setForm("")
  };

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={onSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            value={form}
            onChange={e => setForm(e.target.value)}
          />
        </form>
      </header>
    </div>
  );
}

export default Form;
