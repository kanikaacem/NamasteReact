import { Navigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
const PrivateRoute = ({Component}) => {
    const auth = useSelector(state => state.auth);
    return (<>
   { auth ? <Component /> : <h1> Login First</h1>}</>)
}

export default PrivateRoute;