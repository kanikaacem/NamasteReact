import { Typography, Stack, Backdrop, useMediaQuery } from "@mui/material";

const HomePageLiteMessage = ({ value, setValue, message }) => {
    const isDesktop = useMediaQuery((theme) => theme.breakpoints.up("md"));

    return (
        <Backdrop
            sx={{ alignItems: isDesktop ? "center" : "flex-end" }}
            open={value}
            onClick={() => setValue(!value)}
        >
            <Stack sx={{
                height: "50vh",
                boxSizing: "border-box",
                padding: "50px",
                background: "#ffffff",
                borderTopLeftRadius: "36px",
                borderTopRightRadius: "36px",
                borderBottomLeftRadius: isDesktop && "36px",
                borderBottomRightRadius: isDesktop && "36px"
            }}
                alignItems="center" justifyContent="center">
                <Typography variant="h1" component="h2" sx={{
                    fontSize: "1.6rem",
                    fontWeight: "700",
                }}>
                    Thank you
                </Typography >
                {message && <Typography variant="h1" component="span" sx={{
                    fontSize: "1.25rem",
                    textAlign: "center",
                    marginTop: "10px"
                }}>
                    {message}
                </Typography >}

                <Typography variant="h1" component="span" sx={{
                    fontSize: "1.25rem",
                    textAlign: "center",
                    marginTop: "10px"
                }}>
                    Hum aapse jald hi sampark karenge.
                </Typography >
            </Stack>
        </Backdrop >
    )
}
export default HomePageLiteMessage;