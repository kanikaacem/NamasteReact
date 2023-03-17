import { Box, Stack, Typography } from "@mui/material";

const AboutUs = () => {
    return (<>
        <Box
            sx={{
                padding: "60px",
                minHeight: "400px",
                background: "#FFFFFF",
                color: "#2B1E44"

            }}>

            <Stack
                gap={5}
                direction={{ "lg": "row", "md": "row", "xs": "column" }}

            >
                <Stack className="secDesc" direction="row" gap={5} sx={{ width: { "lg": "50%", "md": "50%", "xs": "100%" } }}>
                    <Box sx={{
                        width: "300px",
                        height: "330px",
                        background: "#4E3A67",
                        boxShadow: " 0px 24px 32px #F1E6FF",
                        borderRadius: "15px",
                    }}>
                        <Stack direction="column" gap={1} sx={{
                            padding: "30px"
                        }}>
                            <Box sx={{ width: "50px" }}>
                                <img src={window.location.origin + "/assets/Star.png"} alt="Star" />
                            </Box>
                            <Typography component="div"
                                sx={{
                                    color: "#FC9A7E",
                                    fontSize: "20px",
                                    fontWeight: "600",
                                    height: "90px"
                                }}>
                                50K People Have Got Jobs Through Us; Next is YOU!
                            </Typography>
                            <Typography component="div"
                                sx={{
                                    color: "#FFFFFF",
                                    fontSize: "16px",
                                }}>
                                A platform where you can get work from corporates, small and local businesses.
                            </Typography>

                        </Stack>
                    </Box>
                    <Box sx={{
                        width: "300px",
                        height: "330px",
                        background: "#4E3A67",
                        boxShadow: " 0px 24px 32px #F1E6FF",
                        borderRadius: "15px",
                    }}>
                        <Stack direction="column" gap={1} sx={{
                            padding: "30px"
                        }}>
                            <Box sx={{ width: "50px" }}>
                                <img src={window.location.origin + "/assets/Park.png"} alt="Park" />
                            </Box>
                            <Typography component="div"
                                sx={{
                                    color: "#FC9A7E",
                                    fontSize: "20px",
                                    fontWeight: "600",
                                    height: "90px"
                                }}>
                                Select from the Jobs in Your City
                            </Typography>
                            <Typography component="div"
                                sx={{
                                    color: "#FFFFFF",
                                    fontSize: "16px",
                                }}>
                                Choose from the jobs available in your city. A perfect selection means a perfect life!
                            </Typography>

                        </Stack>
                    </Box>
                </Stack>
                <Box className="description" sx={{
                    color: "#2B1E44",
                    width: { "lg": "50%", "md": "50%", "xs": "100%" },
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    alignItems: "center"
                }}>
                    <Box sx={{ width: "749px" }}>
                        <Typography component="span"
                            sx={{
                                display: "block",
                                fontSize: { "lg": "50px", "md": "50px", "xs": "24px" },
                                color: "#2B1E44",
                                fontWeight: "600",
                                margin: "0px",
                            }}>
                            About Us!
                        </Typography>
                        <Typography component="h2"
                            sx={{
                                margin: '0px',
                                fontSize: { "lg": "24px", "md": "24px", "xs": "18px" },
                                margin: "10px 0px",
                                fontWeight: "600",
                                color: "#3A2D49"
                            }}>
                            JobsYahaan - A Platform for Jobs and Self-employment
                        </Typography>

                        <Typography component="span"
                            sx={{
                                color: "#3A2D49",
                                lineHeight: "1.5",
                                fontSize: { "lg": "24px", "md": "24px", "xs": "18px" }
                            }}>
                            A disruptor in job search and a strong contributor to India’s growth define JobsYahaan.
                            What sets us apart is that we offer work opportunities to all including those unsung heroes
                            who give you gifts, deliver you food & groceries, make you.......
                            <Typography component="span"
                                onClick={() =>
                                    window.location.href = window.location.origin + "/about-us"}
                                sx={{
                                    color: "#FC9A7E",
                                    fontSize: { "lg": "24px", "md": "24px", "xs": "18px" },
                                    cursor: "pointer"
                                }}>
                                More.
                            </Typography>
                        </Typography>
                    </Box>
                </Box>

            </Stack>

        </Box >
    </>)
}

export default AboutUs;
//