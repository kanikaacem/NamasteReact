import { getRequestWithToken } from "../utils/ApiRequests";
import { Box, Stack, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
const JobComponent = ({ data, data_id, userType, OnClickfun }) => {

    const [jobApplied, setJobApplied] = useState(false);
    useEffect(() => {
        const IsjobApplied = async () => {
            let response = await getRequestWithToken("https://backend.jobsyahan.com/api/job/details?jobid=" + data_id);
            if (response !== undefined && response.status === "1") {
                if (Object.keys(response.data).length > 0 && response.data[0].jobapply) {
                    setJobApplied(true);
                }
                else {
                    setJobApplied(false);
                }
            }

        }
        IsjobApplied();
    }, [data])
    return (<>
        <Box sx={{
            background: "#FFFFFF",
            border: " 1px solid #E1D4F2",
            borderRadius: "19px",
            cursor: "pointer"
        }}
            onClick={() => {
                if (userType === "employer")
                    window.location.href = window.location.origin + '/employer-dashboard/job-description/' + data_id
                else if (userType === "candidate" && window.location.pathname === "/job")
                    window.location.href = window.location.origin + '/candidate-dashboard/job-description/' + data_id

                else
                    OnClickfun()
            }}>
            <Box >
                <Stack direction="row" justifyContent="space-between" sx={{ padding: "20px", color: "#4E3A67" }}>
                    <Typography component="div" sx={{ fontSize: { "lg": "26px", "md": "26px", "xs": "20px" }, fontWeight: "600", textTransform: "capitalize" }}>
                        {data ? data.job_title : " Linux Solution Engineer"}
                    </Typography>
                    <Typography component="div" sx={{ fontSize: { "lg": "26px", "md": "26px", "xs": "20px" }, fontWeight: "600" }}>
                        {(data && data.salarytype) ? data.salarytype.salary : "Rs 25,000- Rs 99,999"}
                    </Typography>
                </Stack>
                <Typography component="div" sx={{ fontSize: { "lg": "20px", "md": "16px", "xs": "16px" }, color: "#3D3B3F", padding: "0px 20px" }}>
                    {data ? data.company_name : "Vays Infotech Private Limited"}
                </Typography>

                <Box></Box>
                <Box sx={{ padding: "20px" }}>
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
                            <Typography component="div" sx={{ fontSize: { "lg": "20px", "md": "16px", "xs": "16px" }, fontWeight: "800px" }}>
                                {data ? data.city[0] : "Demo City"}
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
                            <Typography component="div" sx={{ fontSize: { "lg": "20px", "md": "16px", "xs": "16px" }, fontWeight: "800px" }}>
                                Min. {data && data.candidate_experience && data.candidate_experience.min_age} Years
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
                            <Typography component="div" sx={{ fontSize: { "lg": "20px", "md": "16px", "xs": "16px" }, fontWeight: "800px" }}>
                                {data && data.prefered_degree[0]}
                            </Typography>
                        </Stack>
                    </Stack>

                    <Typography component="div" sx={{ fontSize: { "lg": "20px", "md": "16px", "xs": "16px" }, fontWeight: "500", color: "#9589A4", margin: "10px 0px" }}>
                        {data && data.applied_count > 0 ? data.applied_count : '0'} Applicants Applied
                    </Typography>
                    {data && data.applied_count > 0 && userType === "employer" && <a
                        href="#"
                        onClick={(event) => {
                            event.stopPropagation()
                            window.location.href = window.location.origin + "/employer-dashboard/applied-candidates/" + data_id
                        }}
                    > View Candidates</a>}


                    <Typography component="div" sx={{
                        fontSize: { "lg": "20px", "md": "16px", "xs": "16px" }, fontWeight: "500", color: "#9589A4", margin: "10px 0px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    }}>
                        {data && data.job_responsibilty}
                    </Typography>

                    {userType === "candidate" && <>
                        <Stack direction="row" gap={2} sx={{ margin: "50px 0px", flexWrap: "wrap" }} justifyContent="space-between">
                            <Stack direction="row" gap={1}>
                                <Button
                                    onClick={() => {

                                        window.location.href = window.location.origin + '/candidate-dashboard/job-description/' + data_id
                                    }}
                                    sx={{
                                        fontFamily: 'Montserrat',
                                        fontWeight: "500",
                                        fontSize: { "lg": "20px", "md": "16px", "xs": "16px" },
                                        color: "#3A2D49",
                                        background: "#FC9A7E",
                                        borderRadius: "7px",
                                        textTransform: "capitalize",
                                        fontWeight: "600",
                                        "&:hover": {
                                            fontFamily: 'Montserrat',
                                            fontWeight: "500",
                                            fontSize: { "lg": "20px", "md": "16px", "xs": "16px" },
                                            color: "#3A2D49",
                                            background: "#FC9A7E",
                                            borderRadius: "7px",
                                            textTransform: "capitalize",
                                            fontWeight: "600"
                                        }
                                    }} variant="contained">{jobApplied ? "Applied" : "Apply Now"}</Button>


                                <Button variant="outlined"
                                    sx={{
                                        fontFamily: 'Montserrat',
                                        fontWeight: "500",
                                        fontSize: { "lg": "20px", "md": "16px", "xs": "16px" },
                                        background: "#FAF7FE",
                                        border: "1px solid #E7D5FF",
                                        borderRadius: "7px",
                                        color: "#3A2D49",
                                        textTransform: "capitalize",
                                        fontWeight: "600",
                                        "&:hover": {
                                            fontFamily: 'Montserrat',
                                            fontWeight: "500",
                                            fontSize: { "lg": "20px", "md": "16px", "xs": "16px" },
                                            background: "#FAF7FE",
                                            border: "1px solid #E7D5FF",
                                            borderRadius: "7px",
                                            color: "#3A2D49",
                                            textTransform: "capitalize",
                                            fontWeight: "600",
                                        }
                                    }}>Share</Button>



                            </Stack>

                            <Box>
                                <Typography component="div" sx={{ fontSize: { "lg": "20px", "md": "16px", "xs": "16px" }, fontWeight: "800px", padding: "0px 20px", color: '#A69CB2' }}>
                                    {data && data.candidate_experience && data.candidate_experience.min_age === 0 && "Jobs For Freshers"}
                                </Typography>
                                <Typography component="div" sx={{ fontSize: { "lg": "20px", "md": "16px", "xs": "16px" }, fontWeight: "800px", padding: "0px 20px", color: "#A69CB2", textTransform: "capitalize" }}>
                                    {(data && data.prefered_gender === "both" ?
                                        " Job for Men , Women" : "Job for " + data.prefered_gender)}
                                </Typography>
                            </Box>
                        </Stack> </>
                    }
                </Box>
            </Box>
        </Box>
    </>)
}

export default JobComponent;