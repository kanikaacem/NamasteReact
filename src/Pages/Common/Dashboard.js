// import { GetUserInformation } from "../../utils/ApiUrls";
// import { getRequestWithToken } from "../../utils/ApiRequests";

import { NavLink, Outlet } from "react-router-dom";
import { Box, Stack, List, ListItem, ListItemText } from "@mui/material";
import { EmployerMenu } from "../../utils/Data.js";
// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Footer from "../../ThemeComponent/Common/Footer";
// import { useLocation } from 'react-router-dom';

// import { useEffect } from "react";

const Dashboard = () => {
    const dispatch = useDispatch();
    const MenuSelected = useSelector(state => state.MenuSelected);
    const user = "";
    // const [user, setUser] = useState({});

    // const url = useResolvedPath("").pathname;
    // const location = useLocation();
    // const currentPath = location.pathname.replaceAll("-","_");

    const DashboardMenus = ({ MenuItem }) => {
        return (
            <List sx={{ display: "flex", gap: "50px" }}>
                {MenuItem.map((item) => {
                    return (
                        <ListItem sx={{ width: { "lg": "fit-content", "md": "max-content" } }}
                            button key={item.id} to={item.url} component={NavLink}
                            id={item.id}
                            onClick={() => { dispatch({ type: "CHANGE_SELECTED_MENU", payload: item.value }) }} >
                            <ListItemText
                                disableTypography
                                sx={{
                                    fontSize: "14px !important",
                                    fontWeight: "600 !important",
                                    color: MenuSelected === item.value ? "#FF671F" : "#262626",
                                    textTransform: "capitalize"
                                }}
                                className={(MenuSelected === item.value) ? "MenuSelected" : " "} primary={item.MenuName} />

                        </ListItem>
                    )
                })}
            </List>
        )
    }


    // useEffect(() => {

    //     const getLoginUserDetail = async () => {
    //         let response = await getRequestWithToken(GetUserInformation);
    //         if (response.status === '1') {
    //             setUser(response.data);

    //         }
    //     }
    //     getLoginUserDetail();
    // }, [url]);

    return (
        <Box
            className="DashboardPage"
            sx={{
                background: "#FCFCFC",
                width: "100%",
            }}
        >
            <Stack direction="column"
                sx={{
                    width: "100%",
                    height: "inherit"
                }}>

                <Stack className="DashboardTopSection" direction="row" sx={{
                    height: { "xs": "25px", "sm": "25px", "md": "50px", "lg": "50px", "xl": "50px" },
                    padding: { "xs": "15px", "sm": "15px", "md": "20px 50px", "lg": "20px 50px", "xl": "20px 50px" },
                    alignItems: "center",
                    position: "sticky",
                    top: "0",
                    zIndex: "9999",
                    background: "white"

                }}>
                    <Box className="LogoSection" sx={{ minWidth: "15%" }}>
                        <Box sx={{ width: "fit-content", marginTop: "10px", height: "50px" }} >
                            <img src={window.location.origin + "/assets/DesktopLogo.png"} alt="JY" width="100%" height="100%" />
                        </Box>
                    </Box>

                    <Box className="MenuSection" direction="row" sx={{
                        minWidth: "80%",
                        display: { "lg": "block", "md": "block", "xs": "none" }
                    }}>
                        <DashboardMenus MenuItem={EmployerMenu} />
                    </Box>

                    <Stack className="NotificationAndProfileSection" direction="row" sx={{ minWidth: "5%" }} gap={1} justifyContent="flex-start"
                        alignItems="center" >
                        {/* <Box className="Notification" sx={{ width: "25px", height: "25px" }}>
                            <img src={window.location.origin + "/assets/DesktopLogo.png"} alt="Notification Symbol" width="100%" height="100%" />
                        </Box> */}

                        <Box className="Account" sx={{ width: "auto" }}>

                            <img src={window.location.origin + "/assets/ProfileImage.png"} alt="Account Symbol" width="100%" height="100%" />

                        </Box>
                    </Stack>
                </Stack>

                {/* Dashboard based on the user */}
                <Box sx={{
                    background: "#FCF9F5",
                    width: '100%'
                }}>
                    {<Outlet context={user} >
                    </Outlet>}
                </Box>
            </Stack>

            <Footer />

        </Box >)
}

export default Dashboard;