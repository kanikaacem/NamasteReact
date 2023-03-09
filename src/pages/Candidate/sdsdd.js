import { Box, Stack, Typography, Button } from "@mui/material";

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import EditIcon from '@mui/icons-material/Edit';
import ProgressBar from "@ramonak/react-progress-bar";

import { CustomizeStackCanProfile, CustomizeBoxProfileHeading, WhiteBox } from "../../utils/Theme";

import { useOutletContext } from "react-router-dom";

import UpdateCandidateBasicInfo from "../../ThemeComponent/ThemeForms/UpdateCandidateBasicInfo";
import { useState } from "react";
const CandidateProfilePage = () => {
    const user = useOutletContext();
    const [showEditBasicInfo, setShowEditBasicInfo] = useState(false);

    return (<>
        <Box className="CandidateProfilePage" sx={{ padding: "20px" }}>

            <Stack direction="row" gap={2}>
                <Stack direction="column" gap={2} sx={{ width: "65%", padding: "20px" }}>
                    <WhiteBox>
                        <Stack direction="row" justifyContent="space-between">
                            <Typography component="h3" sx={{ fontSize: "18px", color: "#2B1E44" }}>
                                Basic Info
                            </Typography>
                            {showEditBasicInfo ?
                                <Button variant="text" onClick={() => setShowEditBasicInfo(false)}>Cancel</Button>
                                :
                                <Box sx={{ cursor: "pointer" }}><EditIcon onClick={() => setShowEditBasicInfo(true)} /></Box>}

                        </Stack>
                        <Stack direction="column" gap={1} alignItems="center" justifyContent="center">
                            <Box sx={{
                                width: "80px", height: "80px",
                                left: "291px", zIndex: "3432",
                            }}>
                                <img src={window.location.origin + "/assets/Company.png"} width="100%" alt="CandidateImage" ></img>

                            </Box>
                            <Box> {user && user.email}</Box>
                            <Box sx={{
                                width: "300px",
                            }}>
                                <ProgressBar height="10px" labelSize="12px" completed={user && user.profilecomplete} />
                            </Box>
                        </Stack>

                        {showEditBasicInfo ? <UpdateCandidateBasicInfo user={user} /> : <>
                            <CustomizeStackCanProfile >
                                <CustomizeBoxProfileHeading>Name</CustomizeBoxProfileHeading>
                                <Box> {user && user.fullname}</Box>
                            </CustomizeStackCanProfile>


                            <CustomizeStackCanProfile >
                                <CustomizeBoxProfileHeading>Date of Birth</CustomizeBoxProfileHeading>
                                <Box> {user && user.dob}</Box>
                            </CustomizeStackCanProfile>

                            <CustomizeStackCanProfile >
                                <CustomizeBoxProfileHeading>Mobile Number</CustomizeBoxProfileHeading>
                                <Box> {user && user.mobile}</Box>
                            </CustomizeStackCanProfile>

                            <CustomizeStackCanProfile >
                                <CustomizeBoxProfileHeading>Gender</CustomizeBoxProfileHeading>
                                <Box> {user && user.gender}</Box>
                            </CustomizeStackCanProfile>

                            <CustomizeStackCanProfile >
                                <CustomizeBoxProfileHeading>Marital Status</CustomizeBoxProfileHeading>
                                <Box> {user && user.marital_status}</Box>
                            </CustomizeStackCanProfile>

                            <CustomizeStackCanProfile >
                                <CustomizeBoxProfileHeading>Current Address</CustomizeBoxProfileHeading>
                                <Box> {user && user.address}</Box>
                            </CustomizeStackCanProfile>

                            <CustomizeStackCanProfile >
                                <CustomizeBoxProfileHeading>Perferred Location</CustomizeBoxProfileHeading>
                                <Box> {user && user.address}</Box>
                            </CustomizeStackCanProfile>

                            <CustomizeStackCanProfile >
                                <CustomizeBoxProfileHeading>Total Work Experience</CustomizeBoxProfileHeading>
                                <Box> {user && user.total_work_experience}</Box>
                            </CustomizeStackCanProfile>

                        </>
                        }


                    </WhiteBox>


                </Stack>

                <Stack direction="column" gap={1} sx={{ padding: "20px", width: "35%" }}>
                    <WhiteBox>
                        <Typography component="h3" sx={{ fontSize: "18px", color: "#2B1E44" }}>
                            Qualifications
                        </Typography>

                        <CustomizeBoxProfileHeading>Skills</CustomizeBoxProfileHeading>

                        <Stack direction="column" gap={1}>
                            {
                                user.skills.map((item) => { return (<Box sx={{ textTransform: "capitalize" }}>{item.replaceAll("_", " ")}</Box>) })
                            }
                        </Stack>

                        <CustomizeBoxProfileHeading>Qualifications</CustomizeBoxProfileHeading>
                        <Stack direction="column" gap={1}>
                            {
                                user.education.map((item) => {
                                    return (<Stack direction="row" gap={2}>
                                        <Stack justifyContent="center" alignItems="center"><FiberManualRecordIcon sx={{ fontSize: "10px" }} /></Stack>
                                        <Box>
                                            <Typography component="h3" sx={{ fontSize: "14px", marginTop: "10px", fontWeight: "600", textTransform: "capitalize" }}>
                                                {item.qualification.replaceAll("_", " ")}
                                            </Typography>
                                            <Typography component="h3" sx={{ fontSize: "14px", marginTop: "10px", textTransform: "capitalize" }}>
                                                {item.institute}
                                            </Typography>
                                        </Box>
                                    </Stack>)
                                })
                            }
                        </Stack>


                    </WhiteBox>

                    <WhiteBox>
                        <Typography component="h3" sx={{ fontSize: "18px", color: "#2B1E44" }}>
                            Work Experience
                        </Typography>

                        <Stack direction="column" gap={1}>
                            {
                                user.workhistory.map((item) => {
                                    return (<>
                                        {
                                            item != null && (
                                                <Stack direction="row" gap={2}>
                                                    <Stack justifyContent="center" alignItems="center"><FiberManualRecordIcon sx={{ fontSize: "10px" }} /></Stack>
                                                    <Box>
                                                        <Typography component="h3" sx={{ fontSize: "14px", marginTop: "10px", fontWeight: "600", textTransform: "capitalize" }}>
                                                            {item.designation}
                                                        </Typography>
                                                        <Typography component="h3" sx={{ fontSize: "14px", marginTop: "10px", textTransform: "capitalize" }}>
                                                            {item.department}
                                                        </Typography>
                                                    </Box>
                                                </Stack>
                                            )
                                        }</>)
                                })
                            }


                        </Stack>
                    </WhiteBox>
                </Stack>





            </Stack >
        </Box >
    </>)
}
export default CandidateProfilePage;