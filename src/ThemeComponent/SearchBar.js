import { HomeCities } from '../utils/ApiUrls';
import { getRequest } from "../utils/ApiRequests";

import { Box, Stack, Button, Autocomplete, TextField } from '@mui/material';
import { ExperienceHome, CTCHome } from "../utils/Data";

import ClickAwayListener from '@mui/base/ClickAwayListener';
import Error from './Common/Error';

import { useEffect, useState } from 'react';
const SearchBar = ({ name, city, exp, ctc }) => {

    const [cities, setCities] = useState([]);
    const [searchError, setSearchError] = useState(false);
    const [menubar, setMenuBar] = useState(false);
    const [autoData, setAutoData] = useState([]);

    const [value, setValue] = useState();

    const searchJob = () => {
        let searchValue = document.querySelector("#Search").value;
        let cityValue = document.querySelector("#city").value;
        let experienceValue = document.querySelector("#experience").value;
        let ctcValue = document.querySelector("#ctc").value;
        let searchPath = window.location.origin + "/job?";
        if (searchValue === "")
            setSearchError(true);
        else {
            searchPath = searchPath + "name=" + searchValue;
            if (cityValue !== "")
                searchPath = searchPath + "&city=" + cityValue;
            if (experienceValue !== "")
                searchPath = searchPath + "&exp=" + experienceValue.split(" ")[0];
            if (ctcValue !== "")
                searchPath = searchPath + "&ctc=" + ctcValue.split(" ")[0];
            window.location.href = searchPath;
        }

    }
    useEffect(() => {
        setValue(name)
        const getCities = async () => {
            let data = await getRequest(HomeCities);
            if (data.status === '1')
                setCities(data.data.sort());

        }
        getCities();

    }, [name, city, exp, ctc,]);

    const searchData = async (value) => {

        let response = await getRequest("https://backend.jobsyahan.com/api/file/skill?q=" + value);
        console.log(response.data);
        setAutoData(response.data);
        setMenuBar(true);

    }
    return (<>

        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                zIndex: { "xs": 0, "sm": 0, "md": 38998, "lg": 38998, "xl": 38998 }
            }}>
            <Stack
                direction="row"
                sx={{
                    boxSizing: "border-box",
                    width: { "lg": `calc(100vw - 420px)`, "md": " calc(100vw - 50px);", "xs": " calc(100vw - 50px)" },
                    height: "fit-content",
                    background: "#FFFFFF",
                    border: { "xs": "1px solid #E1D4F2", "sm": "3px solid #E1D4F2", "md": "3px solid #E1D4F2", "lg": "3px solid #E1D4F2", "xl": "3px solid #E1D4F2" },
                    boxShadow: { "lg": "0px 47px 52px #f4ecff", "md": "none", "xs": "none" },
                    borderRadius: "15px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "20px",
                    padding: { "lg": " 10px 20px", "md": "20px", "xs": "8px" },
                    zIndex: 3989
                }}
            >
                <Stack direction="column" gap={1} sx={{
                    position: "relative",
                    width: { "lg": "500px", "md": "100%", "xs": "100%" }
                }}>
                    <input
                        style={{
                            width: "100%",
                            fontSize: "16px"
                        }}
                        id="Search"
                        type="text" placeholder="Search" className='Search'
                        value={value}
                        onChange={
                            (event) => {
                                searchData(event.target.value)
                                setValue(event.target.value)

                            }
                        } />


                    {menubar && autoData && autoData != "no record please enter some word" && <>
                        <ClickAwayListener onClickAway={() => setAutoData(false)}>

                            <Box
                                sx={{
                                    position: "absolute",
                                    top: { "xs": "40px", "sm": "60px", "md": "60px", "lg": "60px", "xl": "60px" },
                                    background: "#FFFFFF",
                                    padding: { "xs": "5px", "sm": "20px", "md": "20px", "lg": "20px", "xl": "20px" },
                                    maxHeight: "300px",
                                    zIndex: "34",
                                    boxShadow: "0px 47px 52px #f4ecff",
                                    border: { "xs": "1px solid #E1D4F2", "sm": "3px solid #E1D4F2", "md": "3px solid #E1D4F2", "lg": "3px solid #E1D4F2", "xl": "3px solid #E1D4F2" },

                                    borderRadius: "11px",
                                    overflowY: "scroll",
                                    width: "100%",
                                    left: { "xs": "-8px", "sm": "-19px", "md": "-19px", "lg": "-19px", "xl": "-19px" }
                                }}>
                                {autoData && autoData.length <= 0 ? "No record found" : autoData.map((item) => {
                                    return (<>
                                        <Box sx={{
                                            padding: { "xs": "10px", "sm": "20px", "md": "20px", "lg": "20px", "xl": "20px" },
                                            borderBottom: "1px solid #E1D4F2",
                                            cursor: "pointer",
                                            fontSize: { "xs": "10px", "md": "16px", "sm": "16px", "lg": "16px", "xl": "16px" }

                                        }}
                                            onClick={() => {
                                                setValue(item)
                                                setMenuBar(false)
                                            }}> {item}</Box></>)
                                })}

                            </Box>
                        </ClickAwayListener>
                    </>

                    }

                </Stack>

                <Box
                    sx={{
                        background: "#FFF7F5",
                        borderRadius: "11px",
                        border: " 1px solid rgba(255, 195, 177, 0.3)",
                        width: { "lg": "238px", "md": "100%", "xs": "100%" },
                        padding: "0px 10px",
                        display: { "xs": "none", "sm": "block", "md": "block", "lg": "block", "xl": "block" }
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

                <Box
                    sx={{
                        background: "#FFF7F5",
                        borderRadius: "11px",
                        border: " 1px solid rgba(255, 195, 177, 0.3)",
                        width: { "lg": "238px", "md": "100%", "xs": "100%" },
                        padding: "0px 10px",
                        display: { "xs": "none", "sm": "block", "md": "block", "lg": "block", "xl": "block" }
                    }}>
                    <Autocomplete
                        disablePortal
                        id="experience"
                        options={ExperienceHome}

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
                            placeholder='Experience'
                            {...params} />} />
                </Box>

                <Box
                    sx={{
                        background: "#FFF7F5",
                        borderRadius: "11px",
                        border: " 1px solid rgba(255, 195, 177, 0.3)",
                        width: { "lg": "238px", "md": "100%", "xs": "100%" },
                        padding: "0px 10px",
                        display: { "xs": "none", "sm": "block", "md": "block", "lg": "block", "xl": "block" }
                    }}>
                    <Autocomplete
                        disablePortal
                        id="ctc"
                        options={CTCHome}
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
                            placeholder='CTC'
                            {...params} />} />
                </Box>
                <Button
                    sx={{
                        background: "#2B1E44",
                        width: { "xs": "30px", "sm": "56px", "md": "56px", "lg": "56px", "xl": "56px" },
                        height: { "xs": "30px", "sm": "56px", "md": "56px", "lg": "56px", "xl": "56px" },
                        background: "#4E3A67",
                        borderRadius: "11px",
                        "&:hover": {
                            background: "#2B1E44",
                            width: { "xs": "30px", "sm": "56px", "md": "56px", "lg": "56px", "xl": "56px" },
                            height: { "xs": "30px", "sm": "56px", "md": "56px", "lg": "56px", "xl": "56px" },
                            background: "#4E3A67",
                            borderRadius: "11px"
                        }
                    }}
                    type="button" onClick={searchJob}>
                    <Box sx={{ width: { "xs": "10px", "md": "25px", "sm": "10px", "lg": "25px", "xl": "25px" } }}>
                        <img src={window.location.origin + "/assets/g2.png"} alt="g2" width="100%" />
                    </Box>
                </Button>

            </Stack>
            {searchError && <Box sx={{ margin: "10px ", width: { "lg": `calc(100vw - 420px)`, "md": " calc(100vw - 50px);", "xs": " calc(100vw - 50px)" } }}>
                <Error text="Please enter keywords to search relevant jobs" /></Box>}
        </Box >

    </>)
}
export default SearchBar;