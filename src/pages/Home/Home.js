import { GetUserInformation } from "../../utils/ApiUrls";
import { getRequestWithToken } from "../../utils/ApiRequests";

import { Box } from "@mui/material";
import { useSelector } from "react-redux";

/* Site Header */
import HeaderSec from "../../ThemeComponent/Common/HeaderSec";
import JobCategory from "./Component/JobCategory";
import AboutUs from "./Component/AboutUs";
import WhyJobYahan from "./Component/WhyJobYahan";
import Reviews from "./Component/Reviews";
import HomeSection from './Component/HomeSection';
import Footer from "../../ThemeComponent/Common/Footer";


import { Navigate } from "react-router-dom";
import "./Home.css";
import { useState, useEffect } from "react";

function Home() {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const [user, setUser] = useState({});
    const [dataLoaded, setDataLoaded] = useState(false);
    useEffect(() => {
        const getLoginUserDetail = async () => {
            let response = await getRequestWithToken(GetUserInformation);
            if (response.status === '1') {
                setUser(response.data);
                setDataLoaded(true);

            }
        }
        isLoggedIn && getLoginUserDetail();
    }, [])

    return (<>
        {isLoggedIn == 'true' && user && user.employer_type === "employer" && <Navigate to="/employer-dashboard"></Navigate>}
        {console.log(user)}
        <Box sx={{
            padding: "20px 40px",
            background: "#FAFAFA",
            position: "sticky",
            top: 0,
            zIndex: "3387"
        }}>
            <HeaderSec
                color="black"
                border="2px solid #8E8E8E"
                buttonText="Employer login"
                background="#FAFAFA"
                userType={user.type} />
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