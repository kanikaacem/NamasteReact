import { Box, Button, Stack, Container, Typography, Link, Breadcrumbs } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { stackStyles, tagStyles, ApplyButtonStyles } from "../../utils/Styles";

// import { useParams, useOutletContext } from "react-router-dom";
// import { useEffect, useState } from "react";
import { LinkStyles } from "../../utils/Styles";
import Footer from "../../ThemeComponent/Common/Footer";

const JobDescription = () => {
    // const { id } = useParams();
    // const user = useOutletContext();
    // const [data, setdata] = useState("");
    // useEffect(() => {

    //     const getJobDescription = async () => {
    //         let response = await postRequest(JobDescriptionURL + "?jobid=" + id);
    //         if (response.status === '1')
    //             setdata(response.data);
    //     }


    //     getJobDescription();
    // }, [id]);

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
            margin: "20px 0px"
        }}></hr>)
    }
    const goBack = () => {
        window.history.back();
    }
    return (
        <Box className="JobDescriptionPage" sx={{
            height: "100vh",
        }}>
            <Stack className="JobDescriptionSection" direction="column" gap={2} sx={{
                padding: { "xs": "20px", "sm": "20px", "md": "20px 100px", "lg": "20px 100px", "xl": "20px 100px" },
                background: "#ffffff",
                webkitBoxShadow: "0px 6px 5px -3px rgba(208,208,208,1)",
                mozBoxShadow: "0px 6px 5px -3px rgba(208,208,208,1)",
                boxShadow: "0px 6px 5px -3px rgba(208,208,208,1)",
            }}>
                <ArrowBackIcon sx={{ cursor: "pointer" }} onClick={goBack} />
            </Stack>

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

            <Container sx={{ padding: "0px", maxWidth: '1800px' }} maxWidth={false}>
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
                                Assistant Nurse
                            </Typography>
                            <Stack className="JobTimeLine" direction="row" alignItems="center" gap={1}>
                                <Box sx={{ width: "10px" }}>
                                    <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/timeline.png" alt="jobTimeline" width="100%" height="100%" />
                                </Box>
                                <Typography sx={{ ...stackStyles, color: '#615F5F', fontWeight: '500' }}>
                                    1 day ago
                                </Typography>
                            </Stack>

                        </Stack>

                        <Typography sx={stackStyles}>
                            kutumbhhrcare
                        </Typography>

                        <Typography sx={stackStyles}>
                            Rs 10,000- Rs 20,999
                        </Typography>

                        <Stack direction="row" gap={2} sx={{
                            flexWrap: "wrap"
                        }}>
                            <Stack direction="row" gap={1}
                                sx={tagStyles}>
                                <Box>
                                    <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/location.png" alt="Location"></img>
                                </Box>
                                <Typography sx={stackStyles}>
                                    Noida
                                </Typography>

                            </Stack>

                            <Stack direction="row" gap={1}
                                sx={tagStyles}>
                                <Box>
                                    <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/profession.png" alt="Location"></img>
                                </Box>

                                <Typography sx={stackStyles}>
                                    Graduate
                                </Typography>

                            </Stack>

                            <Stack direction="row" gap={1}
                                sx={tagStyles}>
                                <Box>
                                    <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/education.png" alt="Location"></img>
                                </Box>

                                <Typography sx={stackStyles}>
                                    education
                                </Typography>

                            </Stack>
                        </Stack>

                        <SectionSeperator />

                        <Stack direction="row" gap={2}>
                            <Button variant="outlined" sx={ApplyButtonStyles}>Apply via Whatsapp</Button>

                            <Stack direction="row" gap={1} alignItems="center">
                                <Box>
                                    <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/Share.png" alt="Share" />
                                </Box>
                                <Typography sx={{
                                    ...stackStyles,
                                    color: "#FF671F"
                                }}>
                                    Share
                                </Typography>
                            </Stack>
                        </Stack>

                        <SectionSeperator />

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
                                It is a long established fact that a reader will be distracted by the
                                readable content of a page when looking at its layout. The point of using
                                Lorem Ipsum is that it has a more-or-less normal distribution of letters,
                                as pposed to using 'Content here, content here', making it look like readable
                                English. Many desktop publishing packages and web page editors now use Lorem
                                Ipsum as their default model text humour and the like).
                            </Typography>
                        </Stack>

                        <SectionSeperator />

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
                                Kutumbh Care Pvt Ltd, B 154, B Block, Sector 63, Noida, Uttar Pradesh 201301.
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