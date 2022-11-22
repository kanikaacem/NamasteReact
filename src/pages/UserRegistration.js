
import * as React from 'react';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from '@mui/material/Button';
import Error from '../Component/Error';
const UserRegistration = () => {
    const [startDate, setStartDate] = useState("");
    const [fullNameError, setfullNameError] = useState("");
    const [emailIdError, setemailIdError] = useState("");
    const [passwordError, setpasswordError] = useState("");
    const [permanantAddressError, setpermanantAddressError] = useState("");
    const [currentAddressError, setcurrentAddressError] = useState("");
    const [dobError, setdobError] = useState("");
    const [matrialStatusError, setmatrialStatusError] = useState("");
    const [genderError, setgenderError] = useState("");

    const UserRegistration = (event) => {
        event.preventDefault();
        let full_name = event.target.elements.full_name.value;
        let email_id = event.target.elements.email_id.value;
        let password = event.target.elements.password.value;
        let permanant_address = event.target.elements.permanant_address.value;
        let current_address = event.target.elements.current_address.value;
        let date_of_birth = event.target.elements.date_of_birth.value;
        let martial_status = event.target.elements.martial_status.value;
        let gender = event.target.elements.gender.value;
        if (full_name == "") setfullNameError("Full Name is required.");
        if (email_id == "") setemailIdError("Email Id is required");
        if (password == "") setpasswordError("Password is required.");
        if (permanant_address == "") setpermanantAddressError("Permanant Address is required.");
        if (current_address == "") setcurrentAddressError("Current Address is required");
        if (date_of_birth == "") setdobError("Date of Birth is required.");
        if (martial_status == "") setmatrialStatusError("Martial Status is required");
        if (gender == "") setgenderError("Gender is required");

        console.log(full_name, email_id, password, permanant_address, current_address, date_of_birth, martial_status, gender);

    }
    return (<>
        <div className="UserRegistrationPage">
            <div className="user-register-div">
                <div className="user-registration-wrapper" style={{ minWidth: "35%" }}>
                    <div className="info-title">Find a job & grow your career</div>

                    <form style={{ width: '100%' }} onSubmit={UserRegistration}>

                        <div className="input-item">
                            <input placeholder="Enter your FullName" type="text" name="full_name"
                            ></input>
                            {fullNameError && <Error text={fullNameError} />}
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

                        {/* <div className="input-item">
                            <Button style={{ borderRadius: '10px', border: '1px solid #2B1E44 ', background: 'none', color: "#2B1E44" }} variant="contained" type="button" >Add Education</Button>
                        </div>

                        <div className="input-item">
                            <Button style={{ borderRadius: '10px', border: '1px solid #2B1E44 ', background: 'none', color: "#2B1E44" }} variant="contained" type="button" >Add Experience</Button>
                        </div> */}


                        <div className="input-item">
                            <label for="resume" className="upload_file" >Upload Resume</label>
                            <input id="resume" type="file" />
                        </div>



                        <Button style={{ borderRadius: '10px', background: '#2B1E44 ', display: 'block', margin: '0 auto' }} variant="contained" type="submit" >Submit</Button>


                    </form>
                </div>
            </div>
        </div >
    </>)
}
export default UserRegistration;