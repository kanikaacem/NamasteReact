import { Box, Select, Stack, Typography, Button, TextField, Radio, RadioGroup, FormControlLabel, FormControl, Snackbar, Alert, MenuItem } from "@mui/material";

import { Formik, Field, Form } from "formik";

import DatePicker from "react-datepicker";

import { ProfessionalDetailSchema } from "../../Validation/CandidateValidation";
import { CandidateEducation } from "../../utils/Data";
import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from '../../ThemeComponent/Common/Error';

import { ThemeButtontype1 } from "../../utils/Theme";

import { useState } from "react";
import { useSelector } from "react-redux";
const ProfessionalDetail = ({ setActiveStep }) => {
    let api_url = useSelector(state => state.api_url);
    let userid = useSelector(state => state.candidateInfo);

    if (userid != '') {
        userid = JSON.parse(userid);
        userid = userid.data;
    }

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
            userid: userid,
            // userid: "63ac1e7ffe81366e8caeabdd",
            universityname: values.institue_name,
            qualification: values.qualification,
            coursetype: values.course_type,
            starting_year: values.starting_year,
            passing_year: values.ending_year,
            percentage: values.percentage
        }
        console.log(formData);
        let response = await fetch(api_url + "/api/users/createeducation", {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(formData)
        })

        if (response.ok) {
            response = await response.json();
            if (response.status == '1') {
                console.log(response);
                resetForm("");
                setStartingDate("");
                setEndingDate("");
                setQualification(" ");
                setFormSubmitted(true);
            }
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

        <Stack direction="row" gap={2}>
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
                                    <ThemeButtontype1 variant="contained" type="submit">Continue</ThemeButtontype1>
                                </Box>
                            </Stack>

                        </Form>

                    )}
                </Formik>

                <Stack sx={{ width: "100%" }} justifyContent="flex-end">
                    <Button onClick={() => setActiveStep(2)}> Next Step</Button>
                </Stack>
            </Box>
        </Stack>

    </>)
}

export default ProfessionalDetail;
