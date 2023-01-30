import { Stack, Button } from "@mui/material";
import CompanyLogo from "../../ThemeComponent/Common/CompanyLogo";

const HeaderSec = ({ color, background, border, buttonText }) => {
    return (<>

        <Stack direction="row" justifyContent="space-between">
            <CompanyLogo color={color} />

            <Stack direction="row" gap={2}>
                <Button type="button" variant="outlined"
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
                    Contact us
                </Button>

                <Button type="button" variant="filled"
                    onClick={
                        () => {
                            if (buttonText === 'Employer login')
                                window.location.href = window.location.origin + "/employer-login"
                        }
                    }
                    sx={{
                        padding: "0px 40px",
                        width: "max-content",
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
                    }}
                >
                    {buttonText ? buttonText : "About Us"}
                </Button>
                {
                    buttonText === "Employer login" && <>
                        <Button type="button" variant="outlined"
                            sx={{
                                padding: "0px 40px",
                                width: "max-content",
                                background: "#FC9A7E",
                                border: "none",
                                color: "#2B1E44",
                                textTransform: "capitalize",
                                borderRadius: "44px",
                                fontSize: "18px",
                                fontWeight: "600",
                                fontFamily: "Work Sans, sans-serif !important",
                                "&:hover": {
                                    background: "#FC9A7E"
                                }
                            }}
                            onClick={
                                () => {
                                    if (buttonText === 'Employer login')
                                        window.location.href = window.location.origin + "/candidate-login"
                                }
                            }
                        >
                            {localStorage.getItem("isLoggedIn") == 'true' ? "Dashboard" : "Candidate login"}
                        </Button></>
                }


            </Stack>
        </Stack>
    </>)
}

export default HeaderSec;