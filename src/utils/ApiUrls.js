/*------------------------------HomePage----------------------*/
export const HomeCities = "https://backend.jobsyahan.com/api/map/cities";

/*-----------------------Employer ----------------------------*/
/* Api for employer Login */
export const EmployerLoginURL = "https://backend.jobsyahan.com/api/employer/loginemployer";
// export const EmployerLoginURL = "https://192.168.1.4:3001/api/employer/loginEmployer";
/*Employer Registration */
/*Checking if the Email Present or not */
export const CheckEmployerEmailExist = "https://backend.jobsyahan.com/api/employer/checkemail"

/*Step 1 - Email and Password saving*/
export const EmployerSaveEmailAndPassword = "https://backend.jobsyahan.com/api/employer/savelogindetail";
/*Step 2- Mobile Verification */
/*Step 3 - Company Information Saving */
/*Getting all the state and cities */
export const StatesURL = "https://backend.jobsyahan.com/api/map/states";
export const EmployerCompanyInformationURL = "https://backend.jobsyahan.com/api/employer/postemployer";
export const UplaodImageURL = "https://backend.jobsyahan.com/api/employer/updateimage";

/*Getting the Employer Information */
export const UserInformationURL = "https://backend.jobsyahan.com/api/employer/getemployerbyid";

/*Getting the Job */
export const getAllJobs = "https://backend.jobsyahan.com/api/job/getalljobs";


/*Posting Job */
export const getJobTypeURL = "https://backend.jobsyahan.com/api/file/jobtype";
export const PostJob1 = "https://backend.jobsyahan.com/api/job/postjob1";
export const PostJob2 = "https://backend.jobsyahan.com/api/job/postjob2";

// export const PostJobURL = "https://backend.jobsyahan.com/api/job/postjob";

/* Api for getting the data of the posted jobs*/
export const getAllPostedJobs = "https://backend.jobsyahan.com/api/job/getpostedjobs";

/*Resending the Email Verification Link */
export const ReSendEmailVerificationURL = "https://backend.jobsyahan.com/api/resendlink/employer";

/*Forgot Password */
export const ForgotPasswordEmployerEmailURL = "https://backend.jobsyahan.com/api/forgotpassword/employer"
export const ResetPasswordEmployerEmailURL = "https://backend.jobsyahan.com/api/reset-password/employer/";


/* Getting Count for employer*/
export const EmployerDashboardDetailsCount = "https://backend.jobsyahan.com/api/job/getdashboarddetails";
/*----------------------Candidate----------------------------------------*/
/*Candidate Registration*/

/*Candidate Login */
export const CandidateLoginURL = "https://backend.jobsyahan.com/api/users/login";

/*Email Present */
export const EmailExist = "https://backend.jobsyahan.com/api/users/checkemailexist";
/*STEP 1 */
export const saveCandidateUserNameAndPasswordURL = "https://backend.jobsyahan.com/api/users/createuser";
/*STEP 2 */
export const SaveCandidatePersonalInformation = "https://backend.jobsyahan.com/api/users/updateuserpersonalinfo";
/*STEP 3 */
export const SaveCandidateProfessionalInformation = "https://backend.jobsyahan.com/api/users/updateusereducationalinfo";
/*STEP 4 */
export const SaveCandidateWorkInformation = "https://backend.jobsyahan.com/api/users/updateuserworkhistoryinfo"

/* Forgot Password */
export const ForgotPasswordCandidateEmailURL = "https://backend.jobsyahan.com/api/forgotpassword/candidate";
export const ResetPasswordCandidateEmailURL = "https://backend.jobsyahan.com/api/reset-password/candidate/";