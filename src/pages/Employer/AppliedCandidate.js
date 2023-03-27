import { postRequest } from "../../utils/ApiRequests";
import { JobDescriptionURL, GetCandidateOnParticularJob, getAllPostedJobs } from "../../utils/ApiUrls";

import {
    Box, Stack, Typography,
    Select, Pagination, MenuItem
} from "@mui/material";
import CandidateComponent from "../../ThemeComponent/Common/CandidateComponent";
import ChatComponent from "../../ThemeComponent/Common/ChatComponent";
import SocialMedia from "../../ThemeComponent/Common/SocialMedia";
import { CandidateFilter } from "../../utils/Data";

import ErrorPage from "../ErrorPage";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const AppliedCandidate = () => {
    const [jobData, setJobData] = useState([]);
    const [jobCanData, setJobCanData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(10);
    const [pageType, setPageType] = useState("");
    //All applied Candidate 
    const [jobFilter, setJobFilter] = useState(" ");
    const [canFilter, setCanFilter] = useState(" ");
    //Pagination 
    const IndexOfLastData = currentPage * dataPerPage;
    const IndexOfFirstData = IndexOfLastData - dataPerPage;
    const appliedCandidate = jobCanData.length > 0 && jobCanData.slice(IndexOfFirstData, IndexOfLastData);

    const { id } = useParams();

    useEffect(() => {
        setJobCanData([]);
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

        const getpostedjobs = async () => {
            try {
                let data = await postRequest(getAllPostedJobs);
                if (data.status === '0') {
                    setJobData([])
                } else {
                    setJobData(data.data);

                }
            } catch (err) {
                setJobData([]);

            }

        };

        id !== undefined ? (getCandidateOnJob() && getJobDescription()) : getpostedjobs();
        id !== undefined ? setPageType("ParticularJobCandidate") : setPageType("AllJobCandidate")
    }, [id])
    return (<>

        <Box className="AppliedCandidatePage"
            sx={{
                minHeight: "100vh"
            }}>
            <Stack direction="row" gap={2} className="AppliedCandidatePageWrapper" sx={{
                padding: {
                    "lg": "10px 20px", "md": "0px", "xs": "0px"
                }
            }}>
                <Box sx={{
                    width: {
                        "lg":
                            `calc(100vw - 451px)`, "md": "100%", "xs": "100%",
                        padding: "20px"
                    }
                }}>
                    {pageType === "ParticularJobCandidate" && <>
                        <Stack direction="row" justifyContent="space-between">
                            <Box>
                                <Typography component="div" sx={{ fontSize: "26px", color: "#4E3A67", fontWeight: "700" }}>
                                    {jobData && jobData.job_title ? jobData.job_title : " "}
                                </Typography>
                                <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67" }}>
                                    {jobData && jobData.location_state ? jobData.location_state + "  " : " "}
                                    {jobData && jobData.candidate_experience ?
                                        "," + jobData.candidate_experience.min_age + " - " + jobData.candidate_experience.max_age + "Yrs" : " "}
                                    {id && "|  Job Code:" + id}
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
                                {jobCanData.length > 0 && "Applications (" + jobCanData.length + ") "}
                            </Typography>

                        </Stack>


                        <hr sx={{
                            border: "1px solid #E1D4F2"

                        }}></hr>

                    </>}
                    {
                        pageType === "AllJobCandidate" && <>
                            <Stack direction="row" gap={3}>
                                <Select
                                    variant="standard"
                                    labelId="demo-simple-select-label"
                                    name="role"
                                    value={canFilter}
                                    label="role"
                                    onChange={(event) => {
                                        setCanFilter(event.target.value);
                                    }}
                                    sx={{ width: "200px", display: "block", boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                                    disableUnderline
                                >
                                    <MenuItem value=" ">All Candidates</MenuItem>
                                    {CandidateFilter.map((item) =>
                                        <MenuItem value={item.value} key={item.id}>{item.name}</MenuItem>
                                    )}
                                </Select>

                                <Select
                                    variant="standard"
                                    labelId="demo-simple-select-label"
                                    name="role"
                                    value={jobFilter}
                                    label="role"
                                    onChange={(event) => {
                                        setJobFilter(event.target.value);
                                    }}
                                    sx={{ width: "350px", display: "block", boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                                    disableUnderline
                                >
                                    <MenuItem value=" ">All Jobs</MenuItem>
                                    {jobData.length > 0 && jobData && jobData.map((item) =>
                                        <MenuItem value={item._id} key={item._id}>{item.job_title}</MenuItem>
                                    )}
                                </Select>

                            </Stack>
                        </>
                    }

                    <Stack className="Candidates" direction="column" gap={2} >
                        {jobCanData && jobCanData.length <= 0 && <>

                            <ErrorPage errorMessage="There is no data Present" />
                        </>}
                        {jobCanData && jobCanData.length > 0 && appliedCandidate.map((item) => {
                            return (<>
                                <CandidateComponent CandidateData={item.candidate}
                                    AppliedDate={parseInt(item.candidateapplieddate)}
                                    CandidateStatus={item.candidatestatus}
                                    jobId={jobData._id}
                                />
                            </>)
                        })}

                        {jobCanData && jobCanData.length > 0 &&
                            <Box >
                                <Pagination count={jobCanData && Math.ceil(jobCanData.length / dataPerPage)} page={currentPage} onChange={(event, value) => setCurrentPage(value)} />
                            </Box>
                        }

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