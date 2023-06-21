import { Button } from "@mui/material";
import { ApplyButtonStyles } from "../../utils/Styles";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
const ApplyForJobButton = ({ jobId, buttonStyle }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const ApplyForJob = (event) => {
    if (localStorage.getItem("token") !== null)
      window.location.href = "https://api.whatsapp.com/send?phone=+14155238886&text=Join%20habit-familiar&jobid=" + jobId
    else
      navigate("/candidate-login");

  }
  const mobileScreen = useSelector(state => state.screenType) === "mobile";

  return (
    <Button variant={buttonStyle ? "contained" : "outlined"}
      disabled
      onClick={ApplyForJob} sx={{
        ...ApplyButtonStyles,
        position: "relative",
        overflow: "hidden",
        width: "270px",
        background: buttonStyle === "contained" && "#FF671F",
        color: buttonStyle !== "contained" && "#FF671F",
        "&:hover": {
          background: buttonStyle === "contained" && "#FF671F",
          color: buttonStyle !== "contained" && "#FF671F"

        }
      }}>
      {t('APPLY_VIA_WHATSAPP')}
      <span style={{
        position: "absolute",
        background: "rgb(3 91 48)",
        color: "#ffffff",
        clipPath: "inset(0 - 100 %)",
        inset: "0 0 auto auto",
        transformOrigin: "0 0",
        transform: "translate(42.7%) rotate(47deg)",
        fontSize: "0.5rem",
        width: "78px",
        textAlign: 'center',
        boxSizing: "border-box",
        padding: "0px 10px",
        top: "-16px",
        lineHeight: "1.2"
      }}>
        {'Coming soon !'}
      </span >
    </Button >
  )
}
export default ApplyForJobButton;