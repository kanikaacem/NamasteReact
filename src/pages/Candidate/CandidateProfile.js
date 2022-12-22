
import { Box, Container, Stack, Typography, TextField, Button, Stepper, Step, StepLabel } from "@mui/material";

import { useState } from "react";

import PersonalInformation from "../../ThemeComponent/ThemeForms/PersonalInformation";
const CandidateProfile = () => {

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

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };
    const [activeStep, setActiveStep] = useState(0);
    const [skipped, setSkipped] = useState(new Set());

    const steps = getSteps();

    return (<>
        <Box sx={{ padding: "20px", background: "#FAFAFA" }}>
            <Container>
                <Box>
                    <Stepper activeStep={activeStep}>
                        {steps.map((label, index) => {
                            const stepProps = {};
                            const labelProps = {};
                            if (isStepOptional(index)) {
                                labelProps.optional = <Typography variant="caption">Optional</Typography>;
                            }
                            if (isStepSkipped(index)) {
                                stepProps.completed = false;
                            }
                            return (
                                <Step key={label} {...stepProps}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                </Box>

                <Box sx={{ padding: "30px" }}>
                    {activeStep == 0 && <PersonalInformation />}
                </Box>
            </Container>

        </Box>
    </>)
}

export default CandidateProfile;