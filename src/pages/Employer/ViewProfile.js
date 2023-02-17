import { Box, Button, Stack, Typography, Divider, Tabs, Tab, MenuItem, Select } from "@mui/material";

import PhoneIcon from '@mui/icons-material/Phone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DownloadIcon from '@mui/icons-material/Download';

import { MeetingType } from "../../utils/Data";

import { PDFReader } from 'reactjs-pdf-reader';
import { useState } from "react";
const ViewProfile = () => {
    const [value, setValue] = useState(0)
    const [meetingType, setMeetingType] = useState(" ");

    return (<>
        <Stack className="CandidateProfilePage" direction="row" gap={2} sx={{
            padding: "20px 100px",
            background: "#f9f9f9"
        }}>
            <Box sx={{ width: "75%", minHeight: "700px" }}>
                <Stack direction="row"
                    alignItems="center" justifyContent="flex-start" gap={3} sx={{ width: "100%", height: "150px", padding: "20px" }}>
                    <Box sx={{ width: "100px" }}>
                        <img src={window.location.origin + "/assets/profile.png"} width="100%" alt="Profile" style={{ borderRadius: "50%" }} />
                    </Box>
                    <Box>
                        <Typography component="div" sx={{ fontSize: "30px", fontWeight: "700", color: "#4E3A67" }}>
                            Gyanendra Chaudhary
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67" }}>
                            Last Login: 20-01-2023
                        </Typography>
                        <Stack direction="row" gap={2}
                            sx={{
                                padding: "20px 0px"
                            }}>
                            <Button variant="outlined"
                                sx={{
                                    // background: "#FFFFFF",
                                    border: "1px solid #E2D7F0",
                                    borderRadius: "7px",
                                    color: "#4E3A67",
                                    fontWeight: "700",
                                    "&:hover": {
                                        // background: "#FFFFFF",
                                        border: "1px solid #E2D7F0",
                                        borderRadius: "7px",
                                        color: "#4E3A67",
                                        fontWeight: "700",
                                    }
                                }
                                } ><Stack direction="row" gap={2} >
                                    <Box><img src={window.location.origin + "/assets/Call.png"} alt="Call"></img></Box>
                                    <Box>Call</Box></Stack>
                            </Button>
                            <Button variant="outlined"
                                sx={{
                                    background: "#E2D7F0",
                                    border: "1px solid #E2D7F0",
                                    borderRadius: "7px",
                                    color: "#4E3A67",
                                    fontWeight: "700",
                                    "&:hover": {
                                        background: "#E2D7F0",
                                        border: "1px solid #E2D7F0",
                                        borderRadius: "7px",
                                        color: "#4E3A67",
                                        fontWeight: "700",
                                    }
                                }
                                } ><Stack direction="row" gap={2} >
                                    <Box><img src={window.location.origin + "/assets/Share.png"} alt="Share"></img></Box>
                                    <Box>Share</Box></Stack></Button>
                        </Stack>

                    </Box>
                </Stack>
                {/* <Stack alignItems="center" justifyContent="center"
                    sx={{
                        width: "100px",
                        margin: "0 auto",
                        position: "absolute",
                        top: "192px",
                        width: "70%"
                    }}>

                </Stack>
                <Box>
                    <Typography component="div" sx={{ fontSize: "20px", textAlign: "center", marginTop: "60px" }}>
                        User Name
                    </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                    <Button variant="outlined" startIcon={<PhoneIcon />} >Call</Button>
                </Box> */}

                <Stack direction="row" gap={2} alignItems="center" justifyContent="space-between" sx={{
                    height: "50px", margin: "10px 0px", padding: "10px"
                }}
                    divider={<Divider orientation="vertical" flexItem />}>

                    <Stack direction="column" gap={1}>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67", fontWeight: "600" }}>
                            Current Location
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67" }}>
                            Delhi
                        </Typography>
                    </Stack>

                    <Stack direction="column" gap={1}>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67", fontWeight: "600" }}>
                            Perferred Location
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67" }}>
                            Delhi, Gurgaon, Noida
                        </Typography>
                    </Stack>

                    <Stack direction="column" gap={1}>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67", fontWeight: "600" }}>
                            Perferred Location
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67" }}>
                            Anywhere
                        </Typography>
                    </Stack>

                    <Stack direction="column" gap={1}>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67", fontWeight: "600" }}>
                            Experience
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67" }}>
                            3y 1m
                        </Typography>
                    </Stack>

                    <Stack direction="column" gap={1}>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67", fontWeight: "600" }}>
                            Current Salary
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67" }}>
                            7 LPA
                        </Typography>
                    </Stack>

                </Stack>

                {/* <Box>
                    <Typography component="div" sx={{ fontSize: "14px", padding: "10px", float: "right" }} >
                        Last Login : 21/12/2022
                    </Typography>
                </Box> */}

                <Box className="UserInformation"
                    sx={{
                        maxWidth: "1200px",
                        margin: "20px auto",
                        borderRadius: "11px",
                        background: "#ffffff",
                        padding: "20px",
                        borderRadius: "20px"
                    }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', background: "#FFFFFF" }}>
                        <Tabs
                            value={value}
                            textColor="primary"
                            indicatorColor="primary"
                            onChange={(event, newValue) => {
                                setValue(newValue);
                                console.log(value);
                            }}
                        >
                            <Tab label="RESUME" />
                            <Tab label="PROFILE" />
                        </Tabs>
                    </Box>
                    {
                        value == 0 && (<>
                            <Box sx={{ overflowY: "scroll", height: "700px" }} >
                                <PDFReader showAllPage={true} url={window.location.origin + '/assets/sample.pdf'} />
                            </Box>
                        </>)

                    }
                    {
                        value == 1 && (<>
                            <Stack direction="column" gap={2} sx={{ padding: "30px" }} >
                                <Box sx={{
                                    border: "1px solid #e5e5e5",
                                    padding: "30px"
                                }}>
                                    <Typography component="div" sx={{ fontSize: "20px", fontWeight: "600" }}>
                                        Professional Details
                                    </Typography>

                                    <Stack direction="column" gap={1}>
                                        <Typography component="div" sx={{ fontSize: "18px", fontWeight: "600" }}>
                                            Pepperbiz marketing and franchise pvt ltd
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "16px" }}>
                                            Andriod Development
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "16px" }}>
                                            jan,2019 to Present
                                        </Typography>
                                    </Stack>
                                </Box>
                                <Box sx={{
                                    border: "1px solid #e5e5e5",
                                    padding: "30px"
                                }}>
                                    <Typography component="div" sx={{ fontSize: "20px", fontWeight: "600" }}>
                                        Personal Details
                                    </Typography>

                                    <Stack direction="column" gap={1}>
                                        <Typography component="div" sx={{ fontSize: "18px", fontWeight: "600" }}>
                                            Pepperbiz marketing and franchise pvt ltd
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "16px" }}>
                                            Andriod Development
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "16px" }}>
                                            jan,2019 to Present
                                        </Typography>
                                    </Stack>
                                </Box>
                                <Box sx={{
                                    border: "1px solid #e5e5e5",
                                    padding: "30px"
                                }}>
                                    <Typography component="div" sx={{ fontSize: "20px", fontWeight: "600" }}>
                                        More Information
                                    </Typography>

                                    <Stack direction="row" gap={1} justifyContent="space-between">
                                        <Typography component="div" sx={{ fontSize: "14px" }}>
                                            Current Location:
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "14px" }}>
                                            Noida
                                        </Typography>
                                    </Stack>

                                    <Stack direction="row" gap={1} justifyContent="space-between">
                                        <Typography component="div" sx={{ fontSize: "14px" }}>
                                            Perferred Location:
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "14px" }}>
                                            Anywhere
                                        </Typography>
                                    </Stack>

                                    <Stack direction="row" gap={1} justifyContent="space-between">
                                        <Typography component="div" sx={{ fontSize: "14px" }}>
                                            Current Salary:
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "14px" }}>
                                            Confidental
                                        </Typography>
                                    </Stack>


                                    <Stack direction="row" gap={1} justifyContent="space-between">
                                        <Typography component="div" sx={{ fontSize: "14px" }}>
                                            Expected Salary:
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "14px" }}>
                                            Confidental
                                        </Typography>
                                    </Stack>

                                    <Stack direction="row" gap={1} justifyContent="space-between">
                                        <Typography component="div" sx={{ fontSize: "14px" }}>
                                            Experience:
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "14px" }}>
                                            3y 8m
                                        </Typography>
                                    </Stack>

                                    <Stack direction="row" gap={1} justifyContent="space-between">
                                        <Typography component="div" sx={{ fontSize: "14px" }}>
                                            Gender:
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "14px" }}>
                                            Male
                                        </Typography>
                                    </Stack>

                                    <Stack direction="row" gap={1} justifyContent="space-between">
                                        <Typography component="div" sx={{ fontSize: "14px" }}>
                                            Age:
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "14px" }}>
                                            25 year old
                                        </Typography>
                                    </Stack>

                                    <Stack direction="row" gap={1} justifyContent="space-between">
                                        <Typography component="div" sx={{ fontSize: "14px" }}>
                                            Notice Period:
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "14px" }}>
                                            Immediately
                                        </Typography>
                                    </Stack>

                                    <Stack direction="row" gap={1} justifyContent="space-between">
                                        <Typography component="div" sx={{ fontSize: "14px" }}>
                                            Application Date:
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "14px" }}>
                                            12-12-2022
                                        </Typography>
                                    </Stack>



                                </Box>
                            </Stack>
                        </>)
                    }

                </Box>
            </Box>
            <Stack direction="column" sx={{ width: "25%", padding: "20px" }}>
                <Stack direction="column"
                    divider={<Divider orientation="horizontal" flexItem />}
                    gap={1} >
                    <Stack direction="row" gap={2} alignItems="center" justifyContent="center" >
                        <Button variant="outlined"
                            sx={{
                                background: "#FC9A7E",
                                border: "1px solid #E2D7F0",
                                borderRadius: "7px",
                                color: "#4E3A67",
                                fontWeight: "700",
                                "&:hover": {
                                    background: "#FC9A7E",
                                    border: "1px solid #E2D7F0",
                                    borderRadius: "7px",
                                    color: "#4E3A67",
                                    fontWeight: "700",
                                }
                            }}> Shortlisted</Button>
                        <Button variant="outlined"

                            sx={{
                                // background: "#FFFFFF",
                                border: "1px solid #E2D7F0",
                                borderRadius: "7px",
                                color: "#4E3A67",
                                fontWeight: "700",
                                "&:hover": {
                                    // background: "#FFFFFF",
                                    border: "1px solid #E2D7F0",
                                    borderRadius: "7px",
                                    color: "#4E3A67",
                                    fontWeight: "700",
                                }
                            }}
                        > Reject</Button>
                    </Stack>

                    <Box sx={{
                        margin: "10px 0px ",
                        width: "100%",
                        background: "#F7F0FF",
                        borderRadius: "9px",
                        padding: "10px"
                    }}>
                        <Select
                            variant="standard"
                            labelId="demo-simple-select-label"
                            name="role"
                            value={meetingType}
                            label="role"
                            onChange={(event) => {
                                setMeetingType(event.target.value);
                            }}
                            sx={{
                                width: "100%", display: "block",
                                BorderBottom: 'none !important',
                                boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 }
                            }}

                        >
                            <MenuItem value=" ">Send Interview Invites</MenuItem>
                            {MeetingType.map((item) =>
                                <MenuItem value={item.value} key={item.id}>{item.name}</MenuItem>
                            )}
                        </Select>
                    </Box>


                </Stack>
                <Box sx={{ marginTop: "100px" }}>
                    <Button variant="outlined"

                        sx={{
                            // background: "#FFFFFF",
                            border: "1px solid #E2D7F0",
                            borderRadius: "7px",
                            color: "#4E3A67",
                            fontWeight: "700",
                            width: "100%",
                            padding: "10px",
                            "&:hover": {
                                // background: "#FFFFFF",
                                border: "1px solid #E2D7F0",
                                borderRadius: "7px",
                                color: "#4E3A67",
                                fontWeight: "700",
                                width: "100%",
                                padding: "10px",
                            }
                        }}
                    > <Stack direction="row" gap={2} >
                            <Box>
                                <img src={window.location.origin + "/assets/Chat1.png"} alt="Chat" />
                            </Box>
                            <Box>
                                Chat with Gyanendra Chaudhary
                            </Box>
                        </Stack></Button>
                </Box>
                <Stack direction="row" gap={2}
                    sx={{
                        padding: "20px 0px"
                    }}>
                    <Button variant="outlined"
                        sx={{
                            // background: "#FFFFFF",
                            border: "1px solid #E2D7F0",
                            borderRadius: "7px",
                            color: "#4E3A67",
                            "&:hover": {
                                // background: "#FFFFFF",
                                border: "1px solid #E2D7F0",
                                borderRadius: "7px",
                                color: "#4E3A67",
                            }
                        }
                        } ><Stack direction="row" gap={1} >
                            <Box><img src={window.location.origin + "/assets/Profile1.png"} alt="Profile1"></img></Box>
                            <Box>Save for later</Box></Stack>
                    </Button>
                    <Button variant="outlined"
                        sx={{
                            background: "#E2D7F0",
                            border: "1px solid #E2D7F0",
                            borderRadius: "7px",
                            color: "#4E3A67",
                            "&:hover": {
                                background: "#E2D7F0",
                                border: "1px solid #E2D7F0",
                                borderRadius: "7px",
                                color: "#4E3A67",
                            }
                        }
                        } ><Stack direction="row" gap={1} >
                            <Box><img src={window.location.origin + "/assets/Profile2.png"} alt="Profile2"></img></Box>
                            <Box>Download Resume</Box></Stack></Button>
                </Stack>
                {/* <Box sx={{ padding: "20px", textAlign: "center" }} >
                    <Button variant="contained" startIcon={<ChatBubbleOutlineIcon />}> Chat with username</Button>
                </Box> */}

                {/* <Stack direction="column" gap={1}>
                    <Stack direction="row" gap={2}>
                        <StarBorderIcon />
                        <Typography component="div" sx={{ fontSize: "14px" }}>
                            Save for Later
                        </Typography>
                    </Stack>

                    <Stack direction="row" gap={2}>
                        <DownloadIcon />
                        <Typography component="div" sx={{ fontSize: "14px" }}>
                            Download Resume
                        </Typography>
                    </Stack>
                </Stack> */}

                {/* <Stack direction="column" gap={1}>
                    <Typography component="div" sx={{ fontSize: "20px" }}>
                        Contact Details
                    </Typography>
                    <Box >
                        <Typography component="div" sx={{ fontSize: "14px" }}>
                            Phone
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "14px" }}>
                            12345678901
                        </Typography>
                    </Box>
                    <Box>
                        <Typography component="div" sx={{ fontSize: "14px" }}>
                            E-mail
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "14px" }}>
                            demo@gmail.com
                        </Typography>
                    </Box>
                </Stack> */}


            </Stack>


        </Stack >
    </>)
}
export default ViewProfile;