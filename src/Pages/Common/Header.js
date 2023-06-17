import { Box, Stack, Button } from "@mui/material";
import LanguageTranslatorSection from "../Common/LanguageTranslaterSection";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
const FooterHeader = () => {
    let mobileScreen = useSelector(state => state.screenType) === "mobile";

    const FindJobButton = ({ style }) => {
        const navigate = useNavigate();
        return (<Button variant="contained"
            onClick={() => navigate("/job-listing")}
            sx={{
                background: "#FF671F",
                borderRadius: "33px",
                textTransform: "capitalize",
                fontSize: { "xs": "0.8rem", "sm": "0.8rem", "md": "1.5rem", "lg": "1.5rem", "xl": "1.5rem" },
                "&:hover": {
                    background: "#FF671F",
                },
                ...style // Apply custom styles passed via the style prop

            }
            }> Job खोजें</Button >)
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
                fontSize: { "xs": "0.8rem", "sm": "0.8rem", "md": "1.5rem", "lg": "1.5rem", "xl": "1.5rem" },
                "&:hover": {
                    color: "#FF671F",
                    border: "1px solid",

                },
                ...style // Apply custom styles passed via the style prop


            }}
            variant="outlined">Candidate खोजें </Button>)
    }
    return (
        <Box className="FooterHeader" sx={{
            minHeight: { "xs": "50px", "sm": "50px", "md": "100px", "lg": "100px", "xl": "100px" },
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

                    justifyContent: "flex-start"
                }}>
                <Box className="WebsiteLogo" sx={{
                    width: {"xs":"100px","sm":"100px","md":"100px","lg":"185px","xl":"185px"}
                }}>
                    <img src={window.location.origin + "/assets/DesktopLogo.png"} alt="JY" width="100%" height="100%" />
                </Box>
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
                <Stack
                    sx={{
                        width: { "xs": "fit-content", "sm": "fit-content", "md": "1150px", "lg": "1150px", "xl": "1150px" },
                        alignItems: !mobileScreen && "flex-end"
                    }}
                >
                    <Stack direction="row" gap={1} sx={{
                        height: "inherit"
                    }}>
                        <FindJobButton style={!mobileScreen && { width: "200px", height: "45px" }} />
                        <FindCandidateButton style={!mobileScreen && { width: "300px", height: "45px" }} />
                    </Stack>

                </Stack>

            </Stack>
        </Box>

    )
}
export default FooterHeader;