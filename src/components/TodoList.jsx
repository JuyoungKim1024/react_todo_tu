function TodoList({ toggleTodo, removeTodo, todos }) {
    return (
        <>
            <ul style={{ padding: 0 }}>
                {todos.map((item) => (
                    <li
                        key={item.id}
                        style={{ listStyle: 'none', textDecoration: item.completed ? 'line-through' : 'none' }}
                    >
                        id: {item.id}/{JSON.stringify(item.completed)}
                        <input type="checkbox" checked={item.completed} onChange={() => toggleTodo(item.id)} />/
                        {item.todo}/<button onClick={() => removeTodo(item.id)}>삭제</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default TodoList
