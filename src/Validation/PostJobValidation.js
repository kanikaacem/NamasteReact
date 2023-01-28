import * as yup from "yup";

/* Regular Job Validation */
export const postJobValidationSchema = yup.object().shape({
company_name: yup.string().required("Company Name is required"),
    job_title: yup.string().required("Job title is required"),
    job_type: yup.string().required("Job Type is required"),
    industry_type: yup.string().required("Industry Type is required"),
    association_type: yup.string().required(" Association Type is required"),
    job_place: yup.string().required("Job Place  is required"),
    responsibilites: yup.string().required("Responsibilites is required"),
    job_description: yup.string().required("Job Description is required"),
    skills: yup.string().required("Skilled is required"),
    working_days: yup.string().required("Working Days is required"),
    work_shift: yup.string().required("Working Shift is required"),
    starting_time: yup.string().required("Starting Time is required"),
    ending_time: yup.string().required("Ending Time is required."),
    salary_type: yup.string().required("Salary Type is required"),
    weekly_off: yup.string().required("Weekly off  is required"),
    state: yup.string().required("State  is required"),
    city: yup.string().required("City  is required"),
    company_address: yup.string().required("Company Address  is required"),
    extra_benefits: yup.string().required("Extra Benefits  is required")

});


export const postJobSchema2 = yup.object().shape({
    experienced_required:yup.string().required("Experience is required"),
    age:yup.string().required("Age is required"),
    education_type: yup.string().required("Education Type is required"),
    education_degree:yup.string().required("Education Degree is required"),
    perferred_degree:yup.string().required("Perferred Degree is required"),
    gender:yup.string().required("Gender is required"),
    mandatory_local_language:yup.string().required("Language is required"),
    hindi_required:yup.string().required("This field is required"),
    english_required:yup.string().required("This field id required")
    
})