import { Box, Stack, Typography, TextField } from "@mui/material";
import HeaderSec from "../../ThemeComponent/Common/HeaderSec";
const ContactUs = () => {
    return (<>
        <Box
            sx={{
                background: "#2B1E44",
                height: "100vh",
                backgroundImage:
                    "url('../assets/g8.png')",
                backgroundRepeat: " no-repeat",
                backgroundPosition: " left 200px bottom 0px"

            }}>

            <Stack
                direction="row"
                justifyContent="space-between"
                sx={{
                    height: "100%"
                }}

            >
                <Box sx={{ width: "50%", height: "100%" }}>
                    <Stack direction="column" alignItems="flex-start" justifyContent="center"
                        sx={{
                            height: "100%",
                            maxWidth: "500px",
                            margin: "0 auto"
                        }}>
                        <Typography component="box" sx={{
                            fontSize: "36px",
                            fontFamily: "Work Sans, sans-serif",
                            fontWeight: "600",
                            color: "#FFFFFF",
                            display: "block",
                            lineHeight: "1.2",
                            margin: "10px 0px"
                        }}>
                            Contact Details
                        </Typography>

                        <Stack direction="column" gap={2} >
                            <Stack direction="row" gap={1} alignItems="center" >
                                <img src={window.location.origin + "/assets/Contact1.png"} alt="Contact1" />
                                <Typography component="box" sx={{
                                    fontSize: "20px",
                                    fontFamily: "Work Sans, sans-serif",
                                    color: "#FFFFFF",
                                    display: "block",
                                    lineHeight: "1.2"
                                }}>
                                    +91 98076 46578
                                </Typography>
                                <img src={window.location.origin + "/assets/Contact4.png"} alt="Contact4" />
                            </Stack>
                            <Stack direction="row" gap={1} alignItems="center" >
                                <img src={window.location.origin + "/assets/Contact2.png"} alt="Contact2" />
                                <Typography component="box" sx={{
                                    fontSize: "20px",
                                    fontFamily: "Work Sans, sans-serif",
                                    color: "#FFFFFF",
                                    display: "block",
                                    lineHeight: "1.2"
                                }}>
                                    jobsyahan@gmail.com
                                </Typography>
                                <img src={window.location.origin + "/assets/Contact4.png"} alt="Contact4" />
                            </Stack>
                            <Stack direction="row" gap={1} alignItems="center" >
                                <img src={window.location.origin + "/assets/Contact3.png"} alt="Contact3" />
                                <Typography component="box" sx={{
                                    fontSize: "20px",
                                    fontFamily: "Work Sans, sans-serif",
                                    color: "#FFFFFF",
                                    display: "block",
                                    lineHeight: "1.2"
                                }}>
                                    B-154 B Block, Sector 63 Noida India 201301
                                </Typography>
                            </Stack>




                        </Stack>

                        <hr></hr>

                        <Stack direction="row" gap={2}>
                            <img src={window.location.origin + "/assets/ContactS1.png"} alt="ContactS1" />
                            <img src={window.location.origin + "/assets/ContactS2.png"} alt="ContactS2" />
                            <img src={window.location.origin + "/assets/ContactS3.png"} alt="ContactS3" />

                        </Stack>
                    </Stack>
                </Box>
                <Box sx={{ width: "50%" }}>
                    jidklfjlkdf
                </Box>
            </Stack>

        </Box>
    </>)
}

export default ContactUs;
