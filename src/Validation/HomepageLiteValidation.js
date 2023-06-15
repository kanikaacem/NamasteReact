import * as yup from "yup";

export const CandidateInformationValidation = yup.object().shape({
    fullname: yup.string().required("Candidate Name is required"),
    mobile: yup.string()
        .matches(/^\d{10}$/, 'Mobile number must be a 10-digit number')
        .required('Mobile number is required'),
    city: yup.string().required("City is required"),
    workknowledge: yup.string().required("Work Knowledge is required")

})

export const EmployerInformationValidation = yup.object().shape({
    fullname: yup.string().required("Candidate Name is required"),
    mobile: yup.string()
        .matches(/^\d{10}$/, 'Mobile number must be a 10-digit number')
        .required('Mobile number is required'),
    city: yup.string().required("City is required"),
    businessType: yup.string().required("Business is required"),
})