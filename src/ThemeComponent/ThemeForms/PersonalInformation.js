
import { Box, Container, Stack, Typography, TextField, Select as SelectField, MenuItem, Button, Radio, RadioGroup, FormControlLabel, FormControl } from "@mui/material";

import { Formik, Field, Form } from "formik";

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import DatePicker from "react-datepicker";

import { PersonalRegistrationSchema1, PersonalRegistrationSchema } from "../../Validation/CandidateValidation";
import { Skills, PerferredLocation, MaritalStatus } from "../../utils/Data";


import { ThemeButtontype1 } from "../../utils/Theme";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from '../../ThemeComponent/Common/Error';

// import ButtonType1 from "../../ThemeComponent/Common/ButtonType1";
import { useSelector } from "react-redux";
import { useState } from "react";

const PersonalInformation = ({ setActiveStep }) => {
    const animatedComponents = makeAnimated();

    let api_url = useSelector(state => state.api_url);

    let userid = useSelector(state => state.candidateInfo);
    if (userid != '') {
        userid = JSON.parse(userid);
        userid = userid.data;
    }
    // userid = userid && userid.data;

    const [personalInfoForm, setPersonalInfoForm] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [perferredLocation, setPerferredLocation] = useState([]);
    const [date, setDate] = useState();
    const [gender, setGender] = useState("");

    const [martialStatus, setMaritalStatus] = useState(" ");

    const defaultValue = {
        full_name: "",
        date_of_birth: "",
        permanant_address: "",
        current_location: "",
        phone_number: "",
        marital_status: "",
        gender: ""
    }

    const defaultValue1 = {
        current_title: "",
        current_salary: "",
        excepted_salary: "",
        current_industry: "",
        skills: "",
        perferred_location: "",
        total_work_experience: ""
    }


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

    const handleSubmit1 = async (values) => {
        console.log(values);
        // values.current_industry,
        // values.current_salary,
        // values.current_title,
        // values.excepted_salary,
        // values.perferred_location,
        // values.skills,
        // values.total_work_experience
        setPersonalInfoForm(2);
    }



    return (<>
        <Stack direction="row" gap={2}>
            <Box sx={{ width: "40%" }}></Box>
            <Box sx={{
                width: "60%",
                margin: "50px auto",
                borderRadius: "20px",
                padding: "30px",
                background: "#FFFFFF",
                borderTop: "4px solid #2B1E44"
                // boxShadow: "0px 3px 17px 0px rgba(99, 99, 99, 1)"
            }}>
                <Typography component="h3" sx={{ fontSize: "25px", color: "#2B1E44", marginBottom: "20px" }}>
                    Personal Details
                </Typography>
                {personalInfoForm == 1 && <>
                    <Formik

                        initialValues={defaultValue1}
                        validationSchema={PersonalRegistrationSchema1}
                        onSubmit={handleSubmit1}
                    >
                        {({ errors, touched, values, setFieldValue }) => (
                            <Form className="PersonalInformationForm">
                                <Stack direction="column" gap={2}>
                                    <Stack direction="column" gap={1} className="profile-input-item">
                                        <ThemeLabel LableFor="current_title" LableText="Current Title" />
                                        <Field
                                            size="small"
                                            error={errors.current_title && touched.current_title}
                                            as={TextField}
                                            id="current_title"
                                            placeholder="Enter Company Title" type="text" name="current_title" fullWidth />
                                        {errors.current_title && touched.current_title && <Error text={errors.current_title} />}

                                    </Stack>

                                    <Stack direction="column" gap={1} className="profile-input-item">
                                        <ThemeLabel LableFor="current_salary" LableText="Current Salary" />
                                        <Field
                                            size="small"
                                            error={errors.current_salary && touched.current_salary}
                                            as={TextField}
                                            id="current_salary"
                                            placeholder="Enter Current Salary" type="text" name="current_salary" fullWidth />
                                        {errors.current_salary && touched.current_salary && <Error text={errors.current_salary} />}

                                    </Stack>

                                    <Stack direction="column" gap={1} className="profile-input-item">
                                        <ThemeLabel LableFor="excepted_salary" LableText="Excepted Salary" />
                                        <Field
                                            size="small"
                                            error={errors.excepted_salary && touched.excepted_salary}
                                            as={TextField}
                                            id="excepted_salary"
                                            placeholder="Enter Excepted Salary" type="text" name="excepted_salary" fullWidth />
                                        {errors.excepted_salary && touched.excepted_salary && <Error text={errors.excepted_salary} />}

                                    </Stack>

                                    <Stack direction="column" gap={1} className="profile-input-item">
                                        <ThemeLabel LableFor="current_industry" LableText="Current Industry" />
                                        <Field
                                            size="small"
                                            error={errors.current_industry && touched.current_industry}
                                            as={TextField}
                                            id="current_industry"
                                            placeholder="Enter Current Industry" type="text" name="current_industry" fullWidth />
                                        {errors.current_industry && touched.current_industry && <Error text={errors.current_industry} />}

                                    </Stack>

                                    <Box className="input-item">
                                        <ThemeLabel LableFor="skills" LableText="Skills" />
                                        <Field
                                            variant="standard"
                                            error={errors.skills && touched.skills}
                                            component={Select}
                                            name="skills"
                                            options={Skills}
                                            components={animatedComponents}
                                            onChange={(options) => {
                                                let optionvalue = [];
                                                setSelectedOptions(options);
                                                options.map((item) => {
                                                    optionvalue.push(item.value);
                                                })
                                                setFieldValue("skills", optionvalue.join(","));
                                            }}
                                            isMulti
                                            id_data={(errors.skills && touched.skills) ? "skills-error" : "skills"}
                                            placeholder="Select Skills" data={Skills} fullWidth />

                                        {errors.skills && touched.skills && <Error text={errors.skills} />}
                                    </Box>

                                    <Box className="input-item">
                                        <ThemeLabel LableFor="perferred_location" LableText="Perferred Location" />
                                        <Field
                                            variant="standard"
                                            error={errors.perferred_location && touched.perferred_location}
                                            component={Select}
                                            name="perferred_location"
                                            options={PerferredLocation}
                                            components={animatedComponents}
                                            onChange={(options) => {
                                                let optionvalue = [];
                                                setPerferredLocation(options);
                                                options.map((item) => {
                                                    optionvalue.push(item.value);
                                                })
                                                setFieldValue("perferred_location", optionvalue.join(","));
                                            }}
                                            isMulti
                                            id_data={(errors.perferred_location && touched.perferred_location) ? "perferredlocation-error" : "perferredlocation"}
                                            placeholder="Select Perferred Location" data={PerferredLocation} fullWidth />

                                        {errors.perferred_location && touched.perferred_location && <Error text={errors.perferred_location} />}
                                    </Box>

                                    <Stack direction="column" gap={1} className="profile-input-item">
                                        <ThemeLabel LableFor="total_work_experience" LableText="Total Work Experience" />
                                        <Field
                                            size="small"
                                            error={errors.full_name && touched.full_name}
                                            as={TextField}
                                            id="total_work_experience"
                                            placeholder="Enter Total Work Experience" type="text" name="total_work_experience" fullWidth />
                                        {errors.total_work_experience && touched.total_work_experience && <Error text={errors.total_work_experience} />}

                                    </Stack>

                                    <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                                        {/* <ButtonType1 ButtonText="Continue And Next" /> */}
                                        <ThemeButtontype1 variant="contained" type="submit">Continue And Next</ThemeButtontype1>
                                    </Box>
                                </Stack>
                            </Form>
                        )}
                    </Formik></>}
                {personalInfoForm == 2 && <>
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

                                    <Box className="input-item">
                                        <ThemeLabel LableFor="marital_status" LableText="Marital Status" />
                                        <SelectField
                                            labelId="demo-simple-select-label"
                                            name="marital_status"
                                            value={martialStatus}
                                            onChange={(event) => {
                                                setMaritalStatus(event.target.value);
                                                setFieldValue("marital_status", event.target.value);
                                            }}
                                            sx={{ display: "block", boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                                            disableUnderline
                                        >
                                            <MenuItem value=" ">Select Martial Status</MenuItem>
                                            {MaritalStatus.map((item) =>
                                                <MenuItem value={item.value} key={item.id}>{item.Name}</MenuItem>
                                            )}
                                        </SelectField>

                                        {errors.marital_status && touched.marital_status && <Error text={errors.marital_status} />}
                                    </Box>

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
                                        <ThemeButtontype1 variant="contained" type="submit">Continue And Next</ThemeButtontype1>
                                    </Box>
                                </Stack>
                            </Form>
                        )}
                    </Formik>
                </>}


            </Box>
        </Stack>
    </>)
}

export default PersonalInformation;