import { Box, Stack, Typography, Snackbar, Alert, TextField } from "@mui/material";

import { Formik, Field, Form } from "formik";

import { NewEmailValidation } from "../../Validation/CandidateValidation";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from "../../ThemeComponent/Common/Error";
import ButtonType1 from "../../ThemeComponent/Common/ButtonType1";

import { useState } from "react";
const Account = () => {
    const [accountDeactivate, setAccountDeactivate] = useState(false);
    const [showEmailForm, setShowEmailForm] = useState(false);
    const [emailChange, setEmailChange] = useState(false);
    const handleClose = (event) => {
        setAccountDeactivate(false);
    };
    const defaultValue = {
        email_address: ""
    }

    const handleSubmit = async (values, { resetForm }) => {

        let formData = new FormData();
        formData = {
            email: values.email_address
        }
        setEmailChange(true);
        // let response = await fetch(api_url + "/api/job/postjob", {
        //     // Adding method type
        //     method: "POST",
        //     // Adding body or contents to send
        //     headers: {
        //         'Access-Control-Allow-Origin': '*',
        //         'Content-Type': 'application/json; charset=UTF-8'
        //     },
        //     body: JSON.stringify(formData),
        // })
        // if (response.ok) {
        //     response = await response.json();
        //     if (response.status == 1) {
        //         setFormSubmitted(true);

        //         resetForm();
        //         setCity(" ");
        //         setRole(" ");
        //         selectedOptions(" ");
        //     }

        // }

    }
    return (<>
        <Snackbar
            open={accountDeactivate}
            autoHideDuration={6000} onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Your Account is deactived.
            </Alert>

        </Snackbar>

        <Snackbar
            open={emailChange}
            autoHideDuration={6000} onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Your email is changed. Verification Link is send to the Email address
            </Alert>

        </Snackbar>


        <Box sx={{ background: "#FFFFFF", padding: "10px", minHeight: "200px", broderRadius: '10px' }}>
            <Stack direction="row" justifyContent="space-between">
                <Typography component="div" sx={{ fontSize: "20px" }}>
                    Account Setting
                </Typography>
                <Box sx={{ color: "#2B1E44", cursor: "pointer" }} onClick={() => setAccountDeactivate(true)}> Deactivate Account ?</Box>
            </Stack>

            <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box className="input-item">
                    <ThemeLabel LableFor="email_address" LableText=" New Email Address" />
                    <TextField
                        variant="standard"
                        id="email_id"
                        value="kanika.np@acem.edu.in"
                        type="text" name="email_id" fullWidth />
                </Box>
                <Box sx={{ fontWeight: "600", width: "70%", scolor: "#2B1E44", cursor: "pointer" }} onClick={() => setShowEmailForm(true)}> Change Email</Box>
            </Stack>

            {showEmailForm && (<>
                <Formik

                    initialValues={defaultValue}
                    validationSchema={NewEmailValidation}
                    onSubmit={handleSubmit}
                >
                    {({ values, errors, touched, setFieldValue }) => (
                        <Form >
                            <Stack direction="row" gap={3}>
                                <Box className="input-item" sx={{ width: "60%" }}>
                                    <ThemeLabel LableFor="email_address" LableText="Email Address" />
                                    <Field
                                        variant="standard"
                                        error={errors.email_address && touched.email_address}
                                        as={TextField}
                                        id="email_address"
                                        placeholder="Enter Email Address" type="text" name="email_address" fullWidth />
                                    {errors.email_address && errors.email_address && <Error text={errors.email_address} />}
                                </Box>

                                <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                                    <ButtonType1 ButtonText="Update Email" />
                                </Box>
                            </Stack>

                        </Form>
                    )}
                </Formik></>)}




        </Box></>)
}

export default Account;