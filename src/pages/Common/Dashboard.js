import { GetUserInformation } from "../../utils/ApiUrls";
import { getRequestWithToken } from "../../utils/ApiRequests";

import { NavLink, Outlet } from "react-router-dom";
import { Avatar, Box, Stack, List, ListItem, ListItemText } from "@mui/material";

import ReorderIcon from '@mui/icons-material/Reorder';

import { EmployerMenu, CandidateMenu } from "../../utils/Data.js";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ClickAwayListener from '@mui/base/ClickAwayListener';
import CompanyLogo from "../../ThemeComponent/Common/CompanyLogo";
import Footer from "../../ThemeComponent/Common/Footer";

import DashboardAccountSetting from "../../ThemeComponent/Common/DashboardAccountSetting";

import { useEffect } from "react";
const Dashboard = () => {
    const [openProfile, setOpenProfile] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    // const user = useSelector(state => state.user);
    const dispatch = useDispatch();

    const MenuSelected = useSelector(state => state.MenuSelected);
    const [user, setUser] = useState({});
    useEffect(() => {

        const getLoginUserDetail = async () => {
            let response = await getRequestWithToken(GetUserInformation);
            if (response.status === '1') {
                setUser(response.data);
            }
        }
        getLoginUserDetail();
    }, []);

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

                            {user && user.employer_type == "employer" && user.isemailverified && user.ismobileverified && user.stage === "hrpage" && EmployerMenu.map((item) => {
                                return (<>
                                    <ListItem sx={{ width: { "lg": "fit-content", "md": "max-content" } }}
                                        button key={item.id} to={item.url} component={NavLink}
                                        className="menu"
                                        id={item.id}
                                        onClick={() => { dispatch({ type: "CHANGE_SELECTED_MENU", payload: item.value }) }} >
                                        <ListItemText
                                            disableTypography
                                            sx={{
                                                fontSize: { "lg": `20px !important`, "md": "16px !important" }, color: "#4E3A67"
                                            }}
                                            className={MenuSelected === item.value && "MenuSelected"} primary={item.MenuName} />
                                    </ListItem>
                                </>)
                            })}


                            {user && user.type == "candidate" && user.isemailverified && user.ismobileverified && user.profilecompleted >= 50 && CandidateMenu.map((item) => {
                                return (<>
                                    <ListItem sx={{ width: { "lg": "fit-content", "md": "max-content" } }}
                                        button key={item.id} to={item.url} component={NavLink}
                                        className={MenuSelected === item.value && "MenuSelected"}
                                        id={item.id}
                                        onClick={() => { dispatch({ type: "CHANGE_SELECTED_MENU", payload: item.value }) }} >

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
                        {openMenu && user && user.employer_type == "employer" && (<>
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
                                                        onClick={() => { dispatch({ type: "CHANGE_SELECTED_MENU", payload: item.value }) }} >
                                                        <ListItemText
                                                            disableTypography
                                                            sx={{
                                                                fontSize: { "lg": "20px !important", "md": "16px !important" }, color: "#4E3A67"
                                                            }}
                                                            className={MenuSelected === item.value && "MenuSelected"} primary={item.MenuName} />
                                                    </ListItem>
                                                </>)
                                            })}
                                        </List>
                                    </Box>


                                </Box>
                            </ClickAwayListener >

                        </>
                        )}

                        {openMenu && user && user.type == "candidate" && (<>
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
                                                        onClick={() => { dispatch({ type: "CHANGE_SELECTED_MENU", payload: item.value }) }} >
                                                        <ListItemText
                                                            disableTypography
                                                            sx={{
                                                                fontSize: { "lg": "20px !important", "md": "16px !important" }, color: "#4E3A67"
                                                            }}
                                                            className={MenuSelected === item.value && "MenuSelected"}
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

                        {user && user.type == "candidate" &&
                            <DashboardAccountSetting
                                userName={user && user.personalInfo && user.personalInfo.fullname}
                                userEmail={user && user.personalInfo && user.personalInfo.email}
                                userLastLogin={user && user.lastlogin}
                                userType="candidate" />
                        }

                    </>
                    )}

                </Stack>

                {/* Dashboard based on the user */}
                <Box sx={{ background: "#FAFAFA", minHeight: `calc(100vh - 50px)`, width: '100%' }}>
                    <Outlet context={user}></Outlet>
                </Box>

            </Stack>

            {user.isemailverified && user.ismobileverified && <Footer />}

        </Box >


    </>)
}

export default Dashboard;