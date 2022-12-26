import { Box, Container, Stack, Typography, TextField, Button } from "@mui/material";

import { Formik, Field, Form } from "formik";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import { NewEmailValidation } from "../../Validation/CandidateValidation";
import Error from '../../ThemeComponent/Common/Error';
import ThemeLabel from '../../ThemeComponent/ThemeForms/ThemeLabel';
import ButtonType1 from '../../ThemeComponent/Common/ButtonType1';

import { useOutletContext } from "react-router-dom";
const Profile = () => {
    const user = useOutletContext();
    const defaultValue = {
        email_address: ""
    }
    const handleSubmit = async (values) => {
        console.log(values);
    }
    // console.log(user.email);
    return (<>
        <Stack direction="row" gap={3} sx={{ background: "#FFFFFF" }}>
            <Stack direction="column" gap={1} alignItems="center"
                sx={{ width: "20%", background: "#e5e6e7", height: "100vh", padding: "20px", overflow: "hidden" }}>
                <Box sx={{ width: "150px" }}>
                    <img src={window.location.origin + "/assets/ProfileImage.png"} alt="ProfileImage" width="100%"></img>
                </Box>

                <Typography component="h3" sx={{ fontSize: "14px" }}>
                    {user.email}
                </Typography>

                <Button variant="contained" sx={{
                    fontSize: "12px",
                    borderRadius: "20px"
                }} >Verify your Contact Details</Button>

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
                            <Stack direction="row" alignItems="center">
                                <Box sx={{ width: "50px" }}>
                                    <img src={window.location.origin + "/assets/ProfileImage.png"} alt="ProfileImage" width="100%"></img>
                                </Box>

                                <Typography component="h3" sx={{ fontSize: "14px" }}>
                                    {user.email}
                                </Typography>
                            </Stack>

                            <Stack direction="row" justifyContent="space-between" sx={{
                                fontSize: "14px",
                                borderBottom: "1px solid #2B1E44",
                                padding: "10px 0px"
                            }}>
                                <Box>Personal Details</Box>
                                <Box> Pending</Box>
                            </Stack>

                            <Stack direction="row" justifyContent="space-between" sx={{
                                fontSize: "14px",
                                borderBottom: "1px solid #2B1E44",
                                padding: "10px 0px"
                            }}>
                                <Box>Professional Details</Box>
                                <Box> Pending</Box>
                            </Stack>

                            <Stack direction="row" justifyContent="space-between" sx={{
                                fontSize: "14px",
                                borderBottom: "1px solid #2B1E44",
                                padding: "10px 0px"
                            }}>
                                <Box>Work History</Box>
                                <Box> Pending</Box>
                            </Stack>

                            <Stack direction="row" justifyContent="space-between" sx={{
                                fontSize: "14px",
                                borderBottom: "1px solid #2B1E44",
                                padding: "10px 0px"
                            }}>
                                <Box>Upload Resume</Box>
                                <Box> Pending</Box>
                            </Stack>

                        </AccordionDetails>
                    </Accordion>

                </Box>


            </Stack>
            <Box sx={{ width: "60%", padding: "20px" }}>
                <Typography component="h3" sx={{ fontSize: "20px", margin: "20px 0px" }}>
                    PROFILE
                </Typography>
                <Box>
                    <Typography component="h3" sx={{ fontSize: "16px" }}>
                        Professional Details
                    </Typography>
                    <Button variant="contained" sx={{
                        fontSize: "12px",
                        borderRadius: "20px",
                        margin: "20px 0px"
                    }} >Add Professional Details</Button>

                    <Typography component="h3" sx={{ fontSize: "16px" }}>
                        Work History
                    </Typography>
                    <Button variant="contained" sx={{
                        fontSize: "12px",
                        borderRadius: "20px",
                        margin: "20px 0px"
                    }} >Work History</Button>
                </Box>

                <Box>
                    <Typography component="h3" sx={{ fontSize: "16px" }}>
                        More Details
                    </Typography>

                    <Stack direction="row" sx={{ margin: "10px 0px" }}>
                        <Box> Name : </Box>
                        <Box> {user.fullname} </Box>
                    </Stack>
                    <Stack direction="row" sx={{ margin: "10px 0px" }}>
                        <Box> Email : </Box>
                        <Box> {user.email} </Box>
                    </Stack>
                    <Stack direction="row" sx={{ margin: "10px 0px" }}>
                        <Box> Gender : </Box>
                        <Box> {user.gender} </Box>
                    </Stack>
                    <Stack direction="row" sx={{ margin: "10px 0px" }}>
                        <Box> Current Location : </Box>
                        <Box> {user.address} </Box>
                    </Stack>
                    <Stack direction="row" sx={{ margin: "10px 0px" }}>
                        <Box> Perferred Location : </Box>
                        <Box> {user.fullname} </Box>
                    </Stack>
                    <Stack direction="row" sx={{ margin: "10px 0px" }}>
                        <Box> Name : </Box>
                        <Box> {user.fullname} </Box>
                    </Stack>

                </Box>


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
            </Box>
        </Stack></>)
}
export default Profile;