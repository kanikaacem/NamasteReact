import { Box, Stack, Container, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import JobItem from "./JobItem";
import Footer from "../../ThemeComponent/Common/Footer";
import { useTranslation } from "react-i18next";

const JobListing = () => {
    const { t } = useTranslation();
    return (<Box className="JobsListingPage" sx={{
        height: "100vh"
    }}>
        <Container>
            <Stack className="PageHeading" direction="row" gap={2} sx={{
                height: "46px",
                padding: "20px",
                alignItems: "center"
            }}>
                <ArrowBackIcon sx={{ cursor: "pointer" }} />
                <Typography sx={{
                    fontSize: { "xs": "1rem", "sm": "1rem", "md": "1.5rem", "lg": "1.5rem", "xl": "1.5rem" },
                    fontFamily: "Manrope",
                    fontWeight: "600",
                }}>
                    {t('POSTED_JOBS')}
                </Typography>
            </Stack>

            <Stack direction="row" gap={2} sx={{
                margin: "0px 20px",
                flexWrap: "wrap"
            }}>
                <Stack direction="row" gap={1} alignItems="center">
                    <Typography sx={{
                        fontSize: { "xs": "0.75rem", "sm": "0.75rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
                        fontFamily: "Manrope",
                        fontWeight: "500",
                    }}>
                        {t('CATEGORY')}
                    </Typography>
                    <input style={{
                        border: " 1px solid #EAEAEA",
                        borderRadius: "5px",
                        padding: "10px"
                    }}
                        type="text" placeholder="Enter Category" />
                </Stack>

                <Stack direction="row" gap={1} alignItems="center">
                    <Typography sx={{
                        fontSize: { "xs": "0.75rem", "sm": "0.75rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },
                        fontFamily: "Manrope",
                        fontWeight: "500",
                    }}>
                        {t('LOCATION')}
                    </Typography>
                    <input
                        style={{
                            border: " 1px solid #EAEAEA",
                            borderRadius: "5px",
                            padding: "10px"
                        }} type="text" placeholder="Enter Location" />
                </Stack>
            </Stack>

            <Stack direction="column" gap={2} className="JobsSection" sx={{
                minHeight: `calc(100vh - 46px)`,
                padding: "20px"
            }}>
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
                <JobItem />
            </Stack>
        </Container>
        <Footer />
    </Box>)
}
export default JobListing;