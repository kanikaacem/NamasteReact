import { Box, Button, Stack, Typography } from "@mui/material";

import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

import Moment from 'react-moment';

const CandidateComponent = ({ item }) => {
    console.log(item)
    return (<>
        <Stack direction="column" gap={1} sx={{ padding: "20px", background: "#FFFFFF" }}>
            <Stack direction="row" gap={2} >
                <Box sx={{ width: "25%" }}>
                    <Stack direction="row" gap={2} alignItems="center" justifyContent="center">
                        <Box sx={{ width: "200px" }}>
                            <img src={window.location.origin + "/assets/profile.png"} alt="ProfileLogo" width="100%" sx={{ borderRadius: "50%" }} />
                        </Box>
                        <Stack gap={1} direction="column" sx={{ margin: "20px 0px" }}>
                            <Typography component="div" sx={{ fontSize: "14px" }}>
                                Name:{item && item.userid && item.userid.fullname}
                            </Typography>
                            <Typography component="div" sx={{ fontSize: "14px" }}>
                                Email:{item && item.userid && item.userid.email}
                            </Typography>
                            <Typography component="div" sx={{ fontSize: "14px" }}>
                                Location :  {item && item.userid && item.userid.address}
                            </Typography>
                            <Typography component="div" sx={{ fontSize: "14px" }}>
                                Notice Period : {item && item.userid && item.userid.notice_period}
                            </Typography>
                            <Typography component="div" sx={{ fontSize: "14px", textTransform: "capitalize" }}>
                                Applied For :  {item && item.jobsrole.replaceAll("_", " ")}
                            </Typography>

                        </Stack>
                    </Stack>
                    <Box sx={{ margin: "20px auto", textAlign: "center" }}>
                        <Button variant="outlined" startIcon={<PhoneIcon />} > Call</Button>
                    </Box>
                </Box>
                <Box sx={{ width: "25%" }}>
                    {item && item.userid.workhistory.map((work) => {
                        return (<>
                            {typeof (work) != null &&

                                <Box>
                                    <Typography component="div" sx={{ fontSize: "14px", fontWeight: "600", textTransform: "capitalize" }}>
                                        {work && work.department}
                                    </Typography>
                                    <Typography component="div" sx={{ fontSize: "14px", textTransform: "capitalize" }}>
                                        {work && work.designation}
                                    </Typography>
                                    {/* <Typography component="div" sx={{ fontSize: "14px" }}>
                                        <Moment format="DD/MM/YYYY">
                                            {item && item.startdate}
                                        </Moment> to <Moment format="DD/MM/YYYY">
                                            {item && item.endate}
                                        </Moment>
                                    </Typography> */}
                                </Box>}

                        </>)
                    })}


                    {/* <Box>
                        <Typography component="div" sx={{ fontSize: "14px", fontWeight: "600" }}>
                            InnovationM
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "14px" }}>
                            Sr. software engineer
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "14px" }}>
                            Feb, 2022 to present
                        </Typography>
                    </Box>

                    <Box>
                        <Typography component="div" sx={{ fontSize: "14px", fontWeight: "600" }}>
                            InnovationM
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "14px" }}>
                            Sr. software engineer
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "14px" }}>
                            Feb, 2022 to present
                        </Typography>
                    </Box> */}
                </Box>
                <Box sx={{ width: "25%" }}>
                    {
                        item && item.userid.education.map((education) => {
                            return (<>
                                {
                                    typeof (education) != null && <>
                                        <Box>
                                            <Typography component="div" sx={{ fontSize: "14px", fontWeight: "600" }}>
                                                {education && education.institute}
                                            </Typography>
                                            <Typography component="div" sx={{ fontSize: "14px" }}>
                                                {education && education.qualification}
                                            </Typography>

                                        </Box></>
                                }
                            </>)
                        })
                    }

                </Box>
                <Stack direction="column" gap={1} sx={{ width: "25%" }} alignItems="center" justifyContent="center">
                    <Stack direction="row" gap={2}>
                        <Button variant="outlined" startIcon={<PhoneIcon />} > Call Chat</Button>
                        <Button variant="outlined" startIcon={<ChatIcon />} > Chat</Button>
                    </Stack>
                    <Box>
                        <Button variant="outlined" startIcon={<TurnedInNotIcon />} >Saved Candidate</Button>
                    </Box>
                    <Box>
                        <Button variant="outlined" startIcon={<ArrowDownwardIcon />} >Download Resume</Button>
                    </Box>
                </Stack>
            </Stack>

            {/* <Box>
                You applied to Kotlin developer Job - <a href={window.location.origin + "/employer-dashboard/view-profile"} > View Profile</a>
            </Box> */}

        </Stack>

    </>)
}

export default CandidateComponent;