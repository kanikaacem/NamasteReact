import { getRequest } from "../../utils/ApiRequests";
import { getJobTypeURL, getSKillOnJobType, checkBlueCollarJob } from "../../utils/ApiUrls";
import { JobTypePageSchema } from "../../Validation/PostJobValidation";

import { Box, Stack, Typography, TextField, Select as SelectField, MenuItem } from "@mui/material";
import HeaderSec from "../../ThemeComponent/Common/HeaderSec";

import { useState, useEffect } from "react";

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { Formik, Field, Form } from "formik";
import { ThemeButtonType2, ThemeFInputDiv } from "../../utils/Theme";

import ThemeLabel from '../../ThemeComponent/ThemeForms/ThemeLabel';
import Error from '../../ThemeComponent/Common/Error';

const JobTypePage = () => {

    const [jobType, setJobType] = useState(" ");
    const [jobTypeData, setJobTypeData] = useState([]);
    const [skillData, setSkillData] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState([]);

    const animatedComponents = makeAnimated();

    const defaultValue = {
        job_type: "",
        skills: ""
    }

    useEffect(() => {
        const getJobType = async () => {
            let response = await getRequest(getJobTypeURL);
            setJobTypeData(response.data.sort());
        }
        getJobType();

    }, [])

    const getSkillByJobType = async (jobTypeFilter) => {
        let SkillsData = [];
        let response = await getRequest(getSKillOnJobType + "=" + jobTypeFilter);
        // setIndustryData(response.data);
        response.data.map(item => {
            // {item[0].toString()}
            SkillsData.push({
                label: item,
                value: item
            })
        });
        // console.log(SkillsData);
        setSkillData(SkillsData.sort());
    }

    const handleSubmit1 = async (values, { resetForm }) => {
        let response = await getRequest(checkBlueCollarJob + "=" + values.job_type);
        console.log(response);

        if (response.data)
            window.location.href = window.location.origin + "/" + values.job_type.toLowerCase().replace("_", "-") + "/profile/0"
        else
            window.location.href = window.location.origin + "/profile/0"



    }
    return (<>
        <Box className="JobTypePage"
            sx={{
                height: "100vh",
                background: "#FFFFFF",
                backgroundRepeat: " no-repeat",
                backgroundPosition: "left 100px bottom 0px"
            }}>
            <Stack className="JobTypePageWrapper"
                sx=
                {{
                    padding: "20px 50px",
                    gap: "24px"
                }}>
                <HeaderSec
                    color="black"
                    border="2px solid #8E8E8E" />
                <Stack gap={3} direction="row" justifyContent="space-between"
                    sx={{
                        margin: "50px"
                    }}>
                    <Box sx={{ width: "50%", margin: "0 auto" }}>
                        <Typography component="box" sx={{
                            fontSize: "64px",
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            color: "#4E3A67",
                            display: "block",
                        }}> Unlimited Job
                        </Typography>
                        <Typography component="box" sx={{
                            fontSize: "64px",
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            color: "#4E3A67",
                            display: "block",
                            width: "max-content"
                        }}>
                            Options

                        </Typography>
                        <img src={window.location.origin + "/assets/g54.png"} alt="g54" style={{ margin: "40px 20px" }} />

                    </Box>

                    <Box sx={{ width: "50%" }}>
                        <Box sx={{
                            // width: "763px",
                            // height: "153px",
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
                                Select Job Type
                            </Typography>

                        </Box>
                        <Box sx={{
                            boxSizing: "border-box",
                            // width: "865px",
                            height: "647",
                            background: "#FFFFFF",
                            border: "1px solid #EDEDED",
                            borderRadius: "19px",
                            position: "relative",
                            // top: "197px",
                            padding: "30px 50px",
                            paddingBottom: "100px"


                        }}>
                            <Formik

                                initialValues={defaultValue}
                                validationSchema={JobTypePageSchema}
                                onSubmit={handleSubmit1}
                            >
                                {({ values, errors, touched, setFieldValue }) => (
                                    <Form className="JobTypePage1" >

                                        <ThemeFInputDiv >


                                            <ThemeFInputDiv >
                                                <ThemeLabel LableFor="job_type" LableText="Job Type *" />
                                                <SelectField
                                                    labelId="demo-simple-select-label"
                                                    name="job_type"
                                                    value={jobType}
                                                    label="role"
                                                    onChange={(event) => {
                                                        setJobType(event.target.value);
                                                        setFieldValue("job_type", event.target.value);
                                                        getSkillByJobType(event.target.value);
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

                                                    {jobTypeData && jobTypeData.map((item) =>
                                                        <MenuItem value={item} key={item}>{item.replaceAll("_", " ")}</MenuItem>
                                                    )}
                                                </SelectField>

                                                {errors.job_type && touched.job_type && <Error text={errors.job_type} />}
                                            </ThemeFInputDiv>

                                            <ThemeFInputDiv>
                                                <ThemeLabel LableFor="skills" LableText="Skills *" />
                                                <Field

                                                    variant="standard"
                                                    error={errors.skills && touched.skills}
                                                    component={Select}
                                                    name="skills"
                                                    options={skillData}
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
                                                    placeholder="Select Skills " data={skillData} fullWidth />


                                                {errors.skills && touched.skills && <Error text={errors.skills} />}

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
            </Stack>
        </Box>


    </>)
}

export default JobTypePage;
