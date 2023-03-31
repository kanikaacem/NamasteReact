import { Box, Typography, Stack } from "@mui/material";
import SocialMedia from "./SocialMedia";
import { FooterData, FooterData2, FooterData3 } from "../../utils/Data";
import { FooterBox } from "../../utils/Theme";

import { Link } from "react-router-dom";
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
                    {
                        FooterData && FooterData.map((item, index) => {
                            return (<>
                                <Link to={item.url}
                                    style={{
                                        textDecoration: "none"
                                    }} >
                                    <FooterBox key={index}> {item.name}</FooterBox>
                                </Link>

                            </>)
                        })
                    }
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
                    <FooterBox> jobyahan@gmail.com</FooterBox>
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
                    {
                        FooterData2 && FooterData2.map((item, index) => {
                            return (<>
                                <Link to={item.url}
                                    style={{
                                        textDecoration: "none"
                                    }}>
                                    <FooterBox key={index}> {item.name}</FooterBox>
                                </Link>
                            </>)
                        })
                    }

                </Box>

            </Stack>
            <hr style={{
                margin: "10px 0px"
            }}></hr>

            <Stack direction="row" gap={2} sx={{
                flexWrap: "wrap"
            }}>
                {
                    FooterData3 && FooterData3.map((item, index) => {
                        return (<>
                            <Link to={item.url}
                                style={{
                                    textDecoration: "none"
                                }}>
                                <FooterBox key={index}> {item.name}</FooterBox>
                            </Link>
                        </>)
                    })
                }
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
