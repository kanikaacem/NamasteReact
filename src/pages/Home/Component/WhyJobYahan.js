import { Box, Typography } from "@mui/material";

const WhyJobYahan = () => {
    return (<>
        <Box sx={{
            background: "#FAFAFA",
            padding: "100px",
            position: "relative"
        }}>
            <Box sx={{
                width: { lg: "50%", md: "90%", xs: "90%" },
                background: "#FFFFFF",
                color: "#445578",
                padding: "100px",
                borderRadius: "10px",
                fontsize: "25px",
                boxSizing: "border-box",
                width: "928px",
                border: " 1px solid #E7D3FF",
                borderradius: "23px"
            }}>
                <Typography component="span"
                    sx={{
                        display: "block",
                        fontSize: "96px",
                        color: "#2B1E44",
                        fontWeight: "600",

                    }}>
                    Explore
                </Typography>
                <Typography component="span"
                    sx={{
                        fontSize: "96px",
                        color: "#2B1E44",
                        fontWeight: "600",

                    }}>
                    Jobs
                    <Typography component="span"
                        sx={{
                            fontSize: "96px",
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
            <Box sx={{
                width: "617px",
                position: { lg: "absolute", md: "relative", xs: "relative" },
                right: "0",
                top: "120px"
            }}>
                <img src={window.location.origin + "/assets/g4.png"} alt="g4" width="100%" height="100%" />
            </Box>

        </Box>
    </>
    )
}

export default WhyJobYahan;