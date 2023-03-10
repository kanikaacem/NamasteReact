import { Box, Badge, Button, Stack, Typography } from "@mui/material";

import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

import Moment from 'react-moment';
const CandidateComponent = ({ CandidateData, AppliedDate, CandidateStatus }) => {
    // { console.log(AppliedDate) }
    // let appliedDate = new Date(AppliedDate);
    // { console.log(AppliedDate) };
    return (<>
        <Box sx={{
            background: " #FFFFFF",
            border: "1px solid #E2D7F0",
            borderRadius: "19px",
            padding: "20px",
            width: { "lg": "100%", "md": "96%", "xs": "96%" }
        }}>
            <Stack direction={{ "lg": "row", "md": "row", "xs": "column" }} gap={1} >
                <Box sx={{ width: { "lg": "8%", "md": "8%", "xs": "100%" } }}>
                    <Badge color="secondary" variant="dot" >
                        <img src={window.location.origin + "/assets/Person1.png"} alt="Person1" />
                    </Badge>

                </Box>
                <Stack direction="column" gap={2} sx={{
                    width:
                        { "lg": "30%", "md": "30%", "xs": "100%" }
                }}>
                    <Typography component="div" sx={{ fontSize: "24px", color: "#4E3A67", fontWeight: "700" }}>
                        {CandidateData && CandidateData.personalInfo && CandidateData.personalInfo.fullname}
                    </Typography>
                    <Stack direction="row" gap={2}>
                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                            Experience:
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                            {CandidateData && CandidateData.personalInfo && CandidateData.personalInfo.total_work_experience}
                        </Typography>
                    </Stack>
                    <Stack direction="row" gap={2}>
                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                            Location:
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                            {CandidateData && CandidateData.personalInfo && CandidateData.personalInfo.state}

                        </Typography>
                    </Stack>
                    <Stack direction="row" gap={2}>
                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                            Applied on:
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                            {/* <Moment format="DD/MM/YYYY">{AppliedDate}</Moment> */}
                            {/* {new Date(AppliedDate)} */}
                        </Typography>
                    </Stack>
                    {/* <Stack direction="row" gap={2}>
                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                            Notice Period:
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                            Immediately Available
                        </Typography>
                    </Stack> */}


                </Stack>
                <Stack direction="column" sx={{
                    width: { "lg": "25%", "md": "25%", "xs": "100%" }
                }} gap={2}>
                    {CandidateData && CandidateData.workHistory.map((item) => {
                        return (<>
                            <Stack direction="column" gap={1}>
                                <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                                    {item.company_name}
                                </Typography>
                                <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                    {item.designation}
                                </Typography>
                                <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
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
                                    <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                                        {item.institude_name ? item.institude_name : "Institute name"}
                                    </Typography>
                                    <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                        {item.qualification + " ( " + item.course_type.replace("_", " ").toUpperCase() + " )"}
                                    </Typography>
                                    <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                        <Moment format="YYYY">{item.starting_year}</Moment>{" to "}
                                        <Moment format="YYYY">{item.ending_year}</Moment>
                                    </Typography>
                                </Stack>
                            </>)
                        })
                    }
                </Stack>
            </Stack>

            <Stack direction="row"
                sx={{
                    margin: "50px 0px",
                    flexWrap: "wrap",
                    rowGap: "15px",
                    justifyContent: { "lg": "space-between", "md": "center", "xs": "center" }
                }}>
                <Stack direction="row" gap={2}>
                    <Button type="button"
                        sx={{
                            background: " #FC9A7E",
                            border: "1px solid #E2D7F0",
                            borderRadius: "7px",
                            color: " #4E3A67",
                            padding: "10px",
                            fontWeight: "700",
                            minWidth: "225px",
                            fontSize: "18px",
                            "&:hover": {
                                background: " #FC9A7E",
                                border: "1px solid #E2D7F0",
                                borderRadius: "7px",
                                color: " #4E3A67",
                                padding: "10px",
                                fontWeight: "700",
                                minWidth: "225px",
                                fontSize: "18px",
                            }
                        }}> Shortlist</Button>
                    <Button type="button"
                        sx={{
                            background: "#FFFFFF",
                            border: " 1px solid #E2D7F0",
                            borderRadius: "7px",
                            color: " #4E3A67",
                            padding: "10px",
                            fontWeight: "700",
                            minWidth: "225px",
                            fontSize: "18px",

                            "&:hover": {
                                background: "#FFFFFF",
                                border: " 1px solid #E2D7F0",
                                borderRadius: "7px",
                                color: " #4E3A67",
                                padding: "10px",
                                fontWeight: "700",
                                minWidth: "225px",
                                fontSize: "18px",
                            }
                        }}> Reject</Button>

                </Stack>
                <Stack direction="row" gap={2}>
                    <Button type="button"
                        sx={{
                            background: "#FFFFFF",
                            border: " 1px solid #E2D7F0",
                            borderRadius: "7px",
                            color: " #4E3A67",
                            padding: "10px",
                            fontWeight: "700",
                            minWidth: "225px",
                            fontSize: "18px",

                            "&:hover": {
                                background: "#FFFFFF",
                                border: " 1px solid #E2D7F0",
                                borderRadius: "7px",
                                color: " #4E3A67",
                                padding: "10px",
                                fontWeight: "700",
                                minWidth: "225px",
                                fontSize: "18px",
                            }
                        }}>
                        <Stack direction="row" gap={2} alignItems="center">
                            <img src={window.location.origin + '/assets/Call.png'} alt="call" ></img>
                            <Box> Call</Box>
                        </Stack></Button>

                    <Button type="button"
                        sx={{
                            background: "#FFFFFF",
                            border: " 1px solid #E2D7F0",
                            borderRadius: "7px",
                            color: " #4E3A67",
                            padding: "10px",
                            fontWeight: "700",
                            minWidth: "225px",
                            fontSize: "18px",

                            "&:hover": {
                                background: "#FFFFFF",
                                border: " 1px solid #E2D7F0",
                                borderRadius: "7px",
                                color: " #4E3A67",
                                padding: "10px",
                                fontWeight: "700",
                                minWidth: "225px",
                                fontSize: "18px",
                            }
                        }}>
                        Other Actions
                    </Button>
                </Stack>
            </Stack>
        </Box>


    </>)
}

export default CandidateComponent;