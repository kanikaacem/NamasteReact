import { Box } from "@mui/material";
const ThemeWebsiteImage = ({ imageUrl, imageWidth }) => {
    return (
        <Box sx={{
            width: imageWidth ? imageWidth : "800px",
            display: { "xs": "none", "sm": "none", "md": "none", "lg": "block", "xl": "block" },
            margin: "0 auto"
        }}>
            <img src={window.location.origin + imageUrl} width="100%" height="100%" alt="image"></img>
        </Box>
    )
}

export default ThemeWebsiteImage;