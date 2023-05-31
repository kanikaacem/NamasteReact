import { Box } from "@mui/material";
const ThemeMobileImage = ({ imageUrl }) => {
    return (
        <Box sx={{
            width: { "xs": "250px", "sm": "450px", "md": "500px" },
            // height: { "xs": "250px", "sm": "450px", "md": "500px" },
            display: { "xs": "block", "sm": "block", "md": "block", "lg": "none", "xl": "none" },
            margin: "0 auto"
        }}>
            <img src={window.location.origin + imageUrl} alt="MobileImage" width="100%" height="100%"></img>
        </Box>
    )
}

export default ThemeMobileImage;