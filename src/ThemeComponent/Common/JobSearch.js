import { Box, Container, Badge, Stack, Typography, Button, List, ListItem, ListItemText, TextField, Select, MenuItem, Slider } from "@mui/material";
import RecommendedJobs from "../../Pages/Home/Component/RecommendedJobs";
import Footer from "../../ThemeComponent/Common/Footer";
import SearchIcon from '@mui/icons-material/Search';
import { ThemeFInputDiv } from "../../utils/Theme";

import ThemeLabel from "../ThemeForms/ThemeLabel";
import CompanyLogo from "./CompanyLogo";
import { EmployerMenu, cities } from "../../utils/Data";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const JobSearch = () => {
    // let { searchElement } = useParams();
    // console.log(searchElement)
    const [city, setCity] = useState(" ");
    const [state, setState] = useState(" ");
    const searchJob = () => {

    }
    return (<>
        <Box className="jobSearchPage"
            sx={{ background: "#FAFAFA" }}>
            <Box sx={{ padding: "20px" }}>
                <Stack direction="row" justifyContent="space-between" alignItems="center" >
                    < CompanyLogo color="#000000" />
                    {/* <Box sx={{ width: "50%" }} className="JobSearchMenu">
                        <List sx={{ display: "flex" }}>

                            {EmployerMenu.map((item) => {
                                return (<>
                                    <ListItem
                                        button
                                        key={item.id} to={item.url}
                                        //  component={NavLink}
                                        className="menu"
                                        id={item.id}
                                    // onClick={() => { dispatch({ type: "CHANGE_EMPLOYEE_MENU", payload: item.value }) }} 
                                    >
                                        <ListItemText primary={item.MenuName} />
                                    </ListItem>
                                </>)
                            })}

                        </List>
                    </Box> */}
                    {/* <Stack direction="row" gap={2} sx={{ width: "15%" }}>
                        <Box sx={{
                            width: "59px",
                            height: "59px",
                            display: "flex",
                            border: "2px solid rgba(142, 142, 142, 0.25)",
                            borderRadius: "50%",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <img src={window.location.origin + "/assets/JS1.png"} alt="JS1" width="40px" height="40px" />
                        </Box>
                        <Box sx={{
                            width: "59px",
                            height: "59px",
                            display: "flex",
                            border: "2px solid rgba(142, 142, 142, 0.25)",
                            borderRadius: "50%",
                            alignItems: "center"
                        }}>
                            <img src={window.location.origin + "/assets/JS2.png"} alt="JS2" />
                        </Box>


                    </Stack> */}
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

            <Stack direction="row" sx={{ marginTop: "30px" }}>
                <Box sx={{ width: "30%", padding: "50px" }}>
                    <Box sx={{
                        width: "534px",
                        height: "729px",
                        background: "#FFFFFF",
                        border: "1px solid #E1D4F2",
                        borderRadius: "19px",
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

                                <Stack direction="row" gap={1} sx={{ width: "100%" }}>
                                    <ThemeFInputDiv sx={{ width: "40%" }}>
                                        <ThemeLabel LableFor="city" LableText="City" />
                                        <Select
                                            classNamePrefix="react-select"
                                            labelId="demo-simple-select-label"
                                            name="city"
                                            value={city}
                                            label="Age"
                                            onChange={(event) => {
                                                setCity(event.target.value);
                                            }}
                                            sx={{
                                                background: " #FFFFFF",
                                                border: "1px solid #EAEAEA",
                                                boxShadow: "0px 10px 11px rgb(0 0 0 / 2%)",
                                                borderRadius: "7px",
                                                fontSize: "16px",
                                                fontamily: 'Montserrat',
                                                BorderBottom: 'none'
                                            }}
                                            disableUnderline
                                        >
                                            <MenuItem value=" ">Select City</MenuItem>
                                            {cities.map((item) =>
                                                <MenuItem value={item.value} key={item.id}>{item.name}</MenuItem>
                                            )}
                                        </Select>
                                    </ThemeFInputDiv>


                                    <ThemeFInputDiv sx={{ width: "60%" }}>
                                        <ThemeLabel LableFor="area" LableText="Area" />
                                        <input
                                            style={{
                                                background: "#FFFFFF",
                                                border: " 1px solid #E7D5FF",
                                                borderRadius: "11px",
                                                padding: "20px",
                                                fontSize: "16px"
                                            }} type="text" name="area" placeholder="Area" />

                                    </ThemeFInputDiv>
                                </Stack>

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

                                </Stack>

                                <ThemeFInputDiv>
                                    <Button
                                        sx={{
                                            width: "419px",
                                            height: "54px",
                                            background: "#4E3A67",
                                            border: "1px solid #E7D5FF",
                                            borderRadius: "7px",
                                            color: "#FFFFFF",
                                            "&:hover": {
                                                width: "419px",
                                                height: "54px",
                                                background: "#4E3A67",
                                                border: "1px solid #E7D5FF",
                                                borderRadius: "7px",
                                                color: "#FFFFFF",
                                            }
                                        }}> Jobs for Women</Button>
                                    <Button
                                        sx={{
                                            width: "419px",
                                            height: "54px",
                                            background: " #FFFFFF",
                                            border: "1px solid #E7D5FF",
                                            borderRadius: "7px",
                                            color: '#3A2D49',
                                            "&:hover": {
                                                width: "419px",
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
                    </Box>
                </Box>
                <Box sx={{ width: "70%", padding: "30px" }}>
                    <RecommendedJobs></RecommendedJobs>

                </Box>
            </Stack>

            <Footer />
        </Box >
    </>)
}

export default JobSearch;