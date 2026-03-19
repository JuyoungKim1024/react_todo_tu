function TodoItem({ item, toggleTodo, removeTodo }) {
    return (
        <li
            style={{
                listStyle: 'none',
                textDecoration: item.completed ? 'line-through' : 'none',
            }}
        >
            <input type="checkbox" checked={item.completed} onChange={() => toggleTodo(item.id)} />/
            {JSON.stringify(item.completed)}/id: {item.id}/ /{item.todo}/
            <button onClick={() => removeTodo(item.id)}>삭제</button>
        </li>
    )
}

export default TodoItem
