import { Button, styled } from "@mui/material";

const ButtonType1 = ({ ButtonText }) => {
    const ThemeButtontype1 = styled(Button)({
        textTransform: "capitalize",
        background: "#2B1E44",
        // background: "#336fd4",
        borderRadius: "10px",
        padding: "10px 80px",
        "&:hover": {
            background: "#2B1E44"
        }
    })
    return (<>
        <ThemeButtontype1 variant="contained">{ButtonText} </ThemeButtontype1>

    </>)
}

export default ButtonType1;