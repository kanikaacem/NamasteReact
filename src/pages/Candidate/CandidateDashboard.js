import { Box, Button, Avatar, Stack, List, ListItem, ListItemText, styled, Pagination, Typography } from "@mui/material";

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { useState, useEffect } from "react";

import { Link, Navigate } from "react-router-dom";

import { useSelector } from "react-redux";

import ProgressBar from "@ramonak/react-progress-bar";

import Filter from "../../ThemeComponent/Filter";
import JobComponent from "../../ThemeComponent/JobComponent";


const CandidateDashboard = () => {

    const api_url = useSelector(state => state.api_url);

    const CustomizeImage = styled(Box)({
        width: "500px",
        height: "250px",
    })

    const [candidateMenuSelected, setCandidateMenuSelected] = useState("jobs");
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(10);

    //Pagination 
    const IndexOfLastData = currentPage * dataPerPage;
    const IndexOfFirstData = IndexOfLastData - dataPerPage;
    const RecommendedJobs = data.slice(IndexOfFirstData, IndexOfLastData);

    useEffect(() => {
        const getData = async () => {
            let response = await fetch(api_url + "/api/job/getalljobs",
                {
                    method: "GET",
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json; charset=UTF-8'
                    },


                });
            if (response.ok) {
                response = await response.json();
                if (response.status == 1)
                    setData(response.data);

            }
        };

        getData(); // run it, run it
    }, []);

    return (<>
        <Stack direction="column" sx={{ padding: "0px 30px" }}>

            <Stack direction="row" gap={1}>
                <CustomizeImage>
                    <img src="./assets/CandidateDashboard.png" width="100%" height="100%" />
                </CustomizeImage>
                <CustomizeImage>
                    <img src="./assets/CandidateDashboard.png" width="100%" height="100%" />
                </CustomizeImage>
                <CustomizeImage>
                    <img src="./assets/CandidateDashboard.png" width="100%" height="100%" />
                </CustomizeImage>
            </Stack>
            <Stack direction="column" sx={{
                // position: "sticky",
                // top: "0px",
                // zIndex: "2789"
            }}>
                <Box sx={{ background: "#FFFFFF" }}>
                    <List sx={{ display: "flex", padding: "10px", cursor: "pointer" }}>
                        <ListItem sx={{ width: "fit-content" }}
                            className={candidateMenuSelected == "jobs" && "CandidateMenuSelected"}
                            onClick={() => { setCandidateMenuSelected("jobs") }} >
                            <ListItemText primary="Jobs" />
                        </ListItem>
                        {/* <ListItem sx={{ width: "fit-content" }}
                            className={candidateMenuSelected == "companies" && "CandidateMenuSelected"}
                            onClick={() => { setCandidateMenuSelected("companies") }} >
                            <ListItemText primary="Companies" />
                        </ListItem> */}
                    </List>
                </Box>
                <Box sx={{ background: "#D9D9D9", padding: "20px" }}>
                    <Filter />
                </Box>

            </Stack>

            {candidateMenuSelected == "jobs" && (<>
                <Stack direction="row" sx={{ padding: "20px", minHeight: `calc(100vh-70px)` }}>
                    <Box sx={{ width: "60%" }}>
                        <Typography component="h3" sx={{ fontSize: "30px", fontWeight: "600", color: "#2B1E44", margin: "10px 0px", marginLeft: "70px" }}>
                            My Job Feeds
                        </Typography>
                        <Stack >
                            <Box>
                                {
                                    RecommendedJobs.length > 0 ? RecommendedJobs.map((item) => {
                                        return (<>
                                            <JobComponent key={item.id} data={item} />
                                        </>)
                                    })
                                        : " There is no data present"
                                }
                            </Box>
                        </Stack>

                        <Box sx={{ position: "relative", top: "30px" }}>
                            <Pagination count={Math.ceil(data.length / dataPerPage)} page={currentPage} onChange={(event, value) => setCurrentPage(value)} />
                        </Box>
                    </Box>

                    <Box sx={{ width: "30%", padding: "20px" }}>
                        <Typography component="h3" sx={{ fontSize: "20px", fontWeight: "600", color: "#2B1E44", margin: "10px 0px" }}>
                            Profile Status
                        </Typography>
                        <Stack direction="column" gap={2}>
                            <Box sx={{ background: "#FFFFFF", borderRadius: "10px", minHeight: "30px", padding: "20px" }}>
                                <Stack direction="column" gap={2} alignItems="center">
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

                                    <Box>
                                        <Typography component="h3" sx={{ fontSize: "20px", fontWeight: "600", color: "#2B1E44" }}>
                                            User Name
                                        </Typography>
                                        <Typography component="h3" sx={{ fontSize: "14px", color: "#2B1E44" }}>
                                            user@gmail.com
                                        </Typography>
                                    </Box>

                                    <Stack justifyContent="space-between" direction="row" sx={{ width: "100%" }}>
                                        <Typography component="h3" sx={{ fontSize: "12px", fontWeight: "600", color: "#2B1E44" }}>
                                            Profile Progress
                                        </Typography>
                                        <Typography component="h3" sx={{ fontSize: "12px", fontWeight: "600", color: "#2B1E44" }}>
                                            50%
                                        </Typography>
                                    </Stack>

                                    <Box width="100%">
                                        <ProgressBar completed={50} />
                                    </Box>
                                    <Button variant="contained" onClick={() => window.location.href = window.location.href + "/update-profile"}>Update Profile</Button>
                                </Stack>
                            </Box>

                            <Link style={{ textDecoration: "none" }} to="/">
                                <Stack direction="row" gap={2} sx={{ cursor: "pointer", background: "#FFFFFF", borderRadius: "10px", minHeight: "30px", padding: "20px" }}>
                                    You can customize your job feed here <ChevronRightIcon></ChevronRightIcon>
                                </Stack>
                            </Link>
                        </Stack>

                    </Box>
                </Stack>

            </>)}




        </Stack>
    </>)
}

export default CandidateDashboard;