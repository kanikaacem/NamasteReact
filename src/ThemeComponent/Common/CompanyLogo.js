import {
    Box, Typography
} from '@mui/material';

import { useNavigate } from 'react-router-dom';
const CompanyLogo = ({ color }) => {
    const navigate = useNavigate();
    const FunLogoClick = () => {
        if (window.location.pathname.includes("/employer-dashboard"))
            navigate("/employer-dashboard");
        else
            navigate("/");
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