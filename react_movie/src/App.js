import { useState, useEffect } from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const onClick = () => {
        setCounter((prev) => prev + 1);
    };

    console.log("use api");
    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={onClick}> click me </button>
        </div>
    );
}

export default App;