import { Box, Stack, Typography, Input, TextField, Divider } from "@mui/material";
import { Link } from "react-router-dom";

import { Formik, Field, Form } from "formik";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from "../../ThemeComponent/Common/Error";
import ButtonType3 from "../../ThemeComponent/Common/ButtonType3";
import ChangePassword from "../Common/ChangePassword";
import SubscriptionPlan from "./SubscriptionPlan";
import { ThemeButtontype1 } from "../../utils/Theme";
import { useOutletContext } from "react-router-dom";

import { ForgotPasswordValidation, CreateSubUserValidationSchema } from "../../Validation/EmployerValidation";
import { AccountSettingMenu } from "../../utils/Data";

import { useState, useEffect } from "react";
const AccountSetting = () => {
    const [currentMenu, setCurrentMenu] = useState("account_setting");
    const user = useOutletContext();

    useEffect(() => {
        const userProfile = async () => {
            let response = await fetch("http://192.168.1.6:8000/api/users/getuserById", {
                method: "POST",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    userid: "6384af6b9a60e4be920f13d3"

                }),
            })
            if (response.ok) {
                response = await response.json();
                console.log(response)
                // setdata(response.message);
            }
        }
        // userProfile();
    }, []);


    /*Creating Sub User*/
    const defaultValue2 = {
        email_address: "",
        password: "",
        mobile_number: ""
    }

    const createSubUser = async (values) => {
        let formData = new FormData();
        formData = {
            email_address: values.email_address,
            password: values.password,
            mobile_number: values.mobile_number
        }
        console.log(formData)
    }

    /* Updating the Company Information */
    const defaultValue1 = {
        company_name: user.companyName,
        company_email: user.companyEmail,
        company_lan_number: user.company_lan_number,
        company_website: user.companyWebsite,
        company_pincode: user.companyPincode,
        company_address: user.companyAddress,
        company_pan_number: user.companyPancard,
        company_gst_number: user.companyGstnumber
    }

    /* uploading the company Logo */
    const handleCompanyLogo = async (event) => {
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
        // let formData = new FormData();
        // formData.append('image', event.target.files[0]);
        // formData.append('imagetype', "comlogo");
        // formData.append('userid', userId);
        // let response = await fetch(api_url + "/api/employer/updateimage", {
        //     method: "POST",
        //     body: formData,
        // })
        // if (response.ok) {
        //     response = await response.json();
        //     console.log(response);
        // }
    }

    const handleCompanyInformation = async (values) => {
        let formData = new FormData();

        formData = {
            company_name: values.company_name,
            company_email: values.company_email,
            compan_lan_number: values.company_lan_number,
            company_website: values.company_website,
            company_pincode: values.company_pincode,
            company_address: values.company_address,
            company_pan_number: values.company_pan_number,
            company_gst_number: values.company_gst_number
        }
        console.log(formData);
    }

    //changing the Hr Information
    const defaultValue3 = {
        full_name: "",
        password: "",
        mobile_number: ""
    }

    /* updating the Hr Logo */
    const handleProfileLogo = async (event) => {
        let file = event.target.files[0];
        let file_size = file.size;
        // setCompanyLogoImage(file);
        // console.log(companyLogoImage);
        var output = document.getElementById('profileLogo');
        output.src = URL.createObjectURL(event.target.files[0]);

        // if (file != 'png' && file != 'jpeg' && file != 'jpg')
        //     setcompanyLogoError("File type should be JPEG and PNG.")
        // else if (file_size > 3000000) {
        //     setcompanyLogoError("File Size should be less than and equal to 3MB.")
        // }
        // else {
        // let formData = new FormData();
        // formData.append('image', event.target.files[0]);
        // formData.append('imagetype', "comlogo");
        // formData.append('userid', userId);
        // let response = await fetch(api_url + "/api/employer/updateimage", {
        //     method: "POST",
        //     body: formData,
        // })
        // if (response.ok) {
        //     response = await response.json();
        //     console.log(response);
        // }
    }
    const handleHrInformation = async (values) => {
        let formData = new FormData();
        formData = {
            full_name: values.full_name,
            email_address: values.password,
            mobile_number: values.mobile_number
        }
        console.log(formData)
    }


    return (<>
        <Stack direction="row" gap={2} sx={{ padding: "20px" }}>
            <Stack direction="column" gap={2} sx={{ width: "20%", padding: "0px 50px" }}>
                <Box >
                    <Typography component="div" sx={{ fontWeight: "600", fontSize: "25px", margin: "20px 0px", textTransform: "capitalize" }}>
                        {currentMenu.replaceAll("_", " ")}
                    </Typography>

                    <Stack direction="column" gap={1} divider={<Divider orientation="horizontal" flexItem />}
                        sx={{ Height: "200px", background: "#FFFFFF", borderRadius: "10px", padding: "20px" }}>

                        {AccountSettingMenu && AccountSettingMenu.map((item) => {
                            return (<Typography key={item.id} className={currentMenu == item.menu_name && "AccountMenu "} component="div"
                                sx={{ fontSize: "16px", margin: "5 0px", cursor: "pointer", textTransform: "capitalize" }} onClick={() => setCurrentMenu("create_sub_user")}>
                                {item.menu_name.replaceAll("_", " ")}
                            </Typography>
                            )
                        })}

                    </Stack>
                </Box>

                <Stack gap={2} sx={{ background: "#FFFFFF", padding: "20px", borderRadius: "10px" }}>
                    <Typography component="div" sx={{ fontWeight: "600", fontSize: "16px", textTransform: "capitalize" }}>
                        Increase visibility of your jobs
                    </Typography>
                    <Typography component="div" sx={{ fontSize: "14px" }}>
                        Connect your LinkedIn account and automatically promote your jobs in your network to increase visibility
                    </Typography>
                    <Stack direction="row" gap={1} sx={{ alignItems: "center" }}>
                        <Box width="30px" sx={{ borderRadius: "50%" }}>
                            <img src="http://www.localhost:3000/assets/LinkedIn.png" width="100%" style={{
                                borderRadius: "50%",
                                objectFit: "cover"
                            }}></img>
                        </Box>
                        <Typography component="div" sx={{ fontSize: "14px" }}>
                            Connect with LinkedIn
                        </Typography>
                    </Stack>

                </Stack>
            </Stack>


            <Box sx={{ width: "60%" }}>
                {currentMenu == "create_sub_user" && <>
                    <Stack
                        divider={<Divider orientation="horizontal" flexItem />}
                        gap={2}
                        sx={{
                            background: "#FFFFFF",
                            padding: "20px",
                            borderRadius: "10px",
                            borderTop: "4px solid #2B1E44"
                        }}>
                        <Box>
                            <Typography component="div" sx={{ color: "#2B1E44", fontWeight: "600", fontSize: "20px", textTransform: "capitalize", margin: "10px 0px" }}>
                                Create Sub User
                            </Typography>
                            <Formik

                                initialValues={defaultValue2}
                                validationSchema={CreateSubUserValidationSchema}
                                onSubmit={createSubUser}
                            >
                                {({ errors, touched, values, setFieldValue }) => (
                                    <Form className="updateCompanyInformationForm" >
                                        <Stack direction="column" gap={2}>
                                            <Box className="input-item">
                                                <ThemeLabel LableFor="email_address" LableText="Email Address" />
                                                <Field
                                                    variant="standard"
                                                    id="email_address"
                                                    as={TextField}
                                                    placeholder="Enter Email" type="text" name="email_address" fullWidth />
                                                {errors.email_address && touched.email_address && <Error text={errors.email_address} />}
                                            </Box>


                                            <Box className="input-item">
                                                <ThemeLabel LableFor="password" LableText="Password" />
                                                <Field
                                                    variant="standard"
                                                    id="password"
                                                    as={TextField}
                                                    placeholder="Enter Password" type="password" name="password" fullWidth />
                                                {errors.password && touched.password && <Error text={errors.password} />}
                                            </Box>


                                            <Box className="input-item">
                                                <ThemeLabel LableFor="mobile_number" LableText="Mobile Number" />
                                                <Field
                                                    variant="standard"
                                                    id="mobile_number"
                                                    as={TextField}
                                                    placeholder="Enter Mobile Number" type="text" name="mobile_number" fullWidth />
                                                {errors.mobile_number && touched.mobile_number && <Error text={errors.mobile_number} />}
                                            </Box>

                                        </Stack>

                                        <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                                            <ThemeButtontype1 type="submit" variant="contained">Create Sub User </ThemeButtontype1>
                                        </Box>
                                    </Form>
                                )}
                            </Formik>

                        </Box>



                    </Stack></>}
                {currentMenu == "company_information" && <>
                    <Stack
                        divider={<Divider orientation="horizontal" flexItem />}
                        gap={2}
                        sx={{
                            // margin: "0 auto",
                            background: "#FFFFFF",
                            padding: "20px",
                            borderRadius: "10px",
                            borderTop: "4px solid #2B1E44"
                        }}>
                        <Box>
                            <Typography component="div" sx={{ color: "#2B1E44", fontWeight: "600", fontSize: "20px", textTransform: "capitalize", margin: "10px 0px" }}>
                                Update Company Information
                            </Typography>
                            <Formik

                                initialValues={defaultValue1}
                                // validationSchema={ForgotPasswordValidation}
                                onSubmit={handleCompanyInformation}
                            >
                                {({ errors, touched, values, setFieldValue }) => (
                                    <Form className="updateCompanyInformationForm" >
                                        <Stack direction="column" gap={2}>
                                            <Box className="input-item">
                                                <ThemeLabel LableFor="company_name" LableText="Company Name" />
                                                <Field
                                                    variant="standard"
                                                    id="company_name"
                                                    as={TextField}
                                                    placeholder="Enter Company Name" type="text" name="company_name" fullWidth />
                                                {errors.company_name && touched.company_name && <Error text={errors.company_name} />}
                                            </Box>

                                            <Box className="input-item">
                                                <ThemeLabel LableFor="update_company_logo" LableText="Update Company Logo" />

                                                <Box sx={{ width: "80px" }}>
                                                    <img id="companyLogo" width="100%" />
                                                </Box>
                                                <Field
                                                    id="update_company_logo"
                                                    style={{ display: "none", outline: "none" }}
                                                    as={TextField}
                                                    onChange={handleCompanyLogo}
                                                    type="file" name="update_company_logo" fullWidth />

                                                <ButtonType3 ButtonText="update Company Logo" ClickEvent={() => document.getElementById("update_company_logo").click()} ></ButtonType3>

                                            </Box>


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
                                                    />
                                                </Box>

                                                {errors.company_address && touched.company_address && <Error text={errors.company_address} />}

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
                                        </Stack>



                                        <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                                            <ThemeButtontype1 type="submit" variant="contained">Update Company Information </ThemeButtontype1>
                                        </Box>
                                    </Form>
                                )}
                            </Formik>

                        </Box>



                    </Stack>
                </>}
                {currentMenu == "account_setting" && (<>
                    <Stack
                        divider={<Divider orientation="horizontal" flexItem />}
                        gap={2}
                        sx={{
                            // margin: "0 auto",
                            background: "#FFFFFF",
                            padding: "20px",
                            borderRadius: "10px",
                            borderTop: "4px solid #2B1E44"
                        }}>

                        <Box>
                            <Typography component="div" sx={{ color: "#2B1E44", fontWeight: "600", fontSize: "20px", textTransform: "capitalize", margin: "10px 0px" }}>
                                Personal Details
                            </Typography>

                            <Formik

                                initialValues={defaultValue3}
                                // validationSchema={ForgotPasswordValidation}
                                onSubmit={handleHrInformation}
                            >
                                {({ errors, touched, values, setFieldValue }) => (
                                    <Form className="HrInformationUpdateForm">
                                        <Stack direction="column" gap={2}>
                                            <Box className="input-item">
                                                <ThemeLabel LableFor="full_name" LableText="Full Name" />
                                                <Field
                                                    variant="standard"
                                                    id="full_name"
                                                    as={TextField}
                                                    placeholder="Enter Name" type="text" name="full_name" fullWidth />
                                                {errors.full_name && touched.full_name && <Error text={errors.full_name} />}
                                            </Box>

                                            <Box className="input-item">
                                                <ThemeLabel LableFor="update_profile_image" LableText="Upload Profile Image" />

                                                <Box sx={{ width: "80px" }}>
                                                    <img id="profileLogo" width="100%" />
                                                </Box>

                                                <Field
                                                    id="update_profile_image"
                                                    style={{ display: "none", outline: "none" }}
                                                    as={TextField}
                                                    onChange={
                                                        handleProfileLogo
                                                    }
                                                    type="file" name="update_profile_image" fullWidth />

                                                <ButtonType3 ButtonText="update Company Logo" ClickEvent={() => document.getElementById("update_profile_image").click()}></ButtonType3>

                                            </Box>

                                            <Box className="input-item">
                                                <ThemeLabel LableFor="email_address" LableText="Email Address" />
                                                <Stack direction="row" gap={2}>
                                                    <Field
                                                        variant="standard"
                                                        id="email_address"
                                                        as={TextField}
                                                        placeholder="Enter Email Address" type="text" name="email_address" fullWidth />
                                                    <Box>
                                                        Verified
                                                    </Box>
                                                </Stack>
                                                {errors.email_address && touched.email_address && <Error text={errors.email_address} />}

                                            </Box>

                                            <Box className="input-item">
                                                <ThemeLabel LableFor="mobile_number" LableText="Mobile Number" />
                                                <Stack direction="row" gap={2}>
                                                    <Field
                                                        variant="standard"
                                                        id="mobile_number"
                                                        as={TextField}
                                                        placeholder="Enter Mobile Number" type="text" name="mobile_number" fullWidth />
                                                    <Box>Verified</Box>
                                                </Stack>
                                                {errors.mobile_number && touched.mobile_number && <Error text={errors.mobile_number} />}

                                            </Box>



                                        </Stack>
                                        <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                                            <ThemeButtontype1 type="submit" variant="contained">Update Account </ThemeButtontype1>
                                        </Box>
                                    </Form>
                                )}
                            </Formik>
                        </Box>
                    </Stack></>)}
                {currentMenu == "change_password" && <ChangePassword />}
                {currentMenu == "subscription_plan" && <SubscriptionPlan />}
            </Box>

        </Stack >
    </>)

}
export default AccountSetting;
//getuserbyId