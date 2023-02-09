import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

/* Site Header */
import HeaderSec from "../../ThemeComponent/Common/HeaderSec";
import JobCategory from "./Component/JobCategory";
import AboutUs from "./Component/AboutUs";
import WhyJobYahan from "./Component/WhyJobYahan";
import Reviews from "./Component/Reviews";
import HomeSection from './Component/HomeSection';
import Footer from "../../ThemeComponent/Common/Footer";

import "./Home.css";

import { useState } from "react"
function Home() {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const user = localStorage.user && JSON.parse(localStorage.user);
    return (<>
        {isLoggedIn == 'true' && (user && user.employer_type == 'employer') && <Navigate to="/employer-dashboard"></Navigate>}
        <Box sx={{ padding: "20px 40px" }}>
            <HeaderSec
                color="black"
                border="2px solid #8E8E8E"
                buttonText="Employer login" />
        </Box>
        <HomeSection />
        <JobCategory />
        <WhyJobYahan />
        <AboutUs />
        <Reviews />
        <Footer />

    </>)
}
export default Home;