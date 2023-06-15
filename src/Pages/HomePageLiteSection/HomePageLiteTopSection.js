import { Stack, Box } from "@mui/material";

const HomePageLiteTopSection = () => {
    return (<Stack className="PageTopSection" direction="row" gap={2} sx={{
        padding: { "xs": "20px", "sm": "20px", "md": "20px 100px", "lg": "20px 100px", "xl": "20px 100px" },
        background: "#ffffff",
        webkitBoxShadow: "0px 6px 5px -3px rgba(208,208,208,1)",
        mozBoxShadow: "0px 6px 5px -3px rgba(208,208,208,1)",
        boxShadow: "0px 6px 5px -3px rgba(208,208,208,1)",
        marginBottom: "4px",
        alignItems: "center"
    }}>
        <Box sx={{ height: "35px" }}>
            <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/horizontal_logo.png"
                alt="WebsiteLogo"
                width="100%"
                height="100%" />
        </Box>
    </Stack>)
}

export default HomePageLiteTopSection;