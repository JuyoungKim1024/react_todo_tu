import { useRef, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
    const [todos, setTodos] = useState([
        { id: 1, todo: '공부하기', completed: true },
        { id: 2, todo: '청소하기', completed: false },
        { id: 3, todo: '운동하기', completed: false },
    ])
    let lastId = useRef(4)
    const addTodo = (todo) => {
        const todoItem = { id: lastId.current, todo, completed: false }
        setTodos([...todos, todoItem])

        lastId.current++
    }
    const removeTodo = (selectedId) => {
        const newState = todos.filter((item) => item.id !== selectedId)
        setTodos(newState)
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
