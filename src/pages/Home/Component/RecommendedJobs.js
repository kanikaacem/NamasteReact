import { Box, Stack, styled, Typography, Pagination } from "@mui/material";

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import JobComponent from "../../../ThemeComponent/JobComponent";

const RecommendedJobs = () => {
    const BackCircle = styled(Box)({
        width: "250px",
        height: "250px",
        border: "50px solid #1967d2",
        opacity: "0.2",
        borderRadius: "50%"
    })
    const api_url = useSelector(state => state.api_url);
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(5);

    useEffect(() => {
        const getData = async () => {
            let response = await fetch(api_url + "/api/job/getalljobs",
                {
                    method: "GET",
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json; charset=UTF-8'
                    },


                });
            if (response.ok) {
                response = await response.json();
                if (response.status == 1)
                    setData(response.data);

            }
        };

        getData(); // run it, run it
    }, []);

    //Pagination 
    const IndexOfLastData = currentPage * dataPerPage;
    const IndexOfFirstData = IndexOfLastData - dataPerPage;
    const RecommendedJobs = data.slice(IndexOfFirstData, IndexOfLastData);

    return (<>
        <Box sx={{
            padding: { lg: "0px 50px", md: "15px", xs: "15px" },
            minHeight: "700px",
            overflow: "hidden",
            position: "relative",
            background: "#D9D9D9"
        }}
        >
            <Box
                sx={{
                    position: "relative",
                    top: '0px',
                    // padding: '0px 100px',
                    zIndex: "4545",
                }}>
                <Stack
                    direction={{ lg: "row", md: "column", xs: "column" }}
                    gap={10}>

                    <Box sx={{ minWidth: "60%" }}>
                        <Typography component="h3" sx={{ fontSize: "30px", fontWeight: "600", color: "#2B1E44", margin: "10px 0px", marginLeft: "70px" }}>
                            Recommended Jobs
                        </Typography>
                        <Stack>
                            <Box sx={{ height: "500px" }}>
                                {
                                    RecommendedJobs.length > 0 ? RecommendedJobs.map((item) => {
                                        return (<>
                                            <JobComponent key={item.id} data={item} />
                                        </>)
                                    })
                                        : " There is no data present"
                                }
                            </Box>
                        </Stack>

                        <Box sx={{ position: "relative", top: "30px" }}>
                            <Pagination count={Math.ceil(data.length / dataPerPage)} page={currentPage} onChange={(event, value) => setCurrentPage(value)} />
                        </Box>

                    </Box>
                    <Box sx={{ width: "400px" }}>
                        <Typography component="h3" sx={{ fontSize: "30px", fontWeight: "600", color: "#2B1E44", margin: "10px 0px" }}>
                            Featured Company
                        </Typography>
                        <Box sx={{
                            background: "white",
                            minHeight: "400px",
                            borderRadius: "10px",
                            width: "100%",
                            marginTop: "25px",
                            padding: "20px"
                        }}>
                            <Stack direction="row" gap={3} sx={{ flexWrap: "wrap" }}>
                                <Box sx={{
                                    width: "70px",
                                    height: "70px"
                                }}>
                                    <img src="./assets/companyLogo.png" />
                                </Box>

                                <Box sx={{
                                    width: "70px",
                                    height: "70px"
                                }}>
                                    <img src="./assets/companyLogo.png" />
                                </Box>

                                <Box sx={{
                                    width: "70px",
                                    height: "70px"
                                }}>
                                    <img src="./assets/companyLogo.png" />
                                </Box>

                                <Box sx={{
                                    width: "70px",
                                    height: "70px"
                                }}>
                                    <img src="./assets/companyLogo.png" />
                                </Box>

                                <Box sx={{
                                    width: "70px",
                                    height: "70px"
                                }}>
                                    <img src="./assets/companyLogo.png" />
                                </Box>

                                <Box sx={{
                                    width: "70px",
                                    height: "70px"
                                }}>
                                    <img src="./assets/companyLogo.png" />
                                </Box>

                            </Stack>
                        </Box>
                    </Box>
                </Stack>
            </Box>
        </Box >

    </>)
}
export default RecommendedJobs;