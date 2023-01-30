import { postRequest } from "../../utils/ApiRequests";
import { EmployerLoginURL } from "../../utils/ApiUrls";

import { Box, Stack, Typography, Container } from "@mui/material";
import { useState, useEffect, useRef } from "react";
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


    const [email, setEmail] = useState("");
    const [mobile_number, setMobileNumber] = useState("");
    const [userId, setUserId] = useState();
    const [showEmailVerifiedMessage, setShowEmailVerifiedMessage] = useState(false);
    const [isEmailVerified, setIsEmailVerified] = useState(false);

    useEffect(() => {
        let userData = localStorage.getItem("auth_token");
        const getUserData = async () => {
            let response = await postRequest(EmployerLoginURL, {
                email: localStorage.getItem("useremail"),
                password: localStorage.getItem("password")
            })
            if (response.status == '1') {
                console.log(response);
                // console.log(verifyMobileForm)
                if (response.data.isemailverified && !response.data.ismobileverified) {
                    setEmailSignupForm(false);
                    setVerifyMobileForm(true);
                    dispatch({ type: 'USER_REGISTRATION', payload: response });
                }
                else if (response.data.isemailverified && response.data.ismobileverified) {
                    setEmailSignupForm(false);
                    setVerifyMobileForm(false);
                    setCompanyInfoForm(true);
                }
                else {
                    if (localStorage.getItem("useremail")) {
                        setIsEmailVerified(true)
                    }
                }
            }
        }

        (userData != " " && userData != null) && getUserData();

    }, []);
    return (<>

        {isLoggedIn == 'true' && <Navigate to="/employer-dashboard"></Navigate>}

        {!companyInfoForm ?
            <Box className="EmployerRegisterPage"
                sx={{
                    minHeight: "100vh",
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
                                setPasswordGenForm={setPasswordGenForm}
                                isEmailVerified={isEmailVerified} />}

                            {passwordGenForm && <PasswordGenForm email={email}
                                setUserId={setUserId}
                                setPasswordGenForm={setPasswordGenForm}
                                setVerifyMobileForm={setVerifyMobileForm} />}

                            {verifyMobileForm && <VerifyMobileForm
                                email={email}
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

    </>)
}
export default EmployerRegister;