import { Box,Stack,Container, Typography} from "@mui/material";

const LoaderScreen = () => {
    
    return (
        <Box className="LoaderScreenPageWrapper" sx={{
            height: "100vh",
        }}>
            <Container sx={{ padding: "0px", maxWidth: '1800px' ,height:"inherit"}} maxWidth={false}>
                <Stack className="LoaderScreenSection" alignItems="center" justifyContent="center" sx={{
                    padding: "20px",
                    height:"inherit"

                }}>
                    <Typography sx={{
                        fontFamily:"Poppins",
                        fontWeight:"500",
                        fontSize:"2rem"
                    }}>
                        Please Wait
                    </Typography>
                    <Typography sx={{
                        fontFamily:"Poppins",
                        fontWeight:"400",
                        fontSize:"1rem",
                        color:"#676767"
                    }}>
                        Your request is in progress
                    </Typography>
                    <Box sx={{width:"100px"}}>
                        <img src={window.location.origin + "/assets/DesktopLogo.png"} alt="JY" width="100%" height="100%" />
                    </Box>
                  
                </Stack>

            </Container >
        </Box >
    )
}

export default LoaderScreen;