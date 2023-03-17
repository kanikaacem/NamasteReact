import { postRequest } from "../../utils/ApiRequests";
import { CandidateQuestion } from "../../utils/ApiUrls";

import { Box } from "@mui/material";

import { useParams } from "react-router-dom";
import { useState } from "react";

import PersonalInformation2 from "../../ThemeComponent/ThemeForms/PersonalInformation2";
import PersonalInformation from "../../ThemeComponent/ThemeForms/PersonalInformation";
import ProfessionalDetail from "../../ThemeComponent/ThemeForms/ProfessionalDetail";
import WorkHistory from "../../ThemeComponent/ThemeForms/WorkHistory";
import UploadResume from "../../ThemeComponent/ThemeForms/UploadResume";

import { useEffect } from "react";
const CandidateProfile = () => {
    const { jobType, step } = useParams();
    const [activeStep, setActiveStep] = useState(step);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const getQuestion = async () => {
            let response = await postRequest(CandidateQuestion, {
                jobtype: jobType
            })
            if (response.status === '1')
                response.data.length > 0 ?
                    setQuestions(response.data[0].questions)
                    :
                    setQuestions([])
        }
        jobType && getQuestion();
    }, [jobType]);
    return (<>

        {jobType ? (
            <PersonalInformation2 questions={questions} />)
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