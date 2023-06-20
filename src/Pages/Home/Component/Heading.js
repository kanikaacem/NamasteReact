import { Typography } from "@mui/material";
const Heading = ({ headingText, color }) => {
    return (<>
        <Typography variant="h1" component="h2" sx={{
            fontSize: "2rem",
            fontFamily: "'Manrope',' sans- serif'",
            fontWeight: "500",
            color: "#000000",
            textAlign: "center",
            lineHeight: "1.5"
        }}>
            {headingText}
        </Typography >

    </>)
}

export default Heading;