import { Box, Stack, Typography } from "@mui/material";

const JobComponent = ({ data, data_id }) => {
    // { console.log(data, data_id) }
    return (<>
        <Box sx={{
            background: "#FFFFFF",
            border: " 1px solid #E1D4F2",
            borderRadius: "19px",
            cursor: "pointer"
        }}
            onClick={() => {
                window.location.href = window.location.origin + '/employer-dashboard/job-description/' + data_id
            }}>
            <Box >
                <Stack direction="row" justifyContent="space-between" sx={{ padding: "20px" }}>
                    <Typography component="div" sx={{ fontSize: "26px", fontWeight: "600" }}>
                        {data ? data.job_title : " Linux Solution Engineer"}
                    </Typography>
                    <Typography component="div" sx={{ fontSize: "26px", fontWeight: "600" }}>
                        {(data && data.salarytype) ? data.salarytype.salary : "Rs 25,000- Rs 99,999"}
                    </Typography>
                </Stack>
                <Typography component="div" sx={{ fontSize: "20px", fontWeight: "600", padding: "0px 20px" }}>
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
                            <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px" }}>
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
                            <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px" }}>
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
                            <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px" }}>
                                {data && data.prefered_degree[0]}
                            </Typography>
                        </Stack>
                    </Stack>
                    <Typography component="div" sx={{ fontSize: "20px", fontWeight: "500", color: "#9589A4", margin: "10px 0px" }}>
                        {data && data.job_responsibilty}
                    </Typography>

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