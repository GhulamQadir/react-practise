import Links from "../../components/Links/Links";
import { Outlet, useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserDetails from "../../context";
import userEvent from "@testing-library/user-event";

export default function About() {
    const navigate = useNavigate()

    const goToContact = () => {
        navigate('/contact')
    }

    const goToHome = () => {
        navigate('/')
    }

    const { userName } = useContext(UserDetails)
    console.log(userName)
    return (

        <div>
            <h1>This is About Page</h1>
            <Links />
            <br />
            <br />
            <button onClick={goToHome}>go to home</button><br />
            <button onClick={goToContact}>go to contact</button>
            <br />
            <h1>Username: {userName}</h1>
            <br />

            <Outlet />
        </div>
    )
}