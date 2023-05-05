import { GetUserInformation } from "../../utils/ApiUrls";
import { getRequestWithToken } from "../../utils/ApiRequests";

import { NavLink, Outlet, useResolvedPath } from "react-router-dom";
import { Avatar, Box, Stack, List, ListItem, ListItemText } from "@mui/material";

import ReorderIcon from '@mui/icons-material/Reorder';

import { EmployerMenu, CandidateMenu } from "../../utils/Data.js";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ClickAwayListener from '@mui/base/ClickAwayListener';
import CompanyLogo from "../../ThemeComponent/Common/CompanyLogo";
import Footer from "../../ThemeComponent/Common/Footer";

import DashboardAccountSetting from "../../ThemeComponent/Common/DashboardAccountSetting";
import Skeleton from "react-loading-skeleton";

import { useEffect } from "react";

import { useTranslation } from "react-i18next";
const Dashboard = () => {
    const [openProfile, setOpenProfile] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [pageAuthenticate, setPageAuthenticate] = useState(false);
    const dispatch = useDispatch();

    const { t, i18n } = useTranslation();

    const MenuSelected = useSelector(state => state.MenuSelected);
    const [user, setUser] = useState({});

    const url = useResolvedPath("").pathname;


    useEffect(() => {

        const getLoginUserDetail = async () => {
            let response = await getRequestWithToken(GetUserInformation);
            if (response.status === '1') {
                setUser(response.data);
                checkRoleToShowPage(response.data);

            }
        }

        const checkRoleToShowPage = async (user) => {
            if (user.employer_type === "employer" && url === "/employer-dashboard")
                setPageAuthenticate(true)

            if (user.type === "candidate" && url === "/candidate-dashboard")
                setPageAuthenticate(true);

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


                <Stack direction="row" gap={3} sx={{
                    height: { "xs": "25px", "sm": "25px", "md": "50px", "lg": "50px", "xl": "50px" },
                    padding: { "xs": "15px", "sm": "15px", "md": "20px 50px", "lg": "20px 50px", "xl": "20px 50px" }, alignItems: "center", justifyContent: "space-between"
                }}>
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

                            {user &&
                                user.employer_type === "employer" && user.isemailverified && user.ismobileverified && user.stage === "hrpage" && EmployerMenu.map((item) => {
                                    return (
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
                                                className={MenuSelected === item.value && "MenuSelected"} primary={item.MenuName ? t(item.MenuName) : <Skeleton />} />
                                        </ListItem>
                                    )
                                })}


                            {user && user.type === "candidate" && user.isemailverified && user.ismobileverified && user.profilecompleted >= 0 && CandidateMenu.map((item) => {
                                return (
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
                                            primary={item.MenuName ? t(item.MenuName) : <Skeleton />} />
                                    </ListItem>


                                )
                            })}


                        </List>

                    </Box>
                    <Stack direction="row" gap={1} justifyContent="flex-end" alignItems="center" >
                        <Box sx={{
                            display: { "xl": "none", "lg": "none", "md": "none", "sm": "block", "xs": "block" },
                            position: "relative"
                        }}>
                            {user && user.isemailverified && user.ismobileverified && (user.stage === "hrpage" || user.profilecompleted >= 0) &&
                                <ReorderIcon onClick={() => setOpenMenu(!openMenu)} />
                            }

                        </Box>
                        {openMenu && user && user.employer_type === "employer" && (<>
                            <ClickAwayListener onClickAway={() => setOpenMenu(!openMenu)}>

                                <Box sx={{
                                    position: "absolute",
                                    top: "30px",
                                    background: "#FFFFFF",
                                    right: "65px",
                                    width: "300px",
                                    zIndex: "345235"
                                }}>
                                    <Box direction="row" sx={{
                                        width: "100%"
                                    }}>
                                        <List sx={{ display: "flex", flexDirection: "column" }}>

                                            {EmployerMenu.map((item) => {
                                                return (
                                                    <ListItem sx={{ width: { "lg": "fit-content", "md": "max-content" } }}
                                                        button key={item.id} to={item.url} component={NavLink}
                                                        className="menu"
                                                        id={item.id}
                                                        onClick={() => {
                                                            setOpenMenu(!openMenu)
                                                            dispatch({ type: "CHANGE_SELECTED_MENU", payload: item.value })
                                                        }} >
                                                        <ListItemText
                                                            disableTypography
                                                            sx={{
                                                                fontSize: { "lg": "20px !important", "md": "16px !important" }, color: "#4E3A67"
                                                            }}
                                                            className={MenuSelected === item.value && "MenuSelected"} primary={t(item.MenuName)} />
                                                    </ListItem>
                                                )
                                            })}
                                        </List>
                                    </Box>


                                </Box>
                            </ClickAwayListener >

                        </>
                        )}

                        {openMenu && user && user.type === "candidate" && (<>
                            <ClickAwayListener onClickAway={() => setOpenMenu(!openMenu)}>

                                <Box sx={{
                                    position: "absolute",
                                    top: "30px",
                                    background: "#FFFFFF",
                                    right: "65px",
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
                                                        onClick={() => {
                                                            setOpenMenu(!openMenu)
                                                            dispatch({ type: "CHANGE_SELECTED_MENU", payload: item.value })
                                                        }} >
                                                        <ListItemText
                                                            disableTypography
                                                            sx={{
                                                                fontSize: { "lg": "20px !important", "md": "16px !important" }, color: "#4E3A67"
                                                            }}
                                                            className={MenuSelected === item.value && "MenuSelected"}
                                                            primary={t(item.MenuName)} />
                                                    </ListItem>
                                                </>)
                                            })}
                                        </List>
                                    </Box>


                                </Box>
                            </ClickAwayListener >

                        </>
                        )}

                        {user && user.employer_type === "employer" && <Box sx={{
                            cursor: "pointer",
                            width: { "xs": "30px", "sm": "30px", "md": "50px", "lg": "50px", "xl": "50px" },
                            height: { "xs": "fit-content", "sm": "fit-content", "md": "fit-content", "lg": "50px", "xl": "50px" }
                        }} onClick={() => setOpenProfile(!openProfile)}>
                            {

                                user.employer_profilepic ?
                                    <img src={user.employer_profilepic} alt={user.employer_name} width="100%" height="100%" style={{ borderRadius: "50%" }} />
                                    :
                                    <Avatar alt={user.employer_name} />

                            }
                        </Box>
                        }

                        {user && user.type === "candidate" && <Box sx={{
                            cursor: "pointer",
                            width: { "xs": "20px", "sm": "30px", "md": "50px", "lg": "50px", "xl": "50px" },
                            height: { "xs": "17px", "sm": "17px", "md": "50px", "lg": "50px", "xl": "50px" }
                        }} onClick={() => setOpenProfile(!openProfile)}>
                            {

                                user.profile_image ?
                                    <img src={user.profile_image} alt={user && user.personalInfo && user.personalInfo.fullname} width="100%" height="100%" style={{ borderRadius: "50%" }} /> :
                                    <Avatar alt={user && user.personalInfo && user.personalInfo.fullname} />

                            }
                        </Box>
                        }




                    </Stack>
                    {openProfile && (<>

                        {user && user.employer_type === "employer" &&
                            <DashboardAccountSetting
                                userName={user && user.employer_name}
                                userEmail={user && user.employer_email}
                                userLastLogin={user && user.lastlogin}
                                userType="employer" />
                        }

                        {user && user.type === "candidate" &&
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
                <Box sx={{
                    background: "#FAFAFA",
                    width: '100%'
                }}>
                    {/* {!pageAuthenticate && <ErrorPage errorMessage="Page not Found" subMessage="Unfortunately the page you are looking for could not be found" />} */}
                    {<Outlet context={user} >
                    </Outlet>}



                </Box>

            </Stack>

            {user.isemailverified && user.ismobileverified && <Footer />}

        </Box >


    </>)
}

export default Dashboard;