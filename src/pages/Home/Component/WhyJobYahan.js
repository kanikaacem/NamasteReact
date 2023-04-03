import { Box, Stack, Typography } from "@mui/material";

const WhyJobYahan = () => {
    return (<>
        <Stack
            direction="row" sx={{
                background: "#FAFAFA",
                position: "relative",
                gap: "35px",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap-reverse"
            }}>
            <Box sx={{
                margin: {
                    "lg": "100px 0px  100px 100px",
                    "md": "100px 0px  100px 0px",
                    "xs": "-50px"
                },
                width: { "lg": `calc(100vw - 55%)`, "md": "100%", "xs": "95%" },
                background: "#FFFFFF",
                color: "#445578",
                padding: { "lg": "100px", "md": "100px", "xs": "30px" },
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
                        fontSize: { lg: "90px", md: "50px", xs: "24px" },
                        color: "#2B1E44",
                        fontWeight: "600",

                    }}>
                    Explore
                </Typography>
                <Typography component="span"
                    sx={{
                        fontSize: { lg: "90px", md: "50px", xs: "24px" },
                        color: "#2B1E44",
                        fontWeight: "600",

                    }}>
                    Jobs
                    <Typography component="span"
                        sx={{
                            fontSize: { lg: "90px", md: "50px", xs: "24px" },
                            color: "#2B1E44"
                        }}>
                        Yahan
                    </Typography>

                </Typography>

                <Box sx={{
                    lineHeight: {
                        "xs": "1.5", "sm": "2", "md": "2", "lg": "2", "xl": "2"
                    }, color: "#3A2D49",
                    margin: { "xs": "10px 0px", "sm": "0px", "md": "0px", "lg": "0px", "xl": "0px" },
                    fontWeight: "300"
                }}>
                    JobsYahan is a job portal every employer and employee would like.
                    While employers get suitable candidates for jobs, employees get
                    suitable jobs through the portal. You can even get delivery jobs on
                    JobsYahan, which may not be the case on other job portals.
                    Means,<b> JobsYahan is Sabhi Ke Liye.</b> So, try us now!
                </Box>
            </Box>
            <Stack sx={{
                width: { "lg": "44%", "md": "100%", "xs": "100%" },
                alignItems: "flex-end",
            }}>
                <Box sx={{
                    width: { "xs": "300px", "sm": "600px", "md": "600px", "lg": "600px", "xl": "600px" },
                    margin: { "xs": "0 auto", "sm": "0px", "md": "0px", "lg": "0px", "xl": "0px" }
                }}>
                    <img src={window.location.origin + "/assets/g4.png"} alt="g4" width="100%" height="100%" />
                </Box>
            </Stack>

        </Stack>
    </>
    )
}

export default WhyJobYahan;