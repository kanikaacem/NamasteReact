import { postRequest } from "../../utils/ApiRequests";
import { PostAnswerCandidate, BlueCollarProfileCompleted, CandidateQuestion } from "../../utils/ApiUrls";

import { Stack, TextField, Box, Typography, Autocomplete } from "@mui/material";
import { Formik, Form } from "formik";
import { ThemeButtonType2, ThemeFInputDiv } from "../../utils/Theme";
import ThemeLabel from "./ThemeLabel";

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useParams } from "react-router-dom";
import ThemeMessage from "../Common/ThemeMessage";
import Select from 'react-select';

import { useState, useEffect } from "react";

import { data2 } from "../../utils/Data";
import FormMenu from "../Common/FormMenu";
import ThemeWebsiteImage from "../Common/ThemeWebsiteImage";
import ThemeMobileImage from "../Common/ThemeMobileImage";

import { useNavigate } from "react-router-dom";
const BlueCollarRegistrationForm = () => {
    const navigate = useNavigate();
    const { jobType, step } = useParams();
    const JobType = jobType.toLowerCase();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const getQuestion = async () => {
            let questiontype = "";
            if (step === '0') questiontype = "pd";
            if (step === '1') questiontype = "we";
            if (step === '2') questiontype = "ed";
            let response = await postRequest(CandidateQuestion, {
                jobtype: JobType,
                questiontype: questiontype
            })
            if (response.status === '1')
                response.data.questions.length > 0 ?
                    setQuestions(response.data.questions)
                    :
                    setQuestions([])
        }
        jobType && getQuestion();
    }, [jobType, JobType, step]);

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
        // console.log(response);
        if (response.status === "1") {
            localStorage.setItem("action", "login");
            navigate("/candidate-dashboard/profile");
        }

    }

    function InputDiv({ QuestionItem }
    ) {
        return (<>
            <input className="BlueCollarRegistrationFormInput"
                onKeyUp={(event) => FormSubmit(QuestionItem && QuestionItem.questiontag, event.target.value)
                }
                style={{
                    padding: "18px",
                    borderRadius: "11px",
                    border: "1px solid rgb(196 196 196)",
                    fontSize: "16px"
                }} type="text" name={QuestionItem && QuestionItem.questiontag} placeholder={QuestionItem && QuestionItem.question} />
        </>)
    }

    function DatePickerQuestion({ QuestionItem }) {
        const [date, setDate] = useState(null);

        return (<>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    id="date_of_birth"
                    value={date}
                    onChange={(newValue) => {
                        setDate(newValue);
                        FormSubmit(QuestionItem && QuestionItem.questionTag, new Date(newValue))
                    }}
                    disableFuture={true}
                    renderInput={(params) => <TextField

                        {...params} />}
                />
            </LocalizationProvider>
        </>)
    }

    function SelectQuestion({ QuestionItem }) {
        return (<>

            <Autocomplete
                disablePortal
                id={QuestionItem && QuestionItem.questiontag}
                options={
                    QuestionItem && QuestionItem.questionoption
                }
                onChange={(event) => {
                    FormSubmit(
                        QuestionItem && QuestionItem.questiontag, event.target.innerText)
                }}
                sx={{
                    "& .MuiOutlinedInput-root": {
                        borderRadius: "11px",
                        padding: "7px",
                        border: "1px solid rgb(196 196 196) !important",
                        fontSize: { "xs": "12px", "sm": "12px", "md": "14px", "lg": "16px", "xl": "16px" },

                    },
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                        border: "none"
                    }
                }}
                renderInput={(params) => <TextField
                    placeholder={QuestionItem && QuestionItem.question}
                    {...params} />}
            />
        </>)
    }

    function RadioQuestion({ QuestionItem }) {
        return (<>
            <Stack direction="row" >
                {
                    QuestionItem && QuestionItem.questionoption.map((option) => {
                        return (
                            <>
                                <Stack direction="row" gap={2} alignItems="center">
                                    <input
                                        onChange={(event) => {
                                            if (event.target.value === QuestionItem.questionopentime) {
                                                document.getElementById(QuestionItem.questionsnested[0].questiontag).style.display = "block"
                                            }
                                            FormSubmit(QuestionItem && QuestionItem.questiontag, event.target.value)

                                        }}
                                        type="radio" id={QuestionItem && QuestionItem.questiontag} name={QuestionItem && QuestionItem.questiontag} value={option} />
                                    <label for={QuestionItem && QuestionItem.questiontag}>{option}</label><br></br>
                                </Stack>

                            </>
                        )
                    })
                }
            </Stack>

            {
                QuestionItem && QuestionItem.questionsnested.length > 0 &&
                QuestionItem.questionsnested.map((item) => {
                    return (<>
                        <Box id={item.questiontag} style={{ display: "none" }}>

                            <ThemeFInputDiv>
                                <ThemeLabel LableFor={item.questiontag} LableText={item.question} />
                                {getQuestionField(item)}

                            </ThemeFInputDiv>
                        </Box>

                    </>)

                })
            }
        </>)
    }

    function MultiSelectQuestion({ QuestionItem }) {

        let SelectedOption = [];

        QuestionItem &&
            QuestionItem.questionoption.map(item => {
                return SelectedOption.push({
                    label: item,
                    value: item
                })
            });

        return (<>
            <Select
                onChange={(option) => {
                    let optionvalue = [];
                    console.log(option)
                    option.map((item) => {
                        return optionvalue.push(item.value);
                    })
                    FormSubmit(QuestionItem && QuestionItem.questiontag, optionvalue.join(","))
                }}
                options={SelectedOption}
                placeholder={QuestionItem &&
                    QuestionItem.question}
                isMulti
            />
        </>)

    }

    function getQuestionField(QuestionItem) {

        switch (QuestionItem.questiontype) {
            case "input":
                return <InputDiv QuestionItem={QuestionItem} />

            case "date":
                return <DatePickerQuestion QuestionItem={QuestionItem} />

            case "dropdown":
                return <SelectQuestion QuestionItem={QuestionItem} />

            case "multiSelect":
                return <MultiSelectQuestion QuestionItem={QuestionItem} />

            case "radio":
                return <RadioQuestion QuestionItem={QuestionItem}
                />
            default:
                return "No field Present"
        }


    }


    return (<>
        <ThemeMessage open={formSubmitted} setOpen={setFormSubmitted} message="Candidate is registered Successfully." type="success" />

        <Box className="BlueCollarRegistrationPage" sx={{
            background: "#FFFFFF !important"

        }}>
            <Stack direction={{ "xs": "column", "sm": "column", "md": "column", "lg": "row", "xl": "row" }} gap={2}
                sx={{
                    padding: { "xs": "15px", "sm": "15px", "md": "20px 50px", "lg": "20px 50px", "xl": "20px 50px" },

                }}>
                <Stack direction={{ "xs": "column", "sm": "column", "md": "column", "lg": "row", "xl": "row" }} sx={{
                    position: "relative",
                    gap: { "xs": "0px", "sm": "0px", "md": "24px", "lg": "24px", "xl": "24px" }
                }}></Stack>
                <Stack
                    gap={2} sx={{
                        width: {
                            "xs": "0%", "sm": "0%", "md": "50%", "lg": "50%", "xl": "50%"
                        },
                    }}>
                    <Box sx={{
                        display: { "xs": "none", "sm": "none", "md": "none", "lg": "block", "xl": "block" }
                    }}>
                        <Typography component="box" sx={{
                            margin: "20px",
                            fontSize: { "xs": "1.6rem", "sm": "2rem", "md": "2rem", "xl": "4rem", "lg": "4rem" },
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            color: "#4E3A67",
                            display: "block",
                            lineHeight: "1.2"
                        }}>
                            50K People Have
                            <Typography component="box" sx={{
                                fontSize: { "xs": "1.6rem", "sm": "2rem", "md": "2rem", "xl": "4rem", "lg": "4rem" },
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: "block",
                                width: "max-content",
                                lineHeight: "1.2"
                            }}>
                                Got Jobs Through Us;
                                <Typography component="box" sx={{
                                    fontSize: { "xs": "1.6rem", "sm": "2rem", "md": "2rem", "xl": "4rem", "lg": "4rem" },
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    color: "#4E3A67",
                                    display: "block",
                                    lineHeight: "1.2"
                                }}>
                                    Next is You!
                                </Typography>
                            </Typography>
                        </Typography>
                        <ThemeWebsiteImage imageUrl="/assets/g51.png" imageWidth="500px" ></ThemeWebsiteImage>
                    </Box>

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
                            textAlign: "end",
                            lineHeight: "1.2"

                        }}> Select from
                            <Typography component="box" sx={{
                                fontSize: { "xs": "1.6rem", "sm": "2rem", "md": "2rem", "xl": "4rem", "lg": "4rem" },
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: "block",
                                textAlign: "end",
                                lineHeight: "1.2"

                            }}>
                                the Jobs in Your City
                            </Typography>
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
                        50K People Have Got Jobs Through Us; Next is You!

                    </Typography>
                    <ThemeMobileImage imageUrl="/assets/g52.png" />
                </Box>

                <Box sx={{
                    width: { "xs": "100%", "sm": "100%", "md": "100%", "lg": "50%", "xl": "50%" }
                }}>
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
                                fontSize: { "xs": "26px", "sm": "26px", "md": "40px", "lg": "40px", "xl": "40px" },
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: "block",
                                marginTop: "20px"
                            }}>
                                {step === "0" && "Candidate Details"}
                                {step === "1" && "Work Details"}
                                {step === "2" && "General Details"}
                            </Typography>

                            <Stack direction="row" gap={1} sx={{ margin: "25px 0px", flexWrap: "wrap" }}>

                                {
                                    data2 && data2.map((item) => {
                                        return <FormMenu data={item} />
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
                            margin: "0 auto"

                        }}>
                            <Formik

                                initialValues={{}}

                            >
                                {({ errors, touched, values, setFieldValue }) => (
                                    <Form className="BlueCollarRegistrationForm">
                                        <ThemeFInputDiv>
                                            {
                                                questions && questions.length > 0 && questions.map((item, index) => {
                                                    return (<>
                                                        <ThemeFInputDiv>
                                                            <ThemeLabel LableFor={item.questiontag} LableText={item.question} />
                                                            {getQuestionField(item)}

                                                        </ThemeFInputDiv>
                                                    </>)
                                                })
                                            }

                                        </ThemeFInputDiv >

                                        <Stack direction="row" sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                                            {(step === '0' || step === '1') ?
                                                <ThemeButtonType2 variant="contained" type="button"
                                                    onClick={() => navigate("/candidate-dashboard/blue-collar/" + jobType + "/profile/" + (step === "0" ? 1 : 2))
                                                    }
                                                    sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}
                                                >Next</ThemeButtonType2>
                                                :
                                                <ThemeButtonType2 variant="contained" type="button" onClick={LoginUser} sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}
                                                >Save</ThemeButtonType2>
                                            }



                                        </Stack>

                                    </Form >

                                )}
                            </Formik >


                        </Box>
                    </Box>


                </Box>

            </Stack >
        </Box >

    </>)
}
export default BlueCollarRegistrationForm;