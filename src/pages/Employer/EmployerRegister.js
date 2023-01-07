import { Box, Stack, Typography, Container } from "@mui/material";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

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

        {isLoggedIn == 'true' && <Navigate to="/"></Navigate>}

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

            </Container>
        </Box>

    </>)
}
export default EmployerRegister;