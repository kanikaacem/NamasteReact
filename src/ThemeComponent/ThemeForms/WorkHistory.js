import { Box, Stack, Typography, Button, Input, TextField, Radio, RadioGroup, FormControlLabel, FormControl, Snackbar, Alert } from "@mui/material";

import { Formik, Field, Form } from "formik";

import DatePicker from "react-datepicker";

import { WorkHistorySchema } from "../../Validation/CandidateValidation";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from '../../ThemeComponent/Common/Error';
import ButtonType1 from "../../ThemeComponent/Common/ButtonType1";

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
            userid: userid,
            companyname: values.company_name,
            designation: values.designation,
            department: values.department,
            startdate: values.starting_year,
            enddate: values.ending_year,
        }
        console.log(formData);

        let response = await fetch(api_url + "/api/users/updateworkhistory", {
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
                Your Work History is submitted
            </Alert>

        </Snackbar>

        <Box sx={{
            width: "60%",
            margin: "50px auto",
            borderRadius: "10px",
            padding: "30px",
            background: "#FFFFFF",
            boxShadow: "0px 3px 17px 0px rgba(99, 99, 99, 1)"
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
                                <ButtonType1 ButtonText="Continue" />
                            </Box>
                        </Stack>
                    </Form>

                )}
            </Formik>

            <Stack sx={{ width: "100%" }} justifyContent="flex-end">
                <Button onClick={() => setActiveStep(3)}> Next Step</Button>
            </Stack>
        </Box></>)
}

export default WorkHistory;
