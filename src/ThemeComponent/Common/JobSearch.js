import { Box, Container, Badge, Stack, Typography } from "@mui/material";
import Header from "../../ThemeComponent/Common/Header";
import SearchBar from "../SearchBar";
import Filter from "../Filter";
import RecommendedJobs from "../../Pages/Home/Component/RecommendedJobs";
import Footer from "../../ThemeComponent/Common/Footer";
import { useEffect } from "react";
const JobSearch = () => {
    return (<>
        <Box className="jobSearchPage"
            sx={{ background: "#FAFAFA" }}>
            <Header></Header>
            <SearchBar></SearchBar>
            <Container
                sx={{
                    maxWidth: "1333px !important",
                    padding: "20px",
                    background: "#D9D9D9"
                }}> <Filter></Filter></Container>
            <Container
                sx={{
                    maxWidth: "1333px !important",
                }}>
                <RecommendedJobs></RecommendedJobs>
            </Container>
            <Footer />
        </Box>
    </>)
}

export default JobSearch;