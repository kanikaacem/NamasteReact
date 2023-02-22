import { getRequest } from "../../utils/ApiRequests";
import { getAllJobs } from "../../utils/ApiUrls";

import { Box, Button, Avatar, Stack, List, ListItem, ListItemText, styled, Pagination, Typography, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { useState, useEffect } from "react";

import { Link, useOutletContext } from "react-router-dom";

import { useSelector } from "react-redux";
import CandidateHome from "./CandidateHome";

import PersonalInformation2 from "../../ThemeComponent/ThemeForms/PersonalInformation2";

const CandidateDashboard = () => {
    const CandidateMenuSelected = useSelector(state => state.CandidateMenuSelected);

    // const user = useOutletContext();
    // const [data, setData] = useState([]);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [dataPerPage, setDataPerPage] = useState(10);

    //Pagination 
    // const IndexOfLastData = currentPage * dataPerPage;
    // const IndexOfFirstData = IndexOfLastData - dataPerPage;
    // const RecommendedJobs = data.slice(IndexOfFirstData, IndexOfLastData);

    return (<>
        <Stack direction="column" sx={{
            padding: "0px 10px"
        }}>
            {/* {CandidateMenuSelected === "home" && (<>
                <Box sx={{ width: "50%", margin: "0 auto" }} >
                    <PersonalInformation2 /></Box></>)} */}
            {CandidateMenuSelected === "home" && (<><CandidateHome /></>)}
            {/* {CandidateMenuSelected === "top_company_jobs" && (<><DeliverRiderForm /></>)} */}
        </Stack>
    </>)
}

export default CandidateDashboard;