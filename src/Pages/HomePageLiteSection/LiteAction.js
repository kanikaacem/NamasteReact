import { Box, Stack, Container, Button, useMediaQuery } from "@mui/material";

import { WebsiteContainedButtonStyles, WebsiteOutlinedButtonStyles } from "../../utils/Styles";
import { useNavigate } from "react-router-dom";
import Footer from "../../ThemeComponent/Common/Footer";
import HomePageLiteTopSection from "./HomePageLiteTopSection";
import HPLTopHeadingSection from "./HPLTopHeadingSection";

import { useTranslation } from "react-i18next";
const LiteAction = () => {
    const navigate = useNavigate();
    const goToURL = (url) => {
        navigate("/" + url);
    }
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));
    const { t } = useTranslation();
    return (
        <Box className="LiteActionpage">
            <HomePageLiteTopSection />
            <Container maxWidth={isDesktop ? "md" : false} sx={{ padding: "0px" }}>
                <Box sx={{ padding: "20px", background: isDesktop ? "#ffffff" : "#FEF5F1" }} >
                    <HPLTopHeadingSection headingText={t('GIVE_INFORMATION')} />
                    <Stack direction="column" gap={2} className="ButtonsSection" sx={{ height: "400px" }}>
                        <Button sx={{ ...WebsiteContainedButtonStyles, fontSize: "1rem", borderRadius: "5px", padding: "10px" }}
                            onClick={() => goToURL("candidate-information")}>{t('CANDIDATE_INFORMATION')}</Button>
                        <Button sx={{ ...WebsiteOutlinedButtonStyles, fontSize: "1rem", borderRadius: "5px", padding: "10px" }}
                            onClick={() => goToURL("employer-information")}>{t('FIND_HIRE')}</Button>
                    </Stack>
                </Box>
                <a href="/homepagelite" className="back-button-link">
                    <p>{t('BACK')}</p>
                </a>
            </Container>
            <Footer />
        </Box>
    )
}
export default LiteAction;

