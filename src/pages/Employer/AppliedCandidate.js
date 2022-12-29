import { Box, Select, Stack, Typography, MenuItem } from "@mui/material";

import { JobFilter, CandidateFilter } from "../../utils/Data";

import CandidateComponent from "../../ThemeComponent/Common/CandidateComponent";
import ChatAssistant from "../../ThemeComponent/Common/ChatAssistant";
import ChatComponent from "../../ThemeComponent/Common/ChatComponent";


import { useSelector } from 'react-redux';

import { useState, useEffect } from "react";
const AppliedCandidate = () => {
    const user = localStorage.user && JSON.parse(localStorage.user);
    const api_url = useSelector(state => state.api_url);

    const [jobFilter, setJobFilter] = useState(" ");
    const [candidateFilter, setCandidateFilter] = useState(" ");
    const [data, setData] = useState();
    useEffect(() => {
        const getCandidates = async () => {
            let formData = new FormData();
            formData = {
                userid: user._id
            }
            let response = await fetch(api_url + "/api/job/getcandidatesonpostedjobs", {
                // Adding method type
                method: "POST",
                // Adding body or contents to send
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify(formData),
            })
            if (response.ok) {
                response = await response.json();
                if (response.status == 1) {
                    console.log(response);
                    setData(response.data);
                }

            }

        }
        getCandidates();
    }, [])
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
        </Stack>
    </>)
}
export default AppliedCandidate;