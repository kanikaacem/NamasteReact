import { yearPickerClasses } from "@mui/x-date-pickers";
import * as yup from "yup";
//Employer Login Validation
export const candidateLoginValidationSchema = yup.object().shape({
    email_address: yup.string().required("Email Address is required").email("Please enter a valid email Address"),
    password: yup.string().required("Password is required")
})

//Change Email Address 
export const NewEmailValidation = yup.object().shape({
    email_address: yup.string().required("Email Address is required").email("Please enter a valid email Address"),

})

//Candidate Registration Step 1
export const CandidateRegistrationSchema = yup.object().shape({
    // full_name: yup.string().required("Full Name is required"),
    email_id: yup.string().required("Email Id is required").email("Email Id should not valid"),
    password: yup.string().required("Password is requied").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    confirm_password: yup.string().required("Confirm Password is required")
        .oneOf([yup.ref('password'), null], 'Passwords must match')
    // mobile_number: yup.string().required("Mobile Number is required").min(10),
    // work_status: yup.string().required("Work status is required")
})

//Candidate Registration Step 2 ->Step 1
export const PersonalRegistrationSchema = yup.object().shape({
    current_title: yup.string().required("Current Title is required"),
    current_salary: yup.number("Current Salary should be a number")
        .positive("Current Salary should be positive").required("Current Salary is required"),
    excepted_salary: yup.number("Excepted Salary should be a number")
        .positive("Excepted Salary should be positive").required("Excepted Salary is required"),
    skills: yup.string().required("Skills is required"),
    perferred_location: yup.string().required("Perferred Location is required"),
    total_work_experience: yup.number("Total Work Experience should be a number")
        .positive("Total Work Experience should be positive").required("Total Work Experience is required"),
    full_name: yup.string().required("FullName is required"),
    date_of_birth: yup.string().required("Date of Birth is required"),
    state: yup.string().required("State is required"),
    city: yup.string().required("City is required"),
    // area: yup.string().required("Area is required"),
    complete_address: yup.string().required("Complete address is required"),
    phone_number: yup.number().min(10).required("Phone Number is required"),
    marital_status: yup.string().required("Martial Status is required"),
    gender: yup.string().required("Gender is required")
})


//Candidate Registration Step 3
export const ProfessionalDetailSchema = yup.object().shape({
    institue_name: yup.string().required("Institue Name is required"),
    qualification: yup.string().required("Qualification is required"),
    course_type: yup.string().required("Course Type is required"),
    starting_year: yup.string().required("Staring Year is required"),
    ending_year: yup.string().required("Ending Year is required"),
    percentage: yup.string().required("Percentage is required"),
})

//Candidate WorkHistory Step 4
export const WorkHistorySchema = yup.object().shape({
    company_name: yup.string().required("Company Name is required"),
    designation: yup.string().required("Designation is required"),
    department: yup.string().required("Department is required"),
    starting_year: yup.string().required("Staring Year is required"),
    ending_year: yup.string().required("Ending Year is required"),
})

//Updating the Candidate Basic Info
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const updateCandidateBasicInfoSchema = yup.object().shape({
    fullname: yup.string().required("Full Name is required"),
    mobile: yup.string().required("Mobile number is required").matches(phoneRegExp, 'Mobile number is not valid'),
    dob: yup.string().required("Date of Birth is required"),
    gender: yup.string().required("Gender is required"),
    marital_status: yup.string().required("Martial Status is required"),
    address: yup.string().required("Address is required"),
    currAddress: yup.string().required("Current Address is required")
})