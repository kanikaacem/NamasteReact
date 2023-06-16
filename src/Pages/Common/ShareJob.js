import { Box, Stack, Typography, } from "@mui/material";
import { stackStyles } from "../../utils/Styles";
import { RWebShare } from "react-web-share";

const ShareJob = ({ jobId, jobRole, jobDescription }) => {
    return (
        <RWebShare
            data={{
                text: jobDescription && jobDescription.length > 0 ? (jobDescription.length > 250 && jobDescription.slice(0, 250) + "...") : jobDescription,
                url: `${window.location.origin}/job-description/${jobId}`,
                title: jobRole,
            }}
        >
            <Stack direction="row" gap={1} alignItems="center">
                <Box>
                    <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/Share.png" alt="Share" />
                </Box>
                <Typography sx={{
                    ...stackStyles,
                    color: "#FF671F"
                }}>
                    Share
                </Typography>
            </Stack>
        </RWebShare>
    )

}
export default ShareJob;