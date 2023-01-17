import { Box, Stack, styled, Typography, Pagination, Container } from "@mui/material";

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
        const myHeaders = new Headers({
            'Content-Type': 'application/json',
            'Authorization': 'your-token'
        });
        const getData = async () => {
            let response = await fetch("http://192.168.1.4:3001/api/job/getalljobs",
                {
                    method: "GET",
                    headers: myHeaders,
                });
            if (response.ok) {
                response = await response.json();
                if (response.status == 1) {
                    let rows = response.data.reduce(function (rows, key, index) {
                        return (index % 2 == 0 ? rows.push([key])
                            : rows[rows.length - 1].push(key)) && rows;
                    }, []);
                    console.log(rows)
                    // setData(rows)
                }

            }
        };

        getData(); // run it, run it
    }, []);

    //Pagination 
    const IndexOfLastData = currentPage * dataPerPage;
    const IndexOfFirstData = IndexOfLastData - dataPerPage;
    const RecommendedJobs = data.slice(IndexOfFirstData, IndexOfLastData);

    return (<>
        <Stack direction="column" gap={2}>
            <Box>
                {
                    RecommendedJobs.length > 0 ? RecommendedJobs.map((item) => {

                        return (<>
                            <Stack direction="row" gap={2} >
                                <Box sx={{ width: "630px" }}>
                                    <JobComponent key={item[0].id} data={item[0]} />
                                </Box>
                                <Box sx={{ width: "630px" }}>
                                    {item[1] && <JobComponent key={item[1].id} data={item[1]} />}
                                </Box>
                            </Stack>
                        </>)
                    })
                        : <Stack>
                            NO DATA FOUND
                        </Stack>
                }
            </Box>
            <Box sx={{ position: "relative", top: "30px" }}>
                <Pagination count={Math.ceil(data.length / dataPerPage)} page={currentPage} onChange={(event, value) => setCurrentPage(value)} />
            </Box>
        </Stack>
        {/* <Box sx={{
            minHeight: "700px",
            overflow: "hidden",
            position: "relative",
            width: "100%",
            padding: "0px"
        }}
        >
            <Box
                sx={{
                    position: "relative",
                    top: '0px',
                    zIndex: "4545",
                }}>
                <Stack
                    direction={{ lg: "row", md: "column", xs: "column" }}
                    gap={10}>

                    <Box >
                        <Typography component="h3" sx={{ fontSize: "30px", fontWeight: "600", color: "#2B1E44", margin: "10px 0px" }}>
                            Jobs
                        </Typography>
                        <Stack>
                            <Box >
                                {
                                    RecommendedJobs.length > 0 ? RecommendedJobs.map((item) => {

                                        return (<>
                                            <Stack direction="row" gap={2} >
                                                <Box sx={{ width: "630px" }}>
                                                    <JobComponent key={item[0].id} data={item[0]} />
                                                </Box>
                                                <Box sx={{ width: "630px" }}>
                                                    {item[1] && <JobComponent key={item[1].id} data={item[1]} />}
                                                </Box>
                                            </Stack>
                                        </>)
                                    })
                                        : <Stack>
                                            NO DATA FOUND
                                        </Stack>
                                }
                            </Box>
                        </Stack>

                        <Box sx={{ position: "relative", top: "30px" }}>
                            <Pagination count={Math.ceil(data.length / dataPerPage)} page={currentPage} onChange={(event, value) => setCurrentPage(value)} />
                        </Box>

                    </Box>
                    {/* <Box sx={{ width: "400px" }}>
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
                    </Box> */}
        {/* </Stack>
            </Box >
        </Box > * /} */}

    </>)
}
export default RecommendedJobs;