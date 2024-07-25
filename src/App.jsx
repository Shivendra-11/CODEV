import React, { Profiler } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ButtonGradient from './assets/svg/ButtonGradient';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import { ToastContainer } from 'react-toastify';
import Hero from './components/Hero';
import Body from './components/Body';


// Define your components
const Home = () => <h2>Home</h2>; // You can create a Home component if needed

const App = () => {
  
  return (
    <>
    <Router>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
       
        <Routes>
          <Route path='/' element={<Body/>} />

          
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
       
        <ButtonGradient />
       
      </div>
    </Router>
    
    
    
     </>
  );
};

export default App;
