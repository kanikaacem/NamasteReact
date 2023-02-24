import { Box, Stack, Typography, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

import ButtonType2 from "../../ThemeComponent/Common/ButtonType2";

const EmailNotification = () => {
    return (
        <>
            <Box sx={{
                background: "#FFFFFF",
                minheight: "200px",
                borderRadius: "10px",
                padding: "20px"
            }}>
                <Typography component="div" sx={{ fontSize: "20px", margin: "20px 0px" }}>
                    Email Notification
                </Typography>

                <Stack direction="row" gap={5} >

                    <Stack direction="column">
                        <FormGroup>
                            <FormControlLabel className="email_notification" control={<Checkbox defaultChecked />} label="Daily New Job" />
                            <FormControlLabel className="email_notification" control={<Checkbox defaultChecked />} label="Follow Up used" />
                            <FormControlLabel className="email_notification" control={<Checkbox defaultChecked />} label="Chat Notification" />
                            <FormControlLabel className="email_notification" control={<Checkbox defaultChecked />} label="Recuriting Viewing my Profile" />
                        </FormGroup>

                    </Stack>
                    <Stack direction="column">

                        <FormGroup>
                            <FormControlLabel className="email_notification" control={<Checkbox defaultChecked />} label="Applied Jobs" />
                            <FormControlLabel className="email_notification" control={<Checkbox defaultChecked />} label="Pending Test" />
                            <FormControlLabel className="email_notification" control={<Checkbox defaultChecked />} label="Education -Learn & Grow" />
                            <FormControlLabel className="email_notification" control={<Checkbox defaultChecked />} label="Job Relevant for me" />
                        </FormGroup>


                    </Stack>

                    <Stack direction="column">

                        <FormGroup>
                            <FormControlLabel className="email_notification" control={<Checkbox defaultChecked />} label="Follow Up Credited" />
                            <FormControlLabel className="email_notification" control={<Checkbox defaultChecked />} label="Promotinal" />
                            <FormControlLabel className="email_notification" control={<Checkbox defaultChecked />} label="Recruiter's Action" />
                            <FormControlLabel className="email_notification" control={<Checkbox defaultChecked />} label="Unpublished Job Notification" />
                        </FormGroup>




                    </Stack>

                </Stack>
            </Box>

            <ButtonType2 ButtonText="Save Settings" />
        </>
    )
}

export default EmailNotification;