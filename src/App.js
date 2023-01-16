
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './About';
import HomePage from './HomePage';
import Layout from './Layout';
import { useState } from 'react';
import Login from './login/Login';
import SignUpForm from './login/SignUp';
import PrivateRoute from './PrivateRoute';


function App() {
const [isRegistered, setIsRegistered] =useState(false)
  const[isLogin, setIsLogin] =useState(false)
  const[userInput, setUserInput] =useState({
    username:"",
    Email:"",
    Password:"",
    confirmPassword:"",
  })
  return (
    <div className="App">

 

      {isRegistered
      ?isLogin  
       ? <BrowserRouter>
      <Layout>
           <PrivateRoute/>
           </Layout>
           </BrowserRouter> 
        :<Login userInput={userInput} setIsLogin={setIsLogin}/>
      :<SignUpForm userInput={userInput} setUserInput={setUserInput} setIsRegistered={setIsRegistered}/>} 

     
    </div>
  );
}

export default App;
