import {  Stack, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const PageTopSection = (props) => {
    const {TopSectionName} = props;
    const goBack = () => {
        window.history.back();
    }
    return (
        <Stack className="PageTopSection" direction="row" gap={2} sx={{
            padding: { "xs": "20px", "sm": "20px", "md": "20px 100px", "lg": "20px 100px", "xl": "20px 100px" },
            background: "#ffffff",
            webkitBoxShadow: "0px 6px 5px -3px rgba(208,208,208,1)",
            mozBoxShadow: "0px 6px 5px -3px rgba(208,208,208,1)",
            boxShadow: "0px 6px 5px -3px rgba(208,208,208,1)",
            marginBottom:"4px",
            alignItems:"center"
        }}>
            <ArrowBackIcon sx={{ cursor: "pointer" }} onClick={goBack} />
           {TopSectionName && <Typography sx={{
            fontFamily:"Manrope",
            fontWeight:"700",
            fontSize:"1rem"          
           }}>{TopSectionName}</Typography>} 
        </Stack>
    )
}
export default PageTopSection;