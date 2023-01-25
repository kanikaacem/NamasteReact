import { postRequest, getRequest } from "../../utils/ApiRequests";
import { SaveCandidatePersonalInformation, StatesURL } from "../../utils/ApiUrls";

import ClickAwayListener from '@mui/base/ClickAwayListener';

import { Box, Container, Stack, Typography, TextField, Select as SelectField, MenuItem, Button, Radio, RadioGroup, FormControlLabel, FormControl } from "@mui/material";

import { Formik, Field, Form } from "formik";

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Moment from 'react-moment';

// import DatePicker from "react-datepicker";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


import { PersonalRegistrationSchema1, PersonalRegistrationSchema } from "../../Validation/CandidateValidation";
import { Skills, PerferredLocation, MaritalStatus } from "../../utils/Data";

import { SocialBox, ThemeButtonType2, ThemeButtonType3, ThemeFInputDiv } from "../../utils/Theme";
import { socialLogin } from "../../utils/Data";

import { ThemeButtontype1 } from "../../utils/Theme";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from '../../ThemeComponent/Common/Error';
import HeaderSec from "../Common/HeaderSec";
// import ButtonType1 from "../../ThemeComponent/Common/ButtonType1";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const PersonalInformation = ({ setActiveStep }) => {
    const animatedComponents = makeAnimated();


    // let userid = useSelector(state => state.candidateInfo);
    // if (userid != '') {
    //     userid = JSON.parse(userid);
    //     userid = userid.data;
    // }
    // userid = userid && userid.data;

    const [personalInfoForm, setPersonalInfoForm] = useState(1);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [perferredLocation, setPerferredLocation] = useState([]);
    const [date, setDate] = useState();
    const [gender, setGender] = useState("");
    const [city, setCity] = useState(" ");
    const [state, setState] = useState(" ");
    const [CountryState, setCountryState] = useState([]);
    const [District, setDistrict] = useState([]);
    const [autoData, setAutoData] = useState([]);
    const [menubar, setMenuBar] = useState(false);

    const [martialStatus, setMaritalStatus] = useState(" ");
    const [currentAddress, setCurrentAddress] = useState("");

    const defaultValue = {
        full_name: "",
        date_of_birth: "",
        state: "",
        city: "",
        area: "",
        complete_address: "",
        phone_number: "",
        marital_status: "",
        gender: "",
        current_title: "",
        current_salary: "",
        excepted_salary: "",
        skills: "",
        perferred_location: "",
        total_work_experience: ""
    }


    const handleSubmit = async (values) => {
        document.getElementById("continue").disabled = "true";
        let formData = new FormData();
        formData = {
            current_title: values.current_title,
            current_salary: values.current_salary,
            expected_salary: values.excepted_salary,
            skills: values.skills.split(","),
            preffered_pincode: values.perferred_pincode,
            preffered_location: values.perferred_location,
            total_work_experience: values.total_work_experience,
            fullname: values.full_name,
            gender: values.gender,
            dob: values.date_of_birth,
            phoneNumber: values.phone_number,
            marital_status: values.marital_status,
            permanent_address: values.area,
            current_address: values.current_address,
            state: values.state,
            city: values.city

        }

        let response = await postRequest(SaveCandidatePersonalInformation, formData);
        if (response.status == 1) {
            localStorage.setItem("user", JSON.stringify(response.data));
            window.location.href = window.location.origin + '/profile/1';
            // setActiveStep(1)
        }



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
        console.log(response)
        setAutoData(response.data);
        // console.log(response.data);
    }


    return (<>
        <Box className="PersonalInformationPage"
            sx={{
                height: "100vh",
                background: "#FFFFFF",
                backgroundRepeat: " no-repeat",
                backgroundPosition: "left 100px bottom 0px"
            }}>
            <Stack className="PersonalInformationPageWrapper"
                sx=
                {{
                    padding: "20px 50px",
                    gap: "24px"
                }}>
                <HeaderSec
                    color="black"
                    border="2px solid #8E8E8E" />
                <Stack alignItems="flex-end" sx={{ position: "relative" }}>
                    <Stack
                        gap={6} sx={{
                            position: "absolute",
                            top: "111px",
                            left: "152px",
                            width: "673px",
                            zIndex: "78798"
                        }}>
                        <Box>
                            <Typography component="box" sx={{
                                fontSize: "64px",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: "block",
                            }}>
                                50K People Have

                            </Typography>
                            <Typography component="box" sx={{
                                fontSize: "64px",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: "block",
                                width: "max-content"
                            }}>
                                Got Jobs Through Us;
                            </Typography>
                            <Typography component="box" sx={{
                                fontSize: "64px",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: "block",
                            }}>
                                Next is You!
                            </Typography>
                            <img src={window.location.origin + "/assets/g51.png"} alt="g51" style={{ margin: "40px 20px" }} />
                        </Box>

                        <Box>
                            <Typography component="box" sx={{
                                fontSize: "64px",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: "block",
                                textAlign: "end"
                            }}> Select from

                            </Typography>
                            <Typography component="box" sx={{
                                fontSize: "64px",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: "block",
                                width: "max-content"
                            }}>
                                the Jobs in Your City
                            </Typography>
                            <img src={window.location.origin + "/assets/g52.png"} alt="g52" style={{ margin: "40px 20px" }} />

                        </Box>

                    </Stack>
                    <Box sx={{
                        height: "31px",
                        width: "440px",
                        left: "148px",
                        top: "337px",
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
                            Personal Details
                        </Typography>

                        <Stack direction="row" gap={1} sx={{ margin: "25px 0px" }}>
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
                        <Typography component="box" sx={{
                            fontSize: "32px",
                            fontFamily: "Montserrat",
                            display: "block",
                            margin: "20px 0px"
                        }}>
                            Personal Details
                        </Typography>
                        <Formik

                            initialValues={defaultValue}
                            validationSchema={PersonalRegistrationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched, values, setFieldValue }) => (
                                <Form className="PersonalInformationForm">
                                    <ThemeFInputDiv>
                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="current_title" LableText="Current Title" />
                                            <Field
                                                error={errors.current_title && touched.current_title}
                                                as={TextField}
                                                id="current_title"
                                                placeholder="Enter Company Title" type="text" name="current_title" fullWidth />
                                            {errors.current_title && touched.current_title && <Error text={errors.current_title} />}

                                        </ThemeFInputDiv>

                                        <Stack direction="row" gap={3}>
                                            <ThemeFInputDiv sx={{ width: "370px" }}>
                                                <ThemeLabel LableFor="current_salary" LableText="Current Salary" />
                                                <Field
                                                    error={errors.current_salary && touched.current_salary}
                                                    as={TextField}
                                                    id="current_salary"
                                                    placeholder="Enter Current Salary" type="text" name="current_salary" fullWidth />
                                                {errors.current_salary && touched.current_salary && <Error text={errors.current_salary} />}

                                            </ThemeFInputDiv>

                                            <ThemeFInputDiv sx={{ width: "370px" }}>
                                                <ThemeLabel LableFor="excepted_salary" LableText="Excepted Salary" />
                                                <Field
                                                    error={errors.excepted_salary && touched.excepted_salary}
                                                    as={TextField}
                                                    id="excepted_salary"
                                                    placeholder="Enter Excepted Salary" type="text" name="excepted_salary" fullWidth />
                                                {errors.excepted_salary && touched.excepted_salary && <Error text={errors.excepted_salary} />}

                                            </ThemeFInputDiv>

                                        </Stack>

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

                                        <Stack direction="row" gap={3}>
                                            <ThemeFInputDiv sx={{ width: "370px" }}>
                                                <ThemeLabel LableFor="perferred_pincode" LableText="Perferred Pincode" />
                                                <Field
                                                    error={errors.current_salary && touched.current_salary}
                                                    as={TextField}
                                                    id="perferred_pincode"
                                                    placeholder="Enter Perferred Pincode" type="text" name="perferred_pincode" fullWidth />
                                                {errors.perferred_pincode && touched.perferred_pincode && <Error text={errors.perferred_pincode} />}

                                            </ThemeFInputDiv>

                                            <ThemeFInputDiv sx={{ width: "370px" }}>
                                                <ThemeLabel LableFor="perferred_location" LableText="Perferred Location" />
                                                <Field
                                                    error={errors.excepted_salary && touched.excepted_salary}
                                                    as={TextField}
                                                    id="perferred_location"
                                                    placeholder="Enter Perferred Location" type="text" name="perferred_location" fullWidth />
                                                {errors.perferred_location && touched.perferred_location && <Error text={errors.perferred_location} />}

                                            </ThemeFInputDiv>

                                        </Stack>


                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="total_work_experience" LableText="Total Work Experience" />
                                            <Field
                                                error={errors.full_name && touched.full_name}
                                                as={TextField}
                                                id="total_work_experience"
                                                placeholder="Enter Total Work Experience" type="text" name="total_work_experience" fullWidth />
                                            {errors.total_work_experience && touched.total_work_experience && <Error text={errors.total_work_experience} />}

                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="full_name" LableText="Full Name" />
                                            <Field
                                                error={errors.full_name && touched.full_name}
                                                as={TextField}
                                                id="full_name"
                                                placeholder="Enter Full Name" type="text" name="full_name" fullWidth />
                                            {errors.full_name && touched.full_name && <Error text={errors.full_name} />}

                                        </ThemeFInputDiv>

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
                                                        <Stack direction="row" gap={3}>

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
                                                                <Box sx={{ marginLeft: "20px" }}>Other</Box>
                                                                <FormControlLabel value="other" control={<Radio />} label="" />
                                                            </Stack>
                                                        </Stack>

                                                    </RadioGroup>
                                                </FormControl>
                                            </ThemeFInputDiv>
                                            {errors.gender && touched.gender && <Error text={errors.gender} />}
                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="date_of_birth" LableText="Date of Birth" />
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker

                                                    id="date_of_birth"
                                                    value={date}
                                                    onChange={(newValue) => {
                                                        setDate(newValue);
                                                        setFieldValue("date_of_birth", new Date(newValue))
                                                    }}
                                                    renderInput={(params) => <TextField

                                                        {...params} />}
                                                />
                                            </LocalizationProvider>

                                            {errors.date_of_birth && touched.date_of_birth && <Error text={errors.date_of_birth} />}

                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="
                                        phone_number" LableText="Phone Number" />
                                            <Field
                                                error={errors.phone_number && touched.phone_number}
                                                as={TextField}
                                                id="phone_number"
                                                placeholder="Enter Phone Number" type="text" name="phone_number" fullWidth />
                                            {errors.phone_number && touched.phone_number && <Error text={errors.phone_number} />}

                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="marital_status" LableText="Marital Status" />
                                            <SelectField
                                                labelId="demo-simple-select-label"
                                                name="marital_status"
                                                value={martialStatus}
                                                onChange={(event) => {
                                                    setMaritalStatus(event.target.value);
                                                    setFieldValue("marital_status", event.target.value);
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
                                                <MenuItem value=" ">Select Martial Status</MenuItem>
                                                {MaritalStatus.map((item) =>
                                                    <MenuItem value={item.value} key={item.id}>{item.Name}</MenuItem>
                                                )}
                                            </SelectField>

                                            {errors.marital_status && touched.marital_status && <Error text={errors.marital_status} />}
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
                                                        // console.log(event.target.value);
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
                                                        setFieldValue("area", event.target.value);
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
                                            <ThemeLabel LableFor="current_location" LableText="Area" />


                                            <TextField id="outlined-basic"
                                                placeholder="Enter Area (eg.Haridwar, Uttarakhand, India)"
                                                value={currentAddress}
                                                onChange={(event) => {
                                                    setCurrentAddress(event.target.value);
                                                    setFieldValue("area", event.target.value);
                                                    getAddress(event.target.value);
                                                    setMenuBar(true)
                                                }}
                                                variant="outlined" fullWidth />

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
                                                                        setCurrentAddress(item.description);
                                                                        setFieldValue("current_location", item.description)
                                                                        setMenuBar(false)
                                                                    }}> {item.description}</Box></>)
                                                        })}

                                                    </Box>
                                                </ClickAwayListener>
                                            </>}
                                            {errors.area && touched.area && <Error text={errors.area} />}

                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="complete_address" LableText="Complete Address" />
                                            <Field
                                                style={{
                                                    background: "#EAEAEA",
                                                    borderRadius: "11px"

                                                }}
                                                error={errors.permanant_address && touched.permanant_address}
                                                as="textarea"
                                                rows="8"
                                                id="permanant_address"
                                                placeholder="Enter Complete Address" type="text" name="complete_address" fullWidth />

                                            {errors.complete_address && touched.complete_address && <Error text={errors.complete_address} />}

                                        </ThemeFInputDiv>

                                    </ThemeFInputDiv>
                                    <Stack sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                                        <ThemeButtonType2 variant="contained" id="continue" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>Continue and Next</ThemeButtonType2>

                                    </Stack>
                                </Form>)}
                        </Formik>

                    </Box>

                </Stack>
            </Stack>
        </Box>

    </>)
}

export default PersonalInformation;