import { Box, Stack, Typography, Container, Input, TextField, Divider } from "@mui/material";
import { Link } from "react-router-dom";

import { Formik, Field, Form } from "formik";
import { ForgotPasswordValidation } from "../../Validation/EmployerValidation";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from "../../ThemeComponent/Common/Error";
import ButtonType1 from "../../ThemeComponent/Common/ButtonType1";
import ButtonType2 from "../../ThemeComponent/Common/ButtonType2";

import Account from "./Account";
import EmailNotification from "./EmailNotification";
import ChangePassword from "../Common/ChangePassword";
import PrivacySetting from "./PrivacySetting";

import { useState } from "react";
const Settings = () => {
    const [currentMenu, setCurrentMenu] = useState("privacy");

    return (<>
        <Box sx={{ height: "150px", background: "#445578", margin: "30px" }}>
            <Stack direction="row" alignItems="center">
                {/* <Stack sx={{ width: "15%", height: "150px", background: "green" }}>
                    <img src={window.location.origin + "/assets/Setting.png"} height="100%" width="100%" alt="Setting" ></img>
                </Stack> */}
                <Box sx={{ width: "50%", padding: "20px" }}>
                    <Typography component="div" sx={{ fontSize: "16px", color: "white" }}>
                        My Settings
                    </Typography>
                    <Typography component="div" sx={{ fontWeight: "600", fontSize: "25px", color: "white" }}>
                        Change Notifications, Privacy Setting, Account Setting, Password and Deactivate your account.
                    </Typography>
                </Box>
            </Stack>
        </Box>
        <Stack direction="row" gap={2} sx={{ padding: "20px" }}>
            <Stack direction="column" gap={2} sx={{ width: "20%", padding: "0px 50px" }}>
                <Box >
                    {/* <Typography component="div" sx={{ fontWeight: "600", fontSize: "30px", margin: "20px 0px", textTransform: "capitalize" }}>
                        {currentMenu.replaceAll("_", " ")}
                    </Typography> */}

                    <Stack direction="column" gap={1} divider={<Divider orientation="horizontal" flexItem />}
                        sx={{ Height: "200px", background: "#FFFFFF", borderRadius: "10px", padding: "20px" }}>
                        <Typography className={currentMenu == "email_notification" && "SettingMenu "} component="div" sx={{ fontSize: "16px", margin: "5 0px", cursor: "pointer" }} onClick={() => setCurrentMenu("email_notification")}>
                            Email Notification
                        </Typography>

                        <Typography className={currentMenu == "privacy" && "SettingMenu "} component="div" sx={{ fontSize: "16px", margin: "5 0px", cursor: "pointer" }} onClick={() => setCurrentMenu("privacy")}>
                            Privacy
                        </Typography>

                        <Typography className={currentMenu == "account" && "SettingMenu "} component="div" sx={{ fontSize: "16px", margin: "5 0px", cursor: "pointer" }} onClick={() => setCurrentMenu("account")}>
                            Account
                        </Typography>

                        <Typography className={currentMenu == "change_password" && "SettingMenu "} component="div" sx={{ fontSize: "16px", margin: "5 0px", cursor: "pointer" }} onClick={() => setCurrentMenu("change_password")}>
                            Change Password
                        </Typography>


                    </Stack>


                </Box>

            </Stack>


            <Box sx={{ width: "60%" }}>
                {currentMenu == "account" && <Account></Account>}
                {currentMenu == "email_notification" && <EmailNotification />}
                {currentMenu == "change_password" && <ChangePassword />}
                {currentMenu == "privacy" && <PrivacySetting />}
            </Box>

        </Stack >

    </>)
}

export default Settings;