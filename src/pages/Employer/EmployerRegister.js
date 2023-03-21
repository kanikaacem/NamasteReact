// import { postRequest } from "../../utils/ApiRequests";
// import { EmployerLoginURL } from "../../utils/ApiUrls";

import { GetUserInformation } from "../../utils/ApiUrls";
import { getRequestWithToken } from "../../utils/ApiRequests";

import { Box, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import HeaderSec from "../../ThemeComponent/Common/HeaderSec";

import EmailSignupForm from "../../ThemeComponent/ThemeForms/EmailSignupForm";
import PasswordGenForm from "../../ThemeComponent/ThemeForms/PasswordGenForm";
import VerifyMobileForm from "../../ThemeComponent/ThemeForms/VerifyMobileForm";
import CompanyInfoForm from "../../ThemeComponent/ThemeForms/CompanyInfoForm";
import ReactGA from 'react-ga';
ReactGA.initialize('AW-11080443279/AeoHCJzJ2YkYEI_LyKMp');
ReactGA.pageview(window.location.pathname + window.location.search);

const EmployerRegister = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const dispatch = useDispatch();

    const [emailSignupForm, setEmailSignupForm] = useState(true);
    const [passwordGenForm, setPasswordGenForm] = useState(false);
    const [verifyMobileForm, setVerifyMobileForm] = useState(false);
    const [companyInfoForm, setCompanyInfoForm] = useState(false);


    const [email, setEmail] = useState("");
    const [mobile_number, setMobileNumber] = useState("");
    const [registerUser, setRegisterUser] = useState({});
    const [isEmailVerified, setIsEmailVerified] = useState(false);

    const action = useSelector(state => state.action);

    useEffect(() => {
        const getUserData = async () => {
            let response = await getRequestWithToken(GetUserInformation);

            if (response.status == '1') {
                setRegisterUser(response.data);
                // if (response.data.isemailverified && !response.data.ismobileverified) {
                //     setEmailSignupForm(false);
                //     setVerifyMobileForm(true);
                //     dispatch({ type: 'LOGIN_REGISTRATION', payload: response.data });
                // }
                // else if (response.data.isemailverified && response.data.ismobileverified) {
                //     setEmailSignupForm(false);
                //     setVerifyMobileForm(false);
                //     setCompanyInfoForm(true);
                //     if (response.data.company_pancard && !response.data.company_email) {
                //         localStorage.setItem("formpage", 2);
                //     }
                //     else if (response.data.company_email) {
                //         localStorage.setItem("formpage", 3);
                //     }
                //     else {
                //         localStorage.setItem("formpage", 1);
                //     }
                // }
                // else {
                //     if (localStorage.getItem("useremail")) {
                //         setIsEmailVerified(true)
                //     }
                // }
            }
        }

        (localStorage.getItem("auth_token") != " " && localStorage.getItem("auth_token") != null) && getUserData();

    }, []);
    return (<>

        {isLoggedIn == 'true' && registerUser.isEmailVerified && registerUser.ismobileverified && action === "login" && < Navigate to="/employer-dashboard"></Navigate>}

        {
            !companyInfoForm ?
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
                        <Stack direction={{ 'lg': "row", 'md': 'column', 'xs': 'column' }} sx={{ gap: "40px" }}>

                            <Box sx={{
                                width: { 'lg': "60%", 'md': '100%', 'xs': '100%' },
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"

                            }}>
                                <Box
                                    sx={{
                                        width: `calc(60 % - 20px)`,

                                    }}
                                >
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
                                        lineHeight: "1.2"
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
                            </Box>
                            <Stack
                            >
                                <Stack gap={2} sx={{
                                    width: { "lg": "449px", "md": "85%", "xs": "85%" },
                                    height: "730px",
                                    background: "#FBF8FF",
                                    boxShadow: "0px 4px 40px rgba(252, 154, 126, 0.3)",
                                    borderRadius: "19px",
                                    padding: { 'lg': "50px 100px", 'md': '50px', 'xs': '50px' }

                                }}>

                                    {emailSignupForm && <EmailSignupForm
                                        email={email} setEmail={setEmail}
                                        setEmailSignupForm={setEmailSignupForm}
                                        setPasswordGenForm={setPasswordGenForm}
                                        isEmailVerified={isEmailVerified} />}

                                    {passwordGenForm && <PasswordGenForm email={email}
                                        setPasswordGenForm={setPasswordGenForm}
                                        setVerifyMobileForm={setVerifyMobileForm}
                                        setEmailSignupForm={setEmailSignupForm} />}

                                    {verifyMobileForm && <VerifyMobileForm
                                        email={email}
                                        setMobileNumber={setMobileNumber}
                                        setVerifyMobileForm={setVerifyMobileForm}
                                        setCompanyInfoForm={setCompanyInfoForm} />}

                                </Stack>
                            </Stack>


                        </Stack>
                    </Stack>
                </Box>
                :
                <CompanyInfoForm email={email} mobile={mobile_number}></CompanyInfoForm>
        }

    </>)
}
export default EmployerRegister;