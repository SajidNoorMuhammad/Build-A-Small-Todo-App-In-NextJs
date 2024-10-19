"use server"

import { revalidatePath } from "next/cache";

export async function addTodos(formData) {
    const todo = formData.get('todo');
    fetch('http://localhost:3000/api/todos',
        {
            method: "Post",
            body: JSON.stringify({ todo })
        }
    )
    revalidatePath("/todos")
}