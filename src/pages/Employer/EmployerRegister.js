import { Box, Stack, Typography, Container, Snackbar, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { Formik, Field, Form, ErrorMessage } from "formik";


import CustomizeSelect from '../../ThemeComponent/CustomizeSelect';
import FormInformation from '../../ThemeComponent/FormInformation';

import { company_type } from '../../utils/Data';
import { profile_type } from '../../utils/Data';
import { cities } from "../../utils/Data";

import { useState, useRef } from "react";
import { LoginSocialGoogle } from 'reactjs-social-login';
import FileBase64 from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import ThemeInput from "../../ThemeComponent/ThemeInput";
import Loader from "react-js-loader";
import ButtonType1 from '../../ThemeComponent/Common/ButtonType1';

import Header from "../../ThemeComponent/Common/Header";

import EmailSignupForm from "../../ThemeComponent/ThemeForms/EmailSignupForm";
import PasswordGenForm from "../../ThemeComponent/ThemeForms/PasswordGenForm";
import VerifyMobileForm from "../../ThemeComponent/ThemeForms/VerifyMobileForm";
import CompanyInfoForm from "../../ThemeComponent/ThemeForms/CompanyInfoForm";
const CLIENT_ID = "346122009616-5gsdqla59hflt7sg5f8n38valqs6p1q8.apps.googleusercontent.com";

const EmployerRegister = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const api_url = useSelector(state => state.api_url);
    const dispatch = useDispatch();

    const [emailSignupForm, setEmailSignupForm] = useState(true);
    const [passwordGenForm, setPasswordGenForm] = useState(false);
    const [verifyMobileForm, setVerifyMobileForm] = useState(false);
    const [companyInfoForm, setCompanyInfoForm] = useState(false);

    const emailsignupwrapper = useRef(null);
    const passwordgenerationForm = useRef(null);
    const mobileoptverificationwrapper = useRef(null);
    const hrinformationwrapper = useRef(null);
    const companyinformationwrapper = useRef(null);
    const email_regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const mobile_regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;

    const [formErrors, setformErrors] = useState({
        email_error: "",
        mobile_number_error: "",
        otp_error: "",
        otp_resend_error: "",
        otp_information: "",
        full_name_error: "",

    });
    const [passwordError, setPasswordError] = useState("");
    const [confirmpasswordError, setconfirmpasswordError] = useState("");

    const [companyNameError, setcompanyNameError] = useState("");
    const [companyEmailError, setcompanyEmailError] = useState("");
    const [companyMobileError, setcompanyMobileError] = useState("");
    const [companyTypeError, setcompanyTypeError] = useState("");
    const [companyWebsiteError, setcompanyWebsiteError] = useState("");
    const [profileTypeError, setprofileTypeError] = useState("");
    const [companyAddressError, setcompanyAddressError] = useState("");
    const [companyCityError, setcompanyCityError] = useState("");
    const [companyDescriptionError, setcompanyDescriptionError] = useState("");
    const [companyPincodeError, setcompanyPincodeError] = useState("");
    const [companyLogoError, setcompanyLogoError] = useState("");
    const [companyPanImageError, setcompanyPanImageError] = useState("");
    const [companyGSTImageError, setcompanyGSTImageError] = useState("");
    const [companyPanError, setcompanyPanError] = useState("");
    const [companyGSTError, setcompanyGSTError] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile_number, setMobileNumber] = useState("");
    const [resendOtp, setresendOtp] = useState(false);

    const [companyLogo, setcompanyLogo] = useState("");
    const [panImage, setpanImage] = useState("");
    const [gstImage, setgstImage] = useState("");

    const [serverError, setserverError] = useState(false);
    const [serverSideMsg, setserverSideMsg] = useState("");

    const [userId, setUserId] = useState();
    const handleClose = (event) => {
        setserverError(false);
    };

    const action = (
        <>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </>

    );

    return (<>

        {isLoggedIn == 'true' && <Navigate to="/"></Navigate>}
        <Snackbar
            open={serverError}
            autoHideDuration={4000}
            message={serverSideMsg}
            onClose={handleClose}
            action={action}
            anchorOrigin={{
                vertical: "top",
                horizontal: "right"
            }}
        />

        <Header />

        <Box className="EmployerRegisterPage"
            sx={{
                width: "100%",
                minHeight: "100vh",
                background: "#FAFAFA"
            }}>
            <Container
                sx={{
                    height: "inherit"
                }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} gap={2} >
                    <Box sx={{
                        position: "fixed",
                        width: "35%",
                        top: "123px",
                        display: { md: "block", xs: "none" }
                    }} >
                        <Typography component="span" sx={{ display: "block", fontSize: "30px", textAlign: { sm: "center" }, color: "#2B1E44", fontWeight: "600" }}>
                            Direct Hiring App for Founders, Business Owners and HRs.
                        </Typography>

                    </Box>
                    <Box sx={{
                        width: { md: "55%", sm: "100%" },
                        position: "relative",
                        marginLeft: { md: "550px", xs: "0px" }
                    }}>
                        <Box
                            sx={{
                                borderRadius: "10px",
                                padding: "27px 40px 20px 35px",
                                background: "#FFFFFF",
                                margin: { md: "50px 0px", sm: "0px" },
                                minHeight: "400px"
                            }}>
                            {emailSignupForm && <EmailSignupForm
                                email={email} setEmail={setEmail}
                                setEmailSignupForm={setEmailSignupForm}
                                setPasswordGenForm={setPasswordGenForm} />}

                            {passwordGenForm && <PasswordGenForm email={email}
                                setUserId={setUserId}
                                setPasswordGenForm={setPasswordGenForm}
                                setVerifyMobileForm={setVerifyMobileForm} />}

                            {verifyMobileForm && <VerifyMobileForm
                                setVerifyMobileForm={setVerifyMobileForm}
                                setCompanyInfoForm={setCompanyInfoForm} />}

                            {companyInfoForm && <CompanyInfoForm email={email} userId={userId}></CompanyInfoForm>}

                        </Box>
                    </Box>

                </Stack>

            </Container>
        </Box>
        {/* <Box className="employerRegisterPage">
            <Box className="employer-register-page-wrapper"
                sx={{ minWidth: '35%', marginTop: '20px', borderRadius: '10px' }}>

                Hello There is a contne

            </Box> */}
        {/* {requestProgress &&
                    <Box className="loader">
                        <Loader type="spinner-cub" bgColor={"#2B1E44"} color={'#FFFFFF'} size={100} />
                    </Box>
                } */}
        {/* <Box className="employer-register-page-wrapper" style={{ minWidth: '35%', marginTop: '20px', borderRadius: '10px' }}>
                <Box className="info-title">Let's Simplify the Hiring Process</Box>
                <span>Register to find your Next Hire. Get Started Soon.</span>
                <Box className="email-signup-wrapper" ref={emailsignupwrapper}>

                    <form className="email-signup-form" onSubmit={handleEmailSignup}>
                        <div className="input-item">

                            <ThemeInput placeholder="Email" type="text" name="email" />
                            {formErrors.email_error && <Error text={formErrors.email_error}></Error>}
                        </div>
                        <ButtonType1 ButtonText="submit" type="submit" />

                    </form>

                    <div className="signup-with-google">
                        <div>OR </div>

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

                    </div>


                </Box>


                <div className="password-generation-wrapper" ref={passwordgenerationwrapper}>
                    <form className="password-generation-form" onSubmit={handlePasswordGeneration} >
                        <div className="input-item">

                            <ThemeInput placeholder="Password" type="password" name="password" />

                            {passwordError && <Error text={passwordError}></Error>}
                        </div>

                        <div className="input-item">
                            <ThemeInput placeholder="Confirm Password ( 10 characters )" type="password" name="confirm_password" />


                            {confirmpasswordError && <Error text={confirmpasswordError}></Error>}
                        </div>

                        <ButtonType1 ButtonText="submit" type="submit" />

                    </form>
                </div>

                <div className="mobile-opt-verification-wrapper" ref={mobileoptverificationwrapper}>
                    <form className="mobile-opt-verification-form" onSubmit={handleMobileVerfication} >
                        <div className="input-item">
                            <ThemeInput placeholder="Mobile Number" type="text" name="mobile_number"></ThemeInput>

                            {formErrors.mobile_number_error && <Error text={formErrors.mobile_number_error}></Error>}
                            {formErrors.otp_information && <FormInformation text={formErrors.otp_information} />}
                        </div>
                        {resendOtp ?
                            <ButtonType1 ButtonText="submit" type="Resend" />
                            :
                            <ButtonType1 ButtonText="submit" type="Send" />
                        }

                        <hr></hr><hr></hr>

                    </form>

                    <form className="mobile-opt-verification-form" onSubmit={MobileOTPVerification} >
                        <div className="input-item">
                            <ThemeInput placeholder="OTP" type="text" name="otp"></ThemeInput>

                            {formErrors.otp_error && <Error text={formErrors.otp_error}></Error>}
                        </div>

                        <ButtonType1 ButtonText="submit" type="submit" />
                    </form>

                </div>

                <div className="hr-information-wrapper" ref={hrinformationwrapper}>
                    <form className="hr-information-form" onSubmit={handleHrInformation} >
                        <div className="input-item">
                            <input placeholder="Full Name" type="text" name="full_name"
                            ></input>
                            {formErrors.full_name_error && <Error text={formErrors.full_name_error}></Error>}

                        </div>

                        <div className="input-item">
                            <input placeholder="Mobile Number" type="text" name="mobile_number" value={mobile_number}
                                readOnly
                            ></input>
                        </div>

                        <div className="input-item">
                            <input placeholder="Email" type="text" name="email" value={email}
                                readOnly
                            ></input>
                        </div>

                        <div className="input-item">
                            <input placeholder="Password" type="password" name="password" value={password}
                                readOnly
                            ></input>
                        </div>

                        <ButtonType1 ButtonText="submit" type="submit" />
                    </form>
                </div>


                <div className="company-information-wrapper" ref={companyinformationwrapper}>
                    <form className="company-information-form" onSubmit={handleCompanySubmit}>

                        <div className="input-item">
                            <input placeholder="Company Name" type="text" name="company_name"
                            ></input>
                            {companyNameError && <Error text={companyNameError} />}
                        </div>

                        <div className="input-item">
                            <CustomizeSelect placeholder="Company type" data={company_type} id_data="company_type" />
                            {companyTypeError && <Error text={companyTypeError} />}
                        </div>

                        <div className='input-item'>
                            <FileBase64 id="upload_file"
                                onDone={uploadCompanyImage} />
                            {companyLogoError && <Error text={companyLogoError} />}
                        </div>

                        <div className="input-item">
                            <input placeholder="Email" type="text" name="company_email"
                            ></input>
                            {companyEmailError && <Error text={companyEmailError} />}
                        </div>

                        <div className="input-item">
                            <input placeholder="Mobile Number" type="text" name="company_mobile_number"
                            ></input>
                            {companyMobileError && <Error text={companyMobileError} />}
                        </div>

                        <div className="input-item">
                            <CustomizeSelect placeholder="Profile type" data={profile_type} name="profile_type" id_data="profile_type" />
                            {profileTypeError && <Error text={profileTypeError} />}
                        </div>

                        <div className="input-item">
                            <input placeholder="Company Website" type="text" name="company_website"
                            ></input>
                            {companyWebsiteError && <Error text={companyWebsiteError} />}
                        </div>

                        <div className="input-item">
                            <textarea rows="5" cols="50" name="company_description">
                                Company Description
                            </textarea>
                        </div>

                        <div className="input-item">
                            <CustomizeSelect placeholder="City" data={cities} name="city" id_data="company_city" />
                        </div>

                        <div className="input-item">
                            <input placeholder="Pincode" type="text" name="company_pincode"
                            ></input>
                            {companyPincodeError && <Error text={companyPincodeError} />}
                        </div>

                        <div className="input-item">
                            <input placeholder="Address" type="text" name="company_address"
                            ></input>
                            {companyAddressError && <Error text={companyAddressError} />}
                        </div>

                        <div className="input-item">
                            <input type="text" name="pan_number" placeholder="Pan Number" />
                            {companyPanError && <Error text={companyPanError} />}
                        </div>

                        <div className="input-item">
                            <FileBase64
                                onDone={uploadPanImage} />
                            {companyPanImageError && <Error text={companyPanError} />}

                        </div>

                        <div className="input-item">
                            <input type="text" name="gst_number" placeholder="GST Number" />
                            {companyGSTError && <Error text={companyGSTError} />}
                        </div>

                        <div className="input-item">
                            <FileBase64
                                onDone={uploadGstImage} />
                            {companyGSTImageError && <Error text={companyGSTImageError} />}
                        </div>

                        <ButtonType1 ButtonText="submit" type="submit" />
                    </form>
                </div>


            </Box> */}
        {/* </Box> */}
    </>)
}
export default EmployerRegister;