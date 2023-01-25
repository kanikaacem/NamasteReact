/*-----------------------Employer ----------------------------*/
/* Api for employer Login */
export const EmployerLoginURL = "http://13.235.183.204:3001/api/employer/loginemployer";
// export const EmployerLoginURL = "http://192.168.1.4:3001/api/employer/loginEmployer";
/*Employer Registration */
/*Checking if the Email Present or not */
export const CheckEmployerEmailExist = "http://13.235.183.204:3001/api/employer/checkemail"

/*Step 1 - Email and Password saving*/
export const EmployerSaveEmailAndPassword = "http://13.235.183.204:3001/api/employer/savelogindetail";
/*Step 2- Mobile Verification */
/*Step 3 - Company Information Saving */
/*Getting all the state and cities */
export const StatesURL = "http://13.235.183.204:3001/api/map/states";
export const EmployerCompanyInformationURL = "http://13.235.183.204:3001/api/employer/postemployer";
export const UplaodImageURL = "http://13.235.183.204:3001/api/employer/updateimage";

/*Getting the Employer Information */
export const UserInformationURL = "http://192.168.1.4:3001/api/employer/getemployerbyid";

/*Getting the Job */
export const getAllJobs = "http://13.126.115.3:3001/api/job/getalljobs";


/*Posting Job */
export const PostJobURL = "http://13.126.115.3:3001/api/job/postjob";

/* Api for getting the data of the posted jobs*/
export const getAllPostedJobs = "http://13.126.115.3:3001/api/job/getpostedjobs";


/*----------------------Candidate----------------------------------------*/
/*Candidate Registration*/

/*Candidate Login */
export const CandidateLoginURL = "http://13.235.183.204:3001/api/users/login";

/*Email Present */
export const EmailExist = "http://13.235.183.204:3001/api/users/checkemailexist";
/*STEP 1 */
export const saveCandidateUserNameAndPasswordURL = "http://13.235.183.204:3001/api/users/createuser";
/*STEP 2 */
export const SaveCandidatePersonalInformation = "http://13.235.183.204:3001/api/users/updateuserpersonalinfo";
/*STEP 3 */
export const SaveCandidateProfessionalInformation = "http://13.235.183.204:3001/api/users/updateusereducationalinfo";
/*STEP 4 */
export const SaveCandidateWorkInformation = "http://13.235.183.204:3001/api/users/updateuserworkhistoryinfo"