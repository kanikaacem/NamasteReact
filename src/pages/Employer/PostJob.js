import { Box, TextField, Select as SelectField, MenuItem, Snackbar, IconButton, Alert, Typography } from '@mui/material';

import { Formik, Field, Form } from "formik";

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { DefaultEditor } from 'react-simple-wysiwyg';
import { useSelector } from 'react-redux';

import { useState } from "react";

import { postJobValidationSchema } from "../../Validation/PostJobValidation";
import { cities, Experience, Role, Skills } from "../../utils/Data";
import Error from '../../ThemeComponent/Common/Error';
import ThemeLabel from '../../ThemeComponent/ThemeForms/ThemeLabel';
import ButtonType1 from '../../ThemeComponent/Common/ButtonType1';

const PostJob = () => {
    const user = localStorage.user && JSON.parse(localStorage.user);
    const api_url = useSelector(state => state.api_url);

    const [city, setCity] = useState(" ");
    const [role, setRole] = useState(" ");
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const animatedComponents = makeAnimated();

    const defaultValue = {
        job_title: "",
        role: "",
        experience: "",
        opening: "",
        salary: "",
        short_description: "",
        long_description: "",
        city: ""
    }

    const handleClose = (event) => {
        setFormSubmitted(false);
    };

    const handleSubmit = async (values, { resetForm }) => {
        let formData = new FormData();
        formData = {
            userid: user._id,
            title: values.job_title,
            role: values.role,
            experience: values.experience,
            opening: values.opening,
            salary: values.salary,
            skills: values.skills,
            shortdescription: values.short_description,
            description: values.long_description,
            location: values.city
        }
        let response = await fetch(api_url + "/api/job/postjob", {
            // Adding method type
            method: "POST",
            // Adding body or contents to send
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify(formData),
        })
        if (response.ok) {
            response = await response.json();
            if (response.status == 1) {
                setFormSubmitted(true);
                resetForm();
                setCity(" ");
                setRole(" ");
                setSelectedOptions([]);
            }

        }

    }


    return (<>
        <Typography component="div" sx={{ fontWeight: "600", fontSize: "30px", padding: "5px 100px" }}>
            Post Job
        </Typography>
        <Snackbar
            open={formSubmitted}
            autoHideDuration={6000} onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Your Job is saved . It will be publised after reviewing.
            </Alert>

        </Snackbar>

        <Box sx={{ padding: "40px" }}>
            <Box sx={{
                borderRadius: "20px",
                padding: "27px 40px 20px 35px",
                background: "#FFFFFF",
                width: "50%",
                margin: "0px auto",
                borderTop: "4px solid #2B1E44"
            }}>
                <Typography component="div" sx={{ fontWeight: "600" }}>
                    Share some basic details about the role
                </Typography>

                <Typography component="div">
                    This helps us find you the most relevant candidates
                </Typography>
                <Formik

                    initialValues={defaultValue}
                    validationSchema={postJobValidationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values, errors, touched, setFieldValue }) => (
                        <Form >

                            <Box className="input-item">
                                <ThemeLabel LableFor="job_title" LableText="Job Title" />
                                <Field
                                    variant="standard"
                                    error={errors.job_title && touched.job_title}
                                    as={TextField}
                                    id="job_title"
                                    placeholder="Enter Job Title" type="text" name="job_title" fullWidth />
                                {errors.job_title && touched.job_title && <Error text={errors.job_title} />}


                            </Box>

                            <Box className="input-item">
                                <ThemeLabel LableFor="role" LableText="Role" />
                                <SelectField
                                    variant="standard"
                                    labelId="demo-simple-select-label"
                                    name="role"
                                    value={role}
                                    label="role"
                                    onChange={(event) => {
                                        setRole(event.target.value);
                                        setFieldValue("role", event.target.value);
                                    }}
                                    sx={{ display: "block", boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                                    disableUnderline
                                >
                                    <MenuItem value=" ">Select Role</MenuItem>
                                    {Role.map((item) =>
                                        <MenuItem value={item.value} key={item.id}>{item.name}</MenuItem>
                                    )}
                                </SelectField>
                                {errors.role && touched.role && <Error text={errors.role} />}
                            </Box>

                            <Box className="input-item">
                                <ThemeLabel LableFor="experience" LableText="Experience" />
                                <Field
                                    variant="standard"
                                    error={errors.experience && touched.experience}
                                    as={TextField}
                                    name="experience"
                                    id="experience"
                                    placeholder="Enter Experience" fullWidth />
                                {errors.experience && touched.experience && <Error text={errors.experience} />}
                            </Box>

                            <Box className="input-item">
                                <ThemeLabel LableFor="opening" LableText="Opening" />
                                <Field
                                    variant="standard"
                                    error={errors.opening && touched.opening}
                                    as={TextField}
                                    id="opening"
                                    placeholder="Enter Opening" type="text" name="opening" fullWidth />
                                {errors.opening && touched.opening && <Error text={errors.opening} />}
                            </Box>

                            <Box className="input-item">
                                <ThemeLabel LableFor="salary" LableText="Salary" />
                                <Field
                                    variant="standard"
                                    error={errors.opening && touched.opening}
                                    as={TextField}
                                    id="salary"
                                    placeholder="Enter Salary" type="text" name="salary" fullWidth />
                                {errors.salary && touched.salary && <Error text={errors.salary} />}
                            </Box>

                            <Box className="input-item">
                                <ThemeLabel LableFor="skills" LableText="Skills" />
                                <Field
                                    variant="standard"
                                    error={errors.skills && touched.skills}
                                    component={Select}
                                    name="skills"
                                    options={Skills}
                                    components={animatedComponents}
                                    onChange={(options) => {
                                        let optionvalue = [];
                                        setSelectedOptions(options);
                                        options.map((item) => {
                                            optionvalue.push(item.value);
                                        })
                                        setFieldValue("skills", optionvalue.join(","));
                                    }}
                                    isMulti
                                    id_data={(errors.skills && touched.skills) ? "skills-error" : "skills"}
                                    placeholder="Select Experience" data={Experience} fullWidth />

                                {errors.skills && touched.skills && <Error text={errors.skills} />}
                            </Box>

                            <Box className="input-item">
                                <ThemeLabel LableFor="long_description" LableText="Long Description" />
                                <DefaultEditor
                                    style={{
                                        minHeight: "300px",
                                        margin: "20px 0px !important",
                                        display: "block"
                                    }}
                                    name="long_description"
                                    value={values['long_description']} onChange={(e) => { setFieldValue("long_description", e.target.value) }} />
                                {errors.long_description && touched.long_description && <Error text={errors.long_description} />}
                            </Box>

                            <Box className="input-item">
                                <ThemeLabel LableFor="short_description" LableText="Short Description" />
                                <Field
                                    variant="standard"
                                    error={errors.short_description && touched.short_description}
                                    as={TextField}
                                    id="short_description"
                                    placeholder="Enter Short Description" type="textarea" name="short_description" fullWidth />
                                {errors.short_description && touched.short_description && <Error text={errors.short_description} />}


                            </Box>
                            <Box className="input-item">
                                <ThemeLabel LableFor="city" LableText="City" />
                                <SelectField
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
                                </SelectField>

                                {errors.city && touched.city && <Error text={errors.city} />}
                            </Box>

                            <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                                <ButtonType1 ButtonText="Post Job" />
                            </Box>
                        </Form>
                    )}
                </Formik>

            </Box>
        </Box>



    </>)
}
export default PostJob;