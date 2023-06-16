import React from 'react';
import { Button } from "@mui/material";
import { ApplyButtonStyles } from "../../utils/Styles";
import { useNavigate } from "react-router-dom";
import JobApplyWeb from "../Common/JobApplyWeb";

const ApplyForJobWebButton = ({ jobId, buttonStyle }) => {
    const [openJobApplyModal, setOpenJobApplyModal] = React.useState(false);
    const navigate = useNavigate();
    const ApplyForJob = (event) => {
        if (localStorage.getItem("auth_token") === null)
            navigate("/candidate-login");
        //   window.location.href = "https://api.whatsapp.com/send?phone=+14155238886&text=Join%20habit-familiar&jobid=" + jobId
        else
        setOpenJobApplyModal(true)

    }
    return (
        <>
            {openJobApplyModal && <JobApplyWeb openJobApplyModal={openJobApplyModal} setOpenJobApplyModal={setOpenJobApplyModal} />}
            <Button variant={buttonStyle ? "contained" : "outlined"}
                onClick={ApplyForJob} sx={{
                    ...ApplyButtonStyles,
                    background: buttonStyle === "contained" && "#FF671F",
                    color: buttonStyle !== "contained" && "#FF671F",
                    "&:hover": {
                        background: buttonStyle === "contained" && "#FF671F",
                        color: buttonStyle !== "contained" && "#FF671F"

                    }
                }}>Apply via Web</Button>
        </>)
}
export default ApplyForJobWebButton;