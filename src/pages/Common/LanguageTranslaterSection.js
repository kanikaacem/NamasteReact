
import { Stack, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

const LanguageTranslatorSection = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const currentLanguage = useSelector(state => state.currentLanguage);
    const ChangeLanguage = (event) => {
        dispatch({ type: 'CHANGE_LANGUAGE', payload: event.target.value });
    }
    return (
        <Stack className="LanguageTranslator" direction="row" gap={1} sx={{
            padding: "10px",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Typography variant="h1" component="h2" sx={{
                fontSize: { "xs": "0.8rem", "sm": "0.8rem", "md": "1rem", "xl": "1rem", "lg": "1rem" },
                fontFamily: "'Manrope',' sans- serif'",
                fontWeight: "400",
                color: "#000000",
                textAlign: "center",
            }}>
                {t('CHOOSE_THE_LANGUAGE_YOU_LIKE')}
            </Typography >

            <select style={{
                minWidth: "60px",
                border: "none",
                outline: "none"
            }}
                name="cars" id="cars"
                value={currentLanguage}
                onChange={ChangeLanguage}>
                <option value="hn">Hindi</option>
                <option value="en">English</option>
                <option value="ehn">Hinglish</option>
            </select>
        </Stack>
    )
}

export default LanguageTranslatorSection;