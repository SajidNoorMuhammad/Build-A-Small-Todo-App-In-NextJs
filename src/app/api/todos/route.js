const todos = [
    {
        id: 1,
        todo: "Task 1",
        isCompleted: false
    },
    {
        id: 2,
        todo: "Task 2",
        isCompleted: false
    },
    {
        id: 3,
        todo: "Task 3",
        isCompleted: false
    },
    {
        id: 4,
        todo: "Task 4",
        isCompleted: false
    },
    {
        id: 5,
        todo: "Task 5",
        isCompleted: false
    },
    {
        id: 6,
        todo: "Task 6",
        isCompleted: false
    },
]

export async function GET(request) {
    return Response.json({
        data: todos,
        msg: "Todos Fetched Successfully"
    })
}

export async function POST(request) {
    const data = await request.json();
    console.log(data);

    return Response
}