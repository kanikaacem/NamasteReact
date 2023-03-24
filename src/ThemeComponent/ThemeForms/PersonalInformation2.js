import { postRequest } from "../../utils/ApiRequests";
import { PostAnswerCandidate, BlueCollarProfileCompleted } from "../../utils/ApiUrls";

import { Stack, TextField, Box, Typography, Autocomplete } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { ThemeButtonType2, ThemeFInputDiv } from "../../utils/Theme";
import ThemeLabel from "./ThemeLabel";

import { useState } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useParams } from "react-router-dom";
import ThemeMessage from "../Common/ThemeMessage";
import Select from 'react-select';
import { OpenInBrowser } from "@mui/icons-material";

const PersonalInformation2 = ({ questions }) => {
    const { step } = useParams();

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
        // console.log(response);
        if (response.status === "1") {
            localStorage.setItem("action", "login");
            window.location.href = window.location.origin + "/candidate-dashboard";
        }

    }

    function InputDiv({ QuestionItem }
    ) {
        return (<>
            <input
                onKeyUp={(event) => FormSubmit(QuestionItem && QuestionItem.questiontag, event.target.value)
                }
                style={{
                    padding: "13px",
                    borderRadius: "11px",
                    border: "1px solid #EAEAEA",
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
                        borderRadius: "4px",
                        padding: "2px",
                        border: "1px solid #EAEAEA"
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
        const [userSelectedOption, setUserSelectedOption] = useState(null);

        let SelectedOption = [];

        QuestionItem &&
            QuestionItem.questionoption.map(item => {
                SelectedOption.push({
                    label: item,
                    value: item
                })
            });

        return (<>
            <Select
                onChange={(option) => {
                    let optionvalue = [];
                    setUserSelectedOption(option);
                    console.log(option)
                    option.map((item) => {
                        optionvalue.push(item.value);
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
                <MultiSelectQuestion QuestionItem={QuestionItem} />

            case "radio":
                return <RadioQuestion QuestionItem={QuestionItem}
                />
            default:
                return "No field Present"
        }


    }


    return (<>
        {console.log(questions)}
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

                        <Stack direction="row" gap={1} sx={{ margin: "25px 0px" }}>
                            <Stack direction="row" gap={1} alignItems="center" justifyContent="center" sx={{ opacity: step === '0' ? '1' : '0.5' }}>
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


                            <Stack direction="row" gap={1} alignItems="center" justifyContent="center" sx={{ opacity: step === '1' ? '1' : '0.5' }}>
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
                                    Work History
                                </Typography>
                                <Box>
                                    <img width="10px" height="10px" src={window.location.origin + "/assets/FormRightArrow.png"} alt="right_arrow" />
                                </Box>
                            </Stack>


                            <Stack direction="row" gap={1} alignItems="center" justifyContent="center" sx={{ opacity: step === '2' ? '1' : '0.5' }}>
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
                                    Perferences
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
                                                        {getQuestionField(item)}

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