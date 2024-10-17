import React from 'react'

const Todo = async () => {

    let todo = await fetch('http://localhost:3000/api/todos');
    todo = await todo.json();
    console.log(todo)

    return (
        <div>
            <h1 className=' text-3xl font-bold text-purple-950 text-center'>Todos Page</h1>
        </div>
    )
}

export default Todo;
