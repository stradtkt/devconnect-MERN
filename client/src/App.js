import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';


const App = () => {
  return (
    <>
      <Router>
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Landing/>}/>
        </Routes>
        <section className='container'>
        <Routes>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
        </Routes>
        </section>
      </Router>
    </>
  );
}

export default App;
