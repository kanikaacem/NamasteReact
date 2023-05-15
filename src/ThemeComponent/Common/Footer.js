import { Box, Typography, Stack } from "@mui/material";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Footer = () => {
    const { t } = useTranslation();

    const FooterCompanyLinks = [
        { id: 1, text: "HOME", url: "#" },
        { id: 2, text: "ABOUT", url: "#" },
        { id: 3, text: "BLOGS", url: "#" }
    ]

    const FooterLegalLinks = [
        { id: 1, text: "PRIVACY_POLICY", url: "#" },
        { id: 2, text: "TERMS_AND_CONDITION", url: "#" }
    ]

    const WebsiteSocialConnection = [
        { id: 1, socialIcon: "/assets/Google.png", altText: "Google" },
        { id: 2, socialIcon: "/assets/Linkedin.png", altText: "Linkedin" },
        { id: 3, socialIcon: "/assets/Facebook.png", altText: "Facebook" }
    ]
    const FooterHeading = ({ footerHeading }) => {
        return (<Typography variant="h1" component="h2" sx={{
            fontFamily: 'Montserrat',
            fontStyle: "normal",
            fontWeight: "700",
            fontSize: { "xs": "1rem", "sm": "1rem", "md": "1.25rem", "xl": "1.25rem", "lg": "1.25rem" },
            color: "#FFFFFF"
        }}>
            {footerHeading}
        </Typography >)
    }

    const FooterMenuLink = ({ id, linkText, linkUrl }) => {
        return (
            <Link key={id} href={linkUrl} style={{
                fontFamily: 'Montserrat',
                fontStyle: "normal",
                fontWeight: "300",
                fontSize: "1rem",
                color: "#FFFFFF",
                textDecoration: "none"
            }}>{t(linkText)}</Link>
        )
    }


    return (<>
        <Box className="websiteFooter" sx={{
            background: "#000000",
            padding: { "xs": "30px 20px", "sm": "30px 20px", "md": "30px 80px", "xl": "30px 80px", "lg": "30px 80px" }
        }}>
            <Stack direction="row" gap={6} sx={{
                flexWrap: "wrap"
            }}>
                <Stack direction="column" gap={1.5} className="WebsiteInfo" sx={{ width: { "xs": "42%", "sm": "42%", "md": "22%", "xl": "21%", "lg": "22%" } }}>
                    <Box sx={{ width: "140px", height: "30px" }}>
                        <img src={window.location.origin + "/assets/websiteLogo.png"} alt="websiteLogo" />
                    </Box>
                    <Typography variant="h1" component="h2" sx={{
                        fontFamily: 'Montserrat',
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: { "xs": "0.8rem", "sm": "0.8rem", "md": "1.1rem", "xl": "1.1rem", "lg": "1.1rem" },
                        color: "#FFFFFF"
                    }}>
                        {t('BHARAT_KA_JOB_APP')}
                    </Typography >
                    <Typography variant="h1" component="h2" sx={{
                        fontFamily: 'Montserrat',
                        fontStyle: "normal",
                        fontWeight: "300",
                        fontSize: { "xs": "0.7rem", "sm": "0.7rem", "md": "1rem", "xl": "1rem", "lg": "1rem" },
                        lineHeight: "15px",
                        color: "#FFFFFF"
                    }}>
                        {t('JOBSYAHAN_IS_A_JOB_PORTAL_EVERY_EMPLOYER')}
                    </Typography >
                </Stack>
                <Stack direction="column" gap={2} className="CompanyInformation" sx={{ width: { "xs": "42%", "sm": "42%", "md": "22%", "xl": "21%", "lg": "22%" } }}>
                    <FooterHeading footerHeading={t('COMPANY')} />
                    {FooterCompanyLinks.map((item) => {
                        return (
                            <FooterMenuLink key={item.id} linkText={item.text} linkUrl={item.url} />

                        )
                    })}
                </Stack>
                <Stack direction="column" gap={2} className="CompanySupports" sx={{ width: { "xs": "42%", "sm": "42%", "md": "22%", "xl": "21%", "lg": "22%" } }}>
                    <FooterHeading footerHeading={t('SUPPORT')} />
                    <FooterMenuLink linkText="jobsyahan@gmail.com" linkUrl="#" />
                    <Stack direction="row" gap={1}>
                        {
                            WebsiteSocialConnection.map((item) => {
                                return (<Box key={item.id} sx={{
                                    width: { "xs": "23px", "sm": "23px", "md": "35px", "xl": "35px", "lg": "35px" },
                                    height: { "xs": "23px", "sm": "23px", "md": "35px", "xl": "35px", "lg": "35px" }
                                }}>
                                    <img src={window.location.origin + item.socialIcon} alt={item.altText} width="100%" height="100%" />
                                </Box>)
                            })
                        }
                    </Stack>


                </Stack>
                <Stack direction="column" gap={2} className="LegalInformation" sx={{ width: { "xs": "42%", "sm": "42%", "md": "22%", "xl": "21%", "lg": "22%" } }}>
                    <FooterHeading footerHeading={t('LEGAL')} />
                    {FooterLegalLinks.map((item) => {
                        return (
                            <FooterMenuLink key={item.id} linkText={item.text} linkUrl={item.url} />
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
                    fontSize: { "xs": "0.6rem", "sm": "0.6rem", "md": "0.8rem", "xl": "0.8rem", "lg": "0.8rem" },
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
