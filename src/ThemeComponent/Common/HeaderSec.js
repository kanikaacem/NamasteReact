import { Link } from 'react-router-dom';

import { Stack, Button } from "@mui/material";
import CompanyLogo from "../../ThemeComponent/Common/CompanyLogo";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const HeaderSec = ({ color, background, border, buttonText, userType }) => {
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
                        component={Link} to="/employer-login"
                        // onClick={() => {
                        //     window.location.href = window.location.origin + "/employer-login";
                        // }}
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
                    showCandidateButton && isLoggedIn && userType === "candidate" &&
                    < Button type="button" variant="outlined"
                        component={Link} to="/candidate-dashboard"

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
                        component={Link} to="/candidate-login"
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
                    component={Link} to="/about-us"
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
                    component={Link} to="/contact-us"

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