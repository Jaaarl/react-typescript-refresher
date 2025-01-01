import {useEffect, useState} from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }
    useEffect(() => {
        setCount(prevCount => prevCount + 10)
    }, [])


    return (
        <>
            <div className={"flex flex-row items-center gap-2"}>
                <button className={"border p-2 border-blue-500"} onClick={handleIncrement}>+</button>
                <p>{count}</p>
                <button className={"border p-2 border-blue-500"} onClick={handleDecrement}>-</button>
            </div>
        </>
    )
}