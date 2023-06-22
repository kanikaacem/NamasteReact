import * as yup from "yup";
import differenceInYears from 'date-fns/differenceInYears';

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
    email_id: yup.string().required("Email Id is required").email("Email Id should not valid"),
    password: yup.string().required("Password is requied").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    confirm_password: yup.string().required("Confirm Password is required")
        .oneOf([yup.ref('password'), null], 'Passwords must match')

})

//Candidate Registration Step 2 ->Step 1
export const PersonalRegistrationSchema = yup.object().shape({
    current_title: yup.string().required("Current Title is required").matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
    current_salary: yup.number("Current Salary should be a number")
        .positive("Current Salary should be positive").required("Current Salary is required"),
    excepted_salary: yup.number("Excepted Salary should be a number")
        .positive("Excepted Salary should be positive").required("Excepted Salary is required"),
    skills: yup.string().required("Skills is required"),
    total_work_experience: yup.number("Total Work Experience should be a number")
        .positive("Total Work Experience should be positive").required("Total Work Experience is required"),
    full_name: yup.string().required("Full Name is required").matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
    date_of_birth: yup.string().required("Date of Birth is required").test('DOB', 'Please Select a valid Date of Birth', value => {
        return differenceInYears(new Date(), new Date(value)) >= 14;
    }),
    state: yup.string().required("State is required"),
    city: yup.string().required("City is required"),
    marital_status: yup.string().required("Martial Status is required"),
    gender: yup.string().required("Gender is required")
})


//Candidate Registration Step 3
export const ProfessionalDetailSchema = yup.object().shape({
    institue_name: yup.string().required("Institue Name is required").matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
    qualification: yup.string().required("Qualification is required"),
    course_type: yup.string().required("Course Type is required"),
    starting_year: yup.date().required("Staring Year is required"),
    ending_year: yup.date().required("Ending Year is required"),
    percentage: yup.string().required("Percentage is required"),
})

//Candidate WorkHistory Step 4
export const WorkHistorySchema = yup.object().shape({
    company_name: yup.string().required("Company Name is required").matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
    designation: yup.string().required("Designation is required").matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
    department: yup.string().required("Department is required").matches(/^[a-zA-Z\s]+$/, "Only alphabets are allowed for this field "),
    starting_year: yup.date().required("Staring Year is required"),
    ending_year: yup.date().required("Ending Year is required"),
})

//Updating the Candidate Basic Info
const phoneRegExp = /^((\+\d{1,4}[ -])|(\(\d{2,3}\)[ -])|(\d{2,4})[ -])?\d{3,4}[ -]*\d{3,4}$/;
export const updateCandidateBasicInfoSchema = yup.object().shape({
    fullname: yup.string().required("Full Name is required"),
    mobile: yup.string().required("Mobile number is required").matches(phoneRegExp, 'Mobile number is not valid'),
    dob: yup.string().required("Date of Birth is required"),
    gender: yup.string().required("Gender is required"),
    marital_status: yup.string().required("Martial Status is required"),
    address: yup.string().required("Address is required"),
    currAddress: yup.string().required("Current Address is required")
})

export const CandidateMobileNumberValidation = yup.object().shape({
    mobile_number: yup.string()
        .matches(/^[0-9]{10}$/, 'Mobile number must be a 10-digit number')
        .required('Mobile number is required'),
});
