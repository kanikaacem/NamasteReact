import Button from '@mui/material/Button';
import Error from '../Component/Error';
import FormInformation from '../Component/FormInformation';
import { useState, useRef, useEffect } from "react";


const Signup = () => {
    const emailsignupwrapper = useRef(null);
    const passwordgenerationwrapper = useRef(null);
    const mobileoptverificationwrapper = useRef(null);
    const hrinformationwrapper = useRef(null);
    const email_regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const mobile_regex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i;

    const [formErrors, setformErrors] = useState({
        // full_name_error: "",
        email_error: "",
        password_error: "",
        mobile_number_error: "",
        otp_error: "",
        otp_resend_error: "",
        otp_information: "",

    });

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile_number, setMobileNumber] = useState("");

    const handleEmailSignup = (event) => {
        event.preventDefault();
        let email = event.target.elements.email.value;
        if (email === '') setformErrors({ email_error: 'Email is required.' });
        else if (!email_regex.test(email)) setformErrors({ email_error: 'Email is not valid.' });
        else {
            setformErrors({ email_error: '' });
            setEmail(email);
            emailsignupwrapper.current.style.display = 'none';
            passwordgenerationwrapper.current.style.display = 'block';

        }
    }

    const handlePasswordGeneration = (event) => {
        event.preventDefault();
        let password = event.target.elements.password.value;
        if (password === '') setformErrors({ password_error: 'Password is required.' });
        else if (password.length < 10) setformErrors({ password_error: 'The length of password is atleast require 10 characters' });
        else {
            setformErrors({ password_error: '' });
            setPassword
            passwordgenerationwrapper.current.style.display = 'none';
            mobileoptverificationwrapper.current.style.display = "block";

        }
    }

    const handleMobileVerfication = (event) => {
        event.preventDefault();
        let mobile_number = event.target.elements.mobile_number.value;
        if (mobile_number === '') setformErrors({ mobile_number_error: 'Mobile Number is required' });
        else if (!mobile_regex.test(mobile_number)) setformErrors({ mobile_number_error: 'Please enter a valid mobile number.' });
        else {
            setformErrors({ mobile_number_error: '' });
            setformErrors({ otp_information: "OTP is send on the above number.It will be expire in 1 mins" });
            localStorage.setItem("otp", 1234, 6000);
        }
    }

    const MobileOTPVerification = (event) => {
        event.preventDefault();
        let otp = event.target.elements.otp.value;
        if (otp == '') setformErrors({ otp_error: 'Please Enter the otp' });
        else if (otp != localStorage.getItem("otp")) setformErrors({ otp_error: "Otp is not valid" });
        else {
            mobileoptverificationwrapper.current.style.display = 'none';
            hrinformationwrapper.current.style.display = 'block';
            console.log(formData);
        }
    }

    const handleHrInformation = (event) => {
        event.preventDefault();
    }
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     let fullname = event.target.elements.full_name.value;
    //     let mobile_number = event.target.elements.mobile_number.value;
    //     let password = event.target.elements.password.value;
    //     let confirm_password = event.target.elements.confirm_password.value;
    //     // if (fullname == '') {
    //     //     setformErrors({ full_name: 'Enter the full name.' });
    //     // }

    //     // if (mobile_number == '') {
    //     //     setformErrors({ mobile_number: 'Enter the mobile number.' });
    //     // }

    //     // if (email_address == '') {
    //     //     setformErrors({ email_address: 'Enter the email address.' });
    //     // }

    //     // if (password == '') {
    //     //     setformErrors({ password: 'Enter the password.' });
    //     // }

    //     // if (confirm_password == '') {
    //     //     setformErrors({ confirm_password: 'Enter the confirm password.' });
    //     // }
    // }

    useEffect(() => {
        passwordgenerationwrapper.current.style.display = 'none';
        mobileoptverificationwrapper.current.style.display = 'none';
        hrinformationwrapper.current.style.display = 'none';

    }, []);
    return (<>
        <div className="SignupPage">
            <div className="signup-wrapper" style={{ width: '35%', marginTop: '20px', borderRadius: '20px' }}>
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

                        <Button style={{ borderRadius: '10px', background: '#2B1E44' }} variant="contained" type="submit" >Send</Button>

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
                        </div>

                        <div className="input-item">
                            <input placeholder="Mobile Number" type="text" name="mobile_number"
                            ></input>
                        </div>

                        <div className="input-item">
                            <input placeholder="Email" type="text" name="email"
                            ></input>
                        </div>

                        <div className="input-item">
                            <input placeholder="Password" type="text" name="password"
                            ></input>
                        </div>

                        <Button style={{ borderRadius: '10px', background: '#2B1E44' }} variant="contained" type="submit" >Submit</Button>


                    </form>
                </div>


                {/* <form className="Signup-form" onSubmit={handleSubmit}>
                    <div className="input-item">
                        <span> Full Name *</span>
                        <input placeholder="Enter your name" type="text" name="full_name"
                        ></input>
                        {formErrors.full_name && <Error text={formErrors.full_name}></Error>}
                    </div>

                    <div className="input-item">
                        <span> Mobile Number *</span>
                        <input placeholder="Enter your mobile number" type="text" name="mobile_number"
                        ></input>
                        {formErrors.mobile_number && <Error text={formErrors.mobile_number}></Error>}
                    </div>

                    <div className="input-item">
                        <span> Email Address *</span>
                        <input placeholder="Enter your email address" type="email" name="email_address"
                        ></input>
                        {formErrors.email_address && <Error text={formErrors.email_address}></Error>}
                    </div>

                    <div className="input-item">
                        <span> Password *</span>
                        <input placeholder="Enter your Password" type="password" name="password"
                        ></input>
                        {formErrors.password && <Error text={formErrors.password}></Error>}
                    </div>

                    <div className="input-item">
                        <span> Confirm Password *</span>
                        <input placeholder="Confirm your Password" type="password" name="confirm_password"
                        ></input>
                        {formErrors.confirm_password && <Error text={formErrors.confirm_password}></Error>}
                    </div>


                    <Button variant="contained" type="submit" >Submit</Button>

                </form> */}
            </div>
        </div>
    </>)
}
export default Signup;