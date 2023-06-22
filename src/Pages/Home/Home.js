import { getRequest } from "../../utils/ApiRequests";
import { Box, Stack, Container, Button, Typography, FormControl, Input, Tooltip, Grid, Card, CardContent, CardMedia } from "@mui/material";

/* Site Header */
import LanguageTranslatorSection from "../Common/LanguageTranslaterSection";
import JobCardComponent from "./Component/JobCardComponent";
import ViewMoreSection from "./Component/ViewMoreSection";
import Footer from "../../ThemeComponent/Common/Footer";
import Heading from "./Component/Heading";

import { WebsiteMainHeading } from "../../utils/Styles";
import WebsiteLogo from "../Common/WebsiteLogo";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { getLocation } from "../../utils/function";
import { useTranslation } from "react-i18next";
import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Autocomplete from "react-google-autocomplete";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CloseIcon from '@mui/icons-material/Close';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { Helmet } from "react-helmet";

const AdvantageSectionStyle = {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
}

const FindJobButton = ({ style }) => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    return (<Button variant="contained"
        onClick={() => navigate("job-listing")}
        sx={{
            background: "#FF671F",
            borderRadius: "33px",
            textTransform: "capitalize",
            fontSize: { "xs": "0.8rem", "sm": "0.8rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
            "&:hover": {
                background: "#FF671F",
            },
            ...style // Apply custom styles passed via the style prop
        }
        }> {t('FIND_JOB')}</Button >)
}

const FindCandidateButton = ({ style }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    return (<Button
        onClick={() => navigate("candidate-khoze")}
        sx={{
            color: "#FF671F",
            borderRadius: "33px",
            textTransform: "capitalize",
            border: "1px solid",
            fontSize: { "xs": "0.8rem", "sm": "0.8rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
            "&:hover": {
                color: "#FF671F",
                border: "1px solid",

            },
            ...style // Apply custom styles passed via the style prop
        }}
        variant="outlined">{t('FIND_CANDIDATE')}</Button>)
}


function Home() {
    const { t } = useTranslation();
    const mobileScreen = localStorage.getItem("device_type") === "mobile";
    let lang = useSelector(state => state.currentLanguage);
    const [showButton, setShowButton] = useState(false);
    const [jobCategoryData, setJobCategoryData] = useState([]);
    const [jobLocationData, setJobLocationData] = useState([]);
    const [city, setCity] = useState(null);

    const setDynamicLocation = (location) => {
        localStorage.setItem("coordinates", location);
    };

    const getCoords = async () => {
        let { latitude, longitude } = await getLocation();
        sendUserLocationInformation(latitude, longitude);
    }

    const sendUserLocationInformation = async (lat, lng) => {
        const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_YOUR_GOOGLE_MAPS_API_KEY}`;
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                if (data.status === 'OK') {
                    const result = data.results[0];
                    const cityDetail = result.formatted_address
                    setCity(cityDetail)
                    setDynamicLocation(JSON.stringify(result?.geometry?.location))
                    // SendUserLatitudeLongitude(lat, lng, city)

                } else {
                    console.error('Geocoding request failed. Status:', data.status);
                    //   reject(new Error('Geocoding request failed.'));
                }
            })
    };


    useEffect(() => {
        const handleScroll = () => {
            const HeadingElement = document.querySelector('.JobLocationSection').getBoundingClientRect();
            const HeadingPosition = HeadingElement.top + window.scrollY;

            if (window.scrollY > HeadingPosition) setShowButton(true);
            else setShowButton(false);
        };
        const fetchData = async () => {
            try {
                const api_url = process.env.REACT_APP_GET_JOB_CATEGORY_DETAIL; // Replace with your .env variable name
                const data = await getRequest(api_url);
                setJobCategoryData(data.data);
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };

        const fetchLocationData = async () => {
            try {
                const api_url = process.env.REACT_APP_GET_JOB_LOCATIONS_DETAIL; // Replace with your .env variable name
                const data = await getRequest(api_url);
                setJobLocationData(data.data);
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };

        window.addEventListener('scroll', handleScroll);
        fetchData();
        fetchLocationData();
        let coords = JSON.parse(localStorage.getItem("coordinates"));
        if (coords) {
            sendUserLocationInformation(coords.lat, coords.lng)
        } else {
            getCoords();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const web_carousal_images = [
        "https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/image_one.png",
        "https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/image_two.png",
        "https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/image_three.png",
    ]

    const advantages_content = [
        {
            heading: t('HOMEPAGE_ADVANTAGE_HEADING_1'),
            description: t('HOMEPAGE_ADVANTAGE_DESCRIPTION_1'),
            img: "https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/genuine_jobs.png"
        },
        {
            heading: t('HOMEPAGE_ADVANTAGE_HEADING_2'),
            description: t('HOMEPAGE_ADVANTAGE_DESCRIPTION_2'),
            img: "https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/aapke_aaspaas.png"
        },
        {
            heading: t('HOMEPAGE_ADVANTAGE_HEADING_3'),
            description: t('HOMEPAGE_ADVANTAGE_DESCRIPTION_3'),
            img: "https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/sabse_saral.png"
        }
    ]

    const CarousalContent = () => (<div className="carousel-content">
        <h2 className="carousel-heading">{t('WEBSITE_HEADING')}</h2>
        <h2 className="carousel-text">{t('WEBSITE_SUB_HEADING')}</h2>
        <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '36px' }}>
            <a href="/job-listing" className="carousel-button carousel-primary-button">{t('FIND_JOB')}</a>
            <a href="/candidate-khoze" className="carousel-button carousel-secondary-button">{t('FIND_CANDIDATE')}</a>
        </div>
    </div>)
    return (<>
        <Box className="LandingPage">
            <Stack className="AnnocumentBar" sx={{
                background: "#f3bb7a",
                color: "#ffffff",
                fontSize: "0.4rem",
                padding: "4px 14px",
            }}>
                <Helmet>
                    <title>JobsYahan - Bharat Ka Job App - Yahan Job aur Candidate Milna Hai Sabse Saral</title>
                    <meta name="description" content="JobsYahan - Bharat Ka Job App - is an easy-to-use intuitive web and mobile-based application that simplifies the employment process for BHARAT workforce and recruiters with its vernacular and location-based approach." />
                    <meta property="og:type" content="Website" />
                    <meta property="og:title" content="JobsYahan - Bharat Ka Job App - Yahan Job aur Candidate Milna Hai Sabse Saral" />
                    <meta property="og:image" content="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/logo_og.png" />
                    <meta property="og:url" content={window.location.origin} />
                </Helmet>
                <FormControl style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }} >
                    <LocationOnIcon fontSize="small" color="disabled" />
                    <div style={{ width: "460px" }}>
                        <Input
                            fullWidth
                            color="secondary"
                            defaultValue={city}

                            inputComponent={({ inputRef, onFocus, onBlur, ...props }) => (
                                <Autocomplete
                                    {...props}
                                    apiKey={process.env.REACT_APP_YOUR_GOOGLE_MAPS_API_KEY}
                                    options={{
                                        types: [],
                                        componentRestrictions: { country: "in" },
                                    }}
                                    onPlaceSelected={(place) => {
                                        setCity(place.formatted_address);
                                        setDynamicLocation(JSON.stringify(place?.geometry?.location))
                                    }}
                                />
                            )}
                        />
                    </div>
                    <div class="font-icon-wrapper-home" onClick={getCoords}  >
                        <Tooltip title="Detech current Location">
                            <MyLocationIcon fontSize="small" color="primary" />
                        </Tooltip>
                    </div>
                    <div class="font-icon-wrapper-home" onClick={() => setCity(null)}  >
                        <Tooltip title="Clear ">
                            <CloseIcon fontSize="medium" color="disabled" />
                        </Tooltip>
                    </div>
                </FormControl>
            </Stack>
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
                        justifyContent: mobileScreen ? "space-between" : "flex-start",
                        flexWrap: mobileScreen && "wrap"
                    }}>
                    <WebsiteLogo />
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
                            width: { "xs": "100%", "sm": "100%", "md": "1150px", "lg": "1150px", "xl": "1150px" },
                            alignItems: !mobileScreen && "flex-end",

                        }}
                    >
                        {showButton &&
                            <Stack direction="row" gap={1} sx={{
                                height: "inherit",
                                margin: mobileScreen && "10px 0px ",
                                justifyContent: mobileScreen && "space-between"

                            }}>
                                <FindJobButton style={!mobileScreen ? { width: "200px", height: "45px" } : { width: "170px" }} />
                                <FindCandidateButton style={!mobileScreen ? { width: "200px", height: "45px" } : { width: "170px" }} />
                            </Stack>
                        }
                    </Stack>
                </Stack>
            </Box>
            {mobileScreen &&
                <Stack className="MobileTopSection"
                    sx={{
                        width: "100%",
                        minHeight: "fit-content",
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
                                    <img alt="carousel" src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/image_two.png" />
                                </div>
                                <div>
                                    <img alt="carousel" src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/image_three.png" />
                                </div>
                            </Carousel>
                        </Box>
                    </Stack>
                    <Stack className="ButtonSectionWrapper" sx={{
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
                                fontSize: '2rem'
                            }}>
                                {t(`WEBSITE_HEADING`)}
                            </Typography >

                            <Typography variant="h1" component="h2" sx={{
                                fontSize: "1rem",
                                fontFamily: "'Manrope',' sans- serif'",
                                fontWeight: "400",
                                color: "#000000",
                                textAlign: "center",
                                lineHeight: "1.5"
                            }}>
                                {t('WEBSITE_SUB_HEADING')}
                            </Typography >

                            <FindJobButton />
                            <FindCandidateButton />
                        </Stack>
                    </Stack>
                </Stack >
            }
            {!mobileScreen &&
                <Box id="box-corousel" className="TopSection hero-section" sx={{ padding: "0px", background: "linear-gradient(180deg, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.465234) 42.19%, rgba(255, 103, 31, 0.075) 100%)" }}>
                    <Container id="container-corousel" sx={{ maxWidth: "1440px !important", padding: "0px !important" }}>
                        <Grid container xs={12} spacing={2} sx={{ height: '480px' }}>
                            <Grid item xs={6}>
                                <CarousalContent />
                            </Grid>
                            <Grid item xs={6}>
                                <Carousel showArrows={false} showStatus={false} showThumbs={false}
                                    autoPlay={true}
                                    infiniteLoop={true}
                                >
                                    {web_carousal_images.map((img, index) => (<>
                                        <img key={index} alt="carousel" src={img} style={{ maxWidth: '420px', height: 'auto' }} />
                                    </>))}
                                </Carousel>
                            </Grid>
                        </Grid>
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
                        <Heading headingText={t('CLICK_ON_THE_WORK_YOU_WOULD_LIKE_TO_DO')} />
                        <Stack className="JobCategories" direction="row" sx={{
                            gap: "20px",
                            flexWrap: "wrap",
                            justifyContent: "center"
                        }}>

                            {jobCategoryData && jobCategoryData.slice(0, mobileScreen ? 3 : 9).map((item, index) => {
                                return (<JobCardComponent
                                    cardSection="CategorySection"
                                    category_name={item[`category${lang}`]}
                                    category_image={item.categoryimage_url}
                                    category_url_link={item.search_api}
                                    category_job_active={item.job_active_count}
                                    key={item._id} />)
                            })}

                            <ViewMoreSection SectionText="View More" />
                        </Stack>
                    </Stack>
                </Container>
            </Box >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight="40vh"
                sx={{
                    maxWidth: "1440px !important",
                    padding: "0px !important",
                    background: "#ffffff",
                    boxSizing: "border-box",
                    alignItems: "center"
                }}
            >
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12} sm={6} container justifyContent="center">
                        <Typography variant="h3" component="h3" sx={{
                            fontSize: "2rem",
                            textAlign: 'center',
                            fontWeight: "500",
                            maxWidth: '350px'
                        }}>
                            <p>{t('FINDING_JOB_MADE_EASY_AND_SIMPLE_FOR_ANYONE')}</p>
                        </Typography >
                    </Grid>
                    <Grid item xs={12} sm={6} container justifyContent="center">
                        <img
                            src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/middle_banner_image_1.png"
                            alt="middle_banner"
                            style={{
                                maxWidth: 'auto',
                                padding: mobileScreen ? '12px' : '20px',
                                borderRadius: '40px',
                                height: mobileScreen ? '200px' : '280px',
                            }}
                        />
                    </Grid>
                </Grid>
            </Box>
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
                            {jobLocationData.slice(0, mobileScreen ? 3 : 7).map((item, index) => {
                                return (<JobCardComponent
                                    cardSection="LocationSection"
                                    category_name={item[`location${lang}`]}
                                    category_image={item.locationurl}
                                    category_url_link={item.search_api}
                                    category_job_active={item.job_active_count}
                                    key={index}
                                />)
                            })}
                            <ViewMoreSection SectionText="View More" />
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
                <Box className="SectionHeading" sx={{ marginBottom: '18px' }}>
                    <Heading headingText={t('JOB_YAHAN_ADVANTAGES')} />
                </Box>
                <Stack className="AdvantageSection" sx={AdvantageSectionStyle}>
                    <Grid container spacing={6}>
                        {advantages_content.map((advantage, index) => (
                            <Grid item xs={12} sm={4} >
                                <Card sx={{ maxWidth: 345, width: '100%', padding: '0px', borderRadius: '9px', minHeight: 300 }}>
                                    <CardMedia
                                        sx={{ height: 180 }}
                                        image={advantage.img}
                                        title="green iguana"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {advantage.heading}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {advantage.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))} </Grid>
                </Stack>
            </Stack >
            <Footer />
        </Box >
    </>)
}
export default Home;