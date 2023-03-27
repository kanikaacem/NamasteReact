import {
    Box, Typography
} from '@mui/material';

const CompanyLogo = ({ color }) => {
    const FunLogoClick = () => {
        if (window.location.pathname === "/employer-dashboard")
            window.location.href = window.location.origin + "/employer-dashboard"
        else
            window.location.href = window.location.origin
    }
    return (<>
        <Box sx={{ cursor: "pointer" }}
            onClick={FunLogoClick}
        >
            <Typography component="span"
                sx={{
                    fontSize: "24px",
                    fontWeight: "600",
                    color: color ? color : "#ffffff",
                    fontFamily: "Work Sans, sans-serif"
                }}>
                Jobs
            </Typography>
            <Typography component="span"
                sx={{
                    fontSize: "24px",
                    color: color ? color : "#ffffff",
                    fontFamily: "Work Sans, sans-serif"
                }}>
                Yahan
            </Typography>
        </Box>
    </>)
}

export default CompanyLogo;