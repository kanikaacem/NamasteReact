import { StatesURL, UplaodImageURL, CheckEmployerEmailExist } from "../../utils/ApiUrls";
import { postRequest, PostImageRequest, getRequest } from "../../utils/ApiRequests";

import ClickAwayListener from '@mui/base/ClickAwayListener';
import { Box, Stack, TextField, Typography, MenuItem, Select } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { companyInfoValidationSchema, companyInfoValidationSchema1, companyInfoValidationSchema2 } from "../../Validation/EmployerValidation";

import { CompanyType, data3 } from "../../utils/Data";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from "../../ThemeComponent/Common/Error";
import ButtonType3 from "../Common/ButtonType3";
import BackButton from "../Common/BackButton";
import { ThemeButtonType2, ThemeFInputDiv, NextButton } from "../../utils/Theme";

import { useState, useEffect } from "react";

import FormMenu from "../Common/FormMenu";
import ThemeWebsiteImage from "../Common/ThemeWebsiteImage";
import ThemeMobileImage from "../Common/ThemeMobileImage";

import { useTranslation } from "react-i18next";
import ReactGA from 'react-ga';
const TRACKING_ID = 'AW-11080443279/84LrCNKT24kYEI_LyKMp'
ReactGA.initialize(TRACKING_ID)

const CompanyInfoForm = ({ email, userId, mobile_number }) => {

    const { t } = useTranslation();

    const [city, setCity] = useState(" ");
    const [state, setState] = useState(" ");
    const [CountryState, setCountryState] = useState([]);
    const [District, setDistrict] = useState([]);
    const [companyType, setCompanyType] = useState(localStorage.getItem("company_form_data")
        ? JSON.parse(localStorage.getItem("company_form_data"))['company_type'] : " ")

    /* Form State*/
    const [hrName, setHRName] = useState(localStorage.getItem("company_form_data")
        ? JSON.parse(localStorage.getItem("company_form_data"))['hr_name'] : "");
    const [companyName, setCompanyName] = useState(localStorage.getItem("company_form_data")
        ? JSON.parse(localStorage.getItem("company_form_data"))['company_name'] : "");
    const [companyPanNumber, setCompanyPanNumber] = useState(localStorage.getItem("company_form_data")
        ? JSON.parse(localStorage.getItem("company_form_data"))['company_pan_number'] : "");

    const [companyEmail, setCompanyEmail] = useState(localStorage.getItem("company_form_data1")
        ? JSON.parse(localStorage.getItem("company_form_data1"))['company_email'] : "");

    const [companyWebsite, setCompanyWebsite] = useState(localStorage.getItem("company_form_data1")
        ? JSON.parse(localStorage.getItem("company_form_data1"))['company_website'] : "");

    const [companyLanNumber, setCompanyLanNumber] = useState(localStorage.getItem("company_form_data1")
        ? JSON.parse(localStorage.getItem("company_form_data1"))['company_lan_number'] : "");

    const [companyInfoForm, setCompanyInfoForm] = useState(localStorage.getItem("formpage") ? localStorage.getItem("formpage") : 1);

    const [companyAddress, setCompanyAddress] = useState("");
    const [autoData, setAutoData] = useState([]);
    const [menubar, setMenuBar] = useState(false);

    const defaultValue = {
        hr_name: hrName,
        company_type: companyType,
        company_name: companyName,
        company_pan_number: companyPanNumber
    }

    const defaultValue1 = {
        company_email: companyEmail,
        company_website: companyWebsite,
        company_lan_number: companyLanNumber
    }

    const defaultValue2 = {
        state: "",
        city: "",
        company_address: "",
        company_pincode: "",
        company_gst_number: "",
        area: ""

    }

    const uploadCompanyLogo = async (event) => {
        // let file = event.target.files[0];
        // let file_size = file.size;

        var output = document.getElementById('companyLogo');
        output.src = URL.createObjectURL(event.target.files[0]);


        let formData = new FormData();
        formData.append('image', event.target.files[0]);
        formData.append('ImageType', "Company_logo");
        let response = await PostImageRequest(UplaodImageURL, formData);
        console.log(response);

    }

    const uploadCompanyPan = async (event) => {
        var output = document.getElementById("PanImage");
        output.src = URL.createObjectURL(event.target.files[0]);
        let formData = new FormData();
        formData.append('image', event.target.files[0]);
        formData.append('ImageType', "Pan_Doc");
        let response = await PostImageRequest(UplaodImageURL, formData);
        console.log(response);




    }

    const uploadCompanyGST = async (event) => {
        var output = document.getElementById("GSTImage");
        output.src = URL.createObjectURL(event.target.files[0]);
        let formData = new FormData();
        formData.append('image', event.target.files[0]);
        formData.append('ImageType', "Gst_Doc");
        let response = await PostImageRequest(UplaodImageURL, formData);
        console.log(response);


    }
    const handleSubmit = async (values, { setFieldError }) => {
        setHRName(values.hr_name);
        setCompanyName(values.company_name);
        setCompanyPanNumber(values.company_pan_number);
        localStorage.setItem("company_form_data", JSON.stringify(values));
        let formData = new FormData();
        formData = {
            employername: values.hr_name,
            companyname: values.company_name,
            companytype: values.company_type,
            company_logo: "",
            company_pancard: values.company_pan_number,
            comapany_panddoc: ""
        }

        let response = await postRequest("https://backend.jobsyahan.com/api/employer/checkpan", {
            company_pancard: values.company_pan_number
        });
        console.log(response.status);
        if (response.status === "0") {

            let response2 = await postRequest("https://backend.jobsyahan.com/api/employer/postemployer1", formData);
            if (response2.status === "1") {
                localStorage.setItem("formpage", 2);
                setCompanyInfoForm(2);
            }
        }
        else {
            console.log(response.msg);
            setFieldError("company_pan_number", response.msg);
        }


    }

    const handleSubmit1 = async (values, { setFieldError }) => {
        setCompanyEmail(values.company_email);
        setCompanyWebsite(values.company_website);
        setCompanyLanNumber(values.company_lan_number)
        let response = await postRequest(CheckEmployerEmailExist, {
            email: values.company_email
        });
        if (response.status === "1") {
            setFieldError("company_email", "This email is already registered");
        }
        else {
            localStorage.setItem("company_form_data1", JSON.stringify(values));

            let formData = new FormData();
            formData = {
                company_email: values.company_email,
                companywebsite: values.company_website ? values.company_website : " ",
                companylannumber: values.company_lan_number
            }
            let response = await postRequest("https://backend.jobsyahan.com/api/employer/postemployer2", formData);
            if (response.status === "1") {
                localStorage.setItem("formpage", 3);
                setCompanyInfoForm(3);
            }

        }
    }

    const handleSubmit2 = async (values) => {
        ReactGA.event({
            category: values.company_address,
            action: "test",
            label: "test",
            value: values.area
        })
        let data = new FormData();
        data = {
            company_state: state,
            company_city: city,
            company_area: values.area,
            company_address: values.company_address,
            company_pincode: values.company_pincode,
            company_gstnumber: values.company_gstnumber ? values.company_gst_number : "not present",
            company_gstDoc: ""
        }

        let response = await postRequest("https://backend.jobsyahan.com/api/employer/postemployer3", data);
        if (response.status === "1") {

            window.location.href = window.location.origin + "/employer-dashboard";
        }

    }

    useEffect(() => {
        const getState = async () => {
            let response = await getRequest(StatesURL);
            setCountryState(response.data);
        }
        getState();
    }, [])

    const getDistrictByState = async (statefilter) => {
        let response = await getRequest("https://backend.jobsyahan.com/api/map/districts?states=" + statefilter);
        setDistrict(response.data[0].districts);
    }

    const getAddress = async (value) => {
        let response = await getRequest("https://backend.jobsyahan.com/api/map/autocompleteplaces?input=" + value);
        setAutoData(response.data);
    }
    return (<>

        {parseInt(companyInfoForm) === 1 && <>
            <Box className="EmployerRegisterPage"
                sx={{
                    background: "#FFFFFF",

                }}>
                <Stack className="EmployerRegisterPageWrapper"
                    sx=
                    {{
                        padding: { "xs": "15px", "sm": "15px", "md": "20px 50px", "lg": "20px 50px", "xl": "20px 50px" },
                        gap: "24px"
                    }}>

                    <Stack direction={{ "xs": "column", "sm": "column", "md": "column", "lg": "row", "xl": "row" }}
                        gap={2} sx={{ position: "relative" }}>
                        <Box sx={{
                            width: { "xs": "100%", "sm": "100%", "md": "100%", "lg": "50%", "xl": "50%" },
                        }}>
                            <Stack sx={{
                                margin: { "xs": "0px", "sm": "0px", "md": "0px", "lg": "50px", "xl": "50px" },
                                direction: "row",
                                gap: { "xs": "10px", "sm": "10px", "md": "10px", "lg": "64px", "xl": "64px" },

                            }}>
                                <Typography component="box" sx={{
                                    fontSize: { "xs": "1.8rem", "sm": "2rem", "md": "2.5rem", "lg": "4rem", "xl": "4rem" },
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    color: "#4E3A67",
                                    marginTop: "20px",
                                    display: { "xs": "none", "sm": "none", "md": "none", "lg": "block", "xl": "block" }

                                }}>
                                    {t('GET')}
                                    <Typography component="box" sx={{
                                        fontSize: { "xs": "1.8rem", "sm": "2rem", "md": "2.5rem", "lg": "4rem", "xl": "4rem" },
                                        fontFamily: "Montserrat",
                                        fontWeight: "600",
                                        color: "#4E3A67",
                                        display: "block",
                                        lineHeight: "1"
                                    }}>
                                        {t('REGISTERED_HERE')}
                                    </Typography>

                                </Typography>
                                <Typography component="box" sx={{
                                    fontSize: { "xs": "1.8rem", "sm": "2rem", "md": "2.5rem", "lg": "4rem", "xl": "4rem" },
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    color: "#4E3A67",
                                    marginTop: "20px",
                                    display: { "xs": "block", "sm": "block", "md": "block", "lg": "none", "xl": "none" }

                                }}>
                                    {t('Get Registered Here')}
                                </Typography>
                                <ThemeMobileImage imageUrl="/assets/g11Mobile.png" alt="G11" />
                                <Box sx={{
                                    position: "relative",
                                    left: "-150px"
                                }}>
                                    <ThemeWebsiteImage imageUrl="/assets/g11.png" alt="G11" />
                                </Box>
                            </Stack>
                        </Box>
                        <Box sx={{
                            width: { "xs": "100%", "sm": "100%", "md": "100%", "lg": "50%", "xl": "50%" },
                        }}>
                            <Box sx={{
                                background: "#F8F8F8",
                                border: "1px solid #EAEAEA",
                                boxShadow: "0px 4px 40px rgba(239, 239, 239, 0.3)",
                                borderRadius: "19px",
                                margin: "0 auto",
                                position: "relative",
                                top: { "xs": "-40px", "sm": "-40px", "md": "-40px", "lg": "0px", "xl": "0px" }

                            }}>
                                <Box
                                    sx={{
                                        padding: { "xs": "15px", "sm": "15px", "md": "35px 50px", "lg": "35px 50px", "xl": "35px 50px" },

                                    }}>
                                    <Typography component="box" sx={{
                                        fontSize: { "xs": "1.6rem", "sm": "1.6rem", "md": "2.5rem", "xl": "2.5rem", "lg": "2.5rem" },
                                        fontFamily: "Montserrat",
                                        fontWeight: "600",
                                        color: "#000000",
                                        display: "block",
                                        marginTop: "20px"
                                    }}>
                                        {t('COMPANY_DETAILS')}
                                    </Typography>

                                    <Stack direction="row" gap={2} sx={{
                                        margin: "25px 0px",
                                        flexWrap: "wrap"
                                    }}
                                        justifyContent={{ "xs": "center", "sm": "center", "md": "center", "lg": "flex-start", "xl": "flex-start" }}>
                                        {
                                            data3 && data3.map((item) => {
                                                return <FormMenu data={item} formStep={0} />
                                            })
                                        }

                                    </Stack>
                                </Box>

                                <Box sx={{
                                    boxSizing: "border-box",
                                    minHeight: "647px",
                                    background: "#FFFFFF",
                                    border: "1px solid #EDEDED",
                                    borderBottomLeftRadius: "19px",
                                    borderBottomRightRadius: "19px",
                                    position: "relative",
                                    padding: { "xs": "20px", "sm": "30px", "md": "30px 50px", "lg": "30px 50px", "xl": "30px 50px" },
                                    margin: "0 auto"

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
                                                        <ThemeLabel LableFor="company_pan_number" LableText="Company Pan Number *" />
                                                        <Field
                                                            error={errors.company_pan_number && touched.company_pan_number}
                                                            id="company_pan_number"
                                                            as={TextField}
                                                            placeholder="Enter Company Pan Number" type="text" name="company_pan_number" fullWidth />
                                                        {errors.company_pan_number && touched.company_pan_number && <Error text={errors.company_pan_number} />}

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
                                                                fontSize: "1rem",
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

                                                    <ThemeFInputDiv sx={{ width: "200px" }}>

                                                        <img id="companyLogo" width="100%" alt="companyLogo" />
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


                                                        <ButtonType3
                                                            sx={{
                                                                height: { "xs": "30px", "sm": "30px", "md": "50px", "xl": "50px", "lg": "50px" }
                                                            }} ButtonText="Upload Company Logo" imageURL="/assets/InsertPicture.png" ClickEvent={() => document.getElementById("upload_company_logo").click()}></ButtonType3>
                                                    </ThemeFInputDiv>


                                                </ThemeFInputDiv>


                                                <Stack alignItems="flex-end">

                                                    <NextButton className="NextButtonEmployer" type="submit"><img src={window.location.origin + "/assets/CompanyInfoRight.png"} alt="Next" width="14px" height="14px" ></img></NextButton>
                                                </Stack>
                                            </Form>)}
                                    </Formik>

                                </Box>

                            </Box>

                        </Box>

                    </Stack>
                </Stack>
            </Box>

        </>
        }

        {
            parseInt(companyInfoForm) === 2 &&
            <>
                <Box className="EmployerRegisterPage"
                    sx={{
                        background: "#FFFFFF"

                    }}>
                    <Stack className="EmployerRegisterPageWrapper"
                        sx=
                        {{
                            padding: { "xs": "15px", "sm": "15px", "md": "20px 50px", "lg": "20px 50px", "xl": "20px 50px" },
                            gap: "24px"
                        }}>

                        <Stack direction={{ "xs": "column", "sm": "column", "md": "column", "lg": "row", "xl": "row" }} gap={2} sx={{ position: "relative" }}>
                            <Box sx={{
                                width: { "xs": "100%", "sm": "100%", "md": "100%", "lg": "50%", "xl": "50%" },

                            }}>
                                <Stack sx={{
                                    margin: { "xs": "10px", "sm": "10px", "md": "10px", "lg": "50px", "xl": "50px" },
                                    direction: "row",
                                    gap: { "xs": "10px", "sm": "10px", "md": "10px", "lg": "64px", "xl": "64px" },

                                }}>
                                    <Typography component="box" sx={{
                                        fontSize: { "xs": "1.8rem", "sm": "2rem", "md": "2.5rem", "lg": "4rem", "xl": "4rem" },
                                        fontFamily: "Montserrat",
                                        fontWeight: "600",
                                        color: "#4E3A67",
                                        display: "block",
                                        marginTop: "20px"
                                    }}>
                                        {t('FREE_JOBPOSTING_FACILITY')}

                                    </Typography>
                                    <ThemeMobileImage imageUrl="/assets/g12Mobile.png" alt="G12" />
                                    <Box sx={{
                                        position: "relative",
                                        left: "-150px"
                                    }}>
                                        <ThemeWebsiteImage imageUrl="/assets/g12.png" alt="G12" />
                                    </Box>

                                </Stack>
                            </Box>

                            <Box
                                sx={{
                                    width: { "lg": "50%", "md": "100%", "xs": "100%" }
                                }}>
                                <Box sx={{
                                    minHeight: "153px",
                                    background: "#F8F8F8",
                                    border: "1px solid #EAEAEA",
                                    boxShadow: "0px 4px 40px rgba(239, 239, 239, 0.3)",
                                    borderRadius: "19px",
                                    margin: "0 auto",

                                }}>
                                    <Box sx={{
                                        padding: { "xs": "15px", "sm": "15px", "md": "35px 50px", "lg": "35px 50px", "xl": "35px 50px" },

                                    }}>
                                        <BackButton
                                            GoBack={
                                                () => {
                                                    setCompanyInfoForm(1)
                                                }
                                            } ></BackButton>

                                        <Typography component="box" sx={{
                                            fontSize: { "xs": "1.6rem", "sm": "1.6rem", "md": "2.5rem", "xl": "2.5rem", "lg": "2.5rem" },
                                            fontFamily: "Montserrat",
                                            fontWeight: "600",
                                            color: "#000000",
                                            display: "block",
                                            marginTop: "20px"
                                        }}>
                                            {t('COMPANY_DETAILS')}
                                        </Typography>

                                        <Stack direction="row" gap={2} sx={{ margin: "25px 0px", flexWrap: "wrap" }}>
                                            <Stack direction="row" gap={2} sx={{
                                                margin: "25px 0px",
                                                flexWrap: "wrap"
                                            }}
                                                justifyContent={{ "xs": "center", "sm": "center", "md": "center", "lg": "flex-start", "xl": "flex-start" }}>
                                                {
                                                    data3 && data3.map((item) => {
                                                        return <FormMenu data={item} formStep={1} />
                                                    })
                                                }

                                            </Stack>
                                        </Stack>
                                    </Box>

                                    <Box sx={{
                                        boxSizing: "border-box",
                                        height: "100%",
                                        background: "#FFFFFF",
                                        border: "1px solid #EDEDED",
                                        borderBottomLeftRadius: "19px",
                                        borderBottomRightRadius: "19px",
                                        padding: { "xs": "15px", "sm": "15px", "md": "30px 50px", "lg": "30px 50px", "xl": "30px 50px" },
                                        position: "relative"

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
                                                            <ThemeLabel LableFor="company_website" LableText="Company Website " />
                                                            <Field
                                                                error={errors.company_website && touched.company_website}
                                                                id="company_website"
                                                                as={TextField}
                                                                placeholder="Enter Company Website ( eg. xyz.com )" type="text" name="company_website" fullWidth />
                                                            {errors.company_website && touched.company_website && <Error text={errors.company_website} />}

                                                        </ThemeFInputDiv>

                                                    </ThemeFInputDiv>


                                                    <Stack alignItems="flex-end" sx={{ margin: "20px 0px" }}>

                                                        <NextButton className="NextButtonEmployer" type="submit"><img src={window.location.origin + "/assets/CompanyInfoRight.png"} alt="Next" width="14px" height="14px" ></img></NextButton>
                                                    </Stack>
                                                </Form>)}
                                        </Formik>

                                    </Box>


                                </Box>

                            </Box>
                        </Stack>
                    </Stack>
                </Box>


            </>
        }

        {
            parseInt(companyInfoForm) === 3 &&
            <>
                <Box className="EmployerRegisterPage"
                    sx={{
                        background: "#FFFFFF",

                    }}>
                    <Stack className="EmployerRegisterPageWrapper"
                        sx=
                        {{
                            padding: { "xs": "15px", "sm": "15px", "md": "20px 50px", "lg": "20px 50px", "xl": "20px 50px" },
                            gap: "24px"
                        }}>

                        <Stack
                            direction={{ "xs": "column", "sm": "column", "md": "column", "lg": "row", "xl": "row" }}
                            sx={{ position: "relative" }} >
                            <Stack sx={{
                                width: { "xs": "100%", "sm": "100%", "md": "100%", "lg": "50%", "xl": "50%" },

                            }}>
                                <Stack sx={{
                                    // margin: { "xs": "10px", "sm": "10px", "md": "10px", "lg": "50px", "xl": "50px" },
                                    direction: "row",
                                    // gap: { "xs": "10px", "sm": "10px", "md": "10px", "lg": "64px", "xl": "64px" },

                                }}>
                                    <Box sx={{
                                        position: "relative"
                                    }}>
                                        <Typography component="box" sx={{
                                            fontSize: { "xs": "1.8rem", "sm": "2rem", "md": "2.5rem", "lg": "4rem", "xl": "4rem" },
                                            fontFamily: "Montserrat",
                                            fontWeight: "600",
                                            color: "#4E3A67",
                                            display: { "xs": "none", "sm": "none", "md": "none", "lg": "block", "xl": "block" },
                                        }}>
                                            {t('GET_SUITABLE')}
                                            <Typography component="box" sx={{
                                                fontSize: { "xs": "1.8rem", "sm": "2rem", "md": "2.5rem", "lg": "4rem", "xl": "4rem" },
                                                fontFamily: "Montserrat",
                                                fontWeight: "600",
                                                color: "#4E3A67",
                                                display: { "xs": "none", "sm": "none", "md": "none", "lg": "block", "xl": "block" },
                                            }}>
                                                {t('CANDIDATES')}
                                            </Typography>
                                        </Typography>
                                        <Box sx={{
                                            position: "relative",
                                            left: "-150px"
                                        }}>
                                            <ThemeWebsiteImage imageUrl="/assets/g13.png" alt="G11" imageWidth="500px" />
                                        </Box>
                                    </Box>
                                    <Typography component="box" sx={{
                                        fontSize: { "xs": "1.8rem", "sm": "2rem", "md": "2.5rem", "lg": "4rem", "xl": "4rem" },
                                        fontFamily: "Montserrat",
                                        fontWeight: "600",
                                        color: "#4E3A67",
                                        display: { "xs": "block", "sm": "block", "md": "block", "lg": "none", "xl": "none" },
                                    }}>
                                        {t('GET_SUITABLE_CANDIDATES')}
                                    </Typography>
                                    <ThemeMobileImage imageUrl="/assets/g13Mobile.png" alt="G11" />

                                </Stack>


                                <Stack sx={{
                                    direction: "row",
                                    marginTop: { "xs": "0px", "md": "0px", "sm": "0px", "xl": "130px", "lg": "130px" },
                                    alignItems: "flex-end"
                                }}>
                                    <Typography component="box" sx={{
                                        fontSize: "4rem",
                                        fontFamily: "Montserrat",
                                        fontWeight: "600",
                                        color: "#4E3A67",
                                        display: { "xs": "none", "md": "none", "sm": "none", "lg": "block", "xl": "block" },
                                        maxWidth: "700px"

                                    }}>
                                        {t('GET_CANDIDATES_FOR_LOCALLEVEL_JOBS')}
                                    </Typography>
                                    <Box sx={{
                                        position: "relative",
                                    }}>
                                        <ThemeWebsiteImage imageUrl="/assets/g52.png" alt="G52" imageWidth="500px" />
                                    </Box>

                                </Stack>


                            </Stack>

                            <Box sx={{
                                width: { "lg": "50%", "md": "100%", "xs": "100%" }
                            }}>
                                <Box sx={{
                                    maxwidth: "763px",
                                    background: "#F8F8F8",
                                    border: "1px solid #EAEAEA",
                                    boxShadow: "0px 4px 40px rgba(239, 239, 239, 0.3)",
                                    borderRadius: "19px",
                                    margin: "0 auto",

                                }}>
                                    <Box sx={{
                                        padding: { "xs": "15px", "sm": "15px", "md": "35px 50px", "lg": "35px 50px", "xl": "35px 50px" },

                                    }}>
                                        <BackButton
                                            GoBack={
                                                () => {
                                                    setCompanyInfoForm(2)
                                                }
                                            } ></BackButton>

                                        <Typography component="box" sx={{
                                            fontSize: { "xs": "1.6rem", "sm": "1.6rem", "md": "2.5rem", "xl": "2.5rem", "lg": "2.5rem" },
                                            fontFamily: "Montserrat",
                                            fontWeight: "600",
                                            color: "#000000",
                                            display: "block",
                                            marginTop: "20px"
                                        }}>
                                            {t('COMPANY_DETAILS')}
                                        </Typography>

                                        <Stack direction="row" gap={2} sx={{ margin: "25px 0px", flexWrap: "wrap" }}>
                                            <Stack direction="row" gap={2} sx={{
                                                margin: "25px 0px",
                                                flexWrap: "wrap"
                                            }}
                                                justifyContent={{ "xs": "center", "sm": "center", "md": "center", "lg": "flex-start", "xl": "flex-start" }}>
                                                {
                                                    data3 && data3.map((item) => {
                                                        return <FormMenu data={item} formStep={2} />
                                                    })
                                                }

                                            </Stack>
                                        </Stack>
                                    </Box>


                                    <Box sx={{
                                        boxSizing: "border-box",
                                        background: "#FFFFFF",
                                        border: "1px solid #EDEDED",
                                        borderBottomLeftRadius: "19px",
                                        borderBottomRightRadius: "19px",
                                        padding: { "xs": "15px", "sm": "15px", "md": "30px 50px", "lg": "30px 50px", "xl": "30px 50px" },
                                        position: "relative",

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
                                                                        let stateValue = event.target.value;
                                                                        setState(stateValue);
                                                                        setFieldValue("state", event.target.value);
                                                                        getDistrictByState(event.target.value);
                                                                    }}
                                                                    sx={{
                                                                        background: " #FFFFFF",
                                                                        border: "1px solid #EAEAEA",
                                                                        boxShadow: "0px 10px 11px rgb(0 0 0 / 2%)",
                                                                        borderRadius: "7px",
                                                                        fontSize: "1rem",
                                                                        fontamily: 'Montserrat',
                                                                        BorderBottom: 'none'
                                                                    }}
                                                                    disableUnderline
                                                                >
                                                                    <MenuItem value=" ">Select State</MenuItem>
                                                                    {CountryState && CountryState.map((item) =>
                                                                        <MenuItem value={item} key={item}>{item}</MenuItem>
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
                                                                        fontSize: "1rem",
                                                                        fontamily: 'Montserrat',
                                                                        BorderBottom: 'none'
                                                                    }}
                                                                    disableUnderline
                                                                >
                                                                    <MenuItem value=" ">Select City</MenuItem>
                                                                    {District && District.map((item) =>
                                                                        <MenuItem value={item.name} key={item._id}>{item.name}</MenuItem>
                                                                    )}
                                                                </Select>

                                                                {errors.city && touched.city && <Error text={errors.city} />}
                                                            </ThemeFInputDiv>
                                                        </Stack>

                                                        <ThemeFInputDiv sx={{ position: "relative" }}>
                                                            <ThemeLabel LableFor="area" LableText="Company Area  *" />
                                                            <Box sx={{ width: "100%", margin: "10px 0px" }}>

                                                                <TextField id="outlined-basic"
                                                                    placeholder="Enter Company Area (eg.Haridwar, Uttarakhand, India)"
                                                                    value={companyAddress}
                                                                    onChange={(event) => {
                                                                        setCompanyAddress(event.target.value);
                                                                        setFieldValue("area", event.target.value);
                                                                        getAddress(event.target.value);
                                                                        setMenuBar(true)
                                                                    }}
                                                                    variant="outlined" fullWidth />


                                                            </Box>

                                                            {menubar && autoData && autoData !== "no record please enter some word" && <>
                                                                <ClickAwayListener onClickAway={() => setAutoData(false)}>

                                                                    <Box className="RegisterAutoSuggestDiv"
                                                                        sx={{
                                                                            position: "absolute",
                                                                            top: "110px",
                                                                            background: "#FFFFFF",
                                                                            width: "94%",
                                                                            padding: "20px",
                                                                            height: "fit-content",
                                                                            zIndex: "34",
                                                                            boxShadow: "0px 47px 52px #f4ecff",
                                                                            border: "3px solid #E1D4F2",
                                                                            borderRadius: "11px"
                                                                        }}>
                                                                        {autoData && autoData !== "no record please enter some word" && autoData.map((item) => {
                                                                            return (<>
                                                                                <Box
                                                                                    className="RegisterAutoSuggestList"
                                                                                    sx={{
                                                                                        padding: "20px",
                                                                                        borderBottom: "1px solid #E1D4F2",
                                                                                        cursor: "pointer"
                                                                                    }}
                                                                                    onClick={(event) => {
                                                                                        setCompanyAddress(item.description);
                                                                                        setFieldValue("area", item.description)
                                                                                        setMenuBar(false)
                                                                                    }}> {item.description}</Box></>)
                                                                        })}

                                                                    </Box>
                                                                </ClickAwayListener>
                                                            </>

                                                            }
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

                                                        <Box sx={{
                                                            width: "80px",
                                                        }}>
                                                            <img id="PanImage" width="100%" alt="PanImage" />
                                                        </Box>

                                                        <ThemeFInputDiv>
                                                            <ThemeLabel LableFor="company_pan_image" LableText="Upload Company Pan No. Image" />

                                                            <Field
                                                                id="company_pan_image"
                                                                style={{ display: "none", outline: "none" }}
                                                                as={TextField}
                                                                type="file" name="company_pan_image"
                                                                onChange={uploadCompanyPan} fullWidth />
                                                            <Box sx={{
                                                                // display: { "xs": "none", "sm": "none", "md": "none", "lg": "block", "xl": "block" }
                                                            }} >
                                                                <ButtonType3 imageURL="/assets/InsertPicture.png" ButtonText="Upload Image" ClickEvent={() => document.getElementById("company_pan_image").click()}></ButtonType3>

                                                            </Box>
                                                        </ThemeFInputDiv>

                                                        <ThemeFInputDiv>
                                                            <ThemeLabel LableFor="company_gst_number" LableText="Company GST Number " />
                                                            <Field
                                                                error={errors.company_gst_number && touched.company_gst_number}
                                                                id="company_gst_number"
                                                                as={TextField}
                                                                placeholder="Enter Company GST Number" type="text" name="company_gst_number" fullWidth />
                                                            {errors.company_gst_number && touched.company_gst_number && <Error text={errors.company_gst_number} />}

                                                        </ThemeFInputDiv>
                                                        <Box sx={{
                                                            width: "80px",
                                                        }}>
                                                            <img id="GSTImage" width="100%" alt="GSTImage" />
                                                        </Box>

                                                        <ThemeFInputDiv>
                                                            <ThemeLabel LableFor="company_gst_image" LableText="Upload Company GST Image" />

                                                            <Field
                                                                id="company_gst_image"
                                                                style={{ display: "none", outline: "none" }}
                                                                as={TextField}
                                                                type="file" name="company_gst_image"
                                                                onChange={uploadCompanyGST} fullWidth />

                                                            <Box sx={{
                                                                // display: { "xs": "none", "sm": "none", "md": "none", "lg": "block", "xl": "block" }
                                                            }} >
                                                                <ButtonType3 imageURL="/assets/InsertPicture.png" ButtonText="Upload Image" ClickEvent={() => document.getElementById("company_gst_image").click()}></ButtonType3>
                                                            </Box>
                                                        </ThemeFInputDiv>
                                                    </ ThemeFInputDiv>

                                                    <Stack sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                                                        <ThemeButtonType2 variant="contained" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>{t('SAVE')}</ThemeButtonType2>
                                                    </Stack>

                                                </Form>)}
                                        </Formik>

                                    </Box>

                                </Box>


                            </Box>


                        </Stack>
                    </Stack>
                </Box>


            </>
        }

    </>)
}
export default CompanyInfoForm;