import { postRequest, getRequestWithToken } from "../utils/ApiRequests";
import { ApplyForJob } from "../utils/ApiUrls";
import parse from 'html-react-parser';

import { Box, Stack, Typography } from "@mui/material";

import { ThemeButtonType2 } from "../utils/Theme";

import { useState, useEffect } from "react";
import ThemeMessage from "./Common/ThemeMessage";
const JobDescriptionComponent = ({ userType, data }) => {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [cannotApply,setCannotApply] = useState(false);
    const [jobApplied, setJobApplied] = useState(false);
    const JobApplied = async () => {
        if (window.location.pathname === '/candidate-dashboard') {
            window.location.href = window.location.origin + '/candidate-dashboard/job-description/' + data._id
        }
        else {
            let formData = new FormData();
            formData = {
                jobid: data._id
            }
            let response = await postRequest(ApplyForJob, formData)
            if (response.status === '1') {
                setFormSubmitted(true)
                setJobApplied(true)
            }
            
            else{
                setCannotApply(true)
            }

        }

    }


    useEffect(() => {
        const IsjobApplied = async () => {
            let response = await getRequestWithToken("https://backend.jobsyahan.com/api/job/details?jobid=" + data._id);
            if (response.status === "1") {
                if (response.data[0].jobapply) {
                    setJobApplied(true)
                }
            }

        }
        IsjobApplied();
    }, [data])
    return (<>
        <ThemeMessage open={formSubmitted} setOpen={setFormSubmitted}
            message=" you applied for the job." type="success" />

        <ThemeMessage open={cannotApply} setOpen={setCannotApply}
            message="You need 50 % profile completed to apply for this job" type="error" />

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
                <Typography component="div" sx={{ fontSize: "26px", fontWeight: "600", color: "#4E3A67", textTransform: "capitalize" }}>
                    {data && data.job_title ? data.job_title : "Linux Solution Engineer"}
                </Typography>

                <Typography component="div" sx={{ fontSize: "20px", fontWeight: "600", color: "#BDB5C7" }}>
                    {data && data.company_name ? data.company_name : "Vays Infotech Private Limited"}
                </Typography>
            </Stack>


            <Stack direction="row" justifyContent="space-between" sx={{ flexWrap: "wrap" }} gap={2}>
                <Stack direction="row" gap={2} >
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
                        <img src={window.location.origin + "/assets/RJ1.png"} alt="RJ1"></img>
                    </Box>
                    <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px" }}>
                    {data && data.vacancy ? data.vacancy + " Openings" : "Not Mentioned"}                  
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
            </Stack>


            <Stack direction="row" justifyContent="space-between" sx={{ margin: "20px 0px" }}>
                <Box>
                    <Typography component="div" sx={{ fontSize: { "lg": "20px", "md": "16px", "xs": "16px" }, fontWeight: "500", color: "#9589A4", margin: "10px 0px" }}>
                        {data && data.applied_count > 0 ? data.applied_count : '0'} Applicants Applied
                    </Typography>
                </Box>
                {userType !== "employer" && <>
                    <Stack direction="row" gap={2} alignItems="center" justifyContent="center"
                        sx={{ cursor: "pointer" }}>
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
                    "Not mentioned"}
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
                            Hiring since {" "+new Date(data.createdAt).toLocaleDateString()}
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

            </Stack>

            {userType !== "employer" &&
                <ThemeButtonType2 onClick={() => {
                    if(!jobApplied) {
                        JobApplied();
                    }
                }}> {jobApplied ? "Applied" : "Apply Now"} </ThemeButtonType2>}


        </Stack>
    </>)
}

export default JobDescriptionComponent;