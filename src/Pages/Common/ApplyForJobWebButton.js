import React from 'react';
import { Button } from "@mui/material";
import { ApplyButtonStyles } from "../../utils/Styles";
import { useNavigate } from "react-router-dom";
import JobApplyWeb from "../Common/JobApplyWeb";
import { postRequest } from "../../utils/ApiRequests";
import HomePageLiteMessage from "../HomePageLiteSection/HomePageLiteMessage";
import { useTranslation } from 'react-i18next';
const ApplyForJobWebButton = ({ jobId, buttonStyle }) => {
    const [openJobApplyModal, setOpenJobApplyModal] = React.useState(false);
    const [formSubmitted, setFormSubmitted] = React.useState(false);
    const [message, setMessage] = React.useState(false);
    const navigate = useNavigate();
    const { t } = useTranslation();
    const ApplyForJob = async (event) => {
        if (localStorage.getItem("auth_token") === null)
            navigate("/candidate-login");
        //   window.location.href = "https://api.whatsapp.com/send?phone=+14155238886&text=Join%20habit-familiar&jobid=" + jobId
        else {
            // setOpenJobApplyModal(true)
            var applyViaWebForm = {
                jobid: jobId
            };

            try {
                const api_url = process.env.REACT_APP_CANDIDATE_APPLY_JOB
                const response = await postRequest(api_url, applyViaWebForm);
                if (response.status === '1') {
                    setMessage("Your job is successfully submitted.")
                    setFormSubmitted(true)
                } else if (response.status === '2') {
                    setMessage("You have already applied this job.")
                    setFormSubmitted(true)
                }
            } catch (error) {
                // Handle the error

            }
        }
    }

    return (
        <>
            {openJobApplyModal && <JobApplyWeb openJobApplyModal={openJobApplyModal} setOpenJobApplyModal={setOpenJobApplyModal} />}
            <Button variant={buttonStyle ? "contained" : "outlined"}
                onClick={ApplyForJob} sx={{
                    ...ApplyButtonStyles,
                    width: "270px",
                    background: buttonStyle === "contained" && "#FF671F",
                    color: buttonStyle !== "contained" && "#FF671F",
                    "&:hover": {
                        background: buttonStyle === "contained" && "#FF671F",
                        color: buttonStyle !== "contained" && "#FF671F"

                    }
                }}>{t('APPLY_VIA_WEB')}</Button>
            <HomePageLiteMessage value={formSubmitted} setValue={setFormSubmitted} message={message} />
        </>)
}
export default ApplyForJobWebButton;