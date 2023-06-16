import { Box, Stack, Typography } from "@mui/material";
import Footer from "../../ThemeComponent/Common/Footer";

import { useTranslation } from "react-i18next";
import FooterHeading from "./FooterHeading";
import FooterDescription from "./FooterDescription";
const PrivacyPolicy = () => {
    const { t } = useTranslation();
    return (<Stack
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

        <Box className="AboutUsContent"
            sx={{
                padding: { "xs": "20px", "sm": "20px", "md": "60px 40px", "lg": "60px 40px", "xl": "60px 40px" },
                boxSizing: "border-box"
            }}>
            <Box className="AboutUsContentTopSection" sx={{ position: "relative" }}>
                <Box>
                    <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/about_us.png" alt="banner"
                        width="100%" height="100%" />
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
                        {t('ABOUT')}
                    </Typography>
                    <Typography sx={{
                        fontSize: { "xs": "1.5rem", "sm": "1.5rem", "md": "1.5rem", "lg": "3rem", "xl": "3rem" },
                        fontWeight: "700",
                        color: "#FF671F",
                        display: "block",
                        lineHeight: "1.2"
                    }}>
                        Job Yahan
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
    </Stack >)
}

export default PrivacyPolicy;
