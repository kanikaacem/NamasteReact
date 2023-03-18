import { getAllPostedJobs } from "../../utils/ApiUrls";
import { postRequest } from "../../utils/ApiRequests";

import { Box, Stack, Select, MenuItem, Pagination, Typography } from "@mui/material";

import { JobFilter } from "../../utils/Data";
import ChatComponent from "../../ThemeComponent/Common/ChatComponent";
import JobComponent from "../../ThemeComponent/JobComponent";

import { useState, useEffect } from "react";

import ErrorPage from "../ErrorPage";
const PostedJobs = () => {

    const [jobFilter, setJobFilter] = useState(" ");
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(10);
    const [isDataLoaded, setIsDataLoaded] = useState(false);

    //Pagination 
    const IndexOfLastData = currentPage * dataPerPage;
    const IndexOfFirstData = IndexOfLastData - dataPerPage;
    const jobs = data.length > 0 && data.slice(IndexOfFirstData, IndexOfLastData);

    useEffect(() => {

        const getpostedjobs = async () => {
            try {
                let data = await postRequest(getAllPostedJobs);
                if (data.status === '0') {
                    setData([])
                    setIsDataLoaded(true);
                } else {
                    setIsDataLoaded(true);
                    setData(data.data);

                }
            } catch (err) {
                setData([]);
                setIsDataLoaded(true);

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
                            isDataLoaded && data && data.length <= 0 &&

                            <ErrorPage errorMessage="Data Not Present" />


                        }

                        {
                            isDataLoaded && data && data.length > 0 && jobs.map((item) => {
                                return (<>
                                    <JobComponent key={item._id} data={item} data_id={item._id} userType="employer" />
                                </>)
                            })
                        }
                    </Stack>
                    {data.length > 0 &&
                        <Box >
                            <Pagination count={data && Math.ceil(data.length / dataPerPage)} page={currentPage} onChange={(event, value) => setCurrentPage(value)} />
                        </Box>
                    }

                </Box>
            </Stack>
            <Box sx={{ width: "20%", display: { "lg": "block", "md": "none", "xs": "none" } }}>
                <ChatComponent />
            </Box>
        </Stack>

    </>)
}

export default PostedJobs;