import Header from './components/header/Header';
import Hero from './components/Hero/Hero';
import './App.css';
import {BrowserRouter as Router ,Switch, Routes ,Route}from "react-router-dom";
import Order from './components/order/Order'
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div className="App">
     
     <Header />
     
     <Routes>
       <Route path = '/' element={<Hero />} />
     </Routes>
     <Order />
     
     <Footer />
   

     
     
    
        
    </div>
    </Router>
  );
}

export default App;
