import { Box, Container, Badge, Stack, Typography, Button, List, ListItem, ListItemText, TextField, Select, MenuItem, Slider } from "@mui/material";
import RecommendedJobs from "../../pages/Home/Component/RecommendedJobs";
import Footer from "../../ThemeComponent/Common/Footer";
import SearchIcon from '@mui/icons-material/Search';
import { ThemeFInputDiv } from "../../utils/Theme";

import ThemeLabel from "../ThemeForms/ThemeLabel";
import CompanyLogo from "./CompanyLogo";
import { EmployerMenu, cities } from "../../utils/Data";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Filter from "../Filter"
const JobSearch = () => {
   
    const [city, setCity] = useState(" ");
    const [jobType,setJobType] = useState(" ");
    const [state, setState] = useState(" ");

    const searchJob = () =>{

    }
   
    return (<>
        <Box className="jobSearchPage"
            sx={{ background: "#FAFAFA" }}>
            <Box sx={{ padding: "20px" }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" >
                    < CompanyLogo color="#000000" />
                </Stack>
            </Box>


            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <Stack
                    direction="row"
                    sx={{
                        boxSizing: "border-box",
                        width: "1447px",
                        height: "80px",
                        background: "#FFFFFF",
                        border: "3px solid #E1D4F2",
                        boxShadow: "0px 47px 52px #f4ecff",
                        borderRadius: "15px",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "20px",
                        padding: " 0px 20px",
                    }}
                >
                    <Stack direction="row" gap={1} sx={{ width: "100%" }}>
                        <input
                            style={{ width: "500px" }}
                            type="text" placeholder="Search the best Job you Want" className='Search' />
                    </Stack>

                    <Button
                        sx={{
                            background: "#2B1E44",
                            width: "56px",
                            height: "56px",
                            background: "#4E3A67",
                            borderRadius: "11px",
                            "&:hover": {
                                background: "#2B1E44",
                                width: "56px",
                                height: "56px",
                                background: "#4E3A67",
                                borderRadius: "11px"
                            }
                        }}
                        type="button" onClick={searchJob}>
                        <img src={window.location.origin + "/assets/g2.png"} alt="g2" />
                    </Button>
                </Stack>
            </Box>

            <Stack direction="row" gap={2} sx={{ marginTop: "30px",padding:"30px" }}>
                <Box sx={{
                    width:"30%"
                }}>
                     <Filter/>
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