import SearchBar from "../../Component/SearchBar";
import JobCategory from "./Component/JobCategory";
import RecommendJobs from "./Component/RecommendJobs";
import AboutUs from "./Component/AboutUs";
import OurPartners from "./Component/OurPartners";
import WhyJobYahan from "./Component/WhyJobYahan";
import Reviews from "./Component/Reviews";
import Filter from "../../Component/Filter";
import { useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';

import "./Home.css";

function Home() {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const user = localStorage.user && JSON.parse(localStorage.user);

    return (<>
        {isLoggedIn == 'true' && user.type == 'employer' && <Navigate to="/employer-dashboard"></Navigate>}
        {/* {isLoggedIn == 'true' && <Navigate to="/employer-dashboard"></Navigate>} */}

        <div className="homeFSec" style={{ background: "url('./assets/Background.png') no-repeat", backgroundPosition: 'bottom' }}>
            <h1 style={{ textAlign: 'center', margin: '0 auto', color: '#2B1E44' }}>Accelerate your job search with premium services</h1>
            <span style={{ textAlign: 'center', display: 'block', margin: '3px 0px', fontWeight: '500' }}>
                Services to help you get hired, faster: from preparing your CV, getting recruiter attention, finding the right jobs, and more!
            </span>
            <SearchBar></SearchBar>
            <JobCategory></JobCategory>
        </div>
        <Filter></Filter>
        <RecommendJobs></RecommendJobs>
        {/* <OurPartners></OurPartners> */}
        <AboutUs></AboutUs>
        <WhyJobYahan></WhyJobYahan>
        <Reviews></Reviews>
    </>)
}
export default Home;