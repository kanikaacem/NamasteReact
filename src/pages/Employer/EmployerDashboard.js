/*getting Api Url and sending the data */
import { getAllPostedJobs, EmployerDashboardDetailsCount } from "../../utils/ApiUrls";
import { postRequest, getRequest } from "../../utils/ApiRequests";

import { Box, Stack, Typography, Divider, Pagination, } from "@mui/material";

import { useOutletContext, useLocation } from "react-router-dom";
import { useState } from "react";

import JobComponent from "../../ThemeComponent/JobComponent";
import SocialMedia from "../../ThemeComponent/Common/SocialMedia";

import { Chart as ChartJS, registerables } from 'chart.js';
import ChatComponent from "../../ThemeComponent/Common/ChatComponent";
import DashboardGreeting from "../../ThemeComponent/Common/DashboardGreeting";
import ThemeMessage from "../../ThemeComponent/Common/ThemeMessage";


import { Bar } from 'react-chartjs-2'
import { useLayoutEffect } from "react";
ChartJS.register(...registerables);


const EmployerDashboard = () => {
    const user = useOutletContext();

    const [data, setData] = useState([]);
    const [jobInfo, setJobInfo] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(2);
    const DashboardValues = [
        {
            id: 1,
            count: 1,
            name: "Active Jobs",
            logo: ""
        },

        {
            id: 2,
            count: 10,
            name: "Shortlisted Candidate to be reviewed",
            logo: ""
        },
        {
            id: 3,
            count: 0,
            name: "Interview schedule for Today",
            logo: ""
        }
    ]
    useLayoutEffect(() => {
        const getpostedjobs = async () => {
            try {
                let data = await postRequest(getAllPostedJobs);
                if (data.status === '0') {
                    setData([])
                } else {
                    setData(data.data);

                }
            } catch (err) {
                setData([]);

            }

        };

        const getJobInfo = async () => {
            let data = await getRequest(EmployerDashboardDetailsCount);
            if (data.status === '1') {
                setJobInfo(data.data.alldata)
            }
        }

        getpostedjobs();
        getJobInfo();

    }, []);


    //Pagination 
    const IndexOfLastData = currentPage * dataPerPage;
    const IndexOfFirstData = IndexOfLastData - dataPerPage;
    const jobs = data.length > 0 && data.slice(IndexOfFirstData, IndexOfLastData);
    let newState = useLocation();

    const { jobPosted } = newState.state !== null && newState.state;
    return (<>

        <ThemeMessage open={jobPosted} setOpen="JobPosted" message="Your Job is saved . It will be publised after reviewing." type="success" />

        <Stack direction="column" gap={2} sx={{ padding: "30px" }} className="EmployerData">
            <DashboardGreeting username={user && user.employer_name} userType="employer" />
            <Stack direction="row" gap={2}
                sx={{
                    flexWrap: "wrap"
                }}>

                <Stack direction="column" gap={2} sx={{
                    width: {
                        "lg":
                            `calc(100vw - 412px)`, "md": "100%", "xs": "100%"
                    }
                }}>
                    <Stack
                        className="EmployerDashboardInfo"
                        sx={{
                            visibility: { "lg": "visible", "md": "hidden", "xs": "hidden" },
                            height: { "lg": "fit-content", "md": "0px", "xs": "0px" },
                            maxWidth: "1500px !important",
                            background: "#FFFFFF",
                            border: "1px solid #E1D4F2",
                            borderRadius: "14px",

                        }}>

                        <Stack
                            gap={2} direction="row" divider={<Divider orientation="vertical" flexItem />}
                            justifyContent="center" alignItems="center"
                            sx={{ height: "fit-content", borderRadius: "10px", padding: "30px", flexWrap: "wrap", rowGap: "80px" }}>


                            <Stack gap={1} sx={{ minWidth: "230px" }}>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography component="div" sx={{ fontSize: "40px", color: "#4E3A67", fontWeight: "700" }}>
                                        {jobInfo && jobInfo.allposted_jobscount}
                                    </Typography>
                                    <img src={window.location.origin + "/assets/V1.png"} alt="V1" height="35px" />

                                </Stack>
                                <Typography component="div" sx={{ fontSize: "16px", color: "#4E3A67", fontWeight: "600" }}>
                                    Posted Jobs
                                </Typography>
                            </Stack>
                            <Stack gap={1} sx={{ minWidth: "230px" }}>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography component="div" sx={{ fontSize: "40px", color: "#4E3A67", fontWeight: "700" }}>
                                        {jobInfo && jobInfo.all_saved_candidate}
                                    </Typography>
                                    <img src={window.location.origin + "/assets/V2.png"} alt="V2" height="35px" />

                                </Stack>
                                <Typography component="div" sx={{ fontSize: "16px", color: "#4E3A67", fontWeight: "600" }}>
                                    Saved Candidate
                                </Typography>
                            </Stack>
                            <Stack gap={1} sx={{ minWidth: "230px" }}>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography component="div" sx={{ fontSize: "40px", color: "#4E3A67", fontWeight: "700" }}>
                                        {jobInfo && jobInfo.publishedjobscount}
                                    </Typography>
                                    <img src={window.location.origin + "/assets/V3.png"} alt="V3" height="35px" />

                                </Stack>
                                <Typography component="div" sx={{ fontSize: "16px", color: "#4E3A67", fontWeight: "600" }}>
                                    Active Jobs
                                </Typography>
                            </Stack>
                            <Stack gap={1} sx={{ minWidth: "230px" }}>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography component="div" sx={{ fontSize: "40px", color: "#4E3A67", fontWeight: "700" }}>
                                        0
                                    </Typography>
                                    <img src={window.location.origin + "/assets/V4.png"} alt="V4" height="35px" />

                                </Stack>
                                <Typography component="div" sx={{ fontSize: "16px", color: "#4E3A67", fontWeight: "600" }}>
                                    Shortlisted Candidate to be reviewed
                                </Typography>
                            </Stack>

                            <Stack gap={1} sx={{ minWidth: "230px" }}>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography component="div" sx={{ fontSize: "40px", color: "#4E3A67", fontWeight: "700" }}>
                                        0
                                    </Typography>
                                    <img src={window.location.origin + "/assets/V5.png"} alt="V5" height="35px" />

                                </Stack>
                                <Typography component="div" sx={{ fontSize: "16px", color: "#4E3A67", fontWeight: "600" }}>
                                    Interview schedule for Today
                                </Typography>
                            </Stack>
                        </Stack>
                    </Stack>

                    <Stack direction="row" gap={2}>

                        <Box sx={{
                            width: { "lg": "60%", "md": "100%", "xs": "100%" }
                        }}>
                            <Stack direction="column" gap={2} sx={{ width: "100%", height: "600" }}>
                                <Box>
                                    <Box sx={{ margin: "30px 0px" }}>
                                        <Typography component="span" sx={{ fontSize: "24px", fontWeight: "600", color: "#4E3A67" }}>
                                            Recent Jobs
                                        </Typography>
                                    </Box>
                                    <Stack direction="column" gap={2} sx={{ height: "700px" }}>
                                        {jobs && jobs.length <= 0 && <Typography component="box" sx={{
                                            fontSize: "24px",
                                            fontWeight: "600",
                                            color: "#4E3A67"
                                        }}>
                                            You haven't posted any Job yet.
                                        </Typography>}

                                        {
                                            jobs && jobs.length > 0 && jobs.map((item) => {
                                                return (<>

                                                    <JobComponent key={item._id} data={item} data_id={item._id} userType="employer" />
                                                </>)
                                            })


                                        }
                                    </Stack>
                                    {jobs.length > 0 &&
                                        <Box >
                                            <Pagination count={data && Math.ceil(data.length / dataPerPage)} page={currentPage} onChange={(event, value) => setCurrentPage(value)} />
                                        </Box>
                                    }
                                </Box>

                            </Stack>

                        </Box>
                        <Box sx={{
                            display: { "lg": "block", "md": "none", "xs": "none" },
                            width: "40%",
                            background: "#FFFFFF",
                            border: "1px solid #E1D4F2",
                            borderRadius: "14px",
                            padding: "20px",
                            height: "fit-content"
                        }}>

                            <Typography component="div" sx={{
                                fontSize: "24px",
                                fontWeight: "600",
                                color: "#4E3A67",
                                padding: "20px"
                            }}>
                                Upcoming Interviews
                            </Typography>

                            <Box sx={{
                                background: "#E1D4F2",
                                borderRadius: "11px",
                                padding: "10px"
                            }}>

                                <Typography component="div" sx={{
                                    fontSize: "20px",
                                    fontWeight: "600",
                                    color: "#4E3A67",
                                    padding: "20px"
                                }}>
                                    0 interviews Scheduled
                                </Typography>

                                <Typography component="div" sx={{
                                    fontSize: "20px",
                                    color: "#4E3A67",
                                    padding: "20px"
                                }}>
                                    There is no interview Scheduled
                                </Typography>
                            </Box>

                            <Typography component="div" sx={{
                                fontSize: "20px",
                                fontWeight: "600",
                                color: "#4E3A67",
                                padding: "20px"
                            }}>
                            </Typography>

                        </Box>
                    </Stack>
                </Stack>

                <Stack direction="column" sx={{
                    width: "312px",
                    visibility: { "lg": "visible", "md": "hidden", "xs": "hidden" },
                    gap: "12px"
                }}>
                    <Stack sx={{
                        minWidth: "300px"

                    }}>
                        <ChatComponent />
                    </Stack>

                    <Stack direction="column"
                        sx={{
                            minHeight: "396px",
                            background: "#FFFFFF",
                            border: " 1px solid #E1D4F2",
                            borderRadius: "19px",
                            width: "100%"
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

                </Stack>
            </Stack>
        </Stack >


    </>)
}

export default EmployerDashboard;