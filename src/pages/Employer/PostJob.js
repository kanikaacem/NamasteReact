import { postRequest } from "../../utils/ApiRequests";
import { PostJobURL } from "../../utils/ApiUrls";

import {
    Box, Stack, TextField, Checkbox, Select as SelectField,
    MenuItem, Snackbar, IconButton, Alert, Typography, FormControlLabel
} from '@mui/material';

import { Formik, Field, Form } from "formik";

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { DefaultEditor } from 'react-simple-wysiwyg';
import { useSelector } from 'react-redux';

import { useState } from "react";

import { postJobValidationSchema } from "../../Validation/PostJobValidation";
import { cities, Experience, Role, Skills, JobType, JobWorkingType, PaymentType } from "../../utils/Data";


import Error from '../../ThemeComponent/Common/Error';
import ThemeLabel from '../../ThemeComponent/ThemeForms/ThemeLabel';
import { ThemeButtontype1 } from "../../utils/Theme";
import TimePickerComponent from '../../ThemeComponent/Common/TimePickerComponent';

const PostJob = () => {
    const user = localStorage.user && JSON.parse(localStorage.user);
    const api_url = useSelector(state => state.api_url);

    const [city, setCity] = useState(" ");
    const [role, setRole] = useState(" ");
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [jobType, setJobType] = useState("regular");
    const [experience, setExperience] = useState(" ");
    // const [jobType, setJobType] = useState("regular");
    const [jobWorkingType, setJobWorkingType] = useState(" ");
    const [paymentType, setPaymentType] = useState(" ");

    const [sunStartTime, setSunStartTime] = useState("");
    const [sunEndTime, setSunEndTime] = useState("");

    const [monStartTime, setMonStartTime] = useState("");
    const [monEndTime, setMonEndTime] = useState("");

    const [tueStartTime, setTueStartTime] = useState("");
    const [tueEndTime, setTueEndTime] = useState("");

    const [wedStartTime, setWedStartTime] = useState("");
    const [wedEndTime, setWedEndTime] = useState("");

    const [thruStartTime, setThruStartTime] = useState("");
    const [thruEndTime, setThruEndTime] = useState("");

    const [friStartTime, setFriStartTime] = useState("");
    const [friEndTime, setFriEndTime] = useState("");

    const [satStartTime, setSatStartTime] = useState("");
    const [satEndTime, setSatEndTime] = useState("");

    let extra_benefits = [];

    const animatedComponents = makeAnimated();

    const defaultValue = {
        job_title: "",
        role: "",
        experience: "",
        opening: "",
        salary: "",
        short_description: "",
        long_description: "",
        city: "",
        job_type: jobType,
        job_working_type: "",
        responsibilites: ""
    }

    const handleClose = (event) => {
        setFormSubmitted(false);
    };

    /*Submitting the date value to every field if we check the checkbox*/
    const addTime = () => {
        setMonStartTime(sunStartTime);
        setMonEndTime(sunEndTime)

        setTueStartTime(sunStartTime)
        setTueEndTime(sunEndTime)

        setWedStartTime(sunStartTime)
        setWedEndTime(sunEndTime)

        setThruStartTime(sunStartTime)
        setThruEndTime(sunEndTime)

        setFriStartTime(sunStartTime)
        setFriEndTime(sunEndTime)

        setSatStartTime(sunStartTime)
        setSatEndTime(sunEndTime)

    }

    /* Adding the extra benefits */
    const handleExtraBenefit = (value) => {

        if (!extra_benefits.includes(value)) {
            extra_benefits.push(value);
        } else {
            extra_benefits.splice(extra_benefits.indexOf(value), 1);
        }
    }

    const handleSubmit = async (values, { resetForm }) => {
        // console.log(values);
        // console.log(extra_benefits)
        let formData = new FormData();
        formData = {
            userid: user._id,
            title: values.job_title,
            role: values.role,
            experience: values.experience,
            opening: values.opening,
            salary: values.salary,
            skills: values.skills,
            shortdescription: values.short_description,
            description: values.long_description,
            location: values.city
        }

        let response = await postRequest(PostJobURL, formData);
        if (response.status == 1) {
            setFormSubmitted(true);
            resetForm();
            setCity(" ");
            setRole(" ");
            setSelectedOptions([]);
        }
    }


    return (<>
        <Typography component="div" sx={{ fontWeight: "600", fontSize: "30px", padding: "5px 100px" }}>
            Post Job
        </Typography>
        <Snackbar
            open={formSubmitted}
            autoHideDuration={6000} onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Your Job is saved . It will be publised after reviewing.
            </Alert>

        </Snackbar>

        <Box sx={{ paddingBottom: "30px" }}>
            <Box sx={{
                borderRadius: "20px",
                padding: "27px 40px 20px 35px",
                background: "#FFFFFF",
                width: "50%",
                margin: "0px auto",
                borderTop: "4px solid #2B1E44",
            }}>
                <Typography component="div" sx={{ fontWeight: "600" }}>
                    Share some basic details about the role
                </Typography>

                <Typography component="div" sx={{ marginBottom: "20px" }}>
                    This helps us find you the most relevant candidates
                </Typography>
                <Formik

                    initialValues={defaultValue}
                    validationSchema={jobType == "regular" && postJobValidationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values, errors, touched, setFieldValue }) => (
                        <Form className="PostJobForm" >

                            <Stack direction="column" gap={2} >
                                <Box className="input-item">
                                    <ThemeLabel LableFor="job_title" LableText="Job Title" />
                                    <Field
                                        variant="standard"
                                        error={errors.job_title && touched.job_title}
                                        as={TextField}
                                        id="job_title"
                                        placeholder="Enter Job Title" type="text" name="job_title" fullWidth />
                                    {errors.job_title && touched.job_title && <Error text={errors.job_title} />}
                                </Box>

                                <Box className="input-item">
                                    <ThemeLabel LableFor="job_type" LableText="Job Type" />
                                    <SelectField
                                        variant="standard"
                                        labelId="demo-simple-select-label"
                                        name="job_type"
                                        value={jobType}
                                        label="role"
                                        onChange={(event) => {
                                            setJobType(event.target.value);
                                            setFieldValue("role", event.target.value);
                                        }}
                                        sx={{ display: "block", boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                                        disableUnderline
                                    >
                                        <MenuItem value=" ">Select Job Type</MenuItem>
                                        {JobType.map((item) =>
                                            <MenuItem value={item.value} key={item.id}>{item.Name}</MenuItem>
                                        )}
                                    </SelectField>

                                    {errors.job_type && touched.job_type && <Error text={errors.job_type} />}
                                </Box>

                                {
                                    jobType == "part-time" && <>

                                        <Box className="input-item">
                                            <ThemeLabel LableFor="job_working_type" LableText="Job Working Type" />
                                            <SelectField
                                                variant="standard"
                                                labelId="demo-simple-select-label"
                                                name="job_working_type"
                                                value={jobWorkingType}
                                                label="role"
                                                onChange={(event) => {
                                                    setJobWorkingType(event.target.value);
                                                    setFieldValue("job_working_type", event.target.value);
                                                }}
                                                sx={{ display: "block", boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                                                disableUnderline
                                            >
                                                <MenuItem value=" ">Select Job Type</MenuItem>
                                                {JobWorkingType.map((item) =>
                                                    <MenuItem value={item.value} key={item.id}>{item.Name}</MenuItem>
                                                )}
                                            </SelectField>

                                            {errors.job_working_type && touched.job_working_type && <Error text={errors.job_working_type} />}
                                        </Box>

                                        <Box className="input-item">
                                            <ThemeLabel LableFor="payment_type" LableText="Payment Type" />
                                            <SelectField
                                                variant="standard"
                                                labelId="demo-simple-select-label"
                                                name="payment_type"
                                                value={paymentType}
                                                onChange={(event) => {
                                                    setPaymentType(event.target.value);
                                                    setFieldValue("payment_type", event.target.value);
                                                }}
                                                sx={{ display: "block", boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                                                disableUnderline
                                            >
                                                <MenuItem value=" ">Select Payment Type</MenuItem>
                                                {PaymentType.map((item) =>
                                                    <MenuItem value={item.value} key={item.id}>{item.Name}</MenuItem>
                                                )}
                                            </SelectField>

                                            {errors.payment_type && touched.payment_type && <Error text={errors.payment_type} />}
                                        </Box>

                                        <ThemeLabel LableFor="working_time" LableText="Working Timing" />

                                        <Stack direction="column" gap={2} sx={{ margin: "10px 0px" }} className="">
                                            <Stack direction="row" gap={3}>
                                                <Box sx={{ width: "80px" }}>
                                                    <ThemeLabel LableFor="working_time" LableText="Sunday" />
                                                </Box>
                                                <TimePickerComponent value={sunStartTime} setValue={setSunStartTime} />
                                                <TimePickerComponent value={sunEndTime} setValue={setSunEndTime} />
                                                <Checkbox onClick={addTime} />

                                            </Stack>
                                            <Stack direction="row" gap={3}>
                                                <Box sx={{ width: "80px" }} >
                                                    <ThemeLabel LableFor="working_time" LableText="Monday" />
                                                </Box>
                                                <TimePickerComponent value={monStartTime} setValue={setMonStartTime} />
                                                <TimePickerComponent value={monEndTime} setValue={setMonEndTime} />
                                            </Stack>
                                            <Stack direction="row" gap={3}>
                                                <Box sx={{ width: "80px" }} >
                                                    <ThemeLabel LableFor="working_time" LableText="Tuesday" />
                                                </Box>
                                                <TimePickerComponent value={tueStartTime} setValue={setTueStartTime} />
                                                <TimePickerComponent value={tueEndTime} setValue={setTueEndTime} />
                                            </Stack>
                                            <Stack direction="row" gap={3}>
                                                <Box sx={{ width: "80px" }} >
                                                    <ThemeLabel LableFor="working_time" LableText="Wednesday" />
                                                </Box>
                                                <TimePickerComponent value={wedStartTime} setValue={setWedStartTime} />
                                                <TimePickerComponent value={wedEndTime} setValue={setWedEndTime} />
                                            </Stack>
                                            <Stack direction="row" gap={3}>
                                                <Box sx={{ width: "80px" }} >
                                                    <ThemeLabel LableFor="working_time" LableText="Thrusday" />
                                                </Box>
                                                <TimePickerComponent value={thruStartTime} setValue={setThruStartTime} />
                                                <TimePickerComponent value={thruEndTime} setValue={setThruEndTime} />
                                            </Stack>
                                            <Stack direction="row" gap={3}>
                                                <Box sx={{ width: "80px" }} >
                                                    <ThemeLabel LableFor="working_time" LableText="Friday" />
                                                </Box>
                                                <TimePickerComponent value={friStartTime} setValue={setFriStartTime} />
                                                <TimePickerComponent value={friEndTime} setValue={setFriEndTime} />
                                            </Stack>
                                            <Stack direction="row" gap={3}>
                                                <Box sx={{ width: "80px" }} >
                                                    <ThemeLabel LableFor="working_time" LableText="Saturday" />
                                                </Box>
                                                <TimePickerComponent value={satStartTime} setValue={setSatStartTime} />
                                                <TimePickerComponent value={satEndTime} setValue={setSatEndTime} />
                                            </Stack>
                                        </Stack>

                                        <Box className="input-item">
                                            <ThemeLabel LableFor="responsibilites" LableText="Responsibilites" />
                                            <Box sx={{ width: "100%", margin: "10px 0px" }}>
                                                <TextField
                                                    error={errors.responsibilites && touched.responsibilites}
                                                    sx={{ width: "100%" }}
                                                    variant="standard"
                                                    placeholder="Responsibilites"
                                                    multiline
                                                    rows={4}
                                                    maxRows={4}
                                                    onChange={(event) => setFieldValue("responsibilites", event.target.value)}
                                                />
                                            </Box>

                                            {errors.responsibilites && touched.responsibilites && <Error text={errors.responsibilites} />}

                                        </Box>

                                        <Box className="input-item">
                                            <ThemeLabel LableFor="extra_benefits" LableText="Extra Benefits" />
                                            <Stack direction="row" gap={1}>
                                                <Field
                                                    variant="standard"
                                                    error={errors.extra_benefits && touched.extra_benefits}
                                                    as={FormControlLabel}
                                                    control={<Checkbox />}
                                                    id="extra_benefits"
                                                    label="Incentives"
                                                    type="text" name="extra_benefits"
                                                    fullWidth
                                                    onChange={(event) => {
                                                        handleExtraBenefit("incentive")
                                                    }
                                                    } />
                                                <Field
                                                    variant="standard"
                                                    error={errors.extra_benefits && touched.extra_benefits}
                                                    as={FormControlLabel}
                                                    control={<Checkbox />}
                                                    id="extra_benefits"
                                                    label="Bonus"
                                                    type="text" name="extra_benefits"
                                                    fullWidth
                                                    onChange={(event) => {
                                                        handleExtraBenefit("bonus")
                                                    }} />
                                                <Field
                                                    variant="standard"
                                                    error={errors.extra_benefits && touched.extra_benefits}
                                                    as={FormControlLabel}
                                                    control={<Checkbox />}
                                                    id="extra_benefits"
                                                    label="Overtime"
                                                    type="text" name="extra_benefits"
                                                    fullWidth
                                                    onChange={(event) => {
                                                        handleExtraBenefit("overtime")

                                                    }} />
                                            </Stack>

                                            {errors.extra_benefits && touched.extra_benefits && <Error text={errors.extra_benefits} />}
                                        </Box>

                                        <Box className="input-item">
                                            <ThemeLabel LableFor="advantage" LableText="Advantage" />
                                            <Stack>
                                                <Field
                                                    variant="standard"
                                                    error={errors.advantage && touched.advantage}
                                                    as={FormControlLabel}
                                                    control={<Checkbox />}
                                                    id="advantage"
                                                    label="Health Insurances"
                                                    type="text" name="advantage"
                                                    fullWidth
                                                    onChange={(event) => {
                                                        setFieldValue("advantage", "health_insurance")
                                                    }
                                                    } />

                                            </Stack>
                                            {errors.advantage && touched.advantage && <Error text={errors.advantage} />}
                                        </Box>
                                    </>
                                }

                                <Box className="input-item">
                                    <ThemeLabel LableFor="role" LableText="Role" />
                                    <SelectField
                                        variant="standard"
                                        labelId="demo-simple-select-label"
                                        name="role"
                                        value={role}
                                        label="role"
                                        onChange={(event) => {
                                            setRole(event.target.value);
                                            setFieldValue("role", event.target.value);
                                        }}
                                        sx={{ display: "block", boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                                        disableUnderline
                                    >
                                        <MenuItem value=" ">Select Role</MenuItem>
                                        {Role.map((item) =>
                                            <MenuItem value={item.value} key={item.id}>{item.name}</MenuItem>
                                        )}
                                    </SelectField>
                                    {errors.role && touched.role && <Error text={errors.role} />}
                                </Box>

                                <Box className="input-item">
                                    <ThemeLabel LableFor="experience" LableText="Experience" />
                                    <SelectField
                                        variant="standard"
                                        labelId="demo-simple-select-label"
                                        name="experience"
                                        value={experience}
                                        label="role"
                                        onChange={(event) => {
                                            setExperience(event.target.value);
                                            setFieldValue("experience", event.target.value);
                                        }}
                                        sx={{ display: "block", boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                                        disableUnderline
                                    >
                                        <MenuItem value=" ">Select Experience</MenuItem>
                                        {Experience.map((item) =>
                                            <MenuItem value={item.value} key={item.id}>{item.name}</MenuItem>
                                        )}
                                    </SelectField>
                                    {errors.experience && touched.experience && <Error text={errors.experience} />}
                                </Box>

                                <Box className="input-item">
                                    <ThemeLabel LableFor="opening" LableText="Opening" />
                                    <Field
                                        variant="standard"
                                        error={errors.opening && touched.opening}
                                        as={TextField}
                                        id="opening"
                                        placeholder="Enter Opening" type="text" name="opening" fullWidth />
                                    {errors.opening && touched.opening && <Error text={errors.opening} />}
                                </Box>

                                <Box className="input-item">
                                    <ThemeLabel LableFor="salary" LableText="Salary" />
                                    <Field
                                        variant="standard"
                                        error={errors.opening && touched.opening}
                                        as={TextField}
                                        id="salary"
                                        placeholder="Enter Salary" type="text" name="salary" fullWidth />
                                    {errors.salary && touched.salary && <Error text={errors.salary} />}
                                </Box>

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
                                        placeholder="Select Skills" data={Experience} fullWidth />

                                    {errors.skills && touched.skills && <Error text={errors.skills} />}
                                </Box>

                                <Box className="input-item">
                                    <ThemeLabel LableFor="long_description" LableText="Long Description" />
                                    <DefaultEditor
                                        style={{
                                            minHeight: "300px",
                                            margin: "20px 0px !important",
                                            display: "block"
                                        }}
                                        name="long_description"
                                        value={values['long_description']} onChange={(e) => { setFieldValue("long_description", e.target.value) }} />
                                    {errors.long_description && touched.long_description && <Error text={errors.long_description} />}
                                </Box>

                                <Box className="input-item">
                                    <ThemeLabel LableFor="short_description" LableText="Short Description" />
                                    <Field
                                        variant="standard"
                                        error={errors.short_description && touched.short_description}
                                        as={TextField}
                                        id="short_description"
                                        placeholder="Enter Short Description" type="textarea" name="short_description" fullWidth />
                                    {errors.short_description && touched.short_description && <Error text={errors.short_description} />}


                                </Box>

                                <Box className="input-item">
                                    <ThemeLabel LableFor="city" LableText="City" />
                                    <SelectField
                                        variant="standard"
                                        labelId="demo-simple-select-label"
                                        name="city"
                                        value={city}
                                        label="Age"
                                        onChange={(event) => {
                                            setCity(event.target.value);
                                            setFieldValue("city", event.target.value);
                                        }}
                                        sx={{ display: "block", boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                                        disableUnderline
                                    >
                                        <MenuItem value=" ">Select City</MenuItem>
                                        {cities.map((item) =>
                                            <MenuItem value={item.value} key={item.id}>{item.name}</MenuItem>
                                        )}
                                    </SelectField>

                                    {errors.city && touched.city && <Error text={errors.city} />}
                                </Box>
                            </Stack>

                            <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                                <ThemeButtontype1 variant="contained" type="submit">Save</ThemeButtontype1>
                            </Box>

                        </Form>
                    )}
                </Formik>

            </Box>
        </Box>



    </>)
}
export default PostJob;