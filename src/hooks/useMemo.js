import { memo, useMemo } from "react";  // sirf memo component ko memoize karny k lye ha or useMemo variable k lye ha

function MemoComponent({ name, toggle }) {
    console.log("ma bar bar nhi chalonga")

    const randomVal = useMemo(() => Math.random() * 10, []) // sirf 1 bar chalega
    return (
        <div>
            <h1>Memo Component</h1>
            <h3>Username: {name()}</h3>
            <br />
            <h2>Toggle : {toggle()}</h2>
            <br />
            <br />
            <h4>{randomVal}</h4>
        </div>
    )
}
export default memo(MemoComponent)
