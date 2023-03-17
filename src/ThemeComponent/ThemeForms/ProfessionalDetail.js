import { postRequest } from "../../utils/ApiRequests";
import { SaveCandidateProfessionalInformation } from "../../utils/ApiUrls";

import { Box, Select, Stack, Typography, TextField, Radio, RadioGroup, FormControlLabel, FormControl, MenuItem } from "@mui/material";

import { Formik, Field, Form } from "formik";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { ProfessionalDetailSchema } from "../../Validation/CandidateValidation";
import { CandidateEducation } from "../../utils/Data";
import Error from '../../ThemeComponent/Common/Error';

import { ThemeButtonType2, ThemeButtonType3, ThemeFInputDiv } from "../../utils/Theme";
import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";

import { useState } from "react";
import ThemeMessage from "../Common/ThemeMessage";
const ProfessionalDetail = ({ setActiveStep }) => {
    const defaultValue = {
        institue_name: "",
        qualification: "",
        course_type: "full_time",
        starting_year: "",
        ending_year: "",
        percentage: "",
    }

    const [qualification, setQualification] = useState(" ");
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [courseType, setCourseType] = useState('full_time');
    const [startingDate, setStartingDate] = useState(null);
    const [endingDate, setEndingDate] = useState(null);

    const handleSubmit = async (values, { resetForm }) => {
        console.log(values);

        let formData = new FormData();
        formData = {
            institude_name: values.institue_name,
            qualification: values.qualification,
            course_type: values.course_type,
            starting_year: values.starting_year,
            ending_year: values.ending_year,
            percentage: values.percentage
        }

        let response = await postRequest(SaveCandidateProfessionalInformation, formData);
        if (response.status == 1) {
            localStorage.setItem("user", JSON.stringify(response.data));
            resetForm("");
            setStartingDate(null);
            setEndingDate(null);
            setQualification(" ");
            setFormSubmitted(true);
        }

    }

    return (<>


        <ThemeMessage open={formSubmitted} setOpen={setFormSubmitted} message="Your Qualification is submitted." type="success" />

        <Box className="ProfessionalInformationPage"
            sx={{
                minHeight: "100vh",
                background: "#FFFFFF",
                backgroundRepeat: " no-repeat",
                backgroundPosition: "left 100px bottom 0px"
            }}>
            <Stack className="ProfessionalInformationPageWrapper"
                sx=
                {{
                    padding: "20px 50px",
                    gap: "24px"
                }}>

                <Stack direction="row" gap={3} sx={{ position: "relative" }}>
                    <Stack
                        gap={2} sx={{ width: "40%", padding: "100px" }}>

                        <Box>
                            <Typography component="box" sx={{
                                fontSize: "64px",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: "block",
                            }}> Get Best Jobs In

                            </Typography>
                            <Typography component="box" sx={{
                                fontSize: "64px",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: "block",
                                width: "max-content"
                            }}>
                                Few CLICKS
                            </Typography>
                            <img src={window.location.origin + "/assets/g11.png"} alt="g52" style={{ margin: "40px 20px" }} />

                        </Box>
                    </Stack>

                    <Box>
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
                                Professional Details
                            </Typography>

                            <Stack direction="row" gap={1} sx={{ margin: "25px 0px" }}>
                                <Stack direction="row" gap={1} alignItems="center" justifyContent="center" sx={{ opacity: "0.5" }}>
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


                                <Stack direction="row" gap={1} alignItems="center" justifyContent="center">
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
                                        Professional Details
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
                            top: "-12px",
                            padding: "30px 50px",
                            paddingBottom: "100px"


                        }}>


                            <Formik

                                initialValues={defaultValue}
                                validationSchema={ProfessionalDetailSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ errors, touched, values, setFieldValue }) => (
                                    <Form className="ProfessionalDetailForm">
                                        <ThemeFInputDiv>
                                            <ThemeFInputDiv>
                                                <ThemeLabel LableFor="institue_name" LableText="Institue Name" />
                                                <Field
                                                    error={errors.institue_name && touched.institue_name}
                                                    as={TextField}
                                                    id="institue_name"
                                                    placeholder="Enter Institue Name" type="text" name="institue_name" fullWidth />
                                                {errors.institue_name && touched.institue_name && <Error text={errors.institue_name} />}

                                            </ThemeFInputDiv>

                                            <ThemeFInputDiv>
                                                <ThemeLabel LableFor="qualification" LableText="Qualification" />
                                                <Select
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
                                                </Select>
                                                {errors.qualification && touched.qualification && <Error text={errors.qualification} />}

                                            </ThemeFInputDiv>

                                            <ThemeFInputDiv>
                                                <ThemeLabel LableFor="course_type" LableText="Course Type" />
                                                <Box>
                                                    <FormControl>
                                                        <RadioGroup
                                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                                            name="controlled-radio-buttons-group"
                                                            value={courseType}
                                                            onChange={(event) => {
                                                                setCourseType(event.target.value)
                                                                setFieldValue("course_type", event.target.value)
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
                                                                    <Box sx={{ marginLeft: "20px" }}>Full Time</Box>
                                                                    <FormControlLabel value="full_time" control={<Radio />} label="" />
                                                                </Stack>

                                                                <Stack direction="row" gap={2} alignItems="center" justifyContent="space-between"
                                                                    sx={{
                                                                        height: "59px",
                                                                        width: "230px",
                                                                        borderRadius: "7px",
                                                                        border: " 2px solid #EAEAEA"
                                                                    }} >
                                                                    <Box sx={{ marginLeft: "20px" }}>Part Time</Box>
                                                                    <FormControlLabel value="part_time" control={<Radio />} label="" />
                                                                </Stack>

                                                                <Stack direction="row" gap={2} alignItems="center" justifyContent="space-between"
                                                                    sx={{
                                                                        height: "59px",
                                                                        width: "msx-content",
                                                                        borderRadius: "7px",
                                                                        border: " 2px solid #EAEAEA"
                                                                    }} >
                                                                    <Box sx={{ marginLeft: "20px" }}>Correspondance / Distance Learning</Box>
                                                                    <FormControlLabel value="correspondance_/_distance_learning" control={<Radio />} label="" />
                                                                </Stack>

                                                            </Stack>

                                                        </RadioGroup>
                                                    </FormControl>
                                                </Box>

                                                {errors.course_type && touched.course_type && <Error text={errors.course_type} />}
                                            </ThemeFInputDiv>

                                            <Stack direction="row" gap={3} >
                                                <ThemeFInputDiv sx={{ width: "370px" }}>
                                                    <ThemeLabel LableFor="starting_year" LableText="Starting Year" />
                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <DatePicker

                                                            id="starting_year"
                                                            value={startingDate}
                                                            onChange={(newValue) => {
                                                                setStartingDate(newValue);
                                                                setFieldValue("starting_year", new Date(newValue))
                                                            }}
                                                            inputProps={{
                                                                placeholder: "Enter Starting Year"
                                                            }}
                                                            disableFuture={true}
                                                            renderInput={(params) => <TextField

                                                                {...params} />}
                                                        />
                                                    </LocalizationProvider>

                                                    {errors.starting_year && touched.starting_year && <Error text={errors.starting_year} />}

                                                </ThemeFInputDiv>

                                                <ThemeFInputDiv sx={{ width: "370px" }}>
                                                    <ThemeLabel LableFor="ending_year" LableText="Ending Year" />

                                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                        <DatePicker

                                                            id="ending_year"
                                                            value={endingDate}
                                                            onChange={(newValue) => {
                                                                setEndingDate(newValue);
                                                                setFieldValue("ending_year", new Date(newValue))
                                                            }}
                                                            inputProps={{
                                                                placeholder: "Enter Ending Year"
                                                            }}
                                                            disableFuture={true}
                                                            renderInput={(params) => <TextField

                                                                {...params} />}
                                                        />
                                                    </LocalizationProvider>
                                                    {errors.ending_year && touched.ending_year && <Error text={errors.ending_year} />}

                                                </ThemeFInputDiv>
                                            </Stack>

                                            <ThemeFInputDiv>
                                                <ThemeLabel LableFor="percentage" LableText="Percentage" />
                                                <Field
                                                    error={errors.percentage && touched.percentage}
                                                    as={TextField}
                                                    id="percentage"
                                                    placeholder="Enter Percentage" type="text" name="percentage" fullWidth />
                                                {errors.percentage && touched.percentage && <Error text={errors.percentage} />}

                                            </ThemeFInputDiv>


                                        </ThemeFInputDiv >

                                        <Stack direction="row" sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                                            <ThemeButtonType3 variant="outlined" type="submit"
                                                sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}
                                            > Save</ThemeButtonType3>
                                            <ThemeButtonType2 variant="contained" type="button" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}
                                                onClick={() => {
                                                    window.location.href = window.location.origin + '/candidate-dashboard/profile/2';

                                                }}>Next Step</ThemeButtonType2>

                                        </Stack>

                                    </Form >

                                )}
                            </Formik >



                        </Box>
                    </Box>

                </Stack>
            </Stack>
        </Box>


    </>)
}

export default ProfessionalDetail;
