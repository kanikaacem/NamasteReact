import { Box, Stack, Typography } from '@mui/material';
import SearchBar from "../../../ThemeComponent/SearchBar";

const HomeSection = () => {
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
                        fontSize: '96px',
                        maxWidth: "1300px",
                        lineHeight: "1.0",
                        zIndex: "1"
                    }}>
                    No.1 Job Portal for Employers and Employees

                </Typography>
                <Typography component="span" sx={{
                    textAlign: "center",
                    display: "block",
                    margin: "3px 0px",
                    fontWeight: "500",
                    fontSize: "24px",
                    maxWidth: "1069px"
                }}>
                    A portal where you as an employer can get people for all kinds of jobs - beauticians, delivery executives, etc.
                    As an employee too, choices are unlimited! All it takes is 2 minutes. Explore Now!

                </Typography>
            </Stack>
            {/* <Box
                sx={{
                    position: "absolute",
                    width: "1214px",
                    height: "31px",
                    left: "353px",
                    top: "187px",
                    background: "#FFD5C9"
                }}>

            </Box> */}
            <Box
                sx={{
                    position: "absolute",
                    top: "134px"
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