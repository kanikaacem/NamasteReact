import { getRequest, postRequest } from "../../utils/ApiRequests";
import { getJobTypeURL, checkBlueCollarJob, PostAnswerCandidate, StatesURL } from "../../utils/ApiUrls";
import { JobTypePageSchema } from "../../Validation/PostJobValidation";

import { Box, Stack, Typography, TextField, Select as SelectField, MenuItem } from "@mui/material";

import { useState, useEffect } from "react";


import { Formik, Form } from "formik";
import { ThemeButtonType2, ThemeFInputDiv } from "../../utils/Theme";

import ThemeLabel from '../../ThemeComponent/ThemeForms/ThemeLabel';
import Error from '../../ThemeComponent/Common/Error';
import ClickAwayListener from '@mui/base/ClickAwayListener';

import ThemeMobileImage from "../../ThemeComponent/Common/ThemeMobileImage";
import ThemeWebsiteImage from "../../ThemeComponent/Common/ThemeWebsiteImage";
import { CandidateEducation } from "../../utils/Data";
import { useNavigate } from "react-router-dom";
const JobTypePage = () => {

    const [jobType, setJobType] = useState(" ");
    const [jobTypeData, setJobTypeData] = useState([]);

    const [autoData, setAutoData] = useState([]);
    const [menubar, setMenuBar] = useState(false);
    const [area, setArea] = useState("");
    const [state, setState] = useState(" ");
    const [city, setCity] = useState(" ");
    const [District, setDistrict] = useState([]);
    const [CountryState, setCountryState] = useState([]);
    const [qualification, setQualification] = useState(" ");

    const navigate = useNavigate();

    const defaultValue = {
        job_type: "",
        area: "",
        state: "",
        city: "",
        qualification: ""
    }

    useEffect(() => {
        const getJobType = async () => {
            let response = await getRequest(getJobTypeURL);
            setJobTypeData(response.data.sort());
        }
        getJobType();

    }, [])

    const handleSubmit1 = async (values) => {

        FormSubmit("job_type", values.job_type, values.job_type);
        FormSubmit("area", values.area, values.job_type);
        FormSubmit("state", values.state, values.job_type);
        FormSubmit("city", values.city, values.job_type);
        FormSubmit("qualification", values.qualification, values.job_type)

        let response = await getRequest(checkBlueCollarJob + "=" + values.job_type);

        if (response.data)
            navigate("/candidate-dashboard/blue-collar/" + values.job_type.toLowerCase().replace("_", "-") + "/profile/0")
        else
            navigate("/candidate-dashboard/normal/" + values.job_type.toLowerCase().replace("_", "-") + "/profile/0");



    }

    const getAddress = async (value) => {
        let response = await getRequest("https://backend.jobsyahan.com/api/map/autocompleteplaces?input=" + value);
        setAutoData(response.data);
    }
    const FormSubmit = async (question, ans, JobType) => {

        let FormData = {};
        FormData = {
            tag: question,
            answers: ans,
            jobtype: JobType

        }

        let response = await postRequest(PostAnswerCandidate, FormData);
        if (response.status === '1') {
            console.log(response);
        }

    }

    const getDistrictByState = async (statefilter) => {
        let response = await getRequest("https://backend.jobsyahan.com/api/map/districts?states=" + statefilter);
        setDistrict(response.data[0].districts);
    }

    useEffect(() => {
        const getState = async () => {
            let response = await getRequest(StatesURL);
            setCountryState(response.data);
        }
        getState();
    }, [])
    return (<>
        <Box className="JobTypePage"
            sx={{
                minHeight: { "xs": "1000px", "sm": "1000px", "md": "100vh", "lg": "100vh", "xl": "100vh" },
                background: "#FFFFFF",
                backgroundRepeat: " no-repeat",
                backgroundPosition: "left 100px bottom 0px"
            }}>
            <Stack className="JobTypePageWrapper"
                sx=
                {{
                    padding: { "xs": "15px", "sm": "15px", "md": "20px 50px", "lg": "20px 50px", "xl": "20px 50px" },
                    gap: "24px"
                }}>

                <Stack gap={3} direction={{ "xs": "column", "sm": "column", "md": "column", "lg": "row", "xl": "row" }} justifyContent="space-between">
                    <Box sx={{
                        width: { "xs": "100%", "sm": "100%", "md": "100%", "lg": "50%", "xl": "50%" },
                        margin: "0 auto"
                    }}>
                        <Box sx={{ display: { "xs": "none", "sm": "none", "md": "none", "lg": "block", "xl": "block" } }}>
                            <Typography component="box" sx={{
                                fontSize: "4rem",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: "block",
                            }}> Unlimited Job
                                <Typography component="box" sx={{
                                    fontSize: "4rem",
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    color: "#4E3A67",
                                    display: "block",
                                }}> Options
                                </Typography>
                            </Typography>
                        </Box>
                        <Box sx={{ display: { "xs": "block", "sm": "block", "md": "block", "lg": "none", "xl": "none" } }}>
                            <Typography component="box" sx={{
                                fontSize: { "xs": "1.6rem", "sm": "3rem", "md": "3rem", "xl": "4rem", "lg": "4rem" },
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: "block",
                                textAlign: "center",
                                margin: "10px 0px"
                            }}> Unlimited Job Options
                            </Typography>
                        </Box>

                        <ThemeMobileImage imageUrl="/assets/g54.png" />
                        <ThemeWebsiteImage imageUrl="/assets/g54.png" imageWidth="500px" />
                    </Box>

                    <Box sx={{
                        width: { "xs": "100%", "sm": "100%", "md": "100%", "lg": "50%", "xl": "50%" },
                        position: "relative",
                        top: { "xs": '-30px', "sm": "-50px", "md": "-50px", "lg": "0px", "xl": "0px" }
                    }}>
                        <Box sx={{
                            background: "#F8F8F8",
                            border: "1px solid #EAEAEA",
                            boxShadow: "0px 4px 40px rgba(239, 239, 239, 0.3)",
                            borderRadius: "19px",
                        }}>
                            <Box sx={{
                                padding: { "xs": "15px", "sm": "15px", "md": "35px 50px", "lg": "35px 50px", "xl": "35px 50px" },

                            }}>
                                <Typography component="box" sx={{
                                    fontSize: { "xs": "26px", "sm": "26px", "md": "40px", "lg": "40px", "xl": "40px" },
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    color: "#4E3A67",
                                    display: "block",
                                    marginTop: "20px"
                                }}>
                                    Select Job Type
                                </Typography>
                            </Box>

                            <Box sx={{
                                boxSizing: "border-box",
                                height: "647",
                                background: "#FFFFFF",
                                border: "1px solid #EDEDED",
                                borderBottomLeftRadius: "19px",
                                borderBottomRightRadius: "19px",
                                position: "relative",
                                padding: { "xs": "15px", "sm": "15px", "md": "30px 50px", "lg": "30px 50px", "xl": "30px 50px" },
                                paddingBottom: "100px"


                            }}>
                                <Formik

                                    initialValues={defaultValue}
                                    validationSchema={JobTypePageSchema}
                                    onSubmit={handleSubmit1}
                                >
                                    {({ errors, touched, setFieldValue }) => (
                                        <Form className="JobTypePage1" >

                                            <ThemeFInputDiv >


                                                <ThemeFInputDiv >
                                                    <ThemeLabel LableFor="job_type" LableText="Job Type *" />
                                                    <SelectField
                                                        classNamePrefix="react-select"
                                                        labelId="demo-simple-select-label"
                                                        name="job_type"
                                                        value={jobType}
                                                        onChange={(event) => {
                                                            setJobType(event.target.value);
                                                            setFieldValue("job_type", event.target.value);
                                                        }}
                                                        displayEmpty
                                                        inputProps={{ 'aria-label': 'Without label' }}

                                                        sx={{
                                                            background: " #FFFFFF",
                                                            border: "1px solid #EAEAEA",
                                                            boxShadow: "0px 10px 11px rgb(0 0 0 / 2%)",
                                                            borderRadius: "7px",
                                                            width: "101%",
                                                            fontSize: "16px",
                                                            fontamily: 'Montserrat',
                                                            padding: { "xs": "0px", "sm": "0px", "md": "8px", "lg": "8px", "xl": "8px" }

                                                        }}

                                                    >
                                                        <MenuItem value=" " disabled><Box style={{ color: "#e6e6e6" }}>Select Job Type</Box></MenuItem>

                                                        {jobTypeData && jobTypeData.map((item) =>
                                                            <MenuItem sx={{ textTransform: "capitalize" }} value={item} key={item}>{item.replaceAll("_", " ")}</MenuItem>
                                                        )}
                                                    </SelectField>

                                                    {errors.job_type && touched.job_type && <Error text={errors.job_type} />}
                                                </ThemeFInputDiv>

                                                <Stack direction="row" gap={2}>
                                                    <ThemeFInputDiv sx={{ width: "50%" }}>
                                                        <ThemeLabel LableFor="state" LableText="State *" />
                                                        <SelectField
                                                            classNamePrefix="react-select"
                                                            labelId="demo-simple-select-label"
                                                            name="state"
                                                            value={state}
                                                            displayEmpty
                                                            inputProps={{ 'aria-label': 'Without label' }}
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
                                                            <MenuItem value=" " disabled><Box style={{ color: "#e6e6e6" }}>Select State</Box></MenuItem>
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
                                                            displayEmpty
                                                            inputProps={{ 'aria-label': 'Without label' }}
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
                                                            <MenuItem value=" " disabled><Box style={{ color: "#e6e6e6" }}>Select City</Box></MenuItem>
                                                            {District && District.map((item) =>
                                                                <MenuItem value={item.name} key={item._id}>{item.name}</MenuItem>
                                                            )}
                                                        </SelectField>

                                                        {errors.city && touched.city && <Error text={errors.city} />}
                                                    </ThemeFInputDiv>
                                                </Stack>

                                                <ThemeFInputDiv sx={{ position: "relative" }}>
                                                    <ThemeLabel LableFor="area" LableText="Area *" />
                                                    <Box sx={{ width: "100%", margin: "10px 0px" }}>

                                                        <TextField id="outlined-basic"
                                                            autoComplete="off"
                                                            placeholder="Enter Area(eg.Haridwar, Uttarakhand, India)"
                                                            value={area}
                                                            onChange={(event) => {
                                                                setArea(event.target.value);
                                                                setFieldValue("area", event.target.value);
                                                                getAddress(event.target.value);
                                                                setMenuBar(true)
                                                            }}
                                                            variant="outlined" fullWidth />
                                                    </Box>
                                                    {errors.area && touched.area && <Error text={errors.area} />}

                                                    {menubar && autoData && autoData != "no record please enter some word" && <>
                                                        <ClickAwayListener onClickAway={() => setAutoData(false)}>

                                                            <Box
                                                                className="RegisterAutoSuggestDiv"
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
                                                                        <Box
                                                                            className="RegisterAutoSuggestList" sx={{
                                                                                padding: "20px",
                                                                                borderBottom: "1px solid #E1D4F2",
                                                                                cursor: "pointer"
                                                                            }}
                                                                            onClick={(event) => {
                                                                                setArea(item.description);
                                                                                setFieldValue("area", item.description)
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
                                                    <ThemeLabel LableFor="qualification" LableText="Qualification *" />
                                                    <SelectField
                                                        classNamePrefix="react-select"
                                                        labelId="demo-simple-select-label"
                                                        name="qualification"
                                                        value={qualification}
                                                        displayEmpty
                                                        inputProps={{ 'aria-label': 'Without label' }}
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
                                                        <MenuItem value=" " disabled> <Box style={{ color: "#e6e6e6" }}>Select Qualification</Box></MenuItem>
                                                        {CandidateEducation && CandidateEducation.map((item) =>
                                                            <MenuItem value={item.value} key={item.value}>{item.value}</MenuItem>
                                                        )}
                                                    </SelectField>
                                                    {errors.qualification && touched.qualification && <Error text={errors.qualification} />}
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


                    </Box>
                </Stack>
            </Stack>
        </Box >


    </>)
}

export default JobTypePage;
