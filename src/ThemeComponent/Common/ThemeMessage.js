import { Box, Stack, Typography, Modal } from "@mui/material";
import { ThemeButtonType2 } from "../../utils/Theme";
const ThemeMessage = ({ open, setOpen, message, type }) => {
    return (<>
        <div className="ThemeMessage" >
            <Modal
                sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
                open={open}
                // onClose={() => setOpen(false)}
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
                            type == "success" && <img width="100%" height="100%" src={window.location.origin + "/assets/Success.png"} alt="success" />
                        }
                    </Box>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {message}
                    </Typography>
                    <ThemeButtonType2
                        onClick={() => setOpen(false)}
                        variant="contained" type="button" sx={{ width: "fit-content", fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}>OK</ThemeButtonType2>
                </Stack>
            </Modal>
        </div></>)
}
export default ThemeMessage;