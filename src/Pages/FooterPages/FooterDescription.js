import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
const FooterDescription = ({ description }) => {
    const { t } = useTranslation();

    return (
        <Typography
            sx={{
                fontSize: { "lg": "16px", "md": "16px", "xs": "16px" },
                fontWeight: "400",
                color: "#615F5F",
                display: "block",
                lineHeight: "1.7"
            }}>
            {t('DESCRIPTION1')}
        </Typography>
    )
}

export default FooterDescription;