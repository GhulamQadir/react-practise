import Links from "../../components/Links/Links";
import { Outlet, useNavigate } from "react-router-dom";



export default function About() {
    const navigate = useNavigate()

    const goToContact = () => {
        navigate('/contact')
    }

    const goToHome = () => {
        navigate('/')
    }
    return (
        <div>
            <h1>This is About Page</h1>
            <Links />
            <br />
            <br />
            <button onClick={goToHome}>go to home</button><br />
            <button onClick={goToContact}>go to contact</button>
            <br />
            <br />
            <Outlet />
        </div>
    )
}