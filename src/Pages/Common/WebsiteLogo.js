import { Box, Badge } from "@mui/material";
import { useNavigate } from "react-router-dom";
const WebsiteLogo = () => {
    const navigate = useNavigate();
    const mobileScreen = localStorage.getItem("device_type") === "mobile";

    return (
        <Box className="WebsiteLogoSection" sx={{ marginRight: !mobileScreen && "50px", position: "relative" }}>
            <Badge
                badgeContent={
                    <span
                        style={{
                            fontSize: mobileScreen && "8px",
                            backgroundColor: "#FF671F", // Set the background color
                            color: "#FFFFFF", // Set the text color
                            padding: "3px 7px",
                            borderRadius: "15px", // Add border radius for rounded corners
                        }}
                    >
                        BETA
                    </span>
                }
            >

                <Box className="WebsiteLogo" sx={{
                    width: { "xs": "100px", "sm": "100px", "md": "100px", "lg": "185px", "xl": "185px" },
                    cursor: "pointer"
                }} onClick={() => navigate("/")}>
                    <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/horizontal_black_logo.png" alt="JY"
                        width="100%" height="100%" />

                </Box>
                {/* <Typography variant="h1" component="h2" sx={{
                fontSize: { "xs": "0.7rem", "sm": "0.7rem", "md": "1.3rem", "xl": "1.3rem", "lg": "1.3rem" },
                fontWeight: "600",
                color: "#000000",
            }}>
                BETA
            </Typography > */}
            </Badge >
        </Box>
    )
}
export default WebsiteLogo;