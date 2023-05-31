import { Typography } from "@mui/material";

const Error = ({ text }) => {
    return (<>
        <Typography className="error"
            component="span"
            sx={{
                color: "#c72929",
                fontSize: { "xs": "13px ", "sm": "13px", "md": "14px", "lg": "14px", "xl": "14px" },
                fontWeight: "500",
                display: "block",
                textTransform: "capitalize"
            }}> {text}</Typography></>)
}

export default Error;