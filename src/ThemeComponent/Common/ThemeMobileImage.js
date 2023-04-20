import { Box } from "@mui/material";
const ThemeMobileImage = ({ imageUrl }) => {
    return (
        <Box sx={{
            width: { "xs": "400px", "sm": "600px", "md": "900px" },
            height: { "xs": "400px", "sm": "600px", "md": "900px" },

            display: { "xs": "block", "sm": "block", "md": "block", "lg": "none", "xl": "none" }
        }}>
            <img src={window.location.origin + imageUrl} width="100%" height="100%"></img>
        </Box>
    )
}

export default ThemeMobileImage;