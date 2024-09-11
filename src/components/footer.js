

function Footer() {
    const checkBtn = (userName) => {
        console.log(userName)
    }
    return (
        <>
            <h1>Footer</h1>
            <button onClick={() => checkBtn("Ghulam Qadir")}>CLick me!</button>
        </>
    )
}
export default Footer