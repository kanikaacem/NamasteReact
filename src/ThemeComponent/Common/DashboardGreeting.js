import { Stack, Typography, Box } from "@mui/material";
import ButtonType2 from "./ButtonType2";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
const DashboardGreeting = ({ username, userType, userProfileCompleted }) => {
    const [dayMessage, setDayMessage] = useState("");
    const date = new Date();
    const showTime = date.getHours();

    const { t } = useTranslation();

    useEffect(() => {
        if (showTime <= 12) setDayMessage(t('GOOD_MORNING'))
        else if (showTime >= 12 && showTime < 18) setDayMessage(t('GOOD_AFTERNOON'))
        else setDayMessage(t('GOOD_EVENING'))
    }, [showTime, t]);

    return (<>
        <Box
            sx={{
                background: "#FFFFFF",
                border: "1px solid #E1D4F2",
                borderRadius: "14px",
                padding: { "xs": "10px", "sm": "10px", "md": "20px", "lg": "20px", "xl": "20px" }
            }}
        >
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                gap={2} >

                <Typography component="box" sx={{
                    fontSize: { "xs": "16px", "sm": "16px", "md": "24px", "lg": "24px", "xl": "24px" },
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    color: "#4E3A67"
                }}>
                    {dayMessage}, {username}!
                </Typography>



                {userType === 'employer' && <>
                    <Box>
                        <ButtonType2 ButtonText={t('POST_A_JOB')} ClickEvent={() => window.location.href = window.location.href + "/post-a-job"}></ButtonType2>
                    </Box></>}

            </Stack>
            {userType === "candidate" && <>
                <Typography component="box" sx={{
                    fontSize: { "xs": "12px", "sm": "12px", "md": "18px", "lg": "18px", "xl": "18px" },
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