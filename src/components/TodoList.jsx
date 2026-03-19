import TodoItem from './TodoItem'

function TodoList({ toggleTodo, removeTodo, todos }) {
    return (
        <>
            <ul style={{ padding: 0 }}>
                {todos.map((item) => (
                    <TodoItem key={item.id} item={item} toggleTodo={toggleTodo} removeTodo={removeTodo} />
                ))}
            </ul>
        </>
    )
}

export default TodoList
