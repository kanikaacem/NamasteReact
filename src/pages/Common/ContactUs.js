import { Box, Stack, Typography, TextField } from "@mui/material";
import HeaderSec from "../../ThemeComponent/Common/HeaderSec";
const ContactUs = () => {
    return (<>
        <Box
            sx={{
                background: "#2B1E44",
                minHeight: "100vh",
                backgroundImage:
                    "url('../assets/g8.png')",
                backgroundRepeat: " no-repeat",
                backgroundPosition: " left 200px bottom 0px"

            }}>
            <Stack
                direction="row"
                justifyContent="space-between"

            >
                <Stack sx={{ width: "50%" }} alignItems="center" justifyContent="center">
                    <Typography component="box" sx={{
                        fontSize: "36px",
                        fontFamily: "Work Sans, sans-serif",
                        fontWeight: "600",
                        color: "#FFFFFF",
                        display: "block",
                        lineHeight: "1.2"
                    }}>
                        Contact Details


                    </Typography>
                </Stack>
                <Box sx={{ width: "50%" }}> hekjkl</Box>
            </Stack>

        </Box>
    </>)
}

export default ContactUs;
