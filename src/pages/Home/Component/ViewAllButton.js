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
                "&:hover": {
                    background: "#FF671F",
                    borderRadius: "6px",
                    minWidth: "116px"
                }
            }}> {t('VIEW_ALL')}</Button >)
}

export default ViewAllButton;