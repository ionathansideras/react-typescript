import { useGetPackageQuery } from "./redux/store";
import { useState } from "react";

interface PackageItem {
    package: {
        name: string;
    };
}

function App() {
    const [search, setSearch] = useState<string>("");
    const [query, setQuery] = useState<string>("");
    const { data, error, isFetching } = useGetPackageQuery(query);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    };

    if (isFetching) return <div>Loading...</div>;

    if (error) return <div>Error</div>;

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <ul>
                {data &&
                    data.objects.map((item: PackageItem) => (
                        <li key={item.package.name}>{item.package.name}</li>
                    ))}
            </ul>
        </div>
    );
}

export default App;
