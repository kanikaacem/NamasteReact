import { Box, Typography, Stack, Button } from "@mui/material";
import { NavButton2 } from "../../utils/Theme";
const HeaderSec = ({ color, background, border, buttonText }) => {
    return (<>
        <Stack direction="row" justifyContent="space-between">
            <Box>
                <Typography component="span"
                    sx={{
                        fontSize: "24px",
                        fontWeight: "600",
                        color: "#ffffff",
                        fontFamily: "Work Sans, sans-serif"
                    }}>
                    Job
                </Typography>
                <Typography component="span"
                    sx={{
                        fontSize: "24px",
                        color: "#ffffff",
                        fontFamily: "Work Sans, sans-serif"
                    }}>
                    Yahan
                </Typography>


            </Box>
            <Stack direction="row" gap={2}>
                <Button type="button" variant="outlined"
                    sx={{
                        height: "59px",
                        width: "247px",
                        borderRadius: "44px",
                        fontSize: "24px",
                        border: { border },
                        color: { color },
                        textTransform: "capitalize",
                        fontWeight: "600",
                        fontFamily: "Work Sans, sans-serif !important",
                        background: { background },
                        "&:hover": {
                            border: { border },
                            color: { color },
                            background: { background }

                        }
                    }}>
                    Contact us
                </Button>
                <Button type="button" variant="filled"
                    sx={{
                        background: "#FC9A7E",
                        border: "none",
                        color: "#2B1E44",
                        textTransform: "capitalize",
                        height: "59px",
                        width: "283px",
                        borderRadius: "44px",
                        fontSize: "24px",
                        fontWeight: "600",
                        fontFamily: "Work Sans, sans-serif !important",
                        "&:hover": {
                            background: "#FC9A7E"
                        }
                    }}>
                    {buttonText ? buttonText : "About Us"}
                </Button>
            </Stack>
        </Stack>
    </>)
}

export default HeaderSec;