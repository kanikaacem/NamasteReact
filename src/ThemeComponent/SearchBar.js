import { Box, Stack, Button } from '@mui/material';
import { cities, Experience, SalaryCTC } from "../utils/Data";

import SearchIcon from '@mui/icons-material/Search';
import CustomizeSelect from "../ThemeComponent/CustomizeSelect";
import { ThemeButtontype1 } from '../utils/Theme';
import { useRef } from 'react';
const SearchBar = () => {
    const searchRef = useRef(null);
    const cityRef = useRef(null);
    const experienceRef = useRef(null);
    const ctcRef = useRef(null);

    const searchJob = () => {
        let searchValue = searchRef.current.value;
        let cityValue = document.querySelector("#city").textContent;
        let experienceValue = document.querySelector("#experience").textContent;
        let ctcValue = document.querySelector("#ctc").textContent;
        // if (searchValue != "")
        //     path = searchValue;
        // elif(cityValue != "")
        //     path = searchValue+"-"+cityValue;
        // elif(experienceValue != "")
        //     path = 
        // elif(ctcValue != "")
        // else path = "/job";
        window.location.href = window.location.origin + "/job";
        // console.log(searchValue, cityValue, experienceValue, ctcValue)
        // let cityValue = cityRef.current.value;
        // let experienceValue = experienceRef.current.value;
        // let ctcValue = ctcRef.current.value;
        // console.log(searchValue, cityValue, experienceValue, ctcValue);
    }
    return (<>
        <Box
            sx={{
                // visibility: { "lg": "visible", "md": "hidden", "xs": "hidden" },
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // margin: '100px 0px',
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
                <Stack direction="row" gap={1}>
                    <SearchIcon></SearchIcon>
                    <input
                        style={{ width: "500px" }}
                        type="text" ref={searchRef} placeholder="Search" className='Search' />
                </Stack>

                <CustomizeSelect ref={cityRef} placeholder="City" id_data="city" data={cities} />

                <CustomizeSelect ref={experienceRef} placeholder="Experience" id_data="experience" data={Experience} />

                <CustomizeSelect ref={ctcRef} placeholder="CTC" id_data="ctc" data={SalaryCTC} />
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