import { Box, Container, Stack, Select, MenuItem, Tooltip, IconButton } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import Moment from 'react-moment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { JobFilter } from "../../utils/Data";
import { useEffect } from "react";

import { useSelector } from "react-redux";
import { useState } from "react";

const PostedJobs = () => {
    const user = localStorage.user && JSON.parse(localStorage.user);
    const api_url = useSelector(state => state.api_url);

    const [jobFilter, setJobFilter] = useState(" ");
    const [jobData, setJobData] = useState([]);
    const columns = [

        {
            field: 'createdAt',
            headerName: 'Created On',
            width: 250,
            renderCell: (params) => {
                return (<>
                    <Box>
                        <Moment format="DD/MM/YYYY">
                            {params.row.createdat}
                        </Moment>
                    </Box></>)
            }

        },
        {
            field: "job_title",
            headerName: 'Job Title',
            width: 250,
            renderCell: (params) => {
                return (<>
                    <Stack>
                        <Box> {params.row.title}</Box>
                        <Stack>
                            <Stack direction="row" gap={2}>
                                <Box>
                                    {params.row.experience} Years
                                </Box>
                                <Box>
                                    {params.row.location}
                                </Box>
                            </Stack>
                        </Stack>
                    </Stack>
                </>)
            }
        },
        {
            field: 'job_status',
            headerName: 'Status',
            width: 250,
            renderCell: (params) => {
                return (<>
                    <Box> {params.row.approvejobs == "false" && "Under Review"}</Box>
                </>
                )
            }
        },
        {
            field: 'activity',
            headerName: 'Activity',
            width: 250,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 150,
            renderCell: (params) => {
                return (<>
                    <Stack direction="row">
                        <Tooltip title="View" >
                            <IconButton>
                                <VisibilityIcon onClick={() => window.location.href = "job-description/" + params.row._id} />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Edit">
                            <IconButton>
                                <EditIcon />
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Delete">
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                        </Tooltip>

                    </Stack>
                </>)
            }
        }


    ];


    useEffect(() => {
        const getpostedjobs = async () => {
            // if (jobFilter == " ") {
            //     api_url = api_url + "/api/job/getpostedjobs";
            // }
            let data = await fetch(api_url + "/api/job/getpostedjobs", {
                method: "POST",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    userid: user._id

                }),
            });
            if (data.ok) {
                data = await data.json();
                console.log(data)
                setJobData(data.data)

            }
        };
        getpostedjobs();

    }, []);

    return (<>
        <Box sx={{ padding: "20px" }}>
            <Container>
                <Box>
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
                </Box>
                <Box sx={{ height: 400, width: '100%', marginTop: "50px" }}>
                    {jobData && <DataGrid
                        rows={jobData}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        getRowId={(jobData) => jobData._id}

                    />}
                </Box>
            </Container>
        </Box>

    </>)
}

export default PostedJobs;