import * as yup from "yup";
//Employer Login Validation
export const employerLoginValidationSchema = yup.object().shape({
    email_address: yup.string().required("Email Address is required").email("Please enter a valid email Address"),
    password: yup.string().required("Password is required")
});

//Employer Registration Validation
//STEP 1
export const emailFormValidationSchema = yup.object().shape({
    email_address: yup.string().required("Email Address is required").email("Please enter a valid email Address"),

});
//STEP 2
export const PasswordGenFormValidationSchema = yup.object().shape({
    password: yup.string().required("Password is required").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    confirm_password: yup.string().required("Confirm Password is required")
        .oneOf([yup.ref('password'), null], 'Passwords must match')
});

//STEP 3
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const MobileVerifyFormValidationSchema = yup.object().shape({
    mobile_number: yup.string().required("Phone number is required")
})

export const OTPValidationSchema = yup.object().shape({
    otp: yup.string().required("OTP is required")
})

//STEP 4 
export const companyInfoValidationSchema = yup.object().shape({
    hr_name: yup.string().required("Hr Name is required"),
    profile_type: yup.string().required("Profile Type is required"),
    company_type: yup.string().required("Company Type is required"),
    company_name: yup.string().required("Company Name is required"),
    company_email: yup.string().required("Company Email is required").email("Email is not valid"),
    company_website: yup.string().required("Company website is required"),
    // company_address: yup.string().required("Company Address is requried"),
    city: yup.string().required("Company City is required"),
    company_lan_number: yup.string().required("Company Lan Number is required"),
    company_pincode: yup.number("Company Pincode should be a number").min(5).required("Company Pincode is required"),
    company_pan_number: yup.string().required("Pan Number is required"),
    company_gst_number: yup.string().required("GST Number is required")


})

//Forgot Password Validation
export const ForgotPasswordValidation = yup.object().shape({
    old_password: yup.string().required("Old Password is required"),
    password: yup.string().required("Password is required").min(6),
    confirm_password: yup.string().required("Confirm Password is required")
        .oneOf([yup.ref('password'), null], 'Passwords must match')
})

