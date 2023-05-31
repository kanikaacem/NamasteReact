import { Box, Stack, Button, Typography } from "@mui/material";

import { WebsiteMainHeading, WebsiteContainedButtonStyles, WebsiteOutlinedButtonStyles } from "../../utils/Styles";
import LanguageTranslatorSection from "../Common/LanguageTranslaterSection";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom";
const HomePageLite = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    return (
        <Box className="HomePageLite" sx={{
            height: "100vh",
        }}>
            <LanguageTranslatorSection />
            <Box className="TopSectionImage" sx={{
                position: "relative",
                width: "100%",
                height: "400px",
                background: "yellow"
            }}>
                <Typography variant="h1" component="h2" sx={{
                    ...WebsiteMainHeading,
                    fontSize: { "xs": "1.65rem", "sm": "1.65rem", "md": "2rem", "xl": "2rem", "lg": "2rem" },
                    position: "absolute",
                    bottom: "20px"
                }}>
                    {t(`INDIA'S_TRUSTED_jOB_PORTAL`)}
                </Typography >

            </Box>

            <Stack direction="column" gap={2} justifyContent="center"
                className="ButtonsSection"
                sx={{
                    padding: "20px"
                }}>
                <Button sx={WebsiteContainedButtonStyles} onClick={() => navigate("/useraction")}>jOB yAHAN sahayak</Button>
                <Stack direction="row" justifyContent="space-between">
                    <Button sx={{ width: "49%", ...WebsiteOutlinedButtonStyles }} onClick={() => navigate("/job-listing")}>Job खोजें</Button>
                    <Button sx={{ width: "49%", ...WebsiteOutlinedButtonStyles }}>Candidate खोजें</Button>
                </Stack>
            </Stack>

        </Box>
    )
}
export default HomePageLite;