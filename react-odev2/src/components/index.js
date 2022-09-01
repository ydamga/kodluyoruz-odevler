import {useState} from 'react'
import Footer from './Footer'
import Form from './Form'
import List from './List'

function Components() {
    const [todos, setTodos] = useState([
        {text:"Learn Javascript", isActive: false},
        {text:"Learn React", isActive: true},
        {text:"Have a Life", isActive: true}
    ])

    const [filter, setFilter] = useState([...todos])

  return (
    <div>
        <Form todos={todos} setTodos={setTodos}/>
        <List todos={todos} setTodos={setTodos} filter={filter}/>
        <Footer todos={todos} setTodos={setTodos} filter={filter} setFilter={setFilter} />
    </div>
  )
}

export default Components