import { Stack, TextField, FormControlLabel, Radio, FormControl, Box, RadioGroup, Select as SelectField, MenuItem, Select, Typography } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { ThemeButtonType2, ThemeFInputDiv, ThemeButtonType3 } from "../../utils/Theme";
import ThemeLabel from "./ThemeLabel";
import Error from '../Common/Error';

// import DatePicker from "react-datepicker";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
//Getting New Data Marital Status
import { MaritalStatus, CandidateEducation, ExperienceLevel } from "../../utils/Data";

import { useState } from "react";
const PersonalInformation2 = () => {

    const [date, setDate] = useState(null);
    const [qualification, setQualification] = useState(" ");
    const [gender, setGender] = useState("");
    const [martialStatus, setMaritalStatus] = useState(" ");

    const [form, setForm] = useState(2);
    const [workArea, setWorkArea] = useState(" ");
    const [workExperience, setWorkExperience] = useState(" ");
    const [previouslyWorked, setPreviouslyWorked] = useState(" ");

    const defaultValue = {
        name: "",
        date_of_birth: "",
        gender: "",
        qualification: "",
        marital_status: "",
        permanant_address: "",
        current_address: "",
        pan_card: "",
        aadhar_card: "",
        bank_account: ""
    }
    return (<>
        <Box className="PersonalInformation2" sx={{
            padding: { "lg": "50px 80px", "md": "20px", "xs": "20px" },
            background: "FAFAFA",
            display: form === 1 ? "block" : "none"
        }}>
            <Stack direction="row" gap={2}>

                <Box sx={{
                    width: { 'lg': "50%", 'md': '100%', 'xs': '100%' },
                    display: { 'lg': "block", 'md': "none", 'xs': 'none' }
                }}>
                    <Stack sx={{
                        margin: "50px",
                        direction: "row",
                        gap: "100px",


                    }}>
                        <Typography component="box" sx={{
                            fontSize: "64px",
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            color: "#4E3A67",
                            display: "block",
                            marginTop: "20px"
                        }}>
                            Trust us for Getting suitable jobs!
                        </Typography>

                        <Box sx={{ width: "500px" }}>
                            <img
                                width="100%"

                                src={window.location.origin + "/assets/g51.png"} alt="G51" />
                        </Box>
                    </Stack>

                    <Stack sx={{
                        margin: "50px",
                        direction: "row",
                        gap: "100px",
                        alignItems: "flex-end"


                    }}>
                        <Typography component="box" sx={{
                            fontSize: "64px",
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            color: "#4E3A67",
                            display: "block",
                            marginTop: "20px"
                        }}>
                            Select from
                            the Jobs in Your City
                        </Typography>

                        <Box sx={{ width: "500px" }}>
                            <img
                                width="100%"

                                src={window.location.origin + "/assets/g52.png"} alt="G52" />
                        </Box>
                    </Stack>
                </Box>
                <Box sx={{
                    width: { "lg": "50%", "md": "100%", "xs": "100%" }
                }}>
                    <Box sx={{
                        // width: {"lg":"763px","md":"700px"},
                        maxWidth: "763px",
                        minHeight: "153px",
                        background: "#F8F8F8",
                        border: "1px solid #EAEAEA",
                        boxShadow: "0px 4px 40px rgba(239, 239, 239, 0.3)",
                        borderRadius: "19px",
                        padding: "35px 50px",
                        margin: "0 auto",

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

                        <Stack direction="row" gap={2} sx={{
                            margin: "25px 0px",
                            flexWrap: "wrap"
                        }}>
                            <Stack direction="row" gap={1} alignItems="center" justifyContent="center"
                            >
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
                                    color: "#4E3A67",
                                    display: "block",
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
                                    fontSize: "19px",
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    color: "#4E3A67",
                                    display: "block",
                                }}>
                                    Professional Details
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
                        minHeight: "647px",
                        background: "#FFFFFF",
                        border: "1px solid #EDEDED",
                        borderRadius: "19px",
                        position: "relative",
                        top: "-10px",

                        padding: "30px 50px",
                        margin: "0 auto"

                    }}>
                        <Formik

                            initialValues={defaultValue}
                        // validationSchema={ProfessionalDetailSchema}
                        // onSubmit={handleSubmit}
                        >
                            {({ errors, touched, values, setFieldValue }) => (
                                <Form className="ProfessionalDetailForm">
                                    <ThemeFInputDiv>
                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="name" LableText="Name" />
                                            <Field
                                                error={errors.name && touched.name}
                                                as={TextField}
                                                id="name"
                                                placeholder="Enter Your Name" type="text" name="name" fullWidth />
                                            {errors.name && touched.name && <Error text={errors.institue_name} />}
                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="date_of_birth" LableText="Date of Birth" />
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <DatePicker
                                                    disableFuture="true"
                                                    id="date_of_birth"
                                                    placeholder="MM/DD/YYYY"
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
                                            <ThemeLabel LableFor="qualification" LableText="Qualification" />
                                            <SelectField
                                                labelId="demo-simple-select-label"
                                                name="profile_type"
                                                value={qualification}
                                                label="Age"
                                                onChange={(event) => {
                                                    setQualification(event.target.value);
                                                    setFieldValue("qualification", event.target.value);
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
                                                <MenuItem value=" ">Select Qualification</MenuItem>
                                                {CandidateEducation.map((item) =>
                                                    <MenuItem value={item.value} key={item.id}>{item.Name}</MenuItem>
                                                )}
                                            </SelectField>
                                            {errors.qualification && touched.qualification && <Error text={errors.qualification} />}

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

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="permanant_address" LableText="Permanant Address" />
                                            <Field
                                                style={{
                                                    background: "#EAEAEA",
                                                    borderRadius: "11px"

                                                }}
                                                error={errors.permanant_address && touched.permanant_address}
                                                as="textarea"
                                                rows="8"
                                                id="permanant_address"
                                                placeholder="Enter Permanant Address" type="text" name="permanant_address" fullWidth />

                                            {errors.permanant_address && touched.permanant_address && <Error text={errors.permanant_address} />}

                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="current_address" LableText="Current Address" />
                                            <Field
                                                style={{
                                                    background: "#EAEAEA",
                                                    borderRadius: "11px"

                                                }}
                                                error={errors.current_address && touched.current_address}
                                                as="textarea"
                                                rows="8"
                                                id="current_address"
                                                placeholder="Enter Current Address" type="text" name="current_address" fullWidth />

                                            {errors.current_address && touched.current_address && <Error text={errors.current_address} />}

                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="pan_card" LableText="Enter PAN" />
                                            <Field
                                                error={errors.pan_card && touched.pan_card}
                                                as={TextField}
                                                id="pan_card"
                                                placeholder="Pan Number" type="text" name="name" fullWidth />
                                            {errors.pan_card && touched.pan_card && <Error text={errors.pan_card} />}
                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="aadhar_card" LableText="Enter Aadhar" />
                                            <Field
                                                error={errors.aadhar_card && touched.aadhar_card}
                                                as={TextField}
                                                id="aadhar_card"
                                                placeholder="Aadhar Card" type="text" name="aadhar_card" fullWidth />
                                            {errors.aadhar_card && touched.aadhar_card && <Error text={errors.aadhar_card} />}
                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="bank_account" LableText="Bank Account" />
                                            <Field
                                                error={errors.bank_account && touched.bank_account}
                                                as={TextField}
                                                id="bank_account"
                                                placeholder="Bank Account" type="text" name="bank_account" fullWidth />
                                            {errors.bank_account && touched.bank_account && <Error text={errors.bank_account} />}
                                        </ThemeFInputDiv>



                                    </ThemeFInputDiv >

                                    <Stack direction="row" sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>

                                        <ThemeButtonType2 variant="contained" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}
                                        >Continue And Next</ThemeButtonType2>

                                    </Stack>

                                </Form >

                            )}
                        </Formik >


                    </Box>
                </Box>

            </Stack>
        </Box >

        <Box className="PersonalInformation2" sx={{
            padding: { "lg": "50px 80px", "md": "20px", "xs": "20px" },
            background: "FAFAFA",
            display: form === 2 ? "block" : "none"
        }}>
            <Stack direction="row" gap={2}>

                <Box sx={{
                    width: { 'lg': "50%", 'md': '100%', 'xs': '100%' },
                    display: { 'lg': "block", 'md': "none", 'xs': 'none' }
                }}>
                    <Stack sx={{
                        margin: "50px",
                        direction: "row",
                        gap: "100px",


                    }}>
                        <Typography component="box" sx={{
                            fontSize: "64px",
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            color: "#4E3A67",
                            display: "block",
                            marginTop: "20px"
                        }}>
                            Get Suitable
                            Jobs Here
                        </Typography>

                        <Box sx={{ width: "500px" }}>
                            <img
                                width="100%"

                                src={window.location.origin + "/assets/g11.png"} alt="g11" />
                        </Box>
                    </Stack>

                    <Stack sx={{
                        margin: "50px",
                        direction: "row",
                        gap: "100px",
                        alignItems: "flex-end"


                    }}>
                        <Typography component="box" sx={{
                            fontSize: "64px",
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            color: "#4E3A67",
                            display: "block",
                            marginTop: "20px"
                        }}>
                            Unlimited job  options
                        </Typography>

                        <Box sx={{ width: "500px" }}>
                            <img
                                width="100%"

                                src={window.location.origin + "/assets/g54.png"} alt="g54" />
                        </Box>
                    </Stack>
                </Box>
                <Box sx={{
                    width: { "lg": "50%", "md": "100%", "xs": "100%" }
                }}>
                    <Box sx={{
                        // width: {"lg":"763px","md":"700px"},
                        maxWidth: "763px",
                        minHeight: "153px",
                        background: "#F8F8F8",
                        border: "1px solid #EAEAEA",
                        boxShadow: "0px 4px 40px rgba(239, 239, 239, 0.3)",
                        borderRadius: "19px",
                        padding: "35px 50px",
                        margin: "0 auto",

                    }}>
                        <Typography component="box" sx={{
                            fontSize: "40px",
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            color: "#4E3A67",
                            display: "block",
                            marginTop: "20px"
                        }}>
                            Professional Details
                        </Typography>

                        <Stack direction="row" gap={2} sx={{
                            margin: "25px 0px",
                            flexWrap: "wrap"
                        }}>
                            <Stack direction="row" gap={1} alignItems="center" justifyContent="center"
                            >
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
                                    color: "#4E3A67",
                                    display: "block",
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
                                    fontSize: "19px",
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    color: "#4E3A67",
                                    display: "block",
                                }}>
                                    Professional Details
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
                        minHeight: "647px",
                        background: "#FFFFFF",
                        border: "1px solid #EDEDED",
                        borderRadius: "19px",
                        position: "relative",
                        top: "-10px",

                        padding: "30px 50px",
                        margin: "0 auto"

                    }}>
                        <Formik

                            initialValues={defaultValue}
                        // validationSchema={ProfessionalDetailSchema}
                        // onSubmit={handleSubmit}
                        >
                            {({ errors, touched, values, setFieldValue }) => (
                                <Form className="ProfessionalDetailForm">
                                    <ThemeFInputDiv>
                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="current_title" LableText="Current Title" />
                                            <Field
                                                error={errors.current_title && touched.current_title}
                                                as={TextField}
                                                id="current_title"
                                                placeholder="Enter Current Title" type="text" name="current_title" fullWidth />
                                            {errors.current_title && touched.current_title && <Error text={errors.current_title} />}
                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="salary_exceptation" LableText="Salary Exceptation" />
                                            <Field
                                                error={errors.salary_exceptation && touched.salary_exceptation}
                                                as={TextField}
                                                id="salary_exceptation"
                                                placeholder="Enter Salary Exceptation" type="text" name="salary_exceptation" fullWidth />
                                            {errors.salary_exceptation && touched.salary_exceptation && <Error text={errors.salary_exceptation} />}
                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="work_area" LableText="Select your work area from the list" />
                                            <SelectField
                                                labelId="demo-simple-select-label"
                                                name="work_area"
                                                value={workArea}
                                                label="Age"
                                                onChange={(event) => {
                                                    setWorkArea(event.target.value);
                                                    setFieldValue("work_area", event.target.value);
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
                                                <MenuItem value=" ">Select Qualification</MenuItem>
                                                {CandidateEducation.map((item) =>
                                                    <MenuItem value={item.value} key={item.id}>{item.Name}</MenuItem>
                                                )}
                                            </SelectField>
                                            {errors.work_area && touched.work_area && <Error text={errors.work_area} />}

                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="work_experience" LableText="Work experience as an Office helper (in years)" />
                                            <SelectField
                                                labelId="demo-simple-select-label"
                                                name="work_experience"
                                                value={workExperience}
                                                label="role"
                                                onChange={(event) => {
                                                    setWorkExperience(event.target.value);
                                                    setFieldValue("work_experience", event.target.value);
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
                                                <MenuItem value=" ">Select Work Experience </MenuItem>
                                                {ExperienceLevel.map((item) =>
                                                    <MenuItem value={item} key={item}>{item}</MenuItem>
                                                )}
                                            </SelectField>
                                            {errors.work_experience && touched.work_experience && <Error text={errors.work_experience} />}
                                        </ThemeFInputDiv>
                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="previously_worked" LableText="Have you worked previously with any company?" />
                                            <ThemeFInputDiv>
                                                <FormControl>
                                                    <RadioGroup
                                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                                        name="controlled-radio-buttons-group"
                                                        value={previouslyWorked}
                                                        onChange={(event) => {
                                                            setPreviouslyWorked(event.target.value)
                                                            setFieldValue("previously_worked", event.target.value)
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
                                                                <Box sx={{ marginLeft: "20px" }}>Yes</Box>
                                                                <FormControlLabel value="yes" control={<Radio />} label="" />
                                                            </Stack>

                                                            <Stack direction="row" gap={2} alignItems="center" justifyContent="space-between"
                                                                sx={{
                                                                    height: "59px",
                                                                    width: "230px",
                                                                    borderRadius: "7px",
                                                                    border: " 2px solid #EAEAEA"
                                                                }} >
                                                                <Box sx={{ marginLeft: "20px" }}>No</Box>
                                                                <FormControlLabel value="no" control={<Radio />} label="" />
                                                            </Stack>
                                                        </Stack>


                                                    </RadioGroup>
                                                </FormControl>
                                            </ThemeFInputDiv>
                                            {errors.previously_worked && touched.previously_worked && <Error text={errors.previously_worked} />}
                                        </ThemeFInputDiv>


                                    </ThemeFInputDiv >

                                    <Stack direction="row" sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                                        <ThemeButtonType3 variant="outlined" type="submit"
                                            sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}
                                        > Continue</ThemeButtonType3>
                                        <ThemeButtonType2 variant="contained" type="button" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}
                                            onClick={() => {
                                                window.location.href = window.location.origin + '/profile/2';

                                            }}>Next Step</ThemeButtonType2>

                                    </Stack>

                                </Form >

                            )}
                        </Formik >


                    </Box>
                </Box>

            </Stack>
        </Box >
    </>)
}
export default PersonalInformation2;