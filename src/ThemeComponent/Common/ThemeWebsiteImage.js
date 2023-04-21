import { Box } from "@mui/material";
const ThemeWebsiteImage = ({ imageUrl }) => {
    return (
        <Box sx={{
            width: "700px",
            display: { "xs": "none", "sm": "none", "md": "none", "lg": "block", "xl": "block" },
            margin: "0 auto"
        }}>
            <img src={window.location.origin + imageUrl} width="100%" height="100%"></img>
        </Box>
    )
}

export default ThemeWebsiteImage;