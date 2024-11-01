
import { useState } from 'react'
import { CreateTodo } from './component/CreateTodo'
import { Todos } from './component/Todos'

function App() {
  const [todo,setTodos]=useState([]);

  // Fetch the todos directly without useEffect
  const fetchTodos = async () => {
    const res = await fetch("http://localhost:3000/todos");
    const json = await res.json();
    console.log(json.todos);
    setTodos(json.todos);
  };

  // Call the fetchTodos function immediately
  // fetchTodos();

  return (
    <div>
    <CreateTodo></CreateTodo>
    <Todos todos={todo}></Todos>
    </div>
  )
}

export default App
