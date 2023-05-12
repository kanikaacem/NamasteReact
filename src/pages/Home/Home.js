import { Box, Button, Stack, Typography } from "@mui/material";

/* Site Header */
import JobCategoryItem from "./Component/JobCategoryItem";
import JobLocationItem from "./Component/JobLocationItem";
import ViewAllButton from "./Component/ViewAllButton";

import Footer from "../../ThemeComponent/Common/Footer";

import { JobCategories } from "../../utils/Data";
import Heading from "./Component/Heading";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useTranslation } from "react-i18next";
function Home() {

    const { t } = useTranslation();

    return (<>
        <Box className="LandingPageMobile"
            sx={{
                display: { "xs": "block", "sm": "block", "md": "none", "lg": "none", "xl": "none" }
            }}>
            <Box className="MainSection" sx={{
                width: "100%",
                height: "580px",
                backgroundImage: `url("./assets/LandingPage.png")`,
                backgroundRepeat: "no-repeat",
                padding: "20px",
                boxSizing: "border-box"
            }}>
                <Box sx={{
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
                    <Carousel showArrows={false} showStatus={false}>
                        <div>
                            <img src="./assets/Banner.png" alt="Banner" />
                        </div>
                        <div>
                            <img src="./assets/Banner.png" alt="Banner" />
                        </div>
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
                    padding: " 0px !important",
                    color: "#FF671F"
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
                        padding: " 0px !important",
                        "&:hover": {
                            fontSize: "12px",
                            textTransform: "capitalize",
                            background: "#FF671F",
                            borderRadius: "20px",
                            padding: "10px",
                            width: "160px",
                            height: "40px",
                            padding: " 0px !important"
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
        </Box>
        <Footer />


    </>)
}
export default Home;