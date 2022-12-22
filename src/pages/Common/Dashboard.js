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

    const [data, setdata] = useState([]);
    const [openProfile, setOpenProfile] = useState(false);
    const dispatch = useDispatch();
    const [company, setcompany] = useState("");
    const EmployeeMenuSelected = useSelector(state => state.EmployeeMenuSelected);
    const CandidateMenuSelected = useSelector(state => state.CandidateMenuSelected);

    const api_url = useSelector(state => state.api_url);

    //Employer Menu 

    // useEffect(() => {
    //     const getpostedjobs = async () => {
    //         let data = await fetch(api_url + "/api/job/getpostedjobs", {
    //             // Adding method type
    //             method: "POST",
    //             // Adding body or contents to send
    //             headers: {
    //                 'Access-Control-Allow-Origin': '*',
    //                 'Content-Type': 'application/json; charset=UTF-8'
    //             },
    //             body: JSON.stringify({
    //                 userid: user._id

    //             }),
    //         });
    //         if (data.ok) {
    //             data = await data.json();
    //             console.log(data.data);
    //             setdata(data.data);
    //             setcompany(data.companyinfo[0]);

    //         }
    //     };

    //     const getCandidateSavedJobs = async () => {
    //         let data = await fetch(api_url + "/api/job/viewsavedjobslist", {
    //             // Adding method type
    //             method: "POST",
    //             // Adding body or contents to send
    //             headers: {
    //                 'Access-Control-Allow-Origin': '*',
    //                 'Content-Type': 'application/json; charset=UTF-8'
    //             },
    //             body: JSON.stringify({
    //                 userid: user._id

    //             }),
    //         });
    //         if (data.ok) {
    //             data = await data.json();
    //             console.log(data.message);
    //             // console.log(data.data);
    //             setdata(data.message);
    //             // setcompany(data.companyinfo[0]);

    //         }
    //     };

    //     const getCandidateAppliedJobs = async () => {
    //         let data = await fetch(api_url + "/api/job/viewapplyjobslist", {
    //             // Adding method type
    //             method: "POST",
    //             // Adding body or contents to send
    //             headers: {
    //                 'Access-Control-Allow-Origin': '*',
    //                 'Content-Type': 'application/json; charset=UTF-8'
    //             },
    //             body: JSON.stringify({
    //                 userid: user._id

    //             }),
    //         });
    //         if (data.ok) {
    //             data = await data.json();
    //             console.log(data.message);
    //             setdata(data.message);
    //             // setcompany(data.companyinfo[0]);

    //         }
    //     };

    //     if (user.type == 'candidate') {
    //         if (CandidateMenuSelected == 'saved_jobs') getCandidateSavedJobs();
    //         if (CandidateMenuSelected == 'applied_jobs') getCandidateAppliedJobs();
    //     } else {
    //         getpostedjobs();
    //     }




    // }, [CandidateMenuSelected, EmployeeMenuSelected]);

    return (<>

        <Box
            className="employer-dashboard"
            sx={{
                background: "#FAFAFA",
                width: "100%",
            }}
        >
            <Stack direction="row"
                sx={{
                    width: "inherit",
                    height: "inherit"
                }}>

                <Box sx={{ width: "100%" }}>

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

                                {/* {CandidateMenu.map((item) => {
                                    return (<>
                                        <ListItem sx={{ width: "fit-content" }}
                                            button key={item.id} to={item.url} component={NavLink}
                                            className="menu"
                                            id={item.id}
                                            onClick={() => { dispatch({ type: "CHANGE_CANDIDATE_MENU", payload: item.value }) }} >
                                            <ListItemText className={CandidateMenuSelected === item.value && "CandidateMenuSelected"} primary={item.MenuName} />
                                        </ListItem>
                                    </>)
                                })} */}



                            </List>
                        </Box>

                        <Stack direction="row" gap={3} justifyContent="flex-end" alignItems="center" sx={{ width: "20%" }}>
                            <Badge badgeContent={4} color="primary">
                                <MailOutlineIcon></MailOutlineIcon>
                            </Badge>
                            <Badge badgeContent={4} color="primary">
                                <NotificationsNoneIcon></NotificationsNoneIcon>
                            </Badge>
                            <Box sx={{ cursor: "pointer" }} onClick={() => setOpenProfile(!openProfile)}>
                                {/* <Avatar alt="Remy Sharp" src="./assets/companyLogo.png" /> */}
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
                                        {user.fullname}
                                    </Typography>
                                    <Typography component="div" sx={{ fontSize: "16px", color: "#FFFFFF" }}>
                                        {user.email}
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
                                <Stack gap={2} direction="column" sx={{ background: "#FFFFFF", padding: "20px" }}>
                                    <Typography component="div" sx={{ fontSize: "14px" }}>
                                        Basic Postings : Unlimited
                                    </Typography>

                                    <Typography component="div" sx={{ fontSize: "14px" }}>
                                        Premium Posting : 0 credits
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
                                </Stack>
                                {/* <Box sx={{ background: "#FFFFFF", padding: "20px" }}>
                                    <List sx={{ display: "flex", flexDirection: "column" }}>
                                        {CandidateLogoutMenu.map((item) => {
                                            return (<>
                                                <ListItem sx={{ width: "fit-content" }}
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
                                </Box> */}


                            </Box>
                        </>
                        )}



                    </Stack>
                    <Box sx={{ background: "#f2f5fa", minHeight: `calc(100vh - 50px)` }}>
                        <Outlet context={user}></Outlet>
                    </Box>
                </Box>

            </Stack>

            <Footer />

        </Box >


    </>)
}

export default Dashboard;