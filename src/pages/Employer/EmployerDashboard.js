/*getting Api Url and sending the data */
import { getAllPostedJobs, EmployerDashboardDetailsCount } from "../../utils/ApiUrls";
import { postRequest, getRequest } from "../../utils/ApiRequests";

import { Box, Stack, Typography, Divider, Pagination, } from "@mui/material";

import { useOutletContext, useLocation } from "react-router-dom";
import { useState } from "react";

import JobComponent from "../../ThemeComponent/JobComponent";
import SocialMedia from "../../ThemeComponent/Common/SocialMedia";

import ChatComponent from "../../ThemeComponent/Common/ChatComponent";
import DashboardGreeting from "../../ThemeComponent/Common/DashboardGreeting";
import ThemeMessage from "../../ThemeComponent/Common/ThemeMessage";

import { useLayoutEffect } from "react";
import Template1 from "../../ThemeComponent/LoadingTemplate/Template1";
import { useDispatch } from "react-redux";

const EmployerDashboard = () => {
    const user = useOutletContext();

    const [data, setData] = useState([]);
    const [jobInfo, setJobInfo] = useState({});
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(2);
    const [jobDataLoaded, setJobDataLoaded] = useState(false);

    const dispatch = useDispatch();
    useLayoutEffect(() => {
        const getpostedjobs = async () => {
            try {
                let data = await postRequest(getAllPostedJobs);
                if (data.status === '0') {
                    setData([]);
                    setJobDataLoaded(true);
                } else {
                    setData(data.data);
                    setJobDataLoaded(true);

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

        const MenuSelect = () => {
            dispatch({ type: "CHANGE_SELECTED_MENU", payload: "employer_dashboard" })
        }

        getpostedjobs();
        getJobInfo();
        MenuSelect();

    }, []);


    //Pagination 
    const IndexOfLastData = currentPage * dataPerPage;
    const IndexOfFirstData = IndexOfLastData - dataPerPage;
    const jobs = data.length > 0 && data.slice(IndexOfFirstData, IndexOfLastData);
    let newState = useLocation();

    const { jobPosted } = newState.state !== null && newState.state;
    return (<>
        <ThemeMessage open={jobPosted} setOpen="JobPosted" message="Your Job is saved . It will be publised after reviewing." type="success" />

        <Stack direction="column" gap={2} sx={{
            padding: {
                "xs": "10px", "sm": "10px", "md": "30px", "lg": "30px", "xl": "30px"
            }
        }} className="EmployerData">
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
                            maxWidth: "1500px !important",
                            background: "#FFFFFF",
                            border: "1px solid #E1D4F2",
                            borderRadius: "14px",

                        }}>
                        <Box sx={{
                            display: { "xs": "none", "sm": "none", "md": "block", "lg": "block", "xl": "block" }
                        }}>
                            <Stack
                                gap={2} direction="row" divider={<Divider orientation="vertical" flexItem />}
                                justifyContent="center" alignItems="center"
                                sx={{

                                    height: "fit-content",
                                    borderRadius: "10px", padding: "30px", flexWrap: "wrap", rowGap: "80px",
                                }}>
                                <Stack gap={1} sx={{ width: { "xs": "150px", "sm": "150px", "md": "230px", "lg": "230px", "xl": "230px" } }}>
                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography component="div" sx={{ fontSize: { "xs": "26px", "sm": "26px", "md": "40px", "lg": "40px", "xl": "40px" }, color: "#4E3A67", fontWeight: "700" }}>
                                            {jobInfo && jobInfo.allposted_jobscount}
                                        </Typography>
                                        <img src={window.location.origin + "/assets/V1.png"} alt="V1" height="35px" />

                                    </Stack>
                                    <Typography component="div" sx={{ fontSize: "16px", color: "#4E3A67", fontWeight: "600" }}>
                                        Posted Jobs
                                    </Typography>
                                </Stack>
                                <Stack gap={1} sx={{ width: { "xs": "150px", "sm": "150px", "md": "230px", "lg": "230px", "xl": "230px" } }}>
                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography component="div" sx={{ fontSize: { "xs": "26px", "sm": "26px", "md": "40px", "lg": "40px", "xl": "40px" }, color: "#4E3A67", fontWeight: "700" }}>
                                            {jobInfo && jobInfo.all_saved_candidate}
                                        </Typography>
                                        <img src={window.location.origin + "/assets/V2.png"} alt="V2" height="35px" />

                                    </Stack>
                                    <Typography component="div" sx={{ fontSize: "16px", color: "#4E3A67", fontWeight: "600" }}>
                                        Saved Candidate
                                    </Typography>
                                </Stack>

                                <Stack gap={1} sx={{ width: { "xs": "150px", "sm": "150px", "md": "230px", "lg": "230px", "xl": "230px" } }}>
                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography component="div" sx={{ fontSize: { "xs": "26px", "sm": "26px", "md": "40px", "lg": "40px", "xl": "40px" }, color: "#4E3A67", fontWeight: "700" }}>
                                            {jobInfo && jobInfo.publishedjobscount}
                                        </Typography>
                                        <img src={window.location.origin + "/assets/V3.png"} alt="V3" height="35px" />

                                    </Stack>
                                    <Typography component="div" sx={{ fontSize: "16px", color: "#4E3A67", fontWeight: "600" }}>
                                        Active Jobs
                                    </Typography>
                                </Stack>
                                <Stack gap={1} sx={{ width: { "xs": "150px", "sm": "150px", "md": "230px", "lg": "230px", "xl": "230px" } }}>
                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography component="div" sx={{ fontSize: { "xs": "26px", "sm": "26px", "md": "40px", "lg": "40px", "xl": "40px" }, color: "#4E3A67", fontWeight: "700" }}>
                                            0
                                        </Typography>
                                        <img src={window.location.origin + "/assets/V4.png"} alt="V4" height="35px" />

                                    </Stack>
                                    <Typography component="div" sx={{ fontSize: "16px", color: "#4E3A67", fontWeight: "600" }}>
                                        Shortlisted Candidate to be reviewed
                                    </Typography>
                                </Stack>


                                <Stack gap={1} sx={{ width: { "xs": "150px", "sm": "150px", "md": "230px", "lg": "230px", "xl": "230px" } }}>
                                    <Stack direction="row" justifyContent="space-between">
                                        <Typography component="div" sx={{ fontSize: { "xs": "26px", "sm": "26px", "md": "40px", "lg": "40px", "xl": "40px" }, color: "#4E3A67", fontWeight: "700" }}>
                                            0
                                        </Typography>
                                        <img src={window.location.origin + "/assets/V5.png"} alt="V5" height="35px" />

                                    </Stack>
                                    <Typography component="div" sx={{ fontSize: "16px", color: "#4E3A67", fontWeight: "600" }}>
                                        Interview schedule for Today
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>

                        <Box sx={{
                            display: { "xs": "block", "sm": "block", "md": "none", "lg": "none", "xl": "none" }
                        }}>
                            <Stack
                                gap={1} direction="row"
                                justifyContent="center" alignItems="center"
                                sx={{

                                    height: "fit-content",
                                    borderRadius: "10px", flexWrap: "wrap",
                                    padding: "12px 0px"
                                }}>
                                <Stack gap={1} sx={{
                                    width: { "xs": "64px", "sm": "64px", "md": "230px", "lg": "230px", "xl": "230px" },
                                    height: "98px"
                                }}>
                                    <img src={window.location.origin + "/assets/V1.png"} alt="V1" height="20px" width="20px" />

                                    <Typography component="div" sx={{ fontSize: { "xs": "12px", "sm": "12px", "md": "40px", "lg": "40px", "xl": "40px" }, color: "#4E3A67", fontWeight: "700" }}>
                                        {jobInfo && jobInfo.allposted_jobscount}
                                    </Typography>

                                    <Typography component="div" sx={{
                                        fontSize: {
                                            "xs": "10px", "sm": "10px", "md": "16px", "lg": "16px", "xl": "16px"
                                        }, color: "#4E3A67", fontWeight: "600"
                                    }}>
                                        Posted Jobs
                                    </Typography>
                                </Stack>

                                <Stack gap={1} sx={{
                                    width: { "xs": "64px", "sm": "64px", "md": "230px", "lg": "230px", "xl": "230px" },
                                    height: "98px"
                                }}>
                                    <img src={window.location.origin + "/assets/V2.png"} alt="V2" height="20px" width="20px" />

                                    <Typography component="div" sx={{ fontSize: { "xs": "12px", "sm": "12px", "md": "40px", "lg": "40px", "xl": "40px" }, color: "#4E3A67", fontWeight: "700" }}>
                                        {jobInfo && jobInfo.all_saved_candidate}
                                    </Typography>

                                    <Typography component="div" sx={{
                                        fontSize: {
                                            "xs": "10px", "sm": "10px", "md": "16px", "lg": "16px", "xl": "16px"
                                        }, color: "#4E3A67", fontWeight: "600"
                                    }}>
                                        Saved Candidate
                                    </Typography>
                                </Stack>


                                <Stack gap={1} sx={{
                                    width: { "xs": "64px", "sm": "64px", "md": "230px", "lg": "230px", "xl": "230px" },
                                    height: "98px"
                                }}>
                                    <img src={window.location.origin + "/assets/V3.png"} alt="V3" height="20px" width="20px" />

                                    <Typography component="div" sx={{ fontSize: { "xs": "12px", "sm": "12px", "md": "40px", "lg": "40px", "xl": "40px" }, color: "#4E3A67", fontWeight: "700" }}>
                                        {jobInfo && jobInfo.publishedjobscount}
                                    </Typography>

                                    <Typography component="div" sx={{
                                        fontSize: {
                                            "xs": "10px", "sm": "10px", "md": "16px", "lg": "16px", "xl": "16px"

                                        }, color: "#4E3A67", fontWeight: "600"
                                    }}>
                                        Active Jobs
                                    </Typography>
                                </Stack>
                                <Stack gap={1} sx={{
                                    width: { "xs": "64px", "sm": "64px", "md": "230px", "lg": "230px", "xl": "230px" },
                                    height: "98px"
                                }}>
                                    <img src={window.location.origin + "/assets/V4.png"} alt="V4" height="20px" width="20px" />

                                    <Typography component="div" sx={{ fontSize: { "xs": "12px", "sm": "12px", "md": "40px", "lg": "40px", "xl": "40px" }, color: "#4E3A67", fontWeight: "700" }}>
                                        0
                                    </Typography>

                                    <Typography component="div" sx={{
                                        fontSize: {
                                            "xs": "10px", "sm": "10px", "md": "16px", "lg": "16px", "xl": "16px"

                                        }, color: "#4E3A67", fontWeight: "600"
                                    }}>
                                        Shortlisted Candidate to be reviewed
                                    </Typography>
                                </Stack>



                                <Stack gap={1} sx={{
                                    width: { "xs": "64px", "sm": "64px", "md": "230px", "lg": "230px", "xl": "230px" },
                                    height: "98px"
                                }}>
                                    <img src={window.location.origin + "/assets/V5.png"} alt="V5" height="20px" width="20px" />

                                    <Typography component="div" sx={{ fontSize: { "xs": "12px", "sm": "12px", "md": "40px", "lg": "40px", "xl": "40px" }, color: "#4E3A67", fontWeight: "700" }}>
                                        0
                                    </Typography>

                                    <Typography component="div" sx={{
                                        fontSize: {
                                            "xs": "10px", "sm": "10px", "md": "16px", "lg": "16px", "xl": "16px"

                                        }, color: "#4E3A67", fontWeight: "600"
                                    }}>
                                        Interview schedule for Today
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>

                    </Stack>

                    <Stack direction="row" gap={2}>

                        <Box sx={{
                            width: { "lg": "60%", "md": "100%", "xs": "100%" }
                        }}>
                            <Stack direction="column" gap={2} sx={{ width: "100%", height: "600" }}>

                                <Box>
                                    <Box sx={{
                                        margin: {
                                            "xs": "0px 0px 10px 0px ", "sm": "0px 0px 10px 0px",
                                            "md": "30px 0px", "lg": "30px 0px", "xl": "30px 0px"
                                        }
                                    }}>
                                        <Typography component="span" sx={{
                                            fontSize: {
                                                "xs": "16px", "sm": "16px", "md": "24px", "lg": "24px", "xl": "24px"
                                            }, fontWeight: "600", color: "#4E3A67"
                                        }}>
                                            Recent Jobs
                                        </Typography>
                                    </Box>
                                    {!jobDataLoaded && <>
                                        <Stack direction="column" gap={2}>
                                            <Template1></Template1>
                                            <Template1></Template1>
                                        </Stack>

                                    </>}
                                    {
                                        jobDataLoaded && jobs && jobs.length > 0 && <>
                                            <Stack direction="column" gap={2} sx={{ height: "700px" }}>

                                                {
                                                    jobs.map((item) => {
                                                        return (<>

                                                            <JobComponent key={item._id} data={item} data_id={item._id} userType="employer" />
                                                        </>)
                                                    })


                                                }
                                            </Stack>
                                            <Box >
                                                <Pagination count={data && Math.ceil(data.length / dataPerPage)} page={currentPage} onChange={(event, value) => setCurrentPage(value)} />
                                            </Box>
                                        </>
                                    }
                                    {
                                        jobDataLoaded && jobs && jobs.length <= 0 && <>
                                            <Stack direction="column" gap={2} sx={{ height: "700px" }} alignItems="center">
                                                <Typography component="span" sx={{ fontSize: "24px", color: "#4E3A67" }}>
                                                    You haven't posted any job Yet.
                                                </Typography>

                                            </Stack>
                                        </>
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
                    width: { "xs": "500px", "sm": "500px", "md": "312px", "lg": "312px", "xl": "312px" },
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
                                        fontSize: { "xs": "26px ", "sm": "26px", "md": "50px", "lg": "50px", "xl": "50px" },
                                        fontWeight: "600",
                                        color: "#4E3A67",
                                        fontFamily: "Work Sans, sans-serif"
                                    }}>
                                    Jobs
                                </Typography>
                                <Typography component="span"
                                    sx={{
                                        fontSize: { "xs": "26px ", "sm": "26px", "md": "50px", "lg": "50px", "xl": "50px" },
                                        color: "#4E3A67",
                                        fontFamily: "Work Sans, sans-serif"
                                    }}>
                                    Yahan
                                </Typography>
                            </Box>

                            <Stack direction="row" alignItems="center" justifyContent="center">
                                <Typography component="div" sx={{
                                    fontSize: { "xs": "12px ", "sm": "12px", "md": "16px", "lg": "16px", "xl": "16px" }, color: "#FC9A7E", fontWeight: "600"
                                }}>
                                    Read More
                                </Typography>
                                <img height="10px" src={window.location.origin + "/assets/RightArrow.png"} alt="RightArrow" />
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
                                <Typography component="div" sx={{ fontSize: { "xs": "12px ", "sm": "12px", "md": "20px", "lg": "20px", "xl": "20px" }, color: "#4E3A67", fontWeight: "600" }}>
                                    For Sales Enquiries
                                </Typography>

                                <Typography component="div" sx={{ fontSize: { "xs": "12px ", "sm": "12px", "md": "16px", "lg": "16px", "xl": "16px" }, color: "#4E3A67" }}>
                                    Call On: 1800-103-7344
                                </Typography>
                                <Typography component="div" sx={{ fontSize: { "xs": "12px ", "sm": "12px", "md": "16px", "lg": "16px", "xl": "16px" }, color: "#4E3A67" }}>
                                    ( Toll Free: 9:30 AM to 6:30 PM)
                                </Typography>
                            </Box>

                            <Box>
                                <Typography component="div" sx={{ fontSize: { "xs": "12px ", "sm": "12px", "md": "20px", "lg": "20px", "xl": "20px" }, color: "#4E3A67", fontWeight: "600" }}>
                                    Socials
                                </Typography>

                                <Typography component="div" sx={{ fontSize: { "xs": "12px ", "sm": "12px", "md": "16px", "lg": "16px", "xl": "16px" }, color: "#4E3A67" }}>
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