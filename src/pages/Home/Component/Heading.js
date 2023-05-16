import { Typography } from "@mui/material";
const Heading = ({ headingText, color }) => {
    return (<>
        <Typography variant="h1" component="h2" sx={{
            fontSize: { "xs": "1.25rem", "sm": "1.25rem", "md": "2rem", "xl": "2rem", "lg": "2rem" },
            fontFamily: "'Manrope',' sans- serif'",
            fontWeight: "700",
            color: "#000000"
        }}>
            {headingText}
        </Typography >

    </>)
}

export default Heading;