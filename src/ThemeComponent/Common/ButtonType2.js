import { Button, Box } from "@mui/material";

const ButtonType2 = ({ ButtonText, ClickEvent }) => {
    return (<>
        <Box>
            <Button sx={{
                textTransform: "capitalize",
                background: "#ff7555",
                borderRadius: "10px",
                padding: { "xs": "10px", "sm": "10px", "md": "10px 50px", "xl": "10px 50px", "lg": "10px 50px" },
                margin: "10px 0px",
                "&:hover": {
                    background: "#ff7555"
                }
            }} variant="contained" type="button" onClick={ClickEvent}>{ButtonText} </Button>
        </Box>


    </>)
}

export default ButtonType2;