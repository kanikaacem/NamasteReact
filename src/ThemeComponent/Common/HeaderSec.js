import { Stack, Button } from "@mui/material";
import { NavLink, Link, Outlet } from "react-router-dom";
import { Avatar, Box, Badge, Typography, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';

import WorkIcon from '@mui/icons-material/Work';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

import Moment from 'react-moment';
import CompanyLogo from "../../ThemeComponent/Common/CompanyLogo";
import { useState } from "react";
import { useSelector } from "react-redux";

const HeaderSec = ({ color, background, border, buttonText }) => {
    const [openProfile, setOpenProfile] = useState(false);
    const user = useSelector((state) => state.user);
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    return (<>
        <Stack direction={{ "lg": "row", "md": "row", "xs": "column" }}
            gap={4} justifyContent="space-between">
            <CompanyLogo color={color} />


            <Stack direction="row"
                sx={{
                    width: { "lg": `fit-content`, "md": `"fit-content"`, "xs": "fit-content" },
                    flexWrap: "wrap",
                    justifyContent: "flex-end"
                }}
                gap={2}
            >

                <Button type="button" variant="outlined"
                    onClick={() => {
                        window.location.href = window.location.origin + "/contact-us";
                    }}
                    sx={{
                        width: "200px",
                        borderRadius: "44px",
                        fontSize: "18px",
                        border: { border },
                        color: { color },
                        textTransform: "capitalize",
                        fontWeight: "600",
                        fontFamily: "Work Sans, sans-serif !important",
                        background: { background },
                        "&:hover": {
                            border: { border },
                            color: { color },
                            background: { background }

                        }
                    }}>
                    Contact us
                </Button>
                {/* {console.log(user)} */}
                {(isLoggedIn && user) && user && user.type === "candidate"
                    ? <>
                        <Button type="button" variant="outlined"
                            onClick={() => {
                                window.location.href = window.location.origin + "/candidate-dashboard";
                            }}
                            sx={{
                                width: "200px",
                                borderRadius: "44px",
                                fontSize: "18px",
                                border: { border },
                                color: { color },
                                textTransform: "capitalize",
                                fontWeight: "600",
                                fontFamily: "Work Sans, sans-serif !important",
                                background: { background },
                                "&:hover": {
                                    border: { border },
                                    color: { color },
                                    background: { background }

                                }
                            }}>
                            Dashboard
                        </Button></> :
                    <>
                        <Button type="button" variant="filled"
                            onClick={
                                () => {
                                    if (buttonText === 'Employer login')
                                        window.location.href = window.location.origin + "/employer-login"
                                    else
                                        window.location.href = window.location.origin + "/about-us"
                                }
                            }
                            sx={{
                                // padding: "0px 40px",
                                padding: "5px 15px",
                                width: "max-content",
                                borderRadius: "44px",
                                fontSize: "18px",
                                border: { border },
                                color: { color },
                                textTransform: "capitalize",
                                fontWeight: "600",
                                fontFamily: "Work Sans, sans-serif !important",
                                background: { background },
                                "&:hover": {
                                    border: { border },
                                    color: { color },
                                    background: { background }

                                }
                            }}
                        >
                            {buttonText ? buttonText : "About Us"}
                        </Button>
                    </>}


                {
                    localStorage.getItem("removeLocalStorageData") && localStorage.getItem("removeLocalStorageData") == "true"
                    && (<>
                        <Stack direction="row" gap={3} justifyContent="flex-end" alignItems="center" sx={{ width: "20%" }}>


                            <Box sx={{ cursor: "pointer" }} onClick={() => setOpenProfile(!openProfile)}>
                                <Avatar alt={localStorage.getItem("useremail") ? localStorage.getItem("useremail") : "User Email "} />
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

                                    <Typography component="div" sx={{ fontSize: "16px", color: "#FFFFFF" }}>
                                        {localStorage.getItem("useremail") ? localStorage.getItem("useremail") : "User Email "}
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
                                        {new Date()}
                                    </Moment>
                                </Box>


                                (<>
                                    <Stack gap={2} direction="column" sx={{ background: "#FFFFFF", padding: "20px" }}>
                                        {/* <Typography component="div" sx={{ fontSize: "14px" }}>
                                            Basic Postings : Unlimited
                                        </Typography>

                                        <Typography component="div" sx={{ fontSize: "14px" }}>
                                            Premium Posting : 300 credits
                                        </Typography> */}



                                        <Stack direction="row" gap={2} sx={{ cursor: "pointer" }} onClick={
                                            () => {
                                                localStorage.clear();
                                                window.location.reload();
                                            }
                                        }>
                                            <LogoutIcon />
                                            <Typography component="div" sx={{ fontSize: "14px" }}>
                                                Logout
                                            </Typography>
                                        </Stack>
                                    </Stack></>)




                            </Box>
                        </>
                        )}
                    </>)

                    // <Button type="button" variant="outlined"
                    //     onClick={() => {
                    //         localStorage.clear();
                    //         window.location.reload();
                    //     }}
                    //     sx={{
                    //         width: "200px",
                    //         borderRadius: "44px",
                    //         fontSize: "18px",
                    //         border: { border },
                    //         color: { color },
                    //         textTransform: "capitalize",
                    //         fontWeight: "600",
                    //         fontFamily: "Work Sans, sans-serif !important",
                    //         background: { background },
                    //         "&:hover": {
                    //             border: { border },
                    //             color: { color },
                    //             background: { background }

                    //         }
                    //     }}>
                    //     Log out
                    // </Button>


                }


            </Stack>
        </Stack>
    </>)
}

export default HeaderSec;