import UseEffectHook from "./useEffect"
import UseMemoHook from "./useMemo"
import UseRefHook from "./useRef"
import { useCallback, useState } from "react"
function Hooks() {
    const [inputVal, setInputVal] = useState("")
    console.log(inputVal)
    const userName = useCallback(() => {
        return "Ghulam Qadir"
    }, [])

    const [toggle, setToggle] = useState(false)
    const toggleBtn = useCallback(() => {   // useCallback function ko memoize karny k lye ha
        console.log("ma chal rha hu")
        return toggle ? "button true" : "button false";
    }, [toggle])
    return (
        <div>
            {/* <UseEffectHook /> */}
            {/* <UseRefHook /> */}

            {/* {memo and useCallback understanding} */}
            <UseMemoHook name={userName} toggle={toggleBtn} />
            <input onChange={(e) => setInputVal(e.target.value)} type="text" />
            <br />
            <br />
            <button onClick={() => setToggle(!toggle)}>Toggle button</button>
        </div>
    )
}
export default Hooks