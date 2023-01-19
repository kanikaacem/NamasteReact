import { postRequest } from "../../utils/ApiRequests";
import { saveCandidateUserNameAndPasswordURL } from "../../utils/ApiUrls";

import { Box, Stack, Typography, TextField } from "@mui/material";
import { Formik, Field, Form } from "formik";

import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from 'react-redux';

import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';


import { CandidateRegistrationSchema } from "../../Validation/CandidateValidation";
import { SocialBox, ThemeButtonType2, ThemeButtonType3, ThemeFInputDiv } from "../../utils/Theme";
import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import { socialLogin } from "../../utils/Data";

import HeaderSec from "../../ThemeComponent/Common/HeaderSec";
import Error from '../../ThemeComponent/Common/Error';
import { ThemeButtontype1 } from "../../utils/Theme";

import { useDispatch } from "react-redux";
const CandidateRegistration = () => {
    const api_url = useSelector(state => state.api_url);
    const CandidateRegistration = useSelector(state => state.CandidateRegistration);

    const dispatch = useDispatch();
    const defaultValue = {
        email_id: "",
        password: "",
        confirm_password: "",
    }

    // const uploadProfileImage = (files) => {
    //     let file_type = files.name.split('.').pop().toLowerCase();
    //     let file_size = files.file.size;
    //     if (file_type != 'png' && file_type != 'jpeg' && file_type != 'jpg')
    //         setprofileImageError("File type should be JPEG and PNG.")
    //     else if (file_size > 3000000) {
    //         setprofileImageError("File Size should be less than and equal to 3MB.")
    //     }
    //     else {
    //         setprofileImageError("");
    //         setprofileImage(files.base64);
    //     }
    // }

    // const UserRegistration = async (event) => {
    //     event.preventDefault();
    //     let full_name = event.target.elements.full_name.value;
    //     let email_id = event.target.elements.email_id.value;
    //     let password = event.target.elements.password.value;
    //     let permanant_address = event.target.elements.permanant_address.value;
    //     let current_address = event.target.elements.current_address.value;
    //     let date_of_birth = event.target.elements.date_of_birth.value;
    //     let martial_status = event.target.elements.martial_status.value;
    //     let gender = event.target.elements.gender.value;
    //     let mobile_number = event.target.elements.mobile_number.value;

    //     if (full_name == "") setfullNameError("Full Name is required.");
    //     if (email_id == "") setemailIdError("Email Id is required");
    //     if (password == "") setpasswordError("Password is required.");
    //     if (permanant_address == "") setpermanantAddressError("Permanant Address is required.");
    //     if (current_address == "") setcurrentAddressError("Current Address is required");
    //     if (date_of_birth == "") setdobError("Date of Birth is required.");
    //     if (martial_status == "") setmatrialStatusError("Martial Status is required");
    //     if (gender == "") setgenderError("Gender is required");
    //     if (mobile_number == "") setMobileNumberError("Mobile Number is required");

    //     if (full_name != ''
    //         && email_id != ''
    //         && password != ''
    //         && permanant_address != ''
    //         && current_address != ''
    //         && date_of_birth != ''
    //         && mobile_number != ''
    //         && martial_status != '' && gender != '' && profileImage != '') {
    //         let response = await fetch(api_url + "/api/users/userpost", {
    //             // Adding method type
    //             method: "POST",
    //             // Adding body or contents to send
    //             headers: {
    //                 'Access-Control-Allow-Origin': '*',
    //                 'Content-Type': 'application/json; charset=UTF-8'
    //             },
    //             body: JSON.stringify({
    //                 fullname: full_name,
    //                 email: email_id,
    //                 mobile: mobile_number,
    //                 password: password,
    //                 martial_status: martial_status,
    //                 gender: gender,
    //                 type: "candidate",
    //                 address: permanant_address,
    //                 curraddress: current_address,
    //                 image: profileImage

    //             }),
    //         })
    //         if (response.ok) {
    //             response = await response.json();
    //             // console.log(response);
    //             window.location.href = "/login";
    //         }

    //     }
    // }

    // const GoogleSignupResolve = async ({ provider, data }) => {
    //     console.log(data);
    // }


    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    // console.log(file);
    // let file_data = document.getElementById("file").files[0];

    // const reader = new FileReader();
    // reader.readAsDataURL(file_data);
    // console.log(reader);

    // console.log(file_data);
    // const fileReader = new FileReader();
    // const file = event.target.files[0];
    // fileReader.readAsDataURL(file_data);

    // // fileReader.onloadend = () => {
    // //     const content = fileReader.result;
    // //     if (content) {
    // //         setFile(content);
    // //     }
    // // }
    // console.log(fileReader);
    // let formData = new FormData();
    // formData = {
    //     file: file_data
    // }

    // let response = await fetch(api_url + "/single", {
    //     // Adding method type
    //     method: "POST",

    //     // Adding body or contents to send
    //     body: formData,
    // })
    // if (response.ok) {
    //     response = await response.json();
    //     console.log(response);
    //     // window.location.href = "/login";
    // }
    // console.log(formData);
    // console.log(event.target.elements);
    // }

    const handleSubmit = async (values, { setFieldError }) => {
        let CandidateLoginForm = new FormData();
        CandidateLoginForm = {
            email: values.email_id,
            password: values.password
        }

        let response = await postRequest(saveCandidateUserNameAndPasswordURL, CandidateLoginForm);
        // console.log(response.status);

        if (response.status == '1') {
            localStorage.setItem("user_registration_token", response);
            dispatch({ type: 'USER_REGISTRATION', payload: JSON.stringify(response) });
        }
        else {
            setFieldError("email_id", "Email Id Already Present.");
        }
    }
    return (<>
        {CandidateRegistration == true && <Navigate to="/profile/0"></Navigate>}

        <Box className="CandidateLoginPage"
            sx={{
                height: "100vh",
                background: "#2B1E44",
                backgroundImage:
                    "url('../assets/g50.png')",
                backgroundRepeat: " no-repeat",
                backgroundPosition: " left 4px bottom 0px"

            }}>
            <Stack className="CandidateLoginPageInnerWrapper"
                sx=
                {{
                    padding: "20px 50px",
                    gap: "24px"
                }}>
                <HeaderSec
                    border="2px solid rgba(255, 255, 255, 0.25)"
                    color="#FFFFFF"
                    background="#432C60" />
                <Stack alignItems="flex-end" sx={{ position: "relative" }}>

                    <Box sx={{
                        position: "absolute",
                        top: "90px",
                        left: "204px",
                        width: "800px"
                    }}>
                        <Typography component="box" sx={{
                            fontSize: "64px",
                            fontFamily: "Work Sans, sans-serif",
                            fontWeight: "700",
                            color: "#FC9A7E",
                            display: "block",
                            lineHeight: "40px"
                        }}>
                            Choose a job you love,

                            <Typography component="box" sx={{
                                fontSize: "64px",
                                fontFamily: "Work Sans, sans-serif",
                                fontWeight: "700",
                                color: "#FFFFFF",
                                display: "block",
                                margin: "10px 0px",
                                lineHeight: "1.0 !important"
                            }}>
                                and you never have to
                                work a day in your life

                            </Typography>

                        </Typography>


                    </Box>

                    <Stack sx={{
                        width: "449px",
                        height: "730px",
                        background: "#FBF8FF",
                        boxShadow: "0px 4px 40px rgba(252, 154, 126, 0.3)",
                        borderRadius: "19px",
                        padding: "50px 100px"
                    }}>
                        <Typography component="box" sx={{ fontSize: "20px", fontFamily: "Work Sans, sans-serif" }}>
                            Welcome Guest,
                        </Typography>
                        <Typography component="box" sx={{ fontSize: "40px", fontFamily: "Work Sans, sans-serif", fontWeight: "700", marginBottom: "30px" }}>
                            Sign Up for JobsYahan
                        </Typography>

                        <Formik

                            initialValues={defaultValue}
                            validationSchema={CandidateRegistrationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched }) => (
                                <Form className="CandidateRegistration">
                                    <ThemeFInputDiv>
                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="email_id" LableText="Email Address *" />
                                            <Field
                                                error={errors.email_id && touched.email_id}
                                                as={TextField}
                                                id="email_id"
                                                placeholder="Enter Email ID/ Username" type="text" name="email_id" fullWidth />
                                            {errors.email_id && touched.email_id && <Error text={errors.email_id} />}

                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="password" LableText="Password *" />
                                            <Field
                                                error={errors.password && touched.password}
                                                id="password"
                                                as={TextField}
                                                placeholder="Enter Password" type="password" name="password" fullWidth />
                                            {errors.password && touched.password && <Error text={errors.password} />}


                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="confirm_password" LableText="Confirm Password *" />
                                            <Field
                                                error={errors.confirm_password && touched.confirm_password}
                                                id="confirm_password"
                                                as={TextField}
                                                placeholder="Enter Confirm Password" type="password" name="confirm_password" fullWidth />
                                            {errors.confirm_password && touched.confirm_password && <Error text={errors.confirm_password} />}


                                        </ThemeFInputDiv>
                                    </ThemeFInputDiv>

                                    <Stack sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                                        <ThemeButtonType2 variant="contained" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>Continue</ThemeButtonType2>
                                    </Stack>

                                </Form>
                            )
                            }
                        </Formik >

                        {/* <Formik
                            initialValues={defaultValue}
                            validationSchema={candidateLoginValidationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched }) => (
                                <Form className="candidateLogin">

                                    <ThemeFInputDiv>
                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="email_address" LableText="Email Address" />
                                            <Field
                                                error={errors.email_address && touched.email_address}
                                                as={TextField}
                                                id="email_address"
                                                placeholder="Enter Email ID/ Username" type="text" name="email_address" fullWidth />
                                            {errors.email_address && touched.email_address && <Error text={errors.email_address} />}

                                        </ThemeFInputDiv>

                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="password" LableText="Password" />
                                            <Field
                                                error={errors.password && touched.password}
                                                id="password"
                                                as={TextField}
                                                placeholder="Enter Password" type="password" name="password" fullWidth />
                                            {errors.password && touched.password && <Error text={errors.password} />}


                                        </ThemeFInputDiv>
                                    </ThemeFInputDiv>

                                    <Stack sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                                        <ThemeButtonType2 variant="contained" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>Log In</ThemeButtonType2>
                                        <ThemeButtonType3 variant="outlined"
                                            type="button" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}
                                            onClick={() => {
                                                window.location.href = window.location.origin + "/candidate-register"
                                            }}
                                        >Sign up</ThemeButtonType3>
                                    </Stack>
                                </Form>
                            )}
                        </Formik> */}


                        {/* <Typography component="span" sx={{ fontSize: "16px", display: "flex" }}>
                            <hr style={{ width: "150px", height: "0px", color: "#DAD9D9" }}></hr> or login in with <hr style={{ width: "150px", height: "0px" }}></hr>
                        </Typography>
                        <Stack direction="row" gap={3} justifyContent="center">
                            {
                                socialLogin.map((item) => {
                                    return (<>
                                        <SocialBox key={item.id}>
                                            <img src={item.image_url} alt={item.value} />
                                        </SocialBox>
                                    </>)
                                })
                            }
                        </Stack> */}
                    </Stack>
                </Stack>
            </Stack>

        </Box>

        {/* <Box className="CandidateRegistrationPage" > */}

        {/* {
                <>
                    <Box sx={{
                        width: "60px",
                        position: "absolute",
                        top: "2%",
                        left: "2%",
                        zIndex: "34",
                        color: "#2B1E44"
                    }}>
                        <Link to="/">
                            <img src={window.location.origin + "/assets/companyLogo.png"} width="100%" alt="companyLogo" />
                        </Link>
                    </Box>
                    <Box sx={{
                        width: "30%",
                        position: "absolute",
                        top: "40%",
                        left: "5%",
                        zIndex: "34",
                        color: "#2B1E44"
                    }}>
                        <Typography component="H1"
                            sx={{ fontSize: "30px", fontWeight: "700" }}>
                            Choose a job you love, and you never have to work a day in your life
                        </Typography>
                    </Box>
                    <Stack direction={{ xs: 'column', sm: 'row' }} gap={4} sx={{ height: "100vh" }} >
                        <Stack
                            alignItems="center"
                            justifyContent="center"
                            sx={{
                                width: { md: "40%", sm: "100%" },
                                backgroundImage: `url("./assets/PGBForm2.png")`,
                                position: "relative",
                                opacity: "0.5"
                            }}>
                        </Stack>
                        <Box sx={{ width: { md: "60%", sm: "100%" } }} >
                            <Box
                                sx={{
                                    borderRadius: "10px",
                                    padding: "27px 40px 20px 85px",
                                    // borderTop: "5px solid #2B1E44",
                                    background: "#FFFFFF",
                                    // minHeight: "400px"
                                    margin: { md: "100px", sm: "0px" }

                                }}>
                                <Typography component="h3" sx={{ fontSize: "30px", fontWeight: "600", color: "#2B1E44" }}>
                                    Welcome Guest,
                                </Typography>
                                <Typography component="h3" sx={{ fontSize: "50px", color: "#2B1E44" }}>
                                    Sign Up for JobYahan
                                </Typography>
                            </Box>
                            <Box sx={{
                                width: "80%",
                                margin: "0 auto",
                            }}>
                                <Formik

                                    initialValues={defaultValue}
                                    validationSchema={CandidateRegistrationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ errors, touched }) => (
                                        <Form className="CandidateRegistration">
                                            <Stack direction="column" gap={2}>
                                                <Box className="input-item">
                                                    <ThemeLabel LableFor="email_id" LableText="Email Address" />
                                                    <Field
                                                        variant="standard"
                                                        error={errors.email_id && touched.email_id}
                                                        as={TextField}
                                                        id="email_id"
                                                        placeholder="Enter Email ID/ Username" type="text" name="email_id" fullWidth />
                                                    {errors.email_id && touched.email_id && <Error text={errors.email_id} />}

                                                </Box>

                                                <Box className="input-item">
                                                    <ThemeLabel LableFor="password" LableText="Password" />
                                                    <Field
                                                        variant="standard"
                                                        error={errors.password && touched.password}
                                                        id="password"
                                                        as={TextField}
                                                        placeholder="Enter Password" type="password" name="password" fullWidth />
                                                    {errors.password && touched.password && <Error text={errors.password} />}


                                                </Box>

                                                <Box className="input-item">
                                                    <ThemeLabel LableFor="confirm_password" LableText="Confirm Password" />
                                                    <Field
                                                        variant="standard"
                                                        error={errors.confirm_password && touched.confirm_password}
                                                        id="confirm_password"
                                                        as={TextField}
                                                        placeholder="Enter Confirm Password" type="password" name="confirm_password" fullWidth />
                                                    {errors.confirm_password && touched.confirm_password && <Error text={errors.confirm_password} />}


                                                </Box>
                                            </Stack>
                                            <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                                                {/* <ButtonType1 ButtonText="Continue" /> */}
        {/* <ThemeButtontype1 type="submit" variant="contained"> Continue</ThemeButtontype1>
        </Box>
    </Form>
    )
}
                                </Formik >
                            </Box >
                        </Box >
                    </Stack ></>
            } * /} */}

        {/* <Container sx={{
                width: "100%",
                height: "100vh",
                background: "#FAFAFA"
            }}>
                <Stack direction={{ xs: 'column', sm: 'row' }}
                    gap={2} sx={{ height: "inherit" }}>

                    <Box sx={{ width: { md: "50%", sm: "100%" } }}>
                        <Box
                            sx={{
                                borderRadius: "20px",
                                boxShadow: " 0 20px 54px 0 rgb(0 0 0 / 9%)",
                                border: " 2px solid #DFE6ED",
                                border: "1px solid #8892A3",
                                borderTop: "5px solid #2B1E44",
                                padding: "27px 40px 20px 35px",
                                background: "#FFFFFF",
                                minHeight: "400px"
                            }}>
                            <Typography component="h3" sx={{ fontSize: "30px", fontWeight: "600", textAlign: "center", color: "#2B1E44", margin: "30px 0px" }}>
                                Find a Job and grow your Career
                            </Typography>
                            <Formik

                                initialValues={defaultValue}
                                validationSchema={UserRegistrationValidationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ errors, touched }) => (
                                    <Form >

                                        <Box className="input-item">
                                            <ThemeLabel LableFor="full_name" LableText="Full Name" />

                                            <Field
                                                error={errors.full_name && touched.full_name}
                                                variant="standard"
                                                as={TextField}
                                                id="full_name"
                                                placeholder="Enter your Full Name" type="text" name="full_name" fullWidth />

                                            <Typography component="span" sx={{ fontSize: "12px", color: "red" }}>
                                                <ErrorMessage className="error" name="full_name" />
                                            </Typography>

                                        </Box>

                                        <Box className="input-item">
                                            <ThemeLabel LableFor="email_id" LableText="Email Address" />

                                            <Field
                                                error={errors.email_id && touched.email_id}
                                                variant="standard"
                                                as={TextField}
                                                id="email_id"
                                                placeholder="Enter Email ID/ Username" type="text" name="email_id" fullWidth />
                                            <Typography component="span" sx={{ fontSize: "12px", color: "red" }}>
                                                <ErrorMessage className="error" name="email_id" />
                                            </Typography>

                                        </Box>

                                        <Box className="input-item">
                                            <ThemeLabel LableFor="password" LableText="Password" />

                                            <Field
                                                error={errors.password && touched.password}
                                                variant="standard"
                                                as={TextField}
                                                id="password"
                                                placeholder="Enter your password" type="password" name="password" fullWidth />
                                            <Typography component="span" sx={{ fontSize: "12px", color: "red" }}>
                                                <ErrorMessage className="error" name="password" />
                                            </Typography>

                                        </Box>

                                        <Box className="input-item">
                                            <ThemeLabel LableFor="mobile_number" LableText="Mobile Number" />

                                            <Field
                                                error={errors.mobile_number && touched.mobile_number}
                                                variant="standard"
                                                as={TextField}
                                                id="mobile_number"
                                                placeholder="Enter your Mobile Number" type="text" name="mobile_number" fullWidth />
                                            <Typography component="span" sx={{ fontSize: "12px", color: "red" }}>
                                                <ErrorMessage className="error" name="mobile_number" />
                                            </Typography>

                                        </Box>

                                        < Box className="input-item">
                                            <ThemeLabel LableFor="resume_upload" LableText="Upload Resume" />

                                            <Field
                                                style={{ display: "none", outline: "none" }}
                                                as={TextField}
                                                id="file"
                                                type="file" name="file" fullWidth />

                                            <ButtonType2 ButtonText="Upload Resume" ClickEvent={() => document.getElementById("file").click()}></ButtonType2>
                                            <Typography component="span" sx={{ fontSize: "12px", color: "red" }}>
                                                <ErrorMessage className="error" name="file" />
                                            </Typography>

                                        </Box>

                                        <Box>
                                            <Stack gap={3}>
                                                <ThemeLabel LableFor="mobile_number" LableText="Mobile Number" />

                                                <Field

                                                    variant="standard"
                                                    as={TextField}
                                                    id="mobile_number"
                                                    placeholder="Enter your Mobile Number" type="radio" name="user_experience" />

                                                <ThemeLabel LableFor="mobile_number" LableText="Mobile Number" />

                                                <Field
                                                    variant="standard"
                                                    as={TextField}
                                                    id="mobile_number"
                                                    placeholder="Enter your Mobile Number" type="radio" name="user_experience" />


                                            </Stack>
                                        </Box>


                                        <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                                            <ButtonType1 ButtonText="Register Now" />
                                        </Box>
                                    </Form>

                                )}
                            </Formik>
                            <form onSubmit={handleSubmit} encType="multipart/form-data" >
                                <input type="file" name="file" id="file" />
                                <button type='submit'> Register</button>
                            </form>


                        </Box>
                    </Box>
                    <RegistrationSeperator />
                    <Box sx={{ width: { md: "30%", sm: "100%" } }}>
                        <Box
                            sx={{
                                borderRadius: "20px",
                                padding: "27px 40px 20px 35px",
                                background: "#FFFFFF",
                                borderTop: "5px solid #2B1E44",
                            }}>
                            <Typography component="h5" sx={{ fontWeight: "600", textAlign: "center", color: "#2B1E44", margin: "30px 0px" }}>
                                Continue with Google
                            </Typography>

                            <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                                <LoginSocialGoogle
                                    client_id={CLIENT_ID}
                                    scope="openid profile email"
                                    discoveryDocs="claims_supported"
                                    access_type="offline"
                                    onResolve={GoogleSignupResolve}
                                    onReject={err => {
                                        console.log(err);
                                    }}
                                >
                                    <button type="button" class="signup-with-google-btn" >
                                        Sign up with Google
                                    </button>

                                </LoginSocialGoogle>

                            </Box>




                        </Box>
                    </Box>

                </Stack>

            </Container > */}
        {/* <div className="user-register-div">
                <div className="user-registration-wrapper" style={{ minWidth: "35%" }}>
                    <div className="info-title">Find a job & grow your career</div>

                    <form style={{ width: '100%' }} onSubmit={UserRegistration}>

                        <div className="input-item">
                            <input placeholder="Enter your FullName" type="text" name="full_name"
                            ></input>
                            {fullNameError && <Error text={fullNameError} />}
                        </div>

                        <div className='input-item'>
                            <label for="resume">Profile Image</label>
                            <FileBase64 id="upload_file"
                                onDone={uploadProfileImage} />
                            {profileImageError && <Error text={profileImageError} />}
                        </div>

                        <div className="input-item">
                            <input placeholder="Enter your EmailId" type="email" name="email_id"
                            ></input>
                            {emailIdError && <Error text={emailIdError} />}
                        </div>

                        <div className="input-item">
                            <input placeholder="Enter your Password" type="password" name="password"
                            ></input>
                            {passwordError && <Error text={passwordError} />}
                        </div>

                        <div className="input-item">
                            <input placeholder="Enter your Mobile Number" type="text" name="mobile_number"
                            ></input>
                            {MobileNumberError && <Error text={MobileNumberError} />}
                        </div>

                        <div className="input-item">
                            <textarea placeholder="Enter your Permanant Address" type="text" name="permanant_address" rows="10"
                            ></textarea>
                            {permanantAddressError && <Error text={permanantAddressError} />}
                        </div>

                        <div className="input-item">
                            <textarea placeholder="Enter your Current Address" type="text" name="current_address" rows="10"
                            ></textarea>
                            {currentAddressError && <Error text={currentAddressError} />}
                        </div>

                        <div className="input-item">
                            <DatePicker
                                placeholderText={'Date of Birth'}
                                name="date_of_birth"
                                selected={startDate} onChange={(date) => setStartDate(date)} />
                            {dobError && <Error text={dobError} />}
                        </div>

                        <div className="input-item">
                            <input placeholder="Enter your Martial Status" type="text" name="martial_status"
                            ></input>
                            {matrialStatusError && <Error text={matrialStatusError} />}
                        </div>

                        <div >
                            <input type="radio" id="male" name="gender" value="male"></input>
                            <label for="male">Male</label>
                            <input type="radio" id="female" name="gender" value="female"></input>
                            <label for="female">Female</label>
                            {genderError && <Error text={genderError} />}
                        </div>

                        <Button style={{ borderRadius: '10px', background: '#2B1E44 ', display: 'block', margin: '0 auto' }} variant="contained" type="submit" >Submit</Button>
                    </form>
                </div>
            </div> */}
        {/* </Box > */}
    </>)
}
export default CandidateRegistration;