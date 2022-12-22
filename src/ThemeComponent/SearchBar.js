import { Box, Stack, Divider } from '@mui/material';
import { cities, Experience } from "../utils/Data";

import SearchIcon from '@mui/icons-material/Search';
import CustomizeSelect from "../ThemeComponent/CustomizeSelect";
import ButtonType1 from "./Common/ButtonType1";

const SearchBar = () => {
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
                    type="text" placeholder="Search" className='Search' />
                <span>|</span>
                <CustomizeSelect placeholder="City" data={cities} />
                <span>|</span>
                <CustomizeSelect placeholder="Experience" data={Experience} />
                <span>|</span>
                <CustomizeSelect placeholder="CTC" data={Experience} />
                <ButtonType1 ButtonText="Search"></ButtonType1>
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
            // sx={{
            //     borderRadius: "10px",
            //     alignItems: "center",
            //     // justifyContent: "center",
            //     boxShadow: "2px 2px 8px 0px rgb(148 134 90)",
            //     padding: "20px"
            // }}
            >
                <Stack direction="row">
                    <SearchIcon></SearchIcon>
                    <input
                        type="text" placeholder="Search" className='Search' /></Stack>
                <CustomizeSelect placeholder="City" data={cities} />
                <CustomizeSelect placeholder="Experience" data={Experience} />
                <CustomizeSelect placeholder="CTC" data={Experience} />
                <ButtonType1 ButtonText="Search"></ButtonType1>
            </Stack>
        </Box>
    </>)
}
export default SearchBar;