import { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/todos')
            .then((res) => res.json())
            .then((res) => setTodos(res.todos))
    }, [])

    const addTodo = (todo) => {
        fetch('https://dummyjson.com/todos/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                todo,
                completed: false,
                userId: 5,
            }),
        })
            .then((res) => res.json())
            .then(console.log)
    }

    const removeTodo = (selectedId) => {
        //const newState = todos.filter((item) => item.id !== selectedId)
        //setTodos(newState)
        fetch(`https://dummyjson.com/todos/${selectedId}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then(console.log)
    }
    const toggleTodo = (selectedId) => {
        const newState = todos.map((item) => (item.id === selectedId ? { ...item, completed: !item.completed } : item))
        setTodos(newState)
    }

    return (
        <>
            <TodoForm addTodo={addTodo} />

            <TodoList toggleTodo={toggleTodo} removeTodo={removeTodo} todos={todos} />
        </>
    )
}
export default App
