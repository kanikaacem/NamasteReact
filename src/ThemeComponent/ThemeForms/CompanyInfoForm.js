import { Box, TextField, Typography, MenuItem, Select } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { companyInfoValidationSchema } from "../../Validation/EmployerValidation";

import { cities, ProfileType, CompanyType } from "../../utils/Data";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from "../../ThemeComponent/Common/Error";
import ButtonType1 from "../Common/ButtonType1";
import ButtonType2 from "../Common/ButtonType2";

import { useState, useRef } from "react";
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const CompanyInfoForm = ({ email, userId, mobile_number }) => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const api_url = useSelector(state => state.api_url);
    const dispatch = useDispatch();

    const companyImageRef = useRef();
    const companyGSTRef = useRef();
    const companyPanRef = useRef();

    const [companyLogoImage, setCompanyLogoImage] = useState();
    const [companyGST, setCompanyGST] = useState();
    const [companyPan, setCompanyPan] = useState();

    const [companyLogoError, setcompanyLogoError] = useState("");

    const [city, setCity] = useState(" ");
    const [profileType, setProfileType] = useState(" ");
    const [companyType, setCompanyType] = useState(" ");

    const defaultValue = {
        hr_name: "",
        profile_type: "",
        company_type: "",
        company_name: "",
        company_email: "",
        company_website: "",
        company_address: "",
        city: "",
        company_lan_number: "",
        company_pincode: "",
        company_pan_number: "",
        company_gst_number: ""

    }


    const uploadCompanyLogo = async (event) => {
        let file = event.target.files[0];
        let file_size = file.size;
        // setCompanyLogoImage(file);
        // console.log(companyLogoImage);
        var output = document.getElementById('companyLogo');
        output.src = URL.createObjectURL(event.target.files[0]);

        // if (file != 'png' && file != 'jpeg' && file != 'jpg')
        //     setcompanyLogoError("File type should be JPEG and PNG.")
        // else if (file_size > 3000000) {
        //     setcompanyLogoError("File Size should be less than and equal to 3MB.")
        // }
        // else {
        let formData = new FormData();
        formData.append('image', event.target.files[0]);
        formData.append('imagetype', "comlogo");
        formData.append('userid', userId);
        let response = await fetch(api_url + "/api/users/postuser", {
            method: "POST",
            body: formData,
        })
        if (response.ok) {
            response = await response.json();
            console.log(response);
        }
    }

    const uploadCompanyPan = async (event) => {
        var output = document.getElementById("PanImage");
        output.src = URL.createObjectURL(event.target.files[0]);
        let formData = new FormData();
        formData.append('image', event.target.files[0]);
        formData.append('imagetype', "panimage");
        formData.append('userid', userId);
        let response = await fetch(api_url + "/api/users/postuser", {
            method: "POST",
            body: formData,
        })
        if (response.ok) {
            response = await response.json();
            console.log(response);
        }



    }

    const uploadCompanyGST = async (event) => {
        var output = document.getElementById("GSTImage");
        output.src = URL.createObjectURL(event.target.files[0]);
        let formData = new FormData();
        formData.append('image', event.target.files[0]);
        formData.append('imagetype', "gstimage");
        formData.append('userid', userId);
        let response = await fetch(api_url + "/api/users/postuser", {
            method: "POST",
            body: formData,
        })
        if (response.ok) {
            response = await response.json();
            console.log(response);
        }

    }
    const handleSubmit = async (values) => {
        let data = new FormData();
        data = {
            userid: userId,
            // userid: "63a69a19d990bbac7fc42042",
            employername: values.hr_name,
            mobile: mobile_number,
            companyprofiletype: values.profile_type,
            companytype: values.company_type,
            companyname: values.company_name,
            companyemail: values.company_email,
            companywebsite: values.company_website,
            companyaddress: values.company_address,
            companycity: values.company_city,
            companynumber: values.company_lan_number,
            companypincode: values.company_pincode,
            companypancard: values.company_pan_number,
            companygstnumber: values.company_gst_number,
            // userid: "63a040c3e45cb1872e2e7cc6"

        }
        let response = await fetch(api_url + "/api/employer/postemployer", {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(data),
        })
        if (response.ok) {
            response = await response.json();
            // console.log(response.user);
            dispatch({ type: 'LOGIN', payload: JSON.stringify(response.user) });
            // window.location.href = "http://localhost:3000/employer-login";
        }

    }
    return (<>
        {isLoggedIn == 'true' && <Navigate to="/employer-dashboard"></Navigate>}

        <Typography component="h3" sx={{ fontSize: "30px", fontWeight: "600", textAlign: "center", color: "#2B1E44", margin: "30px 0px" }}>
            Company Information
        </Typography>

        <Formik

            initialValues={defaultValue}
            validationSchema={companyInfoValidationSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched, values, setFieldValue }) => (
                <Form className="CompanyInformationForm">

                    <Box className="input-item">
                        <ThemeLabel LableFor="hr_name" LableText="Hr Name" />
                        <Field
                            error={errors.hr_name && touched.hr_name}
                            id="hr_name"
                            variant="standard"
                            as={TextField}
                            placeholder="Enter HR fullName" type="text" name="hr_name" fullWidth />
                        {errors.hr_name && touched.hr_name && <Error text={errors.hr_name} />}

                    </Box>

                    <Box className="input-item">
                        <ThemeLabel LableFor="profile_type" LableText="Profile Type" />
                        <Select
                            variant="standard"
                            labelId="demo-simple-select-label"
                            name="profile_type"
                            value={profileType}
                            label="Age"
                            onChange={(event) => {
                                setProfileType(event.target.value);
                                setFieldValue("profile_type", event.target.value);
                            }}
                            sx={{ display: "block", boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                            disableUnderline
                        >
                            <MenuItem value=" ">Select Profile Type</MenuItem>
                            {ProfileType.map((item) =>
                                <MenuItem value={item.value} key={item.id}>{item.name}</MenuItem>
                            )}
                        </Select>

                        {errors.profile_type && touched.profile_type && <Error text={errors.profile_type} />}
                    </Box>


                    <Box className="input-item">
                        <ThemeLabel LableFor="company_name" LableText="Company Name" />
                        <Field
                            error={errors.company_name && touched.company_name}
                            id="company_name"
                            variant="standard"
                            as={TextField}
                            placeholder="Enter Company Name" type="text" name="company_name" fullWidth />
                        {errors.company_name && touched.company_name && <Error text={errors.company_name} />}

                    </Box>
                    <Box className="input-item">
                        <ThemeLabel LableFor="company_type" LableText="Company Type" />
                        <Select
                            variant="standard"
                            labelId="demo-simple-select-label"
                            name="company_type"
                            value={companyType}
                            label="Age"
                            onChange={(event) => {
                                setCompanyType(event.target.value);
                                setFieldValue("company_type", event.target.value);
                            }}
                            sx={{ display: "block", boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                            disableUnderline
                        >
                            <MenuItem value=" ">Select Company Type</MenuItem>
                            {CompanyType.map((item) =>
                                <MenuItem value={item.value} key={item.id}>{item.name}</MenuItem>
                            )}
                        </Select>

                        {errors.company_type && touched.company_type && <Error text={errors.company_type} />}
                    </Box>


                    <Box sx={{ width: "80px" }}>
                        <img id="companyLogo" width="100%" />
                    </Box>

                    <Box className="input-item">

                        <ThemeLabel LableFor="upload_company_logo" LableText="Upload Company Logo" />

                        <Field
                            id="upload_company_logo"
                            style={{ display: "none", outline: "none" }}
                            type="file" name="upload_company_logo"
                            onChange={
                                uploadCompanyLogo
                            }
                            fullWidth />


                        <ButtonType2 ButtonText="Upload Company Logo" ClickEvent={() => document.getElementById("upload_company_logo").click()}></ButtonType2>
                    </Box>

                    <Box className="input-item">
                        <ThemeLabel LableFor="company_email" LableText="Company Email" />
                        <Field
                            error={errors.company_email && touched.company_email}
                            id="company_email"
                            variant="standard"
                            as={TextField}
                            placeholder="Enter Company Email" type="text" name="company_email" fullWidth />
                        {errors.company_email && touched.company_email && <Error text={errors.company_email} />}

                    </Box>

                    <Box className="input-item">
                        <ThemeLabel LableFor="company_lan_number" LableText="Company Lan Number" />
                        <Field
                            error={errors.company_lan_number && touched.company_lan_number}
                            id="company_lan_number"
                            variant="standard"
                            as={TextField}
                            placeholder="Enter Company Lan Number" type="text" name="company_lan_number" fullWidth />
                        {errors.company_lan_number && touched.company_lan_number && <Error text={errors.company_lan_number} />}
                    </Box>

                    <Box className="input-item">
                        <ThemeLabel LableFor="company_website" LableText="Company Website" />
                        <Field
                            error={errors.company_website && touched.company_website}
                            id="company_website"
                            variant="standard"
                            as={TextField}
                            placeholder="Enter Company Website" type="text" name="company_website" fullWidth />
                        {errors.company_website && touched.company_website && <Error text={errors.company_website} />}

                    </Box>

                    <Box className="input-item">
                        <ThemeLabel LableFor="company_pincode" LableText="Company Pincode" />
                        <Field
                            error={errors.company_pincode && touched.company_pincode}
                            id="company_pincode"
                            variant="standard"
                            as={TextField}
                            placeholder="Enter Company Pincode" type="text" name="company_pincode" fullWidth />
                        {errors.company_pincode && touched.company_pincode && <Error text={errors.company_pincode} />}

                    </Box>

                    <Box className="input-item">
                        <ThemeLabel LableFor="city" LableText="City" />
                        <Select
                            variant="standard"
                            labelId="demo-simple-select-label"
                            name="city"
                            value={city}
                            label="Age"
                            onChange={(event) => {
                                setCity(event.target.value);
                                setFieldValue("city", event.target.value);
                            }}
                            sx={{ display: "block", boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                            disableUnderline
                        >
                            <MenuItem value=" ">Select City</MenuItem>
                            {cities.map((item) =>
                                <MenuItem value={item.value} key={item.id}>{item.name}</MenuItem>
                            )}
                        </Select>

                        {errors.city && touched.city && <Error text={errors.city} />}
                    </Box>

                    <Box className="input-item">
                        <ThemeLabel LableFor="company_pan_number" LableText="Company Pan Number" />
                        <Field
                            error={errors.company_pan_number && touched.company_pan_number}
                            id="company_pan_number"
                            variant="standard"
                            as={TextField}
                            placeholder="Enter Company Pan Number" type="text" name="company_pan_number" fullWidth />
                        {errors.company_pan_number && touched.company_pan_number && <Error text={errors.company_pan_number} />}

                    </Box>
                    <Box sx={{ width: "80px" }}>
                        <img id="PanImage" width="100%" />
                    </Box>

                    <Box className="input-item">
                        <ThemeLabel LableFor="company_pan_image" LableText="Upload Company Pan Number Image" />

                        <Field
                            id="company_pan_image"
                            style={{ display: "none", outline: "none" }}
                            as={TextField}
                            type="file" name="company_pan_image"
                            onChange={uploadCompanyPan} fullWidth />

                        <ButtonType2 ButtonText="Upload Company Pan Number Image" ClickEvent={() => document.getElementById("company_pan_image").click()}></ButtonType2>
                    </Box>


                    <Box className="input-item">
                        <ThemeLabel LableFor="company_gst_number" LableText="Company GST Number" />
                        <Field
                            error={errors.company_gst_number && touched.company_gst_number}
                            id="company_gst_number"
                            variant="standard"
                            as={TextField}
                            placeholder="Enter Company GST Number" type="text" name="company_gst_number" fullWidth />
                        {errors.company_gst_number && touched.company_gst_number && <Error text={errors.company_gst_number} />}

                    </Box>
                    <Box sx={{ width: "80px" }}>
                        <img id="GSTImage" width="100%" />
                    </Box>

                    <Box className="input-item">
                        <ThemeLabel LableFor="company_gst_image" LableText="Upload Company GST Image" />

                        <Field
                            id="company_gst_image"
                            style={{ display: "none", outline: "none" }}
                            as={TextField}
                            type="file" name="company_gst_image"
                            onChange={uploadCompanyGST} fullWidth />

                        <ButtonType2 ButtonText="Upload Company GST Image" ClickEvent={() => document.getElementById("company_gst_image").click()}></ButtonType2>
                    </Box>

                    <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                        <ButtonType1 ButtonText="Save" />
                    </Box>
                </Form>)}
        </Formik>
    </>)
}
export default CompanyInfoForm;