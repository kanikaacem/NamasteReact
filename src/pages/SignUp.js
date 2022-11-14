import Button from '@mui/material/Button';
import Error from '../Component/Error';
import FormInformation from '../Component/FormInformation';
import GoogleIcon from '@mui/icons-material/Google';
import { company_type } from '../utils/Data';
import { profile_type } from '../utils/Data';
import CustomizeSelect from '../Component/CustomizeSelect';
import { useState, useRef, useEffect, useCallback } from "react";
import { LoginSocialGoogle } from 'reactjs-social-login';
import { GoogleLoginButton } from 'react-social-login-buttons';

const CLIENT_ID = '346122009616-bbip3t7tcb1kf75u6q1k8k9pkj6nn1fs.apps.googleusercontent.com';
//const GOOGLE_BUTTON_ID = "google-sign-in-button";

const Signup = () => {
    // const { signIn, profile } = useGapi({
    //     apiKey: "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",
    //     clientId: CLIENT_ID,
    // })

    // const { p, auth } = profile;
    // console.log(p.email) // exampleuser@gmail.com
    // console.log(auth.accessToken)

    const emailsignupwrapper = useRef(null);
    const passwordgenerationwrapper = useRef(null);
    const mobileoptverificationwrapper = useRef(null);
    const hrinformationwrapper = useRef(null);
    const companyinformationwrapper = useRef(null);
    const email_regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const mobile_regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;

    const [formErrors, setformErrors] = useState({
        email_error: "",
        password_error: "",
        mobile_number_error: "",
        otp_error: "",
        otp_resend_error: "",
        otp_information: "",
        full_name_error: "",

    });
    const [companyTypeError, setcompanyTypeError] = useState("");
    const [companyLogoError, setcompanyLogoError] = useState("");
    const [companyWebsiteError, setcompanyWebsiteError] = useState("");
    const [profileTypeError, setprofileTypeError] = useState("");
    const [companyDescriptionError, setcompanyDescriptionError] = useState("");
    const [companyPincodeError, setcompanyPincodeError] = useState("");
    const [companyPanError, setcompanyPanError] = useState("");
    const [companyGSTError, setcompanyGSTError] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile_number, setMobileNumber] = useState("");
    const [resendOtp, setresendOtp] = useState(false);

    const handleEmailSignup = async (event) => {
        event.preventDefault();
        let email = event.target.elements.email.value;
        if (email === '') setformErrors({ email_error: 'Email is required.' });
        else if (!email_regex.test(email)) setformErrors({ email_error: 'Email is not valid.' });
        else {
            let response = await fetch("http://192.168.1.6:8000/api/employer/checkemail", {
                // Adding method type
                method: "POST",
                // Adding body or contents to send
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    email: email
                }),
            })

            if (response.ok) {
                response = await response.json();
                let message = response.message;
                if (message == 1) {
                    setformErrors({ email_error: 'Email is already Present.' });
                }
                else {
                    setformErrors({ email_error: '' });
                    setEmail(email);
                    emailsignupwrapper.current.style.display = 'none';
                    passwordgenerationwrapper.current.style.display = 'block';
                }

            }



        }
    }

    const GoogleSignup = () => {
        //window.location.href = "https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8000%2Fgoogleauth&scope=profile%20email&client_id=346122009616-bbip3t7tcb1kf75u6q1k8k9pkj6nn1fs.apps.googleusercontent.com&service=lso&o2v=2&flowName=GeneralOAuthFlow"
        console.log("I am running");
        fetch('http://192.168.1.6:8000/google', {
            method: "GET",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset=UTF-8'
            }
        });

        // Axios
        //     .get('http://192.168.1.6:8000/google',)
        //     .then(res => {
        //         console.log(res);
        //     })
        //     .catch(err => console.log(err));

    }

    const handlePasswordGeneration = async (event) => {
        event.preventDefault();
        let password = event.target.elements.password.value;
        if (password === '') setformErrors({ password_error: 'Password is required.' });
        else if (password.length < 10) setformErrors({ password_error: 'The length of password is atleast require 10 characters' });
        else {
            setformErrors({ password_error: '' });
            setPassword(password);

            // let response = await fetch("http://192.168.1.6:8000/api/employer/logindetail", {
            //     method: "POST",
            //     headers: {
            //         'Access-Control-Allow-Origin': '*',
            //         'Content-Type': 'application/json; charset=UTF-8'
            //     },
            //     body: JSON.stringify({
            //         email: email,
            //         password: password,

            //     }),
            // })
            // if (response.ok) {
            //     response = await response.json();
            //     console.log(response);
            passwordgenerationwrapper.current.style.display = 'none';
            mobileoptverificationwrapper.current.style.display = "block";
            // }
        }
    }

    const handleMobileVerfication = (event) => {
        event.preventDefault();
        let mobile_number = event.target.elements.mobile_number.value;
        if (mobile_number === '') setformErrors({ mobile_number_error: 'Mobile Number is required' });
        else if (!mobile_regex.test(mobile_number)) setformErrors({ mobile_number_error: 'Please enter a valid mobile number.' });
        else {
            setformErrors({ mobile_number_error: '' });
            setformErrors({ otp_information: "OTP is send .It will be expire in 1 mins" });
            setMobileNumber(mobile_number);
            localStorage.setItem("otp", 1234, 6000);
        }
    }

    const MobileOTPVerification = (event) => {
        event.preventDefault();
        let otp = event.target.elements.otp.value;
        if (otp == '') setformErrors({ otp_error: 'Please Enter the otp' });
        else if (otp != localStorage.getItem("otp")) {
            setformErrors({ otp_error: "Otp is not valid" });
            setresendOtp(true);
        }
        else {
            setresendOtp(false);
            mobileoptverificationwrapper.current.style.display = 'none';
            hrinformationwrapper.current.style.display = 'block';
        }
    }

    const handleHrInformation = (event) => {
        event.preventDefault();
        let full_name = event.target.elements.full_name.value;
        if (full_name == '') setformErrors({ full_name_error: "Name is required" });
        else {
            hrinformationwrapper.current.style.display = 'none';
            companyinformationwrapper.current.style.display = 'block';
        }
    }

    // const initializeGoogleSigIn = () => {
    //     window.gapi.load('auth2', () => {
    //         let auth2 = gapi.auth2.init({
    //             client_id: CLIENT_ID,
    //         })
    //         console.log('api inited')
    //     })
    // }

    const handleCompanySubmit = (event) => {
        event.preventDefault();
        let company_type = event.target.elements.company_type.value;
        let profile_type = event.target.elements.profile_type.value
        let company_description = event.target.elements.company_description.value;
        let company_gst = event.target.elements.company_gst.value;
        let company_pan = event.target.elements.company_pan.value;
        let company_pincode = event.target.elements.company_pincode.value;
        let company_website = event.target.elements.company_website.value;
        let mobile_number = event.target.elements.mobile_number.value;
        if (company_type == null) {
            setcompanyTypeError("Company Type is required");
        }
        if (profile_type == '') {
            setprofileTypeError("Profile Type is required");
        }
        if (company_gst == '') {
            setcompanyGSTError("Company GST is required");
        }
        if (company_pincode == '') {
            setcompanyPincodeError("Company Pincode is required");
        }
        if (company_pan == '') {
            setcompanyPanError("Company Pan is required");
        }
        if (company_website == '') {
            setcompanyWebsiteError("Company website is required");
        }




    }

    const onLoginStart = useCallback(() => {
        alert('login start');
    }, []);

    // const onSuccess = (googleUser) => {
    //     const profile = googleUser.getBasicProfile();
    //     console.log("Name: " + profile.getName());
    // }

    useEffect(() => {
        // window.gapi.client.init({
        //     clientId: CLIENT_ID,
        //     scope: 'email',
        //     plugin_name: 'PLUGIN'
        // })
        // window.gapi.signin2.render(GOOGLE_BUTTON_ID, {
        //     width: 200,
        //     height: 50,
        //     onsuccess: onSuccess
        // });

        passwordgenerationwrapper.current.style.display = 'none';
        mobileoptverificationwrapper.current.style.display = 'none';
        hrinformationwrapper.current.style.display = 'none';
        companyinformationwrapper.current.style.display = 'none';

        // const script = document.createElement('script');
        // script.src = 'https://apis.google.com/js/platform.js';
        // script.onload = () => {
        //     initializeGoogleSigIn();
        // }
        // document.body.appendChild(script);
    }, []);

    return (<>
        <div className="SignupPage">
            <div className="signup-wrapper" style={{ minWidth: '35%', marginTop: '20px', borderRadius: '20px' }}>
                <div className="info-title">Let us Simplify the Hiring Process</div>
                <span>Register to find your Next Hire. Get Started Soon.</span>
                <div className="email-signup-wrapper" ref={emailsignupwrapper}>
                    <form className="email-signup-form" onSubmit={handleEmailSignup}>
                        <div className="input-item">
                            <input placeholder="Email" type="email" name="email"
                            ></input>
                            {formErrors.email_error && <Error text={formErrors.email_error}></Error>}
                        </div>

                        <Button style={{ borderRadius: '10px', background: '#2B1E44' }} variant="contained" type="submit" >Submit</Button>
                    </form>

                    <div className="signup-with-google">
                        <div>OR </div>

                        {/* <div id={GOOGLE_BUTTON_ID} /> */}

                        <LoginSocialGoogle
                            client_id={CLIENT_ID}
                            onLoginStart={onLoginStart}
                            // redirect_uri={REDIRECT_URI}
                            scope="openid profile email"
                            discoveryDocs="claims_supported"
                            access_type="offline"
                            onResolve={({ provider, data }) => {
                                console.log(data);
                                console.log(provider);
                                // setProvider(provider);
                                // setProfile(data);
                            }}
                            onReject={err => {
                                console.log(err);
                            }}
                        >
                            <GoogleLoginButton />
                        </LoginSocialGoogle>

                    </div>


                </div>


                <div className="password-generation-wrapper" ref={passwordgenerationwrapper}>
                    <form className="password-generation-form" onSubmit={handlePasswordGeneration} >
                        <div className="input-item">
                            <input placeholder="Password" type="password" name="password"
                            ></input>
                            {formErrors.password_error && <Error text={formErrors.password_error}></Error>}
                        </div>

                        <Button style={{ borderRadius: '10px', background: '#2B1E44' }} variant="contained" type="submit" >Submit</Button>
                    </form>
                </div>

                <div className="mobile-opt-verification-wrapper" ref={mobileoptverificationwrapper}>
                    <form className="mobile-opt-verification-form" onSubmit={handleMobileVerfication} >
                        <div className="input-item">
                            <input placeholder="Mobile Number" type="text" name="mobile_number"
                            ></input>
                            {formErrors.mobile_number_error && <Error text={formErrors.mobile_number_error}></Error>}
                            {formErrors.otp_information && <FormInformation text={formErrors.otp_information} />}
                        </div>
                        {resendOtp ?
                            <Button style={{ borderRadius: '10px', background: '#2B1E44' }} variant="contained" type="submit">Resend</Button>
                            :
                            <Button style={{ borderRadius: '10px', background: '#2B1E44' }} variant="contained" type="submit">Send</Button>

                        }

                        <hr></hr><hr></hr>

                    </form>

                    <form className="mobile-opt-verification-form" onSubmit={MobileOTPVerification} >
                        <div className="input-item">
                            <input placeholder="OTP" type="text" name="otp"
                            ></input>
                            {formErrors.otp_error && <Error text={formErrors.otp_error}></Error>}
                        </div>

                        <Button style={{ borderRadius: '10px', background: '#2B1E44' }} variant="contained" type="submit" >Submit</Button>
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
                            <input placeholder="Password" type="text" name="password" value={password}
                                readOnly
                            ></input>
                        </div>

                        <Button style={{ borderRadius: '10px', background: '#2B1E44' }} variant="contained" type="submit" >Submit</Button>
                    </form>
                </div>

                <div className="company-information-wrapper" ref={companyinformationwrapper}>
                    <form className="company-information-form" onSubmit={handleCompanySubmit}>
                        <div className="input-item">
                            <CustomizeSelect placeholder="Company type" data={company_type} id_data="company_type" />
                            {companyTypeError && <Error text={companyTypeError} />}
                        </div>

                        <div className='input-item' style={{ width: '98%' }}>
                            <input type="file" />
                        </div>

                        <div className="input-item">
                            <input placeholder="Email" type="text" name="email" value={email}
                                readOnly
                            ></input>
                        </div>

                        <div className="input-item">
                            <input placeholder="Mobile Number" type="text" name="mobile_number" value={mobile_number}
                                readOnly
                            ></input>
                        </div>

                        <div className="input-item">
                            <input placeholder="Company Website" type="text" name="company_website"
                            ></input>
                            {companyWebsiteError && <Error text={companyWebsiteError} />}
                        </div>

                        <div className="input-item">
                            <CustomizeSelect placeholder="Profile type" data={profile_type} name="profile_type" id_data="profile_type" />
                            {profileTypeError && <Error text={profileTypeError} />}
                        </div>

                        <div className="input-item">
                            <textarea rows="5" cols="50" name="company_description">
                                Company Description
                            </textarea>
                        </div>

                        <div className="input-item">
                            <input placeholder="Company Pincode" type="text" name="company_pincode"
                            ></input>
                            {companyPincodeError && <Error text={companyPincodeError} />}
                        </div>

                        <div className="input-item">
                            <input placeholder="Company Pan" type="text" name="company_pan"
                            ></input>
                            {companyPanError && <Error text={companyPanError} />}
                        </div>

                        <div className="input-item">
                            <input placeholder="Company GST" type="text" name="company_gst"
                            ></input>
                            {companyGSTError && <Error text={companyGSTError} />}
                        </div>

                        <Button style={{ borderRadius: '10px', background: '#2B1E44' }} variant="contained" type="submit" >Submit</Button>
                    </form>
                </div>


            </div>
        </div>
    </>)
}
export default Signup;