import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const PrivateRoute = ({ Component, userRole, ...rest }) => {

    const isAuthenticated = useSelector(state => state.isLoggedIn);
    const userType = localStorage.getItem("userType")
    const isAuthorised = userRole === userType;
    let url = window.location.href;
    var pathname = new URL(url).pathname;
    return (<>
        {(isAuthenticated === 'true' && isAuthorised) ? <Component /> :
            <>
                {pathname.includes("/candidate-dashboard") && <Navigate to="/candidate-login"></Navigate>}
                {pathname.includes("/employer-dashboard") && <Navigate to="/employer-login"></Navigate>}

            </>
        }</>)
}

export default PrivateRoute;