import { useState } from 'react'

function App() {
    const [Todo, setTodo] = useState(['공부하기', '청소하기', '운동하기'])

    const addTodo = () => {
        setTodo([...Todo, '새로운 할 일'])
    }
    return (
        <>
            <h1>할 일 목록</h1>
            <form>
                <input type="text" placeholder="할 일을 입력하세요" />
                <button type="submit" onClick={addTodo}>
                    입력
                </button>
            </form>

            <ul>
                {Todo.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </>
    )
}

export default App
