import * as yup from "yup";

/* Regular Job Validation */
export const postJobValidationSchema = yup.object().shape({
    company_name: yup.string().required("Company Name is required"),
    job_title: yup.string().required("Job title is required"),
    job_type: yup.string().required("Job Type is required"),
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
    extra_benefits: yup.string().required("Extra Benefits  is required"),
    vacancy: yup.number()
        .positive()
        .label('seats')
        .required('Vacancy is required')
});


export const postJobSchema2 = yup.object().shape({
    education_type: yup.string().required("Education Type is required"),
    education_degree: yup.string().required("Education Degree is required"),
    perferred_degree: yup.string().required("Perferred Degree is required"),
    gender: yup.string().required("Gender is required"),
    mandatory_local_language: yup.string().required("Language is required"),
    hindi_required: yup.string().required("This field is required"),
    english_required: yup.string().required("This field id required")

})

export const JobTypePageSchema = yup.object().shape({
    job_type: yup.string().required("Job Type is required"),
    area: yup.string().required("Area is required"),
    state: yup.string().required("State is required"),
    city: yup.string().required("City is required"),
    qualification: yup.string().required("Qualification is required")
})

export const PostJobValidation = yup.object().shape({
    job_sector: yup.string().required('Job sector is required'),
    job_department: yup.string().required('Job department is required'),
    job_role: yup.string().required('Job role is required'),
    job_description: yup.string().required('Job description is required'),
    number_of_openings: yup.number("Number of openings must be a number").positive('Number of openings must be a positive number').required('Number of openings is required'),
    job_address: yup.string().required('Job address is required'),
    job_type: yup.string().required("Job Type is required"),
    gender: yup.string().required('Gender is required'),
    minimum_qualification: yup.string().required('Minimum qualification is required'),
    required_experience: yup.string().required('Required experience is required'),
    language: yup.string().required('Language is required'),
    shift_timing: yup.string().required('Shifts are required'),
    vehicle_required: yup.string().required('Vehicle requirement is required'),
    min_salary: yup.number().required("Minimum salary is required"),
    max_salary: yup.number()
        .required("Maximum salary is required")
        .min(yup.ref("min_salary"), "Maximum salary must be greater than minimum salary"),
    number_of_days: yup.number().min(1, "Number of days must be at least 1").max(7, "Number of days cannot exceed 7").required("Number of days is required"),
});

export  const JobApplyValidationSchema = yup.object({
    name: yup.string().required('Name is required'),
    age: yup.string().required('Age is required'),
    gender: yup.string().required('Gender is required'),
    qualification: yup.string().required('Qualification is required'),
  });