import { Box, Button, Stack, Typography, Divider, Tabs, Tab, MenuItem, Select } from "@mui/material";
import ChatComponent from "../../ThemeComponent/Common/ChatComponent";
import SocialMedia from "../../ThemeComponent/Common/SocialMedia";
import { useState, useEffect } from "react"
const AppliedCandidate = () => {
    const [value, setValue] = useState(0)
    // const user = localStorage.user && JSON.parse(localStorage.user);
    // const api_url = useSelector(state => state.api_url);

    // const [jobFilter, setJobFilter] = useState(" ");
    // const [candidateFilter, setCandidateFilter] = useState(" ");
    // const [data, setData] = useState();
    // useEffect(() => {
    //     const getCandidates = async () => {
    //         let formData = new FormData();
    //         formData = {
    //             userid: user._id
    //         }
    //         let response = await fetch(api_url + "/api/job/getcandidatesonpostedjobs", {
    //             // Adding method type
    //             method: "POST",
    //             // Adding body or contents to send
    //             headers: {
    //                 'Access-Control-Allow-Origin': '*',
    //                 'Content-Type': 'application/json; charset=UTF-8'
    //             },
    //             body: JSON.stringify(formData),
    //         })
    //         if (response.ok) {
    //             response = await response.json();
    //             if (response.status == 1) {
    //                 console.log(response);
    //                 setData(response.data);
    //             }

    //         }

    //     }
    //     getCandidates();
    // }, [])
    return (<>
        {/* <Stack direction="row" gap={2}>
            <Stack direction="column" gap={2} className="JobRecommened Candidates" sx={{ padding: '20px', width: "80%" }}>
                <Box>
                    <Typography component="div" sx={{ fontSize: "20px", fontWeight: "600" }}>
                        Applied Candidates
                    </Typography>
                </Box>

                <Stack direction="row" gap={2}>
                    <Select
                        variant="standard"
                        labelId="demo-simple-select-label"
                        name="role"
                        value={candidateFilter}
                        label="role"
                        onChange={(event) => {
                            setCandidateFilter(event.target.value);
                        }}
                        sx={{ width: "200px", display: "block", boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                        disableUnderline
                    >
                        <MenuItem value=" ">All Candidates</MenuItem>
                        {CandidateFilter.map((item) =>
                            <MenuItem value={item.value} key={item.id}>{item.name}</MenuItem>
                        )}
                    </Select>

                    <Select
                        variant="standard"
                        labelId="demo-simple-select-label"
                        name="role"
                        value={jobFilter}
                        label="role"
                        onChange={(event) => {
                            setJobFilter(event.target.value);
                        }}
                        sx={{ width: "200px", display: "block", boxShadow: 'none', '.MuiOutlinedInput-notchedOutline': { border: 0 } }}
                        disableUnderline
                    >
                        <MenuItem value=" ">All Jobs</MenuItem>
                        {JobFilter.map((item) =>
                            <MenuItem value={item.value} key={item.id}>{item.name}</MenuItem>
                        )}
                    </Select>

                </Stack>

                <Stack direction="column" gap={2}>

                    {data ? data.map((item) => {
                        return (<CandidateComponent item={item}></CandidateComponent>)
                    }) :
                        <Box sx={{ width: "100%" }}>
                        </Box>
                    }

                </Stack>
            </Stack>

            <Box sx={{
                // position: "fixed",
                // right: "0px",
                // height: "100vh",
                // background: "#f2f5fa"
            }}>
                <ChatAssistant />
                <ChatComponent />
                <ChatComponent />
            </Box>
        </Stack> */}
        <Box className="AppliedCandidatePage"
            sx={{
                minHeight: "100vh"
            }}>
            <Stack direction="row" gap={2} className="AppliedCandidatePageWrapper" sx={{ padding: "50px 20px" }}>
                <Box sx={{
                    width: {
                        "lg":
                            `calc(100vw - 451px)`, "md": "100%", "xs": "100%",
                        padding: "20px"
                    }
                }}>
                    <Stack direction="row" justifyContent="space-between">
                        <Box>
                            <Typography component="div" sx={{ fontSize: "26px", color: "#4E3A67", fontWeight: "700" }}>
                                Linux Solution Engineer
                            </Typography>
                            <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67" }}>
                                Noida   4-10 yrs |  Job Code: 1135573
                            </Typography>
                        </Box>
                        <Box> kjlkdfjlk </Box>
                    </Stack>
                    {/* <Box sx={{ marginTop: "30px" }}>
                        <Tabs
                            value={value}
                            textColor="primary"
                            indicatorColor="primary"
                            onChange={(event, newValue) => {
                                setValue(newValue);
                                console.log(value);
                            }}
                        >
                            <Tab sx={{ fontSize: "20px", maxWidth: "fit-content" }} label="Recommended Candidates (10)" />
                            <Tab sx={{ fontSize: "20px", maxWidth: "fit-content" }} label="Applications (10)" />
                        </Tabs>
                    </Box> */}
                    <Stack direction="row" gap={2}
                        sx={{
                            margin: "20px 0px"
                        }}>
                        <Typography component="div" sx={{ fontSize: "26px", color: "#4E3A67", fontWeight: "700" }}>
                            Recommended Candidates (10)
                        </Typography>
                        <Typography component="div" sx={{
                            fontSize: "26px", color: "#FC9A7E", fontWeight: "700"
                        }}>
                            Applications(10)
                        </Typography>
                    </Stack>

                    <Stack direction="row" gap={2} justifyContent="space-between"
                        sx={{
                            margin: "20px 0px"
                        }}>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67", fontWeight: "700" }}>
                            ALL (110)
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67", fontWeight: "700" }}>
                            UNREAD (4)
                        </Typography>
                        <Typography component="div" sx={{
                            fontSize: "20px", color: "#FC9A7E", fontWeight: "700"
                        }}>
                            REVIEWED (76)
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67", fontWeight: "700" }}>
                            SHORTLISTED (29)
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67", fontWeight: "700" }}>
                            REJECTED (0)
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67", fontWeight: "700" }}>
                            SAVED (1)
                        </Typography>

                    </Stack>
                    <hr sx={{
                        border: "1px solid #E1D4F2"

                    }}></hr>
                </Box>
                <Stack direction="column" gap={2}
                    sx={{
                        padding: "20px"
                    }}>
                    <ChatComponent />

                    <Stack direction="column"
                        sx={{
                            minHeight: "396px",
                            background: "#FFFFFF",
                            border: " 1px solid #E1D4F2",
                            borderRadius: "19px",
                            width: "100%"

                            // minWidth: "320px"

                        }}>
                        <Stack sx={{
                            padding: "15px",
                            height: "150px",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Typography component="div" sx={{ fontSize: "16px", color: "#4E3A67", fontWeight: "600" }}>
                                Become a JobsYahan certified Recruiter
                            </Typography>

                            <Box sx={{ cursor: "pointer" }}
                                onClick={() => window.location.href = window.location.origin}>
                                <Typography component="span"
                                    sx={{
                                        fontSize: "50px",
                                        fontWeight: "600",
                                        color: "#4E3A67",
                                        fontFamily: "Work Sans, sans-serif"
                                    }}>
                                    Jobs
                                </Typography>
                                <Typography component="span"
                                    sx={{
                                        fontSize: "50px",
                                        color: "#4E3A67",
                                        fontFamily: "Work Sans, sans-serif"
                                    }}>
                                    Yahan
                                </Typography>
                            </Box>

                            <Stack direction="row" alignItems="center" justifyContent="center">
                                <Typography component="div" sx={{
                                    fontSize: "16px", color: "#FC9A7E", fontWeight: "600"
                                }}>
                                    Read More
                                </Typography>
                                <img height="16px" src={window.location.origin + "/assets/RightArrow.png"} alt="RightArrow" />
                            </Stack>
                        </Stack>
                        <Stack
                            direction="column"
                            gap={2}
                            sx={{
                                minheight: "277px",
                                background: "#F7F0FF",
                                border: "1px solid #E1D4F2",
                                borderRadius: "0px 0px 14px 14px",
                                padding: "20px",
                                height: "200px",

                            }}>
                            <Box>
                                <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67", fontWeight: "600" }}>
                                    For Sales Enquiries
                                </Typography>

                                <Typography component="div" sx={{ fontSize: "16px", color: "#4E3A67" }}>
                                    Call On: 1800-103-7344
                                </Typography>
                                <Typography component="div" sx={{ fontSize: "16px", color: "#4E3A67" }}>
                                    ( Toll Free: 9:30 AM to 6:30 PM)
                                </Typography>
                            </Box>

                            <Box>
                                <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67", fontWeight: "600" }}>
                                    Socials
                                </Typography>

                                <Typography component="div" sx={{ fontSize: "16px", color: "#4E3A67" }}>
                                    jobsyahan@gmail.com
                                </Typography>

                                <Box sx={{ margin: "10px 0px" }}>
                                    <SocialMedia />
                                </Box>
                            </Box>

                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
        </Box >
    </>)
}
export default AppliedCandidate;