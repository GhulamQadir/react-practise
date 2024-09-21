import { useEffect, useState } from "react";
import Links from "../../components/Links/Links";
import { useNavigate } from "react-router-dom";
import Login from "../../components/login";
import Hooks from "../../hooks/hooks";
import { useContext } from "react";
import UserDetails from "../../context";
import DrawerAppBar from "../../libraries/material-ui/DrawerAppBar";

export default function Home() {
  const navigate = useNavigate()

  const goToAbout = () => {
    navigate('/about')
  }

  const goToContact = () => {
    navigate('/contact')
  }
  const { userName, setUserName } = useContext(UserDetails)
  console.log(userName)
  return (
    <div>
      <h1>This is Home Page</h1>
      <Links />
      <br />
      <br />
      <button onClick={goToAbout}>go to About</button><br />
      <button onClick={goToContact}>go to contact</button>
      <br />
      <h1>Username: {userName}</h1>
      <br />
      <button onClick={() => setUserName("Ghulam Qadir")}>Update userName</button>
      {/* <Login /> */}
      {/* <Hooks /> */}


    </div>
  );
}
