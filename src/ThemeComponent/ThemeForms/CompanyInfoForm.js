import { EmployerCompanyInformationURL, UplaodImageURL } from "../../utils/ApiUrls";
import { postRequest, PostImageRequest } from "../../utils/ApiRequests";

import { Box, Stack, TextField, Typography, MenuItem, Select } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { companyInfoValidationSchema } from "../../Validation/EmployerValidation";

import { cities, ProfileType, CompanyType } from "../../utils/Data";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from "../../ThemeComponent/Common/Error";
import ButtonType3 from "../Common/ButtonType3";

import { SocialBox, ThemeButtontype1, ThemeButtonType2, ThemeButtonType3, ThemeFInputDiv } from "../../utils/Theme";

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

        var output = document.getElementById('companyLogo');
        output.src = URL.createObjectURL(event.target.files[0]);


        let formData = new FormData();
        formData.append('image', event.target.files[0]);
        formData.append('imagetype', "comlogo");
        let response = await PostImageRequest(UplaodImageURL, formData);
        console.log(response);

    }

    const uploadCompanyPan = async (event) => {
        var output = document.getElementById("PanImage");
        output.src = URL.createObjectURL(event.target.files[0]);
        let formData = new FormData();
        formData.append('image', event.target.files[0]);
        formData.append('imagetype', "panimage");
        let response = await PostImageRequest(UplaodImageURL, formData);
        console.log(response);




    }

    const uploadCompanyGST = async (event) => {
        var output = document.getElementById("GSTImage");
        output.src = URL.createObjectURL(event.target.files[0]);
        let formData = new FormData();
        formData.append('image', event.target.files[0]);
        formData.append('imagetype', "gstimage");
        let response = await PostImageRequest(UplaodImageURL, formData);
        console.log(response);


    }
    const handleSubmit = async (values) => {
        let data = new FormData();
        data = {
            employername: values.hr_name,
            mobile: mobile_number,
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
            companylan: values.company_lan_number

        }

        let response = await postRequest(EmployerCompanyInformationURL, data);
        if (response.status == 1) {
            dispatch({ type: 'LOGIN', payload: JSON.stringify(response.data) });
        }


    }
    return (<>
        {isLoggedIn == 'true' && <Navigate to="/employer-dashboard"></Navigate>}

        <Formik

            initialValues={defaultValue}
            validationSchema={companyInfoValidationSchema}
            onSubmit={handleSubmit}
        >
            {({ errors, touched, values, setFieldValue }) => (
                <Form className="CompanyInformationForm">
                    <ThemeFInputDiv>
                        <ThemeFInputDiv>
                            <ThemeLabel LableFor="hr_name" LableText="HR Name" />
                            <Field
                                error={errors.hr_name && touched.hr_name}
                                id="hr_name"
                                as={TextField}
                                placeholder="Enter HR Name" type="text" name="hr_name" fullWidth />
                            {errors.hr_name && touched.hr_name && <Error text={errors.hr_name} />}

                        </ThemeFInputDiv>

                        <ThemeFInputDiv>
                            <ThemeLabel LableFor="company_name" LableText="Company Name" />
                            <Field
                                error={errors.company_name && touched.company_name}
                                id="company_name"
                                as={TextField}
                                placeholder="Enter Company Name (eg. XYZ Company )" type="text" name="company_name" fullWidth />
                            {errors.company_name && touched.company_name && <Error text={errors.company_name} />}

                        </ThemeFInputDiv>

                        <ThemeFInputDiv>
                            <ThemeLabel LableFor="company_type" LableText="Company Type" />
                            <Select
                                classNamePrefix="react-select"
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
                        </ThemeFInputDiv>

                        <ThemeFInputDiv sx={{ width: "80px" }}>
                            <img id="companyLogo" width="100%" />
                        </ThemeFInputDiv>

                        <ThemeFInputDiv>

                            <ThemeLabel LableFor="upload_company_logo" LableText="Upload Company Logo" />

                            <Field
                                id="upload_company_logo"
                                style={{ display: "none", outline: "none" }}
                                type="file" name="upload_company_logo"
                                onChange={
                                    uploadCompanyLogo
                                }
                                fullWidth />


                            <ButtonType3 ButtonText="Upload Company Logo" ClickEvent={() => document.getElementById("upload_company_logo").click()}></ButtonType3>
                        </ThemeFInputDiv>
                        {/* 
                        <Box className="input-item">
                            <ThemeLabel LableFor="company_email" LableText="Company Email" />
                            <Field
                                error={errors.company_email && touched.company_email}
                                id="company_email"
                                variant="standard"
                                as={TextField}
                                placeholder="Enter Company Email ( eg. xyz@company.com )" type="text" name="company_email" fullWidth />
                            {errors.company_email && touched.company_email && <Error text={errors.company_email} />}

                        </Box>

                        <Box className="input-item">
                            <ThemeLabel LableFor="company_lan_number" LableText="Company Landline Number" />
                            <Field
                                error={errors.company_lan_number && touched.company_lan_number}
                                id="company_lan_number"
                                variant="standard"
                                as={TextField}
                                placeholder="Enter Company Landline Number ( eg. 9898989898 )" type="text" name="company_lan_number" fullWidth />
                            {errors.company_lan_number && touched.company_lan_number && <Error text={errors.company_lan_number} />}
                        </Box>

                        <Box className="input-item">
                            <ThemeLabel LableFor="company_website" LableText="Company Website" />
                            <Field
                                error={errors.company_website && touched.company_website}
                                id="company_website"
                                variant="standard"
                                as={TextField}
                                placeholder="Enter Company Website ( eg. xyz.com )" type="text" name="company_website" fullWidth />
                            {errors.company_website && touched.company_website && <Error text={errors.company_website} />}

                        </Box>

                        <Box className="input-item">
                            <ThemeLabel LableFor="company_pincode" LableText="Company Pincode" />
                            <Field
                                error={errors.company_pincode && touched.company_pincode}
                                id="company_pincode"
                                variant="standard"
                                as={TextField}
                                placeholder="Enter Company Pincode ( eg. 23123 )" type="text" name="company_pincode" fullWidth />
                            {errors.company_pincode && touched.company_pincode && <Error text={errors.company_pincode} />}

                        </Box>

                        <Box className="input-item">
                            <ThemeLabel LableFor="company_address" LableText="Company Address" />
                            <Box sx={{ width: "100%", margin: "10px 0px" }}>
                                <TextField
                                    error={errors.company_address && touched.company_address}
                                    sx={{ width: "100%" }}
                                    variant="standard"
                                    placeholder="Company Address"
                                    multiline
                                    rows={4}
                                    maxRows={4}
                                    onChange={(event) => setFieldValue("company_address", event.target.value)}
                                />
                            </Box>

                            {errors.company_address && touched.company_address && <Error text={errors.company_address} />}

                        </Box>

                        <Box className="input-item">
                            <ThemeLabel LableFor="city" LableText="City" />
                            <Select
                                classNamePrefix="react-select"
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

                            <ButtonType3 ButtonText="Upload Company Pan Number Image" ClickEvent={() => document.getElementById("company_pan_image").click()}></ButtonType3>
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

                            <ButtonType3 ButtonText="Upload Company GST Image" ClickEvent={() => document.getElementById("company_gst_image").click()}></ButtonType3>
                        </Box> */}


                    </ThemeFInputDiv>

                    <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                        <ThemeButtontype1 variant="contained" type="submit">Save</ThemeButtontype1>
                    </Box>
                </Form>)}
        </Formik>
    </>)
}
export default CompanyInfoForm;