import { Box, Stack, Typography, Container } from "@mui/material";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import HeaderSec from "../../ThemeComponent/Common/HeaderSec";

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


    const [userId, setUserId] = useState();

    return (<>

        {isLoggedIn == 'true' && <Navigate to="/employer-dashboard"></Navigate>}

        {!companyInfoForm ?
            <Box className="EmployerRegisterPage"
                sx={{
                    height: "100vh",
                    background: !companyInfoForm ? "#2B1E44" : "#FFFFFF",
                    backgroundImage: !companyInfoForm &&
                        "url('../assets/g10.png')",
                    backgroundRepeat: " no-repeat",
                    backgroundPosition: !companyInfoForm ? " left 0px bottom 0px" : "left 100px bottom 0px"
                }}>
                <Stack className="EmployerRegisterPageWrapper"
                    sx=
                    {{
                        padding: "20px 50px",
                        gap: "24px"
                    }}>
                    <HeaderSec
                        border="2px solid rgba(255, 255, 255, 0.25)"
                        color="#FFFFFF"
                        background="#432C60"
                    />
                    <Stack alignItems="flex-end" sx={{ position: "relative" }}>

                        <Box sx={{
                            position: "absolute",
                            top: "236px",
                            left: "204px"
                        }}>
                            <Typography component="box" sx={{
                                fontSize: "36px",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#FFFFFF",
                                display: "block",
                                marginTop: "20px"
                            }}>
                                Direct Hiring App for
                            </Typography>

                            <Typography component="box" sx={{
                                fontSize: "64px",
                                fontFamily: "Work Sans, sans-serif",
                                fontWeight: "700",
                                color: "#FC9A7E",
                                display: "block",
                                lineHeight: "40px"
                            }}>
                                Founders, Business

                                <Typography component="box" sx={{
                                    fontSize: "64px",
                                    fontFamily: "Work Sans, sans-serif",
                                    fontWeight: "700",
                                    color: "#FC9A7E",
                                    display: "block"
                                }}>
                                    Owners and HRs.
                                </Typography>
                            </Typography>
                        </Box>

                        <Stack gap={2} sx={{
                            width: "449px",
                            height: "730px",
                            background: "#FBF8FF",
                            boxShadow: "0px 4px 40px rgba(252, 154, 126, 0.3)",
                            borderRadius: "19px",
                            padding: "50px 100px"
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
                                setMobileNumber={setMobileNumber}
                                setVerifyMobileForm={setVerifyMobileForm}
                                setCompanyInfoForm={setCompanyInfoForm} />}

                        </Stack>

                    </Stack>
                </Stack>
            </Box>
            :
            <CompanyInfoForm email={email} userId={userId} mobile={mobile_number}></CompanyInfoForm>
        }
        {/* <Container
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
                        marginLeft: { md: "550px", xs: "0px" },

                    }}>
                        <Box
                            sx={{
                                borderRadius: "10px",
                                padding: "27px 40px 20px 35px",
                                background: "#FFFFFF",
                                margin: { md: "50px 0px", sm: "0px" },
                                minHeight: "400px",
                                borderTop: "5px solid #2B1E44",

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
                                setMobileNumber={setMobileNumber}
                                setVerifyMobileForm={setVerifyMobileForm}
                                setCompanyInfoForm={setCompanyInfoForm} />}

                            {companyInfoForm && <CompanyInfoForm email={email} userId={userId} mobile={mobile_number}></CompanyInfoForm>}

                        </Box>
                    </Box>

                </Stack>

            </Container> */}

    </>)
}
export default EmployerRegister;