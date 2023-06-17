import { getRequest } from "../../utils/ApiRequests";
import { Box, Stack, Container, Typography, Link, Breadcrumbs } from "@mui/material";
import { stackStyles, tagStyles } from "../../utils/Styles";
import PageTopSection from "../Common/PageTopSection";
import ApplyForJobButton from "../Common/ApplyForJobButton";
import { useLocation } from "react-router-dom";
import { LinkStyles } from "../../utils/Styles";
import Footer from "../../ThemeComponent/Common/Footer";
import { replaceUnderscore } from "../../utils/function";
import { useState, useEffect } from "react";
import moment from 'moment';
import ShareJob from "../Common/ShareJob";

const JobDescription = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    const [jobDescription, setJobDescription] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const api_url = process.env.REACT_APP_GET_JOB_ITEMS + "?jobid=" + id; // Replace with your .env variable name
                const data = await getRequest(api_url);
                setJobDescription(data.data[0])
            } catch (error) {
                // Handle the error
                console.error("Fetch error:", error);
            }
        };
        fetchData();
    }, [id])

    const breadcrumbs = [
        <Link underline="hover" sx={LinkStyles} key="1" color="inherit" href="/" >
            Home
        </Link>,
        <Link underline="hover" sx={LinkStyles} key="2" color="inherit" href="/job-listing" >
            Posted Job
        </Link>,
        <Link
            sx={LinkStyles}
            underline="hover"
            key="3"
            color="#FF671F"
            fontWeight="600"
        >
            Job Detail
        </Link>
    ];

    const SectionSeperator = () => {
        return (<hr style={{
            width: "100%",
            border: " 0.2px solid #EAEAEA",
            margin: "5px 0px"
        }}></hr>)
    }

    return (
        <Box className="JobDescriptionPage" sx={{
            height: "100vh",
        }}>
            <PageTopSection showBackButton={true} />

            <Box className="WebsiteBreadcrumb" sx={{
                padding: {
                    "xs": "10px", "sm": "10px",
                    "md": "10px 100px", "lg": "10px 100px", "xl": "10px 100px"
                }
            }}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Box>

            <Container sx={{
                padding: "0px", maxWidth: '1800px', minHeight: {
                    "xs": "fit-content", "sm": "fit-content", "md": "623px", "lg": "623px", "xl": "623px"
                }
            }} maxWidth={false}>
                <Box className="jobDescriptionSection" sx={{
                    background: { "xs": "#F2E4DB", "sm": "#F2E4DB", "md": "#ffffff", "lg": "#ffffff", "xl": "#ffffff" },
                    padding: "20px"

                }}>
                    <Stack className="jobDescription" direction="column" gap={1} sx={{
                        width: "100%",
                        MinHeight: "302px",
                        background: "#FFFFFF",
                        boxShadow: "0px 2px 14px rgba(191, 191, 191, 0.25)",
                        borderRadius: "6px",
                        boxSizing: "border-box",
                        padding: "20px",
                        cursor: "pointer"
                    }}>

                        <Stack direction="row" justifyContent="space-between">
                            <Typography sx={{ ...stackStyles, fontSize: { xs: '1.1rem', sm: '1.5rem', md: '1.5rem', lg: '1.5rem', xl: '1.5rem' }, fontWeight: '600' }}>
                                {jobDescription?.jobRole}
                            </Typography>
                            <Stack className="JobTimeLine" direction="row" alignItems="center" gap={1}>
                                <Box sx={{ width: "10px" }}>
                                    <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/timeline.png" alt="jobTimeline" width="100%" height="100%" />
                                </Box>
                                <Typography sx={{ ...stackStyles, color: '#615F5F', fontWeight: '500' }}>
                                    {jobDescription && moment(jobDescription.createdAt).fromNow()}
                                </Typography>
                            </Stack>

                        </Stack>

                        <Typography sx={stackStyles}>
                            {jobDescription?.jobDepartment}
                        </Typography>

                        <Typography sx={stackStyles}>
                            {`${jobDescription?.inhandSalaryPermonth?.currency} ${jobDescription?.inhandSalaryPermonth?.minSalary} - ${jobDescription?.inhandSalaryPermonth?.maxSalary}`}

                        </Typography>

                        <Stack direction="row" gap={2} sx={{
                            flexWrap: "wrap"
                        }}>
                            {jobDescription?.state && <Stack direction="row" gap={1}
                                sx={tagStyles}>
                                <Box>
                                    <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/location.png" alt="Location"></img>
                                </Box>
                                <Typography sx={stackStyles}>
                                    {jobDescription?.state}
                                </Typography>

                            </Stack>}
                            {jobDescription?.qualification && <Stack direction="row" gap={1}
                                sx={tagStyles}>
                                <Box>
                                    <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/education.png" alt="Location"></img>
                                </Box>

                                <Typography sx={stackStyles}>
                                    {jobDescription && replaceUnderscore(jobDescription.qualification)}
                                </Typography>

                            </Stack>}
                        </Stack>

                        <SectionSeperator />

                        <Stack direction="row" gap={2}>
                            <ApplyForJobButton jobId={id} />
                            <ShareJob jobId={id} jobRole={jobDescription?.jobRole}
                                jobDescription={jobDescription?.jobDescriptions} 
                                />
                           
                        </Stack>

                        <SectionSeperator />

                        {jobDescription?.jobDescription && <>
                            <Stack direction="column" gap={1}>
                                <Typography sx={{
                                    fontSize: { "xs": "1rem", "sm": "1rem", "md": "1.3rem", "lg": "1.3rem", "xl": "1.3rem" },
                                    fontFamily: "Poppins",
                                    fontWeight: "600",
                                    color: "#000000"
                                }}> Job Detail</Typography>
                                <Typography sx={{
                                    ...stackStyles,
                                    color: "#615F5F"
                                }}>
                                    {jobDescription?.jobDescription}
                                </Typography>
                            </Stack>
                            <SectionSeperator />

                        </>}


                        <Stack direction="column" gap={1}>
                            <Typography sx={{
                                fontSize: { "xs": "1rem", "sm": "1rem", "md": "1.3rem", "lg": "1.3rem", "xl": "1.3rem" },
                                fontFamily: "Poppins",
                                fontWeight: "600",
                                color: "#000000"
                            }}> Company Details</Typography>
                            <Box>
                                <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/kutumbhcare_logo.png" alt="company_logo" />
                            </Box>
                            <Typography sx={{
                                ...stackStyles,
                                color: "#615F5F"
                            }}>
                                {jobDescription?.jobAddress}
                            </Typography>
                        </Stack>

                    </Stack>
                </Box>

            </Container >
            <Footer />
        </Box >
    )
}

export default JobDescription;