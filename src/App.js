import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";

/*Email Verification Page*/
import EmployerVerficationPage from './pages/Common/EmailVerficationPage';

/*ForgotPasswordPage */
import ForgotPasswordPage from './pages/Common/ForgotPasswordPage';
import ResetPasswordPage from "./pages/Common/ResetPasswordPage";
/*Employer Component*/
import EmployerRegister from './pages/Employer/EmployerRegister';
import EmployerLogin from "./pages/Employer/EmployerLogin";
import EmployerDashboard from "./pages/Employer/EmployerDashboard";
import PostJob from "./pages/Employer/PostJob";
import PostedJobs from './pages/Employer/PostedJobs';
import AccountSetting from './pages/Employer/AccountSetting';
import CandidateRecommendation from './pages/Employer/CandidateRecommendation';
import SavedCandidate from "./pages/Employer/SavedCandidate";
import AppliedCandidate from './pages/Employer/AppliedCandidate';
import Chat from "./pages/Common/Chat";
import ViewProfile from "./pages/Employer/ViewProfile";

/*Candidate Component*/
import CandidateRegistration from "./pages/Candidate/CandidateRegistration";
import CandidateLogin from "./pages/Candidate/CandidateLogin";
import CandidateDashboard from "./pages/Candidate/CandidateDashboard";
import CandidateProfile from "./pages/Candidate/CandidateProfile";
import CandidateProfilePage from "./pages/Candidate/CandidateProfilePage";
import UpdateProfile from "./pages/Candidate/UpdateProfile";
import Settings from './pages/Candidate/Settings';
import Profile from "./pages/Candidate/CandidateProfilePage";
import CandidateJobPerferences from "./pages/Candidate/CandidateJobPerferences";
import SavedJobs from './pages/Candidate/SavedJobs';
import CandidateDashboard2 from "./pages/Candidate/CandidateDashboard2";

/*Website Page*/
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./utils/PrivateRoute";
import Dashboard from './pages/Common/Dashboard';
import JobDescription from './pages/JobDescription';
import JobSearch from './ThemeComponent/Common/JobSearch';

function App() {

  const isLoggedIn = useSelector(state => state.isLoggedIn);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />

          <Route path="/forgot-password/employer" element={<ForgotPasswordPage />} />
          <Route path="/reset-password/employer/:token" element={<ResetPasswordPage user="employer" />} />

          <Route path="/verificationthroughmail/candidate/:candidateEmail" element={<EmployerVerficationPage />} />
          <Route path="/verificationthroughmail/employer/:employerEmail" element={<EmployerVerficationPage />} />

          <Route path="/employer-register" element={<EmployerRegister></EmployerRegister>} />
          <Route path="/employer-login" element={<EmployerLogin></EmployerLogin>} />

          <Route path="/candidate-login" element={<CandidateLogin></CandidateLogin>}></Route>
          <Route path="/candidate-register" element={<CandidateRegistration />} />
          <Route path="/profile/:step" element={<CandidateProfile></CandidateProfile>} />
          <Route path="/job" element={<JobSearch></JobSearch>} />
          <Route path="/candidate-new" element={<CandidateDashboard2></CandidateDashboard2>} />


          <Route path="/employer-dashboard" element={<PrivateRoute Component={Dashboard}></PrivateRoute>}>
            <Route path="" element={<EmployerDashboard></EmployerDashboard>} />
            <Route path="post-a-job" element={<PostJob></PostJob>} />
            <Route path="posted-jobs" element={<PostedJobs></PostedJobs>} />
            <Route path="job-description/:id" element={<JobDescription></JobDescription>} />
            <Route path="job/:id/recommedations" element={<CandidateRecommendation></CandidateRecommendation>} />
            <Route path="applied-candidates" element={<AppliedCandidate />} />
            <Route path="saved-candidates" element={<SavedCandidate></SavedCandidate>} />
            <Route path="account-setting" element={<AccountSetting></AccountSetting>} />
            <Route path="view-profile" element={<ViewProfile></ViewProfile>} />
            <Route path="chats" element={<Chat></Chat>} />
          </Route>

          <Route path="/view-profile" element={<ViewProfile></ViewProfile>} />

          <Route path="/update-profile" element={<UpdateProfile></UpdateProfile>} />
          <Route path="/candidate-profile" element={<CandidateProfilePage></CandidateProfilePage>}></Route>

          <Route path="/candidate-dashboard" element={<PrivateRoute Component={Dashboard}></PrivateRoute>}>
            {/* <Route path="/candidate-dashboard" element={<Dashboard />} > */}
            <Route path="" element={<CandidateDashboard></CandidateDashboard>} />
            {/* <Route path="candidate-profile" element={<CandidateProfilePage></CandidateProfilePage>}></Route> */}
            <Route path="update-profile" element={<UpdateProfile></UpdateProfile>} />
            <Route path="saved-jobs" element={<SavedJobs></SavedJobs>} />
            <Route path="perferences" element={<CandidateJobPerferences></CandidateJobPerferences>} />
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
