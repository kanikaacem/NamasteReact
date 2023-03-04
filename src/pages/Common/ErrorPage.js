import { Box, Stack, Typography} from "@mui/material";
import HeaderSec from "../../ThemeComponent/Common/HeaderSec";

const ErrorPage = ({  image_url, error_msg
}) => {
 return (<>
  <Box className="ErrorPage" sx={{
            background: "FAFAFA"

        }}>
            <Box sx={{ padding: "20px" }}>
                <HeaderSec
                    color="black"
                    border="2px solid #8E8E8E" />
            </Box>
           
             <Stack 
             alignItems="center"
             justifyContent="center"
             gap={2}
             sx={{
                minHeight:"95vh"
             }}>
                <img src={window.location.origin+"/assets/ForgotPassword.png"} alt="No Data Present" />
                <Typography component="box" sx={{
                            fontSize: "30px",
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            color: "#4E3A67",
                            display: "block",
                            marginTop: "20px"
                        }}>
                           No questions Found
                        </Typography>
             </Stack>
    </Box>
 </>)
}

export default ErrorPage;