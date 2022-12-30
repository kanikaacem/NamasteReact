import { EmployerCompanyInformationURL, UplaodImageURL } from "../../utils/ApiUrls";
import { postRequest, PostImageRequest } from "../../utils/ApiRequests";

import { Box, Stack, TextField, Typography, MenuItem, Select } from "@mui/material";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { companyInfoValidationSchema, companyInfoValidationSchema1, companyInfoValidationSchema2 } from "../../Validation/EmployerValidation";

import { cities, ProfileType, CompanyType } from "../../utils/Data";
import HeaderSec from "../../ThemeComponent/Common/HeaderSec";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from "../../ThemeComponent/Common/Error";
import ButtonType3 from "../Common/ButtonType3";

import { SocialBox, ThemeButtontype1, ThemeButtonType2, ThemeButtonType3, ThemeFInputDiv, NextButton } from "../../utils/Theme";

import { useState, useRef } from "react";
import { Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { set } from "react-hook-form";
import { BorderBottom } from "@mui/icons-material";
import { gridColumnPositionsSelector } from "@mui/x-data-grid";

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
    const [state, setState] = useState(" ");
    const [profileType, setProfileType] = useState(" ");
    const [companyType, setCompanyType] = useState(" ");

    /* Form State*/
    const [hrName, setHRName] = useState("");
    const [companyName, setCompanyName] = useState("");

    const [companyEmail, setCompanyEmail] = useState("");
    const [companyWebsite, setCompanyWebsite] = useState("");
    const [companyLanNumber, setCompanyLanNumber] = useState("");

    const [companyInfoForm, setCompanyInfoForm] = useState(3);

    const defaultValue = {
        hr_name: hrName,
        company_type: companyType,
        company_name: companyName,

    }

    const defaultValue1 = {
        company_email: "",
        company_website: "",
        company_lan_number: ""
    }

    const defaultValue2 = {
        state: "",
        city: "",
        company_address: "",
        company_pincode: "",
        company_pan_number: "",
        company_gst_number: "",
        area: ""

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
        setHRName(values.hr_name);
        setCompanyName(values.company_name);

        /* Form State*/

        console.log(values);
        console.log(hrName, companyName, companyType);
        setCompanyInfoForm(2);
    }

    const handleSubmit1 = async (values) => {
        let company_email = values.company_email;
        let company_lan_number = values.company_lan_number;
        let company_website = values.company_website;

        setCompanyEmail(company_email);
        setCompanyWebsite(company_website);
        setCompanyLanNumber(company_website);
        setCompanyInfoForm(3);


    }

    const handleSubmit2 = async (values) => {
        // values.area
        // values.city

        // values.company_address
        // values.company_gst_number

        // values.company_pan_number
        // values.company_pincode
        // values.state
        // let data = new FormData();
        // data = {
        //     employername: hrName,
        //     companynumber: companyLanNumber,
        //     companytype: companyType,
        //     companyname: companyName,
        //     companyemail: companyEmail,
        //     companywebsite: companyWebsite,
        //     companyaddress: values.company_address,
        //     companycity: values.company_city,
        //     companypincode: values.company_pincode,
        //     companypancard: values.company_pan_number,
        //     companygstnumber: values.company_gst_number,
        //     companylan: values.company_lan_number

        // }

        // let response = await postRequest(EmployerCompanyInformationURL, data);
        // if (response.status == 1) {
        //     dispatch({ type: 'LOGIN', payload: JSON.stringify(response.data) });
        // }


    }
    return (<>
        {isLoggedIn == 'true' && <Navigate to="/employer-dashboard"></Navigate>}

        {companyInfoForm == 1 && <>
            <Box className="EmployerRegisterPage"
                sx={{
                    height: "100vh",
                    background: "#FFFFFF",
                    backgroundImage: "url('../assets/g11.png')",
                    backgroundRepeat: " no-repeat",
                    backgroundPosition: "left 100px bottom 0px"
                }}>
                <Stack className="EmployerRegisterPageWrapper"
                    sx=
                    {{
                        padding: "20px 50px",
                        gap: "24px"
                    }}>
                    <HeaderSec
                        color="black"
                        border="2px solid #8E8E8E" />
                    <Stack alignItems="flex-end" sx={{ position: "relative" }}>
                        <Box sx={{
                            position: "absolute",
                            top: "111px",
                            left: "152px",
                            width: "573px",
                            zIndex: "78798"

                        }}>
                            <Typography component="box" sx={{
                                fontSize: "64px",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: "block",
                                marginTop: "20px"
                            }}>
                                Get registered in 2 minutes
                            </Typography>
                        </Box>
                        <Box sx={{
                            height: "31px",
                            width: "352px",
                            left: "148px",
                            top: "266px",
                            borderRadius: "0px",
                            background: "#FFD5C9",
                            position: "absolute"
                        }}></Box>
                        <Box sx={{
                            width: "763px",
                            height: "153px",
                            background: "#F8F8F8",
                            border: "1px solid #EAEAEA",
                            boxShadow: "0px 4px 40px rgba(239, 239, 239, 0.3)",
                            borderRadius: "19px",
                            padding: "35px 50px"
                        }}>
                            <Typography component="box" sx={{
                                fontSize: "40px",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: "block",
                                marginTop: "20px"
                            }}>
                                Company Details
                            </Typography>

                            <Stack direction="row" gap={2} sx={{ margin: "25px 0px" }}>
                                <Stack direction="row" gap={1} alignItems="center" justifyContent="center" >
                                    <Box sx={{
                                        width: "27px",
                                        height: "27px",
                                        background: "#FC9A7E",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>1</Box>
                                    <Typography component="box" sx={{
                                        fontSize: "19px",
                                        fontFamily: "Montserrat",
                                        fontWeight: "600",
                                        color: "#4E3A67",
                                        display: "block",
                                    }}>
                                        Company Information
                                    </Typography>
                                    <Box>
                                        <img width="10px" height="10px" src={window.location.origin + "/assets/FormRightArrow.png"} alt="right_arrow" />
                                    </Box>
                                </Stack>


                                <Stack direction="row" gap={1} alignItems="center" justifyContent="center" sx={{ opacity: "0.5" }}>
                                    <Box sx={{
                                        width: "27px",
                                        height: "27px",
                                        background: "#FC9A7E",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>2</Box>
                                    <Typography component="box" sx={{
                                        fontSize: "19px",
                                        fontFamily: "Montserrat",
                                        fontWeight: "600",
                                        color: "#4E3A67",
                                        display: "block",
                                    }}>
                                        Company Social
                                    </Typography>
                                    <Box>
                                        <img width="10px" height="10px" src={window.location.origin + "/assets/FormRightArrow.png"} alt="right_arrow" />
                                    </Box>
                                </Stack>


                                <Stack direction="row" gap={1} alignItems="center" justifyContent="center" sx={{ opacity: "0.5" }}>
                                    <Box sx={{
                                        width: "27px",
                                        height: "27px",
                                        background: "#FC9A7E",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>3</Box>
                                    <Typography component="box" sx={{
                                        fontSize: "19px",
                                        fontFamily: "Montserrat",
                                        fontWeight: "600",
                                        color: "#4E3A67",
                                        display: "block",
                                    }}>
                                        Company Address
                                    </Typography>
                                    <Box>
                                        <img width="10px" height="10px" src={window.location.origin + "/assets/FormRightArrow.png"} alt="right_arrow" />
                                    </Box>
                                </Stack>

                            </Stack>

                        </Box>
                        <Box sx={{
                            boxSizing: "border-box",
                            width: "865px",
                            height: "647",
                            background: "#FFFFFF",
                            border: "1px solid #EDEDED",
                            borderRadius: "19px",
                            position: "absolute",
                            top: "197px",
                            padding: "30px 50px"

                        }}>
                            <Formik

                                initialValues={defaultValue}
                                validationSchema={companyInfoValidationSchema}
                                onSubmit={handleSubmit}
                            >
                                {({ errors, touched, values, setFieldValue }) => (
                                    <Form className="CompanyInformationForm">
                                        <ThemeFInputDiv>
                                            <ThemeFInputDiv >
                                                <ThemeLabel LableFor="hr_name" LableText="HR Name *" />
                                                <Field
                                                    error={errors.hr_name && touched.hr_name}
                                                    id="hr_name"
                                                    as={TextField}
                                                    placeholder="Enter HR Name" type="text" name="hr_name" fullWidth />
                                                {errors.hr_name && touched.hr_name && <Error text={errors.hr_name} />}

                                            </ThemeFInputDiv>

                                            <ThemeFInputDiv>
                                                <ThemeLabel LableFor="company_name" LableText="Company Name *" />
                                                <Field
                                                    error={errors.company_name && touched.company_name}
                                                    id="company_name"
                                                    as={TextField}
                                                    placeholder="Enter Company Name (eg. XYZ Company )" type="text" name="company_name" fullWidth />
                                                {errors.company_name && touched.company_name && <Error text={errors.company_name} />}

                                            </ThemeFInputDiv>

                                            <ThemeFInputDiv>
                                                <ThemeLabel LableFor="company_type" LableText="Company Type *" />
                                                <Select
                                                    variant="outlined"
                                                    classNamePrefix="react-select"
                                                    labelId="demo-simple-select-label"
                                                    name="company_type"
                                                    value={companyType}
                                                    label="Age"
                                                    onChange={(event) => {
                                                        setCompanyType(event.target.value);
                                                        setFieldValue("company_type", event.target.value);
                                                    }}
                                                    sx={{
                                                        background: " #FFFFFF",
                                                        border: "1px solid #EAEAEA",
                                                        boxShadow: "0px 10px 11px rgb(0 0 0 / 2%)",
                                                        borderRadius: "7px",
                                                        width: "101%",
                                                        fontSize: "16px",
                                                        fontamily: 'Montserrat',
                                                        BorderBottom: 'none'
                                                    }}
                                                    disableUnderline
                                                >
                                                    <MenuItem className="companyItem" sx={{ fontFamily: "Montserrat" }} value=" ">Select Company Type</MenuItem>
                                                    {CompanyType.map((item) =>
                                                        <MenuItem className="companyItem" sx={{ fontFamily: "Montserrat" }} value={item.value} key={item.id}>{item.name}</MenuItem>
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


                                        <Stack alignItems="flex-end">
                                            <NextButton type="submit"><img src={window.location.origin + "/assets/CompanyInfoRight.png"} alt="Next" width="14px" height="14px" ></img></NextButton>
                                        </Stack>
                                    </Form>)}
                            </Formik>

                        </Box>

                    </Stack>
                </Stack>
            </Box>

        </>
        }

        {
            companyInfoForm == 2 &&
            <>
                <Box className="EmployerRegisterPage"
                    sx={{
                        height: "100vh",
                        background: "#FFFFFF",
                        backgroundImage: "url('../assets/g12.png')",
                        backgroundRepeat: " no-repeat",
                        backgroundPosition: "left 100px bottom 0px"
                    }}>
                    <Stack className="EmployerRegisterPageWrapper"
                        sx=
                        {{
                            padding: "20px 50px",
                            gap: "24px"
                        }}>
                        <HeaderSec
                            color="black"
                            border="2px solid #8E8E8E" />
                        <Stack alignItems="flex-end" sx={{ position: "relative" }}>
                            <Box sx={{
                                position: "absolute",
                                top: "111px",
                                left: "152px",
                                width: "573px",
                                zIndex: "78798"

                            }}>
                                <Typography component="box" sx={{
                                    fontSize: "64px",
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    color: "#4E3A67",
                                    display: "block",
                                    marginTop: "20px"
                                }}>
                                    Free job posting facility

                                </Typography>
                            </Box>
                            <Box sx={{
                                height: "31px",
                                width: "170px",
                                left: "145px",
                                top: "167px",
                                borderRadius: "0px",
                                background: "#FFD5C9",
                                position: "absolute"
                            }}></Box>
                            <Box sx={{
                                width: "763px",
                                height: "153px",
                                background: "#F8F8F8",
                                border: "1px solid #EAEAEA",
                                boxShadow: "0px 4px 40px rgba(239, 239, 239, 0.3)",
                                borderRadius: "19px",
                                padding: "35px 50px"
                            }}>
                                <Typography component="box" sx={{
                                    fontSize: "40px",
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    color: "#4E3A67",
                                    display: "block",
                                    marginTop: "20px"
                                }}>
                                    Company Details
                                </Typography>

                                <Stack direction="row" gap={2} sx={{ margin: "25px 0px" }}>
                                    <Stack direction="row" gap={1} alignItems="center" justifyContent="center" sx={{ opacity: "0.5" }}>
                                        <Box sx={{
                                            width: "27px",
                                            height: "27px",
                                            background: "#FC9A7E",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>1</Box>
                                        <Typography component="box" sx={{
                                            fontSize: "19px",
                                            fontFamily: "Montserrat",
                                            fontWeight: "600",
                                            color: "#4E3A67",
                                            display: "block",
                                        }}>
                                            Company Information
                                        </Typography>
                                        <Box>
                                            <img width="10px" height="10px" src={window.location.origin + "/assets/FormRightArrow.png"} alt="right_arrow" />
                                        </Box>
                                    </Stack>


                                    <Stack direction="row" gap={1} alignItems="center" justifyContent="center" >
                                        <Box sx={{
                                            width: "27px",
                                            height: "27px",
                                            background: "#FC9A7E",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>2</Box>
                                        <Typography component="box" sx={{
                                            fontSize: "19px",
                                            fontFamily: "Montserrat",
                                            fontWeight: "600",
                                            color: "#4E3A67",
                                            display: "block",
                                        }}>
                                            Company Social
                                        </Typography>
                                        <Box>
                                            <img width="10px" height="10px" src={window.location.origin + "/assets/FormRightArrow.png"} alt="right_arrow" />
                                        </Box>
                                    </Stack>


                                    <Stack direction="row" gap={1} alignItems="center" justifyContent="center" sx={{ opacity: "0.5" }}>
                                        <Box sx={{
                                            width: "27px",
                                            height: "27px",
                                            background: "#FC9A7E",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>3</Box>
                                        <Typography component="box" sx={{
                                            fontSize: "19px",
                                            fontFamily: "Montserrat",
                                            fontWeight: "600",
                                            color: "#4E3A67",
                                            display: "block",
                                        }}>
                                            Company Address
                                        </Typography>
                                        <Box>
                                            <img width="10px" height="10px" src={window.location.origin + "/assets/FormRightArrow.png"} alt="right_arrow" />
                                        </Box>
                                    </Stack>

                                </Stack>

                            </Box>
                            <Box sx={{
                                boxSizing: "border-box",
                                width: "865px",
                                height: "508px",
                                background: "#FFFFFF",
                                border: "1px solid #EDEDED",
                                borderRadius: "19px",
                                position: "absolute",
                                top: "197px",
                                padding: "30px 50px"

                            }}>
                                <Formik

                                    initialValues={defaultValue1}
                                    validationSchema={companyInfoValidationSchema1}
                                    onSubmit={handleSubmit1}
                                >
                                    {({ errors, touched, values, setFieldValue }) => (
                                        <Form className="CompanyInformationForm">
                                            <ThemeFInputDiv>
                                                <ThemeFInputDiv>
                                                    <ThemeLabel LableFor="company_email" LableText="Company Email *" />
                                                    <Field
                                                        error={errors.company_email && touched.company_email}
                                                        id="company_email"
                                                        as={TextField}
                                                        placeholder="Enter Company Email ( eg. xyz@company.com )" type="text" name="company_email" fullWidth />
                                                    {errors.company_email && touched.company_email && <Error text={errors.company_email} />}

                                                </ThemeFInputDiv>

                                                <ThemeFInputDiv>
                                                    <ThemeLabel LableFor="company_lan_number" LableText="Company Landline Number *" />
                                                    <Field
                                                        error={errors.company_lan_number && touched.company_lan_number}
                                                        id="company_lan_number"
                                                        as={TextField}
                                                        placeholder="Enter Company Landline Number ( eg. 9898989898 )" type="text" name="company_lan_number" fullWidth />
                                                    {errors.company_lan_number && touched.company_lan_number && <Error text={errors.company_lan_number} />}
                                                </ThemeFInputDiv>

                                                <ThemeFInputDiv>
                                                    <ThemeLabel LableFor="company_website" LableText="Company Website *" />
                                                    <Field
                                                        error={errors.company_website && touched.company_website}
                                                        id="company_website"
                                                        as={TextField}
                                                        placeholder="Enter Company Website ( eg. xyz.com )" type="text" name="company_website" fullWidth />
                                                    {errors.company_website && touched.company_website && <Error text={errors.company_website} />}

                                                </ThemeFInputDiv>

                                            </ThemeFInputDiv>


                                            <Stack alignItems="flex-end" sx={{ margin: "20px 0px" }}>
                                                <NextButton type="submit"><img src={window.location.origin + "/assets/CompanyInfoRight.png"} alt="Next" width="14px" height="14px" ></img></NextButton>
                                            </Stack>
                                        </Form>)}
                                </Formik>

                            </Box>

                        </Stack>
                    </Stack>
                </Box>


            </>
        }

        {
            companyInfoForm == 3 &&
            <>
                <Box className="EmployerRegisterPage"
                    sx={{
                        minHeight: "100vh",
                        background: "#FFFFFF",

                    }}>
                    <Stack className="EmployerRegisterPageWrapper"
                        sx=
                        {{
                            padding: "20px 50px",
                            gap: "24px"
                        }}>
                        <HeaderSec
                            color="black"
                            border="2px solid #8E8E8E" />
                        <Stack alignItems="flex-end" sx={{ position: "relative" }}>
                            <Box sx={{
                                position: "absolute",
                                top: "-3px",
                                left: "152px",
                                width: "573px",
                                zIndex: "78798"

                            }}>
                                <Typography component="box" sx={{
                                    fontSize: "64px",
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    color: "#4E3A67",
                                    display: "block",
                                    marginTop: "20px"
                                }}>
                                    Best candidate in a few Clicks

                                </Typography>
                                <img src={window.location.origin + "/assets/g13.png"} alt="G13"></img>
                            </Box>
                            <Box sx={{
                                position: "absolute",
                                width: "381px",
                                height: "31px",
                                left: "271px",
                                top: "148px",
                                background: "#FFD5C9"
                            }}></Box>

                            <Box sx={{
                                position: "absolute",
                                top: "880px",
                                left: "223px",
                                width: "618px",
                                zIndex: "78798"

                            }}>
                                <Typography component="box" sx={{
                                    fontSize: "64px",
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    color: "#4E3A67",
                                    display: "block",
                                    marginTop: "20px"
                                }}>
                                    Get candidates for local-level jobs
                                </Typography>
                            </Box>
                            <Box sx={{
                                position: "absolute",
                                width: "381px",
                                height: "31px",
                                left: "271px",
                                top: "148px",
                                background: "#FFD5C9"
                            }}></Box>


                            <Box sx={{
                                width: "763px",
                                height: "153px",
                                background: "#F8F8F8",
                                border: "1px solid #EAEAEA",
                                boxShadow: "0px 4px 40px rgba(239, 239, 239, 0.3)",
                                borderRadius: "19px",
                                padding: "35px 50px"
                            }}>
                                <Typography component="box" sx={{
                                    fontSize: "40px",
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    color: "#4E3A67",
                                    display: "block",
                                    marginTop: "20px"
                                }}>
                                    Company Details
                                </Typography>

                                <Stack direction="row" gap={2} sx={{ margin: "25px 0px" }}>
                                    <Stack direction="row" gap={1} alignItems="center" justifyContent="center" sx={{ opacity: "0.5" }}>
                                        <Box sx={{
                                            width: "27px",
                                            height: "27px",
                                            background: "#FC9A7E",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>1</Box>
                                        <Typography component="box" sx={{
                                            fontSize: "19px",
                                            fontFamily: "Montserrat",
                                            fontWeight: "600",
                                            color: "#4E3A67",
                                            display: "block",
                                        }}>
                                            Company Information
                                        </Typography>
                                        <Box>
                                            <img width="10px" height="10px" src={window.location.origin + "/assets/FormRightArrow.png"} alt="right_arrow" />
                                        </Box>
                                    </Stack>


                                    <Stack direction="row" gap={1} alignItems="center" justifyContent="center" sx={{ opacity: "0.5" }}>
                                        <Box sx={{
                                            width: "27px",
                                            height: "27px",
                                            background: "#FC9A7E",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>2</Box>
                                        <Typography component="box" sx={{
                                            fontSize: "19px",
                                            fontFamily: "Montserrat",
                                            fontWeight: "600",
                                            color: "#4E3A67",
                                            display: "block",
                                        }}>
                                            Company Social
                                        </Typography>
                                        <Box>
                                            <img width="10px" height="10px" src={window.location.origin + "/assets/FormRightArrow.png"} alt="right_arrow" />
                                        </Box>
                                    </Stack>


                                    <Stack direction="row" gap={1} alignItems="center" justifyContent="center" >
                                        <Box sx={{
                                            width: "27px",
                                            height: "27px",
                                            background: "#FC9A7E",
                                            borderRadius: "50%",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}>3</Box>
                                        <Typography component="box" sx={{
                                            fontSize: "19px",
                                            fontFamily: "Montserrat",
                                            fontWeight: "600",
                                            color: "#4E3A67",
                                            display: "block",
                                        }}>
                                            Company Address
                                        </Typography>
                                        <Box>
                                            <img width="10px" height="10px" src={window.location.origin + "/assets/FormRightArrow.png"} alt="right_arrow" />
                                        </Box>
                                    </Stack>

                                </Stack>

                            </Box>
                            <Box sx={{
                                boxSizing: "border-box",
                                width: "865px",
                                background: "#FFFFFF",
                                border: "1px solid #EDEDED",
                                borderRadius: "19px",
                                position: "absolute",
                                top: "197px",
                                padding: "30px 50px"

                            }}>
                                <Formik

                                    initialValues={defaultValue2}
                                    validationSchema={companyInfoValidationSchema2}
                                    onSubmit={handleSubmit2}
                                >
                                    {({ errors, touched, values, setFieldValue }) => (
                                        <Form className="CompanyInformationForm">

                                            <ThemeFInputDiv>
                                                <Stack direction="row" gap={2}>
                                                    <ThemeFInputDiv sx={{ width: "50%" }}>
                                                        <ThemeLabel LableFor="state" LableText="State *" />
                                                        <Select
                                                            classNamePrefix="react-select"
                                                            labelId="demo-simple-select-label"
                                                            name="state"
                                                            value={state}
                                                            label="Age"
                                                            onChange={(event) => {
                                                                setState(event.target.value);
                                                                setFieldValue("state", event.target.value);
                                                            }}
                                                            sx={{
                                                                background: " #FFFFFF",
                                                                border: "1px solid #EAEAEA",
                                                                boxShadow: "0px 10px 11px rgb(0 0 0 / 2%)",
                                                                borderRadius: "7px",
                                                                fontSize: "16px",
                                                                fontamily: 'Montserrat',
                                                                BorderBottom: 'none'
                                                            }}
                                                            disableUnderline
                                                        >
                                                            <MenuItem value=" ">Select State</MenuItem>
                                                            {cities.map((item) =>
                                                                <MenuItem value={item.value} key={item.id}>{item.name}</MenuItem>
                                                            )}
                                                        </Select>
                                                        {errors.state && touched.state && <Error text={errors.state} />}
                                                    </ThemeFInputDiv>

                                                    <ThemeFInputDiv sx={{ width: "50%" }}>

                                                        <ThemeLabel LableFor="city" LableText="City *" />
                                                        <Select
                                                            classNamePrefix="react-select"
                                                            labelId="demo-simple-select-label"
                                                            name="city"
                                                            value={city}
                                                            label="Age"
                                                            onChange={(event) => {
                                                                setCity(event.target.value);
                                                                setFieldValue("city", event.target.value);
                                                            }}
                                                            sx={{
                                                                background: " #FFFFFF",
                                                                border: "1px solid #EAEAEA",
                                                                boxShadow: "0px 10px 11px rgb(0 0 0 / 2%)",
                                                                borderRadius: "7px",
                                                                fontSize: "16px",
                                                                fontamily: 'Montserrat',
                                                                BorderBottom: 'none'
                                                            }}
                                                            disableUnderline
                                                        >
                                                            <MenuItem value=" ">Select City</MenuItem>
                                                            {cities.map((item) =>
                                                                <MenuItem value={item.value} key={item.id}>{item.name}</MenuItem>
                                                            )}
                                                        </Select>

                                                        {errors.city && touched.city && <Error text={errors.city} />}
                                                    </ThemeFInputDiv>
                                                </Stack>

                                                <ThemeFInputDiv>
                                                    <ThemeLabel LableFor="area" LableText="Company Area *" />
                                                    <Box sx={{ width: "100%", margin: "10px 0px" }}>
                                                        <Field
                                                            error={errors.company_address && touched.company_address}
                                                            id="area"
                                                            as={TextField}
                                                            placeholder="Area" type="text" name="area" fullWidth />

                                                    </Box>

                                                    {errors.area && touched.area && <Error text={errors.area} />}

                                                </ThemeFInputDiv>

                                                <ThemeFInputDiv>
                                                    <ThemeLabel LableFor="company_address" LableText="Company Address *" />
                                                    <Box sx={{ width: "100%", margin: "10px 0px" }}>
                                                        <Field
                                                            error={errors.company_address && touched.company_address}
                                                            id="company_address"
                                                            as={TextField}
                                                            placeholder="Company Address" type="text" name="company_address" fullWidth />

                                                    </Box>

                                                    {errors.company_address && touched.company_address && <Error text={errors.company_address} />}

                                                </ThemeFInputDiv>

                                                <ThemeFInputDiv>
                                                    <ThemeLabel LableFor="company_pincode" LableText="Company Pincode *" />
                                                    <Field
                                                        error={errors.company_pincode && touched.company_pincode}
                                                        id="company_pincode"
                                                        as={TextField}
                                                        placeholder="Enter Company Pincode ( eg. 23123 )" type="text" name="company_pincode" fullWidth />
                                                    {errors.company_pincode && touched.company_pincode && <Error text={errors.company_pincode} />}

                                                </ThemeFInputDiv>

                                                <ThemeFInputDiv>
                                                    <ThemeLabel LableFor="company_pan_number" LableText="Company Pan Number *" />
                                                    <Field
                                                        error={errors.company_pan_number && touched.company_pan_number}
                                                        id="company_pan_number"
                                                        as={TextField}
                                                        placeholder="Enter Company Pan Number" type="text" name="company_pan_number" fullWidth />
                                                    {errors.company_pan_number && touched.company_pan_number && <Error text={errors.company_pan_number} />}

                                                </ThemeFInputDiv>

                                                <Box sx={{ width: "80px" }}>
                                                    <img id="PanImage" width="100%" />
                                                </Box>

                                                <ThemeFInputDiv>
                                                    <ThemeLabel LableFor="company_pan_image" LableText="Upload Company Pan No. Image" />

                                                    <Field
                                                        id="company_pan_image"
                                                        style={{ display: "none", outline: "none" }}
                                                        as={TextField}
                                                        type="file" name="company_pan_image"
                                                        onChange={uploadCompanyPan} fullWidth />

                                                    <ButtonType3 ButtonText="Upload Image" ClickEvent={() => document.getElementById("company_pan_image").click()}></ButtonType3>
                                                </ThemeFInputDiv>

                                                <ThemeFInputDiv>
                                                    <ThemeLabel LableFor="company_gst_number" LableText="Company GST Number *" />
                                                    <Field
                                                        error={errors.company_gst_number && touched.company_gst_number}
                                                        id="company_gst_number"
                                                        as={TextField}
                                                        placeholder="Enter Company GST Number" type="text" name="company_gst_number" fullWidth />
                                                    {errors.company_gst_number && touched.company_gst_number && <Error text={errors.company_gst_number} />}

                                                </ThemeFInputDiv>
                                                <Box sx={{ width: "80px" }}>
                                                    <img id="GSTImage" width="100%" />
                                                </Box>

                                                <ThemeFInputDiv>
                                                    <ThemeLabel LableFor="company_gst_image" LableText="Upload Company GST Image" />

                                                    <Field
                                                        id="company_gst_image"
                                                        style={{ display: "none", outline: "none" }}
                                                        as={TextField}
                                                        type="file" name="company_gst_image"
                                                        onChange={uploadCompanyGST} fullWidth />

                                                    <ButtonType3 ButtonText="Upload Image" ClickEvent={() => document.getElementById("company_gst_image").click()}></ButtonType3>
                                                </ThemeFInputDiv>
                                            </ ThemeFInputDiv>

                                            <Stack sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                                                <ThemeButtonType2 variant="contained" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>Save</ThemeButtonType2>
                                            </Stack>

                                        </Form>)}
                                </Formik>

                            </Box>

                        </Stack>
                    </Stack>
                </Box>


            </>
        }

    </>)
}
export default CompanyInfoForm;