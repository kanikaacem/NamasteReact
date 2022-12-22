
import { Box, Container, Stack, Typography, TextField, Button, Stepper, Step, StepLabel } from "@mui/material";

import { Formik, Field, Form } from "formik";

const PersonalInformation = () => {
    return (<>
        <Box sx={{
            border: "1px solid #2B1E44",
            height: "700px",
            width: "60%",
            margin: "0 auto"
        }}>
            <Box sx={{ height: "50px", background: "#E4E4E4" }}>
                <Typography component="h3" sx={{ fontSize: "20px", fontWeight: "600", color: "#000000", display: "flex", alignItem: 'center', justifyContent: "center" }}>
                    Personal Details
                </Typography>
            </Box>
        </Box>
    </>)
}

export default PersonalInformation;