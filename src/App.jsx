// App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ButtonGradient from './assets/svg/ButtonGradient';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';

// Define your components
const Home = () => <h2>Home</h2>; // You can create a Home component if needed

// Create your router instance
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Replace with your Home component if you have one
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

const App = () => {
  return (
    <>
     <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
      
      </div>
      <ButtonGradient />
      </>
     

  );
};

export default App;
