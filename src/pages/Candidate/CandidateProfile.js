import { postRequest } from "../../utils/ApiRequests";
import { CandidateQuestion } from "../../utils/ApiUrls";

import { Box, Container, Stack, Typography, TextField, Button, Stepper, Step, StepLabel } from "@mui/material";

import { useParams } from "react-router-dom";
import { useState } from "react";

import Header from "../../ThemeComponent/Common/Header";
import PersonalInformation2 from "../../ThemeComponent/ThemeForms/PersonalInformation";
import PersonalInformation from "../../ThemeComponent/ThemeForms/PersonalInformation";
import ProfessionalDetail from "../../ThemeComponent/ThemeForms/ProfessionalDetail";
import WorkHistory from "../../ThemeComponent/ThemeForms/WorkHistory";
import UploadResume from "../../ThemeComponent/ThemeForms/UploadResume";

import { useEffect } from "react";
const CandidateProfile = () => {
    const { jobType, step } = useParams();

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
    const [questions, setQuestions] = useState([]);
    const steps = getSteps();

    useEffect(() => {
        const getQuestion = async () => {
            let response = await postRequest(CandidateQuestion, {
                jobtype: jobType
            })
            if (response.status === '1')
                setQuestions(response.data[0].questions)
        }
        jobType && getQuestion();
    }, [jobType]);
    return (<>
        {console.log(jobType)}

        {jobType ? <PersonalInformation2 /> :
            "hello"
            // <>
            //     <Box>
            //         {activeStep == 0 && <PersonalInformation setActiveStep={setActiveStep} />}
            //         {activeStep == 1 && <ProfessionalDetail setActiveStep={setActiveStep} />}
            //         {activeStep == 2 && <WorkHistory setActiveStep={setActiveStep} ></WorkHistory>}
            //         {activeStep == 3 && <UploadResume ></UploadResume>}

            //     </Box>
            // </>
        }


    </>)
}

export default CandidateProfile;