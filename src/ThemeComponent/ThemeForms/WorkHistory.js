import { postRequest } from "../../utils/ApiRequests";
import { SaveCandidateWorkInformation } from "../../utils/ApiUrls";

import { Box, Stack, Typography, TextField } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Error from '../../ThemeComponent/Common/Error';

import { ThemeButtonType2, ThemeButtonType3, ThemeFInputDiv } from "../../utils/Theme";
import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";

import { WorkHistorySchema } from "../../Validation/CandidateValidation";
import { useState, useEffect } from "react";

import { data1 } from "../../utils/Data";
import FormMenu from "../Common/FormMenu";

import ThemeMessage from "../Common/ThemeMessage";

function WorkHistoryForm() {
    const defaultValue = {
        company_name: "",
        designation: "",
        department: "",
        starting_year: "",
        ending_year: "",
    }
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [startingDate, setStartingDate] = useState(null);
    const [endingDate, setEndingDate] = useState(null);


    const handleSubmit = async (values, { resetForm }) => {

        let formData = new FormData();
        formData = {
            company_name: values.company_name,
            designation: values.designation,
            department: values.department,
            starting_year: values.starting_year,
            ending_year: values.ending_year,
        }

        let response = await postRequest(SaveCandidateWorkInformation, formData);
        console.log(response);
        if (response.status == 1) {
            localStorage.setItem("user", JSON.stringify(response.data));
            setFormSubmitted(true)
        }

    }

    return (<>

        <ThemeMessage open={formSubmitted} setOpen={setFormSubmitted} message=" Your Work History is submitted." type="success" />

        <Stack sx={{
            margin: "20px 0px"
        }}>
            <Box sx={{
                width: { "xs": "92%", "sm": "92%", "md": "763px", "lg": "763px", "xl": "763px" },
                height: "153px",
                background: "#F8F8F8",
                border: "1px solid #EAEAEA",
                boxShadow: "0px 4px 40px rgba(239, 239, 239, 0.3)",
                borderRadius: "19px",
                padding: { "xs": "15px", "sm": "15px", "md": "30px 50px", "lg": "30px 50px", "xl": "30px 50px" },
            }}>
                <Typography component="box" sx={{
                    fontSize: { "xs": "26px", "sm": "26px", "md": "40px", "lg": "40px", "xl": "40px" },
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    color: "#4E3A67",
                    display: "block",
                    marginTop: "20px"
                }}>
                    Work History
                </Typography>

                <Stack direction="row" gap={1} sx={{ margin: "25px 0px", flexWrap: "wrap" }}>
                    {
                        data1 && data1.map((item) => {
                            return <FormMenu data={item} />
                        })
                    }
                </Stack>

            </Box>
            <Box sx={{
                boxSizing: "border-box",
                width: { "xl": "865px", "lg": "865px", "md": "865px", "sm": "100%", "xs": "100%" },
                background: "#FFFFFF",
                border: "1px solid #EDEDED",
                borderRadius: "19px",
                padding: { "xs": "15px", "sm": "15px", "md": "30px 50px", "lg": "30px 50px", "xl": "30px 50px" },
                paddingBottom: "100px"


            }}>

                <Formik

                    initialValues={defaultValue}
                    validationSchema={WorkHistorySchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched, values, setFieldValue }) => (
                        <Form className="workHistoryForm">
                            <ThemeFInputDiv >

                                <Stack direction="row" gap={2}>
                                    <ThemeFInputDiv sx={{ width: "370px" }}>
                                        <ThemeLabel LableFor="starting_year" LableText="Start Date" />
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>

                                            <DatePicker

                                                id="starting_year"
                                                value={startingDate}
                                                onChange={(newValue) => {
                                                    setStartingDate(newValue);
                                                    setFieldValue("starting_year", new Date(newValue))
                                                }}
                                                inputProps={{
                                                    placeholder: "Enter Starting Year"
                                                }}
                                                disableFuture={true}
                                                renderInput={(params) => <TextField

                                                    {...params} />}
                                            />
                                        </LocalizationProvider>
                                        {errors.starting_year && touched.starting_year && <Error text={errors.starting_year} />}

                                    </ThemeFInputDiv>

                                    <ThemeFInputDiv sx={{ width: "370px" }}>
                                        <ThemeLabel LableFor="ending_year" LableText="Last Date" />
                                        <LocalizationProvider dateAdapter={AdapterDayjs}>

                                            <DatePicker

                                                id="ending_year"
                                                value={endingDate}
                                                onChange={(newValue) => {
                                                    setEndingDate(newValue);
                                                    setFieldValue("ending_year", new Date(newValue))
                                                }}
                                                inputProps={{
                                                    placeholder: "Enter Starting Year"
                                                }}
                                                disableFuture={true}
                                                renderInput={(params) => <TextField

                                                    {...params} />}
                                            />
                                        </LocalizationProvider>

                                        {errors.ending_year && touched.ending_year && <Error text={errors.ending_year} />}

                                    </ThemeFInputDiv>
                                </Stack>

                                <ThemeFInputDiv>
                                    <ThemeLabel LableFor="company_name" LableText="Company Name" />
                                    <Field
                                        error={errors.company_name && touched.company_name}
                                        as={TextField}
                                        id="company_name"
                                        placeholder="Enter Company Name" type="text" name="company_name" fullWidth />
                                    {errors.company_name && touched.company_name && <Error text={errors.company_name} />}

                                </ThemeFInputDiv>

                                <ThemeFInputDiv>
                                    <ThemeLabel LableFor="designation" LableText="Designation" />
                                    <Field
                                        error={errors.designation && touched.designation}
                                        as={TextField}
                                        id="designation"
                                        placeholder="Enter Designation" type="text" name="designation" fullWidth />
                                    {errors.designation && touched.designation && <Error text={errors.designation} />}

                                </ThemeFInputDiv>

                                <ThemeFInputDiv>
                                    <ThemeLabel LableFor="department" LableText="Department" />
                                    <Field
                                        error={errors.department && touched.department}
                                        as={TextField}
                                        id="department"
                                        placeholder="Enter department" type="text" name="department" fullWidth />
                                    {errors.department && touched.department && <Error text={errors.department} />}

                                </ThemeFInputDiv>

                                <Stack direction="row" sx={{ width: "100%", margin: "40px 0px", gap: "20px", flexWrap: "wrap" }}>
                                    <ThemeButtonType3 variant="outlined" type="submit"
                                        sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600", width: { "xs": "100%", "sm": "100%", "md": "50%", "lg": "50%", "xl": "50%" } }}
                                    > Save</ThemeButtonType3>
                                    <ThemeButtonType2 variant="contained" type="button" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600", width: { "xs": "100%", "sm": "100%", "md": "47%", "lg": "47%", "xl": "47%" } }}
                                        onClick={() => {
                                            window.location.href = window.location.origin + '/candidate-dashboard/profile/3';
                                        }}>Next Step</ThemeButtonType2>

                                </Stack>
                            </ThemeFInputDiv>
                        </Form>

                    )}
                </Formik>




            </Box>
        </Stack>
    </>)


}
const WorkHistory = ({ setActiveStep }) => {
    const [components, setComponents] = useState([]);
    const [newForm, setNewForm] = useState(0);

    const handleAddComponent = () => {
        const newComponent = <WorkHistoryForm key={components.length} />;
        setComponents(prevComponents => [...prevComponents, newComponent]);
    };

    useEffect(() => {
        handleAddComponent();
    }, [newForm]);

    return (<>


        <Box className="WorkHistoryPage"
            sx={{
                minHeight: "100vh",
                background: "#FFFFFF",
                backgroundRepeat: " no-repeat",
                backgroundPosition: "left 100px bottom 0px"
            }}>
            <Stack className="WorkHistorypageWrapper"
                sx=
                {{
                    padding: { "xs": "15px", "sm": "15px", "md": "20px 50px", "lg": "20px 50px", "xl": "20px 50px" },
                    gap: { "xs": "0px", "sm": "0px", "md": "24px", "lg": "24px", "xl": "24px" }
                }}>

                <Stack direction="row" sx={{
                    position: "relative",
                    gap: { "xs": "0px", "sm": "0px", "md": "24px", "lg": "24px", "xl": "24px" }
                }}>


                    <Stack sx={{
                        width: {
                            "xs": "0%", "sm": "0%", "md": "40%", "lg": "40%", "xl": "40%"
                        }, padding: { "xs": "0px", "sm": "0px", "md": "100px", "lg": "100px", "xl": "100px" },
                        visibility: { "xs": "hidden", "sm": "hidden", "md": "visible", "lg": "visible", "xl": "visible" }
                    }}>
                        <Box sx={{
                            display: { "xs": "none", "sm": "none", "md": "block", "lg": "block", "xl": "block" }

                        }}>
                            <Typography component="box" sx={{
                                fontSize: "64px",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: "block",
                            }}> Get
                            </Typography>
                            <Typography component="box" sx={{
                                fontSize: "64px",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: "block",
                                width: "max-content"
                            }}>
                                local-level jobs

                            </Typography>
                            <img src={window.location.origin + "/assets/g53.png"} alt="g53" style={{ margin: "40px 20px" }} />

                        </Box>


                    </Stack>
                    <Box id="WorkHistoryDiv" sx={{ width: { "xs": "100%", "sm": "100%", "md": "50%", "lg": "50%", "xl": "50%" } }}>
                        <ThemeButtonType2 variant="contained" type="button" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600", margin: "20px 0px", width: "fit-content" }}
                            onClick={handleAddComponent}>Add + </ThemeButtonType2>
                        {components}
                    </Box>

                </Stack>
            </Stack>
        </Box>



    </>)
}

export default WorkHistory;
