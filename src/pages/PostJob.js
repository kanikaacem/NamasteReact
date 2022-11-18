import Button from '@mui/material/Button';
import CustomizeSelect from "../Component/CustomizeSelect";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { Role } from "../utils/Data";
import { cities, Experience } from "../utils/Data";
import { useState, useRef } from "react";
import Error from '../Component/Error';
import SweetAlert from 'react-bootstrap-sweetalert';
import Loader from "react-js-loader";

const PostJob = () => {
    const user = localStorage.user && JSON.parse(localStorage.user);
    const postjobForm = useRef();
    // const [requestProgress, setrequestProgress] = useState(true);
    const [formSubmitted, setformSubmitted] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [jobTitleError, setjobTitleError] = useState("");
    const [roleError, setroleError] = useState("");
    const [experienceError, setexperienceError] = useState("");
    const [openingError, setopeningError] = useState("");
    const [salaryError, setsalaryError] = useState("");
    const [skillsError, setskillsError] = useState("");
    const [jobDescriptionError, setjobDescriptionError] = useState("")
    const [cityError, setcityError] = useState("");

    const animatedComponents = makeAnimated();
    const skills = [
        { label: "Golang", value: 'golang' },
        { label: "Nodejs", value: 'node_js' },
        { label: "Reactjs", value: 'react_js' },
        { label: "Python", value: 'python' },
        { label: "Machine Learning", value: 'machine_learning' },
        { label: "Swift", value: 'swift' },
        { label: "Nextjs", value: 'next_js' }
    ]

    const handleChange = (options) => {
        setSelectedOptions(options);
    };

    const closeAlert = () => {
        setformSubmitted(false);
    }
    const PostJob = async (event) => {
        event.preventDefault();
        // postjobForm.reset();
        // console.log(postjobForm.reset());
        // console.log(event.target.reset());
        // setrequestProgress(true);
        let job_title = event.target.elements.job_title.value;
        let job_description = event.target.elements.job_description.value;
        let role = event.target.elements.role.value;
        let experience = event.target.elements.experience.value;
        let opening = event.target.elements.opening.value;
        let salary = event.target.elements.salary.value;
        let city = event.target.elements.city.value;

        let skills = [];

        if (job_title == '') setjobTitleError("Job title is required.");
        if (job_description == '') setjobDescriptionError("Job Description is required.")
        // if (job_description.length > 3) setjobDescriptionError("Job Description length should be upmost 250 words.");
        if (role == '') setroleError("Job Role is required");
        if (experience == '') setexperienceError("Experience is required.");
        if (opening == '') setopeningError("Opening is required");
        if (salary == '') setsalaryError("Salary is required");
        if (selectedOptions.length == 0) setskillsError("Skills is required");
        if (city == '') setcityError("City is required");

        console.log(selectedOptions);
        if (job_title != '' && job_description != '' && role != '' && experience != '' && opening != '' && salary != '' && city != '') {
            selectedOptions && selectedOptions.map((ele) => skills.push(ele.value));
            skills = skills.toString();
            // console.log(skills);
            // console.log(job_title, job_description, role, experience, opening, salary, city, skills);
            let response = await fetch("http://192.168.1.6:8000/api/job/postjob", {
                // Adding method type
                method: "POST",
                // Adding body or contents to send
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    creator: user._id,
                    title: job_title,
                    role: role,
                    experience: experience,
                    opening: opening,
                    salary: salary,
                    skills: skills,
                    description: job_description,
                    location: city

                }),
            })
            if (response.ok) {
                // setrequestProgress(false);
                setformSubmitted(true);
                window.location.reload();
            }

        }
    };
    return (<>
        <div className="content">

            {formSubmitted && <SweetAlert success title="Good job!" onConfirm={closeAlert} >
                You clicked the button!
            </SweetAlert>}

            {/* <div className="loader">
                <Loader type="spinner-cub" bgColor={"#2B1E44"} color={'#FFFFFF'} size={100} />
            </div> */}

            <div className="postjob-wrapper">
                <div className="info-title">Post Job</div>
                <form className="postjobForm" id="postjobForm" onSubmit={PostJob} ref={postjobForm} >
                    <div className="input-item">
                        <input placeholder="Enter Job Title" type="text" name="job_title"></input>
                        {jobTitleError && <Error text={jobTitleError} />}
                    </div>

                    <div className="input-item">
                        <div className="select">
                            <CustomizeSelect
                                style={{ width: '100%' }}
                                placeholder="Select Role" data={Role}
                                id_data="role"
                            />
                        </div>
                        {roleError && <Error text={roleError} />}
                    </div>

                    <div className="input-item">
                        <div className="select">
                            <CustomizeSelect
                                placeholder="Select Experience" data={Experience}
                                id_data="experience"
                            />
                            {experienceError && <Error text={experienceError} />}
                        </div>

                    </div>

                    <div className="input-item">
                        <input placeholder="Enter opening" type="text" name="opening"></input>
                        {openingError && <Error text={openingError} />}
                    </div>

                    <div className="input-item">
                        <input placeholder="Enter salary" type="text" name="salary"></input>
                        {salaryError && <Error text={salaryError} />}
                    </div>

                    <div className="input-item">
                        <Select name="skills"
                            options={skills}
                            components={animatedComponents}
                            onChange={handleChange}
                            isMulti />
                        {skillsError && <Error text={skillsError} />}
                    </div>

                    <div className="input-item">
                        {/* <input placeholder="Enter Job description" type="text" name="job_description"></input> */}
                        <textarea name="job_description" placeholder='Enter Job description' style={{ height: '200px' }}></textarea>
                        {jobDescriptionError && <Error text={jobDescriptionError} />}
                    </div>

                    <div className="input-item">
                        <div className="select">
                            <CustomizeSelect
                                placeholder="Select City" data={cities} id_data="city" />
                        </div>
                        {cityError && <Error text={cityError} />}
                    </div>


                    <Button variant="contained" type="submit" style={{ borderRadius: '10px', background: '#2B1E44' }}>Submit</Button>


                </form>
            </div>
        </div>

    </>)
}
export default PostJob;