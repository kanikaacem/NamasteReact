
import { Box, Container, Stack, Typography, TextField, Button, Stepper, Step, StepLabel } from "@mui/material";

import { useParams } from "react-router-dom";
import { useState } from "react";

import Header from "../../ThemeComponent/Common/Header";
import PersonalInformation from "../../ThemeComponent/ThemeForms/PersonalInformation";
import ProfessionalDetail from "../../ThemeComponent/ThemeForms/ProfessionalDetail";
import WorkHistory from "../../ThemeComponent/ThemeForms/WorkHistory";
import UploadResume from "../../ThemeComponent/ThemeForms/UploadResume";
const CandidateProfile = () => {

    const { step } = useParams();

    function getSteps() {
        return ['Personal Details', 'Professional Details', 'Work History', 'Upload Resume'];
    }

    function getStepContent(step) {
        switch (step) {
            case 0:
                return 'Personal Details';
            case 1:
                return 'Professional Details';
            case 2:
                return 'Work History';
            case 3:
                return 'Upload Resume'
            default:
                return 'Unknown step';
        }
    }
    const isStepSkipped = (step) => {
        return skipped.has(step);
    };
    const [activeStep, setActiveStep] = useState(step);
    const [skipped, setSkipped] = useState(new Set());

    const steps = getSteps();

    return (<>


        <Box >
            {activeStep == 0 && <PersonalInformation setActiveStep={setActiveStep} />}
            {activeStep == 1 && <ProfessionalDetail setActiveStep={setActiveStep} />}
            {activeStep == 2 && <WorkHistory setActiveStep={setActiveStep} ></WorkHistory>}
            {activeStep == 3 && <UploadResume ></UploadResume>}
        </Box>

    </>)
}

export default CandidateProfile;