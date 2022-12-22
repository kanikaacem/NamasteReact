import { Box, Stack, Container, Typography } from "@mui/material";

import Heading from "../Component/Heading";
import { aboutUS } from "../../../utils/Data";

const AboutUs = () => {
    return (<>
        <Box
            sx={{
                padding: "30px",
                minHeight: "400px",
                // background: "#E5521D"
                background: "#FAFAFA",
                color: "#2B1E44"

            }}>

            {/* <Heading text="" color="#2B1E44" /> */}
            <Container>
                <Stack
                    gap={5}
                    direction={{ lg: 'row', md: 'column', xs: 'column' }}
                >
                    <Box className="description" sx={{ color: "#2B1E44" }}>
                        <Typography component="span"
                            sx={{
                                display: "block",
                                fontSize: "50px",
                                // color: "#2B1E44",
                                color: "black",
                                fontWeight: "600",
                                margin: "0px",
                            }}>
                            About Us!
                        </Typography>
                        <Typography component="h2"
                            sx={{
                                margin: '0px',
                                fontSize: "30px",
                                margin: "10px 0px",
                                fontWeight: "600",
                                color: "#445578"
                            }}>
                            We provide custom web designs
                        </Typography>
                        <Typography component="p"
                            sx={{
                                margin: '10px 0px',
                                fontStyle: "italic",
                                color: "#445578"
                            }}>
                            WE WORK DIRECTLY FOR OUR CLIENTS AND PUT CLIENT’S INTERESTS FIRST.
                        </Typography>
                        <Typography component="p"
                            sx={{
                                color: "#445578",
                                lineHeight: "2"
                            }}>
                            Everything that can be necessary to create and manage new projects (startups)
                            in modern conditions. From development of concept, business plan and project management
                            plan, to marketing strategy and tactics, as well as the system of customer attraction via the Internet and sales system.
                        </Typography>
                    </Box>
                    <Box className="secDesc">
                        {aboutUS.map((item) => {
                            return (<>
                                <div className="secDescItem" key={item.id}
                                    style={{ background: item.background, color: item.color ? item.color : '#00000' }}>
                                    <h2 style={{ margin: '0px' }}>{item.per}</h2>
                                    <span style={{ textAlign: 'center' }}>{item.description}</span>
                                </div>
                            </>)
                        })}
                    </Box>
                </Stack>
            </Container>

        </Box>
    </>)
}

export default AboutUs;
//