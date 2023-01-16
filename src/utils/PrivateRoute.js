import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const PrivateRoute = ({ Component }) => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    let url = window.location.href;
    var pathname = new URL(url).pathname;
    return (<>

        {isLoggedIn === 'true' ? <Component /> :
            <>
                {pathname.includes("/candidate-dashboard") && <Navigate to="/candidate-login"></Navigate>}
                {pathname.includes("/employer-dashboard") && <Navigate to="/employer-login"></Navigate>}

            </>
        }</>)
}

export default PrivateRoute;