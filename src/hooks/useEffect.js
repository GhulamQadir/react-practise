import { useState, useEffect } from "react"
import UseEffectBtn from "./useEffectBtn"

function UseEffectHook() {
    const [todos, setTodos] = useState(["todo 1", "todo 2"])
    const [value, setValue] = useState("")

    const [data, setApiData] = useState("")

    // useEffect
    useEffect(() => {
        console.log("I will run only on first render")
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(jsonData => {
                setApiData(jsonData)
            })
    }, [])


    // jb todos update hongy jb chalega jb value onchange hogi jb bhi
    useEffect(() => {
        console.log("running")
    }, [todos, value])


    useEffect(() => {
        console.log("I will run on every render")
    })

    // last use effect is in button component

    const [btn, setShowBtn] = useState(true)

    return (
        <div>              <h1>Hooks practise</h1>
            <ol>
                {todos.map((value, index) => <li key={index}>{value}</li>)}
            </ol>
            <input value={value} type='text' placeholder='Enter todo' onChange={(e) => setValue(e.target.value)} />
            <button onClick={() => {
                setTodos([...todos, value])
                setValue("")
            }}>Set todo</button>


            {data ? data.map((user, index) => {
                return (<div>
                    <h1>{user.username}</h1>
                    <p>{user.email}</p>
                </div>
                )
            }) : ""}


            {/* last use effect */}
            {btn && <UseEffectBtn />}
            <br />
            <br />
            <button onClick={() => setShowBtn(false)}>Hide Button</button>
        </div>
    )
}
export default UseEffectHook;