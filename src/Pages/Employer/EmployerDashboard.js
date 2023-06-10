import { getRequestWithToken } from "../../utils/ApiRequests";
import { Box, Stack, Typography, Divider } from "@mui/material";

import { DashboardSectionDivStyles } from "../../utils/Styles";
import { useOutletContext } from "react-router-dom";
import DashboardGreeting from "../../ThemeComponent/Common/DashboardGreeting";
import PostedJobItem from "./PostedJobItem";
import { useNavigate } from "react-router-dom";
import {
    useEffect, useState
} from "react";
const EmployerDashboard = () => {
    const user = useOutletContext();
    const navigate = useNavigate();
    // const location = useLocation();
    // const jobPosted = location.state?.job_posted || false;
    const [data, setData] = useState([]);

    const JobRelatedInfoBoxes = ({ heading, value, icon }) => {
        return (
            <Stack direction="row" justifyContent="space-between" sx={{ width: { "xs": "150px", "sm": "150px", "md": "230px", "lg": "230px", "xl": "230px" } }}>
                <Stack direction="column" justifyContent="space-between">
                    <Typography component="div" sx={{
                        fontSize: "1.8rem",
                        color: "#262626", fontWeight: "600"
                    }}>
                        {value}
                    </Typography>
                    <Typography component="div" sx={{ fontSize: "16px", color: "#262626", fontWeight: "500" }}>
                        {heading}
                    </Typography>

                </Stack>
                <Stack alignItems="center" justifyContent="center"
                    sx={{
                        width: "60px",
                        height: "60px",
                        background: "#FCF9F5",
                        borderRadius: "50%"
                    }}>
                    <img src={icon} alt="V3" height="35px" />
                </Stack>

            </Stack>)
    }

    const NotificationTopSectionBoxes = ({ text, color, style }) => {
        return (<Typography component="div"
            sx={{
                fontSize: { "xs": "1rem", "sm": "1rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
                color: color, fontWeight: "600", ...style
            }}>
            {text}
        </Typography>)
    }

    // const UserNotification = ({ item }) => {
    //     return (
    //         <Stack direction="row" gap={2} alignItems="flex-start" sx={{ cursor: "pointer" }} >
    //             <Box sx={{ width: "50px", Height: "50px" }}>
    //                 <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/cheerful_person.png" width="100%" height="100%" alt="userprofile" style={{ borderRadius: "10px" }}></img>
    //             </Box>
    //             <Stack direction="column" gap={0.2}>
    //                 <Typography component="div"
    //                     sx={{
    //                         fontSize: { "xs": "1rem", "sm": "1rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
    //                         color: "#000000", fontWeight: "700"
    //                     }}>
    //                     Super coin & More!

    //                 </Typography>
    //                 <Typography component="div"
    //                     sx={{
    //                         fontSize: { "xs": "0.9rem", "sm": "0.9rem", "md": "0.9rem", "lg": "0.9rem", "xl": "0.9rem" },
    //                         color: "#828282", fontWeight: "400"
    //                     }}>
    //                     On sun, 31 jul
    //                 </Typography>
    //                 <Typography component="div"
    //                     sx={{
    //                         fontSize: { "xs": "0.9rem", "sm": "0.9rem", "md": "0.9rem", "lg": "0.9rem", "xl": "0.9rem" },
    //                         color: "#333333", fontWeight: "500"
    //                     }}>
    //                     Use them to claim Extra Free Rewards & more!

    //                 </Typography>
    //             </Stack>
    //         </Stack>
    //     )
    // }

    useEffect(() => {
        const getpostedJobs = async () => {
            let api_url = process.env.REACT_APP_EMPLOYER_POSTED_JOB;

            try {
                const data = await getRequestWithToken(api_url);
                if (data.status === '1')
                    setData(data.data)

            } catch (error) {
                // Handle the error
                console.error("Fetch error:", error);
            }

        };

        getpostedJobs();

    }, []);

    return (

        <Stack direction="row" gap={4} sx={{
            minHeight: `calc(100vh - 90px)`,
            boxSizing: "border-box",
            padding: {
                "xs": "10px", "sm": "10px", "md": "20px 40px", "lg": "20px 40px", "xl": "20px 40px"
            }
        }} className="EmployerData">
            <Stack className="JobRelatedDataSection" sx={{
                width: "80%",
                gap: "24px"
            }}>
                <DashboardGreeting username={user && user.employer_name} userType="employer" />

                <Stack className="JobRelatedInformation"
                    gap={3} direction="row" divider={<Divider orientation="vertical" sx={{ height: "100px" }} flexItem />}
                    justifyContent="space-around" alignItems="center"
                    sx={DashboardSectionDivStyles}>
                    <JobRelatedInfoBoxes heading="Posted Jobs" value="100" icon="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/suitcase_logo.png" />
                    <JobRelatedInfoBoxes heading="Approved Jobs" value="50" icon="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/suitcase_logo.png" />
                    <JobRelatedInfoBoxes heading="Approved Jobs" value="50" icon="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/suitcase_logo.png" />
                    <JobRelatedInfoBoxes heading="Posted Jobs" value="20" icon="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/suitcase_logo.png" />
                </Stack>
                {/* <Stack className="DashboardPostedJobs"
                    direction="column" divider={<Divider orientation="horizontal" flexItem />}
                    sx={{ ...DashboardSectionDivStyles, padding: "0px !important" }}>
                    <Stack className="DashboardPostedJobsTopSection" direction="row" justifyContent="space-between" sx={{
                        cursor: "pointer",
                        padding: "20px"
                    }}>
                        <Typography component="div"
                            sx={{
                                fontSize: { "xs": "1.25rem", "sm": "1.25rem", "md": "1.25rem", "lg": "1.25rem", "xl": "1.25rem" },
                                color: "#262626", fontWeight: "700",
                                textTransform: "capitalize"
                            }}>
                            Recent Jobs
                        </Typography>
                        <Stack direction="row" gap={2} onClick={() => navigate("posted-jobs")}>
                            <Typography component="div" sx={{
                                fontSize: { "xs": "1rem", "sm": "1rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
                                textTransform: "capitalize"
                            }}>
                                See All
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack gap={3} sx={{ padding: "20px" }} direction="column" divider={<Divider orientation="horizontal" flexItem />}>
                        <PostedJobItem />
                        <PostedJobItem />
                        <PostedJobItem />
                        <PostedJobItem />
                        <PostedJobItem />
                    </Stack>
                </Stack> */}

                <Stack className="DashboardPostedJobs"
                    direction="column" gap={2}
                >
                    <Stack className="DashboardPostedJobsTopSection" direction="row" justifyContent="space-between" sx={{
                        cursor: "pointer",
                        padding: "20px"
                    }}>
                        <Typography component="div"
                            sx={{
                                fontSize: { "xs": "1.25rem", "sm": "1.25rem", "md": "1.25rem", "lg": "1.25rem", "xl": "1.25rem" },
                                color: "#262626", fontWeight: "600",
                                textTransform: "capitalize"
                            }}>
                            Recent Jobs
                        </Typography>
                        <Stack direction="row" gap={2} onClick={() => navigate("posted-jobs")}>
                            <Typography component="div" sx={{
                                fontSize: { "xs": "1rem", "sm": "1rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
                                textTransform: "capitalize",
                                color: "#FF671F"
                            }}>
                                See All
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack gap={3} direction="column" >
                        {data && data.reverse().slice(0, 6).map((item, index) => {
                            return <PostedJobItem item={item} key={index} />
                        })}
                    </Stack>
                </Stack>

            </Stack>

            <Stack className="NotificationDataSection" gap={3} sx={{ width: "20%" }}>
                <Box className="NotificationsWrapper" sx={{ ...DashboardSectionDivStyles, padding: "0px !important" }} >
                    <Stack className="NotificationTopSection" direction="row" justifyContent="space-between"
                        sx={{ borderBottom: "1px solid #EEEEEE", padding: "20px", background: "#FCF6EE" }}>
                        <NotificationTopSectionBoxes text="Notifications" color="#000000" />
                        <NotificationTopSectionBoxes text="See All" color="#FF671F" style={{ cursor: "pointer" }} />
                    </Stack>
                    <Stack className="Notifications" sx={{
                        padding: "20px", height: "400px", background: "#FCF6EE"
                    }} alignItems="center" justifyContent="center" gap={2}>
                        {/* <UserNotification />
                        <UserNotification />
                        <UserNotification />
                        <UserNotification />
                        <UserNotification /> */}
                        <Typography component="div"
                            sx={{
                                fontSize: { "xs": "1.25rem", "sm": "1.25rem", "md": "1.25rem", "lg": "1.25rem", "xl": "1.25rem" },
                                color: "##333333", fontWeight: "600"
                            }}>
                            Coming Soon.....
                        </Typography>
                    </Stack>
                </Box>
                <Stack direction="column" gap={1} alignItems="center" justifyContent="center" className="JobEligibilityScoreSection" sx={DashboardSectionDivStyles}>
                    <Box sx={{ width: "70px", height: "70px" }}>
                        <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/job_eligilibilty_section.png"
                            alt="JobEligibiltiy"
                            width="100%"
                            height="100%" />
                    </Box>
                    <Typography component="div"
                        sx={{
                            fontSize: { "xs": "1.25rem", "sm": "1.25rem", "md": "1.25rem", "lg": "1.25rem", "xl": "1.25rem" },
                            color: "##333333", fontWeight: "700"
                        }}>
                        Get 100% matching profiles*
                    </Typography>
                    <Typography component="div"
                        sx={{
                            fontSize: { "xs": "0.87rem", "sm": "0.87rem", "md": "0.87rem", "lg": "0.87rem", "xl": "0.87rem" },
                            color: "#333333", fontWeight: "400",
                            textAlign: "center"
                        }}>
                        Upgrade service to access Candidate Eligibility Score
                    </Typography>
                </Stack>
            </Stack >

        </Stack >
    )
}

export default EmployerDashboard;