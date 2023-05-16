import { useParams } from "react-router-dom";
import { useState } from "react";

import PersonalInformation from "../../ThemeComponent/ThemeForms/PersonalInformation";
import ProfessionalDetail from "../../ThemeComponent/ThemeForms/ProfessionalDetail";
import WorkHistory from "../../ThemeComponent/ThemeForms/WorkHistory";
import UploadResume from "../../ThemeComponent/ThemeForms/UploadResume";

const NormalCandidateRegistration = () => {
    const { jobType, step } = useParams();
    const [activeStep, setActiveStep] = useState(step);

    return (<>
        {parseInt(activeStep) === 0 && <PersonalInformation setActiveStep={setActiveStep} jobType={jobType} />}
        {parseInt(activeStep) === 1 && <ProfessionalDetail setActiveStep={setActiveStep} jobType={jobType} />}
        {parseInt(activeStep) === 2 && <WorkHistory setActiveStep={setActiveStep} jobType={jobType}></WorkHistory>}
        {parseInt(activeStep) === 3 && <UploadResume ></UploadResume>}

    </>


    )
}

export default NormalCandidateRegistration;