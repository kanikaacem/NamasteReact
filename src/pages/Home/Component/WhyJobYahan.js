import { Box, Container, Stack, Typography } from "@mui/material";

const WhyJobYahan = () => {
    return (<>
        <Box sx={{
            background: "#2B1E44"
        }}>
            <Container sx={{ padding: "20px " }} >
                <Stack direction={{ lg: 'row', md: 'column', xs: 'column' }} gap={10} sx={{ margin: "20px 0px" }}>
                    <Box sx={{ width: { lg: "50%", md: "90%", xs: "90%" } }}>
                        <img src="./assets/analytics.png" alt="explore" width="100%" height="100%" />
                    </Box>
                    <Box sx={{
                        width: { lg: "50%", md: "90%", xs: "90%" },
                        background: "#FFFFFF",
                        color: "#445578",
                        padding: { lg: "100px 50px", md: "20px", xs: "20px" },
                        borderRadius: "10px",
                        fontsize: "25px"
                    }}>
                        <Typography component="span"
                            sx={{
                                display: "block",
                                fontSize: "50px",
                                color: "#445578",
                                fontWeight: "600",
                                margin: "10px 0px",
                            }}>
                            Explore JobYahan
                        </Typography>
                        <Box sx={{ lineHeight: "2" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book.
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                            has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book.
                        </Box>
                    </Box>
                </Stack>

            </Container>
        </Box>
    </>
    )
}

export default WhyJobYahan;