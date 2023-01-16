import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

/* Site Header */
import Header from "../../ThemeComponent/Common/Header";

import RecommendedJobs from "./Component/RecommendedJobs";
import AboutUs from "./Component/AboutUs";
import WhyJobYahan from "./Component/WhyJobYahan";
import Reviews from "./Component/Reviews";
import Filter from "../../ThemeComponent/Filter";
import HomeSection from './Component/HomeSection';
import Footer from "../../ThemeComponent/Common/Footer";

import "./Home.css";

import { useState } from "react"
import { gridColumnsTotalWidthSelector } from "@mui/x-data-grid";
function Home() {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const user = localStorage.user && JSON.parse(localStorage.user);
    const searchString = 'noida sector 63';
    const apiKey = 'AIzaSyColW-GzaMXQIFpoZPpLZ6DTQjyfoipU6Y';
    useState(() => {


        const data = async () => {
            let response = await fetch(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${searchString}&key=${apiKey}`,
                {
                    method: "GET",
                    headers: {
                        'Access-Control-Allow-Origin': "http://localhost",
                        'Content-Type': 'application/json; charset=UTF-8'
                    }
                })

            console.log(response);
        }


        data();
    })
    return (<>
        {isLoggedIn == 'true' && (user && user.type == 'employer') && <Navigate to="/employer-dashboard"></Navigate>}
        <Header />
        <HomeSection />

        {/* <Box sx={{
            padding: { lg: "20px 50px", md: "20px", xs: "20px" },
            background: "#D9D9D9"

        }}>
            <Filter />
        </Box> */}

        {/* <RecommendedJobs /> */}
        <AboutUs />
        <WhyJobYahan />
        <Reviews />
        <Footer />

    </>)
}
export default Home;