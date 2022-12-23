import { Box, Container, Stack, Typography, TextField, Button, Input, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from "@mui/material";

import { Formik, Field, Form } from "formik";

import DatePicker from "react-datepicker";

import { ProfessionalDetailSchema } from "../../Validation/CandidateValidation";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import Error from '../../ThemeComponent/Common/Error';
import ButtonType1 from "../../ThemeComponent/Common/ButtonType1";

import { useState } from "react";
const ProfessionalDetail = ({ setActiveStep }) => {

    const defaultValue = {
        institue_name: "",
        qualification: "",
        course_type: "full_time",
        starting_year: "",
        ending_year: "",
        percentage: "",
    }
    const [courseType, setCourseType] = useState('full_time');
    const [startingDate, setStartingDate] = useState();
    const [endingDate, setEndingDate] = useState();


    const handleSubmit = async (values) => {
        console.log(values);

        let formData = new FormData();
        formData = {
            institue: values.institue_name,
            qualification: values.qualification,
            courseType: values.course_type,
            starting_year: values.starting_year,
            ending_year: values.ending_year,
            percentage: values.percentage
        }
        console.log(formData);
        // setActiveStep(1);
    }

    return (<>
        <Typography component="h3" sx={{ fontSize: "25px", color: "#2B1E44", margin: "20px" }}>
            Professional Details
        </Typography>
        <Box sx={{
            width: "60%",
            margin: "0 auto",
            borderRadius: "10px",
            padding: "20px",
            background: "#FFFFFF",
            borderTop: "4px solid #2B1E44"
        }}>
            <Formik

                initialValues={defaultValue}
                validationSchema={ProfessionalDetailSchema}
                onSubmit={handleSubmit}
            >
                {({ errors, touched, values, setFieldValue }) => (
                    <Form >


                        <Box className="input-item">
                            <ThemeLabel LableFor="institue_name" LableText="Institue Name" />
                            <Field
                                error={errors.institue_name && touched.institue_name}
                                as={Input}
                                id="institue_name"
                                placeholder="Enter Institue Name" type="text" name="institue_name" fullWidth />
                            {errors.institue_name && touched.institue_name && <Error text={errors.institue_name} />}

                        </Box>

                        <Box className="input-item">
                            <ThemeLabel LableFor="qualification" LableText="Qualification" />
                            <Field
                                error={errors.qualification && touched.qualification}
                                as={Input}
                                id="qualification"
                                placeholder="Enter Qualification" type="text" name="qualification" fullWidth />
                            {errors.qualification && touched.qualification && <Error text={errors.qualification} />}

                        </Box>
                        <Box className="input-item">
                            <ThemeLabel LableFor="course_type" LableText="Course Type" />
                            <Box>
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={courseType}
                                        onChange={(event) => {
                                            setCourseType(event.target.value)
                                            setFieldValue("course_type", event.target.value)
                                        }}
                                    >
                                        <Stack direction="row" gap={3}>
                                            <FormControlLabel value="full_time" control={<Radio />} label="Full Time" />
                                            <FormControlLabel value="part_time" control={<Radio />} label="Part Time" />
                                            <FormControlLabel value="correspondance_distance_learning" control={<Radio />} label="Correspondance/ Distance Learning" />
                                        </Stack>

                                    </RadioGroup>
                                </FormControl>
                            </Box>

                            {errors.course_type && touched.course_type && <Error text={errors.course_type} />}
                        </Box>


                        <Box className="input-item">
                            <ThemeLabel LableFor="starting_year" LableText="Date of Birth" />
                            <DatePicker
                                id="starting_year"
                                placeholderText={'Starting Date'}
                                name="starting_year"
                                selected={startingDate} onChange={(date) => { setStartingDate(date); setFieldValue("starting_year", date) }} />
                            {errors.starting_year && touched.starting_year && <Error text={errors.starting_year} />}

                        </Box>

                        <Box className="input-item">
                            <ThemeLabel LableFor="ending_year" LableText="Date of Birth" />
                            <DatePicker
                                id="ending_year"
                                placeholderText={'Ending Date'}
                                name="ending_year"
                                selected={endingDate} onChange={(date) => { setEndingDate(date); setFieldValue("ending_year", date) }} />
                            {errors.ending_year && touched.ending_year && <Error text={errors.ending_year} />}

                        </Box>

                        <Box className="input-item">
                            <ThemeLabel LableFor="percentage" LableText="Percentage" />
                            <Field
                                error={errors.percentage && touched.percentage}
                                as={Input}
                                id="percentage"
                                placeholder="Enter Percentage" type="text" name="percentage" fullWidth />
                            {errors.percentage && touched.percentage && <Error text={errors.percentage} />}

                        </Box>
                        <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                            <ButtonType1 ButtonText="Continue" />
                        </Box>

                    </Form>

                )}
            </Formik>

            <Button onClick={() => setActiveStep(2)}> Next Step</Button>
        </Box></>)
}

export default ProfessionalDetail;
