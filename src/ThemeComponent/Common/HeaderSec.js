import { Link } from 'react-router-dom';

import { Button, Box, Stack, MenuItem, Select } from "@mui/material";
import CompanyLogo from "../../ThemeComponent/Common/CompanyLogo";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

/*getting website language data*/
import { LanguageOptions } from "../../utils/Data";
import { useTranslation } from 'react-i18next';

const HeaderSec = ({ color, background, border, buttonText, userType }) => {
    const currentLanguage = useSelector(state => state.currentLanguage);
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const dispatch = useDispatch();
    const [showCandidateButton, setShowCandidateButton] = useState(false);
    // const [showEmployerButton, setShowEmployerButton] = useState(false);
    const [selectedValue, setSelectedValue] = useState(currentLanguage);

    const { t } = useTranslation();

    const changeLanguage = (event) => {
        setSelectedValue(event.target.value);
        dispatch({ type: 'CHANGE_LANGUAGE', payload: event.target.value });
    };

    useEffect(() => {

        if (window.location.pathname === "/") {
            setShowCandidateButton(true);
            // setShowEmployerButton(true);
        }

    }, []);
    return (<>
        <Stack direction={{ "lg": "row", "md": "row", "xs": "column" }}
            justifyContent="space-between"
            alignItems="center"
            sx={{
                "gap": { "xs": "0px", "sm": "32px", "md": "32px", "lg": "32px", "xl": "32px" }
            }}
        >
            <CompanyLogo color={color} />
            <Stack direction="row"
                sx={{
                    width: { "lg": `fit-content`, "md": `"fit-content"`, "xs": "fit-content" },
                    flexWrap: "wrap",
                    justifyContent: "flex-end"
                }}
            >

                {
                    showCandidateButton && isLoggedIn && userType === "candidate" &&
                    < Button type="button" variant="outlined"
                        component={Link} to="/candidate-dashboard"

                        sx={{
                            width: "200px",
                            borderRadius: "44px",
                            fontSize: { "xs": "14px", "sm": "18px", "md": "18px", "lg": "18px", "xl": "18px" },
                            color: { color },
                            textTransform: "capitalize",
                            fontWeight: "600",
                            fontFamily: "Work Sans, sans-serif !important",
                            border: "none",
                            background: "none",
                            "&:hover": {
                                color: { color },
                                border: "none",
                                background: "none",

                            }
                        }}>
                        {t('DASHBOARD')}
                    </Button>
                }

                {
                    showCandidateButton && !isLoggedIn &&
                    < Button type="button" variant="outlined"
                        component={Link} to="/candidate-login"
                        sx={{
                            width: "200px",
                            fontSize: { "xs": "14px", "sm": "18px", "md": "18px", "lg": "18px", "xl": "18px" },

                            color: { color },
                            textTransform: "capitalize",
                            fontWeight: "600",
                            fontFamily: "Work Sans, sans-serif !important",
                            border: "none",
                            background: "none",

                            "&:hover": {
                                color: { color },
                                border: "none",
                                background: "none",

                            }
                        }}>
                        {t('CANDIDATE_LOGIN')}
                    </Button>
                }

                <Button type="button" variant="filled"
                    component={Link} to="/about-us"
                    sx={{
                        fontSize: { "xs": "14px", "sm": "18px", "md": "18px", "lg": "18px", "xl": "18px" },
                        color: { color },
                        textTransform: "capitalize",
                        fontWeight: "600",
                        fontFamily: "Work Sans, sans-serif !important",
                        border: "none",
                        background: "none",
                        "&:hover": {
                            color: { color },
                            border: "none",
                            background: "none",

                        }
                    }}
                >
                    {t('ABOUT_US')}
                </Button>

                <Button type="button" variant="outlined"
                    component={Link} to="/contact-us"

                    sx={{
                        borderRadius: "44px",
                        fontSize: { "xs": "14px", "sm": "18px", "md": "18px", "lg": "18px", "xl": "18px" },
                        color: { color },
                        textTransform: "capitalize",
                        fontWeight: "600",
                        fontFamily: "Work Sans, sans-serif !important",
                        border: "none",
                        background: "none",
                        "&:hover": {
                            color: { color },
                            border: "none",
                            background: "none",
                        }
                    }}>
                    {t('CONTACT_US')}
                </Button>

                <Box className="ChangeLanguageOption">
                    <Select
                        sx={{
                            width: "200px"
                        }}
                        value={selectedValue} onChange={changeLanguage} displayEmpty>
                        <MenuItem value="" disabled>
                            Select an Language
                        </MenuItem>
                        {LanguageOptions.map((item) => {
                            return <MenuItem value={item.value} >{item.text}</MenuItem>

                        })}
                    </Select>
                </Box>


            </Stack>
        </Stack>
    </>)
}

export default HeaderSec;