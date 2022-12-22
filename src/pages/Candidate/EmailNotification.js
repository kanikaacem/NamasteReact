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
                        {/* <Stack direction="row" gap={1} alignItems="center" sx={{ fontSize: "18px", margin: "10px 0px" }}>
                    <input type="checkbox" id="daily_new_jobs" value="daily_new_jobs" name="email_notification" className="email_notification" checked />
                    <label for="daily_new_jobs"> Daily New Job</label>
                </Stack>
                <Stack direction="row" gap={1} alignItems="center" sx={{ fontSize: "18px", margin: "10px 0px" }}>
                    <input type="checkbox" id="follow_up_used" value="follow_up_used" name="email_notification" className="email_notification" checked />
                    <label for="follow_up_used"> Follow Up used</label>
                </Stack>
                <Stack direction="row" gap={1} alignItems="center" sx={{ fontSize: "18px", margin: "10px 0px" }}>
                    <input type="checkbox" id="chat_notification" value="chat_notification" name="email_notification" className="email_notification" checked />
                    <label for="chat_notification">Chat Notification</label>
                </Stack>
                <Stack direction="row" gap={1} alignItems="center" sx={{ fontSize: "18px", margin: "10px 0px" }}>
                    <input type="checkbox" id="recuriting_viewing_my_profile" value="recuriting_viewing_my_profile" name="email_notification" className="email_notification" checked />
                    <label for="recuriting_viewing_my_profile">Recuriting Viewing my Profile</label>
                </Stack> */}
                    </Stack>
                    <Stack direction="column">

                        <FormGroup>
                            <FormControlLabel className="email_notification" control={<Checkbox defaultChecked />} label="Applied Jobs" />
                            <FormControlLabel className="email_notification" control={<Checkbox defaultChecked />} label="Pending Test" />
                            <FormControlLabel className="email_notification" control={<Checkbox defaultChecked />} label="Education -Learn & Grow" />
                            <FormControlLabel className="email_notification" control={<Checkbox defaultChecked />} label="Job Relevant for me" />
                        </FormGroup>

                        {/* <Stack direction="row" gap={1} alignItems="center" sx={{ fontSize: "18px", margin: "10px 0px" }}>
                    <input type="checkbox" id="applied_jobs" value="applied_jobs" name="email_notification" className="email_notification" checked />
                    <label for="applied_jobs"> Applied Jobs</label>
                </Stack>
                <Stack direction="row" gap={1} alignItems="center" sx={{ fontSize: "18px", margin: "10px 0px" }}>
                    <input type="checkbox" id="pending_test" value="pending_test" name="email_notification" className="email_notification" checked />
                    <label for="pending_test"> Pending Test</label>
                </Stack>
                <Stack direction="row" gap={1} alignItems="center" sx={{ fontSize: "18px", margin: "10px 0px" }}>
                    <input type="checkbox" id="educational_learn_and_grow" value="educational_learn_and_grow" name="email_notification" className="email_notification" checked />
                    <label for="educational_learn_and_grow">Education -Learn & Grow</label>
                </Stack>
                <Stack direction="row" gap={1} alignItems="center" sx={{ fontSize: "18px", margin: "10px 0px" }}>
                    <input type="checkbox" id="job_relevant_for_me" value="job_relevant_for_me" name="email_notification" className="email_notification" checked />
                    <label for="job_relevant_for_me">Job Relevant for me</label>
                </Stack> */}
                    </Stack>

                    <Stack direction="column">

                        <FormGroup>
                            <FormControlLabel className="email_notification" control={<Checkbox defaultChecked />} label="Follow Up Credited" />
                            <FormControlLabel className="email_notification" control={<Checkbox defaultChecked />} label="Promotinal" />
                            <FormControlLabel className="email_notification" control={<Checkbox defaultChecked />} label="Recruiter's Action" />
                            <FormControlLabel className="email_notification" control={<Checkbox defaultChecked />} label="Unpublished Job Notification" />
                        </FormGroup>

                        {/* <Stack direction="row" gap={1} alignItems="center" sx={{ fontSize: "18px", margin: "10px 0px" }}>
                    <input type="checkbox" id="follow_up_credited" value="follow_up_credited" name="email_notification" className="email_notification" checked />
                    <label for="follow_up_credited">Follow Up Credited</label>
                </Stack>
                <Stack direction="row" gap={1} alignItems="center" sx={{ fontSize: "18px", margin: "10px 0px" }}>
                    <input type="checkbox" id="promotional" value="promotional" name="email_notification" className="email_notification" checked />
                    <label for="promotional"> Promotinal</label>
                </Stack>
                <Stack direction="row" gap={1} alignItems="center" sx={{ fontSize: "18px", margin: "10px 0px" }}>
                    <input type="checkbox" id="recruiters_actions" value="recruiters_actions" name="email_notification" className="email_notification" checked />
                    <label for="recruiters_actions">Recruiter's Action</label>
                </Stack>
                <Stack direction="row" gap={1} alignItems="center" sx={{ fontSize: "18px", margin: "10px 0px" }}>
                    <input type="checkbox" id="unpublished_job_notification" value="unpublished_job_notification" name="email_notification" className="email_notification" checked />
                    <label for="unpublished_job_notification">Unpublished Job Notification</label>
                </Stack> */}


                    </Stack>

                </Stack>
            </Box>

            <ButtonType2 ButtonText="Save Settings" />
        </>
    )
}

export default EmailNotification;