import { useState } from "react";

const users = [
    {
        name: "Sarah",
        age: 20,
    },
    {
        name: "Alex",
        age: 20,
    },
    {
        name: "Michael",
        age: 20,
    },
];

export default function UserSearch() {
    const [name, setName] = useState("");
    const [user, setUser] = useState<
        { name: string; age: number } | undefined
    >();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const foundUser = users.find((user) => user.name === name);
        setUser(foundUser);
    };

    return (
        <div>
            <h1>User Search</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <h1>
                {user ? `${user.name} is ${user.age} years old` : "User not found"}
            </h1>
        </div>
    );
}
