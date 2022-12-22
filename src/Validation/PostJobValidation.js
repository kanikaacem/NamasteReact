import * as yup from "yup";

export const postJobValidationSchema = yup.object().shape({
    job_title: yup.string().required("Job Titlte is required"),
    role: yup.string().required("Job role is required"),
    experience: yup.number("Experience should be a number.").required("Job experience is required"),
    opening: yup.number("Opening should be a number").required("Opening is required"),
    skills: yup.string().required("Skills is required"),
    salary: yup.number("Salary should be a number").min(10000).required("Salary is required"),
    short_description: yup.string().required("Short Description is required"),
    long_description: yup.string().required("Job Long description is required"),
    city: yup.string().required("City is required")
});