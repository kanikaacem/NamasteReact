import { Box, Container, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Moment from 'react-moment';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import parse from 'html-react-parser';

import ButtonType2 from "../ThemeComponent/Common/ButtonType2";

const JobDescription = () => {
    const { id } = useParams();
    const user = localStorage.user && JSON.parse(localStorage.user);
    const [data, setdata] = useState("");
    const [company, setcompany] = useState("");
    const [savedJobs, setsavedJobs] = useState("");
    const [appliedJobs, setappliedJobs] = useState("");
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
                jobsid: jobId

            }),
        })
        if (response.ok) {
            response = await response.json();
            // window.location.reload();
            // console.log(response);
            window.location.href = "/";

        }

    }

    useEffect(() => {
        const getJobDescription = async () => {
            let response = await fetch(api_url + "/api/job/getjobbyid", {
                method: "POST",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    jobid: id

                }),
            })
            if (response.ok) {
                response = await response.json();
                console.log(response)
                setdata(response.message);
            }
        }

        const getSavedAppliedJobs = async () => {
            let response = await fetch(api_url + "/api/users/getuserbyid", {
                method: "POST",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    userid: user._id

                }),
            })
            if (response.ok) {
                response = await response.json();
                console.log(response);
            }
        }
        getJobDescription();
        getSavedAppliedJobs();



    }, []);

    return (<>
        <Box
            className="jobDescriptionPage"
            id={company.id}
            sx={{
                minHeight: "100vh",
                background: "#e8f0f9"
            }}>
            <Container sx={{ height: "inherit", padding: "0px", maxWidth: "1400px !important" }}>
                <Stack direction="row" gap={3} sx={{
                    minHeight: "150px",
                    // background: "#2B1E44",
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
                            {company && company.companyName ? company.companyName : "company Name"}
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
                                {data && data.createdAt}
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
                            {/* <Stack direction="row" gap={3} >
                                <ButtonType2 ButtonText="Apply Now" />
                                <ButtonType2 ButtonText="Save Job" />
                            </Stack> */}
                        </Box>
                    </Box>
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
                </Stack>


            </Container>

        </Box>

    </>)
}

export default JobDescription;