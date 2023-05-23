import { Box, Stack, Typography } from '@mui/material';

const JobCardComponent = ({ item, cardSection }) => {
    return (<>
        <Box sx={{ cursor: "pointer" }}>
            <Stack direction="column" gap={2} alignItems="center" justifyContent="center" sx={{
                padding: { "xs": "20px", "sm": "20px", "md": "28px", "lg": "28px", "xl": "28px" },
                width: { "xs": "156px", "sm": "156px", "md": "300px", "xl": "300px", "lg": "300px" },
                minHeight: { "xs": "103px", "sm": "103px", "md": "300px", "xl": "300px", "lg": "300px" },
                borderRadius: "15px",
                boxSizing: "border-box",
                background: " #FFFFFF",
                boxShadow: "0px 2px 14px rgba(191, 191, 191, 0.25)"
            }}
            >
                <Box sx={{
                    width: { "xs": "50px", "sm": "50px", "md": "80px", "lg": "80px", "xl": "80px" },
                    height: { "xs": "50px", "sm": "50px", "md": "80px", "lg": "80px", "xl": "80px" }
                }}>
                    <img src={cardSection === "LocationSection" ? "https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/map.png" :
                        "https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/carpenter.png"}
                        alt="Carpenter"
                        width="100%"
                        height="100%"
                        style={{
                            borderRadius: cardSection === "LocationSection" && "50%"
                        }} />
                </Box>

                <Typography variant="h1" component="h2" sx={{
                    fontSize: { "xs": "0.75rem", "sm": "0.75rem", "md": "1.5rem", "xl": "1.5rem", "lg": "1.5rem" },
                    fontFamily: "'Manrope',' sans- serif'",
                    fontWeight: "700",
                    color: "#000000",
                    textAlign: "center"
                }}>
                    Carpenter
                </Typography >

                <Stack direction="row" gap={5}>
                    <Stack gap={1}>
                        <Typography variant="h1" component="h2" sx={{
                            fontSize: { "xs": "0.75rem", "sm": "0.75rem", "md": "1.2rem", "xl": "1.2rem", "lg": "1.2rem" },
                            fontFamily: "'Manrope',' sans- serif'",
                            fontWeight: "700",
                            color: "#FF671F",
                            textAlign: "center"
                        }}>
                            1000+
                        </Typography >
                        <Typography variant="h1" component="h2" sx={{
                            fontSize: { "xs": "0.75rem", "sm": "0.75rem", "md": "1rem", "xl": "1rem", "lg": "1rem" },
                            fontFamily: "'Manrope',' sans- serif'",
                            color: "#000000",
                            textAlign: "center"
                        }}>
                            Jobs
                        </Typography >
                    </Stack>
                    <Stack gap={1}>
                        <Typography variant="h1" component="h2" sx={{
                            fontSize: { "xs": "0.75rem", "sm": "0.75rem", "md": "1.2rem", "xl": "1.2rem", "lg": "1.2rem" },
                            fontFamily: "'Manrope',' sans- serif'",
                            fontWeight: "700",
                            color: "#FF671F",
                            textAlign: "center"
                        }}>
                            1000+
                        </Typography >
                        <Typography variant="h1" component="h2" sx={{
                            fontSize: { "xs": "0.75rem", "sm": "0.75rem", "md": "1rem", "xl": "1rem", "lg": "1rem" },
                            fontFamily: "'Manrope',' sans- serif'",
                            color: "#000000",
                            textAlign: "center"
                        }}>
                            Candidates
                        </Typography >
                    </Stack>
                </Stack>

            </Stack >
        </Box>
    </>)

}

export default JobCardComponent;