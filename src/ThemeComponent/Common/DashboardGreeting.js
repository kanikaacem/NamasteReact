import { Stack, Typography, Box, Button } from "@mui/material";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
const DashboardGreeting = ({ userType }) => {
    const [dayMessage, setDayMessage] = useState("");
    const [greetingSymbol, setGreetingSymbol] = useState("");
    const date = new Date();
    const showTime = date.getHours();

    const navigate = useNavigate();

    useEffect(() => {
        if (showTime <= 12) {
            setDayMessage("Good Morning");
            setGreetingSymbol("https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/greeting_logo.png")
        }
        else if (showTime >= 12 && showTime < 18) {
            setDayMessage("Good Afternoon")
            setGreetingSymbol("https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/greeting_logo.png")
        }
        else {
            setDayMessage("Good Evening")
            setGreetingSymbol("https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/greeting_logo.png")
        }
    }, [showTime]);

    return (<>
        <Box
            sx={{
                background: "#FFFFFF",
                border: "1px solid #EEEEEE",
                borderRadius: "14px",
                padding: { "xs": "10px", "sm": "10px", "md": "20px", "lg": "20px", "xl": "20px" }
            }}
        >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                gap={2} >

                <Stack direction="row" gap={2} alignItems="center">

                    <Box className="GreetingSymbol" sx={{ width: "40px", height: "40px" }}>
                        <img src={greetingSymbol} alt="Greeting Symbol" width="100%" height="100%" />
                    </Box>
                    <Typography component="box" sx={{
                        fontSize: "1rem",
                        fontWeight: "700",
                        fontFamily: `'Manrope', sans-serif`,
                        color: "#262626"
                    }}>
                        {dayMessage},
                    </Typography>
                </Stack>

                {userType === 'employer' && <>
                    <Box>
                        <Button variant="contained"
                            onClick={() => navigate("post-a-job")}
                            sx={{
                                background: "#FF671F",
                                borderRadius: "7px",
                                textTransform: "capitalize",
                                width: "230px",
                                fontSize: "0.8rem",
                                "&:hover": {
                                    background: "#FF671F",
                                }
                            }
                            }> Post a Job</Button >
                    </Box></>
                }

            </Stack>
        </Box>
    </>)
}

export default DashboardGreeting;