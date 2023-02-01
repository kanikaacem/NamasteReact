import { postRequest } from "../../utils/ApiRequests";
import { SaveCandidateWorkInformation } from "../../utils/ApiUrls";

import { Box, Stack, Typography, Button, Input, TextField, Radio, RadioGroup, FormControlLabel, FormControl, Snackbar, Alert } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Error from '../../ThemeComponent/Common/Error';

import { SocialBox, ThemeButtonType2, ThemeButtonType3, ThemeFInputDiv } from "../../utils/Theme";
import { ThemeButtontype1 } from "../../utils/Theme";
import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";

import { WorkHistorySchema } from "../../Validation/CandidateValidation";
import HeaderSec from "../Common/HeaderSec";
import { useState } from "react";
import { useSelector } from "react-redux";

const WorkHistory = ({ setActiveStep }) => {
    let api_url = useSelector(state => state.api_url);
    let userid = useSelector(state => state.candidateInfo);

    if (userid != '') {
        userid = JSON.parse(userid);
        userid = userid.data;
    }

    const defaultValue = {
        company_name: "",
        designation: "",
        department: "",
        starting_year: "",
        ending_year: "",
    }
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [startingDate, setStartingDate] = useState();
    const [endingDate, setEndingDate] = useState();

    const handleClose = (event) => {
        setFormSubmitted(false);
    };

    const handleSubmit = async (values, { resetForm }) => {
        console.log(values);

        let formData = new FormData();
        formData = {
            company_name: values.company_name,
            designation: values.designation,
            department: values.department,
            starting_year: values.starting_year,
            ending_year: values.ending_year,
        }

        let response = await postRequest(SaveCandidateWorkInformation, formData);
        console.log(response);
        if (response.status == 1) {
            localStorage.setItem("user", JSON.stringify(response.data));
            resetForm("");
            startingDate("");
            endingDate("");
            setFormSubmitted(true)
        }

    }

    return (<>

        <Snackbar
            open={formSubmitted}
            autoHideDuration={6000} onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Your Work History is submitted
            </Alert>

        </Snackbar>
        <Box className="WorkHistoryPage"
            sx={{
                height: "100vh",
                background: "#FFFFFF",
                backgroundRepeat: " no-repeat",
                backgroundPosition: "left 100px bottom 0px"
            }}>
            <Stack className="WorkHistorypageWrapper"
                sx=
                {{
                    padding: "20px 50px",
                    gap: "24px"
                }}>
                <HeaderSec
                    color="black"
                    border="2px solid #8E8E8E" />
                <Stack alignItems="flex-end" sx={{ position: "relative" }}>


                    <Box sx={{
                        position: "absolute",
                        top: "111px",
                        left: "152px",
                        width: "673px",
                        zIndex: "78798"
                    }}
                    >
                        <Typography component="box" sx={{
                            fontSize: "64px",
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            color: "#4E3A67",
                            display: "block",
                        }}> Get
                        </Typography>
                        <Typography component="box" sx={{
                            fontSize: "64px",
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            color: "#4E3A67",
                            display: "block",
                            width: "max-content"
                        }}>
                            local-level jobs

                        </Typography>
                        <img src={window.location.origin + "/assets/g53.png"} alt="g53" style={{ margin: "40px 20px" }} />

                    </Box>

                    <Box sx={{
                        height: "31px",
                        width: "505px",
                        left: "148px",
                        top: "241px",
                        borderRadius: "0px",
                        background: "#FFD5C9",
                        position: "absolute"
                    }}></Box>
                    <Box sx={{
                        width: "763px",
                        height: "153px",
                        background: "#F8F8F8",
                        border: "1px solid #EAEAEA",
                        boxShadow: "0px 4px 40px rgba(239, 239, 239, 0.3)",
                        borderRadius: "19px",
                        padding: "35px 50px"
                    }}>
                        <Typography component="box" sx={{
                            fontSize: "40px",
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            color: "#4E3A67",
                            display: "block",
                            marginTop: "20px"
                        }}>
                            Work History
                        </Typography>

                        <Stack direction="row" gap={1} sx={{ margin: "25px 0px" }}>
                            <Stack direction="row" gap={1} alignItems="center" justifyContent="center" sx={{ opacity: "0.5" }}>
                                <Box sx={{
                                    width: "27px",
                                    height: "27px",
                                    background: "#FC9A7E",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>1</Box>
                                <Typography component="box" sx={{
                                    fontSize: "16px",
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    color: "#4E3A67",
                                    display: "block",
                                    width: "max-content"
                                }}>
                                    Personal Details
                                </Typography>
                                <Box>
                                    <img width="10px" height="10px" src={window.location.origin + "/assets/FormRightArrow.png"} alt="right_arrow" />
                                </Box>
                            </Stack>


                            <Stack direction="row" gap={1} alignItems="center" justifyContent="center" sx={{ opacity: "0.5" }}>
                                <Box sx={{
                                    width: "27px",
                                    height: "27px",
                                    background: "#FC9A7E",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>2</Box>
                                <Typography component="box" sx={{
                                    fontSize: "16px",
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    color: "#4E3A67",
                                    display: "block",
                                    width: "max-content"

                                }}>
                                    Professional Details
                                </Typography>
                                <Box>
                                    <img width="10px" height="10px" src={window.location.origin + "/assets/FormRightArrow.png"} alt="right_arrow" />
                                </Box>
                            </Stack>


                            <Stack direction="row" gap={1} alignItems="center" justifyContent="center" >
                                <Box sx={{
                                    width: "27px",
                                    height: "27px",
                                    background: "#FC9A7E",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>3</Box>
                                <Typography component="box" sx={{
                                    fontSize: "16px",
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    color: "#4E3A67",
                                    display: "block",
                                    width: "max-content"

                                }}>
                                    Work History
                                </Typography>
                                <Box>
                                    <img width="10px" height="10px" src={window.location.origin + "/assets/FormRightArrow.png"} alt="right_arrow" />
                                </Box>
                            </Stack>

                            <Stack direction="row" gap={1} alignItems="center" justifyContent="center" sx={{ opacity: "0.5" }}>
                                <Box sx={{
                                    width: "27px",
                                    height: "27px",
                                    background: "#FC9A7E",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>3</Box>
                                <Typography component="box" sx={{
                                    fontSize: "16px",
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    color: "#4E3A67",
                                    display: "block",
                                    width: "max-content"

                                }}>
                                    Upload Resume
                                </Typography>
                                <Box>
                                    <img width="10px" height="10px" src={window.location.origin + "/assets/FormRightArrow.png"} alt="right_arrow" />
                                </Box>
                            </Stack>

                        </Stack>

                    </Box>
                    <Box sx={{
                        boxSizing: "border-box",
                        width: "865px",
                        height: "647",
                        background: "#FFFFFF",
                        border: "1px solid #EDEDED",
                        borderRadius: "19px",
                        position: "absolute",
                        top: "197px",
                        padding: "30px 50px",
                        paddingBottom: "100px"


                    }}>

                        <Formik

                            initialValues={defaultValue}
                            validationSchema={WorkHistorySchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched, values, setFieldValue }) => (
                                <Form className="workHistoryForm">
                                    <ThemeFInputDiv >
                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="company_name" LableText="Company Name" />
                                            <Field
                                                error={errors.company_name && touched.company_name}
                                                as={TextField}
                                                id="company_name"
                                                placeholder="Enter Company Name" type="text" name="company_name" fullWidth />
                                            {errors.company_name && touched.company_name && <Error text={errors.company_name} />}

                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="designation" LableText="Designation" />
                                            <Field
                                                error={errors.designation && touched.designation}
                                                as={TextField}
                                                id="designation"
                                                placeholder="Enter Designation" type="text" name="designation" fullWidth />
                                            {errors.designation && touched.designation && <Error text={errors.designation} />}

                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="department" LableText="Department" />
                                            <Field
                                                error={errors.department && touched.department}
                                                as={TextField}
                                                id="department"
                                                placeholder="Enter department" type="text" name="department" fullWidth />
                                            {errors.department && touched.department && <Error text={errors.department} />}

                                        </ThemeFInputDiv>

                                        <Stack direction="row" gap={2}>
                                            <ThemeFInputDiv sx={{ width: "370px" }}>
                                                <ThemeLabel LableFor="starting_year" LableText="Start Date" />
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>

                                                    <DatePicker

                                                        id="starting_year"
                                                        value={startingDate}
                                                        onChange={(newValue) => {
                                                            setStartingDate(newValue);
                                                            setFieldValue("starting_year", new Date(newValue))
                                                        }}
                                                        renderInput={(params) => <TextField

                                                            {...params} />}
                                                    />
                                                </LocalizationProvider>
                                                {errors.starting_year && touched.starting_year && <Error text={errors.starting_year} />}

                                            </ThemeFInputDiv>

                                            <ThemeFInputDiv sx={{ width: "370px" }}>
                                                <ThemeLabel LableFor="ending_year" LableText="Last Date" />
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>

                                                    <DatePicker

                                                        id="ending_year"
                                                        value={endingDate}
                                                        onChange={(newValue) => {
                                                            setEndingDate(newValue);
                                                            setFieldValue("ending_year", new Date(newValue))
                                                        }}
                                                        renderInput={(params) => <TextField

                                                            {...params} />}
                                                    />
                                                </LocalizationProvider>

                                                {errors.ending_year && touched.ending_year && <Error text={errors.ending_year} />}

                                            </ThemeFInputDiv>
                                        </Stack>

                                        <Stack direction="row" sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                                            <ThemeButtonType3 variant="outlined" type="submit"
                                                sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}
                                            > Save</ThemeButtonType3>
                                            <ThemeButtonType2 variant="contained" type="button" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}
                                                onClick={() => {
                                                    window.location.href = window.location.origin + '/profile/3';
                                                }}>Next Step</ThemeButtonType2>

                                        </Stack>
                                    </ThemeFInputDiv>
                                </Form>

                            )}
                        </Formik>




                    </Box>

                </Stack>
            </Stack>
        </Box>

        {/* <Stack direction="row" gap={2} >
            <Box sx={{ width: "40%" }} ></Box>
            <Box sx={{
                width: "60%",
                margin: "50px",
                borderRadius: "10px",
                padding: "30px",
                background: "#FFFFFF",
                borderTop: "4px solid #2B1E44"
            }}>
                <Typography component="h3" sx={{ fontSize: "25px", color: "#2B1E44", marginBottom: "20px" }}>
                    Work History
                </Typography>
                <Formik

                    initialValues={defaultValue}
                    validationSchema={WorkHistorySchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched, values, setFieldValue }) => (
                        <Form >
                            <Stack direction="column" gap={2} >
                                <Stack direction="column" gap={1} className="profile-input-item">
                                    <ThemeLabel LableFor="company_name" LableText="Company Name" />
                                    <Field
                                        size="small"
                                        error={errors.company_name && touched.company_name}
                                        as={TextField}
                                        id="company_name"
                                        placeholder="Enter Company Name" type="text" name="company_name" fullWidth />
                                    {errors.company_name && touched.company_name && <Error text={errors.company_name} />}

                                </Stack>

                                <Stack direction="column" gap={1} className="profile-input-item">
                                    <ThemeLabel LableFor="designation" LableText="Designation" />
                                    <Field
                                        size="small"
                                        error={errors.designation && touched.designation}
                                        as={TextField}
                                        id="designation"
                                        placeholder="Enter Designation" type="text" name="designation" fullWidth />
                                    {errors.designation && touched.designation && <Error text={errors.designation} />}

                                </Stack>

                                <Stack direction="column" gap={1} className="profile-input-item">
                                    <ThemeLabel LableFor="department" LableText="Department" />
                                    <Field
                                        size="small"
                                        error={errors.department && touched.department}
                                        as={TextField}
                                        id="department"
                                        placeholder="Enter department" type="text" name="department" fullWidth />
                                    {errors.department && touched.department && <Error text={errors.department} />}

                                </Stack>

                                <Box className="profile-input-item">
                                    <ThemeLabel LableFor="starting_year" LableText="Start Date" />
                                    <DatePicker
                                        autoComplete="off"
                                        id="starting_year"
                                        placeholderText={'Start Date'}
                                        name="starting_year"
                                        selected={startingDate} onChange={(date) => { setStartingDate(date); setFieldValue("starting_year", date) }} />
                                    {errors.starting_year && touched.starting_year && <Error text={errors.starting_year} />}

                                </Box>

                                <Box className="profile-input-item">
                                    <ThemeLabel LableFor="ending_year" LableText="Last Date" />
                                    <DatePicker
                                        autoComplete="off"
                                        id="ending_year"
                                        placeholderText={'Last Date'}
                                        name="ending_year"
                                        selected={endingDate} onChange={(date) => { setEndingDate(date); setFieldValue("ending_year", date) }} />
                                    {errors.ending_year && touched.ending_year && <Error text={errors.ending_year} />}

                                </Box>

                                <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                                    <ThemeButtontype1 variant="contained" type="submit">Continue</ThemeButtontype1>
                                </Box>
                            </Stack>
                        </Form>

                    )}
                </Formik>

                <Stack sx={{ width: "100%" }} justifyContent="flex-end">
                    <Button onClick={() => setActiveStep(3)}> Next Step</Button>
                </Stack>
            </Box>
        </Stack> */}

    </>)
}

export default WorkHistory;
