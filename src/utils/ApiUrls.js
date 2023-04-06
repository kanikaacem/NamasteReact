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
// export const getJobTypeURL = "https://backend.jobsyahan.com/api/file/jobtype";
export const getJobTypeURL = "https://backend.jobsyahan.com/api/file/jobscategory";
export const getSKillOnJobType = "https://backend.jobsyahan.com/api/file/jobscategoryskill?category"
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

/*Getting the job Description */
export const JobDescriptionURL = "https://backend.jobsyahan.com/api/job/getjobbyid";
/*----------------------Candidate----------------------------------------*/
/*Candidate Registration*/

/*Candidate Login */
export const CandidateLoginURL = "https://backend.jobsyahan.com/api/users/login";

export const ReSendCandidateEmailVerificationURL = "https://backend.jobsyahan.com/api/resendlink/candidate";

/*Email Present */
export const EmailExist = "https://backend.jobsyahan.com/api/users/checkemailexist";
/*STEP 1 */
export const saveCandidateUserNameAndPasswordURL = "https://backend.jobsyahan.com/api/users/createuser";
/*STEP 2 */
/*Middle Step */
export const checkBlueCollarJob = "https://backend.jobsyahan.com/api/file/findjobtype?jobtype";
export const SaveCandidatePersonalInformation = "https://backend.jobsyahan.com/api/users/updateuserpersonalinfo";
export const BlueCollarProfileCompleted = "https://backend.jobsyahan.com/api/file/updateprofilecomplete";
/*STEP 3 */
export const SaveCandidateProfessionalInformation = "https://backend.jobsyahan.com/api/users/updateusereducationalinfo";
/*STEP 4 */
export const SaveCandidateWorkInformation = "https://backend.jobsyahan.com/api/users/updateuserworkhistoryinfo"

/* Forgot Password */
export const ForgotPasswordCandidateEmailURL = "https://backend.jobsyahan.com/api/forgotpassword/candidate";
export const ResetPasswordCandidateEmailURL = "https://backend.jobsyahan.com/api/reset-password/candidate/";

/*Candidate Question */
export const CandidateQuestion = "https://backend.jobsyahan.com/api/file/getquestion";

/* Apply for the job */
export const ApplyForJob = "https://backend.jobsyahan.com/api/job/applyforjob";

/*uploading Resume */
export const uploadFileURL = "https://backend.jobsyahan.com/api/file/upload";

/*Website */
export const JobSearchPageURL = "https://backend.jobsyahan.com/api/job/searchjobs";

/*Posting Ans */
// export const PostAnswerCandidate = "https://backend.jobsyahan.com/api/users/postquestionanswers";
export const PostAnswerCandidate = "https://backend.jobsyahan.com/api/file/postansweronebyone";

export const GetCandidateOnParticularJob = "https://backend.jobsyahan.com/api/job/candidateonparticularjob?jobid=";
export const GetSpecificCandidateDetail = "https://backend.jobsyahan.com/api/employer/getcandidatebyid";

export const GetUserInformation = "https://backend.jobsyahan.com/api/users/getuser";

export const ShortlistRejectCandidate = "https://backend.jobsyahan.com/api/job/appliedandrejectcand";

export const JobSavedUrl = "https://backend.jobsyahan.com/api/job/savejob";

export const JobLikedUrl = "https://backend.jobsyahan.com/api/job/likejobs";

export const JobAppliedByCandidateUrl = "https://backend.jobsyahan.com/api/job/viewapplyjobslist";
export const LikedJobByCandidateUrl = "https://backend.jobsyahan.com/api/job/viewlikedjobslist";
export const SavedJobByCandidateUrl = "https://backend.jobsyahan.com/api/job/viewsavedjobslist";

export const AppliedCandidateOnPostedJob = "https://backend.jobsyahan.com/api/job/viewcandidateonpostedjobs";