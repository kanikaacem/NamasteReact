import { Box, Stack, Container, Typography } from "@mui/material";

import Heading from "../Component/Heading";
import { aboutUS } from "../../../utils/Data";

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
                direction="row"
            >
                <Stack className="secDesc" direction="row" gap={5} sx={{ width: "50%" }}>
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

                    {/* {aboutUS.map((item) => {
                        return (<>
                            <div className="secDescItem" key={item.id}
                                style={{ background: item.background, color: item.color ? item.color : '#00000' }}>
                                <h2 style={{ margin: '0px' }}>{item.per}</h2>
                                <span style={{ textAlign: 'center' }}>{item.description}</span>
                            </div>
                        </>)
                    })} */}
                </Stack>
                <Box className="description" sx={{
                    color: "#2B1E44",
                    width: "50%",
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    alignItems: "center"
                }}>
                    <Box sx={{ width: "749px" }}>
                        <Typography component="span"
                            sx={{
                                display: "block",
                                fontSize: "50px",
                                color: "#2B1E44",
                                fontWeight: "600",
                                margin: "0px",
                            }}>
                            About Us!
                        </Typography>
                        <Typography component="h2"
                            sx={{
                                margin: '0px',
                                fontSize: "24px",
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
                                fontSize: "24px"
                            }}>
                            A disruptor in job search and a strong contributor to India’s growth define JobsYahaan.
                            What sets us apart is that we offer work opportunities to all including those unsung heroes
                            who give you gifts, deliver you food & groceries, make you.......
                            <Typography component="span"
                                sx={{
                                    color: "#FC9A7E",
                                    fontSize: "24px"
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