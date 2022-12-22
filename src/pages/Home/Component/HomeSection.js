import { Box, Stack, Typography } from '@mui/material';
import SearchBar from "../../../ThemeComponent/SearchBar";
import JobCategory from "./JobCategory";

const HomeSection = () => {
    return (<>
        <Box
            className="home-banner-section"
            sx={{
                // background: "url('./assets/home-banner.jpg') no-repeat",
                // backgroundPosition: "bottom",
                padding: "100px 0px",
                position: "relative",
                background: "#FAFAFA"

                // backgroundSize: "cover"
            }}

        >
            <Typography variant="h5" sx={{ color: "#2B1E44", textAlign: "center", fontWeight: "700", fontSize: '31px' }}>
                Accelerate your job search with premium services
            </Typography>
            <Typography component="span" sx={{ textAlign: "center", display: "block", margin: "3px 0px", fontWeight: "500" }}>
                Services to help you get hired, faster: from preparing your CV, getting recruiter attention,
                finding the right jobs, and more!
            </Typography>

            <SearchBar></SearchBar>

            <JobCategory></JobCategory>

            {/* <Box className="gradient-text"> Jobs</Box> */}
        </Box>
        {/* <div className="home-banner-section" style={{
            background: "url('./assets/home-banner.jpg') no-repeat",
            backgroundPosition: 'bottom',
            padding: '100px 0px',
            position: 'relative',
            backgroundSize: 'cover'
        }}> */}
        {/* <div className="row">
                <div className="hbs-right-section-wrapper">
                    <div className="hbs-right-section">
                        <div className="rs-title-small"> We Have
                            <span className="site-text-primary"> 208,000+</span>
                            Live Jobs
                        </div>

                        <div className="rs-title-large">
                            Find the <span className="site-text-primary" > job</span> that fits
                            your life
                        </div>

                        <div className="rs-description">Type your keyword, then click search to find your perfect job.</div>
                        <div className="Search-bar"></div>
                        <div className="Popular-Search">
                            <span> Popular Searches :</span>
                            <a href=""> Developer,</a>
                            <a href=""> Designer ,</a>
                            <a href=""> Architect ,</a>
                            <a href=""> Engineer</a> ....
                        </div>

                    </div>
                </div>
                <div className="hbs-left-section-wrapper"></div>
            </div> */}
        {/* <h1 style={{ textAlign: 'center', margin: '0 auto', color: '#2B1E44' }}>Accelerate your job search with premium services</h1>
            <span style={{ textAlign: 'center', display: 'block', margin: '3px 0px', fontWeight: '500' }}>
                Services to help you get hired, faster: from preparing your CV, getting recruiter attention, finding the right jobs, and more!
            </span>
            <SearchBar></SearchBar>
            <JobCategory></JobCategory>
            <div className="gradient-text"> Jobs</div>
        </div> */}
    </>)
}

export default HomeSection;