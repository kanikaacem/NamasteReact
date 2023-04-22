import { getRequest } from "../../utils/ApiRequests";
import { checkBlueCollarJob } from "../../utils/ApiUrls";

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
        {activeStep == 0 && <PersonalInformation setActiveStep={setActiveStep} jobType={jobType} />}
        {activeStep == 1 && <ProfessionalDetail setActiveStep={setActiveStep} jobType={jobType} />}
        {activeStep == 2 && <WorkHistory setActiveStep={setActiveStep} jobType={jobType}></WorkHistory>}
        {activeStep == 3 && <UploadResume ></UploadResume>}

    </>


    )
}

export default NormalCandidateRegistration;