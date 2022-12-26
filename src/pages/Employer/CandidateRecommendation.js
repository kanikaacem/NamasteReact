import { Box, Badge, Stack, Typography, Tabs, Tab } from "@mui/material";

import ChatAssistant from "../Common/ChatAssistant";
import ChatComponent from "../Common/ChatComponent";

import { useState } from "react";
const CandidateRecommendation = () => {
    const [value, setValue] = useState(0);

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }
    const handleChange = (event) => {
        console.log(event.target.getAttribute("data-value"));
        // setValue(newValue)
    }

    return (<>
        <Stack direction="row" gap={1} >
            <Box className="JobRecommened Candidates" sx={{ padding: '20px', width: "80%" }}>
                <Box>
                    <Typography component="div" sx={{ fontSize: "20px", fontWeight: "600" }}>
                        Android Developer - Kotlin/Java
                    </Typography>

                    <Typography component="div" sx={{ fontSize: "16px" }}>
                        Noida | 4- 10 yrs
                    </Typography>

                </Box>

                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Reccommended Candidates (10)" data-value="0" aria-controls={`simple-tabpanel-0`} />
                        <Tab label="Applications (107)" data-value="1" aria-controls={`simple-tabpanel-1`} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        Item One
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Item Two
                    </TabPanel>
                </Box>
            </Box>

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