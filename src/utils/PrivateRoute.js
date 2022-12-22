import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const PrivateRoute = ({ Component }) => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    // console.log(auth);
    //const authenticated = localStorage.getItem('authenticated');
    return (<>
        {isLoggedIn === 'true' ? <Component /> : <Navigate to="/employer-login"></Navigate>}</>)
}

export default PrivateRoute;