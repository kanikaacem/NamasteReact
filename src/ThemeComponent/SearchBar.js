import { Box, Stack, Divider } from '@mui/material';
import { cities, Experience } from "../utils/Data";

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
                padding: "0px 100px",
                height: "fit-content",
                margin: '20px 0px',
                display: { md: "block", xs: "none" }
            }}>
            <Stack
                direction="row"
                sx={{
                    background: "#FFFFFF",
                    height: "60px",
                    borderRadius: "10px",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "20px",
                    padding: " 0px 20px",
                    boxShadow: "2px 2px 8px 0px rgb(148 134 90)"
                }}
            >
                <SearchIcon></SearchIcon>
                <input
                    style={{ width: "500px" }}
                    type="text" ref={searchRef} placeholder="Search" className='Search' />
                <span>|</span>
                <CustomizeSelect ref={cityRef} placeholder="City" id_data="city" data={cities} />
                <span>|</span>
                <CustomizeSelect ref={experienceRef} placeholder="Experience" id_data="experience" data={Experience} />
                <span>|</span>
                <CustomizeSelect ref={ctcRef} placeholder="CTC" id_data="ctc" data={Experience} />
                <ThemeButtontype1 onClick={searchJob} > Search</ThemeButtontype1>
            </Stack>
        </Box>

        <Box
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
        </Box>
    </>)
}
export default SearchBar;