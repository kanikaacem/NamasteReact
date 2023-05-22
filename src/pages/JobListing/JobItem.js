import { Box, Stack, Typography, Button } from "@mui/material";
import { jobItemStyles, stackStyles, tagStyles, ApplyButtonStyles } from "../../utils/Styles";
import { useNavigate } from "react-router-dom";

const JobItem = (props) => {
    const { id, jobTitle, companyName, salary, location, profession, education, description } = props;
    const navigate = useNavigate();

    const handleViewJobDescription = () => {
        navigate(`/job-description/7589743958${id}`);
    };

    return (

        <Stack direction="column" gap={1} className="JobItem" sx={jobItemStyles}>
            <Stack direction="row" justifyContent="space-between">
                <Typography sx={{ ...stackStyles, fontSize: { xs: '1.1rem', sm: '1.5rem', md: '1.5rem', lg: '1.5rem', xl: '1.5rem' }, fontWeight: '600' }}>
                    {jobTitle}
                </Typography>
                <Stack className="JobTimeLine" direction="row" alignItems="center" gap={1}>
                    <Box sx={{ width: "10px" }}>
                        <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/timeline.png" alt="jobTimeline" width="100%" height="100%" />
                    </Box>
                    <Typography sx={{ ...stackStyles, color: '#615F5F', fontWeight: '500' }}>
                        1 day ago
                    </Typography>
                </Stack>

            </Stack>
            <Typography sx={stackStyles}>
                {companyName}
            </Typography>

            <Typography sx={stackStyles}>
                {salary}
            </Typography>

            <Stack direction="row" gap={2} sx={{
                flexWrap: "wrap"
            }}>
                <Stack direction="row" gap={1}
                    sx={tagStyles}>
                    <Box>
                        <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/location.png" alt="Location"></img>
                    </Box>
                    {location && <Typography sx={stackStyles}>
                        {location}
                    </Typography>}

                </Stack>

                <Stack direction="row" gap={1}
                    sx={tagStyles}>
                    <Box>
                        <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/profession.png" alt="Location"></img>
                    </Box>
                    {profession &&
                        <Typography sx={stackStyles}>
                            {profession}
                        </Typography>}

                </Stack>

                <Stack direction="row" gap={1}
                    sx={tagStyles}>
                    <Box>
                        <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/education.png" alt="Location"></img>
                    </Box>
                    {education &&
                        <Typography sx={stackStyles}>
                            {education}
                        </Typography>}

                </Stack>
            </Stack>

            <Typography sx={{
                ...stackStyles,
                color: "#615F5F"
            }}>
                {description}
            </Typography>

            <Stack direction="row" justifyContent="space-between">
                <Stack direction="row" gap={2}>
                    <Button variant="outlined" sx={ApplyButtonStyles}>Apply via Whatsapp</Button>

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
                </Stack>

                <Stack direction="row" gap={1} alignItems="center" onClick={handleViewJobDescription}>
                    <Typography sx={{
                        ...stackStyles,
                        color: "#FF671F"
                    }}>
                        View
                    </Typography>
                    <Box>
                        <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/view_button.png" alt="View" />
                    </Box>
                </Stack>
            </Stack>

        </Stack>
    )
}
export default JobItem;