import { Box, Stack, Typography, Input, TextField, Divider } from "@mui/material";
import { Link } from "react-router-dom";

import { Formik, Field, Form } from "formik";
import { ForgotPasswordValidation } from "../../Validation/EmployerValidation";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from "../../ThemeComponent/Common/Error";
import ButtonType1 from "../../ThemeComponent/Common/ButtonType1";
import ButtonType2 from "../../ThemeComponent/Common/ButtonType2";
import ChangePassword from "../Common/ChangePassword";
import SubscriptionPlan from "./SubscriptionPlan";

import { useState, useEffect } from "react";
const AccountSetting = () => {
    const [currentMenu, setCurrentMenu] = useState("account_setting");
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
    return (<>
        <Stack direction="row" gap={2} sx={{ padding: "20px" }}>
            <Stack direction="column" gap={2} sx={{ width: "20%", padding: "0px 50px" }}>
                <Box >
                    <Typography component="div" sx={{ fontWeight: "600", fontSize: "30px", margin: "20px 0px", textTransform: "capitalize" }}>
                        {currentMenu.replaceAll("_", " ")}
                    </Typography>

                    <Stack direction="column" gap={1} divider={<Divider orientation="horizontal" flexItem />}
                        sx={{ Height: "200px", background: "#FFFFFF", borderRadius: "10px", padding: "20px" }}>
                        <Typography className={currentMenu == "account_setting" && "AccountMenu "} component="div" sx={{ fontSize: "16px", margin: "5 0px", cursor: "pointer" }} onClick={() => setCurrentMenu("account_setting")}>
                            Account Setting
                        </Typography>

                        <Typography className={currentMenu == "change_password" && "AccountMenu "} component="div" sx={{ fontSize: "16px", margin: "5 0px", cursor: "pointer" }} onClick={() => setCurrentMenu("change_password")}>
                            Change Password
                        </Typography>

                        <Typography className={currentMenu == "subscription_plan" && "AccountMenu "} component="div" sx={{ fontSize: "16px", margin: "5 0px", cursor: "pointer" }} onClick={() => setCurrentMenu("subscription_plan")}>
                            Subscription Plan
                        </Typography>
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
                {currentMenu == "account_setting" && (<>
                    <Box sx={{
                        // margin: "0 auto",
                        background: "#FFFFFF",
                        padding: "20px",
                        borderRadius: "10px",
                        borderTop: "4px solid #2B1E44"
                    }}>
                        <Formik

                        // initialValues={defaultValue}
                        // validationSchema={ForgotPasswordValidation}
                        // onSubmit={handleSubmit}
                        >
                            {({ errors, touched, values, setFieldValue }) => (
                                <Form >
                                    <Box className="input-item">
                                        <ThemeLabel LableFor="update_profile_image" LableText="Upload Profile Image" />

                                        <Field
                                            id="update_profile_image"
                                            style={{ display: "none", outline: "none" }}
                                            as={TextField}
                                            type="file" name="update_profile_image" fullWidth />

                                        <ButtonType2 ButtonText="Upload Profile Image" ClickEvent={() => document.getElementById("update_profile_image").click()}></ButtonType2>
                                    </Box>

                                    <Box className="input-item">
                                        <ThemeLabel LableFor="update_company_logo" LableText="Update Company Logo" />

                                        <Field
                                            id="update_company_logo"
                                            style={{ display: "none", outline: "none" }}
                                            as={TextField}
                                            type="file" name="update_company_logo" fullWidth />

                                        <ButtonType2 ButtonText="Update Company Logo" ClickEvent={() => document.getElementById("update_company_logo").click()}></ButtonType2>
                                    </Box>

                                    <Box className="input-item">
                                        <ThemeLabel LableFor="full_name" LableText="Full Name" />
                                        <Field
                                            id="full_name"
                                            as={Input}
                                            placeholder="Enter Name" type="text" name="full_name" fullWidth />
                                        {errors.full_name && touched.full_name && <Error text={errors.full_name} />}
                                    </Box>

                                    <Box className="input-item">
                                        <ThemeLabel LableFor="mobile_number" LableText="Mobile Number" />
                                        <Field
                                            id="mobile_number"
                                            as={Input}
                                            placeholder="Enter Mobile Number" type="text" name="mobile_number" fullWidth />
                                        {errors.mobile_number && touched.mobile_number && <Error text={errors.mobile_number} />}

                                    </Box>

                                    <Box className="input-item">
                                        <ThemeLabel LableFor="email_address" LableText="Email Address" />
                                        <Field
                                            id="email_address"
                                            as={Input}
                                            placeholder="Enter Email Address" type="text" name="email_address" fullWidth />
                                        {errors.email_address && touched.email_address && <Error text={errors.email_address} />}

                                    </Box>

                                    <Box className="input-item">
                                        <ThemeLabel LableFor="company_name" LableText="Company Name" />
                                        <Field
                                            id="company_name"
                                            as={Input}
                                            placeholder="Enter Company Name" type="text" name="company_name" fullWidth />
                                        {errors.company_name && touched.company_name && <Error text={errors.company_name} />}

                                    </Box>

                                    <Box className="input-item">
                                        <ThemeLabel LableFor="website" LableText="Website" />
                                        <Field
                                            id="website"
                                            as={Input}
                                            placeholder="Enter Website" type="text" name="website" fullWidth />
                                        {errors.website && touched.website && <Error text={errors.website} />}

                                    </Box>


                                    <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                                        <ButtonType1 ButtonText="Update Account" />
                                    </Box>
                                </Form>
                            )}
                        </Formik>
                    </Box></>)}
                {currentMenu == "change_password" && <ChangePassword />}
                {currentMenu == "subscription_plan" && <SubscriptionPlan />}
            </Box>

        </Stack >
    </>)

}
export default AccountSetting;
//getuserbyId