import { Typography } from "@mui/material";
const Heading = ({ headingText, color }) => {
    return (<>
        <Typography variant="h1" component="h2" sx={{
            fontSize: "1.25rem",
            fontFamily: "'Manrope',' sans- serif'",
            fontWeight: "700",
            color: "#000000"
        }}>
            {headingText}
        </Typography >

    </>)
}

export default Heading;