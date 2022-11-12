import ClickAwayListener from '@mui/material/ClickAwayListener';
import CloseIcon from '@mui/icons-material/Close';
import SettingsIcon from '@mui/icons-material/Settings';
import QuizIcon from '@mui/icons-material/Quiz';
import LogoutIcon from '@mui/icons-material/Logout';
import Badge from '@mui/material/Badge';
// import { Link} from "react-router-dom";
import { useDispatch } from 'react-redux';

const UserProfile = () => {
    const dispatch = useDispatch();

    const closeProfile = () => {
        dispatch({ type: 'SHOW_HIDE_PROFILE' })
    }

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
    }

    return (<>
        <div className="UserProfileWrapper">
            <ClickAwayListener onClickAway={closeProfile}>
                <div className="UserProfile">

                    <div className="closeButton" style={{ float: 'right', cursor: 'pointer' }} onClick={closeProfile}>
                        <CloseIcon />
                    </div>

                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        height: "110px"
                    }}>
                        <div style={{ width: '70px', height: '70px', position: 'relative' }}>
                            <img className="userProfileImage" src="./assets/Company.png" alt="userProfileImage" />
                        </div>
                        <div className="updatedProfileProgress"> 93%</div>
                        <div className="userProfieDescription">
                            <div><b>Name</b></div>
                            <div>Developer</div>
                            <div className="updateProfile">View & Update Profile </div>
                        </div>
                    </div>


                    <hr></hr>
                    <div className="profilePerformance">
                        <span><b> Your Profile Performance</b></span>
                        <div style={{
                            display: "flex",
                            gap: "20px",
                            margin: "20px 0px"
                        }}>
                            <div className="performanceItem">
                                <div>
                                    <Badge color="secondary" variant="dot">
                                        1834
                                    </Badge>
                                </div>
                                <div className="performanceDot"></div>
                                <div>Search Appearances</div>
                                <div className="viewAll">View All</div>
                            </div>
                            <div className="performanceItem">
                                <div>
                                    <Badge color="secondary" variant="dot">
                                        104
                                    </Badge>
                                </div>
                                <div>Recuriter Actions</div>
                                <div className="viewAll">View All</div>
                            </div>
                        </div>
                    </div>
                    <div className="Settings">
                        <div><SettingsIcon></SettingsIcon> <span> Settings </span></div>
                        <div><QuizIcon></QuizIcon> FAQ</div>
                        <div onClick={logout}><LogoutIcon></LogoutIcon> Logout</div>
                    </div>

                </div>
            </ClickAwayListener>
        </div>
    </>)
}
export default UserProfile;