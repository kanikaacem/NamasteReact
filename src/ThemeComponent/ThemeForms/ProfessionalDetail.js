import { postRequest } from "../../utils/ApiRequests";
import { SaveCandidateProfessionalInformation } from "../../utils/ApiUrls";

import { Box, Select, Stack, Typography, Button, TextField, Radio, RadioGroup, FormControlLabel, FormControl, Snackbar, Alert, MenuItem } from "@mui/material";

import { Formik, Field, Form } from "formik";

// import DatePicker from "react-datepicker";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { ProfessionalDetailSchema } from "../../Validation/CandidateValidation";
import { CandidateEducation } from "../../utils/Data";
import Error from '../../ThemeComponent/Common/Error';

import { SocialBox, ThemeButtonType2, ThemeButtonType3, ThemeFInputDiv } from "../../utils/Theme";
import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";

import HeaderSec from "../Common/HeaderSec";
import { useState } from "react";
import { useSelector } from "react-redux";
const ProfessionalDetail = ({ setActiveStep }) => {


    const defaultValue = {
        institue_name: "",
        qualification: "",
        course_type: "full_time",
        starting_year: "",
        ending_year: "",
        percentage: "",
    }

    const [qualification, setQualification] = useState(" ");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [courseType, setCourseType] = useState('full_time');
    const [startingDate, setStartingDate] = useState();
    const [endingDate, setEndingDate] = useState();

    const handleClose = (event) => {
        setFormSubmitted(false);
    };

    const handleSubmit = async (values, { resetForm }) => {
        console.log(values);

        let formData = new FormData();
        formData = {
            institude_name: values.institue_name,
            qualification: values.qualification,
            course_type: values.course_type,
            starting_year: values.starting_year,
            ending_year: values.ending_year,
            percentage: values.percentage
        }

        let response = await postRequest(SaveCandidateProfessionalInformation, formData);
        console.log(response);
        if (response.status == 1) {
            localStorage.setItem("user", JSON.stringify(response.data));
            resetForm("");
            setStartingDate("");
            setEndingDate("");
            setQualification(" ");
            setFormSubmitted(true);
        }

    }

    return (<>

        <Snackbar
            open={formSubmitted}
            autoHideDuration={6000} onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Your Qualification is submitted
            </Alert>

        </Snackbar>
        <Box className="ProfessionalInformationPage"
            sx={{
                height: "100vh",
                background: "#FFFFFF",
                backgroundRepeat: " no-repeat",
                backgroundPosition: "left 100px bottom 0px"
            }}>
            <Stack className="ProfessionalInformationPageWrapper"
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
                        }}> Get Best Jobs In

                        </Typography>
                        <Typography component="box" sx={{
                            fontSize: "64px",
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            color: "#4E3A67",
                            display: "block",
                            width: "max-content"
                        }}>
                            Few CLICKS
                        </Typography>
                        <img src={window.location.origin + "/assets/g11.png"} alt="g52" style={{ margin: "40px 20px" }} />

                    </Box>

                    <Box sx={{
                        height: "31px",
                        width: "440px",
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
                            Professional Details
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


                            <Stack direction="row" gap={1} alignItems="center" justifyContent="center">
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
                            validationSchema={ProfessionalDetailSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched, values, setFieldValue }) => (
                                <Form className="ProfessionalDetailForm">
                                    <ThemeFInputDiv>
                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="institue_name" LableText="Institue Name" />
                                            <Field
                                                error={errors.institue_name && touched.institue_name}
                                                as={TextField}
                                                id="institue_name"
                                                placeholder="Enter Institue Name" type="text" name="institue_name" fullWidth />
                                            {errors.institue_name && touched.institue_name && <Error text={errors.institue_name} />}

                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="qualification" LableText="Qualification" />
                                            <Select
                                                labelId="demo-simple-select-label"
                                                name="profile_type"
                                                value={qualification}
                                                label="Age"
                                                onChange={(event) => {
                                                    setQualification(event.target.value);
                                                    setFieldValue("qualification", event.target.value);
                                                }}
                                                sx={{
                                                    background: " #FFFFFF",
                                                    border: "1px solid #EAEAEA",
                                                    boxShadow: "0px 10px 11px rgb(0 0 0 / 2%)",
                                                    borderRadius: "7px",
                                                    fontSize: "16px",
                                                    fontamily: 'Montserrat',
                                                    BorderBottom: 'none'
                                                }}
                                                disableUnderline
                                            >
                                                <MenuItem value=" ">Select Qualification</MenuItem>
                                                {CandidateEducation.map((item) =>
                                                    <MenuItem value={item.value} key={item.id}>{item.Name}</MenuItem>
                                                )}
                                            </Select>
                                            {errors.qualification && touched.qualification && <Error text={errors.qualification} />}

                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="course_type" LableText="Course Type" />
                                            <Box>
                                                <FormControl>
                                                    <RadioGroup
                                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                                        name="controlled-radio-buttons-group"
                                                        value={courseType}
                                                        onChange={(event) => {
                                                            setCourseType(event.target.value)
                                                            setFieldValue("course_type", event.target.value)
                                                        }}
                                                    >
                                                        <Stack direction="row" gap={3}>

                                                            <Stack direction="row" gap={2} alignItems="center" justifyContent="space-between"
                                                                sx={{
                                                                    height: "59px",
                                                                    width: "230px",
                                                                    borderRadius: "7px",
                                                                    border: " 2px solid #EAEAEA"
                                                                }} >
                                                                <Box sx={{ marginLeft: "20px" }}>Full Time</Box>
                                                                <FormControlLabel value="full_time" control={<Radio />} label="" />
                                                            </Stack>

                                                            <Stack direction="row" gap={2} alignItems="center" justifyContent="space-between"
                                                                sx={{
                                                                    height: "59px",
                                                                    width: "230px",
                                                                    borderRadius: "7px",
                                                                    border: " 2px solid #EAEAEA"
                                                                }} >
                                                                <Box sx={{ marginLeft: "20px" }}>Part Time</Box>
                                                                <FormControlLabel value="part_time" control={<Radio />} label="" />
                                                            </Stack>

                                                            <Stack direction="row" gap={2} alignItems="center" justifyContent="space-between"
                                                                sx={{
                                                                    height: "59px",
                                                                    width: "msx-content",
                                                                    borderRadius: "7px",
                                                                    border: " 2px solid #EAEAEA"
                                                                }} >
                                                                <Box sx={{ marginLeft: "20px" }}>Correspondance / Distance Learning</Box>
                                                                <FormControlLabel value="correspondance_/_distance_learning" control={<Radio />} label="" />
                                                            </Stack>

                                                        </Stack>

                                                    </RadioGroup>
                                                </FormControl>
                                            </Box>

                                            {errors.course_type && touched.course_type && <Error text={errors.course_type} />}
                                        </ThemeFInputDiv>

                                        <Stack direction="row" gap={3} >
                                            <ThemeFInputDiv sx={{ width: "370px" }}>
                                                <ThemeLabel LableFor="starting_year" LableText="Starting Year" />
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DatePicker

                                                        id="date_of_birth"
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
                                                <ThemeLabel LableFor="ending_year" LableText="Ending Year" />

                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DatePicker

                                                        id="date_of_birth"
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

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="percentage" LableText="Percentage" />
                                            <Field
                                                error={errors.percentage && touched.percentage}
                                                as={TextField}
                                                id="percentage"
                                                placeholder="Enter Percentage" type="text" name="percentage" fullWidth />
                                            {errors.percentage && touched.percentage && <Error text={errors.percentage} />}

                                        </ThemeFInputDiv>


                                    </ThemeFInputDiv >

                                    <Stack direction="row" sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                                        <ThemeButtonType3 variant="outlined" type="submit"
                                            sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}
                                        > Save</ThemeButtonType3>
                                        <ThemeButtonType2 variant="contained" type="button" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}
                                            onClick={() => {
                                                window.location.href = window.location.origin + '/profile/2';

                                            }}>Next Step</ThemeButtonType2>

                                    </Stack>

                                </Form >

                            )}
                        </Formik >



                    </Box>

                </Stack>
            </Stack>
        </Box>

        {/* <Stack direction="row" gap={2}>
            <Box sx={{ width: "40%" }}></Box>
            <Box sx={{
                width: "60%",
                margin: "50px",
                borderRadius: "10px",
                padding: "30px",
                background: "#FFFFFF",
                borderTop: "4px solid #2B1E44"
            }}>
                <Typography component="h3" sx={{ fontSize: "25px", color: "#2B1E44", marginBottom: "20px" }}>
                    Professional Details
                </Typography>
                <Formik

                    initialValues={defaultValue}
                    validationSchema={ProfessionalDetailSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched, values, setFieldValue }) => (
                        <Form >
                            <Stack direction="column" gap={2}>
                                <Stack direction="column" gap={1} className="profile-input-item">
                                    <ThemeLabel LableFor="institue_name" LableText="Institue Name" />
                                    <Field
                                        size="small"
                                        error={errors.institue_name && touched.institue_name}
                                        as={TextField}
                                        id="institue_name"
                                        placeholder="Enter Institue Name" type="text" name="institue_name" fullWidth />
                                    {errors.institue_name && touched.institue_name && <Error text={errors.institue_name} />}

                                </Stack>

                                <Stack direction="column" gap={1} className="profile-input-item">
                                    <ThemeLabel LableFor="qualification" LableText="Qualification" />
                                    <Select
                                        variant="standard"
                                        labelId="demo-simple-select-label"
                                        name="profile_type"
                                        value={qualification}
                                        label="Age"
                                        onChange={(event) => {
                                            setQualification(event.target.value);
                                            setFieldValue("qualification", event.target.value);
                                        }}
                                        sx={{ display: "block", boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                                        disableUnderline
                                    >
                                        <MenuItem value=" ">Select Qualification</MenuItem>
                                        {CandidateEducation.map((item) =>
                                            <MenuItem value={item.value} key={item.id}>{item.Name}</MenuItem>
                                        )}
                                    </Select>
                                    {errors.qualification && touched.qualification && <Error text={errors.qualification} />}

                                </Stack>

                                <Box className="profile-input-item">
                                    <ThemeLabel LableFor="course_type" LableText="Course Type" />
                                    <Box>
                                        <FormControl>
                                            <RadioGroup
                                                aria-labelledby="demo-controlled-radio-buttons-group"
                                                name="controlled-radio-buttons-group"
                                                value={courseType}
                                                onChange={(event) => {
                                                    setCourseType(event.target.value)
                                                    setFieldValue("course_type", event.target.value)
                                                }}
                                            >
                                                <Stack direction="row" gap={3}>
                                                    <FormControlLabel value="full_time" control={<Radio />} label="Full Time" />
                                                    <FormControlLabel value="part_time" control={<Radio />} label="Part Time" />
                                                    <FormControlLabel value="correspondance_distance_learning" control={<Radio />} label="Correspondance/ Distance Learning" />
                                                </Stack>

                                            </RadioGroup>
                                        </FormControl>
                                    </Box>

                                    {errors.course_type && touched.course_type && <Error text={errors.course_type} />}
                                </Box>

                                <Stack direction="column" gap={1} className="profile-input-item">
                                    <ThemeLabel LableFor="starting_year" LableText="Starting Year" />
                                    <DatePicker
                                        autoComplete="off"
                                        id="starting_year"
                                        placeholderText={'Starting Date'}
                                        name="starting_year"
                                        selected={startingDate} onChange={(date) => { setStartingDate(date); setFieldValue("starting_year", date) }} />
                                    {errors.starting_year && touched.starting_year && <Error text={errors.starting_year} />}

                                </Stack>

                                <Stack direction="column" gap={1} className="profile-input-item">
                                    <ThemeLabel LableFor="ending_year" LableText="Ending Year" />
                                    <DatePicker
                                        autoComplete="off"
                                        id="ending_year"
                                        placeholderText={'Ending Date'}
                                        name="ending_year"
                                        selected={endingDate} onChange={(date) => { setEndingDate(date); setFieldValue("ending_year", date) }} />
                                    {errors.ending_year && touched.ending_year && <Error text={errors.ending_year} />}

                                </Stack>

                                <Stack direction="column" gap={1} className="profile-input-item">
                                    <ThemeLabel LableFor="percentage" LableText="Percentage" />
                                    <Field
                                        size="small"
                                        error={errors.percentage && touched.percentage}
                                        as={TextField}
                                        id="percentage"
                                        placeholder="Enter Percentage" type="text" name="percentage" fullWidth />
                                    {errors.percentage && touched.percentage && <Error text={errors.percentage} />}

                                </Stack>

                                <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                                    {/* <ButtonType1 ButtonText="Continue" /> */}
        {/* <ThemeButtontype1 variant="contained" type="submit">Continue</ThemeButtontype1>
    </Box>
                            </Stack >

                        </Form >

                    )}
                </Formik >

    <Stack sx={{ width: "100%" }} justifyContent="flex-end">
        <Button onClick={() => setActiveStep(2)}> Next Step</Button>
    </Stack>
            </Box >
        </Stack > * /} */}

    </>)
}

export default ProfessionalDetail;
