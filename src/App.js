import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useSelector } from "react-redux";

/*Email Verification Page*/
import EmployerVerficationPage from './Pages/Common/EmailVerficationPage';

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
import Chat from "./Pages/Common/Chat";
import ViewProfile from "./Pages/Employer/ViewProfile";

/*Candidate Component*/
import CandidateRegistration from "./Pages/Candidate/CandidateRegistration";
import CandidateLogin from "./Pages/Candidate/CandidateLogin";
import CandidateDashboard from "./Pages/Candidate/CandidateDashboard";
import CandidateProfile from "./Pages/Candidate/CandidateProfile";
import CandidateProfilePage from "./Pages/Candidate/CandidateProfilePage";
import UpdateProfile from "./Pages/Candidate/UpdateProfile";
import Settings from './Pages/Candidate/Settings';
import Profile from "./Pages/Candidate/CandidateProfilePage";
import CandidateJobPerferences from "./Pages/Candidate/CandidateJobPerferences";
import SavedJobs from './Pages/Candidate/SavedJobs';

/*Website Page*/
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound";
import PrivateRoute from "./utils/PrivateRoute";
import Dashboard from './Pages/Common/Dashboard';
import JobDescription from './Pages/JobDescription';
import JobSearch from './ThemeComponent/Common/JobSearch';

function App() {

  const isLoggedIn = useSelector(state => state.isLoggedIn);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home></Home>} />

          <Route path="/verification/:email" element={<EmployerVerficationPage />} />

          <Route path="/employer-register" element={<EmployerRegister></EmployerRegister>} />
          <Route path="/employer-login" element={<EmployerLogin></EmployerLogin>} />

          <Route path="/candidate-login" element={<CandidateLogin></CandidateLogin>}></Route>
          <Route path="/candidate-register" element={<CandidateRegistration />} />
          <Route path="/profile/:step" element={<CandidateProfile></CandidateProfile>} />
          <Route path="/post-a-job" element={<PostJob></PostJob>} />
          <Route path="/job" element={<JobSearch></JobSearch>} />

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
          {/* <Route path="/perferences" element={<CandidateJobPerferences></CandidateJobPerferences>} /> */}
          {/* <Route path="/view-profile" element={<ViewProfile></ViewProfile>} />

          <Route path="/update-profile" element={<UpdateProfile></UpdateProfile>} />
          <Route path="/candidate-profile" element={<CandidateProfilePage></CandidateProfilePage>}></Route> */}

          <Route path="/candidate-dashboard" element={<PrivateRoute Component={Dashboard}></PrivateRoute>}>
            {/* <Route path="/candidate-dashboard" element={<Dashboard />} > */}
            <Route path="" element={<CandidateDashboard></CandidateDashboard>} />
            <Route path="candidate-profile" element={<CandidateProfilePage></CandidateProfilePage>}></Route>
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
