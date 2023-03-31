import { Box, Stack, Typography, Modal } from "@mui/material";
import { ThemeButtonType2 } from "../../utils/Theme";
import { useNavigate } from "react-router-dom";
const ThemeMessage = ({ open, setOpen, message, type }) => {
    const navigate = useNavigate();

    const handleClose = () => {
        if (window.location.pathname === '/forgot-password/employer')
            window.location.href = window.location.origin + "/employer-login";
        else if (window.location.pathname === "/forgot-password/candidate")
            window.location.href = window.location.origin + "/candidate-login";
        else if (setOpen === "JobPosted")
            navigate("/", { state: { jobPosted: false } });
        else
            setOpen(false)
    }
    return (<>
        <div className="ThemeMessage" >
            <Modal
                sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Stack
                    direction="column"
                    gap={3}
                    alignItems="center"
                    justifyContent="center"
                    sx={{
                        boxSizing: "border-box",
                        width: "865px",
                        height: "500px",
                        background: "#FFFFFF",
                        border: "1px solid #EDEDED",
                        borderRadius: "19px",
                        padding: "30px 50px",
                        outline: "none"
                    }}>
                    <Box sx={{ height: "200px", width: "200px" }} >
                        {
                            type == "success" && <img width="100%" height="100%" src={window.location.origin + "/assets/Success.gif"} alt="success" />
                        }
                        {
                            type == "error" && <img height="100%" src={window.location.origin + "/assets/Error.gif"} alt="error" />
                        }
                    </Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {message}
                    </Typography>
                    <ThemeButtonType2
                        onClick={handleClose}
                        variant="contained" type="button" sx={{ width: "fit-content", fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>OK</ThemeButtonType2>
                </Stack>
            </Modal>
        </div></>)
}
export default ThemeMessage;