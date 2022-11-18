import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import Logout from './Logout';
import UserProfile from './UserProfile';

const Header = () => {
    const user = localStorage.user && JSON.parse(localStorage.user);
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const showProfile = useSelector(state => state.showProfile);
    const dispatch = useDispatch();
    return (<>
        <nav>
            <div style={{ width: '73px', height: '73px' }}>
                <a href="/">
                    <img src='./assets/companyLogo.png' alt="LOGO" width="100%"></img>
                </a>
            </div>

            <div className="ButtonsMenu">
                {isLoggedIn == 'true' && user.type == 'employer' &&
                    <Button variant="contained" href="/post-job" style={{ textTransform: "capitalize", background: "#2B1E44" }}>Post Job</Button>
                }
                {isLoggedIn == 'true' ?
                    <Logout ></Logout>
                    :
                    <Button variant="contained" href="/login" style={{ textTransform: "capitalize", background: "#2B1E44" }}>Sign In</Button>
                }
                {isLoggedIn != 'true' &&
                    <Button variant="outlined" href="/sign-up" style={{ textTransform: "capitalize", color: "#2B1E44", border: "2px solid #2B1E44" }}>Sign up</Button>}
            </div>
        </nav>

        {isLoggedIn == 'true' && showProfile && <UserProfile></UserProfile>}
    </>)
}

export default Header;