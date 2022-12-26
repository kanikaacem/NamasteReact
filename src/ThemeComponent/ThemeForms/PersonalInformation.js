
import { Box, Container, Stack, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl } from "@mui/material";

import { Formik, Field, Form } from "formik";

import DatePicker from "react-datepicker";

import { PersonalRegistrationSchema } from "../../Validation/CandidateValidation";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from '../../ThemeComponent/Common/Error';
import ButtonType1 from "../../ThemeComponent/Common/ButtonType1";
import { useSelector } from "react-redux";
import { useState } from "react";
import { QrCodeScannerOutlined } from "@mui/icons-material";
const PersonalInformation = ({ setActiveStep }) => {
    let api_url = useSelector(state => state.api_url);
    let userid = useSelector(state => state.candidateInfo);
    console.log(userid);
    if (userid != '') {
        userid = JSON.parse(userid);
        userid = userid.data;
    }
    // userid = userid && userid.data;
    const defaultValue = {
        full_name: "",
        date_of_birth: "",
        permanant_address: "",
        current_location: "",
        phone_number: "",
        marital_status: "",
        gender: ""
    }

    const [date, setDate] = useState();
    const [gender, setGender] = useState("");

    const handleSubmit = async (values) => {
        console.log(values);
        let formData = new FormData();

        formData = {
            userid: userid,
            fullname: values.full_name,
            mobile: values.phone_number,
            gender: values.gender,
            marital_status: values.marital_status,
            address: values.permanant_address,
            currAddress: values.current_location,

        }
        let response = await fetch(api_url + "/api/users/updateuserinfo", {
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
                setActiveStep(1);

            }


        }
    }

    return (<>

        <Box sx={{
            width: "60%",
            margin: "50px auto",
            borderRadius: "20px",
            padding: "30px",
            background: "#FFFFFF",
            boxShadow: "0px 3px 17px 0px rgba(99, 99, 99, 1)"

            // borderTop: "4px solid #2B1E44"
        }}>
            <Typography component="h3" sx={{ fontSize: "25px", color: "#2B1E44", marginBottom: "20px" }}>
                Personal Details
            </Typography>
            <Formik

                initialValues={defaultValue}
                validationSchema={PersonalRegistrationSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, values, setFieldValue }) => (
                    <Form className="PersonalInformationForm">
                        <Stack direction="column" gap={2}>
                            <Stack direction="column" gap={1} className="profile-input-item">
                                <ThemeLabel LableFor="full_name" LableText="Full Name" />
                                <Field
                                    size="small"
                                    error={errors.full_name && touched.full_name}
                                    as={TextField}
                                    id="full_name"
                                    placeholder="Enter Full Name" type="text" name="full_name" fullWidth />
                                {errors.full_name && touched.full_name && <Error text={errors.full_name} />}

                            </Stack>
                            <Box className="profile-input-item">
                                <ThemeLabel LableFor="gender" LableText="Gender" />
                                <Box>
                                    <FormControl>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={gender}
                                            onChange={(event) => {
                                                setGender(event.target.value)
                                                setFieldValue("gender", event.target.value)
                                            }}
                                        >
                                            <Stack direction="row" gap={3}>
                                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                                            </Stack>

                                        </RadioGroup>
                                    </FormControl>
                                </Box>
                                {errors.gender && touched.gender && <Error text={errors.gender} />}
                            </Box>

                            <Stack direction="column" gap={1} className="profile-input-item">
                                <ThemeLabel LableFor="date_of_birth" LableText="Date of Birth" />
                                <DatePicker
                                    autoComplete="off"
                                    size="small"
                                    id="date_of_birth"
                                    placeholderText={'Date of Birth'}
                                    name="date_of_birth"
                                    selected={date} onChange={(date) => { setDate(date); setFieldValue("date_of_birth", date) }} />
                                {errors.date_of_birth && touched.date_of_birth && <Error text={errors.date_of_birth} />}

                            </Stack>

                            <Stack direction="column" gap={1} className="profile-input-item">
                                <ThemeLabel LableFor="
                        phone_number" LableText="Phone Number" />
                                <Field
                                    size="small"
                                    error={errors.phone_number && touched.phone_number}
                                    as={TextField}
                                    id="phone_number"
                                    placeholder="Enter Current Address" type="text" name="phone_number" fullWidth />
                                {errors.phone_number && touched.phone_number && <Error text={errors.phone_number} />}

                            </Stack>


                            <Stack direction="column" gap={1} className="profile-input-item">
                                <ThemeLabel LableFor="
                        marital_status" LableText="Marital Status" />
                                <Field
                                    size="small"
                                    error={errors.phone_number && touched.phone_number}
                                    as={TextField}
                                    id="marital_status"
                                    placeholder="Enter Marital Address" type="text" name="marital_status" fullWidth />
                                {errors.marital_status && touched.marital_status && <Error text={errors.marital_status} />}

                            </Stack>



                            <Box className="profile-input-item">
                                <ThemeLabel LableFor="permanant_address" LableText="Permanant Address" />
                                <Field
                                    size="small"
                                    error={errors.permanant_address && touched.permanant_address}
                                    as="textarea"
                                    rows="4"
                                    id="permanant_address"
                                    placeholder="Enter Permanant Address" type="text" name="permanant_address" fullWidth />
                                {errors.permanant_address && touched.permanant_address && <Error text={errors.permanant_address} />}

                            </Box>

                            <Box className="profile-input-item">
                                <ThemeLabel LableFor="current_location" LableText="Current Address" />
                                <Field
                                    size="small"
                                    error={errors.current_location && touched.current_location}
                                    as="textarea"
                                    rows="4"
                                    id="current_location"
                                    placeholder="Enter Current Address" type="text" name="current_location" fullWidth />
                                {errors.current_location && touched.current_location && <Error text={errors.current_location} />}

                            </Box>



                            <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                                <ButtonType1 ButtonText="Continue And Next" />
                            </Box>
                        </Stack>
                    </Form>
                )}
            </Formik>
            {/* <Stack sx={{ width: "100%" }} justifyContent="flex-end">
                <Button onClick={() => setActiveStep(1)}> Next Step</Button>
            </Stack> */}
        </Box>
    </>)
}

export default PersonalInformation;