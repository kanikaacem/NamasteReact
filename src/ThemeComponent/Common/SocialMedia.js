import { Box, Stack, styled } from "@mui/material";

const SocialMedia = () => {
    const SocialIcon = styled(Box)({
        width: "51px",
        height: "51px",
        background: "#4E3A67",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    })
    return (<>
        <Stack direction="row" gap={2}>
            <SocialIcon>
                <img src={window.location.origin + "/assets/FG1.png"} alt="FG1" />
            </SocialIcon>
            <SocialIcon>
                <img src={window.location.origin + "/assets/FG2.png"} alt="FG2" />
            </SocialIcon>
            <SocialIcon>
                <img src={window.location.origin + "/assets/FG3.png"} alt="FG3" />
            </SocialIcon>
        </Stack>
    </>)
}

export default SocialMedia;