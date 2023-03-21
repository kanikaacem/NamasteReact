import { Stack, Button } from "@mui/material";
import { Avatar, Box, Typography } from "@mui/material";

import LogoutIcon from '@mui/icons-material/Logout';

import Moment from 'react-moment';
import CompanyLogo from "../../ThemeComponent/Common/CompanyLogo";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const HeaderSec = ({ color, background, border, buttonText }) => {
    const [openProfile, setOpenProfile] = useState(false);
    const user = useSelector((state) => state.user);
    const isLoggedIn = useSelector((state) => state.isLoggedIn);
    const [showCandidateButton, setShowCandidateButton] = useState(false);
    const [showEmployerButton, setShowEmployerButton] = useState(false);

    useEffect(() => {

        if (window.location.pathname === "/") {
            setShowCandidateButton(true);
            setShowEmployerButton(true);
        }

    }, []);
    return (<>
        <Stack direction={{ "lg": "row", "md": "row", "xs": "column" }}
            gap={4} justifyContent="space-between"
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
                        onClick={() => {
                            window.location.href = window.location.origin + "/employer-login";
                        }}
                        sx={{
                            width: "200px",
                            borderRadius: "44px",
                            fontSize: "18px",
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
                        Employer Login
                    </Button>
                }


                {
                    showCandidateButton && (isLoggedIn && user) && user && user.type === "candidate" &&
                    <Button type="button" variant="outlined"
                        onClick={() => {
                            window.location.href = window.location.origin + "/candidate-dashboard";
                        }}
                        sx={{
                            width: "200px",
                            borderRadius: "44px",
                            fontSize: "18px",
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
                        }}>Dashboard
                    </Button>
                }

                {
                    showCandidateButton && !isLoggedIn &&
                    < Button type="button" variant="outlined"
                        onClick={() => {
                            window.location.href = window.location.origin + "/candidate-login";
                        }}
                        sx={{
                            width: "200px",
                            fontSize: "18px",
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
                        }}>Candidate Login
                    </Button>
                }

                <Button type="button" variant="filled"
                    onClick={
                        () => {
                            window.location.href = window.location.origin + "/about-us"
                        }
                    }
                    sx={{
                        fontSize: "18px",
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
                    About Us
                </Button>

                <Button type="button" variant="outlined"
                    onClick={() => {
                        window.location.href = window.location.origin + "/contact-us";
                    }}
                    sx={{
                        borderRadius: "44px",
                        fontSize: "18px",
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
                    Contact us
                </Button>


            </Stack>
        </Stack>
    </>)
}

export default HeaderSec;