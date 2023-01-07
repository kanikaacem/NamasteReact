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
    const [showEditBasicInfo, setShowEditBasicInfo] = useState(true);

    return (<>
        <Box className="CandidateProfilePage" sx={{ padding: "20px" }}>
            {/* <Typography component="h3" sx={{ fontSize: "18px", color: "#2B1E44" }}>
                Profile
            </Typography> */}
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

                            {/* <CustomizeStackCanProfile >
                                <CustomizeBoxProfileHeading>Email Address</CustomizeBoxProfileHeading>
                                <Box> {user && user.email}</Box>
                            </CustomizeStackCanProfile> */}

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




                {/* <Stack direction="column" gap={1} alignItems="center"
                sx={{ width: "20%", background: "#e5e6e7", height: "100vh", padding: "20px", overflow: "hidden" }}>
                <Box sx={{ width: "150px" }}>
                    <img src={window.location.origin + "/assets/ProfileImage.png"} alt="ProfileImage" width="100%"></img>
                </Box>

                <Typography component="h3" sx={{ fontSize: "14px" }}>
                    {user && user.email}
                </Typography>

                <ButtonType3 ButtonText="Verify your Contact Details" ClickEvent={() => window.location.href = "http://localhost:3000/profile/2"} />


                <Box sx={{ margin: "20px 0px", width: "300px" }}>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>Profile Status</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Stack
                                divider={<Divider orientation="horizontal" flexItem />}
                                direction="column" gap={1}>
                                <Stack
                                    direction="row" alignItems="center">
                                    <Box sx={{ width: "50px" }}>
                                        <img src={window.location.origin + "/assets/ProfileImage.png"} alt="ProfileImage" width="100%"></img>
                                    </Box>
                                    <Typography component="div" sx={{ fontSize: "14px" }}>
                                       userName
                                    </Typography>

                                </Stack>

                                <Stack direction="row" justifyContent="space-between" sx={{
                                    fontSize: "14px",
                                    padding: "10px 0px"
                                }}>
                                    <Box>Personal Details</Box>
                                    <Box> Pending</Box>
                                </Stack>

                                <Stack direction="row" justifyContent="space-between" sx={{
                                    fontSize: "14px",
                                    padding: "10px 0px"
                                }}>
                                    <Box>Professional Details</Box>
                                    <Box> Pending</Box>
                                </Stack>

                                <Stack direction="row" justifyContent="space-between" sx={{
                                    fontSize: "14px",
                                    padding: "10px 0px"
                                }}>
                                    <Box>Work History</Box>
                                    <Box> Pending</Box>
                                </Stack>

                                <Stack direction="row" justifyContent="space-between" sx={{
                                    fontSize: "14px",
                                    padding: "10px 0px"
                                }}>
                                    <Box>Upload Resume</Box>
                                    <Box> Pending</Box>
                                </Stack>
                            </Stack>
                        </AccordionDetails>
                    </Accordion>

                </Box>


            </Stack>
            
            <Box sx={{ width: "60%" }}>
                <Typography component="h3" sx={{ fontSize: "20px", margin: "20px 0px" }}>
                    PROFILE
                </Typography>

                <Stack
                    divider={<Divider orientation="horizontal" flexItem />}
                    direction="column" gap={1}>
                    <Box>
                        <Stack direction="row" gap={1} alignItems="center">
                            <Box sx={{ width: "30px" }}>
                                <img width="100%" src={window.location.origin + "/assets/ProfessionalEducation.png"} alt="ProfessionalEducation" />
                            </Box>
                            <Typography component="h3" sx={{ fontSize: "16px" }}>
                                Professional Details
                            </Typography>
                        </Stack>

                        <ButtonType3 ButtonText="Add Professional Details" ClickEvent={() => window.location.href = "http://localhost:3000/profile/1"} />

                    </Box>

                    <Box>
                        <Stack direction="row" gap={1} alignItems="center">
                            <Box sx={{ width: "30px" }}>
                                <img width="100%" src={window.location.origin + "/assets/WorkHistory.png"} alt="ProfessionalEducation" />
                            </Box>
                            <Typography component="h3" sx={{ fontSize: "16px" }}>
                                Work History
                            </Typography>
                        </Stack>
                        <ButtonType3 ButtonText="Work History" ClickEvent={() => window.location.href = "http://localhost:3000/profile/2"} />
                    </Box>

                    <Box>
                        <Stack direction="row" gap={1} alignItems="center">
                            <MoreHorizIcon />
                            <Typography component="h3" sx={{ fontSize: "16px" }}>
                                Other Details
                            </Typography>
                        </Stack>

                        <Stack direction="row" justifyContent="space-between" sx={{
                            fontSize: "14px",
                            padding: "10px 0px"
                        }}>
                            <Box>Name :</Box>
                            <Box> {user && user.fullname}</Box>
                        </Stack>

                        <Stack direction="row" justifyContent="space-between" sx={{
                            fontSize: "14px",
                            padding: "10px 0px"
                        }}>
                            <Box>Email :</Box>
                            <Box> {user && user.email}</Box>
                        </Stack>

                        <Stack direction="row" justifyContent="space-between" sx={{
                            fontSize: "14px",
                            padding: "10px 0px"
                        }}>
                            <Box>Gender :</Box>
                            <Box> {user && user.gender}</Box>
                        </Stack>

                        <Stack direction="row" justifyContent="space-between" sx={{
                            fontSize: "14px",
                            padding: "10px 0px"
                        }}>
                            <Box>Current Location :</Box>
                            <Box> {user && user.address}</Box>
                        </Stack>

                        <Stack direction="row" justifyContent="space-between" sx={{
                            fontSize: "14px",
                            padding: "10px 0px"
                        }}>
                            <Box>Perferred Location :</Box>
                            <Box> {user && user.address}</Box>
                        </Stack>
                    </Box>
                </Stack>

            </Box>
            
            <Box sx={{ width: "20%", padding: "20px" }}>
                <Stack direction="row" gap={1} >
                    <MailOutlineIcon /> Send a Recommendation
                </Stack>
                <Typography component="h3" sx={{ fontSize: "14px", margin: "10px 0px" }}>
                    Enhance your profile with recommendations of your
                    work and skills. Candidates with recommendations
                    have higher likelihood of being shortlisted.
                </Typography>
                <Typography component="h3" sx={{ fontSize: "14px", margin: "10px 0px" }}>
                    Request a recommendation from -
                </Typography>

                <Formik

                    initialValues={defaultValue}
                    validationSchema={NewEmailValidation}
                    onSubmit={handleSubmit}
                >
                    {({ values, errors, touched, setFieldValue }) => (
                        <Form >

                            <Box className="input-item">
                                <ThemeLabel LableFor="email_address" LableText="Email Address" />
                                <Field
                                    variant="standard"
                                    error={errors.email_address && touched.email_address}
                                    as={TextField}
                                    id="email_address"
                                    placeholder="Enter Email Address" type="text" name="email_address" fullWidth />
                                {errors.email_address && touched.email_address && <Error text={errors.email_address} />}


                            </Box>

                            <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                                <ButtonType1 ButtonText="Send" />
                            </Box>
                        </Form>
                    )}
                </Formik>
            </Box> */}
            </Stack >
        </Box >
    </>)
}
export default CandidateProfilePage;