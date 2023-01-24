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

import { EmployerMenu, CandidateMenu } from "../../utils/Data.js";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { CandidateLogoutMenu } from "../../utils/Data";

import Moment from 'react-moment';

import Footer from "../../ThemeComponent/Common/Footer";

// import PostJob from "./PostJob";
const Dashboard = () => {
    const user = localStorage.user && JSON.parse(localStorage.user);

    const [openProfile, setOpenProfile] = useState(false);
    const [userInformation, setUserInformation] = useState(user);
    const dispatch = useDispatch();
    const EmployeeMenuSelected = useSelector(state => state.EmployeeMenuSelected);
    const CandidateMenuSelected = useSelector(state => state.CandidateMenuSelected);
    // useEffect(() => {
    //     const getUserInformation = async () => {
    //         console.log("I runnde")
    //         let response = await postRequest(UserInformationURL);
    //         console.log(response);
    //         if (response.status == 1) {
    //             let userInformation = response.data;
    //             console.log(userInformation);
    //             setUserInformation(userInformation);
    //         }

    //     }
    //     getUserInformation();

    // }, []);
    //http://13.235.183.204:3001/demouser
    //http://13.235.183.204:3001/api/
    return (<>
        <Box
            className="dashboard"
            sx={{
                background: "#FAFAFA",
                width: "100%",
            }}
        >
            <Stack direction={userInformation && userInformation.employer_type == "employer" ? "column" : "row"}
                sx={{
                    width: "100%",
                    height: "inherit"
                }}>

                {userInformation && userInformation.employer_type == "employer" && (<>
                    <Stack direction="row" gap={3} sx={{ height: "50px", padding: "10px 50px", alignItems: "center" }}>
                        <Box sx={{ width: "5%" }}>
                            <Box sx={{ width: "50px", height: "50px" }} >
                                <Link to="/">
                                    <img src={window.location.origin + "/assets/companyLogo.png"} width="100%" height="100%" alt="companyLogo" />
                                </Link>
                            </Box>
                        </Box>
                        <Box direction="row" sx={{ width: "75%" }}>
                            <List sx={{ display: "flex" }}>

                                {EmployerMenu.map((item) => {
                                    return (<>
                                        <ListItem sx={{ width: "fit-content" }}
                                            button key={item.id} to={item.url} component={NavLink}
                                            className="menu"
                                            id={item.id}
                                            onClick={() => { dispatch({ type: "CHANGE_EMPLOYEE_MENU", payload: item.value }) }} >
                                            <ListItemText className={EmployeeMenuSelected === item.value && "EmployeeMenuSelected"} primary={item.MenuName} />
                                        </ListItem>
                                    </>)
                                })}
                            </List>
                        </Box>
                        <Stack direction="row" gap={3} justifyContent="flex-end" alignItems="center" sx={{ width: "20%" }}>
                            <Badge badgeContent={4} color="primary" sx={{ cursor: "pointer" }}
                                onClick={() => window.location.href = window.location.origin + '/employer-dashboard/chats'}>
                                <MailOutlineIcon></MailOutlineIcon>
                            </Badge>

                            <Box sx={{ cursor: "pointer" }} onClick={() => setOpenProfile(!openProfile)}>
                                <Avatar alt={user.fullname} />
                            </Box>
                        </Stack>
                        {openProfile && (<>
                            <Box sx={{
                                position: "absolute",
                                top: "75px",
                                background: "#FFFFFF",
                                right: "10px",
                                width: "300px",
                                zIndex: "345235"
                            }}>
                                <Box sx={{ background: "#1f8f75", padding: "20px", height: "70px" }}>
                                    <Typography component="div" sx={{ fontSize: "20px", color: "#FFFFFF" }}>
                                        {user.employer_name ? user.employer_name : user.fullname}
                                    </Typography>
                                    <Typography component="div" sx={{ fontSize: "16px", color: "#FFFFFF" }}>
                                        {user.employer_email}
                                    </Typography>
                                </Box>
                                <Box sx={{
                                    background: "#0a6e56",
                                    color: "#FFFFFF",
                                    padding: "5px",
                                    fontSize: "12px"
                                }}>
                                    Last Login :
                                    <Moment format="DD/MM/YYYY">
                                        {user && user.lastlogin}
                                    </Moment>
                                </Box>


                                {
                                    user && user.employer_type == "employer" && (<>
                                        <Stack gap={2} direction="column" sx={{ background: "#FFFFFF", padding: "20px" }}>
                                            <Typography component="div" sx={{ fontSize: "14px" }}>
                                                Basic Postings : Unlimited
                                            </Typography>

                                            <Typography component="div" sx={{ fontSize: "14px" }}>
                                                Premium Posting : {user && user.employer_plan} credits
                                            </Typography>

                                            <Stack direction="row" gap={2} sx={{ cursor: "pointer" }} onClick={() => window.location.href = 'http://localhost:3000/employer-dashboard/account-setting'}>
                                                <PersonIcon />
                                                <Typography component="div" sx={{ fontSize: "14px" }}>
                                                    Account Setting
                                                </Typography>
                                            </Stack>

                                            <Stack direction="row" gap={2} sx={{ cursor: "pointer" }} onClick={() => dispatch({ type: "LOGOUT" })}>
                                                <LogoutIcon />
                                                <Typography component="div" sx={{ fontSize: "14px" }}>
                                                    Logout
                                                </Typography>
                                            </Stack>
                                        </Stack></>)
                                }

                                {
                                    user && user.type == "candidate" && (<>
                                        <Box sx={{ background: "#FFFFFF", padding: "0px 20px", height: "300px", overflow: "scroll" }}>
                                            <List sx={{ display: "flex", flexDirection: "column" }}>
                                                {CandidateLogoutMenu.map((item) => {
                                                    return (<>
                                                        <ListItem sx={{ width: "100%" }}
                                                            button key={item.id} to={item.url} component={NavLink}
                                                            className="menu"
                                                            id={item.id}
                                                            onClick={() => { }} >
                                                            <ListItemText primary={item.Name} />
                                                        </ListItem>
                                                    </>)
                                                })}
                                            </List>

                                            <Stack direction="row" gap={2} sx={{ cursor: "pointer" }} onClick={() => dispatch({ type: "LOGOUT" })}>
                                                <LogoutIcon />
                                                <Typography component="div" sx={{ fontSize: "14px" }}>
                                                    Logout
                                                </Typography>
                                            </Stack>
                                        </Box>
                                    </>)
                                }

                            </Box>
                        </>
                        )}

                    </Stack></>)
                }

                {user && user.type != "candidate" && user.employer_type != "employer" && (<>

                    <Stack direction="column"  >

                        <Box sx={{ width: "50px", margin: "10px auto" }} >
                            <Link to="/">
                                <img src={window.location.origin + "/assets/companyLogo.png"} width="100%" height="100%" alt="companyLogo" />
                            </Link>
                        </Box>

                        <Stack direction="column" gap={2}>
                            {user && CandidateMenu.map((item) => {
                                return (<>
                                    <ListItem sx={{
                                        width: "fit-content",
                                        display: "flex",
                                        flexDirection: "column",
                                        width: '100%',
                                        padding: "0px",
                                        alignItems: "center",
                                        justifyContent: 'center',
                                        margin: "8px 0px",

                                    }}
                                        button key={item.id} to={item.url} component={NavLink}
                                        className={CandidateMenuSelected === item.value && "CandidateMenuSelected"}
                                        id={item.id}
                                        onClick={() => { dispatch({ type: "CHANGE_CANDIDATE_MENU", payload: item.value }) }} >
                                        <ListItemIcon sx={{ width: "20px", minWidth: "20px" }}>
                                            <img src={window.location.origin + `/assets/${item.image}`} width="100%" alt={item.value} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primaryTypographyProps={{ fontSize: '12px', textAlign: "center" }}
                                            primary={item.MenuName} />
                                    </ListItem>

                                </>
                                )
                            })}
                            <ListItem sx={{
                                width: "fit-content",
                                display: "flex",
                                flexDirection: "column",
                                width: '100%',
                                padding: "0px",
                                alignItems: "center",
                                justifyContent: 'center',
                                margin: "8px 0px"

                            }}
                                className={CandidateMenuSelected === "logout" && "CandidateMenuSelected"}
                                onClick={() => dispatch({ type: "LOGOUT" })} >
                                <ListItemIcon sx={{ width: "20px", minWidth: "20px" }}>
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText
                                    primaryTypographyProps={{ fontSize: '12px', textAlign: "center" }}
                                    primary="Logout" />
                            </ListItem>

                        </Stack>

                    </Stack>
                </>)}

                <Box sx={{ background: "#f2f5fa", minHeight: `calc(100vh - 50px)`, width: '100%' }}>
                    <Outlet context={userInformation}></Outlet>
                </Box>

            </Stack>

            <Footer />

        </Box >


    </>)
}

export default Dashboard;