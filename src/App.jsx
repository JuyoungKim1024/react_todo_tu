import { useState } from 'react'

function App() {
    const [todos, setTodos] = useState([
        { todo: '공부하기', completed: true },
        { todo: '청소하기', completed: false },
        { todo: '운동하기', completed: false },
    ])

    const handleOnSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        if (!form[0].value.trim()) {
            alert('할 일을 입력하세요.')
            return
        }
        setTodos([...todos, { todo: form[0].value, completed: false }])
        form[0].value = ''
    }

    const removeTodo = (index) => {
        const newState = todos.filter((_, i) => i !== index)
        setTodos(newState)
    }
    const toggleTodo = (index) => {
        const newState = todos.map((item, i) => (item, i === index ? { ...item, completed: !item.completed } : item))
        setTodos(newState)
    }

    return (
        <>
            <h1>할 일 목록</h1>
            <form onSubmit={handleOnSubmit}>
                <input type="text" placeholder="할 일을 입력하세요" />
                <button type="submit">입력</button>
            </form>

            <ul style={{ padding: 0 }}>
                {todos.map((item, index) => (
                    <li key={index} style={{ listStyle: 'none' }}>
                        {JSON.stringify(item.completed)}
                        <input type="checkbox" checked={item.completed} onChange={() => toggleTodo(index)} />/
                        {item.todo}/<button onClick={() => removeTodo(index)}>삭제</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
