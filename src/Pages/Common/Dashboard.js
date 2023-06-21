import { NavLink, Outlet } from "react-router-dom";
import { Box, Stack, List, ListItem, ListItemText } from "@mui/material";
import { EmployerMenu } from "../../utils/Data.js";
import { useSelector, useDispatch } from 'react-redux';
import Footer from "../../ThemeComponent/Common/Footer";

const Dashboard = () => {
    const dispatch = useDispatch();
    const MenuSelected = useSelector(state => state.MenuSelected);
    let lang = localStorage.getItem('locale');

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('auth_token');
    }
    const user = "";

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

                        {/* <Box className="Account" sx={{ width: "auto" }} >

                            <img src={window.location.origin + "/assets/ProfileImage.png"} alt="Account Symbol" width="100%" height="100%" />

                        </Box> */}


                        <div class="profile-dropdown">
                            <img src={window.location.origin + "/assets/ProfileImage.png"} alt="Account Symbol" width="100%" height="100%" />
                            <div class="profile-dropdown-content">
                                <a className="profile-dropdown-option" href={`${lang}/employer-login`} onClick={handleLogout}>Logout</a>
                            </div>
                        </div>

                        {/* <select>
                            <option value="option1">
                                <img src={window.location.origin + "/assets/ProfileImage.png"} alt="Account Symbol" width="100%" height="100%" />
                            </option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </select> */}




                        {/* <Menu
                            sx={{ zIndex: 1500 }} 
                            anchorEl={anchorEl}
                            open={anchorEl}
                            onClose={handleClose}
                            placement="bottom-end" // Adjust the placement as needed
                            disablePortal={false} 
                        >
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                        </Menu> */}
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