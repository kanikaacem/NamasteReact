import { Stack, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
const FooterHeading = ({ imgUrl, headingText }) => {
    const { t } = useTranslation();
    return (
        <Stack direction="row" gap={2}
            sx={{ margin: "10px 0px" }}
            alignItems="center">
            <img src={window.location.origin + "/assets/About5.png"} alt="About5" height="20px" />
            <Typography
                sx={{
                    fontSize: { "lg": "18px", "md": "18px", "xs": "18px" },
                    fontWeight: "600",
                    color: "#2B1E44",
                    display: "block",
                    lineHeight: "1.7"
                }}>
                {t('MAKE_EMPLOYEMENT_SIMPLE_AND_ACCESSIBLE_TO_ALL')}
            </Typography>
        </Stack>)
}

export default FooterHeading;