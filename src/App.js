import React, { useState, useEffect } from 'react';
import Header from './components/header/Header';
import Hero from './components/Hero/Hero';
import './App.css';
import {BrowserRouter as Router ,Switch, Routes ,Route}from "react-router-dom";
import Order from './components/order/Order'
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/Sidebar';
import Login from './components/login/Login';


function App() {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const show = currentScrollPos <= 0;

    setShowHeader(show);
  };
  return (
    <Router >
      <div className="App">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
     
      {showHeader &&<Header />}
    
     <Routes>
        <Route path= '/' >
         <Route path = '/'  element={<><Hero/><Order /> </> } exact />

        </Route>
        <Route path='/login' element={<Login />} />
        
      
      
       
     </Routes>
    

     
     
     
     
     <Footer />
   

     
     
    
        
    </div>
    </Router>
  );
}

export default App;
