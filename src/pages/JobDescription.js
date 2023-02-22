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

        // const getSavedAppliedJobs = async () => {
        //     let response = await fetch(api_url + "/api/users/getuserbyid", {
        //         method: "POST",
        //         headers: {
        //             'Access-Control-Allow-Origin': '*',
        //             'Content-Type': 'application/json; charset=UTF-8'
        //         },
        //         body: JSON.stringify({
        //             userid: user._id

        //         }),
        //     })
        //     if (response.ok) {
        //         response = await response.json();
        //         // if (response.status == "1") setAlreadyApplied(true);
        //         console.log(response);

        //     }
        // }
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

                {/* <Box sx={{
                    background: "#FFFFFF",
                    maxWidth: "1263px",
                    margin: "0 auto",
                    border: "1px solid #E1D4F2",
                    borderRadius: "19px",
                    minHeight: "1663px",
                    padding: "60px",
                    position: "relative",
                    zIndex: "2"
                }}>






                </Box> */}

            </Box>
        </Box>
        {/* <Snackbar
            open={savedJobs}
            autoHideDuration={6000} onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                You successfully saved  this Job.
            </Alert>

        </Snackbar>
        <Snackbar
            open={appliedJobs}
            autoHideDuration={6000} onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                You successfully Applied for this Job.
            </Alert>

        </Snackbar>

        <Snackbar
            open={unsavedJobs}
            autoHideDuration={6000} onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                You successfully Unsaved this Job.
            </Alert>

        </Snackbar>
 */}

        {/* <Box
            className="jobDescriptionPage"
            id={company.id}
            sx={{
                minHeight: "100vh",
                background: "#e8f0f9"
            }}>
            <Container sx={{ height: "inherit", padding: "0px", maxWidth: "1400px !important" }}>
                <Stack direction="row" gap={3} sx={{
                    minHeight: "150px",
                    background: "#445578",
                    color: "#FFFFFF",
                    padding: "20px"
                }}>
                    <Box sx={{ width: "20%" }}>
                        <Box sx={{
                            background: "white",
                            height: "100px",
                            width: "100px",
                            margin: "70px auto"
                        }}>
                        </Box>
                    </Box>
                    <Box sx={{ width: "80%", padding: "50px 0px" }}>
                        <Typography component="h3" sx={{ fontSize: "30px", textTransform: "capitalize" }}>
                            {data && data.title} - {data && data.role.replaceAll("_", " ")}
                        </Typography>
                        <Typography component="span" sx={{
                            fontSize: "20px",
                            marginRight: "20px",
                            fontStyle: "italic",
                            textTransform: "capitalize"
                        }}>
                            {data && data.companyName ? data.companyName : "company Name"}
                        </Typography>
                        <Typography component="span" sx={{
                            fontSize: "20px",
                            marginRight: "20px",
                            fontStyle: "italic"
                        }}>
                            {data && data.location}
                        </Typography>
                        <Typography component="span" sx={{
                            fontSize: "20px",
                            marginRight: "20px",
                            fontStyle: "italic",
                            textTransform: "capitalize"
                        }}>
                            {data && data.experience} Years
                        </Typography>

                        <Box sx={{ margin: "20px 0px" }}>
                            {
                                data && data.skills.map((item) => {
                                    return (<>
                                        <span style={{
                                            border: '2px solid #838383',
                                            padding: '5px', borderRadius: '10px',
                                            marginRight: '20px',
                                            textTransform: 'capitalize'
                                        }} >
                                            {item.replaceAll("_", " ")} </span></>)
                                })
                            }

                        </Box>
                        <Typography component="span" sx={{
                            fontSize: "20px",
                        }}>
                            Posted on :- <Moment format="DD/MM/YYYY">
                                {data && data.createdat}
                            </Moment>
                        </Typography>

                    </Box>
                </Stack>

                <Stack direction="row" gap={3}>
                    <Box sx={{ width: "100%", padding: "30px 0px" }}>
                        <Box sx={{
                            background: "white",
                            borderRadius: "10px",
                            padding: "20px",

                        }}>
                            <Box sx={{ minHeight: "200px" }}>
                                <Box sx={{ margin: "20px 0px" }}>
                                    <Typography component="h3" sx={{
                                        fontSize: "16px",
                                        marginRight: "20px",
                                    }}>
                                        Job Objective
                                    </Typography>
                                    <Box>{data && data.shortdescription}</Box>
                                </Box>
                                <Box sx={{ margin: "20px 0px" }}>
                                    <Typography component="h3" sx={{
                                        fontSize: "16px",
                                        marginRight: "20px",
                                    }}>
                                        Job Description
                                    </Typography>
                                    <Box>{parse(data && data.description)}</Box>
                                </Box>
                            </Box>
                            {user && user.type == "candidate" && <>
                                <Stack direction="row" gap={3} >
                                    {!alreadyApplied ? <ButtonType2 ClickEvent={() => JobAction(id, "apply")} ButtonText="Apply Now" /> :
                                        <Stack direction="row" gap={2} sx={{
                                            alignItems: "center",
                                            color: "red"
                                        }}>
                                            <CheckIcon />
                                            <Typography component="h3" sx={{
                                                fontSize: "16px",
                                                marginRight: "20px",
                                            }}>
                                                Already Applied
                                            </Typography>
                                        </Stack>}
                                    <ButtonType2 ClickEvent={() => JobAction(id, "save")} ButtonText="Save Job" />
                                </Stack>
                            </>}
                        </Box>
                    </Box> */}
        {/* <Box sx={{ width: "30%", padding: "30px 0px" }}>
                        <Box sx={{
                            background: "white",
                            borderRadius: "10px",
                            padding: "10px",
                            minHeight: "200px"
                        }}>
                            Item3
                        </Box>
                    </Box> */}
        {/* </Stack>


            </Container>

        </Box> */}

    </>)
}

export default JobDescription;