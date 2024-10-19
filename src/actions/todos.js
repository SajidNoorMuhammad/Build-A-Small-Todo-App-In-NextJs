"use server"

import { revalidatePath } from "next/cache";

export async function addTodos(formData) {
    const todo = formData.get('todo');
    fetch('https://build-a-small-todo-app-in-next-js.vercel.app/api/todos',
        {
            method: "Post",
            body: JSON.stringify({ todo })
        }
    )
    revalidatePath("/todos")
}