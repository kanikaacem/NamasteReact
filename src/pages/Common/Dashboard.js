import { UserInformationURL } from "../../utils/ApiUrls";
import { postRequest } from "../../utils/ApiRequests";

import { NavLink, Link, Outlet } from "react-router-dom";
import { Avatar, Box, Stack, Badge, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

import WorkIcon from '@mui/icons-material/Work';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReorderIcon from '@mui/icons-material/Reorder';

import { EmployerMenu, CandidateMenu } from "../../utils/Data.js";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CandidateLogoutMenu } from "../../utils/Data";

import Moment from 'react-moment';

import ClickAwayListener from '@mui/base/ClickAwayListener';
import CompanyLogo from "../../ThemeComponent/Common/CompanyLogo";
import Footer from "../../ThemeComponent/Common/Footer";

import DashboardAccountSetting from "../../ThemeComponent/Common/DashboardAccountSetting";

// import PostJob from "./PostJob";
const Dashboard = () => {
    const user = localStorage.user && JSON.parse(localStorage.user);

    const [openProfile, setOpenProfile] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [userInformation, setUserInformation] = useState(user);
    const dispatch = useDispatch();
    const EmployeeMenuSelected = useSelector(state => state.EmployeeMenuSelected);
    const CandidateMenuSelected = useSelector(state => state.CandidateMenuSelected);

    return (<>
        <Box
            className="dashboard"
            sx={{
                background: "#FAFAFA",
                width: "100%",
            }}
        >
            <Stack direction="column"
                sx={{
                    width: "100%",
                    height: "inherit"
                }}>


                <Stack direction="row" gap={3} sx={{ height: "50px", padding: "20px 50px", alignItems: "center", justifyContent: "space-between" }}>
                    <Box sx={{ maxWidth: "15%" }}>
                        <Box sx={{ width: "fit-content", marginTop: "10px", height: "50px" }} >
                            <CompanyLogo color="#4E3A67" />
                        </Box>
                    </Box>
                    <Box direction="row" sx={{
                        width: "75%",
                        display: { "lg": "block", "md": "block", "xs": "none" }
                    }}>
                        <List sx={{ display: "flex" }}>

                            {userInformation && userInformation.employer_type == "employer" && EmployerMenu.map((item) => {
                                return (<>
                                    <ListItem sx={{ width: { "lg": "fit-content", "md": "max-content" } }}
                                        button key={item.id} to={item.url} component={NavLink}
                                        className="menu"
                                        id={item.id}
                                        onClick={() => { dispatch({ type: "CHANGE_EMPLOYEE_MENU", payload: item.value }) }} >
                                        <ListItemText
                                            disableTypography
                                            sx={{
                                                fontSize: { "lg": `20px !important`, "md": "16px !important" }, color: "#4E3A67"
                                            }}
                                            className={EmployeeMenuSelected === item.value && "EmployeeMenuSelected"} primary={item.MenuName} />
                                    </ListItem>
                                </>)
                            })}


                            {userInformation && userInformation.data && userInformation.data.type == "candidate" && CandidateMenu.map((item) => {
                                return (<>
                                    <ListItem sx={{ width: { "lg": "fit-content", "md": "max-content" } }}
                                        button key={item.id} to={item.url} component={NavLink}
                                        className={CandidateMenuSelected === item.value && "CandidateMenuSelected"}
                                        id={item.id}
                                        onClick={() => { dispatch({ type: "CHANGE_CANDIDATE_MENU", payload: item.value }) }} >

                                        <ListItemText
                                            disableTypography
                                            sx={{
                                                fontSize: { "lg": `20px !important`, "md": "16px !important" }, color: "#4E3A67"
                                            }}
                                            primary={item.MenuName} />
                                    </ListItem>

                                </>
                                )
                            })}


                        </List>

                    </Box>
                    <Stack direction="row" gap={3} justifyContent="flex-end" alignItems="center" sx={{ maxWidth: "10%" }}>
                        <Box sx={{
                            display: { "lg": "none", "md": "none", "xs": "block" },
                            position: "relative"
                        }}>
                            <ReorderIcon onClick={() => setOpenMenu(!openMenu)} />
                        </Box>
                        {openMenu && userInformation && userInformation.employer_type == "employer" && (<>
                            <ClickAwayListener onClickAway={() => setOpenMenu(!openMenu)}>

                                <Box sx={{
                                    position: "absolute",
                                    top: "75px",
                                    background: "#FFFFFF",
                                    right: "10px",
                                    width: "300px",
                                    zIndex: "345235"
                                }}>
                                    <Box direction="row" sx={{
                                        width: "100%"
                                    }}>
                                        <List sx={{ display: "flex", flexDirection: "column" }}>

                                            {EmployerMenu.map((item) => {
                                                return (<>
                                                    <ListItem sx={{ width: { "lg": "fit-content", "md": "max-content" } }}
                                                        button key={item.id} to={item.url} component={NavLink}
                                                        className="menu"
                                                        id={item.id}
                                                        onClick={() => { dispatch({ type: "CHANGE_EMPLOYEE_MENU", payload: item.value }) }} >
                                                        <ListItemText
                                                            disableTypography
                                                            sx={{
                                                                fontSize: { "lg": "20px !important", "md": "16px !important" }, color: "#4E3A67"
                                                            }}
                                                            className={EmployeeMenuSelected === item.value && "EmployeeMenuSelected"} primary={item.MenuName} />
                                                    </ListItem>
                                                </>)
                                            })}
                                        </List>
                                    </Box>


                                </Box>
                            </ClickAwayListener >

                        </>
                        )}

                        {openMenu && userInformation && userInformation.data && userInformation.data.type == "candidate" && (<>
                            <ClickAwayListener onClickAway={() => setOpenMenu(!openMenu)}>

                                <Box sx={{
                                    position: "absolute",
                                    top: "75px",
                                    background: "#FFFFFF",
                                    right: "10px",
                                    width: "300px",
                                    zIndex: "345235"
                                }}>
                                    <Box direction="row" sx={{
                                        width: "100%"
                                    }}>
                                        <List sx={{ display: "flex", flexDirection: "column" }}>

                                            {CandidateMenu.map((item) => {
                                                return (<>
                                                    <ListItem sx={{ width: { "lg": "fit-content", "md": "max-content" } }}
                                                        button key={item.id} to={item.url} component={NavLink}
                                                        className="menu"
                                                        id={item.id}
                                                        onClick={() => { dispatch({ type: "CHANGE_CANDIDATE_MENU", payload: item.value }) }} >
                                                        <ListItemText
                                                            disableTypography
                                                            sx={{
                                                                fontSize: { "lg": "20px !important", "md": "16px !important" }, color: "#4E3A67"
                                                            }}
                                                            className={CandidateMenuSelected === item.value && "CandidateMenuSelected"}
                                                            primary={item.MenuName} />
                                                    </ListItem>
                                                </>)
                                            })}
                                        </List>
                                    </Box>


                                </Box>
                            </ClickAwayListener >

                        </>
                        )}
                        <Badge badgeContent={4} color="primary" sx={{ cursor: "pointer" }}
                            onClick={() => window.location.href = window.location.origin + '/employer-dashboard/chats'}>
                            <MailOutlineIcon></MailOutlineIcon>
                        </Badge>

                        <Box sx={{ cursor: "pointer" }} onClick={() => setOpenProfile(!openProfile)}>
                            <Avatar alt={user.fullname} />
                        </Box>
                    </Stack>
                    {openProfile && (<>

                        {user && user.employer_type == "employer" &&
                            <DashboardAccountSetting
                                userName={user && user.employer_name}
                                userEmail={user && user.employer_email}
                                userLastLogin={user && user.lastlogin}
                                userType="employer" />
                        }

                        {user && user.data && user.data.type == "candidate" &&
                            <DashboardAccountSetting
                                userName={user && user.data && user.data.personalInfo && user.data.personalInfo.fullname}
                                userEmail={user && user.data && user.data.personalInfo && user.data.personalInfo.email}
                                userLastLogin={user && user.data && user.data.lastlogin}
                                userType="candidate" />
                        }

                    </>
                    )}

                </Stack>

                {/* Dashboard based on the user */}
                <Box sx={{ background: "#FAFAFA", minHeight: `calc(100vh - 50px)`, width: '100%' }}>
                    <Outlet context={userInformation}></Outlet>
                </Box>

            </Stack>

            <Footer />

        </Box >


    </>)
}

export default Dashboard;