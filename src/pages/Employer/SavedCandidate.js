import { Box, Select, Stack, Typography, MenuItem } from "@mui/material";

import { JobFilter, CandidateFilter } from "../../utils/Data";

import CandidateComponent from "../../ThemeComponent/Common/CandidateComponent";
import ChatAssistant from "../../ThemeComponent/Common/ChatAssistant";
import ChatComponent from "../../ThemeComponent/Common/ChatComponent";

import { useState } from "react";
const SavedCandidate = () => {
    const [jobFilter, setJobFilter] = useState(" ");
    const [candidateFilter, setCandidateFilter] = useState(" ");

    return (<>

        <Stack direction="row" gap={2}>
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
                    <CandidateComponent />
                    <CandidateComponent />
                    <CandidateComponent />
                    <CandidateComponent />
                </Stack>
            </Stack>

            <Box >
                <ChatAssistant />
                <ChatComponent />
                <ChatComponent />
            </Box>
        </Stack></>)
}
export default SavedCandidate;