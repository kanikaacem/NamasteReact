import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import PostJob from "./pages/PostJob";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./utils/PrivateRoute";
import Header from './Component/Header';
import EmployerRegister from './pages/EmployerRegister';
import EmployerDashboard from './pages/EmployerDashboard';
import UserRegistration from "./pages/UserRegistration";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/home" element={<Home></Home>} />
          <Route path="/employer-dashboard" element={<PrivateRoute Component={EmployerDashboard}></PrivateRoute>} />
          <Route path="/about/:id" element={<About></About>} />
          <Route path="/employeer-register" element={<EmployerRegister></EmployerRegister>} />
          <Route path="/user-signup" element={<UserRegistration></UserRegistration>}></Route>
          <Route path="/post-job" element={<PrivateRoute Component={PostJob}></PrivateRoute>} />
          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
