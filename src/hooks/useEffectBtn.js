import { useEffect } from "react";

export default function UseEffectBtn() {
    // jb component khtam hojayga jb chalega
    useEffect(() => {
        return () => {
            console.log("component finish")
        }
    }, [])
    return (
        <button>Showing</button>
    )
}