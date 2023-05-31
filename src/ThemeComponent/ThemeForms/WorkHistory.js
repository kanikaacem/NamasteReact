import { postRequest } from "../../utils/ApiRequests";
import { SaveCandidateWorkInformation } from "../../utils/ApiUrls";

import { Box, Stack, Typography, TextField, Divider } from "@mui/material";
import { Formik, Field, Form } from "formik";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Error from '../../ThemeComponent/Common/Error';

import { ThemeButtonType2, ThemeButtonType3, ThemeFInputDiv } from "../../utils/Theme";
import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";

import { WorkHistorySchema } from "../../Validation/CandidateValidation";
import { useState, useEffect, useCallback } from "react";

import { data1 } from "../../utils/Data";
import FormMenu from "../Common/FormMenu";

import ThemeMessage from "../Common/ThemeMessage";
import ThemeMobileImage from "../Common/ThemeMobileImage";
import ThemeWebsiteImage from "../Common/ThemeWebsiteImage";

import { useTranslation } from "react-i18next";
function WorkHistoryForm({ handleAddComponent, handleRemoveComponent, id, jobType }) {
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
    const [showAddButton, setShowAddButton] = useState(false);
    const [showRemoveButton, setShowRemoveButton] = useState(false);

    const { t } = useTranslation();


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
        if (response.status === "1") {
            localStorage.setItem("user", JSON.stringify(response.data));
            setFormSubmitted(true)
            setShowAddButton(true)

        }

    }

    const nextStepButton = async () => {
        let companyName = document.getElementById("company_name").value
        let Designation = document.getElementById("designation").value
        let Department = document.getElementById("department").value
        let formData = new FormData();
        formData = {
            company_name: companyName,
            designation: Designation,
            department: Department,
            starting_year: new Date(startingDate),
            ending_year: new Date(endingDate),
        }

        if (companyName !== "" && Designation !== "" && Department !== "") {
            let response = await postRequest(SaveCandidateWorkInformation, formData);
            if (response.status === "1") {
                localStorage.setItem("user", JSON.stringify(response.data));
                setFormSubmitted(true)
                setShowAddButton(true)

            }
        }
        window.location.href = window.location.origin + "/candidate-dashboard/normal/" + jobType + "/profile/3";
    }

    useEffect(() => {
        setShowRemoveButton(true);
    }, [])

    return (<>
        <ThemeMessage open={formSubmitted} setOpen={setFormSubmitted} message=" Your Work History is submitted." type="success" />

        <Box id={id}>
            <Formik
                initialValues={defaultValue}
                validationSchema={WorkHistorySchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, values, setFieldValue }) => (
                    <Form className="workHistoryForm">
                        <ThemeFInputDiv >

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

                            <Stack direction="row" sx={{ width: "100%", gap: "30px", flexWrap: "wrap", margin: "10px 0px" }}>
                                {showAddButton && <ThemeButtonType3 variant="outlined" type="submit"
                                    sx={{
                                        fontFamily: "Work Sans, sans-serif", fontWeight: "600",
                                        width: { "xs": "100%", "sm": "100%", "md": "100%", "lg": "100%", "xl": "48%" }
                                    }}
                                    onClick={(event) => {
                                        handleAddComponent();
                                        event.preventDefault();
                                    }}
                                > {t('ADD')} +</ThemeButtonType3>}


                                {(showRemoveButton && id > 0) &&
                                    <ThemeButtonType2 variant="contained" type="button" sx={{
                                        fontFamily: "Work Sans, sans-serif", fontWeight: "600",
                                        width: { "xs": "100%", "sm": "100%", "md": "100%", "lg": "100%", "xl": "48%" }
                                    }}
                                        onClick={(event) => {
                                            handleRemoveComponent();
                                            event.preventDefault();
                                        }}>{t('REMOVE')} -</ThemeButtonType2>}
                            </Stack>

                            <Stack direction="row" sx={{ width: "100%", gap: "30px", flexWrap: "wrap" }}>
                                <ThemeButtonType3 variant="outlined" type="submit"
                                    sx={{
                                        fontFamily: "Work Sans, sans-serif", fontWeight: "600",
                                        width: { "xs": "100%", "sm": "100%", "md": "100%", "lg": "100%", "xl": "48%" }

                                    }}
                                > {t('SAVE')}</ThemeButtonType3>
                                <ThemeButtonType2 variant="contained" type="button" sx={{
                                    fontFamily: "Work Sans, sans-serif", fontWeight: "600",
                                    width: { "xs": "100%", "sm": "100%", "md": "100%", "lg": "100%", "xl": "48%" }
                                }}
                                    onClick={nextStepButton}>{t('NEXT_STEP')}</ThemeButtonType2>

                            </Stack>
                        </ThemeFInputDiv>
                    </Form>

                )}
            </Formik>
        </Box>
    </>)


}
const WorkHistory = ({ jobType }) => {
    const [components, setComponents] = useState([]);
    const { t } = useTranslation();

    const handleAddComponent = useCallback(() => {
        setComponents(prevComponents => [...prevComponents, <WorkHistoryForm
            key={prevComponents.length} id={prevComponents.length} handleAddComponent={handleAddComponent}
            handleRemoveComponent={handleRemoveComponent}
            jobType={jobType}
        />]);
    }, [jobType]);

    const handleRemoveComponent = () => {
        setComponents(prevComponents => {
            const newDivs = [...prevComponents];
            newDivs.pop();
            return newDivs;
        });
    };


    useEffect(() => {
        handleAddComponent();
    }, [handleAddComponent]);

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

                <Stack direction={{ "xs": "column", "sm": "column", "md": "column", "lg": "row", "xl": "row" }} sx={{
                    position: "relative",
                    gap: { "xs": "0px", "sm": "0px", "md": "24px", "lg": "24px", "xl": "24px" }
                }}>
                    <Stack sx={{
                        width: {
                            "xs": "100%", "sm": "100%", "md": "100%", "lg": "50%", "xl": "50%"
                        }, padding: { "xs": "0px", "sm": "0px", "md": "0px", "lg": "100px 0px", "xl": "100px 0px" },
                    }}>
                        <Box>
                            <Typography component="box" sx={{
                                fontSize: "64px",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                marginLeft: "60px",
                                display: { "xs": "none", "sm": "none", "md": "none", "xl": "block", "lg": "block" }
                            }}> {t('GET')}
                                <Typography component="box" sx={{
                                    fontSize: "64px",
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    color: "#4E3A67",
                                    display: "block",
                                    width: "max-content"
                                }}>
                                    {t('LOCALLEVEL_JOBS')}

                                </Typography>
                            </Typography>

                            <Typography component="box" sx={{
                                fontSize: { "xs": "1.6rem", "sm": "2rem", "md": "2rem", "xl": "4rem", "lg": "4rem" },
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: { "xs": "block", "sm": "block", "md": "block", "xl": "none", "lg": "none" },
                                margin: "10px 0px"
                            }}> {t('GET_LOCALLEVEL_JOBS')}
                            </Typography>


                            <ThemeMobileImage imageUrl="/assets/g53.png" />
                            <Box sx={{
                                position: "relative",
                                left: { 'xs': '0px', "sm": "0px", "md": "0px", "lg": "-170px", "xl": "-195px" },
                                marginTop: "30px",
                                zIndex: "100"
                            }}
                            >
                                <ThemeWebsiteImage imageUrl="/assets/g53.png" imageWidth="600px" />
                            </Box>

                        </Box>
                    </Stack>

                    <Box id="WorkHistoryDiv" sx={{ width: { "xs": "100%", "sm": "100%", "md": "100%", "lg": "50%", "xl": "50%" } }}>

                        <Box >

                            <Box sx={{
                                background: "#F8F8F8",
                                border: "1px solid #EAEAEA",
                                boxShadow: "0px 4px 40px rgba(239, 239, 239, 0.3)",
                                borderRadius: "19px",
                                position: "relative",
                                top: { "xs": "-30px", "sm": "-30px", "md": "-30px", "lg": "0px", "xl": "0px" }

                            }}>
                                <Box sx={{
                                    padding: { "xs": "15px", "sm": "15px", "md": "30px 50px", "lg": "30px 50px", "xl": "30px 50px" },
                                }}>
                                    <Typography component="box" sx={{
                                        fontSize: { "xs": "26px", "sm": "26px", "md": "40px", "lg": "40px", "xl": "40px" },
                                        fontFamily: "Montserrat",
                                        fontWeight: "600",
                                        color: "#000000",
                                        display: "block",
                                        marginTop: "20px"
                                    }}>
                                        {t('WORK_HISTORY')}
                                    </Typography>

                                    <Stack direction="row" gap={1} sx={{ margin: "25px 0px", flexWrap: "wrap" }}>

                                        {
                                            data1 && data1.map((item) => {
                                                return <FormMenu data={item} dataLength={data1.length} />
                                            })
                                        }

                                    </Stack>
                                </Box>


                                <Stack sx={{
                                    boxSizing: "border-box",
                                    background: "#FFFFFF",
                                    border: "1px solid #EDEDED",
                                    padding: { "xs": "15px", "sm": "15px", "md": "30px 50px", "lg": "30px 50px", "xl": "30px 50px" },
                                    paddingBottom: "100px",
                                    borderBottomLeftRadius: "19px",
                                    borderBottomRightRadius: "19px",

                                }}
                                    divider={<Divider orientation="horizontal" flexItem />}
                                    gap={2}
                                >


                                    {components}
                                </Stack>

                            </Box>

                        </Box>

                    </Box>


                </Stack>
            </Stack>
        </Box>



    </>)
}

export default WorkHistory;
