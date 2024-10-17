import Link from 'next/link';
import React from 'react'

const Todo = async () => {

    let todo = await fetch('http://localhost:3000/api/todos', {
        cache: "no-cache"
    });
    todo = await todo.json();
    console.log(todo)

    return (
        <div>
            <h1 className=' text-3xl font-bold text-purple-950 text-center'>Todos Page</h1>
            {
                todo?.data?.map((todos) => (

                    <Link href={`/todos/${todos.id}`}>
                        <div className='bg-gray-200 mx-[10%] rounded'>
                            <h1 className='  mt-2 p-3 text-2xl font-serif'>{todos.todo}</h1>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Todo;
