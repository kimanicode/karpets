import Header from './components/header/Header';
import Hero from './components/Hero/Hero';
import './App.css';
import {BrowserRouter as Router ,Switch, Routes ,Route}from "react-router-dom";
import Order from './components/order/Order'
import Footer from './components/footer/Footer';
import Sidebar from './components/sidebar/Sidebar';
import Login from './components/login/Login';

function App() {
  return (
    <Router >
      <div className="App">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
     
     <Header />
    
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
