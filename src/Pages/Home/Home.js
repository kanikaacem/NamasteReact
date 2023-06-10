import { getRequest } from "../../utils/ApiRequests";
import { Box, Stack, Container, Button, Typography } from "@mui/material";

/* Site Header */
import LanguageTranslatorSection from "../Common/LanguageTranslaterSection";
import JobCardComponent from "./Component/JobCardComponent";
import ViewMoreSection from "./Component/ViewMoreSection";
import Footer from "../../ThemeComponent/Common/Footer";
import Heading from "./Component/Heading";

import { WebsiteMainHeading } from "../../utils/Styles";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const AdvantageSectionStyle = {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: { "xs": "320px", "sm": "320px", "md": "600px", "xl": "600px", "lg": "600px" },
    height: { "xs": "320px", "sm": "320px", "md": "285px", "xl": "285px", "lg": "285px" },
}

const AdvantageSectionBoxStyle = {
    width: { "xs": "100px", "sm": "100px", "md": "200px", "lg": "200px", "xl": "200px" },
    position: "absolute",
}

const JobAdvantageDescriptionStyle = {
    fontFamily: 'Manrope',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: { "xs": "0.75rem", "sm": "0.75rem", "md": "1.2rem", "xl": "1.2rem", "lg": "1.2rem" },
    margin: "10px 0px"
}
const JobLocation = [
    { id: 1, name: "Delhi", text: "Delhi" },
    { id: 2, name: "Mumbai", text: "Mumbai" },
    { id: 3, name: "Gurgoan", text: "Gurgoan" },
    { id: 4, name: "Delhi", text: "Delhi" },
    { id: 5, name: "Mumbai", text: "Mumbai" },
    { id: 6, name: "Gurgoan", text: "Gurgoan" },
    { id: 7, name: "Delhi", text: "Delhi" },
    { id: 8, name: "Mumbai", text: "Mumbai" },
    { id: 9, name: "Gurgoan", text: "Gurgoan" }

];


const FindJobButton = ({ style }) => {
    const navigate = useNavigate();
    return (<Button variant="contained"
        onClick={() => navigate("job-listing")}
        sx={{
            background: "#FF671F",
            borderRadius: "33px",
            textTransform: "capitalize",
            fontSize: { "xs": "0.8rem", "sm": "0.8rem", "md": "1.5rem", "lg": "1.5rem", "xl": "1.5rem" },
            "&:hover": {
                background: "#FF671F",
            },
            ...style // Apply custom styles passed via the style prop

        }
        }> Job खोजें</Button >)
}

const FindCandidateButton = ({ style }) => {
    return (<Button
        sx={{
            color: "#FF671F",
            borderRadius: "33px",
            textTransform: "capitalize",
            border: "1px solid",
            fontSize: { "xs": "0.8rem", "sm": "0.8rem", "md": "1.5rem", "lg": "1.5rem", "xl": "1.5rem" },
            "&:hover": {
                color: "#FF671F",
                border: "1px solid",

            },
            ...style // Apply custom styles passed via the style prop


        }}
        variant="outlined">Candidate खोजें </Button>)
}


function Home() {

    const { t } = useTranslation();
    const mobileScreen = useSelector(state => state.screenType) === "mobile";
    const [showButton, setShowButton] = useState(false);
    const [jobCategoryData, setJobCategoryData] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const isScrollingOverViewport = (scrollTop > window.innerHeight)
            setShowButton(isScrollingOverViewport)
        };
        const fetchData = async () => {
            try {
                const api_url = process.env.REACT_APP_GET_JOB_CATEGORY_DETAIL; // Replace with your .env variable name
                const data = await getRequest(api_url);
                // Handle the fetched data
                // console.log("Fetched data:", data);
                setJobCategoryData(data.data);
            } catch (error) {
                // Handle the error
                console.error("Fetch error:", error);
            }
        };

        window.addEventListener('scroll', handleScroll);
        fetchData();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (<>
        <Box className="LandingPage">
            <Box className="WebsiteLogoAndLoginSectionWrapper" sx={{
                minHeight: { "xs": "50px", "sm": "50px", "md": "100px", "lg": "100px", "xl": "100px" },
                width: "100%",
                padding: { "xs": "10px", "sm": "10px", "md": "20px 100px", "lg": "20px 100px", "xl": "20px 100px" },
                boxSizing: "border-box",
                background: "#FFFFFF",
                position: "sticky",
                top: "0",
                zIndex: "234",
            }} >
                <Stack direction="row" className="WebsiteLogoAndLoginSection"
                    alignItems="center"
                    sx={{

                        justifyContent: "flex-start"
                    }}>
                    <Box className="WebsiteLogo" sx={{                     
                        width: "30vw"
                    }}>
                        <img src={window.location.origin + "/assets/DesktopLogo.png"} alt="JY" width="100%" height="100%" />
                    </Box>
                    {!mobileScreen && <Stack className="LanguageSelectorSection" sx={{
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Box sx={{
                            width: "400px",
                            border: "1px solid #DFE3E6",
                            borderRadius: "20px",
                            height: "fit-content"
                        }}>
                            <LanguageTranslatorSection />
                        </Box>
                    </Stack>}
                    <Stack
                        sx={{
                            width: { "xs": "fit-content", "sm": "fit-content", "md": "1150px", "lg": "1150px", "xl": "1150px" },
                            alignItems: !mobileScreen && "flex-end"
                        }}
                    >
                        {showButton &&
                            <Stack direction="row" gap={1} sx={{
                                height: "inherit"
                            }}>
                                <FindJobButton style={!mobileScreen && { width: "200px", height: "45px" }} />
                                <FindCandidateButton style={!mobileScreen && { width: "300px", height: "45px" }} />
                            </Stack>}

                    </Stack>

                </Stack>
            </Box>

            {mobileScreen &&
                <Stack className="MobileTopSection"
                    sx={{
                        width: "100%",
                        height: { "xs": `calc(100vh - 50px)`, "sm": `calc(100vh - 50px)`, "md": "fit-content", "xl": "fit-content", "lg": "fit-content" },
                        boxSizing: "border-box"
                    }}>
                    <LanguageTranslatorSection />

                    <Stack className="BannerSectionWrapper" sx={{
                        padding: "0px 20px",
                        boxSizing: "border-box",
                        marginTop: "50px",
                        alignItems: "center"
                    }}>
                        <Box className="BannerSection" sx={{
                            width: { "xs": "100%", "sm": "100%", "md": "600px", "xl": "600px", "lg": "600px" }
                        }}>
                            <Carousel showArrows={false} showStatus={false} showThumbs={false}
                                autoPlay={true}
                                renderIndicator={(clickHandler, isSelected, index, label) => (
                                    <div
                                        key={index}
                                        style={{
                                            display: "inline-block",
                                            width: isSelected ? "15px" : "8px",
                                            height: isSelected ? "8px" : "8px",
                                            margin: "0 4px",
                                            borderRadius: isSelected ? "35%" : "50%",
                                            background: isSelected ? "#FF671F" : "#FFFFFF",
                                            cursor: "pointer",
                                        }}
                                        onClick={clickHandler}
                                    />
                                )}>
                                <div>
                                    <img alt="carousel" src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/employee-img.png" />
                                </div>
                                <div>
                                    <img alt="carousel" src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/employee-img.png" />
                                </div>
                                <div>
                                    <img alt="carousel" src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/employee-img.png" />
                                </div>
                            </Carousel>
                        </Box>
                    </Stack>


                    <Stack className="ButtonSectionWrapper" sx={{
                        minHeight: `calc((100vh - 50px)/2)`,
                        backgroundImage: "linear-gradient(#f3bb7a, #ffffff)",
                        padding: "40px",
                        boxSizing: "border-box",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Stack className="ButtonsSection"
                            gap={1}
                            sx={{
                                width: { "xs": "100%", "sm": "100%", "md": "600px", "xl": "600px", "lg": "600px" }
                            }}>
                            <Typography variant="h1" component="h2" sx={{
                                ...WebsiteMainHeading,
                                fontSize: { "xs": "1.25rem", "sm": "1.25rem", "md": "2rem", "xl": "2rem", "lg": "2rem" }
                            }}>
                                {t(`INDIA'S_TRUSTED_jOB_PORTAL`)}
                            </Typography >

                            <Typography variant="h1" component="h2" sx={{
                                fontSize: { "xs": "0.7rem", "sm": "0.7rem", "md": "1rem", "xl": "1rem", "lg": "1rem" },
                                fontFamily: "'Manrope',' sans- serif'",
                                fontWeight: "400",
                                color: "#000000",
                                textAlign: "center",
                                lineHeight: "1.5"
                            }}>
                                {t('CHOOSE_THE_jOB_OF_YOUR_CHOICE_THAT_TOO_NEAR_YOU_SEARCH_1000_JOBS')}
                            </Typography >

                            <FindJobButton />
                            <FindCandidateButton />
                        </Stack>
                    </Stack>

                </Stack >
            }
            {!mobileScreen &&
                <Box className="TopSection">
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

                            <Stack direction="row" gap={2} className="WebsiteButton" sx={{
                                marginTop: "50px",
                                width: { "xs": "100%", "sm": "100%", "md": "600px", "xl": "600px", "lg": "600px" }

                            }}>
                                <FindJobButton style={{ width: "100%" }} />
                                <FindCandidateButton style={{ width: "100%" }} />
                            </Stack>

                        </Stack>
                    </Container>
                </Box>
            }
            <Box className="JobLocationSection"
                sx={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "50px 0px",
                    flexWrap: "wrap",
                    backgroundImage: "linear-gradient(#FFFFFF, #f3bb7a)"
                }}>
                <Container sx={{ maxWidth: "1500px !important" }}>
                    <Stack direction="column" gap={3} alignItems="center" justifyContent="center">
                        <Heading headingText={t('CLICK_ON_THE_LOCATION_WHERE_YOU_WOULD_LIKE_TO_WORK')} />
                        <Stack className="JobCategories" direction="row" sx={{
                            gap: "20px",
                            flexWrap: "wrap",
                            justifyContent: "center"
                        }}>

                            {jobCategoryData && jobCategoryData.slice(0, mobileScreen ? 3 : 7).map((item, index) => {
                                return (<JobCardComponent
                                    cardSection="CategorySection"
                                    category_name={item.category_name}
                                    category_image={item.image_link}
                                    category_url_link={item.search_api}
                                    category_job_active={item.job_active_count}
                                    key={item._id} />)
                            })}

                            <ViewMoreSection SectionText="View More Cities" />
                        </Stack>
                    </Stack>
                </Container>
            </Box >

            <Stack sx={{
                minHeight: "255px",
                background: "#ffffff",
                padding: "20px",
                boxSizing: "border-box",
                alignItems: "center"
            }}>
                <Container className="SecBannerSection" sx={{ maxWidth: "1300px !important" }}>

                    <Typography variant="h1" component="h2" sx={{
                        fontSize: { "xs": '1.1rem', "sm": '1.1rem', "md": "2rem", "xl": "2rem", "lg": "2rem" },
                        width: { "xs": "180px", "sm": "180px", "md": "300px", "lg": "300px", "xl": "300px" },
                        fontWeight: "500"
                    }}>
                        <span style={{ color: "#FF671F" }}> Jaanchi, Parkhi</span> jobs
                        har <span style={{ color: "#FF671F" }}> Hindustani</span> ke
                        liye
                    </Typography >

                </Container>
            </Stack>

            <Box className="JobLocationSection"
                sx={{
                    width: "100%",
                    boxSizing: "border-box",
                    padding: "50px 0px",
                    flexWrap: "wrap",
                    backgroundImage: "linear-gradient(#f3bb7a, #FFFFFF 80%)"
                }}>
                <Container sx={{ maxWidth: "1500px !important" }}>
                    <Stack direction="column" gap={3} alignItems="center" justifyContent="center">
                        <Heading headingText={t('CLICK_ON_THE_LOCATION_WHERE_YOU_WOULD_LIKE_TO_WORK')} />
                        <Stack className="JobCategories" direction="row" sx={{
                            gap: "20px",
                            flexWrap: "wrap",
                            justifyContent: "center"
                        }}>
                            {JobLocation.slice(0, mobileScreen ? 3 : 7).map((item, index) => {
                                return (<JobCardComponent
                                    cardSection="LocationSection"
                                    category_name={item.text}
                                    category_image="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/map.png"
                                    category_url_link={item.search_api}
                                    category_job_active={item.job_active_count}
                                    key={index}
                                />)
                            })}


                            <ViewMoreSection SectionText="View More Cities" />
                        </Stack>
                    </Stack>
                </Container>
            </Box >

            <Stack className="JobsYahanAdvantageSection" direction="column" gap={2} alignItems="center"
                sx={{
                    position: "relative",
                    backgroundImage: "linear-gradient(#ffffff 10% , #f3bb7a )",
                    padding: "20px"

                }}>
                <Box className="SectionHeading">
                    <Heading headingText={t('JOB_YAHAN_ADVANTAGES')} />
                </Box>


                <Stack className="AdvantageSection" sx={AdvantageSectionStyle}>
                    <Box sx={{
                        width: mobileScreen ? "100px" : "600px",
                        height: mobileScreen ? "320px" : "fit-content"
                    }} >
                        <img src={mobileScreen ?
                            "https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/job_advantage_picture.png"
                            : "./assets/JobYahanAdvantageDesktop.png"}
                            alt="JobYahanAdvantageDesktop" width="100%" height="100%" />
                    </Box>

                    {mobileScreen && <>
                        <Box sx={{
                            ...AdvantageSectionBoxStyle,
                            top: "50px",
                            right: "0px"
                        }}>
                            <Typography variant="h1" component="h2" sx={JobAdvantageDescriptionStyle}>
                                {t('FINDING_JOB_MADE_EASY_AND_SIMPLE_FOR_ANYONE')}
                            </Typography >

                        </Box>

                        <Box sx={{
                            ...AdvantageSectionBoxStyle,
                            bottom: "47px",
                            right: "0"
                        }}>
                            <Typography variant="h1" component="h2" sx={JobAdvantageDescriptionStyle}>
                                {t('VERIFIED_AND_GENUINE_JOBS_FOR_EVERY_INDIAN')}
                            </Typography >

                        </Box>

                        <Box sx={{
                            ...AdvantageSectionBoxStyle,
                            bottom: "125px",
                            left: "0"
                        }}>
                            <Typography variant="h1" component="h2" sx={JobAdvantageDescriptionStyle}>
                                {t('GET_A_JOB_NEAR_YOU')}
                            </Typography >

                        </Box></>}

                    {!mobileScreen && <>
                        <Box sx={{
                            ...AdvantageSectionBoxStyle,
                            bottom: "0px",
                            left: "0px"
                        }}>
                            <Typography variant="h1" component="h2" sx={JobAdvantageDescriptionStyle}>
                                {t('FINDING_JOB_MADE_EASY_AND_SIMPLE_FOR_ANYONE')}
                            </Typography >

                        </Box>

                        <Box sx={{
                            ...AdvantageSectionBoxStyle,
                            bottom: "0px",
                            right: "0px"
                        }}>
                            <Typography variant="h1" component="h2" sx={JobAdvantageDescriptionStyle}>
                                {t('VERIFIED_AND_GENUINE_JOBS_FOR_EVERY_INDIAN')}
                            </Typography >

                        </Box>

                        <Box sx={{
                            ...AdvantageSectionBoxStyle,
                            top: "0px",
                            left: "39%"
                        }}>
                            <Typography variant="h1" component="h2" sx={JobAdvantageDescriptionStyle}>
                                {t('GET_A_JOB_NEAR_YOU')}
                            </Typography >

                        </Box>
                    </>}
                </Stack>
            </Stack >

            <Footer />
        </Box >


    </>)
}
export default Home;