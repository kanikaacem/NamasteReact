import React from 'react';
import { Formik, Field, Form } from "formik";
import { JobApplyValidationSchema } from "../../Validation/PostJobValidation"
import Error from '../../ThemeComponent/Common/Error';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from "react-i18next";
import { postRequest } from "../../utils/ApiRequests";
import { useNavigate } from "react-router-dom";
import { Modal, TextField, Button, Grid, FormControlLabel, Typography, Radio, RadioGroup, Stack, FormGroup, Tooltip } from '@mui/material';
const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: 640,
  width: '100%',
  backgroundColor: '#FFFFFF',
  borderRadius: '18px',
  boxShadow: 24,
};

const headingStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
}

const JobApplyForm = ({ openJobApplyModal, setOpenJobApplyModal }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  let defaultValue = {
    name: '',
    age: '',
    gender: '',
    qualification: '',
  }

  const PostJobFormLabel = ({ LableText, LableFor, mandatory, children }) => {
    return (<Stack direction="row" gap={1}>
      <label
        className="themeLabel" htmlFor={LableFor} style={{
          fontSize: "0.9rem",
          fontWeight: "600",
          marginBottom: "8px",
          marginTop: "14px"
        }}> {LableText}{mandatory && <span style={{ color: "red" }}>*</span>} </label>
      {children}
    </Stack>)
  }

  const StyledFormControlLabel = {
    display: "flex",
    justifyContent: "space-between",
    background: "#FCF9F5",
    padding: "0px 18px",
    borderRadius: "7px",
    margin: 0,
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

  const submitForm = async(values) => {
    const { name, age, gender, qualification } = values;

    let ApplyJobForm = new FormData();
    ApplyJobForm = {
      fullname: name,
      age: age,
      gender: gender, 
      education: qualification
    }
    try {
      const api_url = process.env.REACT_APP_APPLY_JOB;
      const response = await postRequest(api_url, ApplyJobForm);
      if (response.status === '1') {
        navigate("/job-listing");
        setOpenJobApplyModal(false);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  const qualificationData = [
    { id: 1, label: "None", value: "none" },
    { id: 3, label: "10th Pass", value: "10th_pass" },
    { id: 4, label: "12th Pass", value: "12th_pass" },
    { id: 5, label: "Diploma", value: "diploma" },
    { id: 6, label: "Graduate", value: "graduate" },
    { id: 7, label: "Post Graduate", value: "post_graduate" }
  ]

  const ageData = [
    { id: 1, label: "18-25", value: "18-25" },
    { id: 2, label: "25-35", value: "25-35" },
    { id: 3, label: "35-45", value: "35-45" },
    { id: 4, label: "45-50", value: "45-50" },
    { id: 5, label: "50+", value: "50+" },
  ]

  return (
    <Modal open={openJobApplyModal}
      onClose={() => setOpenJobApplyModal(false)}>
      <div style={styles}>
        <Formik
          initialValues={defaultValue}
          validationSchema={JobApplyValidationSchema}
          onSubmit={submitForm}
        >
          {({ values, errors, touched, setFieldValue }) => (
            <Form className=" apply-job-modal" >
              <div className="apply-job-modal-heading" style={headingStyles}>
                <Typography variant="h6" >
                  Fill your details
                </Typography>

                <Tooltip title="Close" className="close-icon">
                  <CloseIcon fontSize="medium" color="disabled" onClick={() => setOpenJobApplyModal(false)} />
                </Tooltip>
              </div>
              <Grid container >
                <Grid item xs={12}>
                  <PostJobFormLabel LableFor="name" LableText={t('YOUR_NAME')} />
                  <Field
                    error={errors.job_description && touched.job_description}
                    as={TextField}
                    id="name"
                    placeholder={t('YOUR_NAME')} type="text"
                    name="name" fullWidth
                    multiline
                    sx={{ ...CheckBoxStyles, background: "#FCF9F5" }} />
                  {errors.name && touched.name && <Error text={errors.name} />}
                </Grid>
              </Grid>

              <Grid container  >
                <Grid item xs={12}>
                  <PostJobFormLabel LableFor="age" LableText={t('YOUR_AGE')} mandatory={true} />
                  <FormGroup >
                    <RadioGroup name="age" sx={{ display: "flex", flexDirection: "row", gap: "12px", justifyContent: "space-between" }}
                      onChange={(event) => {
                        setFieldValue("age", event.target.value)
                      }}>
                      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {ageData.map((item, index) =>
                          <Grid key={index} item xs={2} sm={4} md={4} >
                            <FormControlLabel
                              sx={StyledFormControlLabel}
                              value={item.value}
                              control={<Radio sx={CheckBoxStyles} />}
                              label={item.label}
                              labelPlacement="start" />
                          </Grid>
                        )}
                      </Grid>
                    </RadioGroup>
                  </FormGroup>
                  {errors.age && touched.age && <Error text={errors.age} />}
                </Grid>
              </Grid>

              <Grid container  >
                <Grid item xs={12}>
                  <PostJobFormLabel LableFor="gender" LableText={t('YOUR_GENDER')} mandatory={true} />
                  <FormGroup >
                    <RadioGroup name="gender" sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}
                      onChange={(event) => {
                        setFieldValue("gender", event.target.value)
                      }}>
                      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={2} sm={4} md={4} >
                          <FormControlLabel
                            sx={StyledFormControlLabel}
                            value="male"
                            control={<Radio sx={CheckBoxStyles} />}
                            label="Male"
                            labelPlacement="start" />
                        </Grid>
                        <Grid item xs={2} sm={4} md={4} >
                          <FormControlLabel
                            sx={StyledFormControlLabel}
                            value="female"
                            control={<Radio sx={CheckBoxStyles} />}
                            label="Female"
                            labelPlacement="start" />
                        </Grid>
                        <Grid item xs={2} sm={4} md={4} >
                          <FormControlLabel
                            sx={StyledFormControlLabel}
                            value="any"
                            control={<Radio sx={CheckBoxStyles} />}
                            label="Any"
                            labelPlacement="start" />
                        </Grid>
                      </Grid>
                    </RadioGroup>
                  </FormGroup>
                  {errors.gender && touched.gender && <Error text={errors.gender} />}
                </Grid>
              </Grid>

              <Grid container  >
                <Grid item xs={12}>
                  <PostJobFormLabel LableFor="qualification" LableText={t('YOUR_QUALIFICATION')} mandatory={true} />
                  <FormGroup >
                    <RadioGroup name="qualification" sx={{ display: "flex", flexDirection: "row", gap: "12px", justifyContent: "space-between" }}
                      onChange={(event) => {
                        setFieldValue("qualification", event.target.value)
                      }}>
                      <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {qualificationData.map((item, index) =>
                          <Grid key={index} item xs={2} sm={4} md={4} >
                            <FormControlLabel
                              sx={StyledFormControlLabel}
                              value={item.value}
                              control={<Radio sx={CheckBoxStyles} />}
                              label={item.label}
                              labelPlacement="start" />
                          </Grid>
                        )}
                      </Grid>
                    </RadioGroup>
                  </FormGroup>
                  {errors.qualification && touched.qualification && <Error text={errors.qualification} />}
                </Grid>
              </Grid>

              <Grid container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ marginTop: "2px" }}
                direction="row"
                justifyContent="flex-end"
                alignItems="right">
                <Grid item md={3} xs={6}>
                  <Button variant="contained"
                    onClick={() => setOpenJobApplyModal(false)}
                    type="button"
                    sx={{
                      width: "100%",
                      background: "#FCF9F5",
                      borderRadius: "5px",
                      color: "#000000",
                      textTransform: "capitalize",
                      margin: "12px auto",
                      fontSize: "1rem",
                      padding: "8px !important",
                      "&:hover": {
                        background: "#FCF9F5",
                        color: "#000000",
                      }
                    }
                    }>Cancel</Button >
                </Grid>
                <Grid item md={3} xs={6}>
                  <Button variant="contained"
                    type="submit"
                    sx={{
                      width: "100%",
                      background: "#FF671F",
                      borderRadius: "5px",
                      textTransform: "capitalize",
                      margin: "12px auto",
                      fontSize: "1rem",
                      padding: "8px !important",
                      "&:hover": {
                        background: "#FF671F",
                      }
                    }
                    }>Submit</Button >
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
    </Modal>
  );
};

export default JobApplyForm;






