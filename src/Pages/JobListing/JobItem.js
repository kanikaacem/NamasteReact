import { Box, Stack, Typography, Card, CardContent, Grid } from "@mui/material";
import { jobItemStyles, jobItemTagStyles, stackStyles, tagStyles } from "../../utils/Styles";
import { getJobPostedTime, replaceUnderscore } from "../../utils/function";
import ApplyForJobButton from "../Common/ApplyForJobButton";
import ShareJob from "../Common/ShareJob";
import ApplyForJobWebButton from "../Common/ApplyForJobWebButton";

const JobItem = ({ item }) => {
    const { _id, accessibleForDisabled, jobRole, jobId, gender, jobDepartment, inhandSalaryPermonth, jobType, qualification,
        shift, vehicleRequired, language, createdAt, requiredExperience, jobSector, jobDescriptions, state, slug_url } = item;


    return (
            <Card key={jobId} sx={{ ...jobItemStyles, padding: "0px !important" }}>
                <CardContent sx={{ padding: "0px !important"}} >
                    {gender === "male" &&
                        <Box sx={jobItemTagStyles}>
                            <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/men_tag.png" alt="MenTag" width="100%" height="100%"></img>
                        </Box>}
                    {gender === "female" &&
                        <Box sx={jobItemTagStyles}>
                            <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/women_tag.png" alt="womenTag" width="100%" height="100%"></img>
                        </Box>}
                    {
                        gender === "other" &&
                        <Box sx={jobItemTagStyles}>
                            <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/other_tag.png" alt="otherTag" width="100%" height="100%"></img>
                        </Box>
                    }

                    <Stack className="jobItemTopSection" sx={{ padding: "20px" }} gap={1}>
                        <Stack className="SpecialAbledSection" direction="row" gap={2} sx={{ marginBottom: "20px" }}>
                            {accessibleForDisabled && (
                                <>
                                    <Box>
                                        <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/job_special_added.png"
                                            alt="special_added_job" />
                                    </Box>
                                    <Typography component="div"
                                        sx={{
                                            fontSize: { "xs": "0.75rem", "sm": "0.75rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
                                            color: "#262626", fontWeight: "500"
                                        }}>
                                        Specially abled
                                    </Typography></>
                            )}

                        </Stack>

                        <Stack className="jobTitle" direction="row" justifyContent="space-between">
                            <Typography component="div"
                                sx={{
                                    fontSize: "1rem",
                                    color: "#262626", fontWeight: "600", textTransform: "capitalize"
                                }}>
                                {jobRole}

                            </Typography>
                            <Stack direction="row" gap={0.2}>
                                <Typography component="div"
                                    sx={{
                                        fontSize: { "xs": "0.6rem", "sm": "0.6rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
                                        color: "#262626", fontWeight: "500", textTransform: "capitalize",
                                        fontStyle: "italic"
                                    }}>
                                    Job ID:

                                </Typography>
                                <Typography component="div"
                                    sx={{
                                        fontSize: { "xs": "0.6rem", "sm": "0.6rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
                                        color: "#FF671F", fontWeight: "500", textTransform: "capitalize",
                                        fontStyle: "italic"
                                    }}>
                                    {jobId}
                                </Typography>
                            </Stack>

                        </Stack>

                        <Stack className="roleAndApplicationSubmitted" direction="row" justifyContent="space-between">
                            {jobSector && jobDepartment && <Typography component="div"
                                sx={{
                                    fontSize: "1rem",
                                    color: "#262626", fontWeight: "500", textTransform: "capitalize"
                                }}>
                                {`${jobSector} - ${jobDepartment}`}
                            </Typography>}

                        </Stack>

                        {inhandSalaryPermonth && <Box className="jobSalary" >
                            <Typography component="div"
                                sx={{
                                    fontSize: { "xs": "0.8rem", "sm": "0.8rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
                                    color: "#262626", fontWeight: "600", textTransform: "capitalize"
                                }}>
                                {`${inhandSalaryPermonth?.currency} ${inhandSalaryPermonth?.minSalary} - ${inhandSalaryPermonth?.maxSalary}`}

                            </Typography>
                        </Box>}

                        <Stack className="jobTagsAndStatus" direction="row" justifyContent="space-between" sx={{
                            margin: "10px 0px"
                        }}>
                            <Stack direction="row" gap={1} sx={{
                                flexWrap: "wrap"
                            }}>
                                {state && <Stack direction="row" gap={1}
                                    sx={tagStyles}>
                                    <Box>
                                        <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/job_location.png" alt="Location"></img>
                                    </Box>
                                    <Typography sx={stackStyles}>
                                        {state}
                                    </Typography>
                                </Stack>}

                                {jobType && <Stack direction="row" gap={1}
                                    sx={tagStyles}>
                                    <Box>
                                        <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/job_type.png" alt="JobType"></img>
                                    </Box>

                                    <Typography sx={stackStyles}>
                                        {replaceUnderscore(jobType)}
                                    </Typography>

                                </Stack>
                                }

                                {qualification && <Stack direction="row" gap={1}
                                    sx={tagStyles}>
                                    <Box>
                                        <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/job_type.png" alt="JobEducation"></img>
                                    </Box>

                                    <Typography sx={stackStyles}>
                                        {replaceUnderscore(qualification)}
                                    </Typography>

                                </Stack>
                                }
                                {shift && <Stack direction="row" gap={1}
                                    sx={tagStyles}>
                                    <Box>
                                        <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/job_timing.png" alt="JobTiming"></img>
                                    </Box>
                                    <Typography sx={stackStyles}>
                                        {`${replaceUnderscore(shift)} Shift`}
                                    </Typography>
                                </Stack>
                                }

                                {requiredExperience &&
                                    <Stack direction="row" gap={1}
                                        sx={tagStyles}>
                                        <Box>
                                            <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/job_experience.png" alt="JobTiming"></img>
                                        </Box>
                                        <Typography sx={stackStyles}>
                                            {replaceUnderscore(requiredExperience)}
                                        </Typography>
                                    </Stack>}
                            </Stack>
                        </Stack>
                        <Grid item container spacing={2} xs={12}>
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <ApplyForJobWebButton jobId={_id} buttonStyle="contained" />
                            </Grid>
                            <Grid item xs={12} sm={6} md={4} lg={4}>
                                <ApplyForJobButton jobId={_id} buttonStyle="contained" />
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={4} sx={{ display: "flex", justifyContent: "space-between" }}>
                                <ShareJob jobId={_id} jobDescription={jobDescriptions} jobRole={jobRole} />
                                <a className="view-job-button" href={`${slug_url}`}>
                                    <p className="view-job-button-text"> View </p>
                                    <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/view_button.png" alt="View" height="12" />
                                </a>
                            </Grid>
                        </Grid>
                    </Stack>
                    <Stack className="jobItemBottomSection" direction="row" sx={{ background: "#FCF9F5", padding: "10px" }} justifyContent="space-between">
                        <Typography component="div"
                            sx={{
                                fontSize: "0.8rem",
                                fontWeight: "500",
                                textTransform: "capitalize"
                            }}>
                            <em style={{ color: "#7C7979" }}>Additional requirement: </em>
                            <div style={{ fontWeight: "600" }}>{` ${vehicleRequired ? `${replaceUnderscore(vehicleRequired)},` : ''} ${replaceUnderscore(language)}`}</div>
                        </Typography>
                        {createdAt && <Typography component="div"
                            sx={{
                                fontSize: "0.8rem",
                                color: "#262626", fontWeight: "500"
                            }}>
                            <em style={{ color: "#7C7979" }}>Posted on </em>
                            <div style={{ fontWeight: "600" }}>{getJobPostedTime(createdAt)}</div>

                        </Typography>}
                    </Stack>
                </CardContent>
            </Card>
    )
}
export default JobItem;