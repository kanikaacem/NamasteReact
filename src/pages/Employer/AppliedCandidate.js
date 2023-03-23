import { postRequest } from "../../utils/ApiRequests";
import { JobDescriptionURL, GetCandidateOnParticularJob } from "../../utils/ApiUrls";

import { Box, Stack, Typography } from "@mui/material";
import CandidateComponent from "../../ThemeComponent/Common/CandidateComponent";
import ChatComponent from "../../ThemeComponent/Common/ChatComponent";
import SocialMedia from "../../ThemeComponent/Common/SocialMedia";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const AppliedCandidate = () => {
    const [jobData, setJobData] = useState([]);
    const [jobCanData, setJobCanData] = useState([]);
    const { id } = useParams();
    useEffect(() => {

        const getCandidateOnJob = async () => {
            let response = await postRequest(GetCandidateOnParticularJob + id);
            if (response.status === "1") {
                console.log(response.data)
                setJobCanData(response.data);
            }


        }

        const getJobDescription = async () => {
            let response = await postRequest(JobDescriptionURL + "?jobid=" + id);
            if (response.status === '1') setJobData(response.data);

        }

        getCandidateOnJob();
        getJobDescription();
    }, [id])
    return (<>

        <Box className="AppliedCandidatePage"
            sx={{
                minHeight: "100vh"
            }}>
            <Stack direction="row" gap={2} className="AppliedCandidatePageWrapper" sx={{
                padding: {
                    "lg": "50px 20px", "md": "0px", "xs": "0px"
                }
            }}>
                <Box sx={{
                    width: {
                        "lg":
                            `calc(100vw - 451px)`, "md": "100%", "xs": "100%",
                        padding: "20px"
                    }
                }}>
                    <Stack direction="row" justifyContent="space-between">
                        <Box>
                            <Typography component="div" sx={{ fontSize: "26px", color: "#4E3A67", fontWeight: "700" }}>
                                {jobData && jobData.job_title ? jobData.job_title : " "}
                            </Typography>
                            <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67" }}>
                                {jobData && jobData.location_state ? jobData.location_state + "  " : " "}
                                {jobData && jobData.candidate_experience ?
                                    "," + jobData.candidate_experience.min_age + " - " + jobData.candidate_experience.max_age + "Yrs" : " "}
                                |  Job Code: {id}
                            </Typography>
                        </Box>
                    </Stack>

                    <Stack direction="row" gap={2}

                        sx={{
                            margin: "20px 0px"
                        }}>

                        <Typography component="div" sx={{
                            fontSize: "26px", color: "#FC9A7E", fontWeight: "700"
                        }}>
                            Applications({jobCanData.length})
                        </Typography>

                    </Stack>


                    <hr sx={{
                        border: "1px solid #E1D4F2"

                    }}></hr>

                    <Stack className="Candidates" direction="column" gap={2} >
                        {jobCanData && jobCanData.map((item) => {
                            return (<>
                                <CandidateComponent CandidateData={item.candidate}
                                    AppliedDate={parseInt(item.candidateapplieddate)}
                                    CandidateStatus={item.candidatestatus}
                                    jobId={jobData._id}
                                />
                            </>)
                        })}

                    </Stack>

                </Box>
                <Box

                    sx={{
                        padding: "20px",
                        display: { "lg": "block", "md": "none", "xs": "none" }
                    }}>
                    <ChatComponent />

                    <Stack direction="column"
                        sx={{
                            minHeight: "396px",
                            background: "#FFFFFF",
                            border: " 1px solid #E1D4F2",
                            borderRadius: "19px",
                            width: "100%",
                            marginTop: "20px"
                        }}>
                        <Stack sx={{
                            padding: "15px",
                            height: "150px",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Typography component="div" sx={{ fontSize: "16px", color: "#4E3A67", fontWeight: "600" }}>
                                Become a JobsYahan certified Recruiter
                            </Typography>

                            <Box sx={{ cursor: "pointer" }}
                                onClick={() => window.location.href = window.location.origin}>
                                <Typography component="span"
                                    sx={{
                                        fontSize: "50px",
                                        fontWeight: "600",
                                        color: "#4E3A67",
                                        fontFamily: "Work Sans, sans-serif"
                                    }}>
                                    Jobs
                                </Typography>
                                <Typography component="span"
                                    sx={{
                                        fontSize: "50px",
                                        color: "#4E3A67",
                                        fontFamily: "Work Sans, sans-serif"
                                    }}>
                                    Yahan
                                </Typography>
                            </Box>

                            <Stack direction="row" alignItems="center" justifyContent="center">
                                <Typography component="div" sx={{
                                    fontSize: "16px", color: "#FC9A7E", fontWeight: "600"
                                }}>
                                    Read More
                                </Typography>
                                <img height="16px" src={window.location.origin + "/assets/RightArrow.png"} alt="RightArrow" />
                            </Stack>
                        </Stack>
                        <Stack
                            direction="column"
                            gap={2}
                            sx={{
                                minheight: "277px",
                                background: "#F7F0FF",
                                border: "1px solid #E1D4F2",
                                borderRadius: "0px 0px 14px 14px",
                                padding: "20px",
                                height: "200px",

                            }}>
                            <Box>
                                <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67", fontWeight: "600" }}>
                                    For Sales Enquiries
                                </Typography>

                                <Typography component="div" sx={{ fontSize: "16px", color: "#4E3A67" }}>
                                    Call On: 1800-103-7344
                                </Typography>
                                <Typography component="div" sx={{ fontSize: "16px", color: "#4E3A67" }}>
                                    ( Toll Free: 9:30 AM to 6:30 PM)
                                </Typography>
                            </Box>

                            <Box>
                                <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67", fontWeight: "600" }}>
                                    Socials
                                </Typography>

                                <Typography component="div" sx={{ fontSize: "16px", color: "#4E3A67" }}>
                                    jobsyahan@gmail.com
                                </Typography>

                                <Box sx={{ margin: "10px 0px" }}>
                                    <SocialMedia />
                                </Box>
                            </Box>

                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Box >
    </>)
}
export default AppliedCandidate;