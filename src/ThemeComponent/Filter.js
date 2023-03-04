import { HomeCities } from '../utils/ApiUrls';
import { getRequest } from "../utils/ApiRequests";
import {
    Box, Stack, Typography,
    Autocomplete, TextField, Button
} from "@mui/material";

import ThemeLabel from "./ThemeForms/ThemeLabel";
import { ThemeFInputDiv } from "../utils/Theme";

import { useState, useEffect } from "react";


const Filter = () => {

    useEffect(() => {
        const getCities = async () => {
            let data = await getRequest(HomeCities);
            if (data.status === '1')
                setCities(data.data.sort());

        }
        getCities();

    }, []);

    const [cities, setCities] = useState([]);

    return (<>
        <Box sx={{
            width: "100%",
            // minHeight: "729px",
            background: "#FFFFFF",
            border: "1px solid #E1D4F2",
            borderRadius: "19px",
            height: "fit-content"
        }}>
            <Box>
                <Stack direction="row" gap={2} alignItems="center" sx={{
                    padding: " 20px",
                    borderBottom: "1px solid #E1D4F2 "
                }}>
                    <Box>
                        <img src={window.location.origin + '/assets/JS3.png'} alt="JS3" />
                    </Box>

                    <Typography component="div"
                        sx={{
                            fontSize: "24px",
                            color: "#4E3A67",
                            fontFamily: "Work Sans, sans-serif",
                            fontWeight: "600"
                        }}>
                        Filters
                    </Typography>
                </Stack>
            </Box>
            <Box sx={{ padding: "20px" }}>
                <Stack direction="column" gap={2} alignItems="center" sx={{
                    padding: " 20px",
                }}>
                    <ThemeFInputDiv sx={{ width: "100%" }}>
                        <ThemeLabel LableFor="job_type" LableText="Job Type" />
                        <input
                            style={{
                                background: "#FFFFFF",
                                border: " 1px solid #E7D5FF",
                                borderRadius: "11px",
                                padding: "20px",
                                fontSize: "16px"
                            }} type="text" name="jobType" placeholder="Job Type" />
                    </ThemeFInputDiv>

                    <ThemeFInputDiv sx={{ width: "100%" }}>
                        <ThemeLabel LableFor="city" LableText="City" />
                        <Box
                            sx={{
                                background: " rgb(255, 255, 255)",
                                border: " 1px solid rgb(231, 213, 255)",
                                borderRadius: "11px",
                                fontSize: "16px",
                                padding: "8px"
                            }}>
                            <Autocomplete
                                disablePortal
                                id="city"
                                options={cities}
                                sx={{
                                    "& .MuiOutlinedInput-root": {
                                        borderRadius: "0",
                                        padding: "2px",
                                        border: "none"
                                    },
                                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                                        border: "none"
                                    }
                                }}
                                renderInput={(params) => <TextField
                                    placeholder='Cities'
                                    {...params} />}
                            />
                        </Box>

                    </ThemeFInputDiv>


                    {/* <ThemeFInputDiv sx={{ width: "100%" }}>
                        <ThemeLabel LableFor="area" LableText="Area" />
                        <input
                            style={{
                                background: "#FFFFFF",
                                border: " 1px solid #E7D5FF",
                                borderRadius: "11px",
                                padding: "20px",
                                fontSize: "16px"
                            }} type="text" name="area" placeholder="Area" />

                    </ThemeFInputDiv> */}


                    {/* 
                <ThemeFInputDiv sx={{ width: "100%" }} className="SalarySlider">
                    <ThemeLabel LableFor="desired_salary" LableText="Desired Salary" />
                    <Slider
                        aria-label="Salary"
                        defaultValue={500}
                        valueLabelDisplay="auto"
                        step={2000}
                        marks
                        min={0}
                        max={10000}
                    />
                </ThemeFInputDiv>

                <Stack direction="row" gap={8}>
                    <Typography component="div"
                        sx={{
                            fontSize: "16px",
                            color: "#4E3A67",
                            fontFamily: "Montserrat",
                            fontWeight: "500"
                        }}>
                        0
                    </Typography>
                    <Typography component="div"
                        sx={{
                            fontSize: "16px",
                            color: "#4E3A67",
                            fontFamily: "Montserrat",
                            fontWeight: "500"
                        }}>
                        2K
                    </Typography>
                    <Typography component="div"
                        sx={{
                            fontSize: "16px",
                            color: "#4E3A67",
                            fontFamily: "Montserrat",
                            fontWeight: "500"
                        }}>
                        4K
                    </Typography>
                    <Typography component="div"
                        sx={{
                            fontSize: "16px",
                            color: "#4E3A67",
                            fontFamily: "Montserrat",
                            fontWeight: "500"
                        }}>
                        6K
                    </Typography>
                    <Typography component="div"
                        sx={{
                            fontSize: "16px",
                            color: "#4E3A67",
                            fontFamily: "Montserrat",
                            fontWeight: "500"
                        }}>
                        8K
                    </Typography>
                    <Typography component="div"
                        sx={{
                            fontSize: "16px",
                            color: "#4E3A67",
                            fontFamily: "Montserrat",
                            fontWeight: "500"
                        }}>
                        10K
                    </Typography>

                </Stack> */}

                    <ThemeFInputDiv>
                        <Button
                            sx={{
                                maxWidth: "419px",
                                height: "54px",
                                background: "#4E3A67",
                                border: "1px solid #E7D5FF",
                                borderRadius: "7px",
                                color: "#FFFFFF",
                                "&:hover": {
                                    maxWidth: "419px",
                                    height: "54px",
                                    background: "#4E3A67",
                                    border: "1px solid #E7D5FF",
                                    borderRadius: "7px",
                                    color: "#FFFFFF",
                                }
                            }}> Jobs for Women</Button>
                        <Button
                            sx={{
                                maxWidth: "419px",
                                height: "54px",
                                background: " #FFFFFF",
                                border: "1px solid #E7D5FF",
                                borderRadius: "7px",
                                color: '#3A2D49',
                                "&:hover": {
                                    maxWidth: "419px",
                                    height: "54px",
                                    background: " #FFFFFF",
                                    border: "1px solid #E7D5FF",
                                    borderRadius: "7px",
                                    color: '#3A2D49'
                                }
                            }}> Jobs for Freshers</Button>
                    </ThemeFInputDiv>


                </Stack>
            </Box>
        </Box></>)
}

export default Filter;