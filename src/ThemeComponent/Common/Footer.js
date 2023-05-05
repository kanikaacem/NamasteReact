import { Box, Typography, Stack } from "@mui/material";
import SocialMedia from "./SocialMedia";
import { FooterData, FooterData2, FooterData3 } from "../../utils/Data";
import { FooterBox } from "../../utils/Theme";

import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
const Footer = () => {
    const { t, i18n } = useTranslation();
    return (<>
        <Box sx={{
            background: "#2B1E44",
            padding: { "xs": "20px", "sm": "20px", "md": "20px", "lg": "50px 150px", "xl": "50px 150px" }
        }}>
            <Stack direction="row" sx={{
                flexWrap: "wrap",
            }}>
                <Box sx={{ width: { "xs": "44%", "sm": "50%", "md": "50%", "lg": "25%", "lg": "25%" } }}>
                    <Typography component="span"
                        sx={{
                            fontSize: { "xs": "10px", "sm": "20px", "md": "20px", "lg": "20px", "xl": "20px" },
                            color: "#FC9A7E",
                            margin: "10px 0px",
                            fontWeight: "600"
                        }}>
                        Job
                        <Typography component="span"
                            sx={{
                                fontSize: { "xs": "10px", "sm": "20px", "md": "20px", "lg": "20px", "xl": "20px" },
                                color: "#FC9A7E",
                                margin: "10px 0px",
                            }}>
                            Yahan
                        </Typography>
                    </Typography>

                    <Typography component="span"
                        sx={{
                            display: "block",
                            fontSize: { "xs": "10px", "sm": "20px", "md": "20px", "lg": "20px", "xl": "20px" },
                            color: "#FFFFFF",
                            margin: "10px 0px",
                            width: "150px"
                        }}>
                        {t('CHAT_DIRECTLY_AND_HIRE_DIRECTLY')}
                    </Typography>
                    <Typography component="span"
                        sx={{
                            display: "block",
                            fontSize: { "xs": "10px", "sm": "20px", "md": "20px", "lg": "20px", "xl": "20px" },
                            color: "#FFFFFF",
                            width: "150px",
                            fontWeight: '100',
                            fontFamily: "Montserrat"
                        }}>
                        {t('FOOTERD2')}
                    </Typography>


                </Box>
                <Box sx={{ width: { "xs": "44%", "sm": "50%", "md": "50%", "lg": "25%", "lg": "25%" } }}>
                    <Typography component="span"
                        sx={{
                            display: "block",
                            fontSize: { "xs": "10px", "sm": "20px", "md": "20px", "lg": "20px", "xl": "20px" },
                            color: "#FFFFFF",
                            fontWeight: "700",
                            margin: "10px 0px",
                        }}>
                        {t('COMPANY')}
                    </Typography>
                    {
                        FooterData && FooterData.map((item, index) => {
                            return (
                                <Link to={item.url}
                                    key={index}
                                    style={{
                                        textDecoration: "none"
                                    }} >
                                    <FooterBox sx={{
                                        fontSize: { "xs": "10px", "sm": "20px", "md": "20px", "lg": "20px", "xl": "20px" },
                                    }}> {t(item.name)}</FooterBox>
                                </Link>

                            )
                        })
                    }
                </Box>

                <Box sx={{ width: { "xs": "44%", "sm": "50%", "md": "50%", "lg": "25%", "lg": "25%" } }}>
                    <Typography component="span"
                        sx={{
                            display: "block",
                            fontSize: { "xs": "10px", "sm": "20px", "md": "20px", "lg": "20px", "xl": "20px" },
                            color: "#FFFFFF",
                            fontWeight: "600",
                            margin: "10px 0px",
                        }}>
                        {t('SUPPORT')}
                    </Typography>
                    <FooterBox
                        sx={{
                            fontSize: { "xs": "10px", "sm": "20px", "md": "20px", "lg": "20px", "xl": "20px" },
                        }}> jobyahan@gmail.com</FooterBox>
                    <SocialMedia />

                </Box>
                <Box sx={{ width: { "xs": "44%", "sm": "50%", "md": "50%", "lg": "25%", "lg": "25%" } }}>
                    <Typography component="span"
                        sx={{
                            display: "block",
                            fontSize: { "xs": "10px", "sm": "20px", "md": "20px", "lg": "20px", "xl": "20px" },
                            color: "#FFFFFF",
                            fontWeight: "600",
                            margin: "10px 0px",
                        }}>
                        {t('LEGAL')}
                    </Typography>
                    {
                        FooterData2 && FooterData2.map((item, index) => {
                            return (
                                <Link to={item.url}
                                    key={index}
                                    style={{
                                        textDecoration: "none"
                                    }}>
                                    <FooterBox
                                        sx={{
                                            fontSize: { "xs": "10px", "sm": "20px", "md": "20px", "lg": "20px", "xl": "20px" },
                                        }} > {t(item.name)}</FooterBox>
                                </Link>
                            )
                        })
                    }

                </Box>

            </Stack>
            <hr style={{
                margin: "10px 0px"
            }}></hr>

            <Stack direction="row" gap={1} sx={{
                flexWrap: "wrap"
            }}>
                {
                    FooterData3 && FooterData3.map((item, index) => {
                        return (
                            <Link to={item.url}
                                key={index}
                                style={{
                                    textDecoration: "none",
                                }}>
                                <FooterBox
                                    sx={{
                                        fontSize: { "xs": "10px", "sm": "20px", "md": "20px", "lg": "20px", "xl": "20px" },
                                    }} > {t(item.name)}</FooterBox>
                            </Link>
                        )
                    })
                }
            </Stack>

            <Typography component="span"
                sx={{
                    display: "block",
                    fontSize: { "xs": "10px", "sm": "16px", "md": "16px", "lg": "16px", "xl": "16px" },
                    color: "#FFFFFF",
                    margin: "10px 0px",
                    fontWeight: "100",
                    fontFamily: "Montserrat"
                }}>
                {t('COPYRIGHT@2023JOBYAHAN.COM')}
            </Typography>
        </Box >
    </>)
}

export default Footer;
