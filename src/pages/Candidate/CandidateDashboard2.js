import { getRequest } from "../../utils/ApiRequests";
import { getAllJobs } from "../../utils/ApiUrls";

import { Box, Button, Avatar, Stack, List, ListItem, ListItemText, styled, Pagination, Typography, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { useState, useEffect } from "react";

import { Link, useOutletContext } from "react-router-dom";

import { useSelector } from "react-redux";

import JobDescription from "../../ThemeComponent/JobDescription";
import RecommendedJobs from "../Home/Component/RecommendedJobs";
import Filter from "../../ThemeComponent/Filter";


const CandidateDashboard2 = () => {
    const [showJobDescription, setshowJobDescription] = useState(0);
    const api_url = useSelector(state => state.api_url);
    const CandidateMenuSelected = useSelector(state => state.CandidateMenuSelected);

    const user = useOutletContext();
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(10);

    //Pagination 
    const IndexOfLastData = currentPage * dataPerPage;
    const IndexOfFirstData = IndexOfLastData - dataPerPage;
    // const RecommendedJobs = data.slice(IndexOfFirstData, IndexOfLastData);

    useEffect(() => {
        const getData = async () => {
            let response = await getRequest(getAllJobs);

            if (response.status == 1)
                setData(response.data);
        };

        getData(); // run it, run it
    }, []);

    return (<>
       <Stack direction="column" gap={2} sx={{margin:"20px 50px"}}>
       <Stack
            direction="row"
            alignItems="center"
            gap={2} sx={{
                background: "#FFFFFF",
                border: "1px solid #E1D4F2",
                borderRadius: "14px",
                padding: "20px"
            }}>
            <Box>
                <img src={window.location.origin + "/assets/Morning.png"} alt="Morning" />
            </Box>
            <Typography component="box" sx={{
                fontSize: "24px",
                fontFamily: "Montserrat",
                fontWeight: "700",
                color: "#4E3A67"
            }}>
                Good Morning, Sarika !
            </Typography>

        </Stack>
        <Stack direction="column" sx={{
            padding: "0px 10px"
        }}>
            <Stack direction="row" gap={1} sx={{ minHeight: `calc(100vh-70px)` }}>

                <Box sx={{ width: "20%" }}>
                    <Filter/>
                </Box>


                <Box sx={{ width: "40%", padding: "0px 10px", minHeight: "100vh" }}>
                    <RecommendedJobs></RecommendedJobs>
                </Box>
                <Box sx={{ width: "50%", padding: "0px 10px" }}>
                  <JobDescription/>
                </Box>


            </Stack>






        </Stack>
       </Stack>
    </>)
}

export default CandidateDashboard2;