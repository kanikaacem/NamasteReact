import { Box, Stack, Typography, Button } from "@mui/material";
import { RWebShare } from "react-web-share";

const JobComponent = ({ data, data_id, userType, OnClickfun }) => {
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
                else
                    OnClickfun()
            }}>
            <Box >
                <Stack direction="row" justifyContent="space-between" sx={{ padding: "20px", color: "#4E3A67" }}>
                    <Typography component="div" sx={{ fontSize: { "lg": "26px", "md": "26px", "xs": "20px" }, fontWeight: "600" }}>
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
                        {/* <Stack direction="row" sx={{
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
                                5 Openings
                            </Typography>
                        </Stack> */}
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
                        50 Applicants Applied
                    </Typography>
                    {/* <Typography component="div" sx={{ fontSize: { "lg": "20px", "md": "16px", "xs": "16px" }, fontWeight: "500", color: "#9589A4", margin: "10px 0px" }}>
                        50 Applicants Applied / 10 Applicants Rejected
                    </Typography> */}

                    <Typography component="div" sx={{ fontSize: { "lg": "20px", "md": "16px", "xs": "16px" }, fontWeight: "500", color: "#9589A4", margin: "10px 0px" }}>
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
                                    }} variant="contained">Apply Now</Button>

                                {/* <RWebShare
                                    data={{
                                        text: "Job Opportunity",
                                        url: window.location.origin + "/job-description/" + data._id,
                                        title: "Job Opportunity",
                                    }}
                                    onClick={() => console.log("shared successfully!")}
                                > */}
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

                                {/* </RWebShare> */}


                            </Stack>

                            <Box>
                                <Typography component="div" sx={{ fontSize: { "lg": "20px", "md": "16px", "xs": "16px" }, fontWeight: "800px", padding: "0px 20px", color: '#A69CB2' }}>
                                    Jobs For Freshers
                                </Typography>
                                <Typography component="div" sx={{ fontSize: { "lg": "20px", "md": "16px", "xs": "16px" }, fontWeight: "800px", padding: "0px 20px", color: "#A69CB2" }}>
                                    Jobs For Women
                                </Typography>
                            </Box>
                        </Stack> </>
                    }

                    {/* <Typography component="div" sx={{ fontSize: "20px", fontWeight: "600", color: "#4E3A67", margin: "20px 0px" }}>
                        Skill(s) Required
                    </Typography>

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

                            <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px" }}>
                                Python
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

                            <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px" }}>
                                Kotlin
                            </Typography>
                        </Stack>

                    </Stack> */}
                </Box>





            </Box>
        </Box>
    </>)
}

export default JobComponent;