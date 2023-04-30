import { ShortlistRejectCandidate } from "../../utils/ApiUrls";
import { postRequest } from "../../utils/ApiRequests";
import { Avatar, Box, Badge, Button, Stack, Typography } from "@mui/material";

import Moment from 'react-moment';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import ThemeMessage from "./ThemeMessage";
const CandidateComponent = ({ CandidateData, CandidateStatus, AppliedDate, jobId, jobInformation }) => {
    const [candStatus, setCandStatus] = useState(CandidateStatus && CandidateStatus);
    const [candidateAction, setCandidateAction] = useState(false);
    const [candidateActionMessage, setCandidateActionMessage] = useState(false);

    const navigate = useNavigate();
    const CandidateAction = async (jobId, canId, status) => {
        let response = await postRequest(ShortlistRejectCandidate, { jobid: jobId, candidateid: canId, status: status });
        if (status === "shortlist")
            setCandidateActionMessage("You have successfully shortlisted the Candidate.")
        if (status === "rejected")
            setCandidateActionMessage("You have successfully rejected the Candidate.")

        if (response.status === '1') {
            setCandStatus(status);
            setCandidateAction(true);

        }

    }
    return (<>
        <ThemeMessage open={candidateAction} setOpen={setCandidateAction}
            message={candidateActionMessage} type="success" />

        <Box sx={{
            background: " #FFFFFF",
            border: "1px solid #E2D7F0",
            borderRadius: "19px",
            padding: "20px",
            cursor: "pointer"
        }}
            onClick={() =>
                navigate('/employer-dashboard/' + jobId + '/view-profile/' + CandidateData._id)
            }>
            <Stack direction={{ "lg": "row", "md": "row", "xs": "column" }}  gap={1} 
            sx={{flexWrap:"wrap"}}>
                <Box sx={{ width: { "lg": "8%", "md": "8%", "xs": "100%" } }}>
                    <Badge color="secondary" variant="dot" >

                        {CandidateData && CandidateData.profile_image && CandidateData.profile_image !== "demolink" ?
                            <>
                                <Box sx={{ width: "80px", height: "80px", position: "relative" }}>


                                    <img src={CandidateData && CandidateData.profile_image}
                                        alt={CandidateData && CandidateData.personalInfo && CandidateData.personalInfo.fullname}
                                        width="100%" style={{ borderRadius: "50%", cursor: "pointer" }} />
                                </Box>
                            </>


                            : <Avatar sx={{ fontSize: 80 }} alt={CandidateData && CandidateData.personalInfo && CandidateData.personalInfo.fullname} />}
                    </Badge>

                </Box>
                <Stack direction="column" gap={2} sx={{
                    width:
                        { "lg": "30%", "md": "30%", "xs": "100%" }
                }}>
                    <Typography component="div" sx={{
                        fontSize: {
                            "xs": "12px", "sm": "12px", "md": "24px", "lg": "24px", "xl": "24px"
                        }, color: "#4E3A67", fontWeight: "700"
                    }}>
                        {CandidateData && CandidateData.personalInfo && CandidateData.personalInfo.fullname}
                    </Typography>
                    <Stack direction="row" gap={2}>
                        <Typography component="div" sx={{
                            fontSize: {
                                "xs": "12px", "sm": "12px", "md": "18px", "lg": "18px", "xl": "18px"

                            }, color: "#4E3A67", fontWeight: "700"
                        }}>
                            Experience:
                        </Typography>
                        <Typography component="div" sx={{
                            fontSize: {
                                "xs": "12px", "sm": "12px", "md": "18px", "lg": "18px", "xl": "18px"

                            }, color: "#806E96"
                        }}>
                            {CandidateData && CandidateData.personalInfo && CandidateData.personalInfo.total_work_experience}
                        </Typography>
                    </Stack>
                    <Stack direction="row" gap={2}>
                        <Typography component="div" sx={{
                            fontSize: {
                                "xs": "12px", "sm": "12px", "md": "18px", "lg": "18px", "xl": "18px"

                            }, color: "#4E3A67", fontWeight: "700"
                        }}>
                            Location:
                        </Typography>
                        <Typography component="div" sx={{
                            fontSize: {
                                "xs": "12px", "sm": "12px", "md": "18px", "lg": "18px", "xl": "18px"

                            }, color: "#806E96"
                        }}>
                            {CandidateData && CandidateData.personalInfo && CandidateData.personalInfo.state}

                        </Typography>
                    </Stack>
                    <Stack direction="row" gap={2}>
                        <Typography component="div" sx={{
                            fontSize: {
                                "xs": "12px", "sm": "12px", "md": "18px", "lg": "18px", "xl": "18px"

                            }, color: "#4E3A67", fontWeight: "700"
                        }}>
                            Applied on:
                        </Typography>
                        <Typography component="div" sx={{
                            fontSize: {
                                "xs": "12px", "sm": "12px", "md": "18px", "lg": "18px", "xl": "18px"

                            }, color: "#806E96"
                        }}>
                            {new Date(
                                AppliedDate
                            ).toLocaleDateString()}
                        </Typography>
                    </Stack>
                </Stack>
                <Stack direction="column" sx={{
                    width: { "lg": "25%", "md": "25%", "xs": "100%" }
                }} gap={2}>
                    {CandidateData && CandidateData.workHistory.map((item) => {
                        return (<>
                            <Stack direction="column" gap={1}>
                                <Typography component="div" sx={{
                                    fontSize: {
                                        "xs": "12px", "sm": "12px", "md": "18px", "lg": "18px", "xl": "18px"

                                    }, color: "#4E3A67", fontWeight: "700"
                                }}>
                                    {item.company_name}
                                </Typography>
                                <Typography component="div" sx={{
                                    fontSize: {
                                        "xs": "12px", "sm": "12px", "md": "18px", "lg": "18px", "xl": "18px"

                                    }, color: "#806E96"
                                }}>
                                    {item.designation}
                                </Typography>
                                <Typography component="div" sx={{
                                    fontSize: {
                                        "xs": "12px", "sm": "12px", "md": "18px", "lg": "18px", "xl": "18px"

                                    }, color: "#806E96"
                                }}>
                                    <Moment format="DD/MM/YYYY">{item.starting_year}</Moment>{" to "}
                                    <Moment format="DD/MM/YYYY">{item.ending_year}</Moment>
                                </Typography>
                            </Stack>
                        </>)
                    })}


                </Stack>

                <Stack direction="column" sx={{
                    width: { "lg": "25%", "md": "25%", "xs": "100%" }
                }} gap={2}>
                    {
                        CandidateData && CandidateData.educationalInfo.map((item) => {
                            return (<>
                                <Stack direction="column" gap={1}>
                                    <Typography component="div" sx={{
                                        fontSize: {
                                            "xs": "12px", "sm": "12px", "md": "18px", "lg": "18px", "xl": "18px"

                                        }, color: "#4E3A67", fontWeight: "700"
                                    }}>
                                        {item.institude_name ? item.institude_name : "Institute name"}
                                    </Typography>
                                    <Typography component="div" sx={{
                                        fontSize: {
                                            "xs": "12px", "sm": "12px", "md": "18px", "lg": "18px", "xl": "18px"

                                        }, color: "#806E96"
                                    }}>
                                        {item.qualification + " ( " + item.course_type.replace("_", " ").toUpperCase() + " )"}
                                    </Typography>
                                    <Typography component="div" sx={{
                                        fontSize: {
                                            "xs": "12px", "sm": "12px", "md": "18px", "lg": "18px", "xl": "18px"

                                        }, color: "#806E96"
                                    }}>
                                        <Moment format="YYYY">{item.starting_year}</Moment>{" to "}
                                        <Moment format="YYYY">{item.ending_year}</Moment>
                                    </Typography>
                                </Stack>
                            </>)
                        })
                    }
                </Stack>
            </Stack>

            <Typography component="div" sx={{
                fontSize: {
                    "xs": "12px", "sm": "12px", "md": "18px", "lg": "18px", "xl": "18px"

                }, color: "#4E3A67",
                margin: "10px 0px"
            }}>
                {jobInformation !== undefined && "Applied to :  " + jobInformation.job_title}
            </Typography>
            <Stack direction="row"
                sx={{
                    margin: {"xs":"0px","sm":"0px","md":"0px","lg":"50px 0px","xl":"50px 0px"},
                    flexWrap: "wrap",
                    rowGap: "15px",
                    justifyContent: { "lg": "space-between", "md": "center", "xs": "center" }
                }}>
                {candStatus === "pending" ? <>
                    <Stack direction="row" gap={2} sx={{
                        flexWrap: 'wrap'
                    }}>
                        <Button type="button"
                            onClick={(event) => {
                                CandidateAction(jobId, CandidateData._id, "shortlist");
                                event.stopPropagation();
                            }}
                            sx={{
                                background: " #FC9A7E",
                                border: "1px solid #E2D7F0",
                                borderRadius: "7px",
                                color: " #4E3A67",
                                padding: "10px",
                                fontWeight: "700",
                                minWidth: "225px",
                                fontSize: {
                                    "xs": "12px", "sm": "12px", "md": "18px", "lg": "18px", "xl": "18px"

                                },
                                "&:hover": {
                                    background: " #FC9A7E",
                                    border: "1px solid #E2D7F0",
                                    borderRadius: "7px",
                                    color: " #4E3A67",
                                    padding: "10px",
                                    fontWeight: "700",
                                    minWidth: "225px",
                                    fontSize: {
                                        "xs": "12px", "sm": "12px", "md": "18px", "lg": "18px", "xl": "18px"

                                    },
                                }
                            }}> Shortlist</Button>
                        <Button type="button"
                            onClick={(event) => {
                                CandidateAction(jobId, CandidateData._id, "rejected");
                                event.stopPropagation();
                            }}

                            sx={{
                                background: "#FFFFFF",
                                border: " 1px solid #E2D7F0",
                                borderRadius: "7px",
                                color: " #4E3A67",
                                padding: "10px",
                                fontWeight: "700",
                                minWidth: "225px",
                                fontSize: {
                                    "xs": "12px", "sm": "12px", "md": "18px", "lg": "18px", "xl": "18px"

                                },

                                "&:hover": {
                                    background: "#FFFFFF",
                                    border: " 1px solid #E2D7F0",
                                    borderRadius: "7px",
                                    color: " #4E3A67",
                                    padding: "10px",
                                    fontWeight: "700",
                                    minWidth: "225px",
                                    fontSize: {
                                        "xs": "12px", "sm": "12px", "md": "18px", "lg": "18px", "xl": "18px"

                                    },
                                }
                            }}> Reject</Button>

                    </Stack>

                </> :
                    <Typography component="div" sx={{
                        fontSize: {
                            "xs": "12px", "sm": "12px", "md": "18px", "lg": "18px", "xl": "18px"

                        }, color: "#806E96", textTransform: "capitalize"
                    }}>
                        {candStatus}
                    </Typography>
                }

            </Stack>
        </Box >


    </>)
}

export default CandidateComponent;