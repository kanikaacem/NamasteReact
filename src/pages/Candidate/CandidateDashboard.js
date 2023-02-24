import { getRequest } from "../../utils/ApiRequests";
import { getAllJobs } from "../../utils/ApiUrls";

import { Box, Button, Avatar, Stack, List, ListItem, ListItemText, styled, Pagination, Typography, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { useState, useEffect } from "react";

import { Link, useOutletContext } from "react-router-dom";

import { useSelector } from "react-redux";
import CandidateHome from "./CandidateHome";


const CandidateDashboard = () => {
    const CandidateMenuSelected = useSelector(state => state.CandidateMenuSelected);

    return (<>
        <Stack direction="column" sx={{
            padding: "0px 10px"
        }}>

            {CandidateMenuSelected === "home" && (<><CandidateHome /></>)}
        </Stack>
    </>)
}

export default CandidateDashboard;