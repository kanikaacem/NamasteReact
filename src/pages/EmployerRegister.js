import Button from '@mui/material/Button';
import Error from '../Component/Error';
import FormInformation from '../Component/FormInformation';
import { company_type } from '../utils/Data';
import { profile_type } from '../utils/Data';
import CustomizeSelect from '../Component/CustomizeSelect';
import { useState, useRef, useEffect } from "react";
import { LoginSocialGoogle } from 'reactjs-social-login';
import FileBase64 from 'react-file-base64';
import { cities } from "../utils/Data";
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import Loader from "react-js-loader";

const CLIENT_ID = "346122009616-5gsdqla59hflt7sg5f8n38valqs6p1q8.apps.googleusercontent.com";

const EmployerRegister = () => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const dispatch = useDispatch();

    const [requestProgress, setrequestProgress] = useState(false);

    const emailsignupwrapper = useRef(null);
    const passwordgenerationwrapper = useRef(null);
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

    const CheckEmail = async (email) => {
        // setrequestProgress(true);
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
            // setrequestProgress(false);
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
    const handleEmailSignup = async (event) => {
        event.preventDefault();
        let email = event.target.elements.email.value;
        if (email === '') setformErrors({ email_error: 'Email is required.' });
        else if (!email_regex.test(email)) setformErrors({ email_error: 'Email is not valid.' });
        else {
            CheckEmail(email);
            // setformErrors({ email_error: '' });
            // setEmail(email);
            // emailsignupwrapper.current.style.display = 'none';
            // passwordgenerationwrapper.current.style.display = 'block';
        }
    }


    const GoogleSignupResolve = async ({ provider, data }) => {
        let email = data.email;
        CheckEmail(email);
    }

    const handlePasswordGeneration = async (event) => {
        event.preventDefault();
        let password = event.target.elements.password.value;
        let confirm_password = event.target.elements.confirm_password.value;

        if (password === '') setPasswordError('Password is required.');
        else if (password.length < 10) setPasswordError('The length of password is atleast require 10 characters.');

        if (confirm_password === '') setconfirmpasswordError('Confirm Password is required.');
        else if (confirm_password.length < 10) setconfirmpasswordError('The length of confirm Password is atleast require 10 characters');

        else if (password != confirm_password) {
            setPasswordError('');
            setconfirmpasswordError("Passwored doesn't match.");
        }
        else {
            // setrequestProgress(true);
            setformErrors({ password_error: '' });
            setPassword(password);

            let response = await fetch("http://192.168.1.6:8000/api/employer/savelogindetail", {
                method: "POST",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,

                }),
            })
            if (response.ok) {
                response = await response.json();
                console.log(response);
                // setrequestProgress(false);
                passwordgenerationwrapper.current.style.display = 'none';
                mobileoptverificationwrapper.current.style.display = "block";
            }

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

    const handleHrInformation = async (event) => {
        event.preventDefault();
        let full_name = event.target.elements.full_name.value;
        console.log(full_name, email, password, mobile_number);
        // console.log(email, password, full_name, mobile_number);
        if (full_name == '') setformErrors({ full_name_error: "Name is required" });
        else {
            // setrequestProgress(true);

            let response = await fetch("http://192.168.1.6:8000/api/employer/postemployer", {
                method: "PUT",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    fullname: full_name,
                    email: email,
                    password: password,
                    mobile: mobile_number,
                    type: "employer"

                }),
            })
            if (response.ok) {
                response = await response.json();
                // setrequestProgress(false);
                console.log(response);
                hrinformationwrapper.current.style.display = 'none';
                companyinformationwrapper.current.style.display = 'block';

            }


        }
    }


    const uploadCompanyImage = (files) => {
        console.log(files.base64)
        let file_type = files.name.split('.').pop().toLowerCase();
        let file_size = files.file.size;
        if (file_type != 'png' && file_type != 'jpeg' && file_type != 'jpg')
            setcompanyLogoError("File type should be JPEG and PNG.")
        else if (file_size > 3000000) {
            setcompanyLogoError("File Size should be less than and equal to 3MB.")
        }
        else {
            setcompanyLogoError("");
            setcompanyLogo(files.base64);
        }
    }
    const uploadPanImage = (files) => {
        let file_type = files.name.split('.').pop().toLowerCase();
        let file_size = files.file.size;
        if (file_type != 'png' && file_type != 'jpeg' && file_type != 'jpg')
            setcompanyPanImageError("File type should be JPEG and PNG.")
        else if (file_size > 3000000) {
            setcompanyLogoError("File Size should be less than and equal to 3MB.")
        }
        else {
            setcompanyPanImageError("");
            setpanImage(files.base64);
        }
    }

    const uploadGstImage = (files) => {
        let file_type = files.name.split('.').pop().toLowerCase();
        let file_size = files.file.size;

        if (file_type != 'png' && file_type != 'jpeg' && file_type != 'jpg')
            setcompanyGSTImageError("File type should be JPEG and PNG.")
        else if (file_size > 3000000) {
            setcompanyLogoError("File Size should be less than and equal to 3MB.")
        }
        else {
            setcompanyGSTImageError("");
            setgstImage(files.base64);
        }
    }

    const handleCompanySubmit = async (event) => {
        event.preventDefault();
        // console.log(event.target.elements);
        let company_name = event.target.elements.company_name.value;
        let company_email = event.target.elements.company_email.value;
        let company_mobile_number = event.target.elements.company_mobile_number.value;
        let company_type = event.target.elements.company_type.value;
        let profile_type = event.target.elements.profile_type.value
        let company_description = event.target.elements.company_description.value;
        let company_pincode = event.target.elements.company_pincode.value;
        let company_website = event.target.elements.company_website.value;
        let pan_number = event.target.elements.pan_number.value;
        let gst_number = event.target.elements.gst_number.value;
        let company_address = event.target.elements.company_address.value;
        let company_city = event.target.elements.company_city.value;
        // console.log(company_type, profile_type, company_description, company_pincode, company_website, mobile_number, pan_number, gst_number);
        // console.log(companyLogo);
        // console.log(panImage);
        // console.log(gstImage);
        if (company_type == null) {
            setcompanyTypeError("Company Type is required");
        }
        if (profile_type == '') {
            setprofileTypeError("Profile Type is required");
        }
        if (company_name == '') {
            setcompanyNameError("Company Name is required.");
        }
        if (company_email == '') {
            setcompanyEmailError("Company Email is required");
        }
        if (company_mobile_number == '') {
            setcompanyMobileError("Company Mobile is required");
        }

        if (company_pincode == '') {
            setcompanyPincodeError("Company Pincode is required");
        }

        if (company_website == '') {
            setcompanyWebsiteError("Company website is required");
        }
        if (pan_number == '') {
            setcompanyPanError("Company Pan is required");
        }
        if (gst_number == '') {
            setcompanyGSTError("Company GST is required.")
        }
        if (company_address == '') {
            setcompanyAddressError("Address is required");
        }
        if (company_city == '') {
            setcompanyCityError("City is required");
        }
        if (company_name != ''
            && company_email != ''
            && company_mobile_number != ''
            && company_pincode != ''
            && company_website != ''
            && pan_number != ''
            && gst_number != ''
            && company_address != ''
            && company_city != '') {
            // setrequestProgress(true);

            let response = await fetch("http://192.168.1.6:8000/api/company/postcompany", {
                method: "POST",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    companyname: company_name,
                    companyemail: company_email,
                    companyonumber: company_mobile_number,
                    companytype: company_type,
                    companywebsite: company_website,
                    companyaddress: company_address,
                    companycity: company_city,
                    companypincode: company_pincode,
                    companypancard: pan_number,
                    companygst: gst_number,
                    companypancarddoc: panImage,
                    companygstdoc: gstImage,
                    companylogo: companyLogo,
                    profiletype: profile_type,
                    useremail: email

                }),
            })
            if (response.ok) {
                response = await response.json();
                if (response.status == '1') {
                    let loginresponse = await fetch("http://192.168.1.6:8000/api/users/login", {
                        // Adding method type
                        method: "POST",
                        // Adding body or contents to send
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Content-Type': 'application/json; charset=UTF-8'
                        },
                        body: JSON.stringify({
                            email: email,
                            password: password,

                        }),
                    })
                    console.log(loginresponse);
                    if (loginresponse.ok) {
                        loginresponse = await loginresponse.json();
                        console.log(loginresponse);
                        if (loginresponse.status == '1') {
                            // setrequestProgress(false);
                            dispatch({ type: 'LOGIN', payload: JSON.stringify(loginresponse.user) });
                        }

                    }

                }
            }
        }


    }

    useEffect(() => {
        passwordgenerationwrapper.current.style.display = 'none';
        mobileoptverificationwrapper.current.style.display = 'none';
        hrinformationwrapper.current.style.display = 'none';
        companyinformationwrapper.current.style.display = 'none';

    }, []);

    return (<>
        {isLoggedIn == 'true' && <Navigate to="/"></Navigate>}
        <div className="employerRegisterPage">
            <div className="employer-register-div">
                {requestProgress &&
                    <div className="loader">
                        <Loader type="spinner-cub" bgColor={"#2B1E44"} color={'#FFFFFF'} size={100} />
                    </div>
                }
                {/* <img src={companyLogo} alt="hello" /> */}
                <div className="employer-register-page-wrapper" style={{ minWidth: '35%', marginTop: '20px', borderRadius: '10px' }}>
                    <div className="info-title">Let's Simplify the Hiring Process</div>
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

                            <LoginSocialGoogle
                                client_id={CLIENT_ID}
                                // onLoginStart={onLoginStart}
                                // redirect_uri={REDIRECT_URI}
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


                    </div>


                    <div className="password-generation-wrapper" ref={passwordgenerationwrapper}>
                        <form className="password-generation-form" onSubmit={handlePasswordGeneration} >
                            <div className="input-item">
                                <input placeholder="Password ( length should be 10 )" type="password" name="password"
                                ></input>
                                {passwordError && <Error text={passwordError}></Error>}
                            </div>

                            <div className="input-item">
                                <input placeholder="Confirm Password ( length should be 10 )" type="password" name="confirm_password"
                                ></input>
                                {confirmpasswordError && <Error text={confirmpasswordError}></Error>}
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
                                <input placeholder="Password" type="password" name="password" value={password}
                                    readOnly
                                ></input>
                            </div>

                            <Button style={{ borderRadius: '10px', background: '#2B1E44' }} variant="contained" type="submit" >Submit</Button>
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
                                {/* <label for="resume" className="upload_file" >Upload Company Logo</label> */}
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

                            <Button style={{ borderRadius: '10px', background: '#2B1E44' }} variant="contained" type="submit" >Submit</Button>
                        </form>
                    </div>


                </div>
            </div>
        </div>
    </>)
}
export default EmployerRegister;