import { Box, Container, Badge, Stack, Typography, Button, List, ListItem, ListItemText, TextField, Select, MenuItem, Slider } from "@mui/material";
import RecommendedJobs from "../../Pages/Home/Component/RecommendedJobs";
import Footer from "../../ThemeComponent/Common/Footer";
import SearchIcon from '@mui/icons-material/Search';
import { ThemeFInputDiv } from "../../utils/Theme";

import ThemeLabel from "../ThemeForms/ThemeLabel";
import SearchBar from "../SearchBar";
import CompanyLogo from "./CompanyLogo";
import { EmployerMenu, cities } from "../../utils/Data";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Filter from "../Filter"
const JobSearch = () => {

    const [city, setCity] = useState(" ");
    const [jobType, setJobType] = useState(" ");
    const [state, setState] = useState(" ");

    const searchJob = () => {

    }

    return (<>
        <Box className="jobSearchPage"
            sx={{ background: "#FAFAFA" }}>
            <Box sx={{ padding: "20px" }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" >
                    < CompanyLogo color="#000000" />
                </Stack>
            </Box>



            <SearchBar />
            <Stack direction="row" gap={2} sx={{ marginTop: "30px", padding: "30px" }}>
                <Box sx={{
                    width: "30%"
                }}>
                    <Filter />
                </Box>
                <Box sx={{ width: "70%" }}>
                    <RecommendedJobs></RecommendedJobs>

                </Box>
            </Stack>

            <Footer />
        </Box >
    </>)
}

export default JobSearch;