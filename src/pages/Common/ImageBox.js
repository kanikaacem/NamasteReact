import { Box } from "@mui/material"
const ImageBox = ({ imgeUrl, imgeText }) => {
    return (<>
        <Box sx={{
            width: "500px", height: "500px",
            display: { "xs": "none", "sm": "none", "md": "none", "lg": "block", "xl": "block" },
            margin: "0 auto"
        }}>
            <img src={window.location.origin + imgeUrl} alt={imgeText} width="100%" height="100%" />
        </Box>
    </>)
}

export default ImageBox;