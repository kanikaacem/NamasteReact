import { Button, Stack, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

//Theme Button
export const ThemeButtontype1 = styled(Button)({
    textTransform: "capitalize",
    background: "#2B1E44",
    borderRadius: "10px",
    padding: "10px 80px",
    color: "#FFFFFF",
    "&:hover": {
        background: "#2B1E44"
    }
})

export const CustomizeStackCanProfile = styled(Stack)({
    gap: "8px",
    fontSize: "16px",
    padding: "5px 0px",
    flexDirection: "row",
    textTransform: "capitalize",
    width: "100%"
})

export const CustomizeBoxProfileHeading = styled(Box)({
    fontWeight: "600",
    color: "#445578",
    width: "180px"
})

export const WhiteBox = styled(Stack)({
    background: "#FFFFFF",
    padding: "20px",
    borderRadius: "10px",
    flexDirection: "column",
    gap: "10px"
})
