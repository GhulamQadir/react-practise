import Links from "../../components/Links/Links";
import { useNavigate } from "react-router-dom";

export default function Contact() {
    const navigate = useNavigate()

    const goToAbout = () => {
        navigate('/about')
    }

    const goToHome = () => {
        navigate('/home')
    }
    return (
        <div>
            <h1>This is Contact Page</h1>
            <Links />
            <br />
            <br />
            <button onClick={goToAbout}>go to About</button><br />
            <button onClick={goToHome}>go to home</button>

        </div>
    );
}
