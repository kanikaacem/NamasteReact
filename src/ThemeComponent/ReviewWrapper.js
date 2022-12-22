import { Box, Stack, Typography } from "@mui/material";
const reviewWrapper = ({ review }) => {
    return (<>
        <Box className="reviewWrapper"
            id={review.id}>
            <Box sx={{ width: '100px', height: '100px' }}>
                <img src="./assets/blockquote.png" />
            </Box>
            <Stack direction="row" gap={5} sx={{ padding: "30px" }}>
                <Box className="reviewDiv">
                    <Box sx={{ width: '150px', height: '150px' }}>
                        <img src="./assets/profile.png" alt="User" style={{ borderRadius: '10px' }}></img></Box>
                </Box>
                <Box sx={{ color: "#445578", textAlign: "justify" }}>
                    {review.reviews}
                    <Typography component="span"
                        sx={{
                            display: "block",
                            fontSize: "15px",
                            textAlign: { sm: "center" },
                            color: "#2B1E44",
                            fontWeight: "600",
                            margin: "10px 0px",
                            fontStyle: "italic"
                        }}>
                        Name
                    </Typography>
                </Box>

            </Stack>

        </Box>
    </>)
}
export default reviewWrapper;