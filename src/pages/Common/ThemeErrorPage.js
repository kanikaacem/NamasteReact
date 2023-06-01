import { Box } from "@mui/material";
import HeaderSec from "../../ThemeComponent/Common/HeaderSec";
import ErrorPage from "../ErrorPage";
const ThemeErrorPage = () => {
    return (<>
        <Box className="ThemeErrorPage"
            sx={{
                background: "#FAFAFA",
                width: "100%"
            }}>
            <Box className="Header" sx={{
                padding: "20px",
                background: "#FAFAFA",
                position: "sticky",
                top: 0,
                zIndex: "3387"
            }} >
                <HeaderSec
                    color="black"
                    border="2px solid #8E8E8E"
                    buttonText="Employer login" />
            </Box>
            <ErrorPage errorMessage="Sorry! We encountered some problems while logging you in." />

        </Box>
    </>)
}

export default ThemeErrorPage;