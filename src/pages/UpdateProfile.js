import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from '@mui/material/Button';
import Error from '../ThemeComponent/Common/Error';
import FileBase64 from 'react-file-base64';
import { useSelector } from 'react-redux';
import { useState, useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';

const UpdateProfile = () => {
    const api_url = useSelector(state => state.api_url);
    const user = localStorage.user && JSON.parse(localStorage.user);

    const [profileImage, setprofileImage] = useState("");
    const [profileImageError, setprofileImageError] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [userData, setuserData] = useState("");
    const [addEducation, setaddEducation] = useState([]);
    const [addExperience, setaddExperience] = useState([]);
    const [educationForm, seteducationForm] = useState(false);
    const [experienceForm, setexperienceForm] = useState(false);

    const uploadProfileImage = (files) => {
        let file_type = files.name.split('.').pop().toLowerCase();
        let file_size = files.file.size;
        if (file_type != 'png' && file_type != 'jpeg' && file_type != 'jpg')
            setprofileImageError("File type should be JPEG and PNG.")
        else if (file_size > 3000000) {
            setprofileImageError("File Size should be less than and equal to 3MB.")
        }
        else {
            setprofileImageError("");
            setprofileImage(files.base64);
        }
    }

    const AddEducation = (event) => {
        event.preventDefault();
        let qualification = event.target.elements.qualification.value;
        let university_name = event.target.elements.university_name.value;
        let starting_year = event.target.elements.starting_year.value;
        let passing_year = event.target.elements.passing_year.value;
        let percentage = event.target.elements.percentage.value;
        const newEducationList = {
            'qualification': qualification,
            'university_name': university_name,
            'starting_year': starting_year,
            'passing_year': passing_year,
            'percentage': percentage
        };
        addEducation.push(newEducationList);
        setaddEducation(addEducation);
        seteducationForm(false);
        console.log(addEducation);

        // console.log(qualification, university_name, starting_year, passing_year, percentage);
    }

    const AddExperience = (event) => {
        event.preventDefault();
        let company_name = event.target.elements.company_name.value;
        let starting_year = event.target.elements.starting_year.value;
        let ending_year = event.target.elements.ending_year.value;
        let designation = event.target.elements.designation.value;
        let job_role = event.target.elements.job_role.value;
        let role_category = event.target.elements.role_category.value;
        let current_industry = event.target.elements.current_industry.value;
        let department = event.target.elements.department.value;
        const newExperiencList = {
            'company_name': company_name,
            'starting_year': starting_year,
            'ending_year': ending_year,
            'designation': designation,
            'job_role': job_role,
            'role_category': role_category,
            'current_industry': current_industry,
            'department': department
        };
        addExperience.push(newExperiencList);
        setaddExperience(addExperience);
        setexperienceForm(false);
        console.log(addEducation);

        // console.log(qualification, university_name, starting_year, passing_year, percentage);
    }


    useEffect(() => {
        const getUserDetail = async () => {
            let response = await fetch(api_url + "/api/users/getuserbyid", {
                method: "POST",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    userid: user._id

                }),
            })
            if (response.ok) {
                response = await response.json();
                response = response.message;
                console.log(response);
                setuserData(response);

            }
        }
        getUserDetail();

    }, []);

    return (<>
        <div className="updateProfilePage">
            <div className="user-registration-wrapper" style={{ minWidth: "35%" }}>
                <div className="info-title">Update Profile</div>

                <form style={{ width: '100%' }}>

                    <div className="input-item">
                        <input placeholder="Enter your FullName" type="text" name="full_name"
                            value={userData && userData.fullname}
                        ></input>
                    </div>

                    <div className='input-item'>
                        <label for="resume">Profile Image</label>
                        <FileBase64 id="upload_file"
                            onDone={uploadProfileImage} />
                        {profileImageError && <Error text={profileImageError} />}
                    </div>

                    <div className="input-item">
                        <input placeholder="Enter your EmailId" type="email" name="email_id"
                            value={userData && userData.email}></input>
                    </div>

                    <div className="input-item">
                        <input placeholder="Enter your Password" type="password" name="password"
                        ></input>
                    </div>

                    <div className="input-item">
                        <input placeholder="Enter your Mobile Number" type="text" name="mobile_number"
                            value={userData && userData.mobile}></input>
                    </div>

                    <div className="input-item">
                        <textarea placeholder="Enter your Permanant Address" type="text" name="permanant_address" rows="10"
                            value={userData && userData.address}></textarea>
                    </div>

                    <div className="input-item">
                        <textarea placeholder="Enter your Current Address" type="text" name="current_address" rows="10"
                            value={userData && userData.currAddress}></textarea>
                    </div>

                    <div className="input-item">
                        <DatePicker
                            placeholderText={'Date of Birth'}
                            name="date_of_birth"
                            selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>

                    <div className="input-item">
                        <input placeholder="Enter your Martial Status" type="text" name="martial_status"
                        ></input>
                    </div>

                    <div >
                        <input type="radio" id="male" name="gender" value="male"></input>
                        <label for="male">Male</label>
                        <input type="radio" id="female" name="gender" value="female"></input>
                        <label for="female">Female</label>
                    </div>
                    {addEducation.length > 0 &&
                        addEducation.map((item) => {
                            return (<>
                                <div className="EducationDiv">
                                    <div> Qualification : {item.qualification}</div>
                                    <div> University : {item.university_name}</div>
                                    <div> Starting year : {item.starting_year}</div>
                                    <div> Passing year : {item.passing_year}</div>
                                    <div> Percentage : {item.percentage}</div>
                                </div>
                            </>)
                        })

                    }

                    <div className="input-item">
                        <Button style={{ borderRadius: '10px', border: '1px solid #2B1E44 ', background: 'none', color: "#2B1E44" }}
                            variant="contained" type="button" onClick={() => seteducationForm(true)}>Add Education</Button>
                    </div>

                    {addExperience.length > 0 &&
                        addExperience.map((item) => {
                            return (<>
                                <div className="EducationDiv">
                                    <div> Company Name : {item.company_name}</div>
                                    <div> Starting Year : {item.starting_year}</div>
                                    <div> Ending year : {item.ending_year}</div>
                                    <div> Designation : {item.designation}</div>
                                    <div> Job Role : {item.job_role}</div>
                                    <div> Role Category : {item.role_category}</div>
                                    <div> Current Industry : {item.current_industry}</div>
                                    <div> Department : {item.department}</div>

                                </div>
                            </>)
                        })

                    }

                    <div className="input-item">
                        <Button style={{ borderRadius: '10px', border: '1px solid #2B1E44 ', background: 'none', color: "#2B1E44" }}
                            variant="contained" type="button" onClick={() => setexperienceForm(true)}>Add Experience</Button>
                    </div>


                    <div className="input-item">
                        <label for="resume" className="upload_file" >Upload Resume</label>
                        <input id="resume" type="file" />
                    </div>



                    <Button style={{ borderRadius: '10px', background: '#2B1E44 ', display: 'block', margin: '0 auto' }} variant="contained" type="submit" >update</Button>


                </form>
            </div>
        </div>
        {
            educationForm &&
            <div className="AddExperienceEducation">
                <div style={{ position: "absolute", top: '10px', right: '10px', cursor: 'pointer' }} onClick={() => seteducationForm(false)}><CloseIcon ></CloseIcon></div>
                <div className="AddExperienceEducationWrapper">
                    <div className="info-title">Add Education</div>
                    <form style={{ width: '100%' }} onSubmit={AddEducation}>
                        <div className="input-item">
                            <input placeholder="Enter your Qualification" type="text" name="qualification"
                            ></input>
                        </div>

                        <div className="input-item">
                            <input placeholder="Enter your University Name" type="text" name="university_name"
                            ></input>
                        </div>

                        <div className="input-item">
                            <DatePicker
                                placeholderText={'Starting Year'}
                                name="starting_year"
                                selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>

                        <div className="input-item">
                            <DatePicker
                                placeholderText={'Passing Year'}
                                name="passing_year"
                                selected={endDate} onChange={(date) => setEndDate(date)} />
                        </div>

                        <div className="input-item">
                            <input placeholder="Enter your Percentage" type="text" name="percentage"
                            ></input>
                        </div>

                        <Button style={{ borderRadius: '10px', background: '#2B1E44 ', display: 'block', margin: '0 auto' }}
                            variant="contained" type="submit" >Save</Button>

                    </form>
                </div>
            </div>
        }

        {experienceForm &&
            <div className="AddExperienceEducation">
                <div style={{ position: "absolute", top: '10px', right: '10px', cursor: 'pointer' }} onClick={() => setexperienceForm(false)}><CloseIcon ></CloseIcon></div>
                <div className="AddExperienceEducationWrapper">
                    <div className="info-title">Add Experience</div>
                    <form style={{ width: '100%' }} onSubmit={AddExperience}>
                        <div className="input-item">
                            <input placeholder="Enter your Company Name" type="text" name="company_name"
                            ></input>
                        </div>

                        <div className="input-item">
                            <DatePicker
                                placeholderText={'Starting Year'}
                                name="starting_year"
                                selected={startDate} onChange={(date) => setStartDate(date)} />
                        </div>

                        <div className="input-item">
                            <DatePicker
                                placeholderText={'Ending Year'}
                                name="ending_year"
                                selected={endDate} onChange={(date) => setEndDate(date)} />
                        </div>

                        <div className="input-item">
                            <input placeholder="Enter your Designation" type="text" name="designation"
                            ></input>
                        </div>

                        <div className="input-item">
                            <input placeholder="Enter your Job Role" type="text" name="job_role"
                            ></input>
                        </div>

                        <div className="input-item">
                            <input placeholder="Enter your Role Category" type="text" name="role_category"
                            ></input>
                        </div>

                        <div className="input-item">
                            <input placeholder="Enter your Current Industry" type="text" name="current_industry"
                            ></input>
                        </div>

                        <div className="input-item">
                            <input placeholder="Enter your Department" type="text" name="department"
                            ></input>
                        </div>

                        <Button style={{ borderRadius: '10px', background: '#2B1E44 ', display: 'block', margin: '0 auto' }}
                            variant="contained" type="submit" >Save</Button>

                    </form>
                </div>
            </div>}

    </>)
}
export default UpdateProfile;