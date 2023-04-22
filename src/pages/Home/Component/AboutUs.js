import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const AboutUs = () => {
    return (<>
        <Box
            sx={{
                padding: { "xs": "100px 10px 30px", "sm": "60px", "md": "60px", "lg": "60px", "xl": "60px" },
                minHeight: "400px",
                background: "#FFFFFF",
                color: "#2B1E44"

            }}>

            <Stack
                gap={5}
                direction={{ "lg": "row", "md": "row", "xs": "column" }}

            >
                <Stack className="aboutUsDescription" direction="row" justifyContent="center"
                    sx={{
                        width: { "lg": "50%", "md": "50%", "xs": "100%" },
                        gap: { "xs": "8px", "sm": "40px", "md": "40px", "lg": "40px", "xl": "40px" }
                    }}>
                    <Box sx={{
                        width: { "xs": "200px", "sm": "300px", "md": "300px", "lg": "300px", "xl": "300px" },
                        background: "#4E3A67",
                        boxShadow: " 0px 24px 32px #F1E6FF",
                        borderRadius: "15px",
                    }}>
                        <Stack direction="column" gap={1} sx={{
                            padding: { "xs": "15px", "sm": "30px", "md": "30px", "lg": "30px", "xl": "30px" }
                        }}>
                            <Box sx={{
                                width: {
                                    "xs": "30px", "sm": "50px", "md": "50px", "lg": "50px", "xl": "50px"
                                }
                            }}>
                                <img src={window.location.origin + "/assets/Star.png"} alt="Star" width="100%" />
                            </Box>
                            <Typography component="div"
                                sx={{
                                    color: "#FC9A7E",
                                    fontSize: { "xs": "12px", "sm": "20px", "md": "20px", "lg": "20px", "xl": "20px" },
                                    fontWeight: "600",
                                    height: { "xs": "50px", "sm": "90px", "md": "90px", "lg": "90px", "xl": "90px" }

                                }}>
                                50K People Have Got Jobs Through Us; Next is YOU!
                            </Typography>
                            <Typography component="div"
                                sx={{
                                    color: "#FFFFFF",
                                    fontSize: { "xs": "12px", "sm": "16px", "md": "16px", "lg": "16px", "xl": "16px" },
                                }}>
                                A platform where you can get work from corporates, small and local businesses.
                            </Typography>

                        </Stack>
                    </Box>
                    <Box sx={{
                        width: { "xs": "200px", "sm": "300px", "md": "300px", "lg": "300px", "xl": "300px" },
                        background: "#4E3A67",
                        boxShadow: " 0px 24px 32px #F1E6FF",
                        borderRadius: "15px",
                    }}>
                        <Stack direction="column" gap={1} sx={{
                            padding: { "xs": "15px", "sm": "30px", "md": "30px", "lg": "30px", "xl": "30px" }

                        }}>
                            <Box sx={{
                                width: {
                                    "xs": "30px", "sm": "50px", "md": "50px", "lg": "50px", "xl": "50px"
                                }
                            }}>
                                <img src={window.location.origin + "/assets/Park.png"} alt="Park" width="100%" />
                            </Box>
                            <Typography component="div"
                                sx={{
                                    color: "#FC9A7E",
                                    fontSize: { "xs": "12px", "sm": "20px", "md": "20px", "lg": "20px", "xl": "20px" },
                                    fontWeight: "600",
                                    height: { "xs": "50px", "sm": "90px", "md": "90px", "lg": "90px", "xl": "90px" }
                                }}>
                                Select from the Jobs in Your City
                            </Typography>
                            <Typography component="div"
                                sx={{
                                    color: "#FFFFFF",
                                    fontSize: { "xs": "12px", "sm": "16px", "md": "16px", "lg": "16px", "xl": "16px" },

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
                                fontSize: { "lg": "24px", "md": "24px", "xs": "12px" },
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
                                fontSize: { "lg": "24px", "md": "24px", "xs": "12px" }
                            }}>
                            A disruptor in job search and a strong contributor to India’s growth define JobsYahaan.
                            What sets us apart is that we offer work opportunities to all including those unsung heroes
                            who give you gifts, deliver you food & groceries, make you.......
                            <Link to="/about-us" style={{
                                textDecoration: "none"
                            }}>
                                <Typography component="span"
                                    sx={{
                                        color: "#FC9A7E",
                                        fontSize: { "lg": "24px", "md": "24px", "xs": "12px" },
                                        cursor: "pointer"
                                    }}>
                                    More.
                                </Typography>
                            </Link>

                        </Typography>
                    </Box>
                </Box>

            </Stack >

        </Box >
    </>)
}

export default AboutUs;
//