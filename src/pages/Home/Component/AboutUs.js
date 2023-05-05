import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

const AboutUs = () => {
    const { t, i18n } = useTranslation();

    return (<>
        <Box
            sx={{
                padding: { "xs": "100px 10px 30px", "sm": "60px", "md": "60px", "lg": "60px", "xl": "60px" },
                minHeight: "400px",
                background: "#FFFFFF",
                color: "#2B1E44"

            }}>

            <Stack
                gap={5}
                direction={{ "lg": "row", "md": "row", "xs": "column" }}

            >
                <Stack className="aboutUsDescription" direction="row" justifyContent="center"
                    sx={{
                        width: { "lg": "50%", "md": "50%", "xs": "100%" },
                        gap: { "xs": "8px", "sm": "40px", "md": "40px", "lg": "40px", "xl": "40px" }
                    }}>
                    <Box sx={{
                        width: { "xs": "200px", "sm": "300px", "md": "300px", "lg": "300px", "xl": "300px" },
                        background: "#4E3A67",
                        boxShadow: " 0px 24px 32px #F1E6FF",
                        borderRadius: "15px",
                    }}>
                        <Stack direction="column" gap={1} sx={{
                            padding: { "xs": "15px", "sm": "30px", "md": "30px", "lg": "30px", "xl": "30px" }
                        }}>
                            <Box sx={{
                                width: {
                                    "xs": "30px", "sm": "50px", "md": "50px", "lg": "50px", "xl": "50px"
                                }
                            }}>
                                <img src={window.location.origin + "/assets/Star.png"} alt="Star" width="100%" />
                            </Box>
                            <Typography component="div"
                                sx={{
                                    color: "#FC9A7E",
                                    fontSize: { "xs": "12px", "sm": "20px", "md": "20px", "lg": "20px", "xl": "20px" },
                                    fontWeight: "600",
                                    height: { "xs": "50px", "sm": "90px", "md": "90px", "lg": "90px", "xl": "90px" }

                                }}>
                                {t('50K_PEOPLE_HAVE_GOT_JOBS_THROUGH_US;_NEXT_IS_YOU')}
                            </Typography>
                            <Typography component="div"
                                sx={{
                                    color: "#FFFFFF",
                                    fontSize: { "xs": "12px", "sm": "16px", "md": "16px", "lg": "16px", "xl": "16px" },
                                }}>
                                {t('ABOUT_DESCRIPTION1')}
                            </Typography>

                        </Stack>
                    </Box>
                    <Box sx={{
                        width: { "xs": "200px", "sm": "300px", "md": "300px", "lg": "300px", "xl": "300px" },
                        background: "#4E3A67",
                        boxShadow: " 0px 24px 32px #F1E6FF",
                        borderRadius: "15px",
                    }}>
                        <Stack direction="column" gap={1} sx={{
                            padding: { "xs": "15px", "sm": "30px", "md": "30px", "lg": "30px", "xl": "30px" }

                        }}>
                            <Box sx={{
                                width: {
                                    "xs": "30px", "sm": "50px", "md": "50px", "lg": "50px", "xl": "50px"
                                }
                            }}>
                                <img src={window.location.origin + "/assets/Park.png"} alt="Park" width="100%" />
                            </Box>
                            <Typography component="div"
                                sx={{
                                    color: "#FC9A7E",
                                    fontSize: { "xs": "12px", "sm": "20px", "md": "20px", "lg": "20px", "xl": "20px" },
                                    fontWeight: "600",
                                    height: { "xs": "50px", "sm": "90px", "md": "90px", "lg": "90px", "xl": "90px" }
                                }}>
                                {t('SELECT_FROM_THE_JOBS_IN_YOUR_CITY')}
                            </Typography>
                            <Typography component="div"
                                sx={{
                                    color: "#FFFFFF",
                                    fontSize: { "xs": "12px", "sm": "16px", "md": "16px", "lg": "16px", "xl": "16px" },

                                }}>
                                {t('ABOUT_DESCRIPTION2')}
                            </Typography>

                        </Stack>
                    </Box>
                </Stack>
                <Box className="description" sx={{
                    color: "#2B1E44",
                    width: { "lg": "50%", "md": "50%", "xs": "100%" },
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    alignItems: "center"
                }}>
                    <Box sx={{ width: "749px" }}>
                        <Typography component="span"
                            sx={{
                                display: "block",
                                fontSize: { "lg": "50px", "md": "50px", "xs": "24px" },
                                color: "#2B1E44",
                                fontWeight: "600",
                                margin: "0px",
                            }}>
                            {t("ABOUT_US_HEADING")}
                        </Typography>
                        <Typography component="h2"
                            sx={{
                                margin: '0px',
                                fontSize: { "lg": "24px", "md": "24px", "xs": "12px" },
                                margin: "10px 0px",
                                fontWeight: "600",
                                color: "#3A2D49"
                            }}>
                            {t("ABOUT_US_SUBHEADING")}
                        </Typography>

                        <Typography component="span"
                            sx={{
                                color: "#3A2D49",
                                lineHeight: "1.5",
                                fontSize: { "lg": "24px", "md": "24px", "xs": "12px" }
                            }}>
                            {t("ABOUT_US_DESCRIPTION")}
                            <Link to="/about-us" style={{
                                textDecoration: "none"
                            }}>
                                <Typography component="span"
                                    sx={{
                                        color: "#FC9A7E",
                                        fontSize: { "lg": "24px", "md": "24px", "xs": "12px" },
                                        cursor: "pointer"
                                    }}>
                                    {t("MORE")}
                                </Typography>
                            </Link>

                        </Typography>
                    </Box>
                </Box>

            </Stack >

        </Box >
    </>)
}

export default AboutUs;
//