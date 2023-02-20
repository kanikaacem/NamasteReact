import parse from 'html-react-parser';

import { Box, Stack, Typography } from "@mui/material";

import { ThemeButtonType2 } from "../utils/Theme";
const JobDescriptionComponent = ({ userType, data }) => {
    console.log(data);
    return (<>
        <Stack
            direction="column"
            gap={3}
            sx={{
                background: "#FFFFFF",
                border: " 1px solid #E1D4F2",
                borderRadius: "19px",
                padding: "20px"
            }}>

            <Stack direction="row" gap={2}>
                <img src={window.location.origin + "/assets/ActivelyHiring.png"} alt="Active Hiring" />
                <Typography component="box" sx={{
                    fontSize: "16ox",
                    fontFamily: "Montserrat",
                    color: "#4E3A67"
                }}>
                    Active Hiring
                </Typography>
            </Stack>

            <Stack direction="column" gap={1} sx={{ margin: "30px 0px" }}>
                <Typography component="div" sx={{ fontSize: "26px", fontWeight: "600", color: "#4E3A67" }}>
                    {data && data.job_title ? data.job_title : "Linux Solution Engineer"}
                </Typography>

                <Typography component="div" sx={{ fontSize: "20px", fontWeight: "600", color: "#BDB5C7" }}>
                    {data && data.company_name ? data.company_name : "Vays Infotech Private Limited"}
                </Typography>
            </Stack>


            <Stack direction="row" gap={2} sx={{ flexWrap: "wrap" }}>
                <Stack direction="row" sx={{
                    background: "#FFFFFF",
                    border: "1px solid #E2D7F0",
                    borderRadius: "11px",
                    padding: "15px",
                    gap: "5px",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Box>
                        <img src={window.location.origin + "/assets/RJ.png"} alt="RJ"></img>
                    </Box>
                    <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px" }}>
                        {data && data.city ? data.city.toString() : " Indiranagar"}
                    </Typography>
                </Stack>
                {/* <Stack direction="row" sx={{
                    background: "#FFFFFF",
                    border: "1px solid #E2D7F0",
                    borderRadius: "11px",
                    padding: "15px",
                    gap: "5px",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Box>
                        <img src={window.location.origin + "/assets/RJ1.png"} alt="RJ1"></img>
                    </Box>
                    <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px" }}>
                        5 Openings
                    </Typography>
                </Stack> */}
                <Stack direction="row" sx={{
                    background: "#FFFFFF",
                    border: "1px solid #E2D7F0",
                    borderRadius: "11px",
                    padding: "15px",
                    gap: "5px",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Box>
                        <img src={window.location.origin + "/assets/RJ2.png"} alt="RJ2"></img>
                    </Box>
                    <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px" }}>
                        Min. {data && data.candidate_experience && data.candidate_experience.min_age ? data.candidate_experience.min_age : "  3 "} Years
                    </Typography>
                </Stack>
                <Stack direction="row" sx={{
                    background: "#FFFFFF",
                    border: "1px solid #E2D7F0",
                    borderRadius: "11px",
                    padding: "15px",
                    gap: "5px",
                    alignItems: "center",
                    justifyContent: "center"
                }}>
                    <Box>
                        <img src={window.location.origin + "/assets/RJ3.png"} alt="RJ3"></img>
                    </Box>
                    <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px" }}>
                        {data && data.prefered_degree ? data.prefered_degree.toString() : "Graduate"}
                    </Typography>
                </Stack>
            </Stack>

            <Stack direction="row" justifyContent="space-between" sx={{ margin: "20px 0px" }}>
                {/* <Stack direction="row" gap={2} alignItems="center" justifyContent="center" >
                    <img height="20px" src={window.location.origin + "/assets/AppliedCandidate.png"} alt="Applied Candidate" />
                    <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px" }}>
                        50 Applicants
                    </Typography>
                </Stack> */}

                {userType !== "employer" && <>
                    <Stack direction="row" gap={2} alignItems="center" justifyContent="center" >
                        <img height="20px" src={window.location.origin + "/assets/BookMark.png"} alt="Book Mark" />
                        <img height="20px" src={window.location.origin + "/assets/Share.png"} alt="Share" />
                    </Stack>
                </>}

            </Stack>

            <Typography component="div" sx={{ fontSize: "26px", fontWeight: "600", color: "#4E3A67" }}>
                {data && data.company_name ? data.company_name : "Vays Infotech Private Limited"}
            </Typography>

            <Stack direction="row" gap={2} sx={{ color: "#EB6F4B" }} alignItems="center" >
                <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px" }}>
                    Website
                </Typography>
                <img src={window.location.origin + "/assets/Website.png"} height="20px" alt="Website" />
            </Stack>

            <Typography component="div" sx={{ fontSize: "20px", lineHeight: '1.5' }}>
                {data && data.short_description ? parse(data.short_description) :
                    " Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type. And scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
            </Typography>

            <Box sx={{
                background: "#E9DFF7",
                padding: "20px",
                borderRadius: "11px"
            }}>
                <Typography component="div" sx={{ fontSize: "20px", fontWeight: "600", color: "#4E3A67" }}>
                    Activity On JobsYahan
                </Typography>

                <Stack direction="row" justifyContent="space-between" >
                    <Stack direction="row" gap={2} alignItems="center">
                        <img src={window.location.origin + "/assets/Timeline.png"} height="20px" alt="Timeline" />
                        <Typography component="div" sx={{ fontSize: "20px", fontWeight: "600", color: "#4E3A67" }}>
                            Hiring since January 2022
                        </Typography>
                    </Stack>
                    <Stack direction="row" gap={2} alignItems="center">
                        <img src={window.location.origin + "/assets/Suitcase.png"} height="20px" alt="Suitcase" />
                        <Typography component="div" sx={{ fontSize: "20px", fontWeight: "600", color: "#4E3A67" }}>
                            16 Job Opportunities Posted
                        </Typography>
                    </Stack>

                </Stack>

            </Box>

            <Typography component="div" sx={{ fontSize: "26px", fontWeight: "600", color: "#4E3A67" }}>
                About the Job
            </Typography>

            <Typography component="div" sx={{ fontSize: "20px", lineHeight: '1.5' }}>
                {data && data.job_responsibilty ? data.job_responsibilty :
                    " Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type. And scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."}
            </Typography>

            <Typography component="div" sx={{ fontSize: "26px", fontWeight: "600", color: "#4E3A67" }}>
                Skill(s) Required
            </Typography>

            <Stack direction="row" gap={2} sx={{ flexWrap: "wrap" }}>

                {data && data.skills && data.skills.map((item) => {
                    return (<>
                        <Stack direction="row" sx={{
                            background: "#FFFFFF",
                            border: "1px solid #E2D7F0",
                            borderRadius: "11px",
                            padding: "15px",
                            gap: "5px",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>

                            <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px" }}>
                                {item}
                            </Typography>
                        </Stack>
                    </>)
                })}


                {/* <Stack direction="row" sx={{
                    background: "#FFFFFF",
                    border: "1px solid #E2D7F0",
                    borderRadius: "11px",
                    padding: "15px",
                    gap: "5px",
                    alignItems: "center",
                    justifyContent: "center"
                }}>

                    <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px" }}>
                        Kotlin
                    </Typography>
                </Stack> */}

            </Stack>

            {userType !== "employer" && <ThemeButtonType2 type="button" > Apply Now</ThemeButtonType2>}


        </Stack>
    </>)
}

export default JobDescriptionComponent;