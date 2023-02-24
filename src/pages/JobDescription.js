import { Box } from "@mui/material";

import { JobDescriptionURL } from '../utils/ApiUrls';
import { postRequest } from "../utils/ApiRequests";

import { useParams, useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import JobDescriptionComponent from "../ThemeComponent/JobDescriptionComponent";

const JobDescription = () => {
    const { id } = useParams();
    const user = useOutletContext();
    const [data, setdata] = useState("");
    const [company, setcompany] = useState("");
    const [alreadyApplied, setAlreadyApplied] = useState(false);

    const [savedJobs, setsavedJobs] = useState(false);
    const [appliedJobs, setappliedJobs] = useState(false);
    const [unsavedJobs, setunsavedJobs] = useState(false);

    const api_url = useSelector(state => state.api_url);

    const JobAction = async (jobId, jobAction) => {
        let url = "";
        if (jobAction == "apply") url = api_url + "/api/job/applyforjob";
        else if (jobAction == "save") url = api_url + "/api/job/savejob";
        else if (jobAction == "unsave") url = api_url + "/api/job/unsavejob";

        let response = await fetch(url, {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                userid: user._id,
                jobid: jobId

            }),
        })
        if (response.ok) {
            response = await response.json();
            console.log(response);
            if (jobAction == "apply") setappliedJobs(true);
            if (jobAction == "save") setsavedJobs(true);
            if (jobAction == "unsave") setunsavedJobs(true);


        }

    }

    useEffect(() => {
        let JobFormData = new FormData();
        JobFormData = {

            jobid: id

        }
        // console.log(id);
        const getJobDescription = async () => {
            let response = await postRequest(JobDescriptionURL, JobFormData);
            if (response.status === '1')
                setdata(response.data);

        }


        getJobDescription();
        // getSavedAppliedJobs();



    }, []);

    const handleClose = (event) => {
        setsavedJobs(false);
        setappliedJobs(false);
    };

    return (<>
        <Box className="JobDescriptionPage"
            sx={{
                minHeight: "100vh"
            }}>

            <Box className="JobDescriptionContent"
                sx={{ padding: "100px 20px" }}>


                <Box
                    sx={{
                        display: { "lg": "block", "md": "none", "xs": "none" },
                        position: "absolute",
                        height: "320.38px",
                        left: "0px",
                        transform: " matrix(-1, 0, 0, 1, 0, 0)",
                        zIndex: "1"
                    }}>
                    <img src={window.location.origin + "/assets/About1.png"} alt="About1" />
                </Box>
                <Box sx={{
                    display: { "lg": "block", "md": "none", "xs": "none" },
                    position: "absolute",
                    height: "380px",
                    top: "805px",
                    right: "0px",
                    zIndex: "1"
                }}>
                    <img src={window.location.origin + "/assets/About2.png"} alt="About2" />
                </Box>

                <Box sx={{
                    maxWidth: "1263px",
                    margin: "0 auto"
                }}>
                    <JobDescriptionComponent userType={user && user.employer_type} data={data} />

                </Box>

            </Box>
        </Box>

    </>)
}

export default JobDescription;