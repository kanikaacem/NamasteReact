import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
const ViewAllButton = ({ clickEvent }) => {
    const { t } = useTranslation();
    return (
        <Button variant="contained"
            type="button"
            onClick={clickEvent}
            sx={{
                background: "#FF671F",
                borderRadius: "6px",
                minWidth: "116px",
                height: { "xs": "fit-content", "sm": "fit-content", "md": "60px", "xl": "60px", "lg": "60px" },
                fontSize: { "xs": "12px", "sm": "12px", "md": "16px", "xl": "16px", "lg": "16px" },
                "&:hover": {
                    background: "#FF671F",
                    borderRadius: "6px",
                    minWidth: "116px",
                    height: { "xs": "fit-content", "sm": "fit-content", "md": "60px", "xl": "60px", "lg": "60px" },
                    fontSize: { "xs": "12px", "sm": "12px", "md": "16px", "xl": "16px", "lg": "16px" }

                }
            }}> {t('VIEW_ALL')}</Button >)
}

export default ViewAllButton;