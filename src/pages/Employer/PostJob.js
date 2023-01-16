import { postRequest } from "../../utils/ApiRequests";
import { PostJobURL } from "../../utils/ApiUrls";

import {
    Box, Stack, TextField, Checkbox, Select as SelectField,
    MenuItem, Snackbar, IconButton, Alert, Typography, FormControlLabel,
    Chip
} from '@mui/material';

import { Formik, Field, Form } from "formik";

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { WithContext as ReactTags } from 'react-tag-input';
import { DefaultEditor } from 'react-simple-wysiwyg';
import { useSelector } from 'react-redux';

import { useState } from "react";

import { postJobValidationSchema, postPartTimeJobValidationSchema } from "../../Validation/PostJobValidation";
import { cities, Experience, Role, Skills, JobType, AssociationType, PaymentType } from "../../utils/Data";


import Error from '../../ThemeComponent/Common/Error';
import ThemeLabel from '../../ThemeComponent/ThemeForms/ThemeLabel';
import { ThemeButtontype1 } from "../../utils/Theme";
import TimePickerComponent from '../../ThemeComponent/Common/TimePickerComponent';

// const suggestions = COUNTRIES.map(country => {
//     return {
//         id: country,
//         text: country
//     };
// });

const KeyCodes = {
    comma: 188,
    enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const PostJob = () => {
    const user = localStorage.user && JSON.parse(localStorage.user);
    const api_url = useSelector(state => state.api_url);

    const [city, setCity] = useState(" ");
    const [role, setRole] = useState(" ");
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [jobType, setJobType] = useState("part-time");
    const [associationType, setAssociationType] = useState(" ");
    const [industryType, setIndustryType] = useState(" ");
    const [experience, setExperience] = useState(" ");
    const [jobWorkingType, setJobWorkingType] = useState(" ");
    const [paymentType, setPaymentType] = useState(" ");

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

    const handleClick = (event) => {
        event.target.classList.add("ValueSelected")
        console.log(event.target);
    };

    /*Tags*/
    const [tags, setTags] = useState([
        { id: 'Thailand', text: 'Thailand' },
        { id: 'India', text: 'India' },
        { id: 'Vietnam', text: 'Vietnam' },
        { id: 'Turkey', text: 'Turkey' }
    ]);

    const handleDelete = i => {
        setTags(tags.filter((tag, index) => index !== i));
    };

    const handleAddition = tag => {
        setTags([...tags, tag]);
    };

    const handleDrag = (tag, currPos, newPos) => {
        const newTags = tags.slice();

        newTags.splice(currPos, 1);
        newTags.splice(newPos, 0, tag);

        // re-render
        setTags(newTags);
    };

    const handleTagClick = index => {
        console.log('The tag at index ' + index + ' was clicked');
    };

    const defaultValue = {
        company_name: "",
        job_title: "",
        association_type: " ",
        job_type: jobType,
        industry_type: industryType,
        role: "",
        experience: "",
        opening: "",
        salary: "",
        short_description: "",
        job_description: "",
        city: "",
        job_working_type: "",
        responsibilites: ""
    }

    const handleClose = (event) => {
        setFormSubmitted(false);
    };

    /*Submitting the date value to every field if we check the checkbox*/
    const addTime = () => {


        setTueStartTime(monStartTime)
        setTueEndTime(monEndTime)

        setWedStartTime(monStartTime)
        setWedEndTime(monEndTime)

        setThruStartTime(monStartTime)
        setThruEndTime(monEndTime)

        setFriStartTime(monStartTime)
        setFriEndTime(monEndTime)

        setSatStartTime(monStartTime)
        setSatEndTime(monEndTime)

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
        console.log(values);
        console.log(tags);
        // console.log(values);
        // console.log(extra_benefits)
        // let formData = new FormData();
        // formData = {
        //     userid: user._id,
        //     title: values.job_title,
        //     role: values.role,
        //     experience: values.experience,
        //     opening: values.opening,
        //     salary: values.salary,
        //     skills: values.skills,
        //     shortdescription: values.short_description,
        //     description: values.long_description,
        //     location: values.city
        // }
        // if (jobType == "regular") {

        //     let response = await postRequest(PostJobURL, formData);
        //     if (response.status == 1) {
        //         setFormSubmitted(true);
        //         resetForm();
        //         setCity(" ");
        //         setRole(" ");
        //         setSelectedOptions("");
        //     }
        // }
        // else {
        //     console.log(values);
        //     console.log(formData);
        // }



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
                    validationSchema={jobType == "regular" ? postJobValidationSchema : postPartTimeJobValidationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values, errors, touched, setFieldValue }) => (
                        <Form className="PostJobForm" >

                            <Stack direction="column" gap={2} >
                                <Box className="input-item">
                                    <ThemeLabel LableFor="company_name" LableText="Company Name" />
                                    <Field
                                        variant="standard"
                                        error={errors.company_name && touched.company_name}
                                        as={TextField}
                                        id="company_name"
                                        placeholder="Enter Company Name" type="text" name="company_name" fullWidth />
                                    {errors.company_name && touched.company_name && <Error text={errors.company_name} />}
                                </Box>
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
                                    <ThemeLabel LableFor="job_type" LableText="Association Type" />
                                    <SelectField
                                        variant="standard"
                                        labelId="demo-simple-select-label"
                                        name="association_type"
                                        value={associationType}
                                        label="role"
                                        onChange={(event) => {
                                            setAssociationType(event.target.value);
                                            setFieldValue("association_type", event.target.value);
                                        }}
                                        sx={{ display: "block", boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                                        disableUnderline
                                    >
                                        <MenuItem value=" ">Select Association Type</MenuItem>
                                        {AssociationType.map((item) =>
                                            <MenuItem value={item.value} key={item.id}>{item.Name}</MenuItem>
                                        )}
                                    </SelectField>

                                    {errors.association_type && touched.association_type && <Error text={errors.association_type} />}
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

                                <Box className="input-item">
                                    <ThemeLabel LableFor="industry_type" LableText="Industry Type" />
                                    <SelectField
                                        variant="standard"
                                        labelId="demo-simple-select-label"
                                        name="industry_type"
                                        value={jobType}
                                        label="role"
                                        onChange={(event) => {
                                            setIndustryType(event.target.value);
                                            setFieldValue("industry_type", event.target.value);
                                        }}
                                        sx={{ display: "block", boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                                        disableUnderline
                                    >
                                        <MenuItem value=" ">Select Industry Type</MenuItem>
                                        {JobType.map((item) =>
                                            <MenuItem value={item.value} key={item.id}>{item.Name}</MenuItem>
                                        )}
                                    </SelectField>

                                    {errors.industry_type && touched.industry_type && <Error text={errors.industry_type} />}
                                </Box>

                                <Box className="input-item">
                                    <ThemeLabel LableFor="skills" LableText="Skills" />
                                    <Box sx={{ width: "100%", margin: "10px 0px" }}>
                                        <ReactTags
                                            tags={tags}
                                            // suggestions={suggestions}
                                            delimiters={delimiters}
                                            handleDelete={handleDelete}
                                            handleAddition={handleAddition}
                                            handleDrag={handleDrag}
                                            handleTagClick={handleTagClick}
                                            inputFieldPosition="bottom"
                                            autocomplete
                                        />
                                    </Box>

                                    {errors.skills && touched.skills && <Error text={errors.skills} />}

                                </Box>

                                <Box className="input-item">
                                    <ThemeLabel LableFor="responsibilites" LableText="Job Responsibilites" />
                                    <Box sx={{ width: "100%", margin: "10px 0px" }}>
                                        <TextField
                                            error={errors.responsibilites && touched.responsibilites}
                                            sx={{ width: "100%" }}
                                            variant="standard"
                                            placeholder="Job Responsibilites"
                                            multiline
                                            rows={4}
                                            maxRows={4}
                                            onChange={(event) => setFieldValue("responsibilites", event.target.value)}
                                        />
                                    </Box>

                                    {errors.responsibilites && touched.responsibilites && <Error text={errors.responsibilites} />}

                                </Box>

                                <Box className="input-item">
                                    <ThemeLabel LableFor="job_description" LableText="Job Description" />
                                    <DefaultEditor
                                        style={{
                                            minHeight: "300px",
                                            margin: "20px 0px !important",
                                            display: "block"
                                        }}
                                        name="job_description"
                                        value={values['job_description']} onChange={(e) => { setFieldValue("job_description", e.target.value) }} />
                                    {errors.job_description && touched.job_description && <Error text={errors.job_description} />}
                                </Box>

                                <Box className="input-item">
                                    <ThemeLabel LableFor="skills" LableText="Skills" />
                                    <Stack direction="row" spacing={1}>
                                        <Chip className="Chips" label="kNika" onClick={handleClick} />
                                        <Chip className="Chips" label="kreeti" variant="outlined" onClick={handleClick} />
                                    </Stack>
                                </Box>

                                {/* <Box className="input-item">
                                    <ThemeLabel LableFor="shift_timing" LableText="Shift Time" />
                                    <Stack direction="column" gap={2} sx={{ margin: "10px 0px" }} className="shift_timing">

                                        <Stack direction="row" gap={3}>
                                            <Box sx={{ width: "80px" }} >
                                                <ThemeLabel LableFor="working_time" LableText="Monday" />
                                            </Box>
                                            <TimePickerComponent value={monStartTime} setValue={setMonStartTime} />
                                            <TimePickerComponent value={monEndTime} setValue={setMonEndTime} />
                                            <Box><Checkbox onClick={addTime} /> Check All</Box>
                                        </Stack>
                                        <Stack direction="row" gap={3}>
                                            <Box sx={{ width: "80px" }} >
                                                <ThemeLabel LableFor="working_time" LableText="Tuesday" />
                                            </Box>
                                            <TimePickerComponent value={tueStartTime} setValue={setTueStartTime} />
                                            <TimePickerComponent value={tueEndTime} setValue={setTueEndTime} />
                                            <Checkbox onClick={() => {
                                                setTueStartTime(monStartTime)
                                                setTueEndTime(monEndTime)

                                            }} />
                                        </Stack>
                                        <Stack direction="row" gap={3}>
                                            <Box sx={{ width: "80px" }} >
                                                <ThemeLabel LableFor="working_time" LableText="Wednesday" />
                                            </Box>
                                            <TimePickerComponent value={wedStartTime} setValue={setWedStartTime} />
                                            <TimePickerComponent value={wedEndTime} setValue={setWedEndTime} />
                                            <Checkbox onClick={() => {
                                                setWedStartTime(monStartTime)
                                                setWedEndTime(monEndTime)

                                            }} />
                                        </Stack>
                                        <Stack direction="row" gap={3}>
                                            <Box sx={{ width: "80px" }} >
                                                <ThemeLabel LableFor="working_time" LableText="Thrusday" />
                                            </Box>
                                            <TimePickerComponent value={thruStartTime} setValue={setThruStartTime} />
                                            <TimePickerComponent value={thruEndTime} setValue={setThruEndTime} />
                                            <Checkbox onClick={() => {
                                                setThruStartTime(monStartTime)
                                                setThruEndTime(monEndTime)
                                            }} />
                                        </Stack>
                                        <Stack direction="row" gap={3}>
                                            <Box sx={{ width: "80px" }} >
                                                <ThemeLabel LableFor="working_time" LableText="Friday" />
                                            </Box>
                                            <TimePickerComponent value={friStartTime} setValue={setFriStartTime} />
                                            <TimePickerComponent value={friEndTime} setValue={setFriEndTime} />
                                            <Checkbox onClick={() => {
                                                setFriStartTime(monStartTime)
                                                setFriEndTime(monEndTime)

                                            }} />
                                        </Stack>
                                        <Stack direction="row" gap={3}>
                                            <Box sx={{ width: "80px" }} >
                                                <ThemeLabel LableFor="working_time" LableText="Saturday" />
                                            </Box>
                                            <TimePickerComponent value={satStartTime} setValue={setSatStartTime} />
                                            <TimePickerComponent value={satEndTime} setValue={setSatEndTime} />
                                            <Checkbox onClick={() => {
                                                setSatStartTime(monStartTime)
                                                setSatEndTime(monEndTime)
                                            }} />
                                        </Stack>
                                    </Stack>
                                </Box> */}






                                {
                                    jobType == "part-time" && <>

                                        {/* <Box className="input-item">
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
                                        </Box> */}

                                        {/* <Box className="input-item">
                                            <ThemeLabel LableFor="salary_type" LableText="Salary Type" />
                                            <SelectField
                                                variant="standard"
                                                labelId="demo-simple-select-label"
                                                name="salary_type"
                                                value={paymentType}
                                                onChange={(event) => {
                                                    setPaymentType(event.target.value);
                                                    setFieldValue("salary_type", event.target.value);
                                                }}
                                                sx={{ display: "block", boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                                                disableUnderline
                                            >
                                                <MenuItem value=" ">Select Salary Type</MenuItem>
                                                {PaymentType.map((item) =>
                                                    <MenuItem value={item.value} key={item.id}>{item.Name}</MenuItem>
                                                )}
                                            </SelectField>

                                            {errors.salary_type && touched.salary_type && <Error text={errors.salary_type} />}
                                        </Box> */}

                                        {/* <ThemeLabel LableFor="working_time" LableText="Working Timing" />

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
                                        </Stack> */}



                                        {/* <Box className="input-item">
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
                                        </Box> */}

                                        {/* <Box className="input-item">
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
                                        </Box> */}
                                    </>
                                }

                                {/* <Box className="input-item">
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
                                </Box> */}

                                {/* <Box className="input-item">
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
                                </Box> */}

                                {/* <Box className="input-item">
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
                                        value={selectedOptions}
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
                                </Box> */}
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