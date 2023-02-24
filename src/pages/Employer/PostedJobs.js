import { getAllPostedJobs } from "../../utils/ApiUrls";
import { postRequest } from "../../utils/ApiRequests";

import { Box, Stack, Select, MenuItem, Tooltip, IconButton, Pagination, Typography } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import Moment from 'react-moment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { JobFilter } from "../../utils/Data";

import ButtonType2 from "../../ThemeComponent/Common/ButtonType2";
import ChatAssistant from "../../ThemeComponent/Common/ChatAssistant";
import ChatComponent from "../../ThemeComponent/Common/ChatComponent";
import JobComponent from "../../ThemeComponent/JobComponent";

import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const PostedJobs = () => {
    const user = localStorage.user && JSON.parse(localStorage.user);
    const api_url = useSelector(state => state.api_url);

    const [jobFilter, setJobFilter] = useState(" ");
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(10);

    //Pagination 
    const IndexOfLastData = currentPage * dataPerPage;
    const IndexOfFirstData = IndexOfLastData - dataPerPage;
    const jobs = data.length > 0 && data.slice(IndexOfFirstData, IndexOfLastData);

    useEffect(() => {

        const getpostedjobs = async () => {
            try {
                let data = await postRequest(getAllPostedJobs);
                console.log(data);
                if (data.status === '0') {
                    setData([])
                } else {
                    setData(data.data);

                }
                // console.log(data);
            } catch (err) {
                setData([]);

            }

        };
        getpostedjobs();

    }, []);

    return (<>
        <Stack direction="row" sx={{ padding: "20px" }} className="PostedJobPage" gap={2}>
            <Stack sx={{ width: { "lg": "80%", "md": "100%", "xs": "100%" } }} gap={1}>
                <Stack direction="row" justifyContent="space-between">
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
                <Box sx={{ minHeight: 500, width: '100%' }}>
                    <Stack direction="column" gap={2}>
                        {
                            jobs.length > 0 && jobs.map((item) => {
                                return (<>
                                    <JobComponent key={item._id} data={item} data_id={item._id} userType="employer" />
                                </>)
                            })
                            // :
                            // <Typography component="box" sx={{
                            //     fontSize: "24px",
                            //     fontWeight: "600",
                            //     color: "#4E3A67"
                            // }}>
                            //     You haven't posted any Job yet.
                            // </Typography>

                        }
                    </Stack>
                    {jobs.length > 0 &&
                        <Box >
                            <Pagination count={data && Math.ceil(data.length / dataPerPage)} page={currentPage} onChange={(event, value) => setCurrentPage(value)} />
                        </Box>
                    }
                    {/* {jobData && <DataGrid
                        getRowHeight={() => 'auto'}
                        sx={{ background: "#FFFFFF" }}
                        rows={jobData}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        getRowId={(jobData) => jobData._id}

                    />} */}
                </Box>
            </Stack>
            <Box sx={{ width: "20%", display: { "lg": "block", "md": "none", "xs": "none" } }}>
                <ChatComponent />
            </Box>
        </Stack>

    </>)
}

export default PostedJobs;