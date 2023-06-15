import { Box, Stack, Button, Typography, useMediaQuery, Container } from "@mui/material";

import { WebsiteMainHeading, WebsiteContainedButtonStyles, WebsiteOutlinedButtonStyles } from "../../utils/Styles";
import LanguageTranslatorSection from "../Common/LanguageTranslaterSection";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom";
import Footer from "../../ThemeComponent/Common/Footer";
const HomePageLite = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));

    return (
        <Box className="HomePageLite" sx={{
        }}>
            <Container maxWidth={isDesktop ? "md" : false} sx={{ padding: "0px", minHeight: "100vh", }}>
                <LanguageTranslatorSection />
                <Box className="TopSectionImage" sx={{
                    position: "relative",
                    width: "100%",
                    height: "400px",
                }}>
                    <Stack alignItems="center" justifyContent="flex-end" sx={{
                        height: "inherit"
                    }}>
                        <Box sx={{
                            width: "200px",
                            height: "200px"
                        }}>
                            <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/vertical_logo.png" alt="WebsiteLogo" width="100%" height="100%" />
                        </Box>
                        <Typography variant="h1" component="h2" sx={{
                            ...WebsiteMainHeading,
                            fontSize: "1.4rem",
                            fontWeight: "600",
                            marginTop: "10px"

                        }}>
                            {t(`INDIA'S_TRUSTED_jOB_PORTAL`)}
                        </Typography >
                    </Stack>


                </Box>

                <Stack direction="column" gap={2} justifyContent="center"
                    className="ButtonsSection"
                    sx={{
                        padding: "20px"
                    }}>
                    <Button sx={{ ...WebsiteContainedButtonStyles, fontSize: "1rem", borderRadius: "5px", padding: "10px" }} onClick={() => navigate("/useraction")}>jOB yAHAN sahayak</Button>
                    <Stack direction="row" justifyContent="space-between">
                        <Button sx={{ ...WebsiteOutlinedButtonStyles, fontSize: "1rem", borderRadius: "5px", padding: "10px", width: "49%" }} onClick={() => navigate("/job-listing")}>Job खोजें</Button>
                        <Button sx={{ ...WebsiteOutlinedButtonStyles, fontSize: "1rem", borderRadius: "5px", padding: "10px", width: "49%" }} onClick={() => navigate("/candidate-khoze")}>Candidate खोजें</Button>
                    </Stack>
                </Stack>
            </Container>
            <Footer />
        </Box >
    )
}
export default HomePageLite;