export default function MainComponent({ setUserName }) {
    return <div>
        <h1>This is Main Component</h1>
        <button onClick={() => setUserName("Ghulam Qadir")}>Main Button</button>
    </div>;
}
