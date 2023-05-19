import { Box, Stack, Typography, Button } from "@mui/material"

const JobItem = () => {
    return (
        <Stack direction="column" gap={1} className="JobItem" sx={{
            // minWidth: "335px",
            width: "100%",
            MinHeight: "302px",
            background: "#FFFFFF",
            boxShadow: "0px 2px 14px rgba(191, 191, 191, 0.25)",
            borderRadius: "6px",
            boxSizing: "border-box",
            padding: "20px",
            cursor: "pointer"
        }}>
            <Stack direction="row" justifyContent="space-between">
                <Typography sx={{
                    fontSize: { "xs": "1.1rem", "sm": "1.1rem", "md": "1.5rem", "lg": "1.5rem", "xl": "1.5rem" },
                    fontFamily: "Manrope",
                    fontWeight: "600",
                }}>
                    Assistant Nurse
                </Typography>
                <Stack className="JobTimeLine" direction="row" alignItems="center" gap={1}>
                    <Box sx={{ width: "10px", height: "10px" }}>
                        <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/timeline.png" alt="jobTimeline" width="100%" height="100%" />
                    </Box>
                    <Typography sx={{
                        fontSize: { "xs": "0.7rem", "sm": "0.7rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
                        fontWeight: "500",
                        color: "#615F5F",
                        fontFamily: "Poppins",
                    }}>
                        1 day ago
                    </Typography>
                </Stack>

            </Stack>

            <Typography sx={{
                fontSize: { "xs": "0.7rem", "sm": "0.7rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
                fontFamily: "Poppins",
                fontWeight: "500",
            }}>
                kutumbhhrcare
            </Typography>

            <Typography sx={{
                fontSize: { "xs": "0.7rem", "sm": "0.7rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
                fontFamily: "Poppins",
                fontWeight: "500",
            }}>
                Rs 10,000- Rs 20,999
            </Typography>

            <Stack direction="row" gap={2} sx={{
                flexWrap: "wrap"
            }}>
                <Stack direction="row" gap={1}
                    sx={{
                        border: "1px solid #EAEAEA",
                        background: "#ffffff",
                        padding: { "xs": "5px", "sm": "5px", "md": "10px", "lg": "10px", "xl": "10px" },
                        minWidth: "100px",
                        borderRadius: "11px",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <Box>
                        <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/location.png" alt="Location"></img>
                    </Box>
                    <Typography sx={{
                        fontSize: { "xs": "0.7rem", "sm": "0.7rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
                        fontFamily: "Poppins",
                        fontWeight: "400",
                    }}>
                        Noida
                    </Typography>
                </Stack>

                <Stack direction="row" gap={1}
                    sx={{
                        border: "1px solid #EAEAEA",
                        background: "#ffffff",
                        padding: { "xs": "5px", "sm": "5px", "md": "10px", "lg": "10px", "xl": "10px" },
                        minWidth: "100px",
                        borderRadius: "11px",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <Box>
                        <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/profession.png" alt="Location"></img>
                    </Box>
                    <Typography sx={{
                        fontSize: { "xs": "0.7rem", "sm": "0.7rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
                        fontFamily: "Poppins",
                        fontWeight: "400",
                    }}>
                        Nurse
                    </Typography>
                </Stack>

                <Stack direction="row" gap={1}
                    sx={{
                        border: "1px solid #EAEAEA",
                        background: "#ffffff",
                        padding: { "xs": "5px", "sm": "5px", "md": "10px", "lg": "10px", "xl": "10px" },
                        minWidth: "100px",
                        borderRadius: "11px",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                    <Box>
                        <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/education.png" alt="Location"></img>
                    </Box>
                    <Typography sx={{
                        fontSize: { "xs": "0.7rem", "sm": "0.7rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
                        fontFamily: "Poppins",
                        fontWeight: "400",
                    }}>
                        Graduate
                    </Typography>
                </Stack>
            </Stack>

            <Typography sx={{
                fontSize: { "xs": "0.7rem", "sm": "0.7rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
                fontFamily: "Poppins",
                fontWeight: "500",
                color: "#615F5F"
            }}>
                It is a long established fact that a reader will be distracted by the readable contentment.
            </Typography>

            <Stack direction="row" gap={2} alignItems="center">
                <Button variant="outlined" sx={{
                    fontSize: { "xs": "0.7rem", "sm": "0.7rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
                    textTransform: "capitalize",
                    border: "1px solid #FF671F",
                    padding: { "xs": "0px", "sm": "0px", "md": "10px", "lg": "10px", "xl": "10px" },
                    minWidth: "160px",
                    height: "40px",
                    color: "#FF671F",
                    "&:hover": {
                        color: "#FF671F",
                        border: "1px solid #FF671F"
                    }

                }}>Apply via Whatsapp</Button>

                <Stack direction="row" gap={1} alignItems="center">
                    <Box>
                        <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/Share.png" alt="Share" />
                    </Box>
                    <Typography sx={{
                        fontSize: { "xs": "0.7rem", "sm": "0.7rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
                        fontFamily: "Poppins",
                        fontWeight: "500",
                        color: "#FF671F"
                    }}>
                        Share
                    </Typography>
                </Stack>
            </Stack>

        </Stack>)
}
export default JobItem;