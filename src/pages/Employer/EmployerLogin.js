import { postRequest } from "../../utils/ApiRequests";
import { EmployerLoginURL } from "../../utils/ApiUrls";

import { TextField, Box, Typography, Container, Stack, Button, styled } from "@mui/material";
import { Formik, Field, Form } from "formik";

import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import HeaderSec from "../../ThemeComponent/Common/HeaderSec";

import { SocialBox, ThemeButtonType2, ThemeButtonType3, ThemeFInputDiv } from "../../utils/Theme";
import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import { socialLogin } from "../../utils/Data";
import { employerLoginValidationSchema } from "../../Validation/EmployerValidation";
import Error from "../../ThemeComponent/Common/Error";
import { gridColumnsTotalWidthSelector } from "@mui/x-data-grid";

const EmployerLogin = () => {

    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const api_url = useSelector(state => state.api_url);
    const dispatch = useDispatch();
    const user = localStorage.user && JSON.parse(localStorage.user);


    const defaultValue = {
        email_address: "",
        password: ""
    }

    const handleSubmit = async (values, { setFieldError }) => {

        let EmployerLoginForm = new FormData();
        EmployerLoginForm = {
            email: values.email_address,
            password: values.password
        }
        let response = await postRequest(EmployerLoginURL, EmployerLoginForm);
        if (response.status == '1') {
            dispatch({ type: 'LOGIN', payload: response.data });
        }
        if (response.status == '0')
            setFieldError("password", "Invalid Credentials");

    }




    return (<>

        {isLoggedIn == 'true' && (user && user.employer_type == "employer") && <Navigate to="/employer-dashboard"></Navigate>}
        {/* <div className="bg-bluegray_900 flex flex-col font-worksans items-center justify-end mx-[auto] md:pr-[11px] sm:pr-[15px] pr-[22px] md:pt-[11px] sm:pt-[15px] pt-[22px] w-[100%]">
            <div className="flex flex-col items-center justify-start max-w-[1849px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <div className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[7%]">
                        <Text
                            className="font-bold font-worksans sm:mr-[22px] md:mr-[29px] mr-[57px] text-white_A700 w-[auto]"
                            as="h3"
                            variant="h3"
                        >
                            Jobs
                        </Text>
                        <Text
                            className="font-montserrat font-normal sm:ml-[22px] md:ml-[29px] ml-[57px] not-italic text-white_A700 w-[auto]"
                            as="h3"
                            variant="h3"
                        >
                            Yaha
                        </Text>
                    </div>
                    <Button
                        className="cursor-pointer font-bold min-w-[14%] ml-[1160px] sm:ml-[463px] md:ml-[598px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[max-content]"
                        shape="RoundedBorder29"
                        variant="OutlineWhiteA7003f"
                    >
                        Contact Us
                    </Button>
                    <Button
                        className="cursor-pointer font-bold min-w-[14%] sm:ml-[10px] md:ml-[13px] ml-[26px] sm:text-[20px] md:text-[22px] text-[24px] text-black_900 text-center w-[max-content]"
                        shape="RoundedBorder29"
                        variant="FillDeeporangeA100"
                    >
                        About Us
                    </Button>
                </div>
                <div className="flex flex-row md:flex-wrap sm:flex-wrap font-montserrat items-start justify-between sm:mt-[11px] md:mt-[14px] mt-[29px] sm:px-[0] w-[100%]">
                    <div className="flex flex-col justify-start mt-[126px] sm:mt-[50px] md:mt-[65px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                        <div className="flex flex-col justify-start md:ml-[105px] ml-[204px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[75%]">
                            <Text
                                className="font-worksans text-white_A700 w-[auto]"
                                as="h1"
                                variant="h1"
                            >
                                <span className="text-white_A700 text-[64px] font-bold sm:text-[48px] md:text-[48px]">
                                    We settle for nothing{" "}
                                </span>
                                <span className="text-deep_orange_A100 text-[64px] font-bold sm:text-[48px] md:text-[48px]">
                                    Less than the BEST
                                </span>
                            </Text>
                            <Text
                                className="font-extrabold font-montserrat ml-[2px] sm:mt-[13px] md:mt-[17px] mt-[34px] text-white_A700 w-[auto]"
                                as="h3"
                                variant="h3"
                            >
                                We Love Recruiting
                            </Text>
                        </div>
                        <Stack className="h-[657px] mt-[4px] relative w-[100%]">
                            <Img
                                src="images/img_g12.png"
                                className="absolute bottom-[0] h-[526px] left-[0] max-w-[100%] sm:w-[100%] w-[55%]"
                                alt="g12"
                            />
                            <Text
                                className="absolute font-medium leading-[35.00px] md:leading-[normal] sm:leading-[normal] sm:mx-[0] right-[0] text-white_A700 top-[0] sm:w-[100%] w-[78%]"
                                as="h3"
                                variant="h3"
                            >
                                Employees get the work they look for through our impactful job
                                portal that is monitored 24x7 for quality, transparency and
                                success. Employers, on the other hand, get the unique skills
                                and experience of the champion employees, hired through us,
                                for their growth.
                            </Text>
                        </Stack>
                    </div>
                    <div className="bg-gray_50 flex flex-col justify-start sm:mb-[19px] md:mb-[25px] mb-[49px] sm:mx-[0] p-[103px] sm:p-[15px] md:p-[53px] rounded-radius19 shadow-bs1 sm:w-[100%] w-[36%]">
                        <Text
                            className="font-worksans sm:ml-[3px] md:ml-[4px] ml-[8px] text-black_900 w-[auto]"
                            as="h2"
                            variant="h2"
                        >
                            Log in
                        </Text>
                        <Text
                            className="font-medium font-montserrat sm:ml-[3px] md:ml-[4px] ml-[8px] sm:mt-[17px] md:mt-[22px] mt-[44px] text-black_900 w-[auto]"
                            as="h3"
                            variant="h3"
                        >
                            Email Address
                        </Text>
                        <Input
                            className="font-medium font-montserrat p-[0] text-[16px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                            wrapClassName="md:ml-[4px] md:mt-[6px] ml-[8px] mt-[12px] sm:mt-[4px] sm:mx-[0] sm:w-[100%] w-[97%]"
                            type="email"
                            name="GroupTwentyFive"
                            placeholder="Enter Email ID / Username"
                        ></Input>
                        <Text
                            className="font-medium font-montserrat sm:ml-[3px] md:ml-[4px] ml-[8px] md:mt-[10px] mt-[21px] sm:mt-[8px] text-black_900 w-[auto]"
                            as="h3"
                            variant="h3"
                        >
                            Password
                        </Text>
                        <Input
                            className="font-medium font-montserrat p-[0] text-[16px] placeholder:text-gray_400 text-gray_400 w-[100%]"
                            wrapClassName="md:ml-[4px] md:mt-[6px] ml-[8px] mt-[12px] sm:mt-[4px] sm:mx-[0] sm:w-[100%] w-[97%]"
                            type="password"
                            name="GroupTwentyFour"
                            placeholder="Enter Password"
                        ></Input>
                        <Button
                            className="cursor-pointer font-bold font-worksans min-w-[97%] sm:ml-[3px] md:ml-[4px] ml-[8px] sm:mt-[18px] md:mt-[24px] mt-[47px] sm:text-[20px] md:text-[22px] text-[24px] text-black_900 text-center w-[max-content]"
                            shape="RoundedBorder7"
                            variant="OutlineDeeporangeA10054"
                        >
                            Log in
                        </Button>
                        <Button
                            className="cursor-pointer font-bold font-worksans min-w-[97%] sm:ml-[3px] md:ml-[4px] ml-[8px] md:mt-[12px] mt-[24px] sm:mt-[9px] sm:text-[20px] md:text-[22px] text-[24px] text-black_900 text-center w-[max-content]"
                            shape="RoundedBorder7"
                            variant="OutlineBluegray100"
                        >
                            Sign Up
                        </Button>
                        <div className="flex flex-col font-montserrat items-center justify-start ml-[16px] md:ml-[8px] sm:mx-[0] sm:my-[19px] md:my-[24px] my-[48px] sm:px-[0] sm:w-[100%] w-[94%]">
                            <div className="flex flex-col items-center justify-start w-[100%]">
                                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                                    <Line className="bg-bluegray_101 h-[1px] sm:mb-[2px] md:mb-[3px] mb-[7px] mt-[12px] sm:mt-[4px] md:mt-[6px] w-[32%]" />
                                    <Text
                                        className="text-gray_900 w-[auto]"
                                        as="h4"
                                        variant="h4"
                                    >
                                        or login in with
                                    </Text>
                                    <Line className="bg-bluegray_101 h-[1px] sm:mb-[2px] md:mb-[3px] mb-[7px] mt-[12px] sm:mt-[4px] md:mt-[6px] w-[32%]" />
                                </div>
                                <div className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center md:mt-[11px] mt-[22px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                                    <Button
                                        className="flex items-center justify-center w-[27%]"
                                        size="mdIcn"
                                    >
                                        <Img
                                            src="images/img_group29.png"
                                            className="flex items-center justify-center"
                                            alt="GroupTwentyNine"
                                        />
                                    </Button>
                                    <Button
                                        className="flex items-center justify-center md:ml-[11px] ml-[22px] sm:ml-[8px] w-[27%]"
                                        size="lgIcn"
                                    >
                                        <Img
                                            src="images/img_group28.png"
                                            className="h-[29px] sm:h-[12px] md:h-[15px] flex items-center justify-center"
                                            alt="GroupTwentyEight"
                                        />
                                    </Button>
                                    <Button
                                        className="flex items-center justify-center md:ml-[11px] ml-[22px] sm:ml-[8px] w-[27%]"
                                        size="smIcn"
                                    >
                                        <Img
                                            src="images/img_group27.png"
                                            className="flex items-center justify-center"
                                            alt="GroupTwentySeven"
                                        />
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        <Box className="EmployerLoginPage"
            sx={{
                // height: "1080px",
                height: "100vh",
                background: "#2B1E44",
                backgroundImage:
                    "url('../assets/g10.png')",
                backgroundRepeat: " no-repeat",
                backgroundPosition: " left 0px bottom 0px"

            }}>
            <Stack className="EmployerLoginPageInnerWrapper"
                sx=
                {{
                    padding: "20px 50px",
                    gap: "24px"
                }}>
                <HeaderSec
                    border="2px solid rgba(255, 255, 255, 0.25)"
                    color="#FFFFFF"
                    background="#432C60" />
                <Stack alignItems="flex-end" sx={{ position: "relative" }}>

                    <Box sx={{
                        position: "absolute",
                        top: "236px",
                        left: "204px"
                    }}>
                        <Typography component="box" sx={{
                            fontSize: "64px",
                            fontFamily: "Work Sans, sans-serif",
                            fontWeight: "700",
                            color: "#FC9A7E",
                            display: "block",
                            lineHeight: "40px"
                        }}>
                            We settle for nothing

                            <Typography component="box" sx={{
                                fontSize: "64px",
                                fontFamily: "Work Sans, sans-serif",
                                fontWeight: "700",
                                color: "#FC9A7E",
                                display: "block"
                            }}>
                                Less than the BEST
                            </Typography>
                        </Typography>


                        <Typography component="box" sx={{
                            fontSize: "24px",
                            fontFamily: "Montserrat",
                            fontWeight: "800",
                            color: "#FFFFFF",
                            display: "block",
                            marginTop: "20px"
                        }}>
                            We Love Recruiting
                        </Typography>
                        <Typography component="box" sx={{
                            fontSize: "24px",
                            fontFamily: "Montserrat",
                            fontWeight: "500",
                            color: "#FFFFFF",
                            display: "block",
                            width: "695px"
                        }}>
                            Employees get the work they look for through our impactful job portal
                            that is monitored 24x7 for quality, transparency and success. Employers,
                            the other hand, get the unique skills and experience of the champion employees,
                            hired through us, for their growth.

                        </Typography>


                    </Box>

                    <Stack gap={2} sx={{
                        width: "449px",
                        height: "730px",
                        background: "#FBF8FF",
                        boxShadow: "0px 4px 40px rgba(252, 154, 126, 0.3)",
                        borderRadius: "19px",
                        padding: "50px 100px"
                    }}>
                        <Typography component="box" sx={{ fontSize: "40px", fontFamily: "Work Sans, sans-serif", fontWeight: "700" }}>
                            Log in
                        </Typography>
                        <Formik

                            initialValues={defaultValue}
                            validationSchema={employerLoginValidationSchema}
                            onSubmit={handleSubmit}
                        >
                            {({ errors, touched }) => (
                                <Form className="EmployerLoginForm">
                                    <ThemeFInputDiv >
                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="email_address" LableText="Email Address * " />
                                            <Field
                                                error={errors.email_address && touched.email_address}
                                                as={TextField}
                                                id="email_address"
                                                placeholder="Enter Email ID/ Username" type="text" name="email_address" fullWidth />
                                            {errors.email_address && touched.email_address && <Error text={errors.email_address} />}

                                        </ThemeFInputDiv>
                                        <ThemeFInputDiv>
                                            <ThemeLabel LableFor="password" LableText="Password *" />
                                            <Field
                                                error={errors.password && touched.password}
                                                id="password"
                                                as={TextField}
                                                placeholder="Enter Password" type="password" name="password" fullWidth />
                                            {errors.password && touched.password && <Error text={errors.password} />}
                                        </ThemeFInputDiv>
                                    </ThemeFInputDiv>
                                    <Stack sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                                        <ThemeButtonType2 variant="contained" type="submit" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>Log In</ThemeButtonType2>
                                        <ThemeButtonType3 variant="outlined" type="button"
                                            sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}
                                            onClick={() => {
                                                window.location.href = window.location.origin + "/employer-register"
                                            }}
                                        >Sign up</ThemeButtonType3>
                                    </Stack>
                                </Form>
                            )}
                        </Formik>
                        <Typography component="span" sx={{ fontSize: "16px", display: "flex" }}>
                            <hr style={{ width: "150px", height: "0px", color: "#DAD9D9" }}></hr> or login in with <hr style={{ width: "150px", height: "0px" }}></hr>
                        </Typography>
                        <Stack direction="row" gap={3} justifyContent="center">
                            {
                                socialLogin.map((item) => {
                                    return (<>
                                        <SocialBox key={item.id}>
                                            <img src={item.image_url} alt={item.value} />
                                        </SocialBox>
                                    </>)
                                })
                            }
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>

        </Box>
        {/* <Header /> */}

        {/* <Box className="EmployerLoginPage"
            sx={{
                height: "93vh",
                backgroundColor: "#FAFAFA"
            }}>
            <Container
                sx={{
                    height: "inherit"
                }}>
                <Stack direction={{ xs: 'column', sm: 'row' }} gap={4} >
                    <Box sx={{ width: { md: "60%", sm: "100%" }, padding: { md: "200px 0px", sm: "0px" } }}>
                        <Typography component="span" sx={{ display: { sm: "block", md: "inline" }, textAlign: { sm: "center" } }}>
                            We &hearts;	Recuriting
                        </Typography>
                        <Typography component="H1"
                            sx={{ fontSize: "50px", fontWeight: "700" }}>
                            Hire great
                            <Typography component="span"
                                sx={{ backgroundColor: "#2B1E44", color: "#FFFFFF", fontSize: "50px", borderRadius: "10px", margin: "0px 10px", padding: "5px" }}>
                                tech
                            </Typography>
                            talent
                        </Typography>
                        <Typography component="div"
                            sx={{ margin: "10px 0px", lineHeight: '2' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu purus a libero suscipit dictum non nec odio.
                            Integer vitae congue arcu. Curabitur euismod semper turpis ac tincidunt. Curabitur luctus arcu a odio ultricies,
                            ac hendrerit orci ultricies. Quisque vulputate et augue eget ultrices.
                            Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam tempus augue eu risus semper lacinia.
                        </Typography>
                    </Box>
                    <Box sx={{ width: { md: "40%", sm: "100%" } }} >
                        <Box
                            sx={{
                                borderRadius: "10px",
                                padding: "27px 40px 20px 35px",
                                borderTop: "5px solid #2B1E44",
                                background: "#FFFFFF",
                                margin: { md: "100px 0px", sm: "0px" },
                                minHeight: "400px"
                            }}>
                            <Typography component="h3" sx={{ fontSize: "30px", fontWeight: "600", textAlign: "center", color: "#2B1E44", margin: "30px 0px" }}>
                                Login
                            </Typography>
                            <Box sx={{ margin: "20px 0px" }}>
                                <Formik

                                    initialValues={defaultValue}
                                    validationSchema={employerLoginValidationSchema}
                                    onSubmit={handleSubmit}
                                >
                                    {({ errors, touched }) => (
                                        <Form className="EmployerLoginForm">
                                            <ThemeFInputDiv >
                                                <ThemeFInputDiv>
                                                    <ThemeLabel LableFor="email_address" LableText="Email Address" />
                                                    <Field

                                                        size="small"
                                                        error={errors.email_address && touched.email_address}
                                                        as={TextField}
                                                        id="email_address"
                                                        placeholder="Enter Email ID/ Username" type="text" name="email_address" fullWidth />
                                                    {errors.email_address && touched.email_address && <Error text={errors.email_address} />}

                                                </ThemeFInputDiv>
                                                <ThemeFInputDiv>
                                                    <ThemeLabel LableFor="password" LableText="Password" />
                                                    <Field
                                                        size="small"
                                                        error={errors.password && touched.password}
                                                        id="password"
                                                        as={TextField}
                                                        placeholder="Enter Password" type="password" name="password" fullWidth />
                                                    {errors.password && touched.password && <Error text={errors.password} />}
                                                </ThemeFInputDiv>
                                            </ThemeFInputDiv>


                                            <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                                                <ThemeButtontype1 variant="contained" type="submit">Sign In</ThemeButtontype1>
                                            </Box>
                                        </Form>
                                    )}
                                </Formik>
                            </Box>

                            <Typography component="span" sx={{ fontSize: "15px", textAlign: "center", display: "block" }}>
                                Don't have a Account ?
                                <Typography component="span" sx={{ color: "#2B1E44", margin: "0px 4px", cursor: "pointer" }}>
                                    <Link style={{ textDecoration: "none", fontWeight: "500" }}
                                        to="/employer-register">Register</Link>
                                </Typography>
                            </Typography>
                        </Box>
                    </Box>

                </Stack>

            </Container>

        </Box> */}
        {/* <Stack direction="column" gap={2} >

                                                <Box className="input-item">
                                                    <ThemeLabel LableFor="email_address" LableText="Email Address" />
                                                    <Field
                                                        size="small"
                                                        error={errors.email_address && touched.email_address}
                                                        as={TextField}
                                                        id="email_address"
                                                        placeholder="Enter Email ID/ Username" type="text" name="email_address" fullWidth />
                                                    {errors.email_address && touched.email_address && <Error text={errors.email_address} />}

                                                </Box>

                                                <Box className="input-item">
                                                    <ThemeLabel LableFor="password" LableText="Password" />
                                                    <Field
                                                        size="small"
                                                        error={errors.password && touched.password}
                                                        id="password"
                                                        as={TextField}
                                                        placeholder="Enter Password" type="password" name="password" fullWidth />
                                                    {errors.password && touched.password && <Error text={errors.password} />}


                                                </Box>
                                            </Stack> */}

    </>)

}

export default EmployerLogin;