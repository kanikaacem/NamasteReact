import * as yup from "yup";
//Employer Login Validation
export const candidateLoginValidationSchema = yup.object().shape({
    email_address: yup.string().required("Email Address is required").email("Please enter a valid email Address"),
    password: yup.string().required("Password is required")
})
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
//Change Email Address 
export const NewEmailValidation = yup.object().shape({
    email_address: yup.string().required("Email Address is required").email("Please enter a valid email Address"),

})