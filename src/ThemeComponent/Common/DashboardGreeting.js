import { Stack, Typography, Box } from "@mui/material";
import ButtonType2 from "./ButtonType2";
import { useState, useEffect } from "react";

const DashboardGreeting = ({ username, userType, userProfileCompleted }) => {
    const [dayMessage, setDayMessage] = useState("");
    const date = new Date();
    const showTime = date.getHours();

    useEffect(() => {
        if (showTime <= 12) setDayMessage("Good Morning")
        else if (showTime >= 12 && showTime < 18) setDayMessage("Good AfterNoon")
        else setDayMessage("Good Evening")
    }, [showTime]);

    return (<>
        <Box
            sx={{
                background: "#FFFFFF",
                border: "1px solid #E1D4F2",
                borderRadius: "14px",
                padding: "20px"
            }}
        >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                gap={2} >

                <Typography component="box" sx={{
                    fontSize: "24px",
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    color: "#4E3A67"
                }}>
                    {dayMessage}, {username}!
                </Typography>



                {userType === 'employer' && <>
                    <Box>
                        <ButtonType2 ButtonText="Post a Job" ClickEvent={() => window.location.href = window.location.href + "/post-a-job"}></ButtonType2>
                    </Box></>}

            </Stack>
            {userType === "candidate" && <>
                <Typography component="box" sx={{
                    fontSize: "18px",
                    fontFamily: "Montserrat",
                    color: "#4E3A67"
                }}>
                    Your Profile is  {userProfileCompleted === 0 ? "not completed" : userProfileCompleted + "% completed."}
                </Typography>
            </>}
        </Box>
    </>)
}

export default DashboardGreeting;