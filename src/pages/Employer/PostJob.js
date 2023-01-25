import { postRequest, getRequest } from "../../utils/ApiRequests";
import { PostJobURL, StatesURL } from "../../utils/ApiUrls";

import {
    Box, Stack, TextField, Checkbox, Select as SelectField,
    MenuItem, Snackbar, IconButton, Alert, Typography, FormControlLabel,
    Chip
} from '@mui/material';

import ClickAwayListener from '@mui/base/ClickAwayListener';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { Formik, Field, Form } from "formik";

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { WithContext as ReactTags } from 'react-tag-input';
import { DefaultEditor } from 'react-simple-wysiwyg';
import { useSelector } from 'react-redux';

import { useState, useEffect } from "react";

import HeaderSec from "../../ThemeComponent/Common/HeaderSec";
import { postJobValidationSchema, postPartTimeJobValidationSchema } from "../../Validation/PostJobValidation";
import { cities, Experience, Role, Skills, JobType, AssociationType, PaymentType, WorkingDays, WorkingShift, SalaryType, SalaryCTC } from "../../utils/Data";

import { SocialBox, ThemeButtontype1, ThemeButtonType2, ThemeButtonType3, ThemeFInputDiv, NextButton } from "../../utils/Theme";


import Error from '../../ThemeComponent/Common/Error';
import ThemeLabel from '../../ThemeComponent/ThemeForms/ThemeLabel';
import TimePickerComponent from '../../ThemeComponent/Common/TimePickerComponent';

const KeyCodes = {
    comma: 188,
    enter: 13
};

const delimiters = [KeyCodes.comma, KeyCodes.enter];

const PostJob = () => {
    const [postJobStep, setPostJobStep] = useState(1);
    const user = localStorage.user && JSON.parse(localStorage.user);
    const api_url = useSelector(state => state.api_url);

    const [city, setCity] = useState(" ");
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [jobType, setJobType] = useState("part-time");
    const [associationType, setAssociationType] = useState(" ");
    const [industryType, setIndustryType] = useState(" ");
    const [experience, setExperience] = useState(" ");
    const [jobWorkingType, setJobWorkingType] = useState(" ");
    const [workShift, setWorkShift] = useState(" ");
    const [paymentType, setPaymentType] = useState(" ");
    const [startingTime, setStartingTime] = useState(new Date());
    const [endingTime, setEndingTime] = useState(new Date());

    const [workingDays, setWorkingDays] = useState(" ");

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

    const [salaryType, setSalaryType] = useState(" ");
    const [satStartTime, setSatStartTime] = useState("");
    const [satEndTime, setSatEndTime] = useState(" ");
    const [CTCSalary, setCTCSalary] = useState(" ");

    const [state, setState] = useState(" ");
    const [companyAddress, setCompanyAddress] = useState("");
    const [autoData, setAutoData] = useState([]);
    const [CountryState, setCountryState] = useState([]);
    const [District, setDistrict] = useState([]);
    const [menubar, setMenuBar] = useState(false);
    const [companyName, setCompanyName] = useState("");
    const [salary, setSalary] = useState("");
    const [extraBenefits, setExtraBenefits] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [jobPlace, setJobPlace] = useState("");
    const [jobTitle, setJobTitle] = useState("");
    const [responsibilty, setResponsibilty] = useState("");
    const [skills, setSkills] = useState("");
    const [weeklyOff, setWeeklyOff] = useState("");

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
        job_type: "",
        industry_type: "",
        association_type: "",
        job_place: "",
        responsibilites: "",
        job_description: "",
        skills: "",
        working_days: "",
        work_shift: "",
        starting_time: "",
        ending_time: "",
        salary_type: "",
        salary: "",
        weekly_off: "",
        state: "",
        city: "",
        company_address: "",
        extra_benefits: ""
    }

    const handleClose = (event) => {
        setFormSubmitted(false);
    };


    /* Adding the extra benefits */
    const handleExtraBenefit = (value) => {

        if (!extra_benefits.includes(value)) {
            extra_benefits.push(value);
        } else {
            extra_benefits.splice(extra_benefits.indexOf(value), 1);
        }
    }

    const handleSubmit1 = async (values, { resetForm }) => {
        // associationType
        // city
        // state
        // companyAddress
        // industryType
        // setCompanyName(values.company_name)
        // setSalary(values.ctc_salary);
        // setStartingTime(values.starting_time);
        // setEndingTime(values.ending_time);
        // setExtraBenefits(values.extra_benefits)
        // setJobDescription(values.job_description);
        // setJobPlace(values.job_place);
        // setJobTitle(values.job_title)
        // jobType;
        // setResponsibilty(values.responsibilites);
        // salaryType
        // setCTCSalary(values.ctc_salary);
        // setSkills(values.skills);
        // startingTime
        // endingTime
        // setWeeklyOff(values.weekly_off)
        // workShift
        // jobWorkingDay
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

    useEffect(() => {
        const getState = async () => {
            let response = await getRequest(StatesURL);
            setCountryState(response.data);
        }
        getState();
    }, [])

    const getDistrictByState = async (statefilter) => {
        // console.log(statefilter);
        let response = await getRequest("http://13.235.183.204:3001/api/map/districts?states=" + statefilter);
        // console.log(response.data[0].districts);
        setDistrict(response.data[0].districts);
        // console.log(response);
    }

    const getAddress = async (value) => {
        let response = await getRequest("http://13.235.183.204:3001/api/map/autocompleteplaces?input=" + value);
        setAutoData(response.data);
        // console.log(response.data);
    }
    return (<>

        <Snackbar
            open={formSubmitted}
            autoHideDuration={6000} onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Your Job is saved . It will be publised after reviewing.
            </Alert>

        </Snackbar>
        {postJobStep == 1 && <Box className="PostJobPage"
            sx={{
                height: "100vh",
                background: "#FFFFFF"
            }}>
            <Stack className="PosrJobWrapper"
                sx=
                {{
                    padding: "20px 50px",
                    gap: "24px"
                }}>
                <HeaderSec
                    color="black"
                    border="2px solid #8E8E8E" />
                <Stack alignItems="flex-end" sx={{ position: "relative" }}>
                    <Stack direction="column" sx={{
                        position: "absolute",
                        top: "111px",
                        left: "152px",
                        width: "573px",
                        zIndex: "78798",
                        gap: "50px"

                    }}>
                        <Box>
                            <Typography component="box" sx={{
                                fontSize: "64px",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: "block",
                                marginTop: "20px",
                                width: "600px"
                            }}>
                                50K People Have Got Jobs Through Us; Next is You!
                            </Typography>
                            <img src={window.location.origin + "/assets/g6.png"} alt="g6" />
                        </Box>

                        <Box>
                            <Typography component="box" sx={{
                                fontSize: "64px",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: "block",
                                marginTop: "20px",
                                width: "600px",
                                textAlign: "end"
                            }}>
                                Select from
                                the Jobs in Your City
                            </Typography>
                            <img src={window.location.origin + "/assets/g52.png"} alt="g52" />
                        </Box>
                    </Stack>
                    <Box sx={{
                        height: "31px",
                        width: "352px",
                        left: "148px",
                        top: "266px",
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
                            Job Details
                        </Typography>

                        <Stack direction="row" gap={2} sx={{ margin: "25px 0px" }}>
                            <Stack direction="row" gap={1} alignItems="center" justifyContent="center" >
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
                                    fontSize: "19px",
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    display: "block",

                                }}>
                                    Job Information
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
                                    fontSize: "19px",
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    color: "#4E3A67",
                                    display: "block"
                                }}>
                                    Employee Requirements
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
                        padding: "30px 50px"

                    }}>

                        <Typography component="box" sx={{
                            fontSize: "32px",
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            color: "#4E3A67",
                            display: "block",
                            margin: "20px 0px"
                        }}>
                            Job Information
                        </Typography>
                        <Formik

                            initialValues={defaultValue}
                            validationSchema={postJobValidationSchema}
                            onSubmit={handleSubmit1}
                        >
                            {({ values, errors, touched, setFieldValue }) => (
                                <Form className="PostJobForm1" >

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

                                        <Stack direction="row" gap={2}>
                                            <ThemeFInputDiv sx={{ width: "50%" }}>
                                                <ThemeLabel LableFor="job_title" LableText="Job Title" />
                                                <Field
                                                    error={errors.job_title && touched.job_title}
                                                    as={TextField}
                                                    id="job_title"
                                                    placeholder="Enter Job Title" type="text" name="job_title" fullWidth />
                                                {errors.job_title && touched.job_title && <Error text={errors.job_title} />}
                                            </ThemeFInputDiv>

                                            <ThemeFInputDiv sx={{ width: "50%" }}>
                                                <ThemeLabel LableFor="job_type" LableText="Job Type" />
                                                <SelectField
                                                    labelId="demo-simple-select-label"
                                                    name="job_type"
                                                    value={jobType}
                                                    label="role"
                                                    onChange={(event) => {
                                                        setJobType(event.target.value);
                                                        setFieldValue("job_type", event.target.value);
                                                    }}
                                                    sx={{
                                                        background: " #FFFFFF",
                                                        border: "1px solid #EAEAEA",
                                                        boxShadow: "0px 10px 11px rgb(0 0 0 / 2%)",
                                                        borderRadius: "7px",
                                                        width: "101%",
                                                        fontSize: "16px",
                                                        fontamily: 'Montserrat',
                                                        padding: "8px"
                                                    }}

                                                >
                                                    <MenuItem value=" ">Select Job Type</MenuItem>
                                                    {JobType.map((item) =>
                                                        <MenuItem value={item.value} key={item.id}>{item.Name}</MenuItem>
                                                    )}
                                                </SelectField>

                                                {errors.job_type && touched.job_type && <Error text={errors.job_type} />}
                                            </ThemeFInputDiv>
                                        </Stack>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="industry_type" LableText="Industry Type" />
                                            <SelectField
                                                labelId="demo-simple-select-label"
                                                name="industry_type"
                                                value={industryType}
                                                label="role"
                                                onChange={(event) => {
                                                    setIndustryType(event.target.value);
                                                    setFieldValue("industry_type", event.target.value);
                                                }}
                                                sx={{
                                                    background: " #FFFFFF",
                                                    border: "1px solid #EAEAEA",
                                                    boxShadow: "0px 10px 11px rgb(0 0 0 / 2%)",
                                                    borderRadius: "7px",
                                                    width: "101%",
                                                    fontSize: "16px",
                                                    fontamily: 'Montserrat',
                                                    BorderBottom: 'none !important',

                                                    padding: "8px"
                                                }}
                                                disableUnderline
                                            >
                                                <MenuItem value=" ">Select Industry Type</MenuItem>
                                                {JobType.map((item) =>
                                                    <MenuItem value={item.value} key={item.id}>{item.Name}</MenuItem>
                                                )}
                                            </SelectField>

                                            {errors.industry_type && touched.industry_type && <Error text={errors.industry_type} />}
                                        </ThemeFInputDiv>

                                        <Stack direction="row" gap={2}>
                                            <ThemeFInputDiv sx={{ width: "50%" }}>
                                                <ThemeLabel LableFor="association_type" LableText="Association Type" />
                                                <SelectField
                                                    labelId="demo-simple-select-label"
                                                    name="association_type"
                                                    value={associationType}
                                                    label="role"
                                                    onChange={(event) => {
                                                        setAssociationType(event.target.value);
                                                        setFieldValue("association_type", event.target.value);
                                                    }}
                                                    sx={{
                                                        background: " #FFFFFF",
                                                        border: "1px solid #EAEAEA",
                                                        boxShadow: "0px 10px 11px rgb(0 0 0 / 2%)",
                                                        borderRadius: "7px",
                                                        width: "101%",
                                                        fontSize: "16px",
                                                        fontamily: 'Montserrat',
                                                        padding: "8px"
                                                    }}
                                                >
                                                    <MenuItem value=" ">Select Association Type</MenuItem>
                                                    {AssociationType.map((item) =>
                                                        <MenuItem value={item.value} key={item.id}>{item.Name}</MenuItem>
                                                    )}
                                                </SelectField>

                                                {errors.association_type && touched.association_type && <Error text={errors.association_type} />}
                                            </ThemeFInputDiv>

                                            <ThemeFInputDiv sx={{ width: "50%" }}>
                                                <ThemeLabel LableFor="job_place" LableText="Job Place" />
                                                <Field
                                                    error={errors.job_place && touched.job_place}
                                                    as={TextField}
                                                    id="job_place"
                                                    placeholder="Enter Job Place" type="text" name="job_place" fullWidth />
                                                {errors.job_place && touched.job_place && <Error text={errors.job_place} />}
                                            </ThemeFInputDiv>
                                        </Stack>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="responsibilites" LableText="Job Responsibilites" />
                                            <Box sx={{ width: "100%", margin: "10px 0px" }}>
                                                <TextField
                                                    error={errors.responsibilites && touched.responsibilites}
                                                    sx={{ width: "100%" }}
                                                    placeholder="Job Responsibilites"
                                                    multiline
                                                    rows={4}
                                                    maxRows={4}
                                                    onChange={(event) => setFieldValue("responsibilites", event.target.value)}
                                                />
                                            </Box>

                                            {errors.responsibilites && touched.responsibilites && <Error text={errors.responsibilites} />}

                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
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
                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
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

                                        </ThemeFInputDiv>

                                        <Stack direction="row" gap={5}>
                                            <ThemeFInputDiv sx={{ width: "50%" }}>
                                                <ThemeLabel LableFor="working_days" LableText="Working Days" />
                                                <SelectField
                                                    labelId="demo-simple-select-label"
                                                    name="association_type"
                                                    value={workingDays}
                                                    label="role"
                                                    onChange={(event) => {
                                                        setWorkingDays(event.target.value);
                                                        setFieldValue("working_days", event.target.value);
                                                    }}
                                                    sx={{
                                                        background: " #FFFFFF",
                                                        border: "1px solid #EAEAEA",
                                                        boxShadow: "0px 10px 11px rgb(0 0 0 / 2%)",
                                                        borderRadius: "7px",
                                                        width: "101%",
                                                        fontSize: "16px",
                                                        fontamily: 'Montserrat',
                                                        padding: "8px"
                                                    }}
                                                >
                                                    <MenuItem value=" ">Select Working Days</MenuItem>
                                                    {WorkingDays.map((item) =>
                                                        <MenuItem value={item.value} key={item.id}>{item.value}</MenuItem>
                                                    )}
                                                </SelectField>

                                                {errors.working_days && touched.working_days && <Error text={errors.working_days} />}
                                            </ThemeFInputDiv>

                                            <ThemeFInputDiv sx={{ width: "50%" }}>
                                                <ThemeLabel LableFor="work_shift" LableText="Work Shift" />
                                                <SelectField
                                                    labelId="demo-simple-select-label"
                                                    name="work_shift"
                                                    value={workShift}
                                                    label="role"
                                                    onChange={(event) => {
                                                        setWorkShift(event.target.value);
                                                        setFieldValue("work_shift", event.target.value);
                                                    }}
                                                    sx={{
                                                        background: " #FFFFFF",
                                                        border: "1px solid #EAEAEA",
                                                        boxShadow: "0px 10px 11px rgb(0 0 0 / 2%)",
                                                        borderRadius: "7px",
                                                        width: "101%",
                                                        fontSize: "16px",
                                                        fontamily: 'Montserrat',
                                                    }}

                                                >
                                                    <MenuItem value=" ">Select Work Shift</MenuItem>
                                                    {WorkingShift.map((item) =>
                                                        <MenuItem value={item.value} key={item.id}>{item.value}</MenuItem>
                                                    )}
                                                </SelectField>

                                                {errors.work_shift && touched.work_shift && <Error text={errors.work_shift} />}
                                            </ThemeFInputDiv>

                                        </Stack>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="shift_timing" LableText="Shift Timing" />
                                            <Stack direction="row" gap={5}>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <ThemeFInputDiv sx={{ width: "50%" }}>
                                                        <ThemeLabel LableFor="starting_time" LableText="Starting Time" />
                                                        <TimePicker
                                                            value={startingTime}
                                                            onChange={(newValue) => {
                                                                setStartingTime(new Date(newValue).getTime())
                                                                setFieldValue("starting_time", new Date(newValue).getTime())
                                                            }}
                                                            renderInput={(params) => <TextField {...params} />}
                                                        />

                                                    </ThemeFInputDiv>
                                                    <ThemeFInputDiv sx={{ width: "50%" }}>
                                                        <ThemeLabel LableFor="ending_time" LableText="Ending Time" />
                                                        <TimePicker
                                                            onChange={(newValue) => {
                                                                setEndingTime(new Date(newValue).getTime())
                                                                setFieldValue("ending_time", new Date(newValue).getTime())
                                                            }}
                                                            renderInput={(params) => <TextField {...params} />}
                                                        />

                                                        {errors.starting_time && touched.starting_time && <Error text={errors.starting_time} />}
                                                        {errors.ending_time && touched.ending_time && <Error text={errors.ending_time} />}

                                                    </ThemeFInputDiv>
                                                </LocalizationProvider>
                                            </Stack>

                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="salary_type" LableText="Salary Type" />
                                            <SelectField
                                                labelId="demo-simple-select-label"
                                                name="association_type"
                                                value={salaryType}
                                                label="role"
                                                onChange={(event) => {
                                                    setSalaryType(event.target.value);
                                                    setFieldValue("salary_type", event.target.value);
                                                }}
                                                sx={{
                                                    background: " #FFFFFF",
                                                    border: "1px solid #EAEAEA",
                                                    boxShadow: "0px 10px 11px rgb(0 0 0 / 2%)",
                                                    borderRadius: "7px",
                                                    width: "101%",
                                                    fontSize: "16px",
                                                    fontamily: 'Montserrat',
                                                    padding: "8px"
                                                }}
                                            >
                                                <MenuItem value=" ">Select Salary Type</MenuItem>
                                                {SalaryType.map((item) =>
                                                    <MenuItem value={item.value} key={item.id}>{item.value}</MenuItem>
                                                )}
                                            </SelectField>
                                            {
                                                (salaryType == "Per Day" || salaryType == "Per Hour") && <>
                                                    <Field
                                                        error={errors.salary && touched.salary}
                                                        as={TextField}
                                                        id="ctc_salary"
                                                        placeholder="Enter Salary " type="text" name="ctc_salary" fullWidth />
                                                </>
                                            }

                                            {salaryType == "Montly" &&
                                                <SelectField
                                                    labelId="demo-simple-select-label"
                                                    name="association_type"
                                                    value={CTCSalary}
                                                    label="role"
                                                    onChange={(event) => {
                                                        setCTCSalary(event.target.value);
                                                        setFieldValue("ctc_salary", event.target.value);
                                                    }}
                                                    sx={{
                                                        background: " #FFFFFF",
                                                        border: "1px solid #EAEAEA",
                                                        boxShadow: "0px 10px 11px rgb(0 0 0 / 2%)",
                                                        borderRadius: "7px",
                                                        width: "101%",
                                                        fontSize: "16px",
                                                        fontamily: 'Montserrat',
                                                        padding: "8px"
                                                    }}
                                                >
                                                    <MenuItem value=" ">Select CTC Salary</MenuItem>
                                                    {SalaryCTC.map((item) =>
                                                        <MenuItem value={item.value} key={item.id}>{item.value}</MenuItem>
                                                    )}
                                                </SelectField>
                                            }
                                            {errors.salary && touched.salary && <Error text={errors.salary} />}
                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="weekly_off" LableText="Weekly Off" />
                                            <Field
                                                error={errors.weekly_off && touched.weekly_off}
                                                as={TextField}
                                                id="weekly_off"
                                                placeholder="Enter Weekly off" type="text" name="weekly_off" fullWidth />
                                            {errors.weekly_off && touched.weekly_off && <Error text={errors.weekly_off} />}
                                        </ThemeFInputDiv>

                                        <Stack direction="row" gap={2}>
                                            <ThemeFInputDiv sx={{ width: "50%" }}>
                                                <ThemeLabel LableFor="state" LableText="State *" />
                                                <SelectField
                                                    classNamePrefix="react-select"
                                                    labelId="demo-simple-select-label"
                                                    name="state"
                                                    value={state}
                                                    label="Age"
                                                    onChange={(event) => {
                                                        let stateValue = event.target.value;
                                                        setState(stateValue);
                                                        setFieldValue("state", event.target.value);
                                                        getDistrictByState(event.target.value);
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
                                                    <MenuItem value=" ">Select State</MenuItem>
                                                    {CountryState && CountryState.map((item) =>
                                                        <MenuItem value={item} key={item}>{item}</MenuItem>
                                                    )}
                                                </SelectField>
                                                {errors.state && touched.state && <Error text={errors.state} />}
                                            </ThemeFInputDiv>

                                            <ThemeFInputDiv sx={{ width: "50%" }}>

                                                <ThemeLabel LableFor="city" LableText="City *" />
                                                <SelectField
                                                    classNamePrefix="react-select"
                                                    labelId="demo-simple-select-label"
                                                    name="city"
                                                    value={city}
                                                    label="Age"
                                                    onChange={(event) => {
                                                        setCity(event.target.value);
                                                        setFieldValue("city", event.target.value);
                                                        // setFieldValue("area", event.target.value);
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
                                                    <MenuItem value=" ">Select City</MenuItem>
                                                    {District && District.map((item) =>
                                                        <MenuItem value={item.name} key={item._id}>{item.name}</MenuItem>
                                                    )}
                                                </SelectField>

                                                {errors.city && touched.city && <Error text={errors.city} />}
                                            </ThemeFInputDiv>
                                        </Stack>

                                        <ThemeFInputDiv sx={{ position: "relative" }}>
                                            <ThemeLabel LableFor="company_address" LableText="Company Address *" />
                                            <Box sx={{ width: "100%", margin: "10px 0px" }}>

                                                <TextField id="outlined-basic"
                                                    placeholder="Enter Company Address (eg.Haridwar, Uttarakhand, India)"
                                                    value={companyAddress}
                                                    onChange={(event) => {
                                                        setCompanyAddress(event.target.value);
                                                        setFieldValue("company_address", event.target.value);
                                                        getAddress(event.target.value);
                                                        setMenuBar(true)
                                                    }}
                                                    variant="outlined" fullWidth />


                                            </Box>

                                            {menubar && autoData && autoData != "no record please enter some word" && <>
                                                <ClickAwayListener onClickAway={() => setAutoData(false)}>

                                                    <Box
                                                        sx={{
                                                            position: "absolute",
                                                            top: "110px",
                                                            background: "#FFFFFF",
                                                            width: "94%",
                                                            padding: "20px",
                                                            height: "fit-content",
                                                            zIndex: "34",
                                                            boxShadow: "0px 47px 52px #f4ecff",
                                                            border: "3px solid #E1D4F2",
                                                            borderRadius: "11px"
                                                        }}>
                                                        {autoData && autoData != "no record please enter some word" && autoData.map((item) => {
                                                            return (<>
                                                                <Box sx={{
                                                                    padding: "20px",
                                                                    borderBottom: "1px solid #E1D4F2",
                                                                    cursor: "pointer"
                                                                }}
                                                                    onClick={(event) => {
                                                                        setCompanyAddress(item.description);
                                                                        setFieldValue("company_address", item.description)
                                                                        setMenuBar(false)
                                                                    }}> {item.description}</Box></>)
                                                        })}

                                                    </Box>
                                                </ClickAwayListener>
                                            </>

                                            }
                                            {errors.company_address && touched.company_address && <Error text={errors.company_address} />}

                                        </ThemeFInputDiv>
                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="extra_benefits" LableText="Extra Benefits" />
                                            <Field
                                                error={errors.extra_benefits && touched.extra_benefits}
                                                as={TextField}
                                                id="extra_benefits"
                                                placeholder="Enter Extra Benefits" type="text" name="extra_benefits" fullWidth />
                                            {errors.extra_benefits && touched.extra_benefits && <Error text={errors.extra_benefits} />}
                                        </ThemeFInputDiv>

                                        {/* <ThemeFInputDiv>
                                            <ThemeLabel LableFor="timestamp_job_post_timing" LableText="Timestamp Job Posting Timing" />
                                            <Field
                                                error={errors.timestamp_job_post_timing && touched.timestamp_job_post_timing}
                                                as={TextField}
                                                id="timestamp_job_post_timing"
                                                placeholder="Enter Extra Benefits" type="text" name="timestamp_job_post_timing" fullWidth />
                                            {errors.timestamp_job_post_timing && touched.timestamp_job_post_timing && <Error text={errors.timestamp_job_post_timing} />}
                                        </ThemeFInputDiv> */}

                                    </ThemeFInputDiv>

                                    <Stack sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                                        <ThemeButtonType2 variant="contained" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>Continue and Next</ThemeButtonType2>
                                    </Stack>

                                </Form>
                            )}
                        </Formik>


                    </Box>

                </Stack>
            </Stack>
        </Box>}


        {
            postJobStep == 2 && <Box className="PostJobPage"
                sx={{
                    height: "100vh",
                    background: "#FFFFFF"
                }}>
                <Stack className="PosrJobWrapper"
                    sx=
                    {{
                        padding: "20px 50px",
                        gap: "24px"
                    }}>
                    <HeaderSec
                        color="black"
                        border="2px solid #8E8E8E" />
                    <Stack alignItems="flex-end" sx={{ position: "relative" }}>
                        <Stack direction="column" sx={{
                            position: "absolute",
                            top: "111px",
                            left: "152px",
                            width: "573px",
                            zIndex: "78798",
                            gap: "50px"

                        }}>
                            <Box>
                                <Typography component="box" sx={{
                                    fontSize: "64px",
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    color: "#4E3A67",
                                    display: "block",
                                    marginTop: "20px",
                                    width: "600px"
                                }}>
                                    Free job posting facility
                                </Typography>
                                <img src={window.location.origin + "/assets/g12.png"} alt="g12" />
                            </Box>


                        </Stack>
                        <Box sx={{
                            height: "31px",
                            width: "352px",
                            left: "148px",
                            top: "266px",
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
                                Job Details
                            </Typography>

                            <Stack direction="row" gap={2} sx={{ margin: "25px 0px" }}>
                                <Stack direction="row" gap={1} alignItems="center" justifyContent="center" sx={{ opacity: "0.5" }} >
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
                                        fontSize: "19px",
                                        fontFamily: "Montserrat",
                                        fontWeight: "600",
                                        display: "block",

                                    }}>
                                        Company Information
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
                                    }}>2</Box>
                                    <Typography component="box" sx={{
                                        fontSize: "19px",
                                        fontFamily: "Montserrat",
                                        fontWeight: "600",
                                        color: "#4E3A67",
                                        display: "block"
                                    }}>
                                        Employee Requirements
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
                            padding: "30px 50px"

                        }}>

                            <Typography component="box" sx={{
                                fontSize: "32px",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: "block",
                                margin: "20px 0px"
                            }}>
                                Employee Requirements
                            </Typography>
                            <Formik

                                initialValues={defaultValue}
                                validationSchema={jobType == "regular" ? postJobValidationSchema : postPartTimeJobValidationSchema}
                            // onSubmit={handleSubmit}
                            >
                                {({ values, errors, touched, setFieldValue }) => (
                                    <Form className="PostJobForm1" >

                                        <ThemeFInputDiv >

                                            <ThemeFInputDiv>
                                                <ThemeLabel LableFor="experienced_required" LableText="Experience Required" />
                                                <Field
                                                    error={errors.experienced_required && touched.experienced_required}
                                                    as={TextField}
                                                    id="experienced_required"
                                                    placeholder="Enter Experienced Required" type="text" name="experienced_required" fullWidth />
                                                {errors.experienced_required && touched.experienced_required && <Error text={errors.experienced_required} />}
                                            </ThemeFInputDiv>

                                            <ThemeFInputDiv>
                                                <ThemeLabel LableFor="age" LableText="AGe" />
                                                <Field
                                                    error={errors.age && touched.age}
                                                    as={TextField}
                                                    id="age"
                                                    placeholder="Enter Age" type="text" name="age" fullWidth />
                                                {errors.age && touched.age && <Error text={errors.age} />}
                                            </ThemeFInputDiv>

                                            <Stack direction="row" gap={5}>
                                                <ThemeFInputDiv sx={{ width: "30%" }}>
                                                    <ThemeLabel LableFor="working_days" LableText="Working Days" />
                                                    <SelectField
                                                        labelId="demo-simple-select-label"
                                                        name="association_type"
                                                        value={associationType}
                                                        label="role"
                                                        onChange={(event) => {
                                                            setAssociationType(event.target.value);
                                                            setFieldValue("working_days", event.target.value);
                                                        }}
                                                        sx={{
                                                            background: " #FFFFFF",
                                                            border: "1px solid #EAEAEA",
                                                            boxShadow: "0px 10px 11px rgb(0 0 0 / 2%)",
                                                            borderRadius: "7px",
                                                            width: "101%",
                                                            fontSize: "16px",
                                                            fontamily: 'Montserrat',
                                                            BorderBottom: 'none !important',

                                                            padding: "8px"
                                                        }}
                                                        disableUnderline
                                                    >
                                                        <MenuItem value=" ">Select Working Days</MenuItem>
                                                        {AssociationType.map((item) =>
                                                            <MenuItem value={item.value} key={item.id}>{item.Name}</MenuItem>
                                                        )}
                                                    </SelectField>

                                                    {errors.association_type && touched.association_type && <Error text={errors.association_type} />}
                                                </ThemeFInputDiv>

                                                <ThemeFInputDiv sx={{ width: "30%" }}>
                                                    <ThemeLabel LableFor="work_shift" LableText="Work Shift" />
                                                    <SelectField
                                                        labelId="demo-simple-select-label"
                                                        name="work_shift"
                                                        value={associationType}
                                                        label="role"
                                                        onChange={(event) => {
                                                            setAssociationType(event.target.value);
                                                            setFieldValue("work_shift", event.target.value);
                                                        }}
                                                        sx={{
                                                            background: " #FFFFFF",
                                                            border: "1px solid #EAEAEA",
                                                            boxShadow: "0px 10px 11px rgb(0 0 0 / 2%)",
                                                            borderRadius: "7px",
                                                            width: "101%",
                                                            fontSize: "16px",
                                                            fontamily: 'Montserrat',
                                                            BorderBottom: 'none !important',

                                                            padding: "8px"
                                                        }}
                                                        disableUnderline
                                                    >
                                                        <MenuItem value=" ">Work Shift</MenuItem>
                                                        {AssociationType.map((item) =>
                                                            <MenuItem value={item.value} key={item.id}>{item.Name}</MenuItem>
                                                        )}
                                                    </SelectField>

                                                    {errors.work_shift && touched.work_shift && <Error text={errors.work_shift} />}
                                                </ThemeFInputDiv>

                                                <ThemeFInputDiv sx={{ width: "30%" }}>
                                                    <ThemeLabel LableFor="shift_timing" LableText="Shift Timing" />
                                                    <SelectField
                                                        labelId="demo-simple-select-label"
                                                        name="association_type"
                                                        value={associationType}
                                                        label="role"
                                                        onChange={(event) => {
                                                            setAssociationType(event.target.value);
                                                            setFieldValue("shift_timing", event.target.value);
                                                        }}
                                                        sx={{
                                                            background: " #FFFFFF",
                                                            border: "1px solid #EAEAEA",
                                                            boxShadow: "0px 10px 11px rgb(0 0 0 / 2%)",
                                                            borderRadius: "7px",
                                                            width: "101%",
                                                            fontSize: "16px",
                                                            fontamily: 'Montserrat',
                                                            BorderBottom: 'none !important',

                                                            padding: "8px"
                                                        }}
                                                        disableUnderline
                                                    >
                                                        <MenuItem value=" ">Shift Timing</MenuItem>
                                                        {AssociationType.map((item) =>
                                                            <MenuItem value={item.value} key={item.id}>{item.Name}</MenuItem>
                                                        )}
                                                    </SelectField>

                                                    {errors.shift_timing && touched.shift_timing && <Error text={errors.shift_timing} />}
                                                </ThemeFInputDiv>

                                            </Stack>


                                            <ThemeFInputDiv>
                                                <ThemeLabel LableFor="skills_required" LableText="Skill Required" />
                                                <Field
                                                    error={errors.skills_required && touched.skills_required}
                                                    as={TextField}
                                                    id="skills_required"
                                                    placeholder="Enter Skill Required" type="text" name="skills_required" fullWidth />
                                                {errors.skills_required && touched.skills_required && <Error text={errors.skills_required} />}
                                            </ThemeFInputDiv>

                                            <ThemeFInputDiv>
                                                <ThemeLabel LableFor="mandatory_local_language" LableText="Mandatory Local Language" />
                                                <Field
                                                    error={errors.mandatory_local_language && touched.mandatory_local_language}
                                                    as={TextField}
                                                    id="experienced_required"
                                                    placeholder="Enter Mandatory Local Language" type="text" name="mandatory_local_language" fullWidth />
                                                {errors.mandatory_local_language && touched.mandatory_local_language && <Error text={errors.mandatory_local_language} />}
                                            </ThemeFInputDiv>

                                            <Stack direction="row" gap={5}>
                                                <ThemeFInputDiv sx={{ width: "50%" }}>
                                                    <ThemeLabel LableFor="working_days" LableText="Working Days" />
                                                    <SelectField
                                                        labelId="demo-simple-select-label"
                                                        name="association_type"
                                                        value={associationType}
                                                        label="role"
                                                        onChange={(event) => {
                                                            setAssociationType(event.target.value);
                                                            setFieldValue("working_days", event.target.value);
                                                        }}
                                                        sx={{
                                                            background: " #FFFFFF",
                                                            border: "1px solid #EAEAEA",
                                                            boxShadow: "0px 10px 11px rgb(0 0 0 / 2%)",
                                                            borderRadius: "7px",
                                                            width: "101%",
                                                            fontSize: "16px",
                                                            fontamily: 'Montserrat',
                                                            BorderBottom: 'none !important',

                                                            padding: "8px"
                                                        }}
                                                        disableUnderline
                                                    >
                                                        <MenuItem value=" ">Select Working Days</MenuItem>
                                                        {AssociationType.map((item) =>
                                                            <MenuItem value={item.value} key={item.id}>{item.Name}</MenuItem>
                                                        )}
                                                    </SelectField>

                                                    {errors.association_type && touched.association_type && <Error text={errors.association_type} />}
                                                </ThemeFInputDiv>

                                                <ThemeFInputDiv sx={{ width: "50%" }}>
                                                    <ThemeLabel LableFor="work_shift" LableText="Work Shift" />
                                                    <SelectField
                                                        labelId="demo-simple-select-label"
                                                        name="work_shift"
                                                        value={associationType}
                                                        label="role"
                                                        onChange={(event) => {
                                                            setAssociationType(event.target.value);
                                                            setFieldValue("work_shift", event.target.value);
                                                        }}
                                                        sx={{
                                                            background: " #FFFFFF",
                                                            border: "1px solid #EAEAEA",
                                                            boxShadow: "0px 10px 11px rgb(0 0 0 / 2%)",
                                                            borderRadius: "7px",
                                                            width: "101%",
                                                            fontSize: "16px",
                                                            fontamily: 'Montserrat',
                                                            BorderBottom: 'none !important',

                                                            padding: "8px"
                                                        }}
                                                        disableUnderline
                                                    >
                                                        <MenuItem value=" ">Work Shift</MenuItem>
                                                        {AssociationType.map((item) =>
                                                            <MenuItem value={item.value} key={item.id}>{item.Name}</MenuItem>
                                                        )}
                                                    </SelectField>

                                                    {errors.work_shift && touched.work_shift && <Error text={errors.work_shift} />}
                                                </ThemeFInputDiv>



                                            </Stack>

                                        </ThemeFInputDiv>

                                        <Stack sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                                            <ThemeButtonType2 variant="contained" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>Save</ThemeButtonType2>
                                        </Stack>

                                    </Form>
                                )}
                            </Formik>


                        </Box>

                    </Stack>
                </Stack>
            </Box>
        }


    </>)
}
export default PostJob;