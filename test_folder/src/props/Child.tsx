interface ChildProps {
    name: string;
    onClick: () => void;
    children?: React.ReactNode;
}

export function Child({ onClick, name, children }: ChildProps) {
    return (
        <div>
            <p>{name}</p>
            <p>{children}</p>
            <button onClick={onClick}>Click me</button>
        </div>
    );
}
