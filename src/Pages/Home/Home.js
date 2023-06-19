import { getRequest, postRequest } from "../../utils/ApiRequests";
import { Box, Stack, Container, Button, Typography, FormControl, Input, Tooltip, Grid } from "@mui/material";

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
    let mobileScreen = useSelector(state => state.screenType) === "mobile";
    let lang = useSelector(state => state.currentLanguage);
    const [showButton, setShowButton] = useState(false);
    const [jobCategoryData, setJobCategoryData] = useState([]);
    const [jobLocationData, setJobLocationData] = useState([]);
    const [city, setCity] = useState(null);

    const setDynamicLocation = (location) => {
        localStorage.setItem("coordinates", location);
        // let { lat, lng } = JSON.parse(location);
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
                    SendUserLatitudeLongitude(lat, lng, city)

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

    const SendUserLatitudeLongitude = async (lat, long, city) => {
        const latlongForm = {
            latitude: lat,
            longitude: long,
            city: city
        };

        try {
            const api_url = process.env.REACT_APP_USER_LAT_LONG_URL;
            const response = await postRequest(api_url, latlongForm);
            if (response.status === '1')
                console.log(response)
        } catch (error) {
            // Handle the error
            console.error("Fetch error:", error);
        }
    }

    const web_carousal_images = [
        'https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/banner_image_one.png',
        'https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/banner_image_one.png',
        'https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/banner_image_one.png',
    ]

    const CarousalContent = () => <div className="carousel-content">
        <h2 className="carousel-heading">{t('WEBSITE_HEADING')}</h2>
        <h2 className="carousel-text">{t('WEBSITE_SUB_HEADING')}</h2>
        <div style={{ display: 'flex', justifyContent: 'flex-start', width: "70%", marginTop: '36px' }}>
            <a href="/job-listing" className="carousel-button carousel-primary-button">{t('FIND_JOB')}</a>
            <a href="/candidate-khoze" className="carousel-button carousel-secondary-button">{t('FIND_CANDIDATE')}</a>
        </div>
    </div>
    return (<>
        <Box className="LandingPage">
            <Stack className="AnnocumentBar" sx={{
                background: "#f3bb7a",
                color: "#ffffff",
                fontSize: "0.4rem",
                padding: "4px 14px",
            }}>
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
                // height: '100px',
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
                        justifyContent: mobileScreen ? "space-between" : "flex-start"
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
                            width: { "xs": "fit-content", "sm": "fit-content", "md": "1150px", "lg": "1150px", "xl": "1150px" },
                            alignItems: !mobileScreen && "flex-end",
                            justifyContent: mobileScreen && "space-between"

                        }}
                    >
                        {showButton &&
                            <Stack direction="row" gap={1} sx={{
                                height: "inherit"
                            }}>
                                <FindJobButton style={!mobileScreen && { width: "200px", height: "45px" }} />
                                <FindCandidateButton style={!mobileScreen && { width: "200px", height: "45px" }} />
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
                        // minHeight: { "xs": `calc(100vh - 50px)`, "sm": `calc(100vh - 50px)`, "md": "fit-content", "xl": "fit-content", "lg": "fit-content" },
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
                        // minHeight: `calc((100vh - 50px)/2)`,
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
                                {t(`WEBSITE_HEADING`)}
                            </Typography >

                            <Typography variant="h1" component="h2" sx={{
                                fontSize: { "xs": "0.7rem", "sm": "0.7rem", "md": "1rem", "xl": "1rem", "lg": "1rem" },
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
                <Box id="box-corousel" className="TopSection hero-section" sx={{ padding: "0px" }}>
                    <Container id="container-corousel" sx={{ maxWidth: "100% !important", padding: "0px !important" }}>

                        <Carousel id="corousel" showArrows={false} showStatus={false} showThumbs={false}
                            autoPlay={true}
                        >
                            {web_carousal_images.map((img, index) => (
                                <div
                                    key={index}
                                    class="carousel-container"
                                    style={{
                                        backgroundImage: `url(${img})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        backgroundPosition: 'center',
                                        width: '100%',
                                        height: '480px',
                                        textAlign: 'left',
                                    }}
                                >
                                    <CarousalContent />
                                </div>
                            ))}
                        </Carousel>
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

            <Grid container justifyContent="center" sx={{
                minHeight: "255px",
                background: "#ffffff",
                boxSizing: "border-box",
                alignItems: "center"
            }}>
                <Grid item xs={12} sm={6} container justifyContent="center">
                    <Typography variant="h1" component="h2" sx={{
                        fontSize: "2.5rem",
                        textAlign: 'center',
                        fontWeight: "500",
                        maxWidth: '300px'
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
                            padding: '20px',
                            borderRadius: '40px',
                            height: mobileScreen ? '180px' : '280px',
                        }}
                    />
                </Grid>
            </Grid>
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
                                {t('ADVANTAGES_1')}
                            </Typography >

                        </Box>

                        <Box sx={{
                            ...AdvantageSectionBoxStyle,
                            bottom: "47px",
                            right: "0"
                        }}>
                            <Typography variant="h1" component="h2" sx={JobAdvantageDescriptionStyle}>
                                {t('ADVANTAGES_2')}
                            </Typography >

                        </Box>

                        <Box sx={{
                            ...AdvantageSectionBoxStyle,
                            bottom: "125px",
                            left: "0"
                        }}>
                            <Typography variant="h1" component="h2" sx={JobAdvantageDescriptionStyle}>
                                {t('ADVANTAGES_3')}
                            </Typography >

                        </Box></>}

                    {!mobileScreen && <>
                        <Box sx={{
                            ...AdvantageSectionBoxStyle,
                            bottom: "0px",
                            left: "0px"
                        }}>
                            <Typography variant="h1" component="h2" sx={JobAdvantageDescriptionStyle}>
                                {t('ADVANTAGES_1')}
                            </Typography >

                        </Box>

                        <Box sx={{
                            ...AdvantageSectionBoxStyle,
                            bottom: "0px",
                            right: "0px"
                        }}>
                            <Typography variant="h1" component="h2" sx={JobAdvantageDescriptionStyle}>
                                {t('ADVANTAGES_2')}
                            </Typography >

                        </Box>

                        <Box sx={{
                            ...AdvantageSectionBoxStyle,
                            top: "0px",
                            left: "39%"
                        }}>
                            <Typography variant="h1" component="h2" sx={JobAdvantageDescriptionStyle}>
                                {t('ADVANTAGES_3')}
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