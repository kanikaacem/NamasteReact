import { postRequest } from "../../utils/ApiRequests";
import { PostAnswerCandidate, CandidateLoginURL } from "../../utils/ApiUrls";

import { Stack, TextField, FormControlLabel, Radio, FormControl, Box, RadioGroup, Select as SelectField, MenuItem, Select, Typography, Autocomplete } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { ThemeButtonType2, ThemeFInputDiv, ThemeButtonType3 } from "../../utils/Theme";
import ThemeLabel from "./ThemeLabel";
import Error from '../Common/Error';

import HeaderSec from "../Common/HeaderSec";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PersonalInformation2 = ({ questions }) => {

    // const [date, setDate] = useState(null);
    // const [qualification, setQualification] = useState(" ");
    // const [gender, setGender] = useState("");
    // const [martialStatus, setMaritalStatus] = useState(" ");

    // const [workArea, setWorkArea] = useState(" ");
    // const [workExperience, setWorkExperience] = useState(" ");
    // const [previouslyWorked, setPreviouslyWorked] = useState(" ");
    // const [nestedValue,setNestedValue] = useState(false);

    // const handleSubmit = async (values, { resetForm }) => {
    //     console.log(values);
    // }
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const JobType = window.location.pathname.split('/')[1];

    const FormSubmit = async (question, ans) => {

        let FormData = {};
        FormData = {
            tag: question,
            answers: ans,
            jobtype: JobType

        }
        // FormData[question] = ans;
        console.log(FormData);
        // if(localStorage.getItem("questions") == null)
        //     localStorage.setItem("questions", JSON.stringify(FormData));
        // else 
        //     localStorage.setItem("questions",localStorage.getItem("questions")+JSON.stringify(FormData))

        let response = await postRequest(PostAnswerCandidate, FormData);
        if (response.status === '1') {
            console.log(response);
        }

    }

    const LoginUser = async () => {
        let CandidateLoginForm = new FormData();
        CandidateLoginForm = {
            email: localStorage.getItem("useremail"),
            password: localStorage.getItem("password")
        }

        let response = await postRequest(CandidateLoginURL, CandidateLoginForm);
        if (response.status == '1') {
            localStorage.setItem("auth_token", response.token);
            // console.log(response)
            // if (response.data.isemailverified && response.data.profilecompleted >= 50)
            //     dispatch({ type: 'LOGIN', payload: response.data });
            if (response.data.isemailverified)
                dispatch({ type: 'LOGIN', payload: response.data });
            else
                alert("Please fill all the required fields");
        }

    }
    return (<>
        {/* {console.log(questions)} */}
        {isLoggedIn == 'true' && <Navigate to="/candidate-dashboard"></Navigate>}

        <Box className="PersonalInformation2" sx={{
            background: "FAFAFA"

        }}>

            <Box sx={{ padding: "20px" }}>
                <HeaderSec
                    color="black"
                    border="2px solid #8E8E8E" />
            </Box>

            <Stack direction="row" gap={2}
                sx={{
                    padding: { "lg": "50px 80px", "md": "20px", "xs": "20px" },

                }}>

                <Box sx={{
                    width: { 'lg': "50%", 'md': '100%', 'xs': '100%' },
                    display: { 'lg': "block", 'md': "none", 'xs': 'none' },

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
                            Candidate Details
                        </Typography>



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
                            // initialValues={initialData}
                            // enableReinitialize
                            // initialValues={props.initialValues}
                            initialValues={{}}
                        // validationSchema={ProfessionalDetailSchema}
                        // onSubmit={handleSubmit}
                        >
                            {({ errors, touched, values, setFieldValue }) => (
                                <Form className="ProfessionalDetailForm">
                                    <ThemeFInputDiv>
                                        {
                                            questions && questions.length > 0 && questions.map((item, index) => {
                                                return (<>
                                                    <ThemeFInputDiv>
                                                        <ThemeLabel LableFor={item.questiontag} LableText={item.question} />
                                                        {
                                                            item.questiontype === "input" && <>
                                                                <Field
                                                                    onKeyUp={(event) => FormSubmit(item.questiontag, event.target.value)
                                                                    }
                                                                    // error={errors.name && touched.name}
                                                                    as={TextField}
                                                                    id={item.questiontag}
                                                                    placeholder={item.question} type="text" name={item.questiontag} fullWidth />
                                                                {/* {errors.job_type && touched.job_type && <Error text={errors.job_type} />} */}

                                                            </>

                                                        }
                                                        {
                                                            item.questiontype === "dropdown" && <>

                                                                <Autocomplete
                                                                    disablePortal
                                                                    id={item.questiontag}
                                                                    options={item.questionoption}
                                                                    onChange={(event) => {
                                                                        // setFieldValue(item.questiontag, event.target.innerText)
                                                                        FormSubmit(item.questiontag, event.target.innerText)
                                                                    }}
                                                                    sx={{
                                                                        "& .MuiOutlinedInput-root": {
                                                                            borderRadius: "4px",
                                                                            padding: "2px",
                                                                            border: "1px solid #EAEAEA"
                                                                        },
                                                                        "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                                                            border: "none"
                                                                        }
                                                                    }}
                                                                    renderInput={(params) => <TextField
                                                                        placeholder={item.question}
                                                                        {...params} />}
                                                                />
                                                                {item.questionsnested.length > 0 && <>
                                                                    <ThemeLabel LableFor={item.questionsnested[0].questiontag} LableText={item.questionsnested[0].question} />

                                                                    <Field
                                                                        // error={errors.name && touched.name}
                                                                        as={TextField}
                                                                        id={item.questionsnested[0].questiontag}
                                                                        placeholder={item.questionsnested[0].question} type="text" name={item.questionsnested[0].questiontag} fullWidth />
                                                                </>}

                                                            </>
                                                        }
                                                        {
                                                            item.questiontype === "radio" && <>
                                                                {
                                                                    item.questionoption.map((option) => {
                                                                        return (
                                                                            <>
                                                                                <Stack direction="row" gap={2} alignItems="center">
                                                                                    <input
                                                                                        onChange={(event) => {
                                                                                            // console.log(event.target)
                                                                                            // setFieldValue(item.questiontag, event.target.value)
                                                                                            FormSubmit(item.questiontag, event.target.value)

                                                                                        }}
                                                                                        type="radio" id={item.questiontag} name={item.questiontag} value={option} />
                                                                                    <label for={item.questiontag}>{option}</label><br></br>
                                                                                </Stack>

                                                                            </>
                                                                        )
                                                                    })
                                                                }
                                                            </>
                                                        }

                                                    </ThemeFInputDiv>
                                                </>)
                                            })
                                        }

                                    </ThemeFInputDiv >

                                    <Stack direction="row" sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>

                                        <ThemeButtonType2 variant="contained" type="button" onClick={LoginUser} sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}
                                        >Save</ThemeButtonType2>

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