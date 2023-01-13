import { Box, Typography, Stack, Button } from "@mui/material";

const HeaderSec = () => {
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
                        border: "2px solid rgba(255, 255, 255, 0.25)",
                        color: "#FFFFFF",
                        textTransform: "capitalize",
                        fontWeight: "600",
                        background: "#432C60",
                        "&:hover": {
                            border: "2px solid rgba(255, 255, 255, 0.25)",
                            color: "#FFFFFF",
                            background: "#432C60"
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
                        "&:hover": {
                            background: "#FC9A7E"
                        }
                    }}>
                    About us
                </Button>
            </Stack>
        </Stack>
    </>)
}

export default HeaderSec;