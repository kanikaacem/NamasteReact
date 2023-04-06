import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
const FormMenu = ({ data }) => {
    const { step } = useParams();
    return (<>
        <Stack direction="row" gap={1} alignItems="center" justifyContent="center" sx={{ opacity: step == data.id - 1 ? "1" : "0.5" }}>
            <Box sx={{
                width: { "xs": "15px", "sm": "15px", "md": "27px", "lg": "27px", "xl": "27px" },
                height: { "xs": "15px", "sm": "15px", "md": "27px", "lg": "27px", "xl": "27px" },
                background: "#FC9A7E",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: { "xs": "12px", "sm": "12px", "md": "19px", "lg": "19px", "xl": "19px" }

            }}>{data.id}</Box>
            <Typography component="box" sx={{
                fontSize: { "xs": "12px", "sm": "12px", "md": "16px", "lg": "16px", "xl": "16px" },
                fontFamily: "Montserrat",
                fontWeight: "600",
                color: "#4E3A67",
                display: "block",
                width: "max-content"

            }}>
                {data.text}
            </Typography>
            <Box>
                <img width="10px" height="10px" src={window.location.origin + "/assets/FormRightArrow.png"} alt="right_arrow" />
            </Box>
        </Stack>

    </>)
}

export default FormMenu;