<<<<<<< HEAD
import { Box, Container, Badge, Stack, Typography, Button, List, ListItem, ListItemText, TextField, Select, MenuItem, Slider } from "@mui/material";
import RecommendedJobs from "../../pages/Home/Component/RecommendedJobs";
=======
import { getRequest } from "../../utils/ApiRequests"
import { JobSearchPageURL } from "../../utils/ApiUrls";

import { Box, Stack, Pagination } from "@mui/material";
import JobComponent from "../JobComponent";
>>>>>>> origin/dev-Kanika
import Footer from "../../ThemeComponent/Common/Footer";
import SearchBar from "../SearchBar";

import { useState, useEffect } from "react";

import Filter from "../Filter"
import HeaderSec from "./HeaderSec";

import ErrorPage from "../../Pages/ErrorPage";
const JobSearch = () => {

    const [data, setData] = useState([]);
    const [name, setName] = useState(" ");
    const [city, setCity] = useState(" ");
    const [exp, setExp] = useState("");
    const [ctc, setCTC] = useState('');
    const [dataLoaded, setDataLoaded] = useState(false);
    useEffect(() => {
        const params = new URL(window.location.href).searchParams;
        setName(params.get("name"));
        setExp(params.get("exp") + " yrs");
        setCity(params.get("city"));
        setCTC(params.get("ctc") + " lakhs")
        const getData = async () => {
            let path_url = JobSearchPageURL;
            if (params.get("name") !== " ")
                path_url = path_url + "?key=" + params.get("name");

            if (params.get("exp") !== " " && params.get("exp") !== null)
                path_url = path_url + "&exp=" + params.get("exp");

            if (params.get("city") !== " " && params.get("city") !== null)
                path_url = path_url + "&loc=" + params.get("city");

            if (params.get("ctc") !== " " && params.get("ctc") !== null)
                path_url = path_url + "&ctc=" + params.get("ctc");
            let response = await getRequest(path_url);

            if (response.status === "1") {
                setDataLoaded(true);
                if (Object.keys(response.data).length > 0)
                    setData(response.data);
                else
                    setData([]);
            }


        };

        getData(); // run it, run it
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const dataPerPage = 10;
    const IndexOfLastData = currentPage * dataPerPage;
    const IndexOfFirstData = IndexOfLastData - dataPerPage;
    const jobs = data.length > 0 && data.slice(IndexOfFirstData, IndexOfLastData);

    return (<>
        <Box className="jobSearchPage"
            sx={{ background: "#FAFAFA" }}>
            <Box sx={{ padding: "20px 40px" }}>
                <HeaderSec
                    color="black"
                    border="2px solid #8E8E8E"
                    buttonText="Employer login"
                    background="#FAFAFA" />
            </Box>
            <SearchBar name={name} city={city} exp={exp} ctc={ctc} />
            <Stack direction="row" gap={2} sx={{
                width: { "xs": "92%", "sm": "92%", "md": `calc(100vw - 420px)`, "lg": `calc(100vw - 420px)`, "xl": `calc(100vw - 420px)` },
                margin: "0 auto",
                marginTop: {
                    "xs": "0px", "sm": "0px", "md": "30px", "lg": "30px", "xl": "30px"
                }, padding: {
                    "xs": "10px", "sm": "10px", "md": "30px", "lg": "30px", "xl": "30px"
                }
            }}>
                <Box sx={{
                    display: { "xs": "none", "sm": "none", "md": "block", "lg": "block", "xl": "block" },
                    width: "30%"
                }}>
                    <Filter />
                </Box>
                <Stack sx={{ width: { "xs": "100%", "sm": "100%", "md": "70%", "lg": "70%", "xl": "70%" } }} gap={2}>
                    {!jobs && dataLoaded && <ErrorPage errorMessage="No Job Found" />}
                    {
                        dataLoaded && jobs.length > 0 && jobs.map((item) => {
                            return (<>
                                <JobComponent key={item._id} data={item} data_id={item._id} userType="candidate"
                                />
                            </>)
                        })


                    }
                    {dataLoaded && jobs.length > 0 &&
                        <Box >
                            <Pagination count={data && Math.ceil(data.length / dataPerPage)} page={currentPage} onChange={(event, value) => setCurrentPage(value)} />
                        </Box>
                    }

                </Stack>
            </Stack>

            <Footer />
        </Box >
    </>)
}

export default JobSearch;