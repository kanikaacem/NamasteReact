import { Box, Button, Stack, Typography } from "@mui/material";

import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

const CandidateComponent = ({ item }) => {
    console.log(item)
    return (<>
        <Stack direction="column" gap={1} sx={{ padding: "20px", background: "#FFFFFF" }}>
            <Stack direction="row" gap={2} >
                <Box sx={{ width: "25%" }}>
                    <Stack direction="row" gap={1} alignItems="center" justifyContent="center">
                        <Box sx={{ width: "50px" }}>
                            <img src={window.location.origin + "/assets/profile.png"} alt="ProfileLogo" width="100%" sx={{ borderRadius: "50%" }} />
                        </Box>
                        <Box>
                            <Typography component="div" sx={{ fontSize: "14px" }}>
                                {item.userid.email}
                            </Typography>
                            <Typography component="div" sx={{ fontSize: "14px" }}>
                                Experience : 4 ys
                            </Typography>
                            <Typography component="div" sx={{ fontSize: "14px" }}>
                                Location : Indore
                            </Typography>
                            <Typography component="div" sx={{ fontSize: "14px" }}>
                                Notice Period : Immediately
                            </Typography>
                        </Box>
                    </Stack>
                    <Box sx={{ margin: "20px auto", textAlign: "center" }}>
                        <Button variant="outlined" startIcon={<PhoneIcon />} > Call</Button>
                    </Box>
                </Box>
                <Box sx={{ width: "25%" }}>
                    {item && item.userid.education.map((item) => {
                        return (<>
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
                            </Box>
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
                    <Box>
                        <Typography component="div" sx={{ fontSize: "14px", fontWeight: "600" }}>
                            Radha Raman institue of technology and science bhipal
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "14px" }}>
                            BTech / BE (Full time)
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "14px" }}>
                            2014 to 2018
                        </Typography>
                    </Box>
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