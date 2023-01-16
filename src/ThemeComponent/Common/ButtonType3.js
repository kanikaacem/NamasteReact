import { Button, Box, styled } from "@mui/material";

const ButtonType3 = ({ ButtonText, ClickEvent, imageURL }) => {
    const ThemeButtontype3 = styled(Button)({
        textTransform: "capitalize",
        background: "#2B1E44",
        borderRadius: "7px",
        padding: "5px",
        fontSize: "24px",
        margin: "10px 0px",
        height: "59px",
        width: "323px",

        "&:hover": {
            background: "#2B1E44"
        }
    })
    return (<>
        <Box>
            <ThemeButtontype3 variant="contained" type="button" onClick={ClickEvent}><img
                style={{ marginRight: "20px" }} src={window.location.origin + imageURL} alt="uploadData" ></img>{ButtonText} </ThemeButtontype3>
        </Box>


    </>)
}

export default ButtonType3;