import './App.css';
import {BrowserRouter, Routes, Route,Link} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import PostJob from "./pages/PostJob";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./utils/PrivateRoute";
import Header from './Component/Header';
import Signup from './pages/SignUp';
function App() {
  return (
  <>
  <BrowserRouter>
  <Header></Header>
  <Routes>
    <Route exact path="/" element={<Home></Home>} />
    <Route path="/login" element={<Login></Login>} />
    <Route path="/home" element={<Home></Home>} />
    <Route path="/about/:id" element={<About></About>}/>
    <Route path="/sign-up" element={<Signup></Signup>}/>
    {/* <Route path="/profile" element={<PrivateRoute Component={Profile}></PrivateRoute>} /> */}
    <Route path="/post-job" element={<PrivateRoute Component={PostJob}></PrivateRoute>}/>
    <Route path="*" element={<NotFound></NotFound>} />
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
