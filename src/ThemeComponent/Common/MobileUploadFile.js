import { Box, Typography, Stack } from "@mui/material";
const MobileUploadFile = ({ onclickFunction, id }) => {
    return (<>
        <Box sx={{
            display: { "xs": "block", "sm": "block", "md": "block", "lg": "none", "xl": "none" },
            maxWidth: "400px",
            height: "150px",
            border: "1px  dotted #FC9A7E",
            borderRadius: "11px"
        }} onClick={onclickFunction} >
            <Box sx={{
                width: "80px"
            }}>
                <img id={id} width="100%" />
            </Box>
            <Stack direction="column" sx={{
                height: "inherit",
                alignItems: "center",
                justifyContent: "center"
            }}>

                <Box sx={{
                    width: "50px",
                    height: "50px"
                }}>
                    <img src={window.location.origin + "/assets/InsertPictureMobile.png"} alt="Upload Image" width="100%" height="100%" />

                </Box>
                <Typography component="box" sx={{
                    fontSize: { "xs": "0.7rem", "sm": ".7rem", "md": ".7rem", "xl": "2.5rem", "lg": "2.5rem" },
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    color: "#FC9A7E",
                    display: "block",
                }}>
                    Upload Image
                </Typography>
            </Stack>

        </Box >
    </>)
}

export default MobileUploadFile;