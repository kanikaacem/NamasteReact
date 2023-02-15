import { HomeCities } from '../utils/ApiUrls';
import { getRequest } from "../utils/ApiRequests";

import { Box, Stack, Button, Autocomplete, TextField } from '@mui/material';
import { Experience, SalaryCTC } from "../utils/Data";

import CustomizeSelect from "../ThemeComponent/CustomizeSelect";
import Error from './Common/Error';
import { useEffect, useRef, useState } from 'react';
const SearchBar = () => {
    const searchRef = useRef(null);
    const cityRef = useRef(null);
    const experienceRef = useRef(null);
    const ctcRef = useRef(null);
    const [cities, setCities] = useState([]);
    const [searchError, setSearchError] = useState(false);
    // const top100Films = ["hello ", "mongodb"];

    const searchJob = () => {
        let searchValue = searchRef.current.value;
        console.log(searchValue)
        // let cityValue = document.querySelector("#city").textContent;
        // let experienceValue = document.querySelector("#experience").textContent;
        // let ctcValue = document.querySelector("#ctc").textContent;
        if (searchValue === "")
            setSearchError(true);
        else
            window.location.href = window.location.origin + "/job?name=" + searchValue;
        // elif(cityValue != "")
        //     path = searchValue+"-"+cityValue;
        // elif(experienceValue != "")
        //     path = 
        // elif(ctcValue != "")
        // else path = "/job";

        // console.log(searchValue, cityValue, experienceValue, ctcValue)
        // let cityValue = cityRef.current.value;
        // let experienceValue = experienceRef.current.value;
        // let ctcValue = ctcRef.current.value;
        // console.log(searchValue, cityValue, experienceValue, ctcValue);
    }
    useEffect(() => {
        const getCities = async () => {
            let data = await getRequest(HomeCities);
            if (data.status === '1')
                setCities(data.data.sort());

        }
        getCities();

    }, []);
    return (<>
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // margin: '100px 0px',
            }}>
            <Stack
                direction={{ "lg": "row", "md": "column", "xs": "column" }}
                sx={{
                    boxSizing: "border-box",
                    width: { "lg": `calc(100vw - 420px)`, "md": " calc(100vw - 50px);", "xs": " calc(100vw - 50px)" },
                    // minWidth: { "lg": "1447px", "md": `calc(100vw - 20px)`, "xs": `calc(100vw - 20px)` },
                    height: "fit-content",
                    background: "#FFFFFF",
                    border: "3px solid #E1D4F2",
                    boxShadow: "0px 47px 52px #f4ecff",
                    borderRadius: "15px",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "20px",
                    padding: { "lg": " 10px 20px", "md": "20px", "xs": "20px" },
                }}
            >
                <Stack direction="column" gap={1} sx={{
                    width: { "lg": "500px", "md": "100%", "xs": "100%" }
                }}>
                    {/* <SearchIcon></SearchIcon> */}
                    <input
                        style={{
                            width: "100%"
                        }}
                        type="text" ref={searchRef} placeholder="Search" className='Search' />

                </Stack>

                <Box
                    sx={{
                        background: "#FFF7F5",
                        borderRadius: "11px",
                        border: " 1px solid rgba(255, 195, 177, 0.3)",
                        width: { "lg": "238px", "md": "100%", "xs": "100%" },
                        padding: "0px 10px"
                    }}>
                    {/* <CustomizeSelect ref={cityRef} placeholder="City" id_data="city" data={cities} /> */}
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={cities}
                        // sx={{ width: 300 }}
                        sx={{
                            // border: "1px solid blue",
                            "& .MuiOutlinedInput-root": {
                                // border: "1px solid yellow",
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
                        padding: "0px 10px"
                    }}>
                    <CustomizeSelect ref={experienceRef} placeholder="Experience" id_data="experience" data={Experience} />
                </Box>

                <Box
                    sx={{
                        background: "#FFF7F5",
                        borderRadius: "11px",
                        border: " 1px solid rgba(255, 195, 177, 0.3)",
                        width: { "lg": "238px", "md": "100%", "xs": "100%" },
                        padding: "0px 10px"
                    }}>
                    <CustomizeSelect ref={ctcRef} placeholder="CTC" id_data="ctc" data={SalaryCTC} />
                </Box>
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
            {searchError && <Box sx={{ margin: "10px 0px" }}>
                <Error text="Please select atleast one value" /></Box>}
        </Box >

        {/* <Box
            sx={{
                padding: "0px 20px",
                height: "fit-content",
                margin: '20px 0px',
                display: { md: "none", xs: "block" }
            }}>
            <Stack
                direction="column" gap={2}
                divider={<Divider orientation="horizontal" />}
                sx={{
                    padding: "20px"
                }}

            >
                <Stack direction="row">
                    <SearchIcon></SearchIcon>
                    <input
                        style={{ width: "500px" }}
                        type="text" ref={searchRef} placeholder="Search" className='Search' />
                    <span>|</span>
                    <CustomizeSelect ref={cityRef} placeholder="City" data={cities} />
                    <span>|</span>
                    <CustomizeSelect ref={experienceRef} placeholder="Experience" data={Experience} />
                    <span>|</span>
                    <CustomizeSelect ref={ctcRef} placeholder="CTC" data={Experience} />
                    <ThemeButtontype1 onClick={searchJob} > Search</ThemeButtontype1>

                </Stack>
            </Stack>
        </Box> */}
    </>)
}
export default SearchBar;