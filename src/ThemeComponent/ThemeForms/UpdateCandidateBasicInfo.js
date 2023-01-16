import { postRequest } from "../../utils/ApiRequests";
import { PostJobURL } from "../../utils/ApiUrls";

import { MaritalStatus } from "../../utils/Data";


import {
    Box, Stack, TextField, Checkbox, Select as SelectField,
    MenuItem, Snackbar, IconButton, Alert, Typography, Radio,
    RadioGroup, FormControlLabel, FormControl
} from '@mui/material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { Formik, Field, Form } from "formik";

import { updateCandidateBasicInfoSchema } from "../../Validation/CandidateValidation";
import Error from '../../ThemeComponent/Common/Error';
import ThemeLabel from '../../ThemeComponent/ThemeForms/ThemeLabel';
import { ThemeButtontype1 } from "../../utils/Theme";

import { useState } from "react";
const UpdateCandidateBasicInfo = ({ user }) => {
    const [value, setValue] = useState(user.dob);
    const [gender, setGender] = useState(user.gender.toLowerCase());
    const [martialStatus, setMaritalStatus] = useState(user.marital_status.toLowerCase());

    const defaultValue = {
        fullname: user.fullname,
        mobile: user.mobile,
        dob: user.dob,
        gender: gender,
        marital_status: martialStatus,
        address: user.address,
        currAddress: user.currAddress
    }
    const handleSubmit = async (values) => {
        console.log(values)
        console.log(document.getElementById("dob").value);

    }
    return (<>
        <Formik

            initialValues={defaultValue}
            validationSchema={updateCandidateBasicInfoSchema}
            onSubmit={handleSubmit}
        >
            {({ values, errors, touched, setFieldValue }) => (
                <Form className="updateUserProfile" >

                    <Stack direction="column" gap={2} >
                        <Stack direction="column" gap={2} className="input-item">
                            <ThemeLabel LableFor="fullname" LableText="Full Name" />
                            <Field
                                size="small"
                                error={errors.fullname && touched.fullname}
                                as={TextField}
                                id="fullname"
                                placeholder="Enter Full Name" type="text" name="fullname" fullWidth />
                            {errors.fullname && touched.fullname && <Error text={errors.fullname} />}
                        </Stack>

                        <Stack direction="column" gap={2} className="input-item">
                            <ThemeLabel LableFor="mobile" LableText="Mobile Number" />
                            <Field
                                size="small"
                                error={errors.fullname && touched.fullname}
                                as={TextField}
                                id="mobile"
                                placeholder="Enter Mobile Number" type="text" name="mobile" fullWidth />
                            {errors.mobile && touched.mobile && <Error text={errors.mobile} />}
                        </Stack>

                        <Stack direction="column" gap={2} className="input-item">
                            <ThemeLabel LableFor="dob" LableText="Date of Birth" />
                            <Box>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        dateFormat="dd/MM/yy"
                                        type="date"
                                        label="Date of Birth"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}

                                        renderInput={(params) => <TextField id="dob" size="small" sx={{ width: "100%" }} {...params} />}
                                    />
                                </LocalizationProvider>
                            </Box>
                            {errors.dob && touched.dob && <Error text={errors.dob} />}
                        </Stack>

                        <Stack direction="column" gap={2} className="input-item">
                            <ThemeLabel LableFor="gender" LableText="Gender" />
                            <Box>
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="controlled-radio-buttons-group"
                                        value={gender}
                                        onChange={(event) => {
                                            setGender(event.target.value)
                                            setFieldValue("gender", event.target.value)
                                        }}
                                    >
                                        <Stack direction="row" gap={3}>
                                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                                        </Stack>

                                    </RadioGroup>
                                </FormControl>
                            </Box>
                            {errors.gender && touched.gender && <Error text={errors.gender} />}
                        </Stack>

                        <Stack direction="column" gap={2} className="input-item">
                            <ThemeLabel LableFor="marital_status" LableText="Marital Status" />
                            <SelectField
                                labelId="demo-simple-select-label"
                                name="marital_status"
                                value={martialStatus}
                                onChange={(event) => {
                                    setMaritalStatus(event.target.value);
                                    setFieldValue("marital_status", event.target.value);
                                }}
                                sx={{ display: "block", boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                                disableUnderline
                            >
                                <MenuItem value=" ">Select Martial Status</MenuItem>
                                {MaritalStatus.map((item) =>
                                    <MenuItem value={item.value} key={item.id}>{item.Name}</MenuItem>
                                )}
                            </SelectField>

                            {errors.marital_status && touched.marital_status && <Error text={errors.marital_status} />}
                        </Stack>

                        <Stack direction="column" gap={2} className="input-item">
                            <ThemeLabel LableFor="address" LableText="Permanant Address" />
                            <Field
                                size="small"
                                error={errors.permanant_address && touched.permanant_address}
                                as="textarea"
                                rows="4"
                                id="address"
                                placeholder="Enter Permanant Address" type="text" name="address" fullWidth />
                            {errors.address && touched.address && <Error text={errors.address} />}

                        </Stack>

                        <Stack direction="column" gap={2} className="input-item">
                            <ThemeLabel LableFor="currAddress" LableText="Current Address" />
                            <Field
                                size="small"
                                error={errors.currAddress && touched.currAddress}
                                as="textarea"
                                rows="4"
                                id="currAddress"
                                placeholder="Enter Current Address" type="text" name="currAddress" currAddress />
                            {errors.currAddress && touched.currAddress && <Error text={errors.currAddress} />}

                        </Stack>

                    </Stack>

                    <Box style={{ textAlign: 'center', margin: "30px 0px" }}>
                        <ThemeButtontype1 variant="contained" type="submit">Update Information</ThemeButtontype1>
                    </Box>

                </Form>
            )}
        </Formik>
    </>)

}
export default UpdateCandidateBasicInfo;