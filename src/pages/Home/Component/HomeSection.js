import { Box, Stack, Typography, Container, Drawer, List, ListItem, ListItemText } from '@mui/material';


import { categoryData, supply_chain, service_jobs, digital, marketing, sales } from "../../../utils/Data";
import { useState } from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import SearchBar from '../../../ThemeComponent/SearchBar';
import ReorderIcon from '@mui/icons-material/Reorder';
import CompanyLogo from '../../../ThemeComponent/Common/CompanyLogo';

import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const HomeSection = () => {

    const [activeHomeCategory, setActiveHomeCategory] = useState("supply_chain");
    const [openMenu, setOpenMenu] = useState(false);
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    const navigate = useNavigate();
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
        <Box sx={{
            display: { "xs": "block", "sm": "none", "md": "none", "lg": "none", "xl": "none" },
            padding: "5px"
        }}>
            <ReorderIcon onClick={() => setOpenMenu(true)} />
            <Drawer
                sx={{
                    display: { "xs": "block", "sm": "none", "md": "none", "lg": "none", "xl": "none" },
                    width: "50%",
                    padding: "10px",
                    zIndex: 478485

                }}
                open={openMenu}
                onClose={() => setOpenMenu(false)}
            >
                <CompanyLogo color="black" />
                <Box className='SideMenus' sx={{
                    marginTop: "20px"
                }}>
                    <List>
                        <ListItem key="Employeer Login" disablePadding >
                            <ListItemText primary="Employeer Login" onClick={() => navigate("/employer-login")} />
                        </ListItem>
                        {isLoggedIn ? <ListItem key="Candidate Login" disablePadding>
                            <ListItemText primary="Dashboard" onClick={() => navigate("/candidate-dashboard")} />
                        </ListItem> :
                            <ListItem key="Candidate Login" disablePadding>
                                <ListItemText primary="Candidate Login" onClick={() => navigate("/candidate-login")} />
                            </ListItem>
                        }

                        <ListItem key="About us" disablePadding>
                            <ListItemText primary="About us" onClick={() => navigate("/about-us")} />
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </Box>

        <Box
            className="home-banner-section"
            sx={{
                position: "relative",
                paddingTop: "50px",
                paddingBottom: "20px",
                position: "relative",
                background: "#FAFAFA"
            }}

        >


            <Stack alignItems="center" justifyContent="center">
                <Container>
                    <Typography variant="h1"
                        sx={{
                            color: "#2B1E44",
                            textAlign: "center",
                            fontWeight: "700",
                            fontSize: { "lg": '70px', "md": "70px", "xs": "32px" },
                            maxWidth: "1300px",
                            lineHeight: "1.0",
                            zIndex: "1",
                            marginBottom: "20px"
                        }}>
                        Find Suitable Jobs & Candidates Here!

                    </Typography>


                    <Typography component="span" sx={{
                        textAlign: "center",
                        display: "block",
                        margin: "3px 0px",
                        fontWeight: "500",
                        fontSize: { "lg": "23px", "md": "23px", "xs": "12px" },
                        maxWidth: "1069px"
                    }}>
                        JobsYahan is where employers can get suitable candidates for frontline jobs
                    </Typography>

                </Container>

            </Stack>

            <Box
                sx={{
                    position: "absolute",
                    top: "134px",
                    display: { "xs": "none", "sm": "block", "md": "block", "lg": "block", "xl": "block" }
                }}>
                <img src={window.location.origin + "/assets/Mg1.png"} alt="Mg1" />
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    right: "0px",
                    top: "134px",
                    display: { "xs": "none", "sm": "block", "md": "block", "lg": "block", "xl": "block" }
                }}>
                <img src={window.location.origin + "/assets/Mg2.png"} alt="Mg2" />
            </Box>

            <Box sx={{
                margin: { "xs": "50px 0px 50px 0px", "sm": "100px 0px", "md": "100px 0px", "lg": "100px 0px", "xl": "100px 0px" }
            }} >
                <SearchBar></SearchBar>
            </Box>


            <Stack direction="row" gap="5px" alignItems="center" justifyContent="center"
                sx={{ marginBottom: "10px" }}>
                <Typography component="span" sx={{
                    fontSize: { "xs": "10px", "sm": "20px", "md": "20px", "lg": "20px", "xl": "20px" },
                }}>
                    Scroll
                </Typography>
                <Box sx={{
                    width: { "xs": "8px", "sm": "14px", "md": "14px", "lg": "14px", "xl": '14px' },
                    position: "relative",
                    top: "-3px"
                }}>
                    <img src={window.location.origin + "/assets/g3.png"} alt="g3" width="100%" />
                </Box>
            </Stack>

            <Box className="JobCategoriesSection"
                sx={{
                    display: { "xs": "none", "sm": "block", "md": "block", "lg": "block", "xl": "block" }
                }}>
                <Box sx={{
                    background: "#FFFFFF",
                    boxShadow: "20px 5px 11px rgba(214, 214, 214, 0.25)",
                    padding: { "lg": "50px 20px", "md": "50px 30px", "xs": "50px 30px" }
                }}>
                    <Carousel responsive={responsive}>
                        {categoryData.map((item, index) => {
                            return (<>
                                <div key={index}>
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

                </Box>
                <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="flex-start" gap={3}
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
        </Box>




    </>)
}

export default HomeSection;