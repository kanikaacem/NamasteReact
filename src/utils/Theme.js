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

export const ThemeButtonType2 = styled(Button)({
    width: "100%",
    textTransform: "capitalize",
    background: "#FC9A7E",
    fontWeight: "700 !important ",
    borderRadius: "0px",
    padding: "10px 80px",
    color: "#000000",
    fontSize: "24px",
    borderRadius: "7px",
    fontFamily: "Work Sans, sans-serif",
    "&:hover": {
        background: "#FC9A7E"
    }
})

export const ThemeButtonType3 = styled(Button)({
    width: "100%",
    textTransform: "capitalize",
    background: "none",
    fontWeight: "700 !important ",
    padding: "10px 80px",
    border: "1px solid #D2D2D2",
    color: "#000000",
    fontSize: "24px",
    borderRadius: "7px",
    fontFamily: "Work Sans, sans-serif",
    "&:hover": {
        background: "none"
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

export const ThemeFInputDiv = styled(Stack)({
    flexDirection: "column",
    gap: "20px"
})

export const SocialBox = styled(Box)({
    width: "61px",
    height: "59px",
    border: " 2px solid #E6E6E6",
    borderRadius: "37px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
})

export const NextButton = styled(Button)({
    height: "65px",
    width: "64px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#FC9A7E",
    "&:hover": {
        height: "65px",
        width: "64px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#FC9A7E"
    }

})


export const FooterBox = styled(Box)({
    fontSize: "20px",
    color: "#2B!E44",
    margin: "10px 0px",
    color: "#FFFFFF",
    fontWeight: '100',
    cursor: "pointer"
})