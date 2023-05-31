import { Box, Stack, Container, Button } from "@mui/material";

import { WebsiteContainedButtonStyles } from "../../utils/Styles";
import { useNavigate } from "react-router-dom";

import PageTopSection from "../Common/PageTopSection";
import Footer from "../../ThemeComponent/Common/Footer";
const LiteAction = () => {
    const navigate = useNavigate();
    const goToURL = (url) => {
        navigate("/" + url);
    }
    return (
        <Box sx={{
            height: "100vh",
        }}>
            <PageTopSection TopSectionName="jankari de" />
            <Container sx={{
                padding: "0px", maxWidth: '1800px', minHeight: {
                    "xs": "fit-content", "sm": "fit-content", "md": "623px", "lg": "623px", "xl": "623px"
                },
            }} maxWidth={false}>

                <Stack direction="column" gap={2} className="ButtonsSection" sx={{ height: "400px", padding: "20px" }}>
                    <Button sx={{ fontSize: "1rem !important", ...WebsiteContainedButtonStyles }}
                        onClick={() => goToURL("candidate-information")}>Candidate ki jaankari de</Button>
                    <Button sx={{ fontSize: "1rem !important", ...WebsiteContainedButtonStyles }}
                        onClick={() => goToURL("hr-information")}>Hire karne waale ki jaankari de</Button>
                </Stack>
            </Container>
            <Footer />
        </Box>
    )
}
export default LiteAction;

