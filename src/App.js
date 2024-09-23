import React from 'react'
import { useState, useEffect } from 'react';
import './App.css'
import Car from './images/car.jpg'
import Header from './components/header';
import Footer from './components/footer';
import users from './utils/usersData';
import { Button } from './components/buttons/button1';
import { Button as Button2 } from './components/buttons/button2';
import Card from './components/card/card';
import MainComponent from './components/mainComponent';
import QrCode from './components/qr-code';
import Login from './components/login';
import UseEffectBtn from './hooks/useEffectBtn';
import AppRouter from './config/router';
import TailwindPractise from './libraries/tailwind/tailwind-practise'
import Demo from './libraries/Maintine practise/AppLayout';
import Theme from './libraries/Maintine practise/theme';
import { MantineProvider } from '@mantine/core';
import CollapseDesktop from './libraries/Maintine practise/AppShell'
import BasicForm from './libraries/Formik/Form';
import UserDetails from './context';
import CartContext from './pages/Ecommerce-App/context';
import EcommerceAppRouter from './pages/Ecommerce-App/config/router';
// importing all images
const images = require.context('./images', true)
const imageList = images.keys().map(image => images(image));


// let myName = "Ghulam Qadir"
// function App() {

//   const fruitsNames = [{ name: "Apple" }, { name: "Mango" }, { name: "Banana" }, { name: "Orange" }];
//   let isUserLoggedIn = true
//   let userName;
//   const getUserName = (name) => {
//     userName = name
//     console.log(userName)
//   }
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <Header />
//         <img src={imageList[0]} className="cars" alt="Car" />
//         <img src={require('./images/car1.jpg')} className="cars" alt="Car1" />
//         <h2>{myName}</h2>
//       </header>

//       <ul>
//         {fruitsNames.reverse().map((data, index) => {
//           console.log(data)
//           return <li key={index}>{index}: {data.name}</li>
//         })}
//       </ul>
//       <Footer /> */}

//       {/* conditional rendering */}
//       {/* {isUserLoggedIn ? <h1>You are logged in!</h1> : ""}

//       <Button /> <br />
//       <Button2 />

//       <div>
//         {users.map((user, index) => {
//           let { username, email, address, phone, company } = user
//           return <div className='userDiv'>
//             <h1>{username}</h1>
//             <p>Email: {email}</p>
//             <p>Phone: {phone}</p>
//             <h3>Address: {address.street}, {address.city}</h3>
//           </div>
//         }
//         )}
//       </div> */}


//       {/* understanding props */}

//       {/* <Card name="Sportage" image="https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80" />
//       <Card name="Vitz" image="https://global.toyota/pages/news/images/2017/01/12/1330/20170112_01_ogp.jpg" /> */}


//       {/* passing data from child to parent */}
//       {/* <MainComponent setUserName={getUserName} />



//       <QrCode /> */}

//       {/* <Login /> */}


//     </div>
//   );
// }
// export default App;




// // react router
// export default function App() {
//   const [userName, setUserName] = useState("")
//   return (
//     <UserDetails.Provider value={{ userName, setUserName }}>
//       <MantineProvider>
//         {/* <Theme /> */}
//         {/* <CollapseDesktop /> */}
//         <AppRouter />
//         {/* <TailwindPractise /> */}

//         {/* <BasicForm /> */}
//       </MantineProvider>
//     </UserDetails.Provider>)
// }


// ECOMMERCE APP
export default function App() {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <EcommerceAppRouter />
    </CartContext.Provider>)
}


