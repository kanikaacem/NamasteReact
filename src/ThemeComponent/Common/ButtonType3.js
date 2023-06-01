import { Button, Box } from "@mui/material";

const ButtonType3 = ({ ButtonText, ClickEvent, imageURL }) => {

    return (<>
        <Box>
            <Button sx={{
                textTransform: "capitalize",
                background: "#2B1E44",
                borderRadius: "7px",
                padding: "5px",
                fontSize: "24px",
                margin: "10px 0px",
                height: { "xs": "40px", "sm": "40px", "md": "59px", "lg": "59px", "xl": "59px" },
                width: "323px",

                "&:hover": {
                    background: "#2B1E44"
                }
            }} variant="contained" type="button" onClick={ClickEvent}><img
                style={{ marginRight: "20px" }} src={window.location.origin + imageURL} alt="uploadData" ></img>{ButtonText} </Button>
        </Box>


    </>)
}

export default ButtonType3;