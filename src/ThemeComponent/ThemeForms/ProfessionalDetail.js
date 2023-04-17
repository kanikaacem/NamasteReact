import { postRequest } from "../../utils/ApiRequests";
import { SaveCandidateProfessionalInformation } from "../../utils/ApiUrls";

import { Box, Select, Stack, Typography, TextField, Radio, RadioGroup, FormControlLabel, FormControl, MenuItem, Divider } from "@mui/material";

import { Formik, Field, Form } from "formik";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { ProfessionalDetailSchema } from "../../Validation/CandidateValidation";
import { CandidateEducation } from "../../utils/Data";
import Error from '../../ThemeComponent/Common/Error';

import { ThemeButtonType2, ThemeButtonType3, ThemeFInputDiv } from "../../utils/Theme";
import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import ThemeMessage from "../Common/ThemeMessage";

import { data1 } from "../../utils/Data";
import FormMenu from "../Common/FormMenu";
import { useState, useEffect } from "react";



function AddProfessionalForm({ handleAddComponent }) {

    const [qualification, setQualification] = useState(" ");
    const [courseType, setCourseType] = useState('full_time');
    const [startingDate, setStartingDate] = useState(null);
    const [endingDate, setEndingDate] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const defaultValue = {
        institue_name: "",
        qualification: "",
        course_type: "full_time",
        starting_year: "",
        ending_year: "",
        percentage: "",
    }

    const handleSubmit = async (values, { resetForm }) => {
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
        if (response.status === "1") {
            localStorage.setItem("user", JSON.stringify(response.data));
            setFormSubmitted(true);

        }
    }



    return <>
        <ThemeMessage open={formSubmitted} setOpen={setFormSubmitted} message=" Your Professional Details is submitted successfully." type="success" />

        <Box >
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
                                        BorderBottom: 'none',
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
                                            <Stack direction="row" gap={3} sx={{ flexWrap: "wrap" }}>

                                                <Stack direction="row" gap={2} alignItems="center" justifyContent="space-between"
                                                    sx={{
                                                        height: { "xs": "36px", "sm": "36px", "md": "59px", "lg": "59px", "xl": "59px" },
                                                        width: "160px",
                                                        borderRadius: "7px",
                                                        border: " 2px solid #EAEAEA"
                                                    }} >
                                                    <Box sx={{ marginLeft: "20px" }}>Full Time</Box>
                                                    <FormControlLabel value="full_time" control={<Radio />} label="" />
                                                </Stack>

                                                <Stack direction="row" gap={2} alignItems="center" justifyContent="space-between"
                                                    sx={{
                                                        height: "59px",
                                                        width: "160px",
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
                        <Stack direction="row" sx={{ width: "100%", gap: "20px", flexWrap: "wrap" }}>

                            <ThemeButtonType3 variant="outlined" type="submit"
                                sx={{
                                    fontFamily: "Work Sans, sans-serif",
                                    fontWeight: "600", width: { "xs": "100%", "sm": "100%", "md": "47%", "lg": "47%", "xl": "47%" }
                                }}
                                onClick={handleAddComponent}>Add + </ThemeButtonType3>
                            <ThemeButtonType2 variant="contained" type="button"
                                sx={{
                                    fontFamily: "Work Sans, sans-serif", fontWeight: "600", margin: "20px 0px",
                                    width: { "xs": "100%", "sm": "100%", "md": "50%", "lg": "50%", "xl": "50%" }
                                }}
                                onClick={handleAddComponent}>Remove - </ThemeButtonType2>
                        </Stack>

                        <Stack direction="row" sx={{ width: "100%", gap: "20px", flexWrap: "wrap" }}>
                            <ThemeButtonType3 variant="outlined" type="submit"
                                sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600", width: { "xs": "100%", "sm": "100%", "md": "50%", "lg": "50%", "xl": "50%" } }}
                            > Save</ThemeButtonType3>

                            <ThemeButtonType2 variant="contained" type="button" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600", width: { "xs": "100%", "sm": "100%", "md": "47%", "lg": "47%", "xl": "47%" } }}
                                onClick={() => {
                                    window.location.href = window.location.origin + '/candidate-dashboard/profile/2';

                                }}>Next Step</ThemeButtonType2>

                        </Stack>

                    </Form >

                )}
            </Formik >
        </Box >
    </>;
};


const ProfessionalDetail = ({ setActiveStep }) => {

    const [newForm, setNewForm] = useState(0);
    const [components, setComponents] = useState([]);

    const handleAddComponent = () => {
        const newComponent = <AddProfessionalForm key={components.length} handleAddComponent={handleAddComponent} />;
        setComponents(prevComponents => [...prevComponents, newComponent]);
    };

    useEffect(() => {
        handleAddComponent();
    }, [newForm]);


    return (<>

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
                    padding: { "xs": "15px", "sm": "15px", "md": "20px 50px", "lg": "20px 50px", "xl": "20px 50px" },
                    gap: "24px"
                }}>

                <Stack direction="row" sx={{
                    position: "relative",
                    gap: { "xs": "0px", "sm": "0px", "md": "24px", "lg": "24px", "xl": "24px" }
                }}>
                    <Stack
                        gap={2} sx={{
                            width: {
                                "xs": "0%", "sm": "0%", "md": "40%", "lg": "40%", "xl": "40%"
                            }, padding: { "xs": "0px", "sm": "0px", "md": "100px", "lg": "100px", "xl": "100px" },
                            visibility: { "xs": "hidden", "sm": "hidden", "md": "visible", "lg": "visible", "xl": "visible" }
                        }}>

                        <Box sx={{
                            display: { "xs": "none", "sm": "none", "md": "block", "lg": "block", "xl": "block" }
                        }}>
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

                    <Box id="ProfessionalDiv" sx={{ width: { "xs": "100%", "sm": "100%", "md": "50%", "lg": "50%", "xl": "50%" } }}>

                        <Box >

                            <Box sx={{
                                minHeight: "153px",
                                background: "#F8F8F8",
                                border: "1px solid #EAEAEA",
                                boxShadow: "0px 4px 40px rgba(239, 239, 239, 0.3)",
                                borderRadius: "19px",

                            }}>
                                <Box sx={{
                                    padding: { "xs": "15px", "sm": "15px", "md": "30px 50px", "lg": "30px 50px", "xl": "30px 50px" },
                                }}>
                                    <Typography component="box" sx={{
                                        fontSize: { "xs": "26px", "sm": "26px", "md": "40px", "lg": "40px", "xl": "40px" },
                                        fontFamily: "Montserrat",
                                        fontWeight: "600",
                                        color: "#4E3A67",
                                        display: "block",
                                        marginTop: "20px"
                                    }}>
                                        Professional Details
                                    </Typography>

                                    <Stack direction="row" gap={1} sx={{ margin: "25px 0px", flexWrap: "wrap" }}>

                                        {
                                            data1 && data1.map((item) => {
                                                return <FormMenu data={item} />
                                            })
                                        }

                                    </Stack>
                                </Box>


                                <Stack sx={{
                                    boxSizing: "border-box",
                                    background: "#FFFFFF",
                                    border: "1px solid #EDEDED",
                                    padding: { "xs": "15px", "sm": "15px", "md": "30px 50px", "lg": "30px 50px", "xl": "30px 50px" },
                                    paddingBottom: "100px",
                                    borderBottomLeftRadius: "19px",
                                    borderBottomRightRadius: "19px",

                                }}
                                    divider={<Divider orientation="horizontal" flexItem />}
                                    gap={2}
                                >


                                    {components}
                                </Stack>

                            </Box>

                        </Box>

                    </Box>

                </Stack>
            </Stack>
        </Box>


    </>)
}

export default ProfessionalDetail;
