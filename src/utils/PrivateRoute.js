import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const PrivateRoute = ({ Component, userRole, ...rest }) => {

    const isAuthenticated = useSelector(state => state.isLoggedIn);
    const currentLanguage = useSelector(state => state.currentLanguage);
    // const userType = localStorage.getItem("userType")
    // const isAuthorised = userRole === userType;
    let url = window.location.href;
    var pathname = new URL(url).pathname;
    return (<>
        {(isAuthenticated === 'true') ? <Component /> :
            <>
                {pathname.includes("/candidate-dashboard") && <Navigate to="/candidate-login"></Navigate>}
                {pathname.includes("/employer-dashboard") && <Navigate to={`/${currentLanguage}/employer-login`}></Navigate>}

            </>
        }
    </>)
}

export default PrivateRoute;