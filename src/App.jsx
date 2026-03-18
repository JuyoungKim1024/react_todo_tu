import { useState } from 'react'

function App() {
    const [todos, setTodos] = useState(['공부하기', '청소하기', '운동하기'])

    const onSubmit = (e) => {
        e.preventDefault()
        const newTodo = e.target[0].value
        setTodos([...todos, newTodo])
    }

    const addTodo = () => {
        setTodos([...todos])
    }
    const removeTodo = (index) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }
    return (
        <>
            <h1>할 일 목록</h1>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="할 일을 입력하세요" />
                <button type="submit" onClick={addTodo}>
                    입력
                </button>
            </form>

            <ul>
                {todos.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => removeTodo(index)}>삭제</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
