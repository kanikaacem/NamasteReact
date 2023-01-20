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
    // mobile_number: yup.string().required("Mobile number is required")
})

export const OTPValidationSchema = yup.object().shape({
    otp: yup.string().required("OTP is required")
})

//STEP 4 
const PincodeRegExp = /^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$/;
export const companyInfoValidationSchema = yup.object().shape({
    hr_name: yup.string().required("Hr Name is required"),
    company_type: yup.string().required("Company Type is required"),
    company_name: yup.string().required("Company Name is required")
})

export const companyInfoValidationSchema1 = yup.object().shape({
    company_email: yup.string().required("Company Email is required").email("Email is not valid"),
    company_website: yup.string().required("Company website is required"),
    company_lan_number: yup.string().required("Company LandLine Number is required").min(8, "Company LandLine Number is of atleast 8 character").max(11, "Company LandLine Number is of atmost 11 character"),
})

export const companyInfoValidationSchema2 = yup.object().shape({
    state: yup.string().required("State is required"),
    city: yup.string().required("City website is required"),
    company_address: yup.string().required("Company Address is required"),
    company_pincode: yup.string().matches(/^[1-9][0-9]{5}$/, "please enter a valid Pincode.").required("Company Pincode is required"),
    company_pan_number: yup.string().matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Please Provide a valid Pan Number ").required("Pan Number is required"),
    company_gst_number: yup.string()
        // .matches(/\d{2}[A-Z]{5}\d{4}[A-Z]{1}[A-Z\d]{1}[Z]{1}[A-Z\d]{1}/
        //     , "Please enter a valid GST Number")
        .required("GST Number is required"),
    area: yup.string().required("Company Address is required")
})
//Forgot Password Validation
export const ForgotPasswordValidation = yup.object().shape({
    old_password: yup.string().required("Old Password is required"),
    password: yup.string().required("Password is required").min(6),
    confirm_password: yup.string().required("Confirm Password is required")
        .oneOf([yup.ref('password'), null], 'Passwords must match')
})

//creating the subuser
export const CreateSubUserValidationSchema = yup.object().shape({
    email_address: yup.string().email("Email id is not valid").required("Email ID is required"),
    password: yup.string().required("Password is required").matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    ),
    mobile_number: yup.string().required("Phone number is required").matches(phoneRegExp, 'Phone number is not valid')
})

//updating the company Information Validation 
export const CompanyUpdateInformationSchema = yup.object().shape({
    company_name: yup.string().required("Company Name  is required"),
    company_email: yup.string().email("Company Email  is not valid").required("Company Name is required"),
    company_lan_number: yup.string().required("Company Lan Number is required").max(8),
    company_website: yup.string().required("Company Website is required"),
    company_pincode: yup.string().required("Company Lan Number is required").max(6),
    company_address: yup.string().required("Company Address is required"),
    company_pan_number: yup.string().matches(/[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Please Provide a valid Pan Number ").required("Pan Number is required"),
    company_gst_number: yup.string().required("GST Number is required")
})