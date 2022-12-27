import { Button, Box, styled } from "@mui/material";

const ButtonType3 = ({ ButtonText, ClickEvent }) => {
    const ThemeButtontype3 = styled(Button)({
        textTransform: "capitalize",
        background: "#2B1E44",
        borderRadius: "10px",
        padding: "5px",
        fontSize: "12px",
        margin: "10px 0px",
        "&:hover": {
            background: "#2B1E44"
        }
    })
    return (<>
        <Box>
            <ThemeButtontype3 variant="contained" type="button" onClick={ClickEvent}>{ButtonText} </ThemeButtontype3>
        </Box>


    </>)
}

export default ButtonType3;