import { useRef, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
    const [todos, setTodos] = useState([
        { id: 1, todo: '공부하기', completed: true },
        { id: 2, todo: '청소하기', completed: false },
        { id: 3, todo: '운동하기', completed: false },
    ])
    let LastId = useRef(4)
    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        if (!form[0].value.trim()) {
            alert('할 일을 입력하세요.')
            return
        }
        setTodos([...todos, { id: LastId.current, todo: form[0].value, completed: false }])
        LastId.current++
        form[0].value = ''
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
            <TodoForm handleOnSubmit={handleOnSubmit} />

            <TodoList toggleTodo={toggleTodo} removeTodo={removeTodo} todos={todos} />
        </>
    )
}

export default App
