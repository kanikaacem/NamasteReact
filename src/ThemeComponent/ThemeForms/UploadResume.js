import { Box, Stack, Typography, Button, Input, Radio, RadioGroup, FormControlLabel, FormControl, Snackbar, Alert } from "@mui/material";

import { Formik, Field, Form } from "formik";

import DatePicker from "react-datepicker";

import { WorkHistorySchema } from "../../Validation/CandidateValidation";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from '../../ThemeComponent/Common/Error';
import ButtonType1 from "../../ThemeComponent/Common/ButtonType1";
import ButtonType2 from "../../ThemeComponent/Common/ButtonType1";
import { Navigate } from 'react-router-dom';

import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

const UploadResume = ({ setActiveStep }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const api_url = useSelector(state => state.api_url);
    let userid = useSelector(state => state.candidateInfo);

    if (userid != '') {
        userid = JSON.parse(userid);
        userid = userid.data;
    }

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [file, setFile] = useState();

    const handleClose = (event) => {
        setFormSubmitted(false);
    };

    const uploadFile = async (event) => {

        event.preventDefault();
        // console.log(file);
        let file = event.target.files[0];
        let formData = new FormData();
        formData.append('image', file);
        formData.append(userid, "63a6b58725229612746e1cf3");

        let response = await fetch(api_url + "/api/users/uploadresume", {
            method: "POST",
            body: formData,
        })
        if (response.ok) {
            response = await response.json();
            console.log(response);
            setFormSubmitted(true);
            // window.location.href = "http://localhost:3000/employer-login";
        }
        // for (var pair of formData.entries()) {
        //     console.log(pair[0] + ', ' + pair[1]);
        // }
        // console.log(formData);

    }

    const goToDashboard = async () => {
        let response = await fetch(api_url + "/api/users/getuserbyid", {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                userid: userid
            }),
        })
        if (response.ok) {
            response = await response.json();
            console.log(response);
            dispatch({ type: 'LOGIN', payload: JSON.stringify(response.data) });
            // setFormSubmitted(true);
            // window.location.href = "http://localhost:3000/employer-login";
        }
    }

    return (<>
        {isLoggedIn == 'true' && <Navigate to="/candidate-dashboard"></Navigate>}

        <Snackbar
            open={formSubmitted}
            autoHideDuration={6000} onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Your Resume is uploaded
            </Alert>

        </Snackbar>

        <Box sx={{
            width: "60%",
            margin: "50px auto",
            borderRadius: "10px",
            padding: "30px",
            background: "#FFFFFF",
            boxShadow: "0px 3px 17px 0px rgba(99, 99, 99, 1)"
        }}>
            <Typography component="h3" sx={{ fontSize: "25px", color: "#2B1E44", marginBottom: "20px" }}>
                Upload Resume
            </Typography>
            <form>
                <Box className="input-item">
                    <ThemeLabel LableFor="upload_resume" LableText="Upload Resume" />
                    <Box sx={{ margin: "20px 0px" }}>
                        <input type="file" name="upload_resume" id="upload_resume" onChange={uploadFile} />
                        {/* <ButtonType2 ButtonText="Upload Resume" ClickEvent={() => document.getElementById("upload_resume").click()}></ButtonType2> */}
                    </Box>
                </Box>

            </form>
            <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                <Button variant="contained" sx={{ background: "#2B1E44" }} onClick={goToDashboard} >Go to Dashboard</Button>
            </Box>

        </Box></>)
}

export default UploadResume;
