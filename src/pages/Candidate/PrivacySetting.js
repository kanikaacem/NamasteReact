import { Box, Stack, Typography, FormGroup, FormControlLabel, Checkbox, styled, TextField } from "@mui/material";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import ButtonType2 from "../../ThemeComponent/Common/ButtonType2";

const PrivacySetting = () => {
    const CustomizeBox = styled(Box)({
        width: "50%",
        border: "1px solid #445578",
        minHeight: "100px",
        borderRadius: "10px",
        padding: "10px"
    })
    return (<>
        <Box sx={{
            background: "#FFFFFF",
            minheight: "200px",
            borderRadius: "10px",
            padding: "20px"
        }}>
            <Typography component="div" sx={{ fontSize: "20px", margin: "20px 0px" }}>
                Privacy Setting
            </Typography>

            <Stack direction="column" gap={5} >

                <Stack direction="column">
                    <FormGroup>
                        <FormControlLabel className="email_notification" control={<Checkbox defaultChecked />}
                            label="Hide Profile from every recruiter / employer (Only visible against positions you explicitly apply for)" />
                    </FormGroup>

                </Stack>

                <Stack direction="row" gap={2}>
                    <CustomizeBox>
                        <Box className="input-item">
                            <ThemeLabel LableFor="company_name" LableText="Company Name" />
                            <TextField
                                variant="standard"
                                // error={errors.job_title && touched.job_title}
                                id="company_name"
                                placeholder="Enter Company Name" type="text" name="job_title" fullWidth />
                        </Box>
                    </CustomizeBox>
                    <CustomizeBox>
                        <Typography component="h3" sx={{ fontSize: "18px", fontWeight: "600", color: "#2B1E44", margin: "10px 0px" }}>
                            Blocked Companies
                        </Typography>
                        <Typography component="h3" sx={{ fontSize: "14px", color: "#2B1E44", margin: "10px 0px" }}>
                            No Blocked Companies
                        </Typography>
                    </CustomizeBox>

                </Stack>
            </Stack>
        </Box>

        <ButtonType2 ButtonText="Save Settings" />
    </>)
}

export default PrivacySetting;