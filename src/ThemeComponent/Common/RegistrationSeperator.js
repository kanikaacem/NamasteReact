import { Box } from "@mui/material";
const RegistrationSeperator = () => {
    return (<>
        <Box sx={{
            marginTop: "200px",
            width: "200px",
            height: "200px",
            display: "flex",
            justifyContent: "center"
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                colro: "#d3d7da"
            }}>
                <Box sx={{
                    borderLeft: "1px solid #445578",
                    flexGrow: "1",
                    width: "1px"
                }}></Box>
                <Box> OR </Box>
                <Box sx={{
                    borderLeft: "1px solid #445578",
                    flexGrow: "1",
                    width: "1px"
                }}></Box>
            </Box>
        </Box>
    </>)
}

export default RegistrationSeperator;