import { Box, Stack, Typography } from "@mui/material";
import Footer from "../../ThemeComponent/Common/Footer";
import FooterHeading from "./FooterHeading";
import FooterDescription from "./FooterDescription";
import Header from "../Common/Header";
import { useTranslation } from "react-i18next";
const AboutUs = () => {
    const { t } = useTranslation();

    return (<>
        <Stack
            className="AboutUsPage"
            direction="column"
            sx={{
                background: "#FCFCFC"
            }}
        >
            <Header />
            <Box className="AboutUsContent"
                sx={{
                    padding: { "xs": "20px", "sm": "20px", "md": "60px 40px", "lg": "60px 40px", "xl": "60px 40px" },
                    boxSizing: "border-box"
                }}>
               
                <Stack direction="row" gap={1} className="AboutusPagetopSection">
                <Typography sx={{
                            fontSize: { "xs": "1.5rem", "sm": "1.5rem", "md": "1.5rem", "lg": "3rem", "xl": "3rem" },
                            fontWeight: "700",
                            lineHeight: "1.2",

                        }}>
                            {t('ABOUT_US')}
                        </Typography>
                </Stack>
                <Box className="AboutUsPageContentDescriptions" sx={{ padding: "20px 0px" }}>
                    <Stack direction="column" gap={1}>
                        <FooterHeading headingText="FOOTER_HEADING_1" />
                        <Stack direction="column" gap={3}>
                            <FooterDescription Description="FOOTER_DESCRIPTION_1" />
                            <FooterDescription Description="FOOTER_DESCRIPTION_2" />
                            <FooterDescription Description="FOOTER_DESCRIPTION_3" />
                        </Stack>

                    </Stack>
                    <Stack direction="column" gap={1} sx={{ marginTop: "40px" }}>
                        <FooterHeading headingText="VISION" />
                        <FooterDescription Description="VISION_DESCRIPTION_1" />
                        <FooterDescription Description="VISION_DESCRIPTION_2" />
                    </Stack>
                    <Stack direction="column" gap={1} sx={{ marginTop: "40px" }}>
                        <FooterHeading headingText="MISSION" />
                        <FooterDescription Description="MISSION_DESCRIPTION" />
                    </Stack>

                    <Stack direction="column" gap={1} sx={{ marginTop: "40px" }}>
                        <FooterHeading headingText="CORE_VALUES" />
                        <FooterDescription Description="CORE_VALUES_DESCRIPTION_1" />
                        <FooterHeading headingText="CORE_VALUES_HEADING_1" />
                        <FooterDescription Description="CORE_VALUES_HEADING_1_DESCRIPTION" />
                        <FooterHeading headingText="CORE_VALUES_HEADING_2" />
                        <FooterDescription Description="CORE_VALUES_HEADING_2_DESCRIPTION" />
                        <FooterHeading headingText="CORE_VALUES_HEADING_3" />
                        <FooterDescription Description="CORE_VALUES_HEADING_3_DESCRIPTION" />
                        <FooterHeading headingText="CORE_VALUES_HEADING_4" />
                        <FooterDescription Description="CORE_VALUES_HEADING_4_DESCRIPTION" />
                    </Stack>
                </Box>

            </Box>
            <Footer />
        </Stack ></>)
}

export default AboutUs;
