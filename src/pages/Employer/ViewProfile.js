import { Box, Button, Stack, Typography, Divider, Tabs, Tab, MenuItem, Select } from "@mui/material";

import PhoneIcon from '@mui/icons-material/Phone';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DownloadIcon from '@mui/icons-material/Download';

import { MeetingType } from "../../utils/Data";

import { PDFReader } from 'reactjs-pdf-reader';
import { useState } from "react";
const ViewProfile = () => {
    const [value, setValue] = useState(0)
    const [meetingType, setMeetingType] = useState(" ");

    return (<>
        <Stack direction="row" gap={2} sx={{ padding: "20px" }}>
            <Box sx={{ width: "75%", background: "#FFFFFF", minHeight: "700px" }}>
                <Box sx={{ width: "100%", background: "green", height: "150px" }}>
                    {/* <img src={window.location.origin + "/assets/ProfileBackground.png"} alt="BackgroundImage" /> */}
                </Box>
                <Stack alignItems="center" justifyContent="center"
                    sx={{
                        width: "100px",
                        margin: "0 auto",
                        position: "absolute",
                        top: "192px",
                        width: "70%"
                    }}>
                    <img src={window.location.origin + "/assets/profile.png"} alt="Profile" style={{ borderRadius: "50%" }} />
                </Stack>
                <Box>
                    <Typography component="div" sx={{ fontSize: "20px", textAlign: "center", marginTop: "60px" }}>
                        User Name
                    </Typography>
                </Box>
                <Box sx={{ textAlign: "center" }}>
                    <Button variant="outlined" startIcon={<PhoneIcon />} >Call</Button>
                </Box>

                <Stack direction="row" gap={2} alignItems="center" justifyContent="center" sx={{ background: "#f9f9f9", height: "50px", margin: "10px 0px", padding: "10px" }}
                    divider={<Divider orientation="vertical" flexItem />}>

                    <Stack direction="column" gap={1}>
                        <Typography component="div" sx={{ fontSize: "12px" }}>
                            Current Location
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "12px" }}>
                            Noida
                        </Typography>
                    </Stack>

                    <Stack direction="column" gap={1}>
                        <Typography component="div" sx={{ fontSize: "12px" }}>
                            Current Location
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "12px" }}>
                            Noida
                        </Typography>
                    </Stack>

                    <Stack direction="column" gap={1}>
                        <Typography component="div" sx={{ fontSize: "12px" }}>
                            Perferred Location
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "12px" }}>
                            Anywhere
                        </Typography>
                    </Stack>

                    <Stack direction="column" gap={1}>
                        <Typography component="div" sx={{ fontSize: "12px" }}>
                            Experience
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "12px" }}>
                            3y 8m
                        </Typography>
                    </Stack>

                    <Stack direction="column" gap={1}>
                        <Typography component="div" sx={{ fontSize: "12px" }}>
                            Current Salary
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "12px" }}>
                            Negotiable
                        </Typography>
                    </Stack>

                </Stack>

                <Box>
                    <Typography component="div" sx={{ fontSize: "14px", padding: "10px", float: "right" }} >
                        Last Login : 21/12/2022
                    </Typography>
                </Box>

                <Box sx={{ borderBottom: 1, borderColor: 'divider', background: "#FFFFFF" }}>
                    <Tabs
                        value={value}
                        textColor="primary"
                        indicatorColor="primary"
                        onChange={(event, newValue) => {
                            setValue(newValue);
                            console.log(value);
                        }}
                    >
                        <Tab label="RESUME" />
                        <Tab label="PROFILE" />
                    </Tabs>
                </Box>
                {
                    value == 0 && (<>
                        <Box sx={{ overflow: "scroll", height: "700px" }} >
                            <PDFReader showAllPage={true} url={window.location.origin + '/assets/sample.pdf'} />
                        </Box>
                    </>)

                }
                {
                    value == 1 && (<>
                        <Stack direction="column" gap={2} sx={{ padding: "30px" }} >
                            <Box sx={{
                                border: "1px solid #e5e5e5",
                                padding: "30px"
                            }}>
                                <Typography component="div" sx={{ fontSize: "20px", fontWeight: "600" }}>
                                    Professional Details
                                </Typography>

                                <Stack direction="column" gap={1}>
                                    <Typography component="div" sx={{ fontSize: "18px", fontWeight: "600" }}>
                                        Pepperbiz marketing and franchise pvt ltd
                                    </Typography>
                                    <Typography component="div" sx={{ fontSize: "16px" }}>
                                        Andriod Development
                                    </Typography>
                                    <Typography component="div" sx={{ fontSize: "16px" }}>
                                        jan,2019 to Present
                                    </Typography>
                                </Stack>
                            </Box>
                            <Box sx={{
                                border: "1px solid #e5e5e5",
                                padding: "30px"
                            }}>
                                <Typography component="div" sx={{ fontSize: "20px", fontWeight: "600" }}>
                                    Personal Details
                                </Typography>

                                <Stack direction="column" gap={1}>
                                    <Typography component="div" sx={{ fontSize: "18px", fontWeight: "600" }}>
                                        Pepperbiz marketing and franchise pvt ltd
                                    </Typography>
                                    <Typography component="div" sx={{ fontSize: "16px" }}>
                                        Andriod Development
                                    </Typography>
                                    <Typography component="div" sx={{ fontSize: "16px" }}>
                                        jan,2019 to Present
                                    </Typography>
                                </Stack>
                            </Box>
                            <Box sx={{
                                border: "1px solid #e5e5e5",
                                padding: "30px"
                            }}>
                                <Typography component="div" sx={{ fontSize: "20px", fontWeight: "600" }}>
                                    More Information
                                </Typography>

                                <Stack direction="row" gap={1} justifyContent="space-between">
                                    <Typography component="div" sx={{ fontSize: "14px" }}>
                                        Current Location:
                                    </Typography>
                                    <Typography component="div" sx={{ fontSize: "14px" }}>
                                        Noida
                                    </Typography>
                                </Stack>

                                <Stack direction="row" gap={1} justifyContent="space-between">
                                    <Typography component="div" sx={{ fontSize: "14px" }}>
                                        Perferred Location:
                                    </Typography>
                                    <Typography component="div" sx={{ fontSize: "14px" }}>
                                        Anywhere
                                    </Typography>
                                </Stack>

                                <Stack direction="row" gap={1} justifyContent="space-between">
                                    <Typography component="div" sx={{ fontSize: "14px" }}>
                                        Current Salary:
                                    </Typography>
                                    <Typography component="div" sx={{ fontSize: "14px" }}>
                                        Confidental
                                    </Typography>
                                </Stack>


                                <Stack direction="row" gap={1} justifyContent="space-between">
                                    <Typography component="div" sx={{ fontSize: "14px" }}>
                                        Expected Salary:
                                    </Typography>
                                    <Typography component="div" sx={{ fontSize: "14px" }}>
                                        Confidental
                                    </Typography>
                                </Stack>

                                <Stack direction="row" gap={1} justifyContent="space-between">
                                    <Typography component="div" sx={{ fontSize: "14px" }}>
                                        Experience:
                                    </Typography>
                                    <Typography component="div" sx={{ fontSize: "14px" }}>
                                        3y 8m
                                    </Typography>
                                </Stack>

                                <Stack direction="row" gap={1} justifyContent="space-between">
                                    <Typography component="div" sx={{ fontSize: "14px" }}>
                                        Gender:
                                    </Typography>
                                    <Typography component="div" sx={{ fontSize: "14px" }}>
                                        Male
                                    </Typography>
                                </Stack>

                                <Stack direction="row" gap={1} justifyContent="space-between">
                                    <Typography component="div" sx={{ fontSize: "14px" }}>
                                        Age:
                                    </Typography>
                                    <Typography component="div" sx={{ fontSize: "14px" }}>
                                        25 year old
                                    </Typography>
                                </Stack>

                                <Stack direction="row" gap={1} justifyContent="space-between">
                                    <Typography component="div" sx={{ fontSize: "14px" }}>
                                        Notice Period:
                                    </Typography>
                                    <Typography component="div" sx={{ fontSize: "14px" }}>
                                        Immediately
                                    </Typography>
                                </Stack>

                                <Stack direction="row" gap={1} justifyContent="space-between">
                                    <Typography component="div" sx={{ fontSize: "14px" }}>
                                        Application Date:
                                    </Typography>
                                    <Typography component="div" sx={{ fontSize: "14px" }}>
                                        12-12-2022
                                    </Typography>
                                </Stack>



                            </Box>
                        </Stack>
                    </>)
                }

            </Box>
            <Stack direction="column"
                divider={<Divider orientation="horizontal" flexItem />}
                gap={1} sx={{ width: "25%", padding: "20px" }}>
                <Stack direction="row" gap={2} alignItems="center" justifyContent="center" >
                    <Button variant="contained"> Shortlisted</Button>
                    <Button variant="outlined"> Reject</Button>
                </Stack>

                <Box sx={{ margin: "10px 0px ", width: "100%" }}>
                    <Select
                        variant="standard"
                        labelId="demo-simple-select-label"
                        name="role"
                        value={meetingType}
                        label="role"
                        onChange={(event) => {
                            setMeetingType(event.target.value);
                        }}
                        sx={{ width: "100%", display: "block", boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                        disableUnderline
                    >
                        <MenuItem value=" ">Send Interview Invites</MenuItem>
                        {MeetingType.map((item) =>
                            <MenuItem value={item.value} key={item.id}>{item.name}</MenuItem>
                        )}
                    </Select>
                </Box>

                <Box sx={{ padding: "20px", textAlign: "center" }} >
                    <Button variant="contained" startIcon={<ChatBubbleOutlineIcon />}> Chat with username</Button>
                </Box>

                <Stack direction="column" gap={1}>
                    <Stack direction="row" gap={2}>
                        <StarBorderIcon />
                        <Typography component="div" sx={{ fontSize: "14px" }}>
                            Save for Later
                        </Typography>
                    </Stack>

                    <Stack direction="row" gap={2}>
                        <DownloadIcon />
                        <Typography component="div" sx={{ fontSize: "14px" }}>
                            Download Resume
                        </Typography>
                    </Stack>
                </Stack>

                <Stack direction="column" gap={1}>
                    <Typography component="div" sx={{ fontSize: "20px" }}>
                        Contact Details
                    </Typography>
                    <Box >
                        <Typography component="div" sx={{ fontSize: "14px" }}>
                            Phone
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "14px" }}>
                            12345678901
                        </Typography>
                    </Box>
                    <Box>
                        <Typography component="div" sx={{ fontSize: "14px" }}>
                            E-mail
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "14px" }}>
                            demo@gmail.com
                        </Typography>
                    </Box>
                </Stack>

            </Stack>
        </Stack >
    </>)
}
export default ViewProfile;