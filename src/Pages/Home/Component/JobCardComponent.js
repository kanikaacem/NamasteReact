import { Box, Stack, Typography } from '@mui/material';

const JobCardComponent = (props) => {

    const { cardSection, category_name, category_image, category_url_link, category_job_active } = props;

    const JobItemStyles = {
        padding: { "xs": "20px", "sm": "20px", "md": "28px", "lg": "28px", "xl": "28px" },
        width: { "xs": "156px", "sm": "156px", "md": "300px", "xl": "300px", "lg": "300px" },
        minHeight:  { "xs": "112px", "sm": "112px", "md": "300px", "xl": "300px", "lg": "300px" },
        boxSizing: "border-box",
        background: " #FFFFFF",
        cursor: "pointer",
        border: '1px solid rgba(217, 217, 217, 0.36)',
        borderRadius: '16px',
    }

    const LocationSection = cardSection === "LocationSection";

    const imageSize = {
        width: {
            "xs": LocationSection ? "60px" : "30px",
            "sm": LocationSection ? "60px" : "30px", "md": "80px", "lg": "80px", "xl": "80px"
        },
        height: {
            "xs": LocationSection ? "60px" : "30px",
            "sm": LocationSection ? "60px" : "30px", "md": "80px", "lg": "80px", "xl": "80px"
        }

    }

    let handleImageError = "https://jobyahanp.s3.ap-south-1.amazonaws.com/images/category-icons/fallback-image.png";
    return (<>
        <Stack className="JobItem" direction="column" gap={2} alignItems="center" justifyContent="center" sx={JobItemStyles}
            onClick={() => {
                if (category_job_active > 0)
                    window.location.href = category_url_link;

            }}>
            <Box sx={imageSize}>
                <img src={category_image}
                    className="categoryImage"
                    alt="Category Icon"
                    width="100%"
                    height="100%"
                    onError={handleImageError}
                    style={{
                        borderRadius: LocationSection && "50%"
                    }} />
            </Box>

            <Typography variant="h1" component="h2" sx={{
                fontSize: { "xs": "0.75rem", "sm": "0.75rem", "md": "1.5rem", "xl": "1.5rem", "lg": "1.5rem" },
                fontFamily: "'Manrope',' sans- serif'",
                fontWeight: "500",
                color: "#000000",
                textAlign: "center",
                textTransform: "capitalize"
            }}>
                {category_name}
            </Typography >

            {!LocationSection && category_job_active > 0 && (
                <Stack direction="row" gap={1}>
                    <Typography variant="h1" component="h2" sx={{
                        fontSize: { "xs": "0.75rem", "sm": "0.75rem", "md": "1.2rem", "xl": "1.2rem", "lg": "1.2rem" },
                        fontFamily: "'Manrope',' sans- serif'",
                        fontWeight: "500",
                        color: "#FF671F",
                        textAlign: "center"
                    }}>
                        {category_job_active}
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
            )}


        </Stack >
    </>)

}

export default JobCardComponent;