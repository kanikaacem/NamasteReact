import { Box, Stack, Typography } from '@mui/material';
const ViewMoreSection = ({ SectionText }) => {
    return (
        <a href={window.location.origin + "/job-listing"} style={{
            textDecoration: "none"
        }}>
            <Stack className="viewMoreSection" direction="column" gap={3} alignItems="center" justifyContent="center" sx={{
                padding: { "xs": "20px", "sm": "20px", "md": "28px", "lg": "28px", "xl": "28px" },
                width: { "xs": "156px", "sm": "156px", "md": "300px", "xl": "300px", "lg": "300px" },
                height: { "xs": "130px", "sm": "130px", "md": "300px", "xl": "300px", "lg": "300px" },
                borderRadius: "15px",
                background: " #FFFFFF",
                boxSizing: "border-box",
            }}
            >
                <Box sx={{
                    width: { "xs": "30px", "sm": "30px", "md": "78px", "lg": "78px", "xl": "78px" },
                    height: { "xs": "30px", "sm": "30px", "md": "78px", "lg": "78px", "xl": "78px" }
                }}>
                    <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/view_more_image.png"
                        width="100%"
                        height="100%"
                        alt="ViewMore" />
                </Box>

                <Typography variant="h1" component="h2" sx={{
                    fontSize: { "xs": "0.75rem", "sm": "0.75rem", "md": "1.5rem", "xl": "1.5rem", "lg": "1.5rem" },
                    fontFamily: "'Manrope',' sans- serif'",
                    fontWeight: "500",
                    color: "#000000",
                    textAlign: "center",
                    width: "150px",

                }}>
                    {SectionText}
                </Typography >
            </Stack >
        </a>
    )

}

export default ViewMoreSection;