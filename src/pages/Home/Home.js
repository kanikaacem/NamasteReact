import { Box, Button, Stack, Typography, Container } from "@mui/material";

/* Site Header */
import JobCategoryItem from "./Component/JobCategoryItem";
import JobLocationItem from "./Component/JobLocationItem";
import JobLocationItemDesktop from "./Component/JobLocationItemDesktop";
import ViewAllButton from "./Component/ViewAllButton";

import Footer from "../../ThemeComponent/Common/Footer";

import { JobCategories } from "../../utils/Data";
import Heading from "./Component/Heading";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from "react-i18next";

function Home() {

    const { t } = useTranslation();

    return (<>
        <Box className="LandingPageMobile"
            sx={{
                display: { "xs": "block", "sm": "block", "md": "none", "lg": "none", "xl": "none" }
            }}>
            <Box className="TopSection" sx={{
                width: "100%",
                backgroundImage: `url("./assets/LandingPage.png")`,
                backgroundRepeat: "no-repeat",
                padding: "20px",
                boxSizing: "border-box",
                backgroundSize: "100% 580px"
            }}>
                <Box className="WebsiteLogo" sx={{
                    width: "32px",
                    height: "20px"
                }}>
                    <img src={window.location.origin + "/assets/JY.png"} alt="JY" width="100%" height="100%" />
                </Box>
                <Box sx={{ marginTop: "100px" }}>
                    <Typography variant="h1" component="h2" sx={{
                        fontSize: "33px",
                        fontWeight: "600",
                        color: "#000000",
                        width: "300px",
                        fontFamily: 'Montserrat',
                        fontweight: "400",
                        textAlign: "center",
                        margin: "0 auto"
                    }}>
                        {t('WEBSITE_HEADING')}
                    </Typography >

                    <Typography variant="h1" component="h2" sx={{
                        fontSize: "12px",
                        fontWeight: "300",
                        color: "#000000",
                        width: "300px",
                        fontFamily: 'Montserrat',
                        fontweight: "400",
                        textAlign: "center",
                        margin: "0 auto"

                    }}>
                        {t('WEBSITE_SUB_HEADING')}
                    </Typography >
                </Box>

                <Box className="WebsiteBanner" sx={{ marginTop: "68px" }}>
                    <Carousel showArrows={false} showStatus={false} showThumbs={false}
                        renderIndicator={(clickHandler, isSelected, index, label) => (
                            <div
                                key={index}
                                style={{
                                    display: "inline-block",
                                    width: isSelected ? "18px" : "6px",
                                    height: "6px",
                                    margin: "0 4px",
                                    borderRadius: isSelected ? "10px" : "50%",
                                    background: isSelected ? "#FF671F" : "#D9D9D9",
                                    cursor: "pointer",
                                }}
                                onClick={clickHandler}
                            />)}>
                        <Box>
                            <img src="./assets/Banner.png" alt="Banner" />
                        </Box>
                        <Box>
                            <img src="./assets/Banner.png" alt="Banner" />
                        </Box>
                        <Box>
                            <img src="./assets/Banner.png" alt="Banner" />
                        </Box>
                        <Box>
                            <img src="./assets/Banner.png" alt="Banner" />
                        </Box>

                    </Carousel>
                </Box>
            </Box >

            <Stack direction="row" sx={{
                justifyContent: "space-evenly",
                margin: "40px 0px"
            }}>
                <Button variant="text" sx={{
                    fontSize: "12px",
                    textTransform: "capitalize",
                    border: "1px solid #FF671F",
                    borderRadius: "20px",
                    padding: "10px",
                    width: "160px",
                    height: "40px",
                    color: "#FF671F",
                    "&:hover": {
                        color: "#FF671F",
                        border: "1px solid #FF671F"
                    }
                }}>Job Khoze </Button>
                <Button variant="contained"
                    sx={{
                        fontSize: "12px",
                        textTransform: "capitalize",
                        background: "#FF671F",
                        borderRadius: "20px",
                        padding: "10px",
                        width: "160px",
                        height: "40px",
                        "&:hover": {
                            background: "#FF671F",
                            borderRadius: "20px",
                        }
                    }}>Job दे</Button>
            </Stack>

            <Stack className="JobCategoriesSection" direction="column" gap={2} alignItems="center"
                sx={{ padding: "20px" }}>
                <Heading headingText={t('TOP_JOB_CATEGORIES')} />
                <Stack className="JobCategories" direction="row" sx={{
                    gap: "20px",
                    flexWrap: "wrap",
                    justifyContent: "center"
                }}>
                    {JobCategories.map((categoryItem) => {
                        return <JobCategoryItem key={categoryItem.id} categoryItem={categoryItem} />
                    })}
                </Stack>
                <ViewAllButton />
            </Stack>

            <Stack className="TopJobLocationsSection" direction="column" gap={2} alignItems="center"
                sx={{ padding: "20px" }}>
                <Heading headingText={t('TOP_JOB_LOCATION')} />
                <Stack className="JobCategories" direction="row" sx={{
                    gap: "20px",
                    flexWrap: "wrap",
                    justifyContent: "center"
                }}>
                    <JobLocationItem />
                    <JobLocationItem />
                    <JobLocationItem />
                    <JobLocationItem />
                </Stack>
                <ViewAllButton />
            </Stack>

            <Stack className="JobsYahanAdvantageSection" direction="column" gap={2} alignItems="center"
                sx={{
                    position: "relative"
                }}>
                <Heading headingText={t('JOB_YAHAN_ADVANTAGES')} />
                <Box sx={{
                    background: "#FCFAFA",
                    height: "326px",
                    width: "100%"
                }}>
                    <Box sx={{ width: "100px", margin: "0 auto" }}>
                        <img src={window.location.origin + "/assets/JobsYahanAdvantage.png"} alt="JobsYahanAdvantage" width="100%" height="100%" />
                    </Box>
                </Box>
                <Box sx={{
                    width: "112px",
                    position: "absolute",
                    right: "15px",
                    top: "70px"
                }}>
                    <Typography variant="h1" component="h2" sx={{
                        fontFamily: 'Manrope',
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "12px",
                        margin: "10px 0px"

                    }}>
                        {t('EASY_TO_USE')}
                    </Typography >
                    <Typography variant="h1" component="h2" sx={{
                        fontFamily: 'Manrope',
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "11px",
                        lineHeight: "150.9%"
                    }}>
                        {t('JOBSYAHAN_IS_A_JOB_PORTAL_EVERY_EMPLOYER')}
                    </Typography >
                </Box>
                <Box sx={{
                    width: "112px",
                    position: "absolute",
                    left: "25px",
                    top: "146px"
                }}>
                    <Typography variant="h1" component="h2" sx={{
                        fontFamily: 'Manrope',
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "12px",
                        margin: "10px 0px"
                    }}>
                        {t('LOCATION_BASED')}
                    </Typography >
                    <Typography variant="h1" component="h2" sx={{
                        fontFamily: 'Manrope',
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "11px",
                        lineHeight: "150.9%"
                    }}>
                        {t('JOBSYAHAN_IS_A_JOB_PORTAL_EVERY_EMPLOYER')}
                    </Typography >
                </Box>
                <Box sx={{
                    width: "112px",
                    position: "absolute",
                    top: "230px",
                    right: "15px"
                }}>
                    <Typography variant="h1" component="h2" sx={{
                        fontFamily: 'Manrope',
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "12px",
                        margin: "10px 0px"
                    }}>
                        {t('VERFIED')}
                    </Typography >
                    <Typography variant="h1" component="h2" sx={{
                        fontFamily: 'Manrope',
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "11px",
                        lineHeight: "150.9%"
                    }}>
                        {t('JOBSYAHAN_IS_A_JOB_PORTAL_EVERY_EMPLOYER')}
                    </Typography >
                </Box>
            </Stack >
        </Box >


        <Box className="LandingPageDesktop" sx={{
            display: { "xs": "none", "sm": "none", "md": "block", "lg": "block", "xl": "block" }
        }}>
            <Box className="Header" sx={{
                height: "81px",
                width: "100%",
                padding: "15px",
                boxSizing: "border-box"
            }}>
                <Box className="WebsiteLogo" sx={{
                    width: "60px",
                    height: "40px",
                    marginLeft: "100px"
                }}>
                    <img src={window.location.origin + "/assets/JY.png"} alt="JY" width="100%" height="100%" />
                </Box>
            </Box>

            <Stack className="TopSection"
                sx={{
                    width: "100%",
                    height: "445px",
                    backgroundImage: `url("./assets/LandingPageDesktop.png")`,
                    backgroundRepeat: "no-repeat",
                    boxSizing: "border-box",
                    backgroundSize: "100% ",

                }}>
                <Container sx={{ maxWidth: "1500px !important" }}>
                    <Stack direction="row" justifyContent="space-between" >
                        <Box sx={{ width: "50%", marginTop: "75px" }}>
                            <Typography variant="h1" component="h2" sx={{
                                fontSize: { "xs": "33px", "sm": "33px", "md": "45px", "lg": "45px", "xl": "45px" },
                                fontWeight: "600",
                                color: "#000000",
                                width: "450px",
                                fontFamily: 'Montserrat',
                                fontweight: "400",
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
                                width: "400px",

                            }}>
                                {t('WEBSITE_SUB_HEADING')}
                            </Typography >

                            <Stack direction="row" gap={2} sx={{ marginTop: "50px" }} >
                                <Button variant="text" sx={{
                                    fontSize: "20px",
                                    textTransform: "capitalize",
                                    border: "1px solid #FF671F",
                                    borderRadius: "8px",
                                    padding: "10px",
                                    width: "202px",
                                    height: "67px",
                                    color: "#FF671F",
                                    "&:hover": {
                                        color: "#FF671F",
                                        border: "1px solid #FF671F"
                                    }
                                }}>Job Khoze </Button>
                                <Button variant="contained"
                                    sx={{
                                        fontSize: "20px",
                                        textTransform: "capitalize",
                                        background: "#FF671F",
                                        borderRadius: "8px",
                                        padding: "10px",
                                        width: "202px",
                                        height: "67px",
                                        "&:hover": {
                                            background: "#FF671F",
                                            borderRadius: "8px",
                                        }
                                    }}>Job दे</Button>
                            </Stack>
                        </Box>
                        <Box sx={{ width: "50%" }}>
                            <Box sx={{
                                width: "550px",
                                height: "450px",
                                position: "relative",
                                bottom: " -18px",
                                left: "124px"
                            }}>
                                <img src="./assets/BannerDesktop.png" alt="Banner" width="100%" height="100%" />
                            </Box>
                        </Box>
                    </Stack>
                </Container>
            </Stack >

            <Stack className="JobCategorySection"
                sx={{
                    width: "100%",
                    boxSizing: "border-box",
                    margin: "70px 0px"
                }}>
                <Container sx={{ maxWidth: "1500px !important" }}>
                    <Stack direction="row" justifyContent="space-between" >
                        <Box sx={{ width: "50%" }}>
                            <Typography variant="h1" component="h2" sx={{
                                fontSize: { "xs": "33px", "sm": "33px", "md": "45px", "lg": "45px", "xl": "45px" },
                                fontWeight: "600",
                                color: "#000000",
                                width: "450px",
                                fontFamily: 'Montserrat',
                                fontweight: "400",
                            }}>
                                {t('WEBSITE_HEADING')}
                            </Typography >

                            <Typography variant="h1" component="h2" sx={{
                                fontSize: { "xs": "12px", "sm": "12px", "md": "20px", "xl": "20px", "lg": "20px" },
                                fontWeight: "300",
                                color: "#000000",
                                fontFamily: 'Montserrat',
                                fontweight: "400",
                                margin: "30px 0px",
                                width: "400px",

                            }}>
                                {t('TOP_JOB_CATEGORIES_DESCRIPTION')}
                            </Typography >

                            <ViewAllButton />
                        </Box>
                        <Stack className="JobCategories" direction="row" sx={{
                            width: "50%",
                            gap: "20px",
                            flexWrap: "wrap",
                            justifyContent: "center"
                        }}>
                            {JobCategories.map((categoryItem) => {
                                return <JobCategoryItem key={categoryItem.id} categoryItem={categoryItem} />
                            })}
                        </Stack>
                    </Stack>
                </Container>
            </Stack >

            <Box className="TopJobLocationSection"

                sx={{
                    width: "100%",
                    boxSizing: "border-box",
                    margin: "50px 0px",
                    flexWrap: "wrap"
                }}>
                <Container sx={{ maxWidth: "1500px !important" }}>
                    <Stack direction="column" gap={2} alignItems="center" justifyContent="center">
                        <Heading headingText={t('TOP_JOB_LOCATION')} />
                        <Stack className="JobCategories" direction="row" sx={{
                            gap: "20px",
                            flexWrap: "wrap",
                            justifyContent: "center"
                        }}>
                            <JobLocationItemDesktop />
                            <JobLocationItemDesktop />
                            <JobLocationItemDesktop />
                            <JobLocationItemDesktop />
                            <JobLocationItemDesktop />
                            <JobLocationItemDesktop />
                        </Stack>
                        <ViewAllButton />
                    </Stack>
                </Container>
            </Box >

            <Stack className="JobsYahanAdvantageSection" direction="column" gap={2} alignItems="center"
                sx={{
                    position: "relative"
                }}>
                <Stack
                    alignItems="center"
                    sx={{
                        background: "#FCFAFA",
                        height: "498px",
                        width: "100%",
                        padding: "40px 0px"
                    }}>
                    <Heading headingText={t('JOB_YAHAN_ADVANTAGES')} />

                    <Box sx={{ width: "600px", marginTop: "165px" }}>
                        <img src={window.location.origin + "/assets/JobYahanAdvantageDesktop.png"} alt="JobYahanAdvantageDesktop" width="100%" height="100%" />
                    </Box>
                </Stack>
                <Box sx={{
                    width: "200px",
                    position: "absolute",
                    top: "430px",
                    left: "630px"
                }}>
                    <Typography variant="h1" component="h2" sx={{
                        fontFamily: 'Manrope',
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "1.2rem",
                        margin: "10px 0px"

                    }}>
                        {t('EASY_TO_USE')}
                    </Typography >
                    <Typography variant="h1" component="h2" sx={{
                        fontFamily: 'Manrope',
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "1rem",
                        lineHeight: "150.9%"
                    }}>
                        {t('JOBSYAHAN_IS_A_JOB_PORTAL_EVERY_EMPLOYER')}
                    </Typography >
                </Box>
                <Box sx={{
                    width: "200px",
                    position: "absolute",
                    left: "860px",
                    top: "146px"
                }}>
                    <Typography variant="h1" component="h2" sx={{
                        fontFamily: 'Manrope',
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "1.2rem",
                        margin: "10px 0px"
                    }}>
                        {t('LOCATION_BASED')}
                    </Typography >
                    <Typography variant="h1" component="h2" sx={{
                        fontFamily: 'Manrope',
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "1rem",
                        lineHeight: "150.9%"
                    }}>
                        {t('JOBSYAHAN_IS_A_JOB_PORTAL_EVERY_EMPLOYER')}
                    </Typography >
                </Box>
                <Box sx={{
                    width: "200px",
                    position: "absolute",
                    top: "430px",
                    right: "620px"
                }}>
                    <Typography variant="h1" component="h2" sx={{
                        fontFamily: 'Manrope',
                        fontStyle: "normal",
                        fontWeight: "700",
                        fontSize: "1.2rem",
                        margin: "10px 0px"
                    }}>
                        {t('VERFIED')}
                    </Typography >
                    <Typography variant="h1" component="h2" sx={{
                        fontFamily: 'Manrope',
                        fontStyle: "normal",
                        fontWeight: "400",
                        fontSize: "1rem",
                        lineHeight: "150.9%"
                    }}>
                        {t('JOBSYAHAN_IS_A_JOB_PORTAL_EVERY_EMPLOYER')}
                    </Typography >
                </Box>
            </Stack >

        </Box >
        <Footer />


    </>)
}
export default Home;