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

function Home() {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const user = localStorage.user && JSON.parse(localStorage.user);

    return (<>
        {isLoggedIn == 'true' && user.type == 'employer' && <Navigate to="/employer-dashboard"></Navigate>}
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