import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
const PrivateRoute = ({ Component }) => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    let url = window.location.href;
    var pathname = new URL(url).pathname;

    // console.log(auth);
    //const authenticated = localStorage.getItem('authenticated');
    return (<>

        {isLoggedIn === 'true' ? <Component /> :
            <>
                {pathname == "/candidate-dashboard" && <Navigate to="/candidate-login"></Navigate>}
                {pathname == "/employer-dashboard" && <Navigate to="/employer-login"></Navigate>}

            </>
        }</>)
}

export default PrivateRoute;