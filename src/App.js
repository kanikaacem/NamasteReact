import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
/*Email Verification Page*/
import EmployerVerficationPage from './Pages/Common/EmailVerficationPage';

/*ForgotPasswordPage */
import ForgotPasswordPage from './Pages/Common/ForgotPasswordPage';
import ResetPasswordPage from "./Pages/Common/ResetPasswordPage";
/*Employer Component*/
import EmployerDashboard from './Pages/Employer/EmployerDashboard';
import EmployerRegister from './Pages/Employer/EmployerRegister';
import EmployerLogin from "./Pages/Employer/EmployerLogin";
import PostJob from "./Pages/Employer/PostJob";
import PostedJobs from './Pages/Employer/PostedJobs';
import AppliedCandidate from './Pages/Employer/AppliedCandidate';
import AppliedCandidateOnAJob from './Pages/Employer/AppliedCandidateOnAJob';
// import ViewProfile from './Pages/Employer/ViewProfile';
// import VerifyMobileForm from './ThemeComponent/ThemeForms/VerifyMobileForm';
// import CompanyInfoForm from './ThemeComponent/ThemeForms/CompanyInfoForm';

/*Candidate Component*/
import NormalCandidateRegistration from './Pages/Candidate/NormalCandidateRegistration';
import JobTypePage from "./Pages/Candidate/JobTypePage";
import CandidateRegistration from "./Pages/Candidate/CandidateRegistration";
import CandidateLogin from "./Pages/Candidate/CandidateLogin";
import CandidateDashboard from "./Pages/Candidate/CandidateDashboard";
import CandidateProfilePage from "./Pages/Candidate/CandidateProfilePage";
import CandidateMobileVerify from './ThemeComponent/ThemeForms/CandidateMobileVerify';
import CandidateAppliedSaveLikedJobs from "./Pages/Candidate/CandidateAppliedSaveLikedJobs";
/*Website Page*/
import Home from "./Pages/Home/Home";
import ErrorPage from "./Pages/ErrorPage";
import PrivateRoute from "./utils/PrivateRoute";
import Dashboard from './Pages/Common/Dashboard';
import JobSearch from './ThemeComponent/Common/JobSearch';

import BlueCollarRegistrationForm from "./ThemeComponent/ThemeForms/BlueCollarRegistrationForm";
import ThemeErrorPage from './Pages/Common/ThemeErrorPage';
import { useEffect } from "react";
import JobListing from './Pages/JobListing/JobListing';
import JobDescription from './Pages/JobDescription/JobDescription';
import OTPVerification from './Pages/Candidate/OTPVerification';

import HomePageLite from "./Pages/HomePageLiteSection/HomePageLite";
import LiteAction from "./Pages/HomePageLiteSection/LiteAction";
import CandidateInformation from "./Pages/HomePageLiteSection/CandidateInformation";
import EmployerInformation from './Pages/HomePageLiteSection/EmployerInformation';

/*Candidate Khoze*/
import CandidateCredentialsForm from "./Pages/FindCandidates/CandidateCredentialsForm";
import CandidateRequirementsForm from "./Pages/FindCandidates/CandidateRequirementsForm";
/*Footer Pages*/
import ContactUs from "./Pages/FooterPages/ContactUs";
import AboutUs from './Pages/FooterPages/AboutUs';
import PrivacyPolicy from './Pages/FooterPages/PrivacyPolicy';
import TermAndCondition from './Pages/FooterPages/TermAndCondition';
import { getLocation } from "./utils/function";

function App() {
  useEffect(() => {
    const getCoords = async () => {
      let { latitude, longitude } = await getLocation();
      localStorage.setItem('coordinates', JSON.stringify({ "lat": latitude, "lng": longitude }))
    }
    window.history.scrollRestoration = 'manual'
    if (!localStorage.getItem('coordinates')) {
      getCoords();
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login-error" element={<ThemeErrorPage></ThemeErrorPage>} />

          <Route exact path="/" element={<Home></Home>} />
          <Route path=":currentLanguage/contact-us" element={<ContactUs></ContactUs>} />
          <Route path=":currentLanguage/about-us" element={<AboutUs></AboutUs>} />
          <Route path=":currentLanguage/privacy-policy" element={<PrivacyPolicy></PrivacyPolicy>} />
          <Route path=":currentLanguage/terms-and-conditions" element={<TermAndCondition />} />
          <Route path=":currentLanguage/employer-login" element={<EmployerLogin></EmployerLogin>} />

          <Route path="/homepagelite" element={<HomePageLite></HomePageLite>} />
          <Route path="/useraction" element={<LiteAction></LiteAction>} />
          <Route path="/candidate-information" element={<CandidateInformation></CandidateInformation>} />
          <Route path="/employer-information" element={<EmployerInformation />} />

          <Route path="/forgot-password/employer" element={<ForgotPasswordPage user="employer" />} />
          <Route path="/reset-password/employer/:token" element={<ResetPasswordPage user="employer" />} />

          <Route path="/forgot-password/candidate" element={<ForgotPasswordPage user="candidate" />} />
          <Route path="/reset-password/candidate/:token" element={<ResetPasswordPage user="candidate" />} />

          <Route path="/verificationthroughmail/candidate/:candidateEmail" element={<EmployerVerficationPage />} />
          <Route path="/verificationthroughmail/employer/:employerEmail" element={<EmployerVerficationPage />} />

          <Route path="/employer-register" element={<EmployerRegister></EmployerRegister>} />

          <Route path="/candidate-login" element={<CandidateLogin></CandidateLogin>}></Route>
          <Route path="/candidate-register" element={<CandidateRegistration />} />

          <Route path="/job" element={<JobSearch></JobSearch>} />

          <Route path="/employer-dashboard" element={<PrivateRoute Component={Dashboard} ></PrivateRoute>}>
            <Route path="" element={<EmployerDashboard></EmployerDashboard>} />
            <Route path="posted-jobs" element={<PostedJobs />} />
            <Route path="post-a-job" element={<PostJob></PostJob>} />
            <Route path="applied-candidates" element={<AppliedCandidate />} />
            <Route path="applied-candidates-job/:id" element={<AppliedCandidateOnAJob />} />
          </Route>


          <Route path="/candidate-dashboard" element={<PrivateRoute Component={Dashboard} userRole="candidate"></PrivateRoute>}>
            <Route path="" element={<CandidateDashboard></CandidateDashboard>} />
            <Route path="profile" element={<CandidateProfilePage></CandidateProfilePage>} />
            <Route path="mobile-verify" element={<CandidateMobileVerify></CandidateMobileVerify>} />
            <Route path="job-type" element={<JobTypePage></JobTypePage>} />
            <Route path="normal/:jobType/profile/:step" element={<NormalCandidateRegistration></NormalCandidateRegistration>} />
            <Route path="blue-collar/:jobType/profile/:step" element={<BlueCollarRegistrationForm ></BlueCollarRegistrationForm>} />
            <Route path="applied-jobs" element={<CandidateAppliedSaveLikedJobs JobAction="Applied Jobs"></CandidateAppliedSaveLikedJobs>} />
            <Route path="saved-jobs" element={<CandidateAppliedSaveLikedJobs JobAction="Saved Jobs"></CandidateAppliedSaveLikedJobs>} />
            <Route path="liked-jobs" element={<CandidateAppliedSaveLikedJobs JobAction="Liked Jobs"></CandidateAppliedSaveLikedJobs>} />
            <Route path="*" element={<ErrorPage errorMessage="Page not Found"></ErrorPage>} />
          </Route>

          <Route path="/job-listing" element={<JobListing></JobListing>} />
          <Route path="/job-description/:id" element={<JobDescription></JobDescription>} />
          <Route path="*" element={<ErrorPage errorMessage=" Page not Found "></ErrorPage>} />
          <Route path="/otp-verification" element={<OTPVerification />} />
          <Route path="/find-candidates" element={<CandidateCredentialsForm />} />

          <Route path="/candidate-requirement" element={<CandidateRequirementsForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
