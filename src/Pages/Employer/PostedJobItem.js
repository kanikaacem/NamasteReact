import { Box, Stack, Typography, Chip, Button } from "@mui/material";
import { DashboardSectionDivStyles, stackStyles, tagStyles } from "../../utils/Styles";
import { getJobPostedTime, replaceUnderscore } from "../../utils/function";

const PostedJobItem = ({ item }) => {
    const { active, accessibleForDisabled, jobRole, jobId, jobDepartment, jobSector, inhandSalaryPermonth, jobType, qualification,
        shift, vehicleRequired, requiredExperience, language, state, createdAt } = item;
    const ActiveJobChip = () => {
        return (<Chip sx={{
            border: "1px solid #1AE547",
            background: "#C5FFE3",
            color: "#1AE547",
            height: "40px",
            borderRadius: "100px",
            fontSize: "1rem"
        }
        } label="Active" />)

    }

    const ExpiredJobChip = () => {
        return (<Chip sx={{
            border: "1px solid #F57269",
            background: "#FFC4C0",
            color: "#F57269",
            height: "40px",
            borderRadius: "100px",
            fontSize: "1rem"
        }} label="Expired" />)
    }
    const RejectedJobChip = () => {
        return (<Chip sx={{
            border: "1px solid #F57269",
            background: "#FFC4C0",
            color: "#F57269",
            height: "40px",
            borderRadius: "100px",
            fontSize: "1rem"
        }} label="Rejected" />)
    }

    const ApprovalPendingJobChip = () => {
        return (<Chip sx={{
            border: "1px solid #F0CB4F",
            background: "#FFF1C5",
            color: "#F0CB4F",
            height: "40px",
            borderRadius: "100px",
            fontSize: "1rem"
        }} label="Approval Pending" />)
    }


    return (<>
        {/* <Stack direction="column" gap={1.5}>
            <Stack className="jobTitle" direction="row" justifyContent="space-between">
                <Typography component="div"
                    sx={{
                        fontSize: { "xs": "1.5rem", "sm": "1.5rem", "md": "1.5rem", "lg": "1.5rem", "xl": "1.5rem" },
                        color: "#262626", fontWeight: "600", textTransform: "capitalize"
                    }}>
                    Work Skill

                </Typography>
                <Stack direction="row" gap={0.2}>
                    <Typography component="div"
                        sx={{
                            fontSize: { "xs": "1.25rem", "sm": "1.25rem", "md": "1.25rem", "lg": "1.25rem", "xl": "1.25rem" },
                            color: "#262626", fontWeight: "500", textTransform: "capitalize",
                            fontStyle: "italic"
                        }}>
                        Job ID:

                    </Typography>
                    <Typography component="div"
                        sx={{
                            fontSize: { "xs": "1.25rem", "sm": "1.25rem", "md": "1.25rem", "lg": "1.25rem", "xl": "1.25rem" },
                            color: "#FF671F", fontWeight: "500", textTransform: "capitalize",
                            fontStyle: "italic"
                        }}>
                        #63hgb768
                    </Typography>
                </Stack>

            </Stack>

            <Stack className="roleAndApplicationSubmitted" direction="row" justifyContent="space-between">
                <Typography component="div"
                    sx={{
                        fontSize: { "xs": "1.25rem", "sm": "1.25rem", "md": "1.25rem", "lg": "1.25rem", "xl": "1.25rem" },
                        color: "#262626", fontWeight: "500", textTransform: "capitalize"
                    }}>
                    Role - Department
                </Typography>
                <Typography component="div"
                    sx={{
                        fontSize: { "xs": "1.12rem", "sm": "1.12rem", "md": "1.12rem", "lg": "1.12rem", "xl": "1.12rem" },
                        color: "#A3A3A3", fontWeight: "400", textTransform: "capitalize",
                    }}>
                    108 Applications
                </Typography>
            </Stack>

            <Stack className="jobTagsAndStatus" direction="row" justifyContent="space-between">
                <Stack direction="row" gap={2} sx={{
                    flexWrap: "wrap"
                }}>
                    <Stack direction="row" gap={1}
                        sx={tagStyles}>
                        <Box>
                            <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/location.png" alt="Location"></img>
                        </Box>
                        <Typography sx={stackStyles}>
                            Noida
                        </Typography>

                    </Stack>

                    <Stack direction="row" gap={1}
                        sx={tagStyles}>
                        <Box>
                            <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/profession.png" alt="Location"></img>
                        </Box>
                        <Typography sx={stackStyles}>
                            4 - 10 Years
                        </Typography>

                    </Stack>

                    <Stack direction="row" gap={1}
                        sx={tagStyles}>
                        <Box>
                            <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/education.png" alt="Location"></img>
                        </Box>

                        <Typography sx={stackStyles}>
                            14 Dec 2022
                        </Typography>

                    </Stack>
                </Stack>
                <Box> <ActiveJobChip /> <ExpiredJobChip /> <ApprovalPendingJobChip /> <RejectedJobChip /></Box>

            </Stack>
            <Stack direction="row" gap={3}>
                <Stack direction="row" gap={2}>
                    <Typography component="div" sx={PostedJobLinkStyles}>
                        View Candidate applications
                    </Typography>
                    <Box> </Box>
                </Stack>
                <Stack direction="row" gap={2}>
                    <Typography component="div" sx={PostedJobLinkStyles}>
                        View job detail
                    </Typography>
                    <Box> </Box>
                </Stack>
            </Stack>

        </Stack > */}
        <Stack className="postedJobItem" direction="column" sx={{ ...DashboardSectionDivStyles, padding: "0px !important" }}>
            <Stack className="jobItemTopSection" direction="column" gap={1} sx={{ padding: "20px", minHeight: "270px" }}>
                <Stack className="SpecialAbledSection" direction="row" gap={2} sx={{ marginBottom: "20px" }}>
                    {accessibleForDisabled && (
                        <>
                            <Box>
                                <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/job_special_added.png"
                                    alt="special_added_job" />
                            </Box>
                            <Typography component="div"
                                sx={{
                                    fontSize: { "xs": "1rem", "sm": "1rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
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
                                fontSize: "1rem",
                                color: "#262626", fontWeight: "500", textTransform: "capitalize",
                                fontStyle: "italic"
                            }}>
                            Job ID:

                        </Typography>
                        <Typography component="div"
                            sx={{
                                fontSize: "1rem",
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
                    {/* <Typography component="div"
                        sx={{
                            fontSize: { "xs": "1.12rem", "sm": "1.12rem", "md": "1.12rem", "lg": "1.12rem", "xl": "1.12rem" },
                            color: "#A3A3A3", fontWeight: "400", textTransform: "capitalize",
                        }}>
                        108 Applications
                    </Typography> */}
                </Stack>

                <Box className="jobSalary" >
                    <Typography component="div"
                        sx={{
                            fontSize: "1rem",
                            color: "#262626", fontWeight: "600", textTransform: "capitalize"
                        }}>
                        {`${inhandSalaryPermonth?.currency} ${inhandSalaryPermonth?.minSalary} - ${inhandSalaryPermonth?.maxSalary}`}

                    </Typography>
                </Box>

                <Stack className="jobTagsAndStatus" direction="row" justifyContent="space-between">
                    <Stack direction="row" gap={2} sx={{
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
                    <Box>
                        {active === "active" && <ActiveJobChip />}
                        {active === "expired" && <ExpiredJobChip />}
                        {active === "pending" && <ApprovalPendingJobChip />}
                        {active === "rejected" && <RejectedJobChip />}
                    </Box>

                </Stack>

                <Stack direction="row" justifyContent="flex-start" gap={2} sx={{ margin: "10px 0px" }}>
                    <Button variant="contained"
                        type="submit"
                        sx={{
                            width: "350px",
                            background: "#FF671F",
                            borderRadius: "5px",
                            textTransform: "capitalize",
                            fontSize: "0.8rem",
                            padding: "10px !important",
                            "&:hover": {
                                background: "#FF671F",
                            }
                        }
                        }>Know Eligibility Score</Button >
                    <Button variant="contained"
                        type="button"
                        sx={{
                            width: "350px",
                            background: "#FCF9F5",
                            borderRadius: "5px",
                            color: "#000000",
                            textTransform: "capitalize",
                            fontSize: "0.8rem",
                            padding: "10px !important",
                            "&:hover": {
                                background: "#FCF9F5",
                                color: "#000000",

                            }
                        }
                        }>View Job Details
                    </Button >

                </Stack>

            </Stack >

            <Stack className="jobItemBottomSection" direction="row" sx={{ background: "#FCF9F5", padding: "10px" }} justifyContent="space-between">
                <Typography component="div"
                    sx={{
                        fontSize: "0.8rem",
                        color: "#262626", fontWeight: "500",
                        textTransform: "capitalize"
                    }}>
                    {`Additional requirement: ${replaceUnderscore(vehicleRequired)}, ${replaceUnderscore(language)}`}
                </Typography>
                <Typography component="div"
                    sx={{
                        fontSize: "0.8rem",
                        color: "#262626", fontWeight: "500"
                    }}>
                    Posted on {getJobPostedTime(createdAt)}
                </Typography>
            </Stack>
        </Stack>

    </>

    )
}

export default PostedJobItem;