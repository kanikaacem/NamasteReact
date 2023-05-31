import { Box, Stack, styled } from "@mui/material";

const SocialMedia = () => {
    const SocialIcon = styled(Box)({

        background: "#4E3A67",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    })
    return (<>
        <Stack direction="row" gap={2}>
            <SocialIcon sx={{
                width: { "xs": "30px", "sm": "51px", "md": "51px", "lg": "51px", "xl": "51px" },
                height: { "xs": "30px", "sm": "51px", "md": "51px", "lg": "51px", "xl": "51px" }
            }}>
                <img src={window.location.origin + "/assets/FG1.png"} alt="FG1" />
            </SocialIcon>
            <SocialIcon sx={{
                width: { "xs": "30px", "sm": "51px", "md": "51px", "lg": "51px", "xl": "51px" },
                height: { "xs": "30px", "sm": "51px", "md": "51px", "lg": "51px", "xl": "51px" }
            }}
            >
                <img src={window.location.origin + "/assets/FG2.png"} alt="FG2" />
            </SocialIcon>
            <SocialIcon sx={{
                width: { "xs": "30px", "sm": "51px", "md": "51px", "lg": "51px", "xl": "51px" },
                height: { "xs": "30px", "sm": "51px", "md": "51px", "lg": "51px", "xl": "51px" }
            }}>
                <img src={window.location.origin + "/assets/FG3.png"} alt="FG3" />
            </SocialIcon>
        </Stack>
    </>)
}

export default SocialMedia;