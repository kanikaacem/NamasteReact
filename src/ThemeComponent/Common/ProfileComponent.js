import { postRequest, PostImageRequest } from "../../utils/ApiRequests";
import { uploadFileURL } from "../../utils/ApiUrls";
import { Box, Button, Stack, Typography, Divider, Tabs, Tab, MenuItem, Select } from "@mui/material";

import { MeetingType } from "../../utils/Data";
import { PDFReader } from 'reactjs-pdf-reader';
import { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import Moment from 'react-moment';

import CreateIcon from '@mui/icons-material/Create';
const ProfileComponent = ({ userData, userType }) => {
    console.log(userData)
    const [value, setValue] = useState(userType === "employer" ? 1 : 0);
    const [meetingType, setMeetingType] = useState(" ");
    const [userImage, setUserImage] = useState(window.location.origin + "/assets/Avatar.png");

    const uploadProfileImage = async (event) => {
        let file = event.target.files[0];
        let formData = new FormData();
        formData.append('image', file);
        formData.append('ImageType', 'CandidateResume');
        // console.log(formData)
        let response = await PostImageRequest(uploadFileURL, formData);
        if (response.status == 1) {
            // console.log(response);
            setUserImage(response.data[0].location)
        }
    }
    return (<>
        <Stack className="CandidateProfilePage" direction="row" gap={2} sx={{
            padding: { "lg": "20px 100px", "md": "20px", "xs": "20px" },
            background: "#f9f9f9",
            flexWrap: "wrap"
        }}>
            <Box sx={{ width: { "lg": "71%", "md": "100%", "xs": "100%" }, minHeight: "700px" }}>
                <Stack direction="row"
                    alignItems="center" justifyContent="flex-start" gap={3} sx={{ height: "150px", padding: "20px" }}>
                    <Box sx={{ width: "100px" }}>
                        <img src={userImage} width="100%" alt="Profile" style={{ borderRadius: "50%", cursor: "pointer" }}
                            onClick={() => document.getElementById("profileImage").click()} />
                        <input type="file" id="profileImage" style={{ display: "none" }} onChange={uploadProfileImage} />
                    </Box>
                    <Box>
                        <Typography component="div" sx={{ fontSize: { "lg": "30px", "md": "30px", "xs": "24px" }, fontWeight: "700", color: "#4E3A67" }}>
                            {userData && userData.personalInfo && userData.personalInfo.fullname ? userData.personalInfo.fullname : " Not mentioned"}
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67" }}>
                            {userData && userData.lastlogin ? "Last Login : " + userData.lastlogin : "Last Login: 20-01-2023"}
                        </Typography>
                        {userType === "candidate" && <>
                            <Box sx={{ margin: '10px 0px' }}>
                                <ProgressBar bgColor="#4E3A67" completed={userData && userData.profilecompleted} />
                            </Box></>}
                        {userType === "employer" && <>
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
                        </>}

                    </Box>
                </Stack>

                <Stack direction="row" alignItems="center" justifyContent="flex-start" sx={{
                    minHeight: "50px", margin: "10px 0px", padding: "10px",
                    flexWrap: 'wrap',
                    gap: "40px"
                }}
                    divider={<Divider orientation="vertical" flexItem />}>

                    <Stack direction="column" gap={1}>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67", fontWeight: "600" }}>
                            Current Location
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67" }}>

                            {userData && userData.personalInfo && userData.personalInfo.state ? userData.personalInfo.state : "Not mentioned"}

                        </Typography>
                    </Stack>

                    <Stack direction="column" gap={1}>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67", fontWeight: "600" }}>
                            Perferred Location
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67" }}>
                            {userData && userData.personalInfo && userData.personalInfo.preffered_location ?
                                userData.personalInfo.preffered_location : "Not mentioned"}
                        </Typography>
                    </Stack>



                    <Stack direction="column" gap={1}>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67", fontWeight: "600" }}>
                            Experience
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67" }}>
                            {userData && userData.personalInfo && userData.personalInfo.total_work_experience ?
                                userData.personalInfo.total_work_experience + " Yrs" : "Not mentioned"}
                        </Typography>
                    </Stack>

                    <Stack direction="column" gap={1}>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67", fontWeight: "600" }}>
                            Current Salary
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67" }}>
                            {userData && userData.personalInfo && userData.personalInfo.current_salary ?
                                userData.personalInfo.current_salary : "Not mentioned"}
                        </Typography>
                    </Stack>
                </Stack>



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
                            {userType === "candidate" && <Tab label="RESUME" />}
                            <Tab label="PROFILE" />
                        </Tabs>
                    </Box>
                    {
                        value == 0 && (<>
                            {/* <Box>
                                <CreateIcon />
                            </Box> */}
                            {userData.resume && userData.resume.resume ? <>

                                <Box sx={{ overflowY: "scroll", height: "700px", textAlign: "center" }} >
                                    <PDFReader showAllPage={true} url={userData &&
                                        userData.resume.resume} />


                                </Box></> :
                                <Box sx={{
                                    overflowY: "scroll", height: "700px", display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                    Not Uploaded
                                </Box>

                            }

                        </>)

                    }
                    {
                        value == 1 && (<>
                            <Stack direction="column" gap={2} sx={{
                                padding: {
                                    "lg": "30px", "md": "0px", "xs": "0px"
                                }
                            }}
                                divider={<Divider orientation="horizontal" flexItem />} >
                                <Box sx={{

                                    padding: "30px"
                                }}>
                                    <Typography component="div" sx={{ fontSize: "20px", fontWeight: "600", color: "#4E3A67" }}>
                                        Professional Details
                                    </Typography>
                                    <Stack direction="column" gap={1}>
                                        {userData && userData.workHistory && userData.workHistory.length <= 0 && "Not mentioned"}
                                        {userData && userData.workHistory && userData.workHistory.length > 0 && userData.workHistory.map((item) => {
                                            return (<>
                                                <Box>
                                                    <Typography component="div" sx={{ fontSize: "16px", color: "#806E96", fontWeight: "600" }}>
                                                        {item.company_name ? item.company_name : "Not mentioned"}
                                                    </Typography>
                                                    <Typography component="div" sx={{ fontSize: "16px", color: "#806E96" }}>
                                                        {item.designation ? item.designation : "Not Mentioned"}
                                                    </Typography>
                                                    <Typography component="div" sx={{ fontSize: "16px", color: "#806E96" }}>
                                                        <Moment format="DD/MM/YYYY">{item.starting_year}</Moment>{" to "}
                                                        <Moment format="DD/MM/YYYY">{item.ending_year}</Moment>
                                                    </Typography>
                                                </Box>
                                            </>)
                                        })}
                                    </Stack>

                                </Box>

                                <Box sx={{

                                    padding: "30px"
                                }}>
                                    <Typography component="div" sx={{ fontSize: "20px", fontWeight: "600", color: "#4E3A67" }}>
                                        Educational Details
                                    </Typography>
                                    <Stack direction="column" gap={1}>
                                        {userData && userData.educationalInfo && userData.educationalInfo.length <= 0 && "Not mentioned"}
                                        {userData && userData.educationalInfo && userData.educationalInfo.length > 0 && userData.educationalInfo.map((item) => {
                                            return (<>
                                                <Box>
                                                    <Typography component="div" sx={{ fontSize: "16px", color: "#806E96", fontWeight: "600" }}>
                                                        {item.institude_name ? item.institude_name : "Institute name"}
                                                    </Typography>
                                                    <Typography component="div" sx={{ fontSize: "16px", color: "#806E96" }}>
                                                        {item.qualification + " ( " + item.course_type.replace("_", " ").toUpperCase() + " )" + " | "}
                                                        <Moment format="YYYY">{item.starting_year}</Moment>{" to "}
                                                        <Moment format="YYYY">{item.ending_year}</Moment>
                                                    </Typography>
                                                </Box>
                                            </>)
                                        })}
                                    </Stack>
                                </Box>

                                <Box sx={{

                                    padding: "30px"
                                }}>
                                    <Typography component="div" sx={{ fontSize: "20px", fontWeight: "600", color: "#4E3A67" }}>
                                        More Information                                    </Typography>

                                    <Stack direction="column" gap={1}>
                                        <Stack direction="row" sx={{
                                            flexWrap: "wrap"
                                        }}>
                                            <Typography component="div" sx={{ width: "300px", fontSize: "18px", color: "#806E96" }}>
                                                Current Location:
                                            </Typography>
                                            <Typography component="div" sx={{ fontSize: "16px", color: "#806E96", textTransform: "capitalize" }}>
                                                {userData && userData.personalInfo && userData.personalInfo.state ? userData.personalInfo.state : "Not mentioned"}
                                            </Typography>
                                        </Stack>
                                        <Stack direction="row" sx={{
                                            flexWrap: "wrap"
                                        }}>
                                            <Typography component="div" sx={{ width: "300px", fontSize: "18px", color: "#806E96" }}>
                                                Perferred Location:
                                            </Typography>
                                            <Typography component="div" sx={{ fontSize: "16px", color: "#806E96", textTransform: "capitalize" }}>
                                                {userData && userData.personalInfo && userData.personalInfo.preffered_location ? userData.personalInfo.preffered_location : "Not mentioned "}
                                            </Typography>
                                        </Stack>
                                        <Stack direction="row" sx={{
                                            flexWrap: "wrap"
                                        }}>
                                            <Typography component="div" sx={{ width: "300px", fontSize: "18px", color: "#806E96" }}>
                                                Current Salary:
                                            </Typography>
                                            <Typography component="div" sx={{ fontSize: "16px", color: "#806E96", textTransform: "capitalize" }}>
                                                {userData && userData.personalInfo && userData.personalInfo.current_salary ? userData.personalInfo.current_salary : "Not mentioned "}
                                            </Typography>
                                        </Stack>
                                        <Stack direction="row" sx={{
                                            flexWrap: "wrap"
                                        }}>
                                            <Typography component="div" sx={{ width: "300px", fontSize: "18px", color: "#806E96" }}>
                                                Expected Salary:                                            </Typography>
                                            <Typography component="div" sx={{ fontSize: "16px", color: "#806E96", textTransform: "capitalize" }}>
                                                {userData && userData.personalInfo && userData.personalInfo.expected_salary ? userData.personalInfo.expected_salary : "Not mentioned"}

                                            </Typography>
                                        </Stack>
                                        <Stack direction="row" sx={{
                                            flexWrap: "wrap"
                                        }}>
                                            <Typography component="div" sx={{ width: "300px", fontSize: "18px", color: "#806E96" }}>
                                                Experience:
                                            </Typography>
                                            <Typography component="div" sx={{ fontSize: "16px", color: "#806E96", textTransform: "capitalize" }}>
                                                {userData && userData.personalInfo && userData.personalInfo.total_work_experience ? userData.personalInfo.total_work_experience + " Yrs " : "Not mentioned "}
                                            </Typography>
                                        </Stack>
                                        <Stack direction="row" sx={{
                                            flexWrap: "wrap"
                                        }}>
                                            <Typography component="div" sx={{ width: "300px", fontSize: "18px", color: "#806E96" }}>
                                                Gender:
                                            </Typography>
                                            <Typography component="div" sx={{ fontSize: "16px", color: "#806E96", textTransform: "capitalize" }}>
                                                {userData && userData.personalInfo && userData.personalInfo.gender ? userData.personalInfo.gender : "Not mentioned "}

                                            </Typography>
                                        </Stack>

                                        {/* <Stack direction="row" sx={{
                                            flexWrap: "wrap"
                                        }}>
                                            <Typography component="div" sx={{ width: "300px", fontSize: "18px", color: "#806E96" }}>
                                                Age:
                                            </Typography>
                                            <Typography component="div" sx={{ fontSize: "16px", color: "#806E96", textTransform: "capitalize" }}>
                                                <Moment fromNow ago >{userData && userData.dob}</Moment>
                                            </Typography>
                                        </Stack> */}
                                        {/* <Stack direction="row" sx={{
                                            flexWrap: "wrap"
                                        }}>
                                            <Typography component="div" sx={{ width: "300px", fontSize: "18px", color: "#806E96" }}>
                                                Notice Period:
                                            </Typography>
                                            <Typography component="div" sx={{ fontSize: "16px", color: "#806E96", textTransform: "capitalize" }}>
                                                Immediately                                            </Typography>
                                        </Stack>
                                        <Stack direction="row" sx={{
                                            flexWrap: "wrap"
                                        }}>
                                            <Typography component="div" sx={{ width: "300px", fontSize: "18px", color: "#806E96" }}>
                                                Application Date:
                                            </Typography>
                                            <Typography component="div" sx={{ fontSize: "16px", color: "#806E96", textTransform: "capitalize" }}>
                                                20-01-2023                                            </Typography>
                                        </Stack> */}


                                    </Stack>
                                </Box>

                                {/* <Box sx={{

                                    padding: "30px"
                                }}>
                                    <Typography component="div" sx={{ fontSize: "20px", fontWeight: "600", color: "#4E3A67" }}>
                                        Additional Information
                                    </Typography>

                                    <Stack direction="column" gap={1}>
                                        <Stack direction="row" sx={{
                                            flexWrap: "wrap"
                                        }}>
                                            <Typography component="div" sx={{ width: "300px", fontSize: "18px", color: "#806E96" }}>
                                                Language:
                                            </Typography>
                                            <Typography component="div" sx={{ fontSize: "16px", color: "#806E96" }}>
                                                English
                                            </Typography>
                                        </Stack>
                                        <Stack direction="row" sx={{
                                            flexWrap: "wrap"
                                        }}>
                                            <Typography component="div" sx={{ width: "300px", fontSize: "18px", color: "#806E96" }}>
                                                CAT Percentile::
                                            </Typography>
                                            <Typography component="div" sx={{ fontSize: "16px", color: "#806E96" }}>
                                                0.0
                                            </Typography>
                                        </Stack>





                                    </Stack>
                                </Box> */}

                            </Stack>
                        </>)
                    }

                </Box>
            </Box>
            {userType === "employer" && <>

                <Stack direction="column" sx={{ width: { "lg": "25%", "md": "100%", "xs": "100%" }, padding: "20px" }}>
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
                        > <Stack direction="row" gap={2} alignItems="center" >
                                <Box>
                                    <img src={window.location.origin + "/assets/Chat1.png"} alt="Chat" />
                                </Box>
                                <Box>
                                    Chat with
                                    {userData && userData.personalInfo && userData.personalInfo.fullname ? " " + userData.personalInfo.fullname : " Gyanendra Chaudhary"}

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
                            } ><Stack direction="row" alignItems="center" justifyContent="center" sx={{
                                gap: "6px"
                            }} >
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
                            } ><Stack direction="row" alignItems="center" justifyContent="center" sx={{
                                gap: "6px"
                            }}  >
                                <Box><img src={window.location.origin + "/assets/Profile2.png"} alt="Profile2"></img></Box>
                                <Box>Download Resume</Box></Stack></Button>
                    </Stack>


                    {/* <Stack direction="column" gap={1}>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67", fontWeight: "600" }}>
                            Contact Information
                        </Typography>
                        <Stack direction="row" justifyContent="space-between">
                            <Box >
                                <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67" }}>
                                    Phone
                                </Typography>
                                <Typography component="div" sx={{ fontSize: "20px", color: "#FC9A7E" }}>
                                    9818032487
                                </Typography>
                            </Box>
                            <Box>
                                <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67" }}>
                                    E-mail
                                </Typography>
                                <Typography component="div" sx={{ fontSize: "20px", color: "#FC9A7E" }}>
                                    demo@gmail.com
                                </Typography>
                            </Box>
                        </Stack>
                    </Stack> */}


                </Stack>
            </>}



        </Stack >
    </>)
}
export default ProfileComponent;