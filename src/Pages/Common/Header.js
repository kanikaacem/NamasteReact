import { Box, Stack, Button } from "@mui/material";
import LanguageTranslatorSection from "../Common/LanguageTranslaterSection";
import WebsiteLogo from "./WebsiteLogo";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
const FooterHeader = ({ showButton }) => {
    const mobileScreen = localStorage.getItem("device_type") === "mobile";

    const { t } = useTranslation();
    const FindJobButton = ({ style }) => {
        const navigate = useNavigate();
        return (<Button variant="contained"
            onClick={() => navigate("/job-listing")}
            sx={{
                background: "#FF671F",
                borderRadius: "33px",
                textTransform: "capitalize",
                fontSize: { "xs": "0.8rem", "sm": "0.8rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
                "&:hover": {
                    background: "#FF671F",
                },
                ...style // Apply custom styles passed via the style prop

            }
            }> {t('FIND_JOB')}</Button >)
    }

    const FindCandidateButton = ({ style }) => {
        const navigate = useNavigate();
        return (<Button
            onClick={() => navigate("/candidate-khoze")}
            sx={{
                color: "#FF671F",
                borderRadius: "33px",
                textTransform: "capitalize",
                border: "1px solid",
                fontSize: { "xs": "0.8rem", "sm": "0.8rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
                "&:hover": {
                    color: "#FF671F",
                    border: "1px solid",

                },
                ...style // Apply custom styles passed via the style prop


            }}
            variant="outlined">{t('FIND_CANDIDATE')} </Button>)
    }
    return (
        <Box className="FooterHeader" sx={{
            width: "100%",
            padding: { "xs": "10px", "sm": "10px", "md": "20px 100px", "lg": "20px 100px", "xl": "20px 100px" },
            boxSizing: "border-box",
            background: "#FFFFFF",
            position: "sticky",
            top: "0",
            zIndex: "234",
        }} >
            <Stack direction="row" className="WebsiteLogoAndLoginSection"
                alignItems="center"
                sx={{
                    justifyContent: mobileScreen ? "space-between" : "flex-start",
                    flexWrap: mobileScreen && "wrap"
                }}>
                <WebsiteLogo />
                {!mobileScreen && <Stack className="LanguageSelectorSection" sx={{
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Box sx={{
                        width: "400px",
                        border: "1px solid #DFE3E6",
                        borderRadius: "20px",
                        height: "fit-content"
                    }}>
                        <LanguageTranslatorSection />
                    </Box>
                </Stack>}
                {showButton && <Stack
                    sx={{
                        width: { "xs": "100%", "sm": "100%", "md": "1150px", "lg": "1150px", "xl": "1150px" },
                        alignItems: !mobileScreen && "flex-end",
                    }}
                >
                    <Stack direction="row" gap={1} sx={{
                        height: "inherit",
                        margin: mobileScreen && "10px 0px ",
                        justifyContent: mobileScreen && "space-between"
                    }}>
                        <FindJobButton style={!mobileScreen ? { width: "200px", height: "45px" } : { width: "170px" }} />
                        <FindCandidateButton style={!mobileScreen ? { width: "200px", height: "45px" } : { width: "170px" }} />
                    </Stack>

                </Stack>}


            </Stack>
        </Box>

    )
}
export default FooterHeader;