import { Box, Stack, Container, Button, Typography } from "@mui/material";

/* Site Header */
import JobCardComponent from "./Component/JobCardComponent";
import ViewMoreSection from "./Component/ViewMoreSection";
import WebsiteSocialNetwork from "./Component/WebsiteSocialNetwork";
import Footer from "../../ThemeComponent/Common/Footer";

import Heading from "./Component/Heading";
import { useTranslation } from "react-i18next";

function Home() {
    const { t } = useTranslation();
    return (<>
        <Box className="LandingPage">
            <Stack className="TopSection"
                sx={{
                    width: "100%",
                    minHeight: { "xs": "580px", "sm": "580px", "md": "580px", "lg": "580px", "xl": "580px" },
                    backgroundImage:
                    {
                        "xs": `url("https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/top_section_background_mobile.png")`,
                        "sm": `url("https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/top_section_background_mobile.png")`,
                        "md": `url("https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/top_section_background.png")`,
                        "lg": `url("https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/top_section_background.png")`,
                        "xl": `url("https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/top_section_background.png")`
                    },
                    backgroundRepeat: "no-repeat",
                    boxSizing: "border-box",
                    backgroundSize: "cover",

                }}>
                <WebsiteSocialNetwork />
                <Box className="Header" sx={{
                    height: "81px",
                    width: "100%",
                    padding: "15px",
                    boxSizing: "border-box",
                    background: "#FFFFFF"
                }}>
                    <Box className="WebsiteLogo" sx={{
                        width: "150px",
                        height: "50px",
                        marginLeft: "100px"
                    }}>
                        <img src={window.location.origin + "/assets/DesktopLogo.png"} alt="JY" width="100%" height="100%" />
                    </Box>
                </Box>

                <Container sx={{ maxWidth: "1500px !important" }}>
                    <Stack sx={{ marginTop: { "xs": "0px", "sm": "0px", "md": "50px", "lg": "50px", "xl": "50px" } }}>
                        <Typography variant="h1" component="h2" sx={{
                            fontSize: { "xs": "33px", "sm": "33px", "md": "45px", "lg": "45px", "xl": "45px" },
                            fontWeight: "600",
                            color: "#000000",
                            maxWidth: "450px",
                            fontFamily: 'Montserrat',
                            fontweight: "400",
                            textAlign: { "xs": "center", "sm": "center", "md": "start", "lg": "start", "xl": "start" }
                        }}>
                            {t('WEBSITE_HEADING')}
                        </Typography >

                        <Typography variant="h1" component="h2" sx={{
                            fontSize: { "xs": "12px", "sm": "12px", "md": "20px", "xl": "20px", "lg": "20px" },
                            fontWeight: "300",
                            color: "#000000",
                            fontFamily: 'Montserrat',
                            fontweight: "400",
                            marginTop: "30px",
                            maxWidth: "400px",
                            lineHeight: "1.5",
                            display: { "xs": "none", "sm": "none", "md": "block", "lg": "block", "xl": "block" }
                        }}>
                            {t('WEBSITE_SUB_HEADING')}
                        </Typography >

                        <Box className="WebsiteButton" sx={{ display: { "xs": "none", "sm": "none", "md": "block", "lg": "block", "xl": "block" } }}>
                            <Stack direction="row" gap={2} sx={{ marginTop: "50px" }} >
                                <Button variant="text" sx={{
                                    fontSize: { "xs": "14px", "sm": "14px", "md": "20px", "lg": "20px", "xl": "20px" },
                                    textTransform: "capitalize",
                                    border: "1px solid #FF671F",
                                    borderRadius: "8px",
                                    padding: "10px",
                                    width: "202px",
                                    height: {
                                        "xs": "40px", "sm": "40px", "md": "67px", "lg": "67px", "xl": "67px"
                                    },
                                    color: "#FF671F",
                                    "&:hover": {
                                        color: "#FF671F",
                                        border: "1px solid #FF671F"
                                    }
                                }}>Job Khoze </Button>
                                <Button variant="contained"
                                    sx={{
                                        fontSize: { "xs": "14px", "sm": "14px", "md": "20px", "lg": "20px", "xl": "20px" },
                                        textTransform: "capitalize",
                                        background: "#FF671F",
                                        borderRadius: "8px",
                                        padding: "10px",
                                        width: "202px",
                                        height: {
                                            "xs": "40px", "sm": "40px", "md": "67px", "lg": "67px", "xl": "67px"
                                        },
                                        "&:hover": {
                                            background: "#FF671F",
                                            borderRadius: "8px",
                                        }
                                    }}>Job दे</Button>
                            </Stack>
                        </Box>

                    </Stack>
                </Container>

            </Stack >
            <Container sx={{
                maxWidth: "1500px !important",
                display: { "xs": "block", "sm": "block", "md": "none", "lg": "none", "xl": "none" }
            }}>
                <Stack direction="row" gap={2}  >
                    <Button variant="text" sx={{
                        fontSize: { "xs": "14px", "sm": "14px", "md": "20px", "lg": "20px", "xl": "20px" },
                        textTransform: "capitalize",
                        border: "1px solid #FF671F",
                        borderRadius: "8px",
                        padding: "10px",
                        width: "202px",
                        height: {
                            "xs": "40px", "sm": "40px", "md": "67px", "lg": "67px", "xl": "67px"
                        },
                        color: "#FF671F",
                        "&:hover": {
                            color: "#FF671F",
                            border: "1px solid #FF671F"
                        }
                    }}>Job Khoze </Button>
                    <Button variant="contained"
                        sx={{
                            fontSize: { "xs": "14px", "sm": "14px", "md": "20px", "lg": "20px", "xl": "20px" },
                            textTransform: "capitalize",
                            background: "#FF671F",
                            borderRadius: "8px",
                            padding: "10px",
                            width: "202px",
                            height: {
                                "xs": "40px", "sm": "40px", "md": "67px", "lg": "67px", "xl": "67px"
                            },
                            "&:hover": {
                                background: "#FF671F",
                                borderRadius: "8px",
                            }
                        }}>Job दे</Button>
                </Stack>
            </Container>


            <Stack className="JobCategorySection"
                sx={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "50px 0px"
                }}>
                <Container sx={{ maxWidth: "1500px !important" }}>
                    <Stack direction="column" gap={3} alignItems="center" justifyContent="center">
                        <Heading headingText={t('CLICK_ON_THE_WORK_YOU_WOULD_LIKE_TO_DO')} />
                        <Stack className="JobCategories" direction="row" sx={{
                            gap: "20px",
                            flexWrap: "wrap",
                            justifyContent: "center"
                        }}>
                            <JobCardComponent cardSection="CategorySection" />
                            <JobCardComponent cardSection="CategorySection" />
                            <JobCardComponent cardSection="CategorySection" />
                            <JobCardComponent cardSection="CategorySection" />
                            <JobCardComponent cardSection="CategorySection" />
                            <JobCardComponent cardSection="CategorySection" />
                            <JobCardComponent cardSection="CategorySection" />
                            <ViewMoreSection SectionText="View More Jobs" />
                        </Stack>
                    </Stack>
                </Container>
            </Stack >

            <Box className="TopJobLocationSection"
                sx={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "50px 0px",
                    flexWrap: "wrap",
                    background: `url("https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/job_location.png")`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"
                }}>
                <Container sx={{ maxWidth: "1500px !important" }}>
                    <Stack direction="column" gap={3} alignItems="center" justifyContent="center">
                        <Heading headingText={t('CLICK_ON_THE_LOCATION_WHERE_YOU_WOULD_LIKE_TO_WORK')} />
                        <Stack className="JobCategories" direction="row" sx={{
                            gap: "20px",
                            flexWrap: "wrap",
                            justifyContent: "center"
                        }}>
                            <JobCardComponent cardSection="LocationSection" />
                            <JobCardComponent cardSection="LocationSection" />
                            <JobCardComponent cardSection="LocationSection" />
                            <JobCardComponent cardSection="LocationSection" />
                            <JobCardComponent cardSection="LocationSection" />
                            <JobCardComponent cardSection="LocationSection" />
                            <JobCardComponent cardSection="LocationSection" />
                            <ViewMoreSection SectionText="View More Cities" />
                        </Stack>
                    </Stack>
                </Container>
            </Box >

            <Stack className="JobsYahanAdvantageSection" direction="column" gap={2} alignItems="center"
                sx={{
                    position: "relative",
                    background: `url("https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/job_advantage.png")`,
                    backgroundSize: "cover",
                    backgroundRepeat: "none",
                    height: { "xs": "350px", "sm": "350px", "md": "430px", "xl": "430px", "lg": "430px" }
                }}>
                <Stack
                    alignItems="center"
                    gap={{ "xs": 2, "sm": 2, "md": 4, "lg": 4, "xl": 4 }}
                    sx={{
                        minHeight: "350px",
                        width: "100%",
                        padding: "50px 0px"
                    }}>
                    <Heading headingText={t('JOB_YAHAN_ADVANTAGES')} />

                    <Stack className="AdvantageSection" sx={{
                        position: "relative",
                        alignItems: "center",
                        justifyContent: "center",
                        maxWidth: "700px",
                        height: { "xs": "200px", "sm": "200px", "md": "250px", "lg": "250px", "xl": "250px" },
                    }}>
                        <Box sx={{
                            width: { "xs": "100px", "sm": "100px", "md": "200px", "lg": "200px", "xl": "200px" },
                            position: "absolute",
                            top: "10px",
                        }}>
                            <Typography variant="h1" component="h2" sx={{
                                fontFamily: 'Manrope',
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: { "xs": "0.75rem", "sm": "0.75rem", "md": "1.2rem", "xl": "1.2rem", "lg": "1.2rem" },
                                margin: "10px 0px"

                            }}>
                                {t('GET_A_JOB_NEAR_YOU')}
                            </Typography >

                        </Box>

                        <Box sx={{
                            width: { "xs": "100px", "sm": "100px", "md": "200px", "lg": "200px", "xl": "200px" },
                            position: "absolute",
                            bottom: "0",
                            right: "0"
                        }}>
                            <Typography variant="h1" component="h2" sx={{
                                fontFamily: 'Manrope',
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: { "xs": "0.75rem", "sm": "0.75rem", "md": "1.2rem", "xl": "1.2rem", "lg": "1.2rem" },
                                margin: "10px 0px"
                            }}>
                                {t('FINDING_JOB_MADE_EASY_AND_SIMPLE_FOR_ANYONE')}
                            </Typography >

                        </Box>

                        <Box sx={{
                            width: { "xs": "100px", "sm": "100px", "md": "200px", "lg": "200px", "xl": "200px" },
                            position: "absolute",
                            bottom: "0",
                            left: "0"
                        }}>
                            <Typography variant="h1" component="h2" sx={{
                                fontFamily: 'Manrope',
                                fontStyle: "normal",
                                fontWeight: "700",
                                fontSize: { "xs": "0.75rem", "sm": "0.75rem", "md": "1.2rem", "xl": "1.2rem", "lg": "1.2rem" },
                                margin: "10px 0px"
                            }}>
                                {t('VERIFIED_AND_GENUINE_JOBS_FOR_EVERY_INDIAN')}
                            </Typography >

                        </Box>

                        <Box sx={{
                            width: { "xs": "300px", "sm": "300px", "md": "500px", "lg": "500px", "xl": "500px" }
                        }}>
                            <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/job_advantage_picture.png"
                                alt="JobYahanAdvantageDesktop" width="100%" height="100%" />
                        </Box>
                    </Stack>

                </Stack>

            </Stack >

            <Footer />
        </Box >


    </>)
}
export default Home;