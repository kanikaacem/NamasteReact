import { Box, Typography, Stack } from "@mui/material";

import { social_icons } from "../../utils/Data";
import { Link, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
const Footer = () => {
    const currentLanguage = useSelector(state => state.currentLanguage);

    const FooterCompanyLinks = [
        { id: 1, text: "Home", url: "#" },
        { id: 2, text: "About Us", url: `${currentLanguage}/about-us` },
        // { id: 3, text: "Blogs", url: "#" },
        { id: 4, text: "Contact Us", url: `${currentLanguage}/contact-us` }
    ]

    const FooterLegalLinks = [
        { id: 1, text: "Privacy Policy", url: `${currentLanguage}/privacy` },
        { id: 2, text: "Terms and Condition", url: `${currentLanguage}/terms` }
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
        const navigate = useNavigate();
        return (
            <Link key={id} to="#"
                onClick={(e) => {
                    e.preventDefault();
                    navigate(`/${linkUrl}`);
                    // window.location.href = window.location.origin + '/' + linkUrl;
                }}
                style={{
                    fontFamily: 'Montserrat',
                    fontStyle: "normal",
                    fontWeight: "300",
                    fontSize: "1rem",
                    color: "#FFFFFF",
                    textDecoration: "none"
                }}>{linkText}</Link>
        )
    }


    return (<>
        <Stack direction="column" className="websiteFooter" gap={2} sx={{
            background: "#242422",
            padding: { "xs": "30px 20px", "sm": "30px 20px", "md": "30px 80px", "xl": "30px 80px", "lg": "30px 80px" }
        }}>
            <Stack direction="row" gap={6} sx={{
                flexWrap: "wrap",
                justifyContent:"space-between"
            }}>
                <Stack direction="column" gap={2} className="CompanyInformation" sx={{ width: { "xs": "42%", "sm": "42%", "md": "15%", "xl": "15%", "lg": "15%" } }}>
                    <FooterHeading footerHeading="Company" />
                    {FooterCompanyLinks.map((item) => {
                        return (
                            <FooterMenuLink key={item.id} linkText={item.text} linkUrl={item.url} />

                        )
                    })}
                </Stack>

                <Stack direction="column" gap={2} className="LegalInformation" sx={{ width: { "xs": "42%", "sm": "42%", "md": "15%", "xl": "15%", "lg": "15%" } }}>
                    <FooterHeading footerHeading="Legal"/>
                    {FooterLegalLinks.map((item) => {
                        return (
                            <FooterMenuLink key={item.id} linkText={item.text} linkUrl={item.url} />
                        )
                    })}
                </Stack>

                <Stack direction="column" gap={2} className="RecruiterLogin" sx={{ width: { "xs": "42%", "sm": "42%", "md": "15%", "xl": "15%", "lg": "15%" } }}>
                    <FooterHeading footerHeading="Login" />
                    <FooterMenuLink linkText="Employer Login" linkUrl={`${currentLanguage}/employer-login`} />
                </Stack>

                {/* <Stack direction="column" gap={1.5} className="WebsiteInfo" sx={{ width: { "xs": "42%", "sm": "42%", "md": "15%", "xl": "15%", "lg": "15%" } }}>
                    <Box sx={{ width: "140px", height: "30px" }}>
                        <img src={window.location.origin + "/assets/websiteLogo.png"} alt="websiteLogo" />
                    </Box>
                </Stack> */}

                <Stack direction="column" gap={2} className="CompanySupports"
                    sx={{ width: { "xs": "100%", "sm": "100%", "md": "22%", "xl": "21%", "lg": "22%" } }}>
                    <FooterHeading footerHeading="Find Us" />
                    <Stack direction="row" gap={2} alignItems="center" sx={{
                        flexWrap: "wrap"
                    }}>
                        {social_icons.map((item) => {
                            return (
                            <Link key={item.id} to="#" style={{ textDecoration: 'none' }}>
                                <Box  sx={{
                                    width: { "xs": "15px", "sm": "15px", "md": "30px", "lg": "30px", "xl": "30px" },
                                        height: { "xs": "15px", "sm": "15px", "md": "30px", "lg": "30px", "xl": "30px" }
                                    }}>
                                        <img src={item.icon_image} alt={item.icon_text} width="100%" height="100%" />
                                    </Box>
                            </Link>)
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
