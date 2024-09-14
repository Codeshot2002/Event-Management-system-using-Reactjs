import logo from './logo.svg';
import './App.css';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Create from './components/create-Event/Create';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element= {<Home/>}/>
      <Route path = "/home" element = {<Home/>} />
      <Route path = "/login" element = {<Login/>} />
      <Route path = "/signup" element = {<Signup/>} />
      <Route path = "/create-event" element = {<Create/>} />
    </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
