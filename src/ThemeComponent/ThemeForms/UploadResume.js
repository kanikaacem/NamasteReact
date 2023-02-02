import { Box, Stack, Typography, Button, Input, Radio, RadioGroup, FormControlLabel, FormControl, Snackbar, Alert } from "@mui/material";

import { Formik, Field, Form } from "formik";

import DatePicker from "react-datepicker";

import { WorkHistorySchema } from "../../Validation/CandidateValidation";

import HeaderSec from "../Common/HeaderSec";
import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from '../../ThemeComponent/Common/Error';
import ButtonType1 from "../../ThemeComponent/Common/ButtonType1";
import ButtonType2 from "../../ThemeComponent/Common/ButtonType1";
import ButtonType3 from "../Common/ButtonType3";

import { SocialBox, ThemeButtonType2, ThemeButtonType3, ThemeFInputDiv } from "../../utils/Theme";
import { Navigate } from 'react-router-dom';

import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

const UploadResume = ({ setActiveStep }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const api_url = useSelector(state => state.api_url);
    let userid = useSelector(state => state.candidateInfo);

    if (userid != '') {
        userid = JSON.parse(userid);
        userid = userid.data;
    }

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [file, setFile] = useState();

    const handleClose = (event) => {
        setFormSubmitted(false);
    };

    const uploadFile = async (event) => {

        //     event.preventDefault();
        // console.log(file);
        // let file = event.target.files[0];
        // let formData = new FormData();
        // formData.append('image', file);
        // formData.append(userid, "63a6b58725229612746e1cf3");

        // let response = await fetch(api_url + "/api/users/uploadresume", {
        //     method: "POST",
        //     body: formData,
        // })
        // if (response.ok) {
        //     response = await response.json();
        //     console.log(response);
        //     setFormSubmitted(true);
        // window.location.href = "https://localhost:3000/employer-login";
        // }
        // for (var pair of formData.entries()) {
        //     console.log(pair[0] + ', ' + pair[1]);
        // }
        // console.log(formData);

    }

    const goToDashboard = async () => {
        dispatch({ type: 'LOGIN', payload: JSON.parse(localStorage.getItem("user")) });
        // let response = await fetch(api_url + "/api/users/getuserbyid", {
        //     method: "POST",
        //     headers: {
        //         'Access-Control-Allow-Origin': '*',
        //         'Content-Type': 'application/json; charset=UTF-8'
        //     },
        //     body: JSON.stringify({
        //         userid: userid
        //     }),
        // })
        // if (response.ok) {
        //     response = await response.json();
        //     console.log(response);
        //     dispatch({ type: 'LOGIN', payload: JSON.stringify(response.data) });
        //     // setFormSubmitted(true);
        //     // window.location.href = "https://localhost:3000/employer-login";
        // }
    }

    return (<>
        {isLoggedIn == 'true' && <Navigate to="/candidate-dashboard"></Navigate>}

        <Snackbar
            open={formSubmitted}
            autoHideDuration={6000} onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Your Resume is uploaded
            </Alert>

        </Snackbar>

        <Box className="WorkHistoryPage"
            sx={{
                height: "100vh",
                background: "#FFFFFF",
                backgroundRepeat: " no-repeat",
                backgroundPosition: "left 100px bottom 0px"
            }}>
            <Stack className="WorkHistorypageWrapper"
                sx=
                {{
                    padding: "20px 50px",
                    gap: "24px"
                }}>
                <HeaderSec
                    color="black"
                    border="2px solid #8E8E8E" />
                <Stack alignItems="flex-end" sx={{ position: "relative" }}>


                    <Box sx={{
                        position: "absolute",
                        top: "111px",
                        left: "152px",
                        width: "673px",
                        zIndex: "78798"
                    }}
                    >
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

                    <Box sx={{
                        height: "31px",
                        width: "505px",
                        left: "148px",
                        top: "241px",
                        borderRadius: "0px",
                        background: "#FFD5C9",
                        position: "absolute"
                    }}></Box>
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
                            Work History
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


                            <Stack direction="row" gap={1} alignItems="center" justifyContent="center" sx={{ opacity: "0.5" }} >
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

                            <Stack direction="row" gap={1} alignItems="center" justifyContent="center" >
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
                        position: "absolute",
                        top: "197px",
                        padding: "30px 50px",
                        paddingBottom: "100px"


                    }}>
                        <form>
                            <Box className="input-item">
                                <ThemeLabel LableFor="upload_resume" LableText="Upload Resume" />
                                <Box sx={{ margin: "20px 0px" }}>
                                    <input type="file" name="upload_resume" id="upload_resume" onChange={uploadFile} style={{ display: "none" }} />
                                    <ButtonType3 ButtonText="Upload File" imageURL="/assets/document.png" ClickEvent={() => document.getElementById("upload_resume").click()}></ButtonType3>

                                </Box>
                            </Box>

                            <Stack sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                                <ThemeButtonType2 variant="contained" type="button" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}
                                    onClick={goToDashboard}>Go To Dashboard</ThemeButtonType2>

                            </Stack>

                        </form>

                        {/* <Formik

                            initialValues={defaultValue}
                            validationSchema={WorkHistorySchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched, values, setFieldValue }) => (
                                <Form className="workHistoryForm">
                                    <ThemeFInputDiv >
                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="company_name" LableText="Company Name" />
                                            <Field
                                                error={errors.company_name && touched.company_name}
                                                as={TextField}
                                                id="company_name"
                                                placeholder="Enter Company Name" type="text" name="company_name" fullWidth />
                                            {errors.company_name && touched.company_name && <Error text={errors.company_name} />}

                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="designation" LableText="Designation" />
                                            <Field
                                                error={errors.designation && touched.designation}
                                                as={TextField}
                                                id="designation"
                                                placeholder="Enter Designation" type="text" name="designation" fullWidth />
                                            {errors.designation && touched.designation && <Error text={errors.designation} />}

                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="department" LableText="Department" />
                                            <Field
                                                error={errors.department && touched.department}
                                                as={TextField}
                                                id="department"
                                                placeholder="Enter department" type="text" name="department" fullWidth />
                                            {errors.department && touched.department && <Error text={errors.department} />}

                                        </ThemeFInputDiv>

                                        <Stack direction="row" gap={2}>
                                            <ThemeFInputDiv sx={{ width: "370px" }}>
                                                <ThemeLabel LableFor="starting_year" LableText="Start Date" />
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>

                                                    <DatePicker

                                                        id="starting_year"
                                                        value={startingDate}
                                                        onChange={(newValue) => {
                                                            setStartingDate(newValue);
                                                            setFieldValue("starting_year", newValue)
                                                        }}
                                                        renderInput={(params) => <TextField

                                                            {...params} />}
                                                    />
                                                </LocalizationProvider>
                                                {errors.starting_year && touched.starting_year && <Error text={errors.starting_year} />}

                                            </ThemeFInputDiv>

                                            <ThemeFInputDiv sx={{ width: "370px" }}>
                                                <ThemeLabel LableFor="ending_year" LableText="Last Date" />
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>

                                                    <DatePicker

                                                        id="ending_year"
                                                        value={endingDate}
                                                        onChange={(newValue) => {
                                                            setEndingDate(newValue);
                                                            setFieldValue("ending_year", newValue)
                                                        }}
                                                        renderInput={(params) => <TextField

                                                            {...params} />}
                                                    />
                                                </LocalizationProvider>

                                                {errors.ending_year && touched.ending_year && <Error text={errors.ending_year} />}

                                            </ThemeFInputDiv>
                                        </Stack>

                                        <Stack direction="row" sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                                            <ThemeButtonType3 variant="outlined" type="submit"
                                                sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}
                                            > Continue</ThemeButtonType3>
                                            <ThemeButtonType2 variant="contained" type="button" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}
                                                onClick={() => {
                                                    setActiveStep(3)
                                                }}>Next Step</ThemeButtonType2>

                                        </Stack>
                                    </ThemeFInputDiv>
                                </Form>

                            )}
                        </Formik> */}




                    </Box>

                </Stack>
            </Stack>
        </Box>

        {/* <Stack direction="row" gap={2}>
            <Box sx={{ width: "40%" }}></Box>
            <Box sx={{
                width: "60%",
                margin: "50px",
                borderRadius: "10px",
                padding: "30px",
                background: "#FFFFFF",
                borderTop: "4px solid #2B1E44"
            }}>
                <Typography component="h3" sx={{ fontSize: "25px", color: "#2B1E44", marginBottom: "20px" }}>
                    Upload Resume
                </Typography>
                <form>
                    <Box className="input-item">
                        <ThemeLabel LableFor="upload_resume" LableText="Upload Resume" />
                        <Box sx={{ margin: "20px 0px" }}>
                            <input type="file" name="upload_resume" id="upload_resume" onChange={uploadFile} />
                        </Box>
                    </Box>

                </form>
                <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                    <Button variant="contained" sx={{ background: "#2B1E44" }} onClick={goToDashboard} >Go to Dashboard</Button>
                </Box>

            </Box>
        </Stack> */}

    </>)
}

export default UploadResume;
