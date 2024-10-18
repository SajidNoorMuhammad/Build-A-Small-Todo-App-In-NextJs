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
            <h1 className=' text-3xl font-bold text-purple-800 text-center'>Todos Page</h1>
            <div className=' mx-[10%]'>

                <div className=' relative flex mt-10'>
                    <input
                        placeholder=' Add Task'
                        type='text'
                        className=' border-2 border-purple-800 p-3 w-[100%] rounded-md outline-none'
                    />
                    <button className=' py-3 mt-[2px] px-6 bg-purple-600 rounded absolute right-[2.5px]'>
                        Add Task
                    </button>
                </div>
                {
                    todo?.data?.map((todos) => (

                        <Link href={`/todos/${todos.id}`}>
                            <div className='bg-gray-200 rounded'>
                                <h1 className='  mt-2 p-3 text-2xl font-serif'>{todos.todo}</h1>
                            </div>
                        </Link>
                    ))
                }
            </div>

        </div>
    )
}

export default Todo;
