/*-----------------------Employer ----------------------------*/
/* Api for employer Login */
export const EmployerLoginURL = "http://13.126.115.3:3001/api/employer/loginemployer";

/*Employer Registration */
/*Step 1 - Email and Password saving*/
export const EmployerSaveEmailAndPassword = "http://192.168.1.62:3001/api/employer/savelogindetail";
/*Step 2- Mobile Verification */
/*Step 3 - Company Information Saving */
export const EmployerCompanyInformationURL = "http://192.168.1.62:3001/api/employer/postemployer";
export const UplaodImageURL = "http://192.168.1.62:3001/api/employer/updateimage";

/*Getting the Employer Information */
export const UserInformationURL = "http://192.168.1.62:3001/api/employer/getemployerbyid";

/*Getting the Job */
export const getAllJobs = "http://13.126.115.3:3001/api/job/getalljobs";


/*Posting Job */
export const PostJobURL = "http://13.126.115.3:3001/api/job/postjob";

/* Api for getting the data of the posted jobs*/
export const getAllPostedJobs = "http://13.126.115.3:3001/api/job/getpostedjobs";


/*----------------------Candidate----------------------------------------*/
/*Candidate Registration*/

/*STEP 1 */
export const saveCandidateUserNameAndPasswordURL = "http://13.126.115.3:3001/api/users/saveusernameandpassword";