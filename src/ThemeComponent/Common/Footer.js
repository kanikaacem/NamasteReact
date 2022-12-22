import { Box, Container, Typography, Stack } from "@mui/material";

const Footer = () => {
    return (<>
        <Box sx={{ background: "#E4E4E4", minheight: "400px" }}>
            <Container>
                <Stack direction={{ lg: "row", md: "column", xs: "column" }} gap={5} sx={{ padding: "50px 0px" }}>
                    <Box sx={{ width: { lg: "35%", md: "100%", xs: "100%" } }}>
                        <Box
                            sx={{ width: "80px", height: "80px" }}>
                            <img src={window.location.origin + '/assets/companyLogo.png'} alt="LOGO" width="100%">
                            </img>
                        </Box>
                        <Typography component="span"
                            sx={{
                                display: "block",
                                fontSize: "20px",
                                color: "#2B1E44",
                                fontWeight: "600",
                                margin: "10px 0px",
                            }}>
                            Chat Directly. Hire Instantly.
                        </Typography>
                        <Typography component="span"
                            sx={{
                                display: "block",
                                fontSize: "16px",
                                color: "#2B1E44",
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
                                color: "#2B1E44",
                                fontWeight: "600",
                                margin: "10px 0px",
                            }}>
                            Jobyahan
                        </Typography>
                        <Box sx={{ fontSize: "16px", color: "#2B!E44", margin: "10px 0px", color: "#2B1E44" }}> Home</Box>
                        <Box sx={{ fontSize: "16px", color: "#2B!E44", margin: "10px 0px", color: "#2B1E44" }}> About Us</Box>
                        <Box sx={{ fontSize: "16px", color: "#2B!E44", margin: "10px 0px", color: "#2B1E44" }}> Recruiters</Box>
                        <Box sx={{ fontSize: "16px", color: "#2B!E44", margin: "10px 0px", color: "#2B1E44" }}> Job Seekers</Box>
                        <Box sx={{ fontSize: "16px", color: "#2B!E44", margin: "10px 0px", color: "#2B1E44" }}> Contact Us</Box>


                    </Box>

                    <Box sx={{ width: { lg: "35%", md: "100%", xs: "100%" } }}>
                        <Typography component="span"
                            sx={{
                                display: "block",
                                fontSize: "20px",
                                color: "#2B1E44",
                                fontWeight: "600",
                                margin: "10px 0px",
                            }}>
                            Support
                        </Typography>
                        <Box sx={{ fontSize: "16px", color: "#2B!E44", margin: "10px 0px", color: "#2B1E44" }}> jobyahan@gmail.com</Box>

                    </Box>
                    <Box sx={{ width: { lg: "35%", md: "100%", xs: "100%" } }}>
                        <Typography component="span"
                            sx={{
                                display: "block",
                                fontSize: "20px",
                                color: "#2B1E44",
                                fontWeight: "600",
                                margin: "10px 0px",
                            }}>
                            Legal
                        </Typography>
                        <Box sx={{ fontSize: "16px", color: "#2B!E44", margin: "10px 0px", color: "#2B1E44" }}>Privacy Policy</Box>
                        <Box sx={{ fontSize: "16px", color: "#2B!E44", margin: "10px 0px", color: "#2B1E44" }}> Terms & conditions</Box>
                    </Box>

                </Stack>
            </Container>


        </Box>
    </>)
}

export default Footer;
