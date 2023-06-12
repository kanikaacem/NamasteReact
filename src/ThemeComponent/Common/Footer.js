import { Box, Typography, Stack } from "@mui/material";

import { social_icons } from "../../utils/Data";
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

    const FooterHeading = ({ footerHeading }) => {
        return (<Typography variant="h1" component="h2" sx={{
            fontFamily: 'Montserrat',
            fontStyle: "normal",
            fontWeight: "500",
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
        <Stack direction="column" className="websiteFooter" gap={2} sx={{
            background: "#242422",
            padding: { "xs": "30px 20px", "sm": "30px 20px", "md": "30px 80px", "xl": "30px 80px", "lg": "30px 80px" }
        }}>
            <Stack direction="row" gap={6} sx={{
                flexWrap: "wrap"
            }}>
                <Stack direction="column" gap={2} className="CompanyInformation" sx={{ width: { "xs": "42%", "sm": "42%", "md": "15%", "xl": "15%", "lg": "15%" } }}>
                    <FooterHeading footerHeading={t('COMPANY')} />
                    {FooterCompanyLinks.map((item) => {
                        return (
                            <FooterMenuLink key={item.id} linkText={item.text} linkUrl={item.url} />

                        )
                    })}
                </Stack>

                <Stack direction="column" gap={2} className="RecruiterLogin" sx={{ width: { "xs": "42%", "sm": "42%", "md": "15%", "xl": "15%", "lg": "15%" } }}>
                    <FooterHeading footerHeading="Login" />
                    <FooterMenuLink linkText="Employee Login" linkUrl="#" />
                    <FooterMenuLink linkText="Recruiter Login" linkUrl="#" />
                </Stack>

                <Stack direction="column" gap={2} className="LegalInformation" sx={{ width: { "xs": "42%", "sm": "42%", "md": "15%", "xl": "15%", "lg": "15%" } }}>
                    <FooterHeading footerHeading={t('LEGAL')} />
                    {FooterLegalLinks.map((item) => {
                        return (
                            <FooterMenuLink key={item.id} linkText={item.text} linkUrl={item.url} />
                        )
                    })}
                </Stack>

                <Stack direction="column" gap={1.5} className="WebsiteInfo" sx={{ width: { "xs": "42%", "sm": "42%", "md": "15%", "xl": "15%", "lg": "15%" } }}>
                    <Box sx={{ width: "140px", height: "30px" }}>
                        <img src={window.location.origin + "/assets/websiteLogo.png"} alt="websiteLogo" />
                    </Box>
                </Stack>

                <Stack direction="column" gap={2} className="CompanySupports"
                    sx={{ width: { "xs": "100%", "sm": "100%", "md": "22%", "xl": "21%", "lg": "22%" } }}>
                    <FooterHeading footerHeading={t('FIND_US')} />
                    <Stack direction="row" gap={2} alignItems="center" sx={{
                        flexWrap: "wrap"
                    }}>
                        {social_icons.map((item) => {
                            return (<Box key={item.id} sx={{
                                width: { "xs": "15px", "sm": "15px", "md": "20px", "lg": "20px", "xl": "20px" },
                                height: { "xs": "15px", "sm": "15px", "md": "20px", "lg": "20px", "xl": "20px" }
                            }}>
                                <img src={item.icon_image} alt={item.icon_text} width="100%" height="100%" />
                            </Box>)
                        })}
                    </Stack>
                </Stack>

            </Stack >
            <Stack gap={1}>
                <div style={{ border: "0.5px solid rgba(157, 141, 176, 0.29" }} />
                <Typography variant="h1" component="h2" sx={{
                    fontFamily: 'Montserrat',
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: { "xs": "0.6rem", "sm": "0.6rem", "md": "0.8rem", "xl": "0.8rem", "lg": "0.8rem" },
                    lineHeight: "12px",
                    color: "#B4A9C2",
                    textAlign: "center",
                }}>
                    © 2023 JobsYahan technology private limited
                </Typography >
            </Stack>
        </Stack >
    </>)
}

export default Footer;
