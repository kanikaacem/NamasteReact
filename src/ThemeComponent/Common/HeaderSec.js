import { Link } from 'react-router-dom';

import { Stack, Button } from "@mui/material";
import CompanyLogo from "../../ThemeComponent/Common/CompanyLogo";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { useTranslation } from 'react-i18next';
const HeaderSec = ({ color, background, border, buttonText, userType }) => {
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const [showCandidateButton, setShowCandidateButton] = useState(false);
    const [showEmployerButton, setShowEmployerButton] = useState(false);

    const { t, i18n } = useTranslation();
    useEffect(() => {

        if (window.location.pathname === "/") {
            setShowCandidateButton(true);
            setShowEmployerButton(true);
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
                    showEmployerButton &&
                    <Button type="button" variant="outlined"
                        component={Link} to="/employer-login"

                        sx={{
                            width: "200px",
                            borderRadius: "44px",
                            fontSize: { "xs": "14px", "sm": "18px", "md": "18px", "lg": "18px", "xl": "18px" },
                            border: { border },
                            color: { color },
                            textTransform: "capitalize",
                            fontWeight: "600",
                            fontFamily: "Work Sans, sans-serif !important",
                            background: { background },
                            "&:hover": {
                                border: { border },
                                color: { color },
                                background: { background }

                            }
                        }}>
                        {t('EMPLOYER_LOGIN')}
                    </Button>
                }


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


            </Stack>
        </Stack>
    </>)
}

export default HeaderSec;