import { Box } from "@mui/material";

import { useParams } from "react-router-dom";
import { useState } from "react";

import PersonalInformation2 from "../../ThemeComponent/ThemeForms/PersonalInformation2";
import PersonalInformation from "../../ThemeComponent/ThemeForms/PersonalInformation";
import ProfessionalDetail from "../../ThemeComponent/ThemeForms/ProfessionalDetail";
import WorkHistory from "../../ThemeComponent/ThemeForms/WorkHistory";
import UploadResume from "../../ThemeComponent/ThemeForms/UploadResume";

const CandidateProfile = () => {
    const { jobType, step } = useParams();
    const [activeStep, setActiveStep] = useState(step);

    return (<>

        {jobType ? (
            <PersonalInformation2 jobType={jobType} />)
            :
            <>
                <Box>
                    {activeStep == 0 && <PersonalInformation setActiveStep={setActiveStep} />}
                    {activeStep == 1 && <ProfessionalDetail setActiveStep={setActiveStep} />}
                    {activeStep == 2 && <WorkHistory setActiveStep={setActiveStep} ></WorkHistory>}
                    {activeStep == 3 && <UploadResume ></UploadResume>}

                </Box>
            </>
        }


    </>)
}

export default CandidateProfile;