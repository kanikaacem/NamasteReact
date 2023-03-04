import { getRequest } from "../../utils/ApiRequests"
import { getAllJobs } from "../../utils/ApiUrls";

import { Box, Stack, Pagination } from "@mui/material";
import JobComponent from "../JobComponent";
import Footer from "../../ThemeComponent/Common/Footer";
import SearchBar from "../SearchBar";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import Filter from "../Filter"
import HeaderSec from "./HeaderSec";
import { QrCodeScannerOutlined } from "@mui/icons-material";
const JobSearch = () => {

    const [data, setData] = useState([]);
    const [name, setName] = useState(" ");
    const [city, setCity] = useState(" ");
    const [exp, setExp] = useState("");
    const [ctc, setCTC] = useState('');
    useEffect(() => {
        const params = new URL(window.location.href).searchParams;
        setName(params.get("name"));
        setExp(params.get("exp") + " yrs");
        setCity(params.get("city"));
        setCTC(params.get("ctc") + " lakhs")
        const getData = async () => {
            let response = await getRequest(getAllJobs);

            if (response.status == 1) {
                console.log(response.data);
                setData(response.data);
            }
        };

        getData(); // run it, run it
    }, []);

    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(10);
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
            <Stack direction="row" gap={2} sx={{ marginTop: "30px", padding: "30px" }}>
                <Box sx={{
                    width: "30%"
                }}>
                    <Filter />
                </Box>
                <Stack sx={{ width: "70%" }} gap={2}>
                    {
                        jobs.length > 0 && jobs.map((item) => {
                            return (<>
                                <JobComponent key={item._id} data={item} data_id={item._id} userType="candidate"
                                    OnClickfun={() => {
                                        // getJobDescription(item._id)
                                    }} />
                            </>)
                        })


                    }
                    {jobs.length > 0 &&
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