import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useHistory } from "react-router-dom";

/*Email Verification Page*/
import EmployerVerficationPage from './Pages/Common/EmailVerficationPage';

/*ForgotPasswordPage */
import ForgotPasswordPage from './Pages/Common/ForgotPasswordPage';
import ResetPasswordPage from "./Pages/Common/ResetPasswordPage";
/*Employer Component*/
import EmployerRegister from './Pages/Employer/EmployerRegister';
import EmployerLogin from "./Pages/Employer/EmployerLogin";
import EmployerDashboard from "./Pages/Employer/EmployerDashboard";
import PostJob from "./Pages/Employer/PostJob";
import PostedJobs from './Pages/Employer/PostedJobs';
import AccountSetting from './Pages/Employer/AccountSetting';
import CandidateRecommendation from './Pages/Employer/CandidateRecommendation';
import SavedCandidate from "./Pages/Employer/SavedCandidate";
import AppliedCandidate from './Pages/Employer/AppliedCandidate';
import ViewProfile from './Pages/Employer/ViewProfile';
// import CandidateProfilePage from "./ThemeComponent/Common/CandidateProfilePage";

/*Candidate Component*/
import CandidateProfile from './Pages/Candidate/CandidateProfile';
import JobTypePage from "./Pages/Candidate/JobTypePage";
import CandidateRegistration from "./Pages/Candidate/CandidateRegistration";
import CandidateLogin from "./Pages/Candidate/CandidateLogin";
import CandidateDashboard from "./Pages/Candidate/CandidateDashboard";
import CandidateProfilePage from "./Pages/Candidate/CandidateProfilePage";
import CandidateJobPerferences from "./Pages/Candidate/CandidateJobPerferences";
import SavedJobs from './Pages/Candidate/SavedJobs';
import ProfileComponent from './ThemeComponent/Common/ProfileComponent';
import CandidateMobileVerify from './ThemeComponent/ThemeForms/CandidateMobileVerify';

/*Website Page*/
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound";
import PrivateRoute from "./utils/PrivateRoute";
import Dashboard from './Pages/Common/Dashboard';
import JobDescription from './Pages/JobDescription';
import JobSearch from './ThemeComponent/Common/JobSearch';
import ContactUs from "./Pages/Common/ContactUs";
import AboutUs from './Pages/Common/AboutUs';
import PersonalInformationInformation2 from "./ThemeComponent/ThemeForms/PersonalInformation2";
import { useEffect } from "react";
function App() {

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />
          <Route path="/contact-us" element={<ContactUs></ContactUs>} />
          <Route path="/about-us" element={<AboutUs></AboutUs>} />

          <Route path="/forgot-password/employer" element={<ForgotPasswordPage user="employer" />} />
          <Route path="/reset-password/employer/:token" element={<ResetPasswordPage user="employer" />} />

          <Route path="/forgot-password/candidate" element={<ForgotPasswordPage user="candidate" />} />
          <Route path="/reset-password/candidate/:token" element={<ResetPasswordPage user="candidate" />} />

          <Route path="/verificationthroughmail/candidate/:candidateEmail" element={<EmployerVerficationPage />} />
          <Route path="/verificationthroughmail/employer/:employerEmail" element={<EmployerVerficationPage />} />

          <Route path="/employer-register" element={<EmployerRegister></EmployerRegister>} />
          <Route path="/employer-login" element={<EmployerLogin></EmployerLogin>} />
          <Route path="/personal-info" element={<PersonalInformationInformation2></PersonalInformationInformation2>} ></Route>

          <Route path="/candidate-login" element={<CandidateLogin></CandidateLogin>}></Route>
          <Route path="/candidate-register" element={<CandidateRegistration />} />
          <Route path="/profile/:step" element={<CandidateProfile></CandidateProfile>} />
          <Route path="/job" element={<JobSearch></JobSearch>} />

          <Route path="/employer-dashboard" element={<PrivateRoute Component={Dashboard}></PrivateRoute>}>
            <Route path="" element={<EmployerDashboard></EmployerDashboard>} />
            <Route path="post-a-job" element={<PostJob></PostJob>} />
            <Route path="posted-jobs" element={<PostedJobs></PostedJobs>} />
            <Route path="job-description/:id" element={<JobDescription></JobDescription>} />
            <Route path="job/:id/recommedations" element={<CandidateRecommendation></CandidateRecommendation>} />
            <Route path="applied-candidates/:id" element={<AppliedCandidate />} />
            <Route path="saved-candidates" element={<SavedCandidate></SavedCandidate>} />
            <Route path="account-setting" element={<AccountSetting></AccountSetting>} />
            <Route path="view-profile/:id" element={<ViewProfile ></ViewProfile>} />

          </Route>

          <Route path="/view-profile" element={<CandidateProfile></CandidateProfile>} />

          {/* <Route path="/update-profile" element={<UpdateProfile></UpdateProfile>} /> */}
          {/* <Route path="/candidate-profile" element={<CandidateProfilePage></CandidateProfilePage>}></Route> */}


          <Route path="/candidate-dashboard" element={<PrivateRoute Component={Dashboard}></PrivateRoute>}>
            <Route path="" element={<CandidateDashboard></CandidateDashboard>} />
            <Route path="job-description/:id" element={<JobDescription></JobDescription>} />
            <Route path="profile" element={<CandidateProfilePage></CandidateProfilePage>} />
            <Route path="saved-jobs" element={<SavedJobs></SavedJobs>} />
            <Route path="mobile-verify" element={<CandidateMobileVerify></CandidateMobileVerify>} />
            <Route path="perferences" element={<CandidateJobPerferences></CandidateJobPerferences>} />
            <Route path="job-type" element={<JobTypePage></JobTypePage>} />
            <Route path="profile/:step" element={<CandidateProfile></CandidateProfile>} />
            <Route path=":jobType/profile/:step" element={<CandidateProfile></CandidateProfile>} />
            <Route path="*" element={<NotFound></NotFound>} />
          </Route>


          <Route path="/job-description/:id" element={<PrivateRoute Component={JobDescription}></PrivateRoute>} />

          <Route path="*" element={<NotFound></NotFound>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
