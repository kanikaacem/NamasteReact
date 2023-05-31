import { Button } from "@mui/material";
import { ApplyButtonStyles } from "../../utils/Styles";
import { useNavigate } from "react-router-dom";

const ApplyForJobButton = ({ jobId }) => {
  const navigate = useNavigate();
  const ApplyForJob = (event) => {
    if (localStorage.getItem("token") !== null)
      window.location.href = "https://api.whatsapp.com/send?phone=+14155238886&text=Join%20habit-familiar&jobid=" + jobId
    else
      navigate("/candidate-login");

  }
  return (<Button variant="outlined"
    onClick={ApplyForJob} sx={ApplyButtonStyles}>Apply via Whatsapp</Button>)
}
export default ApplyForJobButton;