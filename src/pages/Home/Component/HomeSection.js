import { Box, Stack, Typography } from '@mui/material';
import SearchBar from "../../../ThemeComponent/SearchBar";

import { categoryData, supply_chain, service_jobs, digital, marketing, sales } from "../../../utils/Data";
import { useState } from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const HomeSection = () => {
    const [activeHomeCategory, setActiveHomeCategory] = useState("supply_chain");
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (<>
        <Box
            className="home-banner-section"
            sx={{
                position: "relative",
                paddingTop: "50px",
                paddingBottom: "20px",
                // padding: "100px 0px",
                position: "relative",
                background: "#FAFAFA"
            }}

        >

            <Stack alignItems="center" justifyContent="center">
                <Typography variant="h1"
                    sx={{
                        color: "#2B1E44",
                        textAlign: "center",
                        fontWeight: "700",
                        fontSize: { "lg": '70px', "md": "70px", "xs": "40px" },
                        maxWidth: "1300px",
                        lineHeight: "1.0",
                        zIndex: "1",
                        marginBottom: "20px"
                    }}>
                    Find Suitable Jobs & Candidates Here! (Launching Soon)

                </Typography>

                <Typography component="span" sx={{
                    textAlign: "center",
                    display: "block",
                    margin: "3px 0px",
                    fontWeight: "500",
                    fontSize: { "lg": "23px", "md": "23px", "xs": "20px" },
                    maxWidth: "1069px"
                }}>
                    JobsYahan is where employers can get suitable candidates for frontline jobs
                </Typography>

            </Stack>

            <Box
                sx={{
                    position: "absolute",
                    top: "134px",
                    display: { "lg": "block", "md": "block", "xs": "none" }
                }}>
                <img src={window.location.origin + "/assets/Mg1.png"} alt="Mg1" />
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    right: "0px",
                    top: "134px"
                }}>
                <img src={window.location.origin + "/assets/Mg2.png"} alt="Mg2" />
            </Box>

            <Box sx={{ margin: { "lg": "100px 0px", "md": "0px", "xs": "0px" } }}>
                <SearchBar></SearchBar>
            </Box>

            <Stack direction="row" gap={1} alignItems="center" justifyContent="center">
                <Typography component="span" sx={{
                    fontSize: "20px",
                }}>
                    Scroll
                </Typography>
                <img src={window.location.origin + "/assets/g3.png"} alt="g3" />
            </Stack>

            <Box sx={{
                background: "#FFFFFF",
                boxShadow: "20px 5px 11px rgba(214, 214, 214, 0.25)",
                padding: { "lg": "50px 20px", "md": "50px 30px", "xs": "50px 30px" }
                // minHeight: "231px"
            }}>
                <Carousel responsive={responsive}>
                    {categoryData.map((item, index) => {
                        return (<>
                            <div>
                                <Stack gap={2} alignItems="center"
                                    sx={{ cursor: "pointer" }}
                                    key={item.id}
                                    onClick={() => setActiveHomeCategory(item && item.name)}>
                                    <Box

                                    >
                                        {activeHomeCategory === item.name ?
                                            <img src={window.location.origin + item.image2} alt="Group2" width="100%" height="100%" />
                                            :
                                            <img src={window.location.origin + item.image1} alt="Group" width="100%" height="100%" />}

                                    </Box>
                                    <Typography variant="div"
                                        sx={{
                                            color: activeHomeCategory === item.name ? "#FC9A7E" : "#2B1E44",
                                            fontSize: { "lg": "25px", "md": "18px", "xs": "16px" },
                                        }}>
                                        {item && item.Text}

                                    </Typography>

                                </Stack>
                            </div>
                        </>)
                    })}
                </Carousel>
                {/* <Stack direction="row" gap={2} alignItems="center" justifyContent={{ "lg": "space-between", "md": "center", "xs": "center" }}
                    sx={{
                        padding: { "lg": "50px 100px", md: "20px", "xs": "20px" },
                        flexWrap: "wrap"
                    }}>
                    {
                        categoryData.map((item) => {
                            return (<>
                                <Stack gap={2} alignItems="center"
                                    sx={{ cursor: "pointer" }}
                                    key={item.id}
                                    onClick={() => setActiveHomeCategory(item && item.name)}>
                                    <Box
                                    >
                                        {activeHomeCategory === item.name ?
                                            <img src={window.location.origin + item.image2} alt="Group2" />
                                            :
                                            <img src={window.location.origin + item.image1} alt="Group" />}

                                    </Box>
                                    <Typography variant="div"
                                        sx={{
                                            color: activeHomeCategory === item.name ? "#FC9A7E" : "#2B1E44",
                                            fontSize: "25px",
                                        }}>
                                        {item && item.Text}

                                    </Typography>

                                </Stack>
                            </>)
                        })
                    }
                </Stack> */}
            </Box>
            <Stack
                direction="row"
                alignItems="center"
                justifyContent="center" gap={3}
                sx={{
                    maxWidth: "1565px",
                    padding: { "lg": "50px 20px", md: "20px", "xs": "20px" },
                    background: "#FFFFFF",
                    boxShadow: "0px 4px 4px rgba(204, 204, 204, 0.25)",
                    borderRadius: "0px 0px 101px 0px",
                    flexWrap: "wrap"
                }}>
                {
                    activeHomeCategory === "supply_chain" && supply_chain.map((item, index) => {
                        return (<>
                            <div key={index}>
                                <img src={window.location.origin + item.value} alt={"item-" + index} />
                            </div>
                        </>)
                    })
                }

                {
                    activeHomeCategory === "service_jobs" && service_jobs.map((item, index) => {
                        return (<>
                            <div key={index}>
                                <img src={window.location.origin + item.value} alt={"item-" + index} />
                            </div>
                        </>)
                    })
                }

                {

                    activeHomeCategory === "digital" && digital.map((item, index) => {
                        return (<>
                            <div key={index}>
                                <img src={window.location.origin + item.value} alt={"item-" + index} />
                            </div>
                        </>)
                    })
                }

                {

                    activeHomeCategory === "marketing" && marketing.map((item, index) => {
                        return (<>
                            <div key={index}>
                                <img src={window.location.origin + item.value} alt={"item-" + index} />
                            </div>
                        </>)
                    })
                }
                {

                    activeHomeCategory === "sales" && sales.map((item, index) => {
                        return (<>
                            <div key={index}>
                                <img src={window.location.origin + item.value} alt={"item-" + index} />
                            </div>
                        </>)
                    })
                }


            </Stack>



        </Box>

    </>)
}

export default HomeSection;