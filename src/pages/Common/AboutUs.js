import { Box, Stack, Typography } from "@mui/material";

import HeaderSec from "../../ThemeComponent/Common/HeaderSec";
import Footer from "../../ThemeComponent/Common/Footer";

import { useTranslation } from "react-i18next";
const AboutUs = () => {
    const { t, i18n } = useTranslation();
    return (<>
        <Stack
            className="AboutUsPage"
            direction="column"
            gap={2}
            sx={{
                background: "#FAF7FE",

            }}>
            <Box className="Header" sx={{
                padding: "20px",
                background: "#FAFAFA",
                position: "sticky",
                top: 0,
                zIndex: "3387"
            }} >
                <HeaderSec
                    color="black"
                    border="2px solid #8E8E8E"
                    buttonText="Employer login" />
            </Box>
            <Box className="AboutUsContent"
                sx={{ padding: "20px" }}>
                <Box
                    sx={{
                        position: "absolute",
                        height: "320.38px",
                        left: "0px",
                        transform: " matrix(-1, 0, 0, 1, 0, 0)",
                        zIndex: "1"
                    }}>
                    <img src={window.location.origin + "/assets/About1.png"} alt="About1" />
                </Box>
                <Box sx={{
                    position: "absolute",
                    height: "380px",
                    top: "805px",
                    right: "0px",
                    zIndex: "1"
                }}>
                    <img src={window.location.origin + "/assets/About2.png"} alt="About2" />
                </Box>
                <Box
                    sx={{
                        position: "absolute",
                        height: "320.38px",
                        left: "0px",
                        top: " 1388px",
                        zIndex: "1"
                    }}>
                    <img src={window.location.origin + "/assets/About3.png"} alt="About3" />
                </Box>


                <Box sx={{
                    background: "#FFFFFF",
                    maxWidth: "1091px",
                    margin: "0 auto",
                    border: "1px solid #E1D4F2",
                    borderRadius: "19px",
                    padding: { "lg": "60px 120px", "md": "60px 120px", "xs": "20px" },
                    position: "relative",
                    zIndex: "2"
                }}>
                    <Typography component="box" sx={{
                        fontSize: { "lg": "96px", "md": "96px", "xs": "26px" },
                        fontFamily: "Work Sans, sans-serif",
                        fontWeight: "700",
                        color: "#2B1E44",
                        display: "block",
                        lineHeight: "1.2"
                    }}>
                        {t('ABOUT_US')} !
                    </Typography>
                    <Stack direction="row" gap={2}
                        sx={{ margin: "10px 0px" }}
                        alignItems="center">
                        <img src={window.location.origin + "/assets/About4.png"} alt="About4" height="20px" />
                        <Typography component="box"
                            sx={{
                                fontSize: { "lg": "24px", "md": "24px", "xs": "14px" },
                                fontFamily: "Work Sans, sans-serif",
                                fontWeight: "600",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.2"
                            }}>
                            {t('JOBSYAHAN_A_PLATFORM_FOR_JOBS_AND_SELFEMPLOYEMENT')}
                        </Typography>
                    </Stack>

                    <Stack direction="column" gap={3}>
                        <Typography component="box"
                            sx={{
                                fontSize: { "lg": "24px", "md": "24px", "xs": "12px" },
                                fontWeight: "400",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.7"
                            }}>
                            {t('DESCRIPTION1')}
                        </Typography>

                        <Typography component="box"
                            sx={{
                                fontSize: { "lg": "24px", "md": "24px", "xs": "12px" },
                                fontWeight: "400",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.7"
                            }}>
                            {t('DESCRIPTION2')}
                        </Typography>

                        <Typography component="box"
                            sx={{
                                fontSize: { "lg": "24px", "md": "24px", "xs": "14px" },
                                fontWeight: "600",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.7"
                            }}>
                            {t('OUR_VISION')}
                        </Typography>
                        <Typography component="box"
                            sx={{
                                fontSize: { "lg": "24px", "md": "24px", "xs": "12px" },
                                fontWeight: "400",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.7"
                            }}>
                            {t('DESCRIPTION3')}
                        </Typography>

                        <Typography component="box"
                            sx={{
                                fontSize: { "lg": "24px", "md": "24px", "xs": "14px" },
                                fontWeight: "600",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.7"
                            }}>
                            {t('WE_ALSO_GO_LOCAL_WITH_JOBS')}
                        </Typography>
                        <Typography component="box"
                            sx={{
                                fontSize: { "lg": "24px", "md": "24px", "xs": "12px" },
                                fontWeight: "400",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.7"
                            }}>
                            {t('DESCRIPTION4')}
                            <Typography component="box"
                                sx={{
                                    fontSize: { "lg": "24px", "md": "24px", "xs": "12px" },
                                    fontWeight: "600",
                                    color: "#2B1E44",
                                    display: "block",
                                    lineHeight: "1.7"
                                }}>
                                {t('OUR_MOTTO')}
                            </Typography>

                        </Typography>

                    </Stack>

                    <Typography component="box" sx={{
                        fontSize: { "lg": "32px", "md": "32px", "xs": "26px" },
                        fontFamily: "Work Sans, sans-serif",
                        fontWeight: "700",
                        color: "#2B1E44",
                        display: "block",
                        lineHeight: "1.2",
                        marginTop: { "xs": "10px", "sm": "10px", "md": "100px", "lg": "100px", "xl": "100px" }
                    }}>
                        {t('OUR_VISION')}
                    </Typography>

                    <Stack direction="row" gap={2}
                        sx={{ margin: "10px 0px" }}
                        alignItems="center">
                        <img src={window.location.origin + "/assets/About5.png"} alt="About5" height="20px" />
                        <Typography component="box"
                            sx={{
                                fontSize: { "lg": "24px", "md": "24px", "xs": "14px" },
                                fontFamily: "Work Sans, sans-serif",
                                fontWeight: "600",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.7"
                            }}>
                            {t('MAKE_EMPLOYEMENT_SIMPLE_AND_ACCESSIBLE_TO_ALL')}
                        </Typography>
                    </Stack>

                    <Stack direction="column" gap={3}>
                        <Typography component="box"
                            sx={{
                                fontSize: { "lg": "24px", "md": "24px", "xs": "12px" },
                                fontWeight: "400",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.7"
                            }}>
                            {t('DESCRIPTION5')}
                        </Typography>

                        <Typography component="box"
                            sx={{
                                fontSize: { "lg": "24px", "md": "24px", "xs": "12px" },
                                fontWeight: "400",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.7"
                            }}>
                            {t('DESCRIPTION6')}
                        </Typography>

                        <Typography component="box"
                            sx={{
                                fontSize: { "lg": "24px", "md": "24px", "xs": "12px" },
                                fontWeight: "400",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.7"
                            }}>
                            {t('DESCRIPTION7')}
                        </Typography>
                    </Stack>

                    <Box sx={{
                        background: "#F7F0FF",
                        border: "1px solid #E9DFF7",
                        borderRadius: "7px",
                        padding: "20px",
                        margin: "50px 0px"
                    }}>

                        <Stack direction="row" gap={2}
                            sx={{ margin: "10px 0px" }}
                            alignItems="center">
                            <img src={window.location.origin + "/assets/About6.png"} alt="About6" height="20px" />
                            <Typography component="box"
                                sx={{
                                    fontSize: { "lg": "24px", "md": "24px", "xs": "14px" },
                                    fontFamily: "Work Sans, sans-serif",
                                    fontWeight: "600",
                                    color: "#2B1E44",
                                    display: "block",
                                    lineHeight: "1.7"
                                }}>
                                {t('WE_ALSO_GO_LOCAL_WITH_JOBS')}
                            </Typography>
                        </Stack>
                        <Typography component="box"
                            sx={{
                                fontSize: { "lg": "24px", "md": "24px", "xs": "12px" },
                                fontWeight: "400",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.7"
                            }}>
                            {t('DESCRIPTION8')}
                        </Typography>
                    </Box>
                </Box>

            </Box>
            <Footer />
        </Stack></>)
}

export default AboutUs;
