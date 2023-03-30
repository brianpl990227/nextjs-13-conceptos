'use client'
import { useState } from "react";

export default function Count() {

    const [count, setCount] = useState(0)

    return (
        <div>
            <h4>Contador: {count}</h4>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    )
}