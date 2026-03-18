import { useState } from 'react'

function App() {
    const [Todo, setTodo] = useState(['공부하기', '청소하기', '운동하기'])

    const addTodo = () => {
        setTodo([...Todo, '새로운 할 일'])
    }
    return (
        <>
            <h1>할 일 목록</h1>
            <ul>
                {Todo.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <button onClick={addTodo}>할 일 추가</button>
        </>
    )
}

export default App
