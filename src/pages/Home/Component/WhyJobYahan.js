import { Box, Stack, Typography } from "@mui/material";

const WhyJobYahan = () => {
    return (<>
        <Stack
            direction="row" sx={{
                background: "#FAFAFA",
                // padding: "100px",
                position: "relative",
                gap: "35px",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center"
            }}>
            <Box sx={{
                margin: {
                    "lg": "100px 0px  100px 100px",
                    "md": "100px 0px  100px 0px",
                    "xs": "100px 0px  100px 0px"
                },
                width: { "lg": `calc(100vw - 52%)`, "md": "100%", "xs": "100%" },
                background: "#FFFFFF",
                color: "#445578",
                padding: "100px",
                borderRadius: "10px",
                fontsize: "25px",
                boxSizing: "border-box",
                maxWidth: "928px",
                border: " 1px solid #E7D3FF",
                borderradius: "23px"
            }}>
                <Typography component="span"
                    sx={{
                        display: "block",
                        fontSize: { lg: "96px", md: "50px", xs: "50px" },
                        color: "#2B1E44",
                        fontWeight: "600",

                    }}>
                    Explore
                </Typography>
                <Typography component="span"
                    sx={{
                        fontSize: { lg: "96px", md: "50px", xs: "50px" },
                        color: "#2B1E44",
                        fontWeight: "600",

                    }}>
                    Jobs
                    <Typography component="span"
                        sx={{
                            fontSize: { lg: "96px", md: "50px", xs: "50px" },
                            color: "#2B1E44"
                        }}>
                        Yahan
                    </Typography>

                </Typography>

                <Box sx={{ lineHeight: "2", color: "#3A2D49" }}>
                    JobsYahan is a job portal every employer and employee would like.
                    While employers get suitable candidates for jobs, employees get suitable
                    jobs through the portal. You can even get delivery jobs on JobsYahan, which may
                    not be the case on other job portals. Means, JobsYahan is Sabhi Ke Liye. So, try us now!
                </Box>
            </Box>
            <Stack sx={{
                width: { "lg": "44%", "md": "100%", "xs": "100%" },
                alignItems: "flex-end",
                // maxWidth: "726px",
                // position: "relative",
                // right: "0",
                // top: "120px"
                // margin: { "lg": "0", "md": "0 auto", "xs": "0 auto" },
                // top: "120px"
            }}>
                <Box sx={{
                    width: "600px"
                }}>
                    <img src={window.location.origin + "/assets/g4.png"} alt="g4" width="100%" height="100%" />
                </Box>
            </Stack>

        </Stack>
    </>
    )
}

export default WhyJobYahan;