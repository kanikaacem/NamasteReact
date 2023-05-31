import { Box, Stack, Container, Button, TextField, Select, MenuItem } from "@mui/material";

import { Formik, Field, Form } from "formik";

import FormLabel from "../Common/FormLabel";
import Error from "../../ThemeComponent/Common/Error";
import PageTopSection from "../Common/PageTopSection";
import Footer from "../../ThemeComponent/Common/Footer";

import { useState } from "react";
const CandidateInformation = () => {
    const [state, setState] = useState([]);
    const defaultValue = {
        company_name: "",
        mobile_number: "",
        city: "",
        business: ""
    }

    const handleSubmit = async (values, { setFieldError }) => {
        console.log(values)

    }
    return (
        <Box sx={{
            height: "100vh",
        }}>
            <PageTopSection TopSectionName="Candidate ki jaankari De" />
            <Container sx={{
                padding: "0px", maxWidth: '1800px', minHeight: {
                    "xs": "fit-content", "sm": "fit-content", "md": "623px", "lg": "623px", "xl": "623px"
                },
            }} maxWidth={false}>

                <Box className="CandidateLoginSection" sx={{
                    padding: "20px"

                }}>
                    <Formik
                        initialValues={defaultValue}
                        // validationSchema={CandidateMobileNumberValidation}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form className="CandidateLoginForm">
                                <Stack direction="column" gap={1}>
                                    <Stack direction="column" gap={1}>
                                        <FormLabel LableFor="company_name" LableText="Enter hiring company Name" />
                                        <Field
                                            sx={{
                                                "& fieldset": { border: 'none' },
                                            }}
                                            error={errors.company_name && touched.company_name}
                                            as={TextField}
                                            id="company_name"
                                            placeholder="Enter Company Name" type="text" name="company_name" fullWidth />
                                        {errors.company_name && touched.company_name && <Error text={errors.company_name} />}
                                    </Stack>

                                    <Stack direction="column" gap={1}>
                                        <FormLabel LableFor="mobile_number" LableText="Hire karne wale ka mobile number" />
                                        <Field
                                            sx={{
                                                "& fieldset": { border: 'none' },
                                            }}
                                            error={errors.mobile_number && touched.mobile_number}
                                            as={TextField}
                                            id="mobile_number"
                                            placeholder="Enter Mobile Number" type="text" name="mobile_number" fullWidth />
                                        {errors.mobile_number && touched.mobile_number && <Error text={errors.mobile_number} />}
                                    </Stack>

                                    <Stack direction="column" gap={1}>
                                        <FormLabel LableFor="city" LableText="Sehar" />
                                        <Select
                                            classNamePrefix="react-select"
                                            labelId="demo-simple-select-label"
                                            name="state"
                                            value={state}
                                            label="Age"
                                            onChange={(event) => {
                                                let stateValue = event.target.value;
                                                setState(stateValue);
                                                // setFieldValue("city", event.target.value);
                                                // getDistrictByState(event.target.value);
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
                                            <MenuItem value="1" key="1">Value</MenuItem>
                                            <MenuItem value="2" key="2">Value</MenuItem>
                                            <MenuItem value="3" key="4">Value</MenuItem>

                                        </Select>
                                        {errors.city && touched.city && <Error text={errors.city} />}
                                    </Stack>


                                </Stack>

                                <Button variant="contained"
                                    type="submit"
                                    sx={{
                                        background: "#FF671F",
                                        borderRadius: "33px",
                                        textTransform: "capitalize",
                                        margin: "20px 0px",
                                        width: "100%",
                                        fontSize: { "xs": "0.8rem", "sm": "0.8rem", "md": "1.5rem", "lg": "1.5rem", "xl": "1.5rem" },
                                        "&:hover": {
                                            background: "#FF671F",
                                        }
                                    }
                                    }> Submit</Button >



                            </Form>
                        )}
                    </Formik>
                </Box>
            </Container>
            <Footer />
        </Box>
    )
}
export default CandidateInformation;

