import { postRequest, getRequest } from "../../utils/ApiRequests";
import { SaveCandidatePersonalInformation, StatesURL, getSKillOnJobType } from "../../utils/ApiUrls";
import { Box, Stack, Typography, TextField, Select as SelectField, MenuItem, Radio, RadioGroup, FormControlLabel, FormControl } from "@mui/material";
import { Formik, Field, Form } from "formik";

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

// import DatePicker from "react-datepicker";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


import { PersonalRegistrationSchema } from "../../Validation/CandidateValidation";
import { MaritalStatus } from "../../utils/Data";

import { ThemeButtonType2, ThemeFInputDiv } from "../../utils/Theme";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from '../../ThemeComponent/Common/Error';
import { useState, useEffect } from "react";
// import CurrencyFormat from 'react-currency-format';


import { data1 } from "../../utils/Data";
import FormMenu from "../Common/FormMenu";
import ThemeMobileImage from "../Common/ThemeMobileImage";
import ThemeWebsiteImage from "../Common/ThemeWebsiteImage";

import { useTranslation } from "react-i18next";
const PersonalInformation = ({ jobType }) => {
    const animatedComponents = makeAnimated();
    const [date, setDate] = useState(null);
    const [gender, setGender] = useState("");
    const [city, setCity] = useState(" ");
    const [state, setState] = useState(" ");
    const [CountryState, setCountryState] = useState([]);
    const [District, setDistrict] = useState([]);
    const [skills, SetSkills] = useState([]);

    const [martialStatus, setMaritalStatus] = useState(" ");

    const { t } = useTranslation();

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
            preffered_location: "",
            total_work_experience: values.total_work_experience,
            fullname: values.full_name,
            gender: values.gender,
            dob: values.date_of_birth,
            phoneNumber: "",
            marital_status: values.marital_status,
            permanent_address: "",
            current_address: "",
            state: values.state,
            city: values.city

        }

        let response = await postRequest(SaveCandidatePersonalInformation, formData);
        if (response.status === "1") {
            localStorage.setItem("user", JSON.stringify(response.data));
            window.location.href = window.location.origin + "/candidate-dashboard/normal/" + jobType + "/profile/1";
        }
    }


    useEffect(() => {
        const getState = async () => {
            let response = await getRequest(StatesURL);
            setCountryState(response.data);
        }

        const getSkills = async () => {
            let SkillsData = [];

            let response = await getRequest(getSKillOnJobType + "=" + jobType.replaceAll("-", "_"));

            response.data.map(item => {
                return SkillsData.push({
                    label: item,
                    value: item
                })
            });
            SetSkills(SkillsData.sort());

        }
        getState();
        getSkills();
    }, [jobType])

    const getDistrictByState = async (statefilter) => {
        let response = await getRequest("https://backend.jobsyahan.com/api/map/districts?states=" + statefilter);
        setDistrict(response.data[0].districts);
    }



    return (<>
        <Box className="PersonalInformationPage"
            sx={{
                background: "#FFFFFF",
                backgroundRepeat: " no-repeat",
                backgroundPosition: "left 100px bottom 0px"
            }}>
            <Stack className="PersonalInformationPageWrapper"
                sx=
                {{
                    padding: { "xs": "15px", "sm": "15px", "md": "20px 50px", "lg": "20px 50px", "xl": "20px 50px" },
                    gap: "24px"
                }}>

                <Stack direction={{ "xs": "column", "sm": "column", "md": "column", "lg": "row", "xl": "row" }} sx={{
                    position: "relative",
                    gap: { "xs": "0px", "sm": "0px", "md": "24px", "lg": "24px", "xl": "24px" }
                }}>
                    <Stack
                        gap={2} sx={{
                            width: {
                                "xs": "0%", "sm": "0%", "md": "50%", "lg": "50%", "xl": "50%"
                            },
                            visibility: { "xs": "hidden", "sm": "hidden", "md": "hidden", "lg": "visible", "xl": "visible" }
                        }}>
                        <Box sx={{
                            marginTop: "50px",
                            display: { "xs": "none", "sm": "none", "md": "none", "lg": "block", "xl": "block" }
                        }}>
                            <Typography component="box" sx={{
                                margin: "20px",
                                fontSize: { "xs": "1.6rem", "sm": "2rem", "md": "2rem", "xl": "4rem", "lg": "4rem" },
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: "block",
                                lineHeight: "1.2",
                                width: "600px"
                            }}>
                                {t('50K_PEOPLE_HAVE_GOT_JOBS_THROUGH_US;_NEXT_IS_YOU')}
                            </Typography>
                            <ThemeWebsiteImage imageUrl="/assets/g51.png" imageWidth="500px" ></ThemeWebsiteImage>
                        </Box>

                        <Box sx={{
                            marginTop: "200px",
                            display: { "xs": "none", "sm": "none", "md": "none", "lg": "block", "xl": "block" }
                        }}>
                            <Typography component="box" sx={{
                                margin: "20px",
                                fontSize: { "xs": "1.6rem", "sm": "2rem", "md": "2rem", "xl": "4rem", "lg": "4rem" },
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: "block",
                                textAlign: "end",
                                lineHeight: "1.2"

                            }}>  {t('SELECT_FROM_THE_JOBS_IN_YOUR_CITY')}
                            </Typography>

                            <Box
                                sx={{
                                    position: "relative",
                                    left: "300px"
                                }}>
                                <ThemeWebsiteImage
                                    imageUrl="/assets/g52.png" imageWidth="500px" ></ThemeWebsiteImage>
                            </Box>

                        </Box>

                    </Stack>

                    <Box sx={{
                        display: { "xs": "block", "sm": "block", "md": "block", "lg": "none", "xl": "none" }
                    }}>
                        <Typography component="box" sx={{
                            margin: "20px",
                            fontSize: { "xs": "1.6rem", "sm": "3rem", "md": "3rem", "xl": "4rem", "lg": "4rem" },
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            color: "#4E3A67",
                            display: "block",
                            lineHeight: "1.2",
                            textAlign: "center"
                        }}>
                            {t('50K_PEOPLE_HAVE_GOT_JOBS_THROUGH_US;_NEXT_IS_YOU')}

                        </Typography>
                        <ThemeMobileImage imageUrl="/assets/g52.png" />
                    </Box>

                    <Box sx={{ width: { "xs": "100%", "sm": "100%", "md": "100%", "lg": "50%", "xl": "50%" } }}>
                        <Box sx={{
                            background: "#F8F8F8",
                            border: "1px solid #EAEAEA",
                            boxShadow: "0px 4px 40px rgba(239, 239, 239, 0.3)",
                            borderRadius: "19px",
                            position: "relative",
                            top: { "xs": "-30px", "sm": "-30px", "md": "-30px", "lg": "0px", "xl": "0px" }
                        }}>
                            <Box sx={{
                                padding: { "xs": "15px", "sm": "15px", "md": "35px 50px", "lg": "35px 50px", "xl": "35px 50px" },
                            }}>
                                <Typography component="box" sx={{
                                    fontSize: { "xs": "1.6rem", "sm": "1.6rem", "md": "2.5rem", "lg": "2.5rem", "xl": "2.5rem" },
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    color: "#000000",
                                    display: "block",
                                    marginTop: "20px"
                                }}>
                                    {t('PERSONAL_DETAILS')}
                                </Typography>

                                <Stack direction="row" gap={1} sx={{ margin: "25px 0px", flexWrap: "wrap" }}>

                                    {
                                        data1 && data1.map((item) => {
                                            return <FormMenu data={item} dataLength={data1.length} />
                                        })
                                    }
                                </Stack>

                            </Box>
                            <Box sx={{
                                boxSizing: "border-box",
                                background: "#FFFFFF",
                                border: "1px solid #EDEDED",
                                borderBottomLeftRadius: "19px",
                                borderBottomRightRadius: "19px",
                                position: "relative",
                                padding: { "xs": "15px", "sm": "15px", "md": "30px 50px", "lg": "30px 50px", "xl": "30px 50px" },
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
                                                                <Stack direction="row" gap={3} sx={{ flexWrap: "wrap" }}>

                                                                    <Stack direction="row" gap={2} alignItems="center" justifyContent="space-between"
                                                                        sx={{
                                                                            height: { "xs": "36px", "sm": "36px", "md": "59px", "lg": "59px", "xl": "59px" },
                                                                            width: "200px",
                                                                            borderRadius: "11px",
                                                                            border: " 2px solid #EAEAEA"
                                                                        }} >
                                                                        <Box sx={{ marginLeft: "20px" }}>Male</Box>
                                                                        <FormControlLabel value="male" control={<Radio />} label="" />
                                                                    </Stack>

                                                                    <Stack direction="row" gap={2} alignItems="center" justifyContent="space-between"
                                                                        sx={{
                                                                            height: { "xs": "36px", "sm": "36px", "md": "59px", "lg": "59px", "xl": "59px" },
                                                                            width: "200px",
                                                                            borderRadius: "11px",
                                                                            border: " 2px solid #EAEAEA"
                                                                        }} >
                                                                        <Box sx={{ marginLeft: "20px" }}>Female</Box>
                                                                        <FormControlLabel value="female" control={<Radio />} label="" />
                                                                    </Stack>

                                                                    <Stack direction="row" gap={2} alignItems="center" justifyContent="space-between"
                                                                        sx={{
                                                                            height: { "xs": "36px", "sm": "36px", "md": "59px", "lg": "59px", "xl": "59px" },
                                                                            width: "200px",
                                                                            borderRadius: "11px",
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
                                                            inputProps={{
                                                                placeholder: "Enter Date of Birth"
                                                            }}
                                                            disableFuture={true}

                                                            renderInput={(params) => <TextField

                                                                {...params} />}
                                                        />
                                                    </LocalizationProvider>

                                                    {errors.date_of_birth && touched.date_of_birth && <Error text={errors.date_of_birth} />}

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
                                                            fontSize: "1rem",
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
                                                                setState(stateValue);
                                                                setFieldValue("state", event.target.value);
                                                                getDistrictByState(event.target.value);
                                                            }}
                                                            sx={{
                                                                background: " #FFFFFF",
                                                                border: "1px solid #EAEAEA",
                                                                boxShadow: "0px 10px 11px rgb(0 0 0 / 2%)",
                                                                borderRadius: "7px",
                                                                fontSize: "1rem",
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
                                                                fontSize: "1rem",
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


                                                <ThemeFInputDiv >
                                                    <ThemeLabel LableFor="perferred_pincode" LableText="Pincode" />
                                                    <Field
                                                        error={errors.current_salary && touched.current_salary}
                                                        as={TextField}
                                                        id="perferred_pincode"
                                                        placeholder="Enter Perferred Pincode" type="text" name="perferred_pincode" fullWidth />
                                                    {errors.perferred_pincode && touched.perferred_pincode && <Error text={errors.perferred_pincode} />}

                                                </ThemeFInputDiv>

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
                                                        {/* <CurrencyFormat style={{
                                                            fontSize: "1rem",
                                                            outline: "none",
                                                            width: "92%",
                                                            border: "1px solid #EAEAEA",
                                                            borderRadius: "11px",
                                                            padding: "15px 10px"
                                                        }}
                                                            placeholder="Current Salary"

                                                            thousandSeparator={true} prefix={'₹'}
                                                            onChange={(event) => {

                                                                setFieldValue("current_salary", event.target.value.slice(1).replaceAll(",", ""))
                                                            }} /> */}
                                                        {errors.current_salary && touched.current_salary && <Error text={errors.current_salary} />}

                                                    </ThemeFInputDiv>

                                                    <ThemeFInputDiv sx={{ width: "370px" }}>
                                                        <ThemeLabel LableFor="excepted_salary" LableText="Excepted Salary" />

                                                        {/* <CurrencyFormat style={{
                                                            fontSize: "1rem",
                                                            outline: "none",
                                                            width: "92%",
                                                            border: "1px solid #EAEAEA",
                                                            borderRadius: "11px",
                                                            padding: "15px 10px"
                                                        }}
                                                            placeholder="Excepted Salary"
                                                            thousandSeparator={true} prefix={'₹'}
                                                            onChange={(event) => {
                                                                setFieldValue("excepted_salary", event.target.value.slice(1).replaceAll(",", ""))
                                                            }}
                                                        /> */}
                                                        {errors.excepted_salary && touched.excepted_salary && <Error text={errors.excepted_salary} />}

                                                    </ThemeFInputDiv>

                                                </Stack>

                                                <ThemeFInputDiv>
                                                    <ThemeLabel LableFor="skills" LableText="Skills *" />
                                                    <Field
                                                        variant="standard"
                                                        error={errors.skills && touched.skills}
                                                        component={Select}
                                                        name="skills"
                                                        options={skills}
                                                        components={animatedComponents}
                                                        onChange={(options) => {
                                                            let optionvalue = [];
                                                            // setSelectedOptions(options);
                                                            options.map((item) => {
                                                                return optionvalue.push(item.value);
                                                            })
                                                            setFieldValue("skills", optionvalue.join(","));
                                                        }}
                                                        isMulti
                                                        placeholder="Select Skills " data={skills} fullWidth />


                                                    {errors.skills && touched.skills && <Error text={errors.skills} />}

                                                </ThemeFInputDiv>

                                                <ThemeFInputDiv>
                                                    <ThemeLabel LableFor="total_work_experience" LableText="Total Work Experience" />
                                                    <Field
                                                        error={errors.total_work_experience && touched.total_work_experience}
                                                        as={TextField}
                                                        id="total_work_experience"
                                                        placeholder="Enter Total Work Experience" type="text" name="total_work_experience" fullWidth />
                                                    {errors.total_work_experience && touched.total_work_experience && <Error text={errors.total_work_experience} />}

                                                </ThemeFInputDiv>
                                            </ThemeFInputDiv>
                                            <Stack sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                                                <ThemeButtonType2 variant="contained" id="continue" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>{t('CONTINUE_AND_NEXT')}</ThemeButtonType2>

                                            </Stack>
                                        </Form>)}
                                </Formik>

                            </Box>
                        </Box>

                    </Box>

                </Stack>
            </Stack>
        </Box>

    </>)
}

export default PersonalInformation;