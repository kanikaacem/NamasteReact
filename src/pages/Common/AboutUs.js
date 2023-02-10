import { Box, Stack, Typography, TextField } from "@mui/material";

import HeaderSec from "../../ThemeComponent/Common/HeaderSec";
import Footer from "../../ThemeComponent/Common/Footer";
const AboutUs = () => {
    return (<>
        <Stack
            className="AboutUsPage"
            direction="column"
            gap={2}
            sx={{
                background: "#FAF7FE",

            }}>
            <Box className="Header" sx={{ padding: "20px" }} >
                <HeaderSec
                    color="black"
                    border="2px solid #8E8E8E"
                    buttonText="Employer login" />
            </Box>
            <Box className="AboutUsContent"
                sx={{ padding: "20px" }}>
                <Box
                    sx={{
                        position: "absolute",
                        height: "320.38px",
                        left: "0px",
                        transform: " matrix(-1, 0, 0, 1, 0, 0)",
                        zIndex: "1"
                    }}>
                    <img src={window.location.origin + "/assets/About1.png"} alt="About1" />
                </Box>
                <Box sx={{
                    position: "absolute",
                    // width: " 403.7px",
                    height: "380px",
                    // left: "1632px",
                    top: "805px",
                    right: "0px",
                    zIndex: "1"
                }}>
                    <img src={window.location.origin + "/assets/About2.png"} alt="About2" />
                </Box>
                <Box
                    sx={{
                        position: "absolute",
                        // width: "344px",
                        height: "320.38px",
                        left: "0px",
                        top: " 1388px",
                        zIndex: "1"
                    }}>
                    <img src={window.location.origin + "/assets/About3.png"} alt="About3" />
                </Box>


                <Box sx={{
                    background: "#FFFFFF",
                    maxWidth: "1263px",
                    margin: "0 auto",
                    border: "1px solid #E1D4F2",
                    borderRadius: "19px",
                    minHeight: "1663px",
                    padding: "60px",
                    position: "relative",
                    zIndex: "2"
                }}>
                    <Typography component="box" sx={{
                        fontSize: "96px",
                        fontFamily: "Work Sans, sans-serif",
                        fontWeight: "700",
                        color: "#2B1E44",
                        display: "block",
                        lineHeight: "1.2"
                    }}>
                        About Us!
                    </Typography>
                    <Stack direction="row" gap={2}>
                        <img src={window.location.origin + "/assets/About4.png"} alt="About4" />
                        <Typography component="box"
                            sx={{
                                fontSize: "24px",
                                fontFamily: "Work Sans, sans-serif",
                                fontWeight: "600",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.2"
                            }}>
                            JobsYahaan - A Platform for Jobs and Self-employment
                        </Typography>
                    </Stack>

                    <Stack direction="column" gap={2}>
                        <Typography component="box"
                            sx={{
                                fontSize: "24px",
                                fontWeight: "400",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.2"
                            }}>
                            A disruptor in job search and a strong contributor to India’s
                            growth define JobsYahaan. What sets us apart is that we offer
                            work opportunities to all including those unsung heroes who give
                            you gifts, deliver you food & groceries, make you beautiful, etc.
                        </Typography>

                        <Typography component="box"
                            sx={{
                                fontSize: "24px",
                                fontWeight: "400",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.2"
                            }}>
                            A disruptor in job search and a strong contributor to India’s
                            growth define JobsYahaan. What sets us apart is that we offer
                            work opportunities to all including those unsung heroes who give
                            you gifts, deliver you food & groceries, make you beautiful, etc.
                        </Typography>
                    </Stack>


                </Box>

            </Box>
            <Footer />
        </Stack></>)
}

export default AboutUs;
