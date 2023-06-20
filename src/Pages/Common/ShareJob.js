import { Box, Stack, Typography, } from "@mui/material";
import { stackStyles } from "../../utils/Styles";
import { RWebShare } from "react-web-share";
import { useTranslation } from "react-i18next";
const ShareJob = ({ jobId, jobRole, jobDescription }) => {
    const { t } = useTranslation();
    return (
        <RWebShare
            data={{
                text: "Kya aap Job khoj rahe hain? JobsYahan hai Bharat ka Job App, Yahan Job Milna hai Sabse Saral. Apply karein!",
                url: `${window.location.origin}/job-description/${jobId}`,
                title: jobRole,
            }}
        >
            <Stack direction="row" gap={1} alignItems="center" sx={{ cursor: "pointer" }}>
                <Box>
                    <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/Share.png" alt="Share" />
                </Box>
                <Typography sx={{
                    ...stackStyles,
                    color: "#FF671F"
                }}>
                    {t('SHARE')}
                </Typography>
            </Stack>
        </RWebShare>
    )

}
export default ShareJob;