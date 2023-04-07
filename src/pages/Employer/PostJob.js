import { postRequest, getRequest } from "../../utils/ApiRequests";
import { StatesURL, getJobTypeURL, getSKillOnJobType, PostJob1, PostJob2 } from "../../utils/ApiUrls";

import {
    Box, Stack, TextField, Select as SelectField,
    MenuItem, Typography, FormControlLabel,
    Radio, RadioGroup, FormControl
} from '@mui/material';

import ClickAwayListener from '@mui/base/ClickAwayListener';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { Formik, Field, Form } from "formik";

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { DefaultEditor } from 'react-simple-wysiwyg';

import { useState, useEffect } from "react";

import { postJobValidationSchema, postJobSchema2 } from "../../Validation/PostJobValidation";
import {
    CandidateEducation,
    AssociationType,
    WorkingDays, WorkingShift, SalaryType, EducationType,
    Proficiency,
    ExtraBenefitsData,
    WeeklyOffData,
    ExperienceLevel,
    AgeLevel,
    JobWorkingPlaceData
} from "../../utils/Data";

import { ThemeButtonType2, ThemeFInputDiv } from "../../utils/Theme";


import Error from '../../ThemeComponent/Common/Error';
import ThemeLabel from '../../ThemeComponent/ThemeForms/ThemeLabel';
import Loader from "../Common/Loader";
import BackButton from "../../ThemeComponent/Common/BackButton";
import CurrencyFormat from 'react-currency-format';

import { useNavigate } from "react-router-dom";
const PostJob = () => {
    const [postJobStep, setPostJobStep] = useState(1);

    const [showLoader, setShowLoader] = useState(false);

    const [city, setCity] = useState(" ");
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [jobType, setJobType] = useState(" ");
    const [associationType, setAssociationType] = useState(" ");
    const [industryType, setIndustryType] = useState(" ");

    const [workShift, setWorkShift] = useState(" ");
    const [startingTime, setStartingTime] = useState(null);
    const [endingTime, setEndingTime] = useState(null);

    const [JobWorkingDays, setJobWorkingDays] = useState(" ");
    const [JobWorkingPlace, setJobWorkingPlace] = useState(" ");

    const [salaryType, setSalaryType] = useState(" ");

    const [state, setState] = useState(" ");
    const [companyAddress, setCompanyAddress] = useState("");
    const [autoData, setAutoData] = useState([]);
    const [CountryState, setCountryState] = useState([]);
    const [District, setDistrict] = useState([]);
    const [menubar, setMenuBar] = useState(false);
    const [extraBenefits, setExtraBenefits] = useState("");

    const [jobTypeData, setJobTypeData] = useState([]);
    const [industryTypeData, setIndustryData] = useState([]);
    const [industryTypeCollection, setIndustryTypeCollection] = useState([]);
    /* Next Form */
    const [minExp, setMinExp] = useState(" ");
    const [maxExp, setMaxExp] = useState(" ");
    const [minAge, setMinAge] = useState(" ");
    const [maxAge, setMaxAge] = useState(" ");
    const [localLanguage, setLocalLanguage] = useState(" ");
    const [localLanguageData, setLocalLanguageData] = useState([]);

    const [educationType, setEducationType] = useState(" ");
    const [perferredDegree, setPerferredDegree] = useState(" ");
    const [gender, setGender] = useState("");

    const [salaryDisclosed, setSalaryDisclosed] = useState(false);

    const animatedComponents = makeAnimated();
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
        salary_disclosed: salaryDisclosed,
        max_salary: "",
        min_salary: "",
        weekly_off: "",
        state: "",
        city: "",
        company_address: "",
        extra_benefits: "",
        vacancy: ""
    }

    const defaultValue2 = {
        education_type: "",
        education_degree: "",
        perferred_degree: "",
        gender: "",
        mandatory_local_language: "",
        hindi_required: "",
        english_required: ""

    }
    const navigate = useNavigate();
    const handleSubmit1 = async (values, { setFieldError }) => {
        if (parseInt(values.min_salary) > parseInt(values.max_salary)) {
            setFieldError("max_salary", "Min Salary should be not greater than Max Salary")

        }
        else {

            setShowLoader(true);
            let formData = new FormData();
            formData = {
                company_name: values.company_name,
                title: values.job_title,
                jobtype: values.job_type,
                skills: values.skills.split(','),
                industrytype: values.industry_type,
                associationtype: values.association_type,
                jobplace: values.job_place,
                job_place: values.job_place,
                jobresponsibilty: values.responsibilites,
                shortdescription: values.job_description,
                workingdays: [values.working_days],
                Workshifttiming: {
                    startting_time: values.starting_time,
                    leaving_time: values.ending_time
                },
                salary: {
                    salarytype: values.salary_type,
                    minimumSalary: values.min_salary,
                    maximumSalary: values.max_salary,
                    currency: "INR",
                    hideSalary: values.salary_disclosed
                },
                weekly_off: values.weekly_off.split(","),
                location_state: values.state,
                city: [
                    values.city
                ],
                company_address: values.company_address,
                extrabenefits: values.extra_benefits,
                vacancy: values.vacancy
            }
            let response = await postRequest(PostJob1, formData);
            if (response.status == '1') {
                console.log(response);
                localStorage.setItem("post_id", response.data._id);
                setShowLoader(false);
                setPostJobStep(2);
            }
            setShowLoader(false);
            setPostJobStep(2);
            window.scrollTo({ top: '0', behaviour: 'smooth' })

        }




    }

    const handleSubmit2 = async (values, { setFieldError, resetForm }) => {
        let isFormValid = true;

        if (values.min_age > values.max_age) {
            isFormValid = false;
            setFieldError("max_age", "Max age should not be less than Min age.")
        }
        if (values.min_exp > values.max_exp) {
            isFormValid = false;
            setFieldError("max_exp", "Max exp should not be less than Min exp.")
        }

        if (isFormValid) {
            let formData = new FormData();
            formData = {
                _id: localStorage.getItem("post_id") ?
                    localStorage.getItem("post_id") : "",
                candidate_experience: {
                    min_age: values.min_exp,
                    max_age: values.max_exp
                },
                candidateage: {
                    min_age: values.min_age,
                    max_age: values.max_age
                },
                educationtype: values.education_type,
                educationdegree: values.education_degree,
                prefereddegree: values.perferred_degree,
                preferedgender: values.gender,
                hindirequirement: values.hindi_required,
                mandatorylocallanguage: values.mandatory_local_language,
                englishrequirement: values.english_required
            }

            let response = await postRequest(PostJob2, formData);
            if (response.status == '1') {
                navigate('/employer-dashboard', { state: { jobPosted: true } });
            }

        }

    }

    useEffect(() => {
        const getState = async () => {
            let response = await getRequest(StatesURL);
            setCountryState(response.data.sort());
        }
        const getJobType = async () => {
            let response = await getRequest(getJobTypeURL);
            setJobTypeData(response.data.sort());
        }
        const getLocalLanguage = async () => {
            let response = await getRequest("https://backend.jobsyahan.com/api/file/findlocallanguage");
            setLocalLanguageData(response.data[0]['languages'].sort());
        }

        const getIndustryType = async () => {
            let response = await getRequest("https://backend.jobsyahan.com/api/file/findindustrydata");
            setIndustryTypeCollection(response.data.sort());
        }
        getState();
        getJobType();
        getLocalLanguage();
        getIndustryType();


    }, [])

    const getDistrictByState = async (statefilter) => {
        let response = await getRequest("https://backend.jobsyahan.com/api/map/districts?states=" + statefilter);
        setDistrict(response.data[0].districts.sort());
    }

    const getIndustryTypeByJobType = async (jobTypeFilter) => {
        let SkillsData = [];
        let response = await getRequest(getSKillOnJobType + "=" + jobTypeFilter);

        response.data.map(item => {
            SkillsData.push({
                label: item,
                value: item
            })
        });
        setIndustryData(SkillsData.sort());
    }
    const getAddress = async (value) => {
        let response = await getRequest("https://backend.jobsyahan.com/api/map/autocompleteplaces?input=" + value);
        setAutoData(response.data);
    }
    return (<>

        <Loader showLoader={showLoader} />

        <Box className="PostJobPage"
            direction="column"
            sx={{
                padding: (postJobStep == 1) ? { "xs": "15px", "sm": "15px", "md": "30px 50px", "lg": "30px 50px", "xl": "30px 50px" } : "0px",
                gap: "50px",
                visibility: (postJobStep == 1) ? "visible" : "hidden",
                display: (postJobStep == 1) ? "block" : "none",

            }}>

            <Stack direction="row"
                sx={{
                    gap: { "lg": "50px", "md": "0px", "xs": "0px" },
                }}>
                <Stack alignItems="center" sx={{
                    width: { "lg": "35%", "md": "0px", "xs": "0px" },
                    padding: { "lg": "100px", "md": "0px", "xs": "0px" },
                    gap: "100px",
                    visibility: { "lg": "visible", "md": "hidden", "xs": "hidden " },
                    display: (postJobStep == 1) ? "block" : "none",
                }} >
                    <Stack direction="column" gap={2}>
                        <Typography component="box" sx={{
                            fontSize: { "xs": "26px", "sm": "26px", "md": "64px", "lg": "64px", "xl": "64px" },
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            color: "#4E3A67",
                            display: "block",
                            marginTop: "20px",
                            width: "100%"
                        }}>
                            50K People Have Got Jobs Through Us; Next is You!
                        </Typography>
                        <img src={window.location.origin + "/assets/g6.png"} alt="g6" />
                    </Stack>

                    <Stack direction="column" gap={2}>
                        <Typography component="box" sx={{
                            fontSize: { "xs": "26px", "sm": "26px", "md": "64px", "lg": "64px", "xl": "64px" },
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            color: "#4E3A67",
                            display: "block",
                            marginTop: "20px",
                            width: "100%",
                            textAlign: "end"
                        }}>
                            Select from
                            the Jobs in Your City
                        </Typography>
                        <img src={window.location.origin + "/assets/g52.png"} alt="g52" />
                    </Stack>

                </Stack>
                <Box sx={{ width: { "lg": "50%", "md": "100%", "xs": "100%" } }}>


                    <Box sx={{
                        maxWidth: "763px",
                        minHeight: "153px",
                        background: "#F8F8F8",
                        border: "1px solid #EAEAEA",
                        boxShadow: "0px 4px 40px rgba(239, 239, 239, 0.3)",
                        borderRadius: "19px",
                        padding: { "xs": "15px", "sm": "15px", "md": "35px 50px", "lg": "35px 50px", "xl": "35px 50px" },

                    }}>
                        <Typography component="box" sx={{
                            fontSize: { "xs": "26px", "sm": "26px", "md": "40px", "xl": "40px", "lg": "40px" },
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
                                    width: { "xs": "15px", "sm": "15px", "md": "27px", "lg": "27px", "xl": "27px" },
                                    height: { "xs": "15px", "sm": "15px", "md": "27px", "lg": "27px", "xl": "27px" },
                                    fontSize: { "xs": "12px", "sm": "12px", "md": "19px", "lg": "19px", "xl": "19px" },
                                    background: "#FC9A7E",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>1</Box>
                                <Typography component="box" sx={{
                                    fontSize: { "xs": "12px", "sm": "12px", "md": "19px", "lg": "19px", "xl": "19px" },
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
                                    width: { "xs": "15px", "sm": "15px", "md": "27px", "lg": "27px", "xl": "27px" },
                                    height: { "xs": "15px", "sm": "15px", "md": "27px", "lg": "27px", "xl": "27px" },
                                    fontSize: { "xs": "12px", "sm": "12px", "md": "19px", "lg": "19px", "xl": "19px" },
                                    background: "#FC9A7E",
                                    borderRadius: "50%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}>2</Box>
                                <Typography component="box" sx={{
                                    fontSize: { "xs": "12px", "sm": "12px", "md": "19px", "lg": "19px", "xl": "19px" },
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
                        maxWidth: "865px",
                        height: "647",
                        background: "#FFFFFF",
                        border: "1px solid #EDEDED",
                        borderRadius: "19px",
                        padding: { "xs": "15px", "sm": "15px", "md": "30px 50px", "lg": "30px 50px", "xl": "30px 50px" },
                        position: "relative",
                        top: "-30px"

                    }}>

                        <Typography component="box" sx={{
                            fontSize: { "xs": "16px", "sm": "16px", "md": "32px", "lg": "32px", "xl": "32px" },
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
                                            <ThemeLabel LableFor="company_name" LableText="Company Name*" />
                                            <Field
                                                error={errors.company_name && touched.company_name}
                                                as={TextField}
                                                id="company_name"
                                                placeholder="Enter Company Name" type="text" name="company_name" fullWidth />
                                            {errors.company_name && touched.company_name && <Error text={errors.company_name} />}
                                        </ThemeFInputDiv>

                                        <Stack direction="row" gap={2}>
                                            <ThemeFInputDiv sx={{ width: "50%" }}>
                                                <ThemeLabel LableFor="job_title" LableText="Job Title*" />
                                                <Field
                                                    error={errors.job_title && touched.job_title}
                                                    as={TextField}
                                                    id="job_title"
                                                    placeholder="Enter Job Title" type="text" name="job_title" fullWidth />
                                                {errors.job_title && touched.job_title && <Error text={errors.job_title} />}
                                            </ThemeFInputDiv>

                                            <ThemeFInputDiv sx={{ width: "50%" }}>
                                                <ThemeLabel LableFor="job_type" LableText="Job Type *" />
                                                <SelectField
                                                    labelId="demo-simple-select-label"
                                                    name="job_type"
                                                    value={jobType}
                                                    label="role"
                                                    onChange={(event) => {
                                                        setJobType(event.target.value);
                                                        setFieldValue("job_type", event.target.value);
                                                        getIndustryTypeByJobType(event.target.value);
                                                    }}
                                                    sx={{
                                                        background: " #FFFFFF",
                                                        border: "1px solid #EAEAEA",
                                                        boxShadow: "0px 10px 11px rgb(0 0 0 / 2%)",
                                                        borderRadius: "7px",
                                                        width: "101%",
                                                        fontSize: "16px",
                                                        fontamily: 'Montserrat',
                                                        padding: { "xs": "0px", "sm": "0px", "md": "8px", "lg": "8px", "xl": "8px" },

                                                    }}

                                                >
                                                    <MenuItem value=" ">Select Job Type</MenuItem>

                                                    {jobTypeData && jobTypeData.map((item) =>
                                                        <MenuItem value={item} key={item}>{item.replaceAll("_", " ")}</MenuItem>
                                                    )}
                                                </SelectField>

                                                {errors.job_type && touched.job_type && <Error text={errors.job_type} />}
                                            </ThemeFInputDiv>
                                        </Stack>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="skills" LableText="Skills *" />
                                            <Field

                                                variant="standard"
                                                error={errors.skills && touched.skills}
                                                component={Select}
                                                name="skills"
                                                options={industryTypeData}
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
                                                placeholder="Select Skills " data={industryTypeData} fullWidth />


                                            {errors.skills && touched.skills && <Error text={errors.skills} />}

                                        </ThemeFInputDiv>
                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="industry_type" LableText="Industry Type " />
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
                                                {industryTypeCollection && industryTypeCollection.map((item) =>
                                                    <MenuItem value={item.industry} key={item.id}>{item.industry}</MenuItem>
                                                )}
                                            </SelectField>

                                            {errors.industry_type && touched.industry_type && <Error text={errors.industry_type} />}
                                        </ThemeFInputDiv>



                                        <Stack direction="row" gap={2}>
                                            <ThemeFInputDiv sx={{ width: "50%" }}>
                                                <ThemeLabel LableFor="association_type" LableText="Association Type *" />
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
                                                <ThemeLabel LableFor="job_place" LableText="Job Place *" />
                                                <SelectField
                                                    labelId="demo-simple-select-label"
                                                    name="association_type"
                                                    value={JobWorkingPlace}
                                                    label="role"
                                                    onChange={(event) => {
                                                        setJobWorkingPlace(event.target.value);
                                                        setFieldValue("job_place", event.target.value);
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
                                                    <MenuItem value=" ">Select Job Working Place</MenuItem>
                                                    {JobWorkingPlaceData.map((item) =>
                                                        <MenuItem value={item} key={item}>{item}</MenuItem>
                                                    )}
                                                </SelectField>

                                                {errors.job_place && touched.job_place && <Error text={errors.job_place} />}
                                            </ThemeFInputDiv>
                                        </Stack>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="responsibilites" LableText="Job Responsibilites *" />
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
                                            <ThemeLabel LableFor="job_description" LableText="Job Description *" />
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

                                        <Stack direction="row" gap={5}>
                                            <ThemeFInputDiv sx={{ width: "50%" }}>
                                                <ThemeLabel LableFor="working_days" LableText="Working Days *" />
                                                <SelectField
                                                    labelId="demo-simple-select-label"
                                                    name="association_type"
                                                    value={JobWorkingDays}
                                                    label="role"
                                                    onChange={(event) => {
                                                        setJobWorkingDays(event.target.value);
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
                                            <ThemeLabel LableFor="shift_timing" LableText="Shift Timing *" />
                                            <Stack direction="row" gap={5}>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <ThemeFInputDiv sx={{ width: "50%" }}>
                                                        <Box > Starting Time </Box>
                                                        {/* <ThemeLabel LableFor="starting_time" sx={{ fontSize: "16px !important" }} LableText="Starting Time" /> */}
                                                        <TimePicker

                                                            value={startingTime}
                                                            onChange={(newValue) => {
                                                                setStartingTime(new Date(newValue).getTime())
                                                                setFieldValue("starting_time", new Date(newValue).getTime())
                                                            }}
                                                            inputProps={{
                                                                placeholder: "Starting Time"
                                                            }}
                                                            renderInput={(params) =>
                                                                <TextField
                                                                    {...params} />
                                                            }
                                                        />
                                                        {errors.starting_time && touched.starting_time && <Error text={errors.starting_time} />}

                                                    </ThemeFInputDiv>
                                                    <ThemeFInputDiv sx={{ width: "50%" }}>
                                                        <Box >Ending Time</Box>
                                                        <TimePicker
                                                            value={endingTime}
                                                            onChange={(newValue) => {
                                                                setEndingTime(new Date(newValue).getTime())
                                                                setFieldValue("ending_time", new Date(newValue).getTime())
                                                            }}
                                                            inputProps={{
                                                                placeholder: "Ending Time"
                                                            }}
                                                            renderInput={(params) => <TextField
                                                                {...params} />}
                                                        />

                                                        {errors.ending_time && touched.ending_time && <Error text={errors.ending_time} />}

                                                    </ThemeFInputDiv>
                                                </LocalizationProvider>
                                            </Stack>

                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="salary_type" LableText="Salary Type *" />
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
                                                (salaryType === "Per Day" || salaryType === "Per Hour" || salaryType === "Monthly" || salaryType === "Yearly") && <>
                                                    <Stack direction="row" justifyContent="space-between">
                                                        <ThemeFInputDiv sx={{ width: "50%" }}>
                                                            <Box > Min. Salary</Box>

                                                            <CurrencyFormat style={{
                                                                fontSize: "20px",
                                                                outline: "none",
                                                                width: "92%",
                                                                border: "1px solid #EAEAEA",
                                                                borderRadius: "12px",
                                                                padding: "15px 10px"
                                                            }}
                                                                hintText="Enter Min. Salary"
                                                                thousandSeparator={true} prefix={'₹'}
                                                                onChange={(event) => {

                                                                    setFieldValue("min_salary", event.target.value.slice(1).replaceAll(",", ""))
                                                                }} />
                                                        </ThemeFInputDiv>


                                                        <ThemeFInputDiv sx={{ width: "50%" }}>
                                                            <Box > Max. Salary</Box>

                                                            <CurrencyFormat style={{
                                                                fontSize: "20px",
                                                                outline: "none",
                                                                width: "92%",
                                                                border: "1px solid #EAEAEA",
                                                                borderRadius: "12px",
                                                                padding: "15px 10px"
                                                            }}
                                                                onChange={(event) => {
                                                                    setFieldValue("max_salary", event.target.value.slice(1).replaceAll(",", ""))
                                                                }}
                                                                hintText="Enter Max. Salary"
                                                                thousandSeparator={true} prefix={'₹'} />
                                                        </ThemeFInputDiv>


                                                    </Stack>
                                                    <Stack direction="row" gap={2}>
                                                        <input type="checkbox" name="salary_disclosed" onChange={() => {
                                                            setSalaryDisclosed(!salaryDisclosed)
                                                            setFieldValue("salary_disclosed", !salaryDisclosed)
                                                        }} />
                                                        <Box >Salary  Not Disclosed</Box>
                                                    </Stack>


                                                </>
                                            }

                                            {errors.max_salary && touched.max_salary && <Error text={errors.max_salary} />}
                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="weekly_off" LableText="Weekly Off *" />
                                            <Field

                                                variant="standard"
                                                error={errors.skills && touched.skills}
                                                component={Select}
                                                name="skills"
                                                options={WeeklyOffData}
                                                components={animatedComponents}
                                                onChange={(options) => {
                                                    let optionvalue = [];
                                                    setSelectedOptions(options);
                                                    options.map((item) => {
                                                        optionvalue.push(item.value);
                                                    })
                                                    setFieldValue("weekly_off", optionvalue.join(","));
                                                }}
                                                isMulti
                                                placeholder="Select Weekly Off" data={WeeklyOffData} fullWidth />
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
                                            <ThemeLabel LableFor="extra_benefits" LableText="Extra Benefits *" />

                                            <Field

                                                variant="standard"
                                                error={errors.skills && touched.skills}
                                                component={Select}
                                                name="extra_benefits"
                                                options={ExtraBenefitsData}
                                                components={animatedComponents}
                                                onChange={(options) => {
                                                    let optionvalue = [];
                                                    setExtraBenefits(options);
                                                    options.map((item) => {
                                                        optionvalue.push(item.value);
                                                    })
                                                    setFieldValue("extra_benefits", optionvalue.join(","));
                                                }}
                                                isMulti
                                                placeholder="Select Extra Benefits" data={ExtraBenefitsData} fullWidth />

                                            {errors.extra_benefits && touched.extra_benefits && <Error text={errors.extra_benefits} />}
                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="vacancy" LableText="Vacancy*" />
                                            <Field
                                                error={errors.vacancy && touched.vacancy}
                                                as={TextField}
                                                id="vacancy"
                                                placeholder="Vacancy" type="text" name="vacancy" fullWidth />
                                            {errors.vacancy && touched.vacancy && <Error text={errors.vacancy} />}
                                        </ThemeFInputDiv>

                                    </ThemeFInputDiv>

                                    <Stack sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                                        <ThemeButtonType2 variant="contained" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>Continue and Next</ThemeButtonType2>
                                    </Stack>

                                </Form>
                            )}
                        </Formik>


                    </Box>
                </Box>
            </Stack>
        </Box >


        <Box className="PostJobPage"
            sx={{
                minheight: "100vh",
                visibility: (postJobStep == 2) ? "visible" : "hidden",
                height: (postJobStep == 2) ? "fit-content" : "0px",
                display: (postJobStep == 2) ? "block" : "none",
            }}>
            <Stack className="PosrJobWrapper"
                sx=
                {{
                    padding: { "xs": "15px", "sm": "15px", "md": "20px 50px", "lg": "20px 50px", "xl": "20px 50px" },
                    gap: "24px"
                }}>

                <Stack direction="row" sx={{ position: "relative", gap: { "xs": '0px', "sm": "0px", "md": "16px", "lg": "16px", "xl": "16px" } }}>
                    <Box sx={{
                        width: { "lg": "35%", "md": "0px", "xs": "0px" },
                        padding: { "lg": "100px", "md": "0px", "xs": "0px" },
                        gap: "100px",
                        visibility: { "lg": "visible", "md": "hidden", "xs": "hidden " }
                    }}>
                        <Stack direction="column" sx={{

                            width: "573px",
                            zIndex: "78798",
                            gap: { "lg": "50px", "md": "0px", "xs": "0px" },
                            display: (postJobStep == 2) ? "block" : "none",

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
                                <img style={{
                                    position: "relative",
                                    left: "-150px"
                                }} src={window.location.origin + "/assets/g12.png"} alt="g12" />
                            </Box>


                        </Stack>

                    </Box>

                    <Box sx={{ width: { "lg": "50%", "md": "100%", "xs": "100%" } }}>

                        <Box sx={{
                            maxWidth: "763px",
                            height: "153px",
                            background: "#F8F8F8",
                            border: "1px solid #EAEAEA",
                            boxShadow: "0px 4px 40px rgba(239, 239, 239, 0.3)",
                            borderRadius: "19px",
                            padding: { "xs": "15px", "sm": "15px", "md": "35px 50px", "lg": "35px 50px", "xl": "35px 50px" }
                        }}>
                            <BackButton
                                GoBack={
                                    () => {
                                        setPostJobStep(1)
                                    }
                                } ></BackButton>
                            <Typography component="box" sx={{
                                fontSize: { "xs": "26px", "sm": "26px", "md": "40px", "lg": "40px", "xl": "40px" },
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
                                        width: { "xs": "15px", "sm": "15px", "md": "27px", "lg": "27px", "xl": "27px" },
                                        height: { "xs": "15px", "sm": "15px", "md": "27px", "lg": "27px", "xl": "27px" },
                                        background: "#FC9A7E",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: { "xs": "12px", "sm": "12px", "md": "19px", "lg": "19px", "xl": "19px" }

                                    }}>1</Box>
                                    <Typography component="box" sx={{
                                        fontSize: { "xs": "12px", "sm": "12px", "md": "19px", "lg": "19px", "xl": "19px" },
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
                                        width: { "xs": "15px", "sm": "15px", "md": "27px", "lg": "27px", "xl": "27px" },
                                        height: { "xs": "15px", "sm": "15px", "md": "27px", "lg": "27px", "xl": "27px" },
                                        background: "#FC9A7E",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: { "xs": "12px", "sm": "12px", "md": "19px", "lg": "19px", "xl": "19px" }

                                    }}>2</Box>
                                    <Typography component="box" sx={{
                                        fontSize: { "xs": "12px", "sm": "12px", "md": "19px", "lg": "19px", "xl": "19px" },
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
                            maxWidth: "865px",
                            height: "647",
                            background: "#FFFFFF",
                            border: "1px solid #EDEDED",
                            borderRadius: "19px",
                            // top: "197px",
                            padding: { "xs": "15px", "sm": "15px", "md": "30px 50px", "lg": "30px 50px", "xl": "30px 50px" },
                            position: "relative",
                            top: "-10px"

                        }}>

                            <Typography component="box" sx={{
                                fontSize: { "xs": "26px", "sm": "26px", "md": "32px", "lg": "32px", "xl": "32px" },
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: "block",
                                margin: "20px 0px"
                            }}>
                                Employee Requirements
                            </Typography>
                            <Formik

                                initialValues={defaultValue2}
                                validationSchema={postJobSchema2}
                                onSubmit={handleSubmit2}
                            >
                                {({ values, errors, touched, setFieldValue }) => (
                                    <Form className="PostJobForm1" >

                                        <ThemeFInputDiv >

                                            <ThemeFInputDiv>
                                                <ThemeLabel LableFor="experienced_required" LableText="Experience Required" />
                                                <Stack direction="row" gap={2}>
                                                    <Box sx={{ width: "50%" }}>
                                                        <Box sx={{
                                                            margin: "15px 0px"
                                                        }}>Min Exp. (Yrs)</Box>
                                                        <SelectField
                                                            labelId="demo-simple-select-label"
                                                            name="min_exp"
                                                            value={minExp}
                                                            label="role"
                                                            onChange={(event) => {
                                                                setMinExp(event.target.value);
                                                                setFieldValue("min_exp", event.target.value);
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

                                                            }}
                                                            disableUnderline
                                                        >
                                                            <MenuItem value=" ">Select Min Exp </MenuItem>
                                                            {ExperienceLevel.map((item) =>
                                                                <MenuItem value={item} key={item}>{item}</MenuItem>
                                                            )}
                                                        </SelectField>
                                                    </Box>

                                                    <Box sx={{ width: "50%" }}>
                                                        <Box sx={{
                                                            margin: "15px 0px"
                                                        }}> Max Exp. (Yrs)</Box>
                                                        <SelectField
                                                            labelId="demo-simple-select-label"
                                                            name="max_exp"
                                                            value={maxExp}
                                                            label="role"
                                                            onChange={(event) => {
                                                                setMaxExp(event.target.value);
                                                                setFieldValue("max_exp", event.target.value);
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
                                                            }}
                                                            disableUnderline
                                                        >
                                                            <MenuItem value=" ">Select Max Exp </MenuItem>
                                                            {ExperienceLevel.map((item) =>
                                                                <MenuItem value={item} key={item}>{item}</MenuItem>
                                                            )}
                                                        </SelectField>
                                                    </Box>
                                                </Stack>
                                                {errors.max_exp && touched.max_exp && <Error text={errors.max_exp} />}

                                            </ThemeFInputDiv>

                                            <ThemeFInputDiv>
                                                <ThemeLabel LableFor="age" LableText="Age" />
                                                <Stack direction="row" gap={2}>
                                                    <Box sx={{ width: "50%" }}>
                                                        <Box sx={{
                                                            margin: "15px 0px"
                                                        }}> Min Age. (Yrs) </Box>
                                                        <SelectField
                                                            labelId="demo-simple-select-label"
                                                            name="min_age"
                                                            value={minAge}
                                                            label="role"
                                                            onChange={(event) => {
                                                                setMinAge(event.target.value);
                                                                setFieldValue("min_age", event.target.value);
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

                                                            }}
                                                            disableUnderline
                                                        >
                                                            <MenuItem value=" ">Select Min Age </MenuItem>
                                                            {AgeLevel.map((item) =>
                                                                <MenuItem value={item} key={item}>{item}</MenuItem>
                                                            )}
                                                        </SelectField>
                                                    </Box>

                                                    <Box sx={{ width: "50%" }}>
                                                        <Box sx={{
                                                            margin: "15px 0px"
                                                        }}> Max Age. (Yrs)</Box>
                                                        <SelectField
                                                            labelId="demo-simple-select-label"
                                                            name="max_age"
                                                            value={maxAge}
                                                            label="role"
                                                            onChange={(event) => {
                                                                setMaxAge(event.target.value);
                                                                setFieldValue("max_age", event.target.value);
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
                                                            }}
                                                            disableUnderline
                                                        >
                                                            <MenuItem value=" ">Select Max Exp </MenuItem>
                                                            {AgeLevel.map((item) =>
                                                                <MenuItem value={item} key={item}>{item}</MenuItem>
                                                            )}
                                                        </SelectField>
                                                    </Box>
                                                </Stack>

                                                {errors.max_age && touched.max_age && <Error text={errors.max_age} />}
                                            </ThemeFInputDiv>

                                            <Stack direction="row" gap={2}
                                                sx={{
                                                    flexWrap: "wrap"
                                                }}>
                                                <ThemeFInputDiv sx={{ width: "30%" }}>
                                                    <ThemeLabel LableFor="education_type" LableText="Education Type" />
                                                    <SelectField
                                                        labelId="demo-simple-select-label"
                                                        name="association_type"
                                                        value={educationType}
                                                        label="role"
                                                        onChange={(event) => {
                                                            setEducationType(event.target.value);
                                                            setFieldValue("education_type", event.target.value);
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
                                                        <MenuItem value=" ">Select Education Type </MenuItem>
                                                        {EducationType.map((item) =>
                                                            <MenuItem value={item.value} key={item.id}>{item.value}</MenuItem>
                                                        )}
                                                    </SelectField>

                                                    {errors.education_type && touched.education_type && <Error text={errors.education_type} />}
                                                </ThemeFInputDiv>

                                                <ThemeFInputDiv sx={{ width: "30%" }}>
                                                    <ThemeLabel LableFor="education_degree" LableText="Education Degree" />
                                                    <SelectField
                                                        labelId="demo-simple-select-label"
                                                        name="education_degree"
                                                        value={associationType}
                                                        label="role"
                                                        onChange={(event) => {
                                                            setAssociationType(event.target.value);
                                                            setFieldValue("education_degree", event.target.value);
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
                                                        }}
                                                        disableUnderline
                                                    >
                                                        <MenuItem value=" ">Select Education Degree</MenuItem>
                                                        {CandidateEducation.map((item) =>
                                                            <MenuItem value={item.value} key={item.id}>{item.Name}</MenuItem>
                                                        )}
                                                    </SelectField>

                                                    {errors.education_degree && touched.education_degree && <Error text={errors.education_degree} />}
                                                </ThemeFInputDiv>

                                                <ThemeFInputDiv>
                                                    <ThemeLabel LableFor="perferred_degree" LableText="Perferred Education" />
                                                    <SelectField
                                                        labelId="demo-simple-select-label"
                                                        name="perferred_degree"
                                                        value={perferredDegree}
                                                        label="role"
                                                        onChange={(event) => {
                                                            setPerferredDegree(event.target.value);
                                                            setFieldValue("perferred_degree", event.target.value);
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

                                                        }}
                                                        disableUnderline
                                                    >
                                                        <MenuItem value=" ">Select Perferred Degree</MenuItem>
                                                        {CandidateEducation.map((item) =>
                                                            <MenuItem value={item.value} key={item.id}>{item.Name}</MenuItem>
                                                        )}
                                                    </SelectField>

                                                    {errors.perferred_degree && touched.perferred_degree && <Error text={errors.perferred_degree} />}
                                                </ThemeFInputDiv>

                                            </Stack>
                                            <ThemeFInputDiv>
                                                <ThemeLabel LableFor="gender" LableText="Gender" />
                                                <ThemeFInputDiv>
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
                                                            <Stack direction="row" gap={3} sx={{
                                                                flexWrap: "wrap"
                                                            }}>

                                                                <Stack direction="row" gap={2} alignItems="center" justifyContent="space-between"
                                                                    sx={{
                                                                        height: "59px",
                                                                        width: "230px",
                                                                        borderRadius: "7px",
                                                                        border: " 2px solid #EAEAEA"
                                                                    }} >
                                                                    <Box sx={{ marginLeft: "20px" }}>Male</Box>
                                                                    <FormControlLabel value="male" control={<Radio />} label="" />
                                                                </Stack>

                                                                <Stack direction="row" gap={2} alignItems="center" justifyContent="space-between"
                                                                    sx={{
                                                                        height: "59px",
                                                                        width: "230px",
                                                                        borderRadius: "7px",
                                                                        border: " 2px solid #EAEAEA"
                                                                    }} >
                                                                    <Box sx={{ marginLeft: "20px" }}>Female</Box>
                                                                    <FormControlLabel value="female" control={<Radio />} label="" />
                                                                </Stack>

                                                                <Stack direction="row" gap={2} alignItems="center" justifyContent="space-between"
                                                                    sx={{
                                                                        height: "59px",
                                                                        width: "231px",
                                                                        borderRadius: "7px",
                                                                        border: " 2px solid #EAEAEA"
                                                                    }} >
                                                                    <Box sx={{ marginLeft: "20px" }}>Both</Box>
                                                                    <FormControlLabel value="both" control={<Radio />} label="" />
                                                                </Stack>
                                                            </Stack>

                                                        </RadioGroup>
                                                    </FormControl>
                                                </ThemeFInputDiv>
                                                {errors.gender && touched.gender && <Error text={errors.gender} />}
                                            </ThemeFInputDiv>

                                            <ThemeFInputDiv>
                                                <ThemeLabel LableFor="mandatory_local_language" LableText="Mandatory Local Language" />
                                                <SelectField
                                                    labelId="demo-simple-select-label"
                                                    name="mandatory_local_language"
                                                    value={localLanguage}
                                                    label="role"
                                                    onChange={(event) => {
                                                        setLocalLanguage(event.target.value);
                                                        setFieldValue("mandatory_local_language", event.target.value);
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

                                                    }}
                                                    disableUnderline
                                                >
                                                    <MenuItem value=" ">Select Local language</MenuItem>

                                                    {localLanguageData && localLanguageData.map((item) =>
                                                        <MenuItem value={item} key={item}>{item}</MenuItem>
                                                    )}
                                                </SelectField>

                                                {errors.mandatory_local_language && touched.mandatory_local_language && <Error text={errors.mandatory_local_language} />}
                                            </ThemeFInputDiv>

                                            <Stack direction="row" gap={5}>
                                                <ThemeFInputDiv sx={{ width: "50%" }}>
                                                    <ThemeLabel LableFor="hindi_required" LableText="Hindi Required" />


                                                    <Field

                                                        variant="standard"
                                                        error={errors.skills && touched.skills}
                                                        component={Select}
                                                        name="skills"
                                                        options={Proficiency}
                                                        components={animatedComponents}
                                                        onChange={(options) => {
                                                            let optionvalue = [];
                                                            setSelectedOptions(options);
                                                            options.map((item) => {
                                                                optionvalue.push(item.value);
                                                            })
                                                            setFieldValue("hindi_required", optionvalue.join(","));
                                                        }}
                                                        isMulti
                                                        placeholder="Select Proficiency Level " data={Proficiency} fullWidth />

                                                    {errors.hindi_required && touched.hindi_required && <Error text={errors.hindi_required} />}
                                                </ThemeFInputDiv>

                                                <ThemeFInputDiv sx={{ width: "50%" }}>
                                                    <ThemeLabel LableFor="english_required" LableText="English Required" />
                                                    <Field

                                                        variant="standard"
                                                        error={errors.skills && touched.skills}
                                                        component={Select}
                                                        name="skills"
                                                        options={Proficiency}
                                                        components={animatedComponents}
                                                        onChange={(options) => {
                                                            let optionvalue = [];
                                                            setSelectedOptions(options);
                                                            options.map((item) => {
                                                                optionvalue.push(item.value);
                                                            })
                                                            setFieldValue("english_required", optionvalue.join(","));
                                                        }}
                                                        isMulti
                                                        placeholder="Select Proficiency Level " data={Proficiency} fullWidth />


                                                    {errors.english_required && touched.english_required && <Error text={errors.english_required} />}
                                                </ThemeFInputDiv>
                                            </Stack>

                                        </ThemeFInputDiv>

                                        <Stack sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                                            <ThemeButtonType2 id="save" variant="contained" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>Save</ThemeButtonType2>
                                        </Stack>

                                    </Form>
                                )}
                            </Formik>


                        </Box>
                    </Box>

                </Stack>
            </Stack>
        </Box>



    </>)
}
export default PostJob;