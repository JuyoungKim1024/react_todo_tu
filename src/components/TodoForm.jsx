function TodoForm({ handleOnSubmit }) {
    return (
        <>
            <h1>할 일 목록</h1>
            <form onSubmit={handleOnSubmit}>
                <input type="text" placeholder="할 일을 입력하세요" />
                <button type="submit">입력</button>
            </form>
        </>
    )
}

export default TodoForm
