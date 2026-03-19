import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function TodoDetail() {
    const { id } = useParams()
    const [todo, setTodo] = useState({})
    useEffect(() => {
        fetch(`https://dummyjson.com/todos/${id}`)
            .then((res) => res.json())
            .then((res) => setTodo(res))
    }, [])
    if (!todo.id) return <h1>Loading...</h1>
    return (
        <ul>
            <li>ID: {todo.id}</li>
            <li>Todo: {todo.todo}</li>
            <li>Completed: {todo.completed ? 'Yes' : 'No'}</li>
        </ul>
    )
}

export default TodoDetail
