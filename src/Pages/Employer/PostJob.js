import { postRequest, getRequest } from "../../utils/ApiRequests";

import {
    Box, Button, Stack, TextField, Typography, FormGroup, FormControlLabel, Checkbox, Radio, RadioGroup,
    Select, MenuItem
} from '@mui/material';

import { PostJobValidation } from "../../Validation/PostJobValidation"
import { Formik, Field, Form } from "formik";
import Error from '../../ThemeComponent/Common/Error';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Autocomplete from "react-google-autocomplete";

const PostJob = () => {
    const navigate = useNavigate();
    const defaultValue = {
        job_sector: "",
        job_department: "",
        job_role: "",
        job_description: "",
        eco_friendly_job: false,
        disabled_people_apply: false,
        number_of_openings: "",
        job_type: "",
        job_address: "",
        gender: "",
        minimum_qualification: "",
        required_experience: "",
        min_salary: "",
        max_salary: "",
        job_benefits: [],
        language: "",
        number_of_days: "",
        shift_timing: "",
        vehicle_required: "",

    }

    const PostJobFormLabel = ({ LableText, LableFor, mandatory, children }) => {
        return (<Stack direction="row" gap={1}>
            <label
                className="themeLabel" htmlFor={LableFor} style={{
                    fontSize: "1rem",
                    fontWeight: "600",
                }}> {LableText}{mandatory && <span style={{ color: "red" }}>*</span>} </label>
            {children}
        </Stack>)
    }

    const StyledFormControlLabel = {
        display: "flex",
        justifyContent: "space-between",
        background: "#FCF9F5",
        padding: "5px 30px",
        borderRadius: "7px",
        margin: 0,
        // width: "100%",
        border: "1px solid #EAEAEA "

    }
    const CheckBoxStyles = {
        " &.Mui-checked": {
            color: "#FF671F",
        },
        "& .MuiCheckbox-root": {
            background: "#FFFFFF",
        },

    }

    const SelectBoxStyle = {
        width: '100%',
        backgroundColor: '#FCF9F5',
        borderRadius: '7px',
    }


    const MininumQualificationData = [
        { id: 1, label: "Any", value: "any" },
        { id: 2, label: "Below 10th", value: "below_10th" },
        { id: 3, label: "10th Pass", value: "10th_pass" },
        { id: 4, label: "12th Pass", value: "12th_pass" },
        { id: 5, label: "Graduate", value: "graduate" },
        { id: 6, label: "Post Graduate", value: "post_graduate" }
    ]

    const RequiredExperienceData = [
        { id: 1, label: "Fresher", value: "fresher" },
        { id: 2, label: "0-2 years", value: "0-2_years" },
        { id: 3, label: "2-5 years", value: "2-5_years" },
        { id: 4, label: "5+ years", value: "5+_years" }
    ]

    const JobBenefitsData = [
        { id: 1, label: "Fuel", value: "fuel" },
        { id: 2, label: "Meal", value: "meal" },
        { id: 3, label: "Insurance", value: "insurance" },
        { id: 4, label: "PF", value: "pf" },
        { id: 5, label: "Medical", value: "medical" },
        { id: 6, label: "Over Time", value: "over_time" },
        { id: 7, label: "Accomodation", value: "accomodation" },
        { id: 8, label: "Other", value: "other" },
        // { id: 9, label: "None", value: "none" }
    ]

    const LanguageData = [
        { id: 1, label: "Thoda English", value: "thoda_english" },
        { id: 2, label: "Good English", value: "good_english" },
        { id: 3, label: "Hindi", value: "hindi" },
        { id: 4, label: "Other", value: "other" }
    ]

    const ShiftData = [
        { id: 1, label: "Day", value: "day" },
        { id: 2, label: "Night", value: "night" }
    ]

    const VehicleRequiredData = [
        { id: 1, label: "None", value: "none" },
        { id: 2, label: "Motorcycle", value: "motorcycle" },
        { id: 3, label: "Scooter", value: "scooter" },
        { id: 4, label: "E-Bike", value: "e-bike" },
        { id: 5, label: "3 Wheeler", value: "3_wheeler" },
        { id: 6, label: "6 Wheeler", value: "6_wheeler" }
    ]

    const [jobSectorData, setJobSectorData] = useState([]);
    const [jobDepartmentData, setJobDepartmentData] = useState([]);
    const [jobRoleData, setJobRoleData] = useState([]);
    useEffect(() => {
        const fetchJobSector = async () => {
            try {
                const api_url = process.env.REACT_APP_GET_JOB_SECTOR; // Replace with your .env variable name
                const data = await getRequest(api_url);
                setJobSectorData(data.data);
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };

        fetchJobSector();
    }, [])

    const getJobDepartmentData = async (value, fieldName) => {
        try {

            let searchField = "";
            if (fieldName === "job_sector") {
                searchField = "jobCategoryName";
            } else if (fieldName === "job_department") {
                searchField = "jobTitleName";
            }
            const api_url = process.env.REACT_APP_POST_JOB_DROPDOWN; // Replace with your .env variable name
            const data = await postRequest(api_url,
                {
                    searchField,
                    searchinput: value
                }
            );
            fieldName === "job_sector" && setJobDepartmentData(data.data);
            fieldName === "job_department" && setJobRoleData(data.data);
        } catch (error) {
            // Handle the error
            console.error("Fetch error:", error);
        }
    };

    const handleSubmit = async (values, { setFieldError }) => {
        const { job_sector,
            job_department,
            job_role,
            job_description,
            eco_friendly_job,
            disabled_people_apply,
            number_of_openings,
            job_type,
            job_address,
            gender,
            minimum_qualification,
            required_experience,
            min_salary,
            max_salary,
            job_benefits,
            language,
            number_of_days,
            shift_timing,
            vehicle_required } = values;

        let PostJobForm = new FormData();
        PostJobForm = {
            jobRole: job_role,
            jobSector: job_sector,
            jobDepartment: job_department,
            numberOfOpenings: number_of_openings,
            jobType: job_type,
            greenJob: eco_friendly_job,
            accessibleForDisabled: disabled_people_apply,
            jobAddress: job_address,
            gender: gender,
            qualification: minimum_qualification,
            requiredExperience: required_experience,
            inhandSalaryPermonth: {
                minSalary: parseInt(min_salary),
                maxSalary: parseInt(max_salary),
                fixedSalary: '',
                currency: "INR"

            },
            jobBenefits: job_benefits,
            language: language,
            shift: shift_timing,
            vehicleRequired: vehicle_required,
            workingDays: number_of_days,
            description: job_description
        }
        try {
            const api_url = process.env.REACT_APP_POST_JOB;
            const response = await postRequest(api_url, PostJobForm);
            if (response.status === '1') {
                alert("Your job is posted successfully.It will be published after review")
                navigate("/employer-dashboard");

            }
        } catch (error) {
            console.error("Fetch error:", error);
        }

    }


    const handleCheckboxChange = (event, fieldName, setFieldValue, values) => {
        let FieldArray = values[fieldName];
        const { value, checked } = event.target;

        if (checked) {
            FieldArray.push(value); // Add the label value to the array
        } else {
            const index = FieldArray.indexOf(value);
            if (index !== -1) {
                FieldArray.splice(index, 1); // Remove the label value from the array
            }
        }

        setFieldValue(fieldName, FieldArray); // Update the form field value
    };

    // const saveAsDraft = (values) => console.log(values);


    return (
        <Box className="PostAJob" sx={{
            width: "100%",
            minHeight: "100vh",
            padding: "20px 100px",
            boxSizing: "border-box",
        }}>
            <Typography component="div"
                sx={{
                    fontSize: "1.25rem",
                    color: "#000000",
                    fontWeight: "700",
                    margin: "0px 0px 20px 0px"
                }}>
                Post a Job

            </Typography>
            <Box className="PostAJobWrapper" sx={{
                background: "#ffffff",
                height: "inherit",
                borderRadius: "19px",
                padding: "80px",
                boxSizing: "border-box"
            }}>
                <Formik
                    initialValues={defaultValue}
                    validationSchema={PostJobValidation}
                    onSubmit={handleSubmit}
                >
                    {({ values, errors, touched, setFieldValue }) => (
                        <Form className="PostJobForm" >
                            <Stack direction="column" gap={3}>
                                <Stack direction="row" alignItems="center" justifyContent="space-between">
                                    <Stack direction="column" gap={2} sx={{ width: "32%" }}>
                                        <PostJobFormLabel LableFor="job_sector" LableText="Job Sector" mandatory={true} />
                                        < Select
                                            id="dropDown"
                                            value={values.job_sector}
                                            onChange={(event) => {
                                                setFieldValue("job_sector", event.target.value)
                                                getJobDepartmentData(event.target.value, "job_sector");

                                            }}
                                            displayEmpty
                                            sx={SelectBoxStyle}
                                        >
                                            <MenuItem value="" disabled sx={{ color: '#676767' }}>
                                                Select Job Sector
                                            </MenuItem>
                                            {jobSectorData && jobSectorData.map((item, index) => {
                                                return <MenuItem key={index} value={item.jobRoleName}>{item.jobRoleName}</MenuItem>
                                            })
                                            }

                                        </Select >

                                        {errors.job_sector && touched.job_sector && <Error text={errors.job_sector} />}
                                    </Stack>

                                    <Stack direction="column" gap={2} sx={{ width: "32%" }}>
                                        <PostJobFormLabel LableFor="job_department" LableText="Job Department" mandatory={true} />
                                        < Select
                                            id="dropDown"
                                            value={values.job_department}
                                            onChange={(event) => {
                                                setFieldValue("job_department", event.target.value)
                                                getJobDepartmentData(event.target.value, "job_department");

                                            }}
                                            displayEmpty
                                            sx={SelectBoxStyle}

                                        >
                                            <MenuItem value="" disabled sx={{ color: '#676767' }}>
                                                Select Job Department
                                            </MenuItem>
                                            {jobDepartmentData && jobDepartmentData.map((item, index) => {
                                                return <MenuItem key={index} value={item.key}>{item.key}</MenuItem>
                                            })
                                            }

                                        </Select >
                                        {errors.job_department && touched.job_department && <Error text={errors.job_department} />}
                                    </Stack>

                                    <Stack direction="column" gap={2} sx={{ width: "32%" }}>
                                        <PostJobFormLabel LableFor="job_role" LableText="Job Role" mandatory={true} />
                                        < Select
                                            id="dropDown"
                                            value={values.job_role}
                                            onChange={(event) => {
                                                setFieldValue("job_role", event.target.value)

                                            }}
                                            displayEmpty
                                            sx={SelectBoxStyle}

                                        >
                                            <MenuItem value="" disabled sx={{ color: '#676767' }}>
                                                Select Job Role
                                            </MenuItem>
                                            {jobRoleData && jobRoleData.map((item, index) => {
                                                return <MenuItem key={index} value={item.key}>{item.key}</MenuItem>
                                            })
                                            }

                                        </Select >
                                        {errors.job_role && touched.job_role && <Error text={errors.job_role} />}
                                    </Stack>
                                </Stack>

                                <Stack direction="column" gap={2}>
                                    <PostJobFormLabel LableFor="job_description" LableText="Job Description" />
                                    <Field
                                        error={errors.job_description && touched.job_description}
                                        as={TextField}
                                        id="job_description"
                                        placeholder="Enter Job Description" type="text"
                                        name="job_description" fullWidth
                                        multiline
                                        rows={6} // Set the desired number of rows
                                        sx={{ ...CheckBoxStyles, background: "#FCF9F5" }} />
                                    {errors.job_description && touched.job_description && <Error text={errors.job_description} />}
                                </Stack>

                                <FormGroup sx={{ display: "flex", flexDirection: "row", gap: "30px", margin: "20px 0px", justifyContent: "space-between" }}>

                                    <Box sx={{ width: "49%", boxSizing: "border-box" }}>
                                        <FormControlLabel sx={StyledFormControlLabel} control={<Checkbox sx={CheckBoxStyles} />}
                                            value="eco_friendly_job" label="Eco Friendly Job" labelPlacement="start"
                                            onChange={(event) => setFieldValue("eco_friendly_job", event.target.checked)}
                                        />
                                    </Box>

                                    <Box sx={{ width: "49%", boxSizing: "border-box" }}>
                                        <FormControlLabel sx={StyledFormControlLabel} control={<Checkbox sx={CheckBoxStyles} />}
                                            value="disabled_people_apply" label="Disabled People Apply" labelPlacement="start"
                                            onChange={(event) => setFieldValue("disabled_people_apply", event.target.checked)}

                                        />
                                    </Box>


                                </FormGroup>

                                <Stack direction="row" justifyContent="space-between" sx={{ height: "100px" }}>
                                    <Stack direction="column" gap={2} sx={{ width: "49%" }}>
                                        <PostJobFormLabel LableFor="number_of_openings" LableText="Number of openings" mandatory={true} />
                                        <Field
                                            error={errors.number_of_openings && touched.number_of_openings}
                                            as={TextField}
                                            id="number_of_openings"
                                            placeholder="Number of openings" type="text" name="number_of_openings" fullWidth />
                                        {errors.number_of_openings && touched.number_of_openings && <Error text={errors.number_of_openings} />}
                                    </Stack>

                                    <Stack direction="column" gap={2} sx={{ width: "49%" }}>
                                        <PostJobFormLabel LableFor="job_type" LableText="Job Type" mandatory={true} />
                                        <FormGroup >
                                            <RadioGroup name="job_type" sx={{ display: "flex", flexDirection: "row", gap: "50px" }}
                                                onChange={(event) => {
                                                    setFieldValue("job_type", event.target.value)
                                                }}>
                                                <Box sx={{ width: "46%", boxSizing: "border-box" }}>
                                                    <FormControlLabel sx={StyledFormControlLabel} value="permanant_job" control={<Radio sx={CheckBoxStyles} />}
                                                        label="Permanant Job" labelPlacement="start" />
                                                </Box>
                                                <Box sx={{ width: "47%", boxSizing: "border-box" }}>
                                                    <FormControlLabel sx={StyledFormControlLabel} value="contract_job" control={<Radio sx={CheckBoxStyles} />}
                                                        label="Contract Job" labelPlacement="start" />
                                                </Box>
                                            </RadioGroup>
                                        </FormGroup>
                                        {errors.job_type && touched.job_type && <Error text={errors.job_type} />}
                                    </Stack>
                                </Stack>


                                <Stack direction="column" gap={2}>
                                    <PostJobFormLabel LableFor="job_address" LableText="Address" mandatory={true} />
                                    <Autocomplete
                                        apiKey={process.env.REACT_APP_YOUR_GOOGLE_MAPS_API_KEY}
                                        options={{
                                            types: [],
                                            componentRestrictions: { country: "in" }
                                        }}
                                        onPlaceSelected={(place) => {
                                            let address = place?.formatted_address || place?.name
                                            setFieldValue("job_address", address)
                                        }}
                                        className="autocomplete-input" // Set the class name
                                        placeholder="Enter Address"
                                    />

                                    {errors.job_address && touched.job_address && <Error text={errors.job_address} />}
                                </Stack>

                                <Stack direction="column" gap={2}>
                                    <PostJobFormLabel LableFor="gender" LableText="Gender" mandatory={true} />
                                    <FormGroup >
                                        <RadioGroup name="gender" sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}
                                            onChange={(event) => {
                                                setFieldValue("gender", event.target.value)
                                            }}>
                                            <Box sx={{ width: "32%", boxSizing: "border-box" }}>
                                                <FormControlLabel sx={StyledFormControlLabel} value="male" control={<Radio sx={CheckBoxStyles} />}
                                                    label="Male" labelPlacement="start" />
                                            </Box>
                                            <Box sx={{ width: "32%", boxSizing: "border-box" }}>
                                                <FormControlLabel sx={StyledFormControlLabel} value="female" control={<Radio sx={CheckBoxStyles} />}
                                                    label="Female" labelPlacement="start" />
                                            </Box>
                                            <Box sx={{ width: "32%", boxSizing: "border-box" }}>
                                                <FormControlLabel sx={StyledFormControlLabel} value="any" control={<Radio sx={CheckBoxStyles} />}
                                                    label="Any" labelPlacement="start" />
                                            </Box>
                                        </RadioGroup>
                                    </FormGroup>
                                    {errors.gender && touched.gender && <Error text={errors.gender} />}
                                </Stack>

                                <Stack direction="column" gap={2}>
                                    <PostJobFormLabel LableFor="minimum_qualification" LableText="Minimum Qualification" mandatory={true} />
                                    <FormGroup >
                                        <RadioGroup name="minimum_qualification" sx={{ display: "flex", flexDirection: "row", gap: "23px", justifyContent: "space-between" }}
                                            onChange={(event) => {
                                                setFieldValue("minimum_qualification", event.target.value)
                                            }}>
                                            {MininumQualificationData.map((item, index) =>
                                                <Box key={index} sx={{ width: "32%", boxSizing: "border-box" }}>
                                                    <FormControlLabel sx={StyledFormControlLabel} value={item.value} control={<Radio sx={CheckBoxStyles} />}
                                                        label={item.label} labelPlacement="start" />
                                                </Box>
                                            )}
                                        </RadioGroup>
                                    </FormGroup>
                                    {errors.minimum_qualification && touched.minimum_qualification && <Error text={errors.minimum_qualification} />}
                                </Stack>

                                <Stack direction="column" gap={2}>
                                    <PostJobFormLabel LableFor="required_experience" LableText="Required Experience" />
                                    <FormGroup >
                                        <RadioGroup name="required_experience" sx={{ display: "flex", flexDirection: "row", gap: "30px", justifyContent: "space-between" }}
                                            onChange={(event) => {
                                                setFieldValue("required_experience", event.target.value)
                                            }}>
                                            {RequiredExperienceData.map((item, index) =>
                                                <Box key={index} sx={{ width: "32%", boxSizing: "border-box" }}>
                                                    <FormControlLabel key={index} sx={StyledFormControlLabel} value={item.value} control={<Radio sx={CheckBoxStyles} />}
                                                        label={item.label} labelPlacement="start" />
                                                </Box>
                                            )}
                                        </RadioGroup>
                                    </FormGroup>
                                    {errors.required_experience && touched.required_experience && <Error text={errors.required_experience} />}
                                </Stack>

                                <Stack direction="column" gap={2}>
                                    <PostJobFormLabel LableFor="salary" LableText="In Hand Salary/Month" mandatory={true} />
                                    <Stack direction="row" gap={2} justifyContent="center" alignItems="center">
                                        <Box sx={{ width: "50%", boxSizing: "border-box" }}>
                                            <Field
                                                error={errors.min_salary && touched.min_salary}
                                                as={TextField}
                                                id="min_salary"
                                                placeholder="Enter Minimum Salary" type="text" name="min_salary" fullWidth />
                                            {errors.min_salary && touched.min_salary && <Error text={errors.min_salary} />}
                                        </Box>
                                        <Box sx={{ width: "49%", boxSizing: "border-box" }}>
                                            <Field
                                                error={errors.max_salary && touched.max_salary}
                                                as={TextField}
                                                id="max_salary"
                                                placeholder="Enter Maximum Salary" type="text" name="max_salary" fullWidth />
                                            {errors.max_salary && touched.max_salary && <Error text={errors.max_salary} />}

                                        </Box>
                                    </Stack>
                                </Stack>

                                <Stack direction="column" gap={2}>
                                    <PostJobFormLabel LableFor="job_benefits" LableText="Job Benefits"> <span>(Select all applicable Option)</span></PostJobFormLabel>
                                    <FormGroup sx={{ display: "flex", flexDirection: "row", gap: "23px", justifyContent: "space-between" }}>
                                        {JobBenefitsData.map((item, index) =>
                                            <Box key={index} sx={{ width: "49%", boxSizing: "border-box" }}>
                                                <FormControlLabel key={index} sx={StyledFormControlLabel} control={<Checkbox sx={CheckBoxStyles} />}
                                                    onChange={(event) => handleCheckboxChange(event, "job_benefits", setFieldValue, values)}
                                                    value={item.value}
                                                    label={item.label} labelPlacement="start" />
                                            </Box>
                                        )}
                                    </FormGroup>
                                    {errors.job_benefits && touched.job_benefits && <Error text={errors.job_benefits} />}
                                </Stack>

                                <Stack direction="column" gap={2}>
                                    <PostJobFormLabel LableFor="language" LableText="Language" mandatory={true} />
                                    <FormGroup >
                                        <RadioGroup name="language" sx={{ display: "flex", flexDirection: "row", gap: "15px", justifyContent: "space-between" }}
                                            onChange={(event) => {
                                                setFieldValue("language", event.target.value)
                                            }}>
                                            {LanguageData.map((item, index) =>
                                                <Box key={index} sx={{ width: "49%", boxSizing: "border-box" }}>
                                                    <FormControlLabel key={index} sx={StyledFormControlLabel} value={item.value} control={<Radio sx={CheckBoxStyles} />}
                                                        label={item.label} labelPlacement="start" />
                                                </Box>
                                            )}
                                        </RadioGroup>
                                    </FormGroup>
                                    {errors.language && touched.language && <Error text={errors.language} />}
                                </Stack>

                                <Stack direction="column" gap={2} >
                                    <PostJobFormLabel LableFor="number_of_days" LableText="Number of Days" mandatory={true} />
                                    <Stack direction="row" gap={2} alignItems="center">
                                        <Field
                                            sx={{ width: "40%" }}
                                            error={errors.number_of_days && touched.number_of_days}
                                            as={TextField}
                                            id="number_of_days"
                                            placeholder="Number of Days" type="text" name="number_of_days" fullWidth /> <span> Days / week</span>
                                    </Stack>
                                    {errors.number_of_days && touched.number_of_days && <Error text={errors.number_of_days} />}
                                </Stack>

                                <Stack direction="column" gap={2}>
                                    <PostJobFormLabel LableFor="shift_timing" LableText="Shift Timing" />
                                    <FormGroup >
                                        <RadioGroup name="minimum_qualification" sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}
                                            onChange={(event) => {
                                                setFieldValue("shift_timing", event.target.value)
                                            }}>
                                            {ShiftData.map((item, index) =>
                                                <Box key={index} sx={{ width: "49%", boxSizing: "border-box" }}>
                                                    <FormControlLabel key={index} sx={StyledFormControlLabel} value={item.value} control={<Radio sx={CheckBoxStyles} />}
                                                        label={item.label} labelPlacement="start" />
                                                </Box>
                                            )}
                                        </RadioGroup>
                                    </FormGroup>
                                    {errors.shift_timing && touched.shift_timing && <Error text={errors.shift_timing} />}
                                </Stack>

                                <Stack direction="column" gap={2}>
                                    <PostJobFormLabel LableFor="vehicle_required" LableText="Vehicle required" mandatory={true} />
                                    <FormGroup >
                                        <RadioGroup name="vehicle_required" sx={{ display: "flex", flexDirection: "row", gap: "23px", justifyContent: "space-between" }}
                                            onChange={(event) => {
                                                setFieldValue("vehicle_required", event.target.value)
                                            }}>
                                            {VehicleRequiredData.map((item, index) =>
                                                <Box key={index} sx={{ width: "32%", boxSizing: "border-box" }}>
                                                    <FormControlLabel key={index} sx={StyledFormControlLabel} value={item.value} control={<Radio sx={CheckBoxStyles} />}
                                                        label={item.label} labelPlacement="start" />
                                                </Box>
                                            )}
                                        </RadioGroup>
                                    </FormGroup>
                                    {errors.vehicle_required && touched.vehicle_required && <Error text={errors.vehicle_required} />}
                                </Stack>
                                {/* <Button variant="contained"
                                        type="button" onClick={() => console.log(values)}
                                        sx={{
                                            width: "250px",
                                            background: "#FF671F",
                                            borderRadius: "33px",
                                            textTransform: "capitalize",
                                            margin: "20px auto",
                                            height: "43px",
                                            fontSize: "1rem",
                                            "&:hover": {
                                                background: "#FF671F",
                                            }
                                        }
                                        }>Save as Draft</Button > */}
                                <Stack direction="row" justifyContent="space-between">
                                    <Button variant="contained"
                                        onClick={() => navigate("/employer-dashboard")}
                                        type="button"
                                        sx={{
                                            width: "49%",
                                            background: "#FCF9F5",
                                            borderRadius: "5px",
                                            color: "#000000",
                                            textTransform: "capitalize",
                                            margin: "20px auto",
                                            fontSize: "1.2rem",
                                            padding: "10px !important",
                                            "&:hover": {
                                                background: "#FCF9F5",
                                                color: "#000000",

                                            }
                                        }
                                        }>Cancel</Button >
                                    <Button variant="contained"
                                        type="submit"
                                        sx={{
                                            width: "49%",
                                            background: "#FF671F",
                                            borderRadius: "5px",
                                            textTransform: "capitalize",
                                            margin: "20px auto",
                                            fontSize: "1.2rem",
                                            padding: "10px !important",
                                            "&:hover": {
                                                background: "#FF671F",
                                            }
                                        }
                                        }>Submit</Button >
                                </Stack>
                            </Stack>
                        </Form>
                    )}
                </Formik>

            </Box>


        </Box >)

}
export default PostJob;