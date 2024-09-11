import { useState, useRef } from "react"
function UseRefHook() {
    const [count, setCount] = useState(0)

    const headingRef = useRef(null)

    const btnRef = useRef(null)

    const increment = () => {
        setCount((oldVal) => oldVal + 1)
        headingRef.current.textContent = "Value Incremented"

    }

    const decrement = () => {
        setCount((oldVal) => oldVal - 1)
        headingRef.current.textContent = "Value Decremented"
    }

    const inputRef = useRef(null)
    const submit = () => {
        if (inputRef.current.value === "") {
            inputRef.current.focus()
            inputRef.current.style.outlineColor = "red"
        }
    }

    return (
        <div>
            <h1 ref={headingRef}>Value</h1>
            <br />
            <br />
            <h3>Count: {count}</h3>
            <button onClick={increment}>+</button>
            <button disabled={count < 1} onClick={decrement}>-</button>
            <br />
            <br />
            <h1>Example 2</h1>
            <br />
            <input ref={inputRef} type="text" placeholder="Username" />
            <button onClick={submit}>Submit</button>

        </div>
    )
}
export default UseRefHook