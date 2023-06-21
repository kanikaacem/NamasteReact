import { Stack, Typography } from "@mui/material";

// import { goBack } from "../../utils/function";
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const HPLTopHeadingSection = ({ headingText }) => {
    return (
        <Stack className="PageTopSection" direction="row" gap={2} sx={{
            marginBottom: "15px",
            alignItems: "center"
        }}>

            {/* <ArrowBackIcon sx={{ cursor: "pointer" }} onClick={goBack} /> */}
            <Typography sx={{
                fontWeight: "600",
                fontSize: "1rem"
            }}>{headingText}</Typography>
        </Stack>
    )
}
export default HPLTopHeadingSection;