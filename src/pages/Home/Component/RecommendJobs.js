import Jobs from "./Job";
import Checkbox from '@mui/material/Checkbox';
const RecommendJobs = () =>{
    return (<> 
      <div className="recommendJobsWrapper">
        <div className="jobItem">
            <Checkbox></Checkbox>
            <div className="jobLogo">
                <img  style={{width: "100%",borderRadius:'10px' }} src="./assets/Company.png" alt=""></img>
            </div>
            <Jobs></Jobs>
        </div>
        <div className="jobItem">
            <Checkbox></Checkbox>
            <div className="jobLogo">
            <img  style={{width: "100%",borderRadius:'10px' }} src="./assets/Company.png" alt=""></img>
            </div>
            <Jobs></Jobs>
        </div>
        <div className="jobItem">
            <Checkbox></Checkbox>
            <div className="jobLogo">
            <img  style={{width: "100%",borderRadius:'10px' }} src="./assets/Company.png" alt=""></img>
            </div>
            <Jobs></Jobs>
        </div>
        <div className="jobItem">
            <Checkbox></Checkbox>
            <div className="jobLogo">
            <img  style={{width: "100%",borderRadius:'10px' }} src="./assets/Company.png" alt=""></img>
            </div>
            <Jobs></Jobs>
        </div>
        <div className="jobItem">
            <Checkbox></Checkbox>
            <div className="jobLogo">
            <img  style={{width: "100%",borderRadius:'10px' }} src="./assets/Company.png" alt=""></img>
            </div>
            <Jobs></Jobs>
        </div>
      </div>
    </>)
}
export default RecommendJobs;