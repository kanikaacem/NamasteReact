import { Box, Typography, Stack } from "@mui/material";
import SocialMedia from "./SocialMedia";
const Footer = () => {

    return (<>
        <Box sx={{ background: "#2B1E44", minheight: "400px", padding: "50px 150px" }}>
            <Stack direction={{ lg: "row", md: "column", xs: "column" }} gap={5} sx={{ padding: "50px 0px" }}>
                <Box sx={{ width: { lg: "40%", md: "100%", xs: "100%" } }}>
                    <Typography component="span"
                        sx={{
                            fontSize: "20px",
                            color: "#FC9A7E",
                            margin: "10px 0px",
                            fontWeight: "600"
                        }}>
                        Job
                        <Typography component="span"
                            sx={{
                                fontSize: "20px",
                                color: "#FC9A7E",
                                margin: "10px 0px",
                            }}>
                            Yahan
                        </Typography>
                    </Typography>

                    <Typography component="span"
                        sx={{
                            display: "block",
                            fontSize: "20px",
                            color: "#FFFFFF",
                            margin: "10px 0px",
                            width: "150px"
                        }}>
                        Chat Directly. Hire Instantly.
                    </Typography>
                    <Typography component="span"
                        sx={{
                            display: "block",
                            fontSize: "20px",
                            color: "#FFFFFF",
                            width: "150px",
                            fontWeight: '100',
                            fontFamily: "Montserrat"
                        }}>
                        Trusted by 3.8M+ verified job seekers and
                        190K+ verified recruiters.
                    </Typography>


                </Box>
                <Box sx={{ width: { lg: "35%", md: "100%", xs: "100%" } }}>
                    <Typography component="span"
                        sx={{
                            display: "block",
                            fontSize: "20px",
                            color: "#FFFFFF",
                            fontWeight: "700",
                            margin: "10px 0px",
                        }}>
                        Company
                    </Typography>

                    <Box sx={{ fontSize: "20px", color: "#2B!E44", margin: "10px 0px", color: "#FFFFFF", fontWeight: '100' }}> Home</Box>
                    <Box sx={{ fontSize: "20px", color: "#2B!E44", margin: "10px 0px", color: "#FFFFFF", fontWeight: '100' }}> About Us</Box>
                    <Box sx={{ fontSize: "20px", color: "#2B!E44", margin: "10px 0px", color: "#FFFFFF", fontWeight: '100' }}> Careers</Box>
                    <Box sx={{ fontSize: "20px", color: "#2B!E44", margin: "10px 0px", color: "#FFFFFF", fontWeight: '100' }}> Life@jobyahan</Box>
                    <Box sx={{ fontSize: "20px", color: "#2B!E44", margin: "10px 0px", color: "#FFFFFF", fontWeight: '100' }}> Blogs</Box>
                    <Box sx={{ fontSize: "20px", color: "#2B!E44", margin: "10px 0px", color: "#FFFFFF", fontWeight: '100' }}> What makes us special for job search?</Box>
                    <Box sx={{ fontSize: "20px", color: "#2B!E44", margin: "10px 0px", color: "#FFFFFF", fontWeight: '100' }}> Why Do Employers Love Us?</Box>



                </Box>

                <Box sx={{ width: { lg: "35%", md: "100%", xs: "100%" } }}>
                    <Typography component="span"
                        sx={{
                            display: "block",
                            fontSize: "20px",
                            color: "#FFFFFF",
                            fontWeight: "600",
                            margin: "10px 0px",
                        }}>
                        Support
                    </Typography>
                    <Box sx={{ fontSize: "16px", color: "#2B!E44", margin: "10px 0px", color: "#FFFFFF", fontWeight: '100' }}> jobyahan@gmail.com</Box>
                    <SocialMedia />

                </Box>
                <Box sx={{ width: { lg: "35%", md: "100%", xs: "100%" } }}>
                    <Typography component="span"
                        sx={{
                            display: "block",
                            fontSize: "20px",
                            color: "#FFFFFF",
                            fontWeight: "600",
                            margin: "10px 0px",
                        }}>
                        Legal
                    </Typography>
                    <Box sx={{ fontSize: "16px", color: "#2B!E44", margin: "10px 0px", color: "#FFFFFF", fontWeight: '100' }}>Privacy Policy</Box>
                    <Box sx={{ fontSize: "16px", color: "#2B!E44", margin: "10px 0px", color: "#FFFFFF", fontWeight: '100' }}> Terms & conditions</Box>
                </Box>

            </Stack>
            <hr style={{
                margin: "10px 0px"
            }}></hr>

            <Stack direction="row" gap={2}>
                <Box sx={{ fontSize: "16px", color: "#2B!E44", margin: "10px 0px", color: "#FFFFFF", fontWeight: '100' }}> Terms and Conditions</Box>
                <Box sx={{ fontSize: "16px", color: "#2B!E44", margin: "10px 0px", color: "#FFFFFF", fontWeight: '100' }}> Privacy Policy</Box>
                <Box sx={{ fontSize: "16px", color: "#2B!E44", margin: "10px 0px", color: "#FFFFFF", fontWeight: '100' }}> Cookies Policy</Box>
                <Box sx={{ fontSize: "16px", color: "#2B!E44", margin: "10px 0px", color: "#FFFFFF", fontWeight: '100' }}> Copyright Notifications</Box>
                <Box sx={{ fontSize: "16px", color: "#2B!E44", margin: "10px 0px", color: "#FFFFFF", fontWeight: '100' }}> Cookies Settings</Box>
            </Stack>

            <Typography component="span"
                sx={{
                    display: "block",
                    fontSize: "16px",
                    color: "#FFFFFF",
                    margin: "10px 0px",
                    fontWeight: "100",
                    fontFamily: "Montserrat"
                }}>
                Copyright © 2010-2023 Freepik Company S.L. All rights reserved.
            </Typography>
        </Box >
    </>)
}

export default Footer;
