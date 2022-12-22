import { Button, Box, styled } from "@mui/material";

const ButtonType2 = ({ ButtonText, ClickEvent }) => {
    const ThemeButtontype2 = styled(Button)({
        textTransform: "capitalize",
        background: "#ff7555",
        borderRadius: "10px",
        padding: "10px 50px",
        margin: "10px 0px",
        "&:hover": {
            background: "#ff7555"
        }
    })
    return (<>
        <Box>
            <ThemeButtontype2 variant="contained" type="button" onClick={ClickEvent}>{ButtonText} </ThemeButtontype2>
        </Box>


    </>)
}

export default ButtonType2;