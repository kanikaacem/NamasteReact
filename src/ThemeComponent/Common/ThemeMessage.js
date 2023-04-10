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
            navigate("/employer-dashboard", { state: { jobPosted: false } });
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
                        width: { "xs": "300px", "sm": "400px", "md": "865px", "lg": "865px", "xl": "865px" },
                        height: { "xs": "300px", "sm": "500px", "md": "500px", "lg": "500px", "xl": "500px" },
                        background: "#FFFFFF",
                        border: "1px solid #EDEDED",
                        borderRadius: "19px",
                        padding: { "xs": "15px", "sm": "15px", "md": "30px 50px", "lg": "30px 50px", "xl": "30px 50px" },
                        outline: "none"
                    }}>
                    <Box sx={{
                        height: { "xs": "100px", "sm": "100px", "md": "200px", "lg": "200px", "xl": "200px" },
                        width: { "xs": "100px", "sm": "100px", "md": "200px", "lg": "200px", "xl": "200px" }
                    }} >
                        {
                            type == "success" && <img width="100%" height="100%" src={window.location.origin + "/assets/Success.gif"} alt="success" />
                        }
                        {
                            type == "error" && <img height="100%" src={window.location.origin + "/assets/Error.gif"} alt="error" />
                        }
                    </Box>
                    <Typography id="modal-modal-title" variant="h6" component="span"
                        sx={{
                            fontSize: { "xs": "12px", "sm": "14px", "md": "20px", "xl": "20px", "lg": "20px" }
                        }}>
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