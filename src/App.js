import './App.css';
import {BrowserRouter, Routes, Route,Link} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Button from '@mui/material/Button';
import PrivateRoute from "./utils/PrivateRoute";
//import {useState} from "react";
import {useSelector, useDispatch} from 'react-redux'

function App() {
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  return (
  <>
  <BrowserRouter>
  {/* <nav>
    <ul>
      <li> <Link to="/" >Home</Link></li>
      <li> <Link to="/about/1">About 1</Link></li>
      <li> <Link to="/about/2">About 2</Link></li>
      <li> <Link to="/profile">Profile</Link></li>
    </ul>

    {auth ? <Button variant="contained" onClick={() => dispatch({type:"LOGOUT"})}>Logout</Button> : 
    <Button variant="contained" onClick={() => dispatch({type:"LOGIN"})}>Login</Button>}
   
  </nav> */}
  <Routes>
    <Route exact path="/" element={<Home></Home>} />
    <Route path="/home" element={<Home></Home>} />
    <Route path="/about/:id" element={<About></About>}/>
    <Route path="/profile" element={<PrivateRoute Component={Profile}></PrivateRoute>} />
    <Route path="*" element={<NotFound></NotFound>} />
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
