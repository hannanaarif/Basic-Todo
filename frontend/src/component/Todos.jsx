/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
// eslint-disable-next-line react/prop-types
export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return <div> 
        <h1>{todo.title}</h1>
        <h2>{todo.description}</h2>
        <button>{todo.completed==true?"Complete":"Mark as Complete"}</button>
        </div>
        })}
    </div>
}