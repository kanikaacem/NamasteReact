import {
    Box, Typography
} from '@mui/material';

const CompanyLogo = ({ color }) => {
    return (<>
        <Box sx={{ cursor: "pointer" }}
            onClick={() => window.location.href = window.location.origin}>
            <Typography component="span"
                sx={{
                    fontSize: "24px",
                    fontWeight: "600",
                    color: color ? color : "#ffffff",
                    fontFamily: "Work Sans, sans-serif"
                }}>
                Job
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