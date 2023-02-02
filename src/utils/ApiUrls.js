/*-----------------------Employer ----------------------------*/
/* Api for employer Login */
export const EmployerLoginURL = "https://13.235.183.204:3001/api/employer/loginemployer";
// export const EmployerLoginURL = "https://192.168.1.4:3001/api/employer/loginEmployer";
/*Employer Registration */
/*Checking if the Email Present or not */
export const CheckEmployerEmailExist = "https://13.235.183.204:3001/api/employer/checkemail"

/*Step 1 - Email and Password saving*/
export const EmployerSaveEmailAndPassword = "https://13.235.183.204:3001/api/employer/savelogindetail";
/*Step 2- Mobile Verification */
/*Step 3 - Company Information Saving */
/*Getting all the state and cities */
export const StatesURL = "https://13.235.183.204:3001/api/map/states";
export const EmployerCompanyInformationURL = "https://13.235.183.204:3001/api/employer/postemployer";
export const UplaodImageURL = "https://13.235.183.204:3001/api/employer/updateimage";

/*Getting the Employer Information */
export const UserInformationURL = "https://192.168.1.4:3001/api/employer/getemployerbyid";

/*Getting the Job */
export const getAllJobs = "https://13.126.115.3:3001/api/job/getalljobs";


/*Posting Job */
export const getJobTypeURL = "https://13.235.183.204:3001/api/file/jobtype";
export const PostJob1 = "https://13.235.183.204:3001/api/job/postjob1";
export const PostJob2 = "https://13.235.183.204:3001/api/job/postjob2";

// export const PostJobURL = "https://13.235.183.204:3001/api/job/postjob";

/* Api for getting the data of the posted jobs*/
export const getAllPostedJobs = "https://13.235.183.204:3001/api/job/getpostedjobs";

/*Resending the Email Verification Link */
export const ReSendEmailVerificationURL = "https://13.235.183.204:3001/api/resendlink/employer";

/*Forgot Password */
export const ForgotPasswordEmployerEmailURL = "https://13.235.183.204:3001/api/forgotpassword/employer"
export const ResetPasswordEmployerEmailURL = "https://13.235.183.204:3001/api/reset-password/employer/";
/*----------------------Candidate----------------------------------------*/
/*Candidate Registration*/

/*Candidate Login */
export const CandidateLoginURL = "https://13.235.183.204:3001/api/users/login";

/*Email Present */
export const EmailExist = "https://13.235.183.204:3001/api/users/checkemailexist";
/*STEP 1 */
export const saveCandidateUserNameAndPasswordURL = "https://13.235.183.204:3001/api/users/createuser";
/*STEP 2 */
export const SaveCandidatePersonalInformation = "https://13.235.183.204:3001/api/users/updateuserpersonalinfo";
/*STEP 3 */
export const SaveCandidateProfessionalInformation = "https://13.235.183.204:3001/api/users/updateusereducationalinfo";
/*STEP 4 */
export const SaveCandidateWorkInformation = "https://13.235.183.204:3001/api/users/updateuserworkhistoryinfo"