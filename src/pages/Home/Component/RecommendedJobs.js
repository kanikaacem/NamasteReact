import { Box, Stack, styled, Typography, Pagination, Button } from "@mui/material";

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
            <Box sx={{ padding: "20px 0px" }}>
                <Stack direction="column" gap={2}>
                    <Box sx={{
                        background: "#FFFFFF",
                        border: " 1px solid #E1D4F2",
                        borderRadius: "19px",
                    }}>
                        <Box sx={{ borderBottom: "1px solid #E1D4F2" }}>
                            <Stack direction="row" justifyContent="space-between" sx={{ padding: "20px" }}>
                                <Typography component="div" sx={{ fontSize: "26px", fontWeight: "800px" }}>
                                    Linux Solution Engineer
                                </Typography>
                                <Typography component="div" sx={{ fontSize: "26px", fontWeight: "800px" }}>
                                    Rs 25,000- Rs 99,999
                                </Typography>
                            </Stack>
                            <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px", padding: "0px 20px" }}>
                                Vays Infotech Private Limited
                            </Typography>

                            <Box sx={{ padding: "20px" }}>
                                <Stack direction="row" gap={2}>
                                    <Stack direction="row" sx={{
                                        background: "#FFFFFF",
                                        border: "1px solid #E2D7F0",
                                        borderRadius: "11px",
                                        padding: "15px",
                                        gap: "5px",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        <Box>
                                            <img src={window.location.origin + "/assets/RJ.png"} alt="RJ"></img>
                                        </Box>
                                        <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px" }}>
                                            Indiranagar
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" sx={{
                                        background: "#FFFFFF",
                                        border: "1px solid #E2D7F0",
                                        borderRadius: "11px",
                                        padding: "15px",
                                        gap: "5px",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        <Box>
                                            <img src={window.location.origin + "/assets/RJ1.png"} alt="RJ1"></img>
                                        </Box>
                                        <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px" }}>
                                            5 Openings
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" sx={{
                                        background: "#FFFFFF",
                                        border: "1px solid #E2D7F0",
                                        borderRadius: "11px",
                                        padding: "15px",
                                        gap: "5px",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        <Box>
                                            <img src={window.location.origin + "/assets/RJ2.png"} alt="RJ2"></img>
                                        </Box>
                                        <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px" }}>
                                            Min. 3 Years
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" sx={{
                                        background: "#FFFFFF",
                                        border: "1px solid #E2D7F0",
                                        borderRadius: "11px",
                                        padding: "15px",
                                        gap: "5px",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        <Box>
                                            <img src={window.location.origin + "/assets/RJ3.png"} alt="RJ3"></img>
                                        </Box>
                                        <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px" }}>
                                            Graduate
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Typography component="div" sx={{ fontSize: "20px", fontWeight: "500", color: "#9589A4", margin: "10px 0px" }}>
                                    50 Applicants Applied / 10 Applicants Rejected
                                </Typography>
                            </Box>

                            <Stack direction="row" sx={{ padding: "20px", margin: "50px 0px" }} justifyContent="space-between">
                                <Stack direction="row" gap={1}>
                                    <Button
                                        sx={{
                                            fontFamily: 'Montserrat',
                                            fontWeight: "500",
                                            fontSize: "20px",
                                            color: "#3A2D49",
                                            background: "#FC9A7E",
                                            borderRadius: "7px",
                                            textTransform: "capitalize",
                                            fontWeight: "600",
                                            "&:hover": {
                                                fontFamily: 'Montserrat',
                                                fontWeight: "500",
                                                fontSize: "20px",
                                                color: "#3A2D49",
                                                background: "#FC9A7E",
                                                borderRadius: "7px",
                                                textTransform: "capitalize",
                                                fontWeight: "600"
                                            }
                                        }} variant="contained">Apply Now</Button>
                                    <Button variant="outlined"
                                        sx={{
                                            fontFamily: 'Montserrat',
                                            fontWeight: "500",
                                            fontSize: "20px",
                                            background: "#FAF7FE",
                                            border: "1px solid #E7D5FF",
                                            borderRadius: "7px",
                                            color: "#3A2D49",
                                            textTransform: "capitalize",
                                            fontWeight: "600",
                                            "&:hover": {
                                                fontFamily: 'Montserrat',
                                                fontWeight: "500",
                                                fontSize: "20px",
                                                background: "#FAF7FE",
                                                border: "1px solid #E7D5FF",
                                                borderRadius: "7px",
                                                color: "#3A2D49",
                                                textTransform: "capitalize",
                                                fontWeight: "600",
                                            }
                                        }}>Share</Button>

                                </Stack>
                                <Box>
                                    <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px", padding: "0px 20px", color: '#A69CB2' }}>
                                        Jobs For Freshers
                                    </Typography>
                                    <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px", padding: "0px 20px", color: "#A69CB2" }}>
                                        Jobs For Women
                                    </Typography>
                                </Box>


                            </Stack>

                        </Box>
                    </Box>
                    <Box sx={{
                        background: "#FFFFFF",
                        border: " 1px solid #E1D4F2",
                        borderRadius: "19px",
                    }}>
                        <Box sx={{ borderBottom: "1px solid #E1D4F2" }}>
                            <Stack direction="row" justifyContent="space-between" sx={{ padding: "20px" }}>
                                <Typography component="div" sx={{ fontSize: "26px", fontWeight: "800px" }}>
                                    Linux Solution Engineer
                                </Typography>
                                <Typography component="div" sx={{ fontSize: "26px", fontWeight: "800px" }}>
                                    Rs 25,000- Rs 99,999
                                </Typography>
                            </Stack>
                            <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px", padding: "0px 20px" }}>
                                Vays Infotech Private Limited
                            </Typography>

                            <Box sx={{ padding: "20px" }}>
                                <Stack direction="row" gap={2}>
                                    <Stack direction="row" sx={{
                                        background: "#FFFFFF",
                                        border: "1px solid #E2D7F0",
                                        borderRadius: "11px",
                                        padding: "15px",
                                        gap: "5px",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        <Box>
                                            <img src={window.location.origin + "/assets/RJ.png"} alt="RJ"></img>
                                        </Box>
                                        <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px" }}>
                                            Indiranagar
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" sx={{
                                        background: "#FFFFFF",
                                        border: "1px solid #E2D7F0",
                                        borderRadius: "11px",
                                        padding: "15px",
                                        gap: "5px",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        <Box>
                                            <img src={window.location.origin + "/assets/RJ1.png"} alt="RJ1"></img>
                                        </Box>
                                        <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px" }}>
                                            5 Openings
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" sx={{
                                        background: "#FFFFFF",
                                        border: "1px solid #E2D7F0",
                                        borderRadius: "11px",
                                        padding: "15px",
                                        gap: "5px",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        <Box>
                                            <img src={window.location.origin + "/assets/RJ2.png"} alt="RJ2"></img>
                                        </Box>
                                        <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px" }}>
                                            Min. 3 Years
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" sx={{
                                        background: "#FFFFFF",
                                        border: "1px solid #E2D7F0",
                                        borderRadius: "11px",
                                        padding: "15px",
                                        gap: "5px",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        <Box>
                                            <img src={window.location.origin + "/assets/RJ3.png"} alt="RJ3"></img>
                                        </Box>
                                        <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px" }}>
                                            Graduate
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Typography component="div" sx={{ fontSize: "20px", fontWeight: "500", color: "#9589A4", margin: "10px 0px" }}>
                                    50 Applicants Applied / 10 Applicants Rejected
                                </Typography>
                            </Box>

                            <Stack direction="row" sx={{ padding: "20px", margin: "50px 0px" }} justifyContent="space-between">
                                <Stack direction="row" gap={1}>
                                    <Button
                                        sx={{
                                            fontFamily: 'Montserrat',
                                            fontWeight: "500",
                                            fontSize: "20px",
                                            color: "#3A2D49",
                                            background: "#FC9A7E",
                                            borderRadius: "7px",
                                            textTransform: "capitalize",
                                            fontWeight: "600",
                                            "&:hover": {
                                                fontFamily: 'Montserrat',
                                                fontWeight: "500",
                                                fontSize: "20px",
                                                color: "#3A2D49",
                                                background: "#FC9A7E",
                                                borderRadius: "7px",
                                                textTransform: "capitalize",
                                                fontWeight: "600"
                                            }
                                        }} variant="contained">Apply Now</Button>
                                    <Button variant="outlined"
                                        sx={{
                                            fontFamily: 'Montserrat',
                                            fontWeight: "500",
                                            fontSize: "20px",
                                            background: "#FAF7FE",
                                            border: "1px solid #E7D5FF",
                                            borderRadius: "7px",
                                            color: "#3A2D49",
                                            textTransform: "capitalize",
                                            fontWeight: "600",
                                            "&:hover": {
                                                fontFamily: 'Montserrat',
                                                fontWeight: "500",
                                                fontSize: "20px",
                                                background: "#FAF7FE",
                                                border: "1px solid #E7D5FF",
                                                borderRadius: "7px",
                                                color: "#3A2D49",
                                                textTransform: "capitalize",
                                                fontWeight: "600",
                                            }
                                        }}>Share</Button>

                                </Stack>
                                <Box>
                                    <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px", padding: "0px 20px", color: '#A69CB2' }}>
                                        Jobs For Freshers
                                    </Typography>
                                    <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px", padding: "0px 20px", color: "#A69CB2" }}>
                                        Jobs For Women
                                    </Typography>
                                </Box>


                            </Stack>

                        </Box>
                    </Box>
                    <Box sx={{
                        background: "#FFFFFF",
                        border: " 1px solid #E1D4F2",
                        borderRadius: "19px",
                    }}>
                        <Box sx={{ borderBottom: "1px solid #E1D4F2" }}>
                            <Stack direction="row" justifyContent="space-between" sx={{ padding: "20px" }}>
                                <Typography component="div" sx={{ fontSize: "26px", fontWeight: "800px" }}>
                                    Linux Solution Engineer
                                </Typography>
                                <Typography component="div" sx={{ fontSize: "26px", fontWeight: "800px" }}>
                                    Rs 25,000- Rs 99,999
                                </Typography>
                            </Stack>
                            <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px", padding: "0px 20px" }}>
                                Vays Infotech Private Limited
                            </Typography>

                            <Box sx={{ padding: "20px" }}>
                                <Stack direction="row" gap={2}>
                                    <Stack direction="row" sx={{
                                        background: "#FFFFFF",
                                        border: "1px solid #E2D7F0",
                                        borderRadius: "11px",
                                        padding: "15px",
                                        gap: "5px",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        <Box>
                                            <img src={window.location.origin + "/assets/RJ.png"} alt="RJ"></img>
                                        </Box>
                                        <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px" }}>
                                            Indiranagar
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" sx={{
                                        background: "#FFFFFF",
                                        border: "1px solid #E2D7F0",
                                        borderRadius: "11px",
                                        padding: "15px",
                                        gap: "5px",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        <Box>
                                            <img src={window.location.origin + "/assets/RJ1.png"} alt="RJ1"></img>
                                        </Box>
                                        <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px" }}>
                                            5 Openings
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" sx={{
                                        background: "#FFFFFF",
                                        border: "1px solid #E2D7F0",
                                        borderRadius: "11px",
                                        padding: "15px",
                                        gap: "5px",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        <Box>
                                            <img src={window.location.origin + "/assets/RJ2.png"} alt="RJ2"></img>
                                        </Box>
                                        <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px" }}>
                                            Min. 3 Years
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" sx={{
                                        background: "#FFFFFF",
                                        border: "1px solid #E2D7F0",
                                        borderRadius: "11px",
                                        padding: "15px",
                                        gap: "5px",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>
                                        <Box>
                                            <img src={window.location.origin + "/assets/RJ3.png"} alt="RJ3"></img>
                                        </Box>
                                        <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px" }}>
                                            Graduate
                                        </Typography>
                                    </Stack>
                                </Stack>
                                <Typography component="div" sx={{ fontSize: "20px", fontWeight: "500", color: "#9589A4", margin: "10px 0px" }}>
                                    50 Applicants Applied / 10 Applicants Rejected
                                </Typography>
                            </Box>

                            <Stack direction="row" sx={{ padding: "20px", margin: "50px 0px" }} justifyContent="space-between">
                                <Stack direction="row" gap={1}>
                                    <Button
                                        sx={{
                                            fontFamily: 'Montserrat',
                                            fontWeight: "500",
                                            fontSize: "20px",
                                            color: "#3A2D49",
                                            background: "#FC9A7E",
                                            borderRadius: "7px",
                                            textTransform: "capitalize",
                                            fontWeight: "600",
                                            "&:hover": {
                                                fontFamily: 'Montserrat',
                                                fontWeight: "500",
                                                fontSize: "20px",
                                                color: "#3A2D49",
                                                background: "#FC9A7E",
                                                borderRadius: "7px",
                                                textTransform: "capitalize",
                                                fontWeight: "600"
                                            }
                                        }} variant="contained">Apply Now</Button>
                                    <Button variant="outlined"
                                        sx={{
                                            fontFamily: 'Montserrat',
                                            fontWeight: "500",
                                            fontSize: "20px",
                                            background: "#FAF7FE",
                                            border: "1px solid #E7D5FF",
                                            borderRadius: "7px",
                                            color: "#3A2D49",
                                            textTransform: "capitalize",
                                            fontWeight: "600",
                                            "&:hover": {
                                                fontFamily: 'Montserrat',
                                                fontWeight: "500",
                                                fontSize: "20px",
                                                background: "#FAF7FE",
                                                border: "1px solid #E7D5FF",
                                                borderRadius: "7px",
                                                color: "#3A2D49",
                                                textTransform: "capitalize",
                                                fontWeight: "600",
                                            }
                                        }}>Share</Button>

                                </Stack>
                                <Box>
                                    <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px", padding: "0px 20px", color: '#A69CB2' }}>
                                        Jobs For Freshers
                                    </Typography>
                                    <Typography component="div" sx={{ fontSize: "20px", fontWeight: "800px", padding: "0px 20px", color: "#A69CB2" }}>
                                        Jobs For Women
                                    </Typography>
                                </Box>


                            </Stack>

                        </Box>
                    </Box>
                </Stack>

                {/* {
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
                } */}
            </Box>


            <Box sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
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