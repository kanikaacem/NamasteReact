import { Box, Stack, Typography, Tabs, Tab } from "@mui/material";

import CandidateComponent from "../../ThemeComponent/Common/CandidateComponent";
import ChatAssistant from "../../ThemeComponent/Common/ChatAssistant";
import ChatComponent from "../../ThemeComponent/Common/ChatComponent";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const CandidateRecommendation = () => {
    const [value, setValue] = useState(0);

    const id = useParams();

    // useEffect(() => {
    //     const getCandidates = async () => {
    //         let formData = new FormData();
    //         formData = {
    //             jon
    //         }
    //         let response = await fetch(api_url + "/api/job/postjob", {
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
    //             }

    //         }

    //     }
    //     getCandidates();
    // })

    return (<>
        <Stack direction="row" gap={2} >
            <Stack direction="column" gap={2} className="JobRecommened Candidates" sx={{ padding: '20px', width: "80%" }}>
                <Box>
                    <Typography component="div" sx={{ fontSize: "20px", fontWeight: "600" }}>
                        Android Developer - Kotlin/Java
                    </Typography>

                    <Typography component="div" sx={{ fontSize: "16px" }}>
                        Noida | 4-10 yrs
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
                        <Tab label="Recommended Applications (10)" />
                        <Tab label="Applications (107)" />
                    </Tabs>
                </Box>

                {
                    value == 1 && (<>
                        <CandidateComponent />
                        <CandidateComponent />
                        <CandidateComponent />
                        <CandidateComponent />
                        <CandidateComponent />
                        <CandidateComponent />
                    </>)
                }
                {
                    value == 0 && (<>
                        <CandidateComponent />
                        <CandidateComponent />

                    </>)

                }
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
        </Stack>
    </>)
}

export default CandidateRecommendation;