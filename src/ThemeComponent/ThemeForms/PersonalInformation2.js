import { postRequest } from "../../utils/ApiRequests";
import { PostAnswerCandidate, BlueCollarProfileCompleted } from "../../utils/ApiUrls";

import { Stack, TextField, Box, Select as SelectField, MenuItem, Select, Typography, Autocomplete } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { ThemeButtonType2, ThemeFInputDiv, ThemeButtonType3 } from "../../utils/Theme";
import ThemeLabel from "./ThemeLabel";

import { useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import ThemeMessage from "../Common/ThemeMessage";
const PersonalInformation2 = ({ questions }) => {

    const [date, setDate] = useState(null);
    const JobType = window.location.pathname.split('/')[1];
    const [formSubmitted, setFormSubmitted] = useState(false);

    const FormSubmit = async (question, ans) => {

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

    const LoginUser = async () => {
        let response = await postRequest(BlueCollarProfileCompleted, {});
        console.log(response);
        if (response.status == 1) {
            localStorage.setItem("action", "login");
            window.location.href = window.location.origin + "/candidate-dashboard";
        }

    }
    return (<>
        <ThemeMessage open={formSubmitted} setOpen={setFormSubmitted} message="Candidate is registered Successfully." type="success" />

        <Box className="PersonalInformation2" sx={{
            background: "FAFAFA"

        }}>
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

                            initialValues={{}}

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
                                                                    as={TextField}
                                                                    id={item.questiontag}
                                                                    placeholder={item.question} type="text" name={item.questiontag} fullWidth />

                                                            </>

                                                        }
                                                        {
                                                            item.questiontype === "date" && <>
                                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                    <DatePicker
                                                                        id="date_of_birth"
                                                                        value={date}
                                                                        onChange={(newValue) => {
                                                                            setDate(newValue);
                                                                            FormSubmit(item.questiontag, new Date(newValue))
                                                                        }}
                                                                        disableFuture={true}
                                                                        renderInput={(params) => <TextField

                                                                            {...params} />}
                                                                    />
                                                                </LocalizationProvider>
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
                                                                        as={TextField}
                                                                        id={item.questionsnested[0].questiontag}
                                                                        placeholder={item.questionsnested[0].question} type="text" name={item.questionsnested[0].questiontag} fullWidth />
                                                                </>}

                                                            </>
                                                        }
                                                        {
                                                            item.questiontype === "radio" && <>
                                                                {
                                                                    <Stack direction="row" >
                                                                        {
                                                                            item.questionoption.map((option) => {
                                                                                return (
                                                                                    <>
                                                                                        <Stack direction="row" gap={2} alignItems="center">
                                                                                            <input
                                                                                                onChange={(event) => {
                                                                                                    if (event.target.value === item.questionopentime && item.questionsnested.length > 0) {
                                                                                                        document.getElementById(item.questionsnested[0].questiontag).style.display = "block"
                                                                                                    }
                                                                                                    FormSubmit(item.questiontag, event.target.value)

                                                                                                }}
                                                                                                type="radio" id={item.questiontag} name={item.questiontag} value={option} />
                                                                                            <label for={item.questiontag}>{option}</label><br></br>
                                                                                        </Stack>

                                                                                    </>
                                                                                )
                                                                            })
                                                                        }
                                                                    </Stack>

                                                                }
                                                                <div >
                                                                    {item.questionsnested.length > 0 &&
                                                                        <Box
                                                                            id={item.questionsnested[0].questiontag}
                                                                            style={{ display: 'none' }}>
                                                                            <ThemeLabel LableFor={item.questionsnested[0].questiontag} LableText={item.questionsnested[0].question} />

                                                                            <Field
                                                                                onKeyUp={(event) => FormSubmit(item.questionsnested[0].questiontag, event.target.value)}
                                                                                as={TextField}
                                                                                placeholder={item.questionsnested[0].question} type="text" name={item.questionsnested[0].questiontag} fullWidth />
                                                                        </Box>}
                                                                </div>


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