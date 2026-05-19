

export const TodoList = ({ arr }) => {
    return (
        <div>
            <ul>
                {arr.map((todo, i) => (
                    <li key={i}>{todo}</li>
                ))}
            </ul>
        </div>
    )
}
