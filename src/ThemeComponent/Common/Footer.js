import { Box, Typography, Stack } from "@mui/material";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Footer = () => {
    const { t } = useTranslation();
    const FooterHeading = ({ footerHeading }) => {
        return (<Typography variant="h1" component="h2" sx={{
            fontFamily: 'Montserrat',
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: "1rem",
            color: "#FFFFFF"
        }}>
            {footerHeading}
        </Typography >)
    }

    const FooterCompanyLinks = [
        { id: 1, text: "HOME", url: "#" },
        { id: 2, text: "ABOUT", url: "#" },
        { id: 3, text: "BLOGS", url: "#" }
    ]

    const FooterLegalLinks = [
        { id: 1, text: "PRIVACY_POLICY", url: "#" },
        { id: 2, text: "TERMS_AND_CONDITION", url: "#" }
    ]
    return (<>
        <Box className="websiteFooter" sx={{
            background: "#000000",
            padding: "30px 20px",
        }}>
            <Stack direction="row" gap={6} sx={{
                flexWrap: "wrap"
            }}>
                <Stack direction="column" gap={1.5} className="WebsiteInfo" sx={{ width: "42%" }}>
                    <Box sx={{ width: "140px", height: "30px" }}>
                        <img src={window.location.origin + "/assets/websiteLogo.png"} alt="websiteLogo" />
                    </Box>
                    <Typography variant="h1" component="h2" sx={{
                        fontFamily: 'Montserrat',
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "14px",
                        color: "#FFFFFF"
                    }}>
                        {t('BHARAT_KA_JOB_APP')}
                    </Typography >
                    <Typography variant="h1" component="h2" sx={{
                        fontFamily: 'Montserrat',
                        fontStyle: "normal",
                        fontWeight: "300",
                        fontSize: "12px",
                        lineHeight: "15px",
                        color: "#FFFFFF"
                    }}>
                        {t('JOBSYAHAN_IS_A_JOB_PORTAL_EVERY_EMPLOYER')}
                    </Typography >
                </Stack>
                <Stack direction="column" gap={2} className="CompanyInformation" sx={{ width: "42%" }}>
                    <FooterHeading footerHeading={t('COMPANY')} />
                    {FooterCompanyLinks.map((item) => {
                        return (
                            <Link key={item.id} href={item.url} style={{
                                fontFamily: 'Montserrat',
                                fontStyle: "normal",
                                fontWeight: "300",
                                fontSize: "12px",
                                color: "#FFFFFF",
                                textDecoration: "none"
                            }}>{t(item.text)}</Link>
                        )
                    })}
                </Stack>
                <Stack direction="column" gap={2} className="CompanySupports" sx={{ width: "42%" }}>
                    <FooterHeading footerHeading={t('SUPPORT')} />
                    <Link href="#" style={{
                        fontFamily: 'Montserrat',
                        fontStyle: "normal",
                        fontWeight: "300",
                        fontSize: "12px",
                        color: "#FFFFFF",
                        textDecoration: "none"
                    }}>jobsyahan@gmail.com</Link>
                    <Stack direction="row" gap={1}>
                        <Box sx={{ width: "23px", height: "23px" }}>
                            <img src={window.location.origin + "/assets/Google.png"} alt="Google" width="100%" height="100%" />
                        </Box>
                        <Box sx={{ width: "23px", height: "23px" }}>
                            <img src={window.location.origin + "/assets/Linkedin.png"} alt="Google" width="100%" height="100%" />
                        </Box>
                        <Box sx={{ width: "23px", height: "23px" }}>
                            <img src={window.location.origin + "/assets/Facebook.png"} alt="Google" width="100%" height="100%" />
                        </Box>
                    </Stack>


                </Stack>
                <Stack direction="column" gap={2} className="LegalInformation" sx={{ width: "42%" }}>
                    <FooterHeading footerHeading={t('LEGAL')} />
                    {FooterLegalLinks.map((item) => {
                        return (
                            <Link key={item.id} href={item.url} style={{
                                fontFamily: 'Montserrat',
                                fontStyle: "normal",
                                fontWeight: "300",
                                fontSize: "12px",
                                color: "#FFFFFF",
                                textDecoration: "none"
                            }}>{t(item.text)}</Link>
                        )
                    })}
                </Stack>

            </Stack >
            <Stack sx={{ padding: "20px 0px" }} gap={1}>
                <div style={{ border: "0.5px solid rgba(157, 141, 176, 0.29" }} />
                <Typography variant="h1" component="h2" sx={{
                    fontFamily: 'Montserrat',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "10px",
                    lineHeight: "12px",
                    color: "#B4A9C2"
                }}>
                    Copyright © 2010-2023 Freepik Company S.L. All rights reserved.
                </Typography >
            </Stack>
        </Box>
    </>)
}

export default Footer;
