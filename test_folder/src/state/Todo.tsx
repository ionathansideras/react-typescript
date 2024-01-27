import { useState } from "react";

export default function Todo() {
    const [todos, setTodos] = useState<string[]>([]);
    const [input, setInput] = useState<string>("");

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setTodos([...todos, input]);
        setInput("");
    }
    
    return <div>
        <h1>Todo</h1>
        <ul>
            {todos.map((todo, index) => <li key={index}>{todo}</li>)}
        </ul>
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    </div>;
}
