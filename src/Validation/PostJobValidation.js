import * as yup from "yup";

/* Regular Job Validation */
export const postJobValidationSchema = yup.object().shape({
    // job_title: yup.string().required("Job Titlte is required"),
    // job_type: yup.string().required("Job Type is required"),
    // role: yup.string().required("Job role is required"),
    // experience: yup.string().required("Job experience is required"),
    // opening: yup.number("Opening should be a number").required("Opening is required"),
    // skills: yup.string().required("Skills is required"),
    // salary: yup.number("Salary should be a number").min(10000).required("Salary is required"),
    // short_description: yup.string().required("Short Description is required"),
    // long_description: yup.string().required("Job Long description is required"),
    // city: yup.string().required("City is required")
});

export const postPartTimeJobValidationSchema = yup.object().shape({
    // job_title: yup.string().required("Job Titlte is required"),
    // job_type: yup.string().required("Job Type is required"),
    // role: yup.string().required("Job role is required"),
    // experience: yup.string().required("Job experience is required"),
    // opening: yup.number("Opening should be a number").required("Opening is required"),
    // skills: yup.string().required("Skills is required"),
    // salary: yup.number("Salary should be a number").min(10000).required("Salary is required"),
    // short_description: yup.string().required("Short Description is required"),
    // long_description: yup.string().required("Job Long description is required"),
    // city: yup.string().required("City is required"),
    // job_working_type: yup.string().required("Job Working Type is required"),
    // salary_type: yup.string().required("Salary Type is required"),
    // responsibilites: yup.string().required("Responsibilites is required"),
    // advantage: yup.string().required("Extra Benefits is required"),

})