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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book.
                </Box>
            </Box>
            <Box sx={{
                width: "617px",
                position: "absolute",
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