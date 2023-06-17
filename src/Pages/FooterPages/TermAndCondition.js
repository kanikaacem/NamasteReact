import { Box, Stack, Typography } from "@mui/material";
import Footer from "../../ThemeComponent/Common/Footer";
import FooterHeading from "./FooterHeading";
import FooterDescription from "./FooterDescription";
const TermAndCondition = () => {

    return (<>
        <Stack
            className="AboutUsPage"
            direction="column"
            sx={{
                background: "#FCFCFC"
            }}
        >
            <Box className="AboutUsPageHeader" sx={{
                width: '100%',
                padding: "20px",
                boxSizing: "border-box",
                position: "sticky",
                top: "0",
                zIndex: 789,
                background: "#FCFCFC",
            }}>
                <Box className="WebsiteLogo" sx={{ width: "150px" }}>
                    <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/horizontal_logo.png" alt="WebsiteLogo" width="100%" height="100%" />
                </Box>
            </Box>

            <Box className="TermsAndConditionContent"
                sx={{
                    padding: { "xs": "20px", "sm": "20px", "md": "60px 40px", "lg": "60px 40px", "xl": "60px 40px" },
                    boxSizing: "border-box"
                }}>
                <Box className="TermsAndConditionTopSection" sx={{ position: "relative" }}>
                    <Box sx={{
                        backgroundImage: `url("https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/website_banner_image.png")`,/* The image used */
                        height: "500px",/* You must set a specified height */
                        backgroundRepeat: "no-repeat", /* Do not repeat the image */
                        backgroundSize: "cover",
                        opacity: "rgba(0, 0, 0, 0.5)"

                    }}>
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                            }}
                        />
                    </Box>
                    <Stack className="PageHeading" gap={2} sx={{
                        position: "absolute",
                        top: "35%",
                        left: "40%",
                        display: "inline - flex"
                    }}>
                        <Typography sx={{
                            fontSize: { "xs": "1.5rem", "sm": "1.5rem", "md": "1.5rem", "lg": "3rem", "xl": "3rem" },
                            fontWeight: "700",
                            color: "#ffffff",
                            lineHeight: "1.2",

                        }}>
                            Terms and
                        </Typography>
                        <Typography sx={{
                            fontSize: { "xs": "1.5rem", "sm": "1.5rem", "md": "1.5rem", "lg": "3rem", "xl": "3rem" },
                            fontWeight: "700",
                            color: "#FF671F",
                            display: "block",
                            lineHeight: "1.2"
                        }}>
                            Conditions
                        </Typography>
                    </Stack>

                </Box>
                <Box className="AboutUsPageContentDescriptions" sx={{ padding: "20px 0px" }}>
                    <Stack direction="column" gap={1}>
                        <FooterHeading />
                        <FooterDescription />
                    </Stack>
                    <Stack direction="column" gap={1} sx={{ marginTop: "40px" }}>
                        <Typography
                            sx={{
                                fontSize: { "lg": "20px", "md": "20px", "xs": "20px" },
                                fontWeight: "600",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.7"
                            }}>
                            Our Vision
                        </Typography>
                        <FooterHeading />
                        <Stack direction="column" gap={3}>
                            <FooterDescription />
                            <FooterDescription />
                            <FooterDescription />
                        </Stack>
                    </Stack>

                    <Box sx={{
                        background: "#F7F0FF",
                        border: "1px solid #E9DFF7",
                        borderRadius: "7px",
                        padding: "20px",
                        margin: "50px 0px"
                    }}>

                        <FooterHeading />
                        <FooterDescription />
                    </Box>
                </Box>

            </Box>
            <Footer />
        </Stack ></>)
}

export default TermAndCondition;
