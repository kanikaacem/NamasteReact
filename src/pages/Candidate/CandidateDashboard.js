import { getRequest } from "../../utils/ApiRequests";
import { getAllJobs } from "../../utils/ApiUrls";

import { Box, Button, Avatar, Stack, List, ListItem, ListItemText, styled, Pagination, Typography, FormGroup, FormControlLabel, Checkbox } from "@mui/material";

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { useState, useEffect } from "react";

import { Link, useOutletContext } from "react-router-dom";

import { useSelector } from "react-redux";
import CandidateHome from "./CandidateHome";


const CandidateDashboard = () => {
    const [showJobDescription, setshowJobDescription] = useState(0);
    const api_url = useSelector(state => state.api_url);
    const CandidateMenuSelected = useSelector(state => state.CandidateMenuSelected);

    const user = useOutletContext();
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(10);

    //Pagination 
    const IndexOfLastData = currentPage * dataPerPage;
    const IndexOfFirstData = IndexOfLastData - dataPerPage;
    const RecommendedJobs = data.slice(IndexOfFirstData, IndexOfLastData);

    useEffect(() => {
        const getData = async () => {
            let response = await getRequest(getAllJobs);

            if (response.status == 1)
                setData(response.data);
        };

        getData(); // run it, run it
    }, []);

    return (<>
        {console.log(user)}
        <Stack direction="column" sx={{
            padding: "0px 10px"
        }}>
            {/* <Typography component="h3" sx={{
                fontSize: "30px",
                fontWeight: "600",
                color: "#2B1E44",
                margin: "10px 0px",
                textTransform: "capitalize"
            }}>
                {CandidateMenuSelected.replaceAll("_", " ")}
            </Typography> */}

            {CandidateMenuSelected == "home" && (<>
                {/* <hr style={{
                    bordertop: "1px solid #2B1E44",
                    width: "100%"
                }}></hr> */}
                <CandidateHome />
                {/* <Stack direction="row" gap={1} sx={{ minHeight: `calc(100vh-70px)` }}>

                    <Box sx={{ width: "20%" }}>
                        <Typography component="h5" sx={{
                            fontWeight: "600",
                            color: "#2B1E44",
                            margin: "10px 0px",
                            textTransform: "capitalize"
                        }}>
                            filter
                        </Typography>

                    </Box>


                    <Box
                        className="CandidateJob"
                        sx={{
                            width: "80%",
                            height: "85vh",
                            overflow: "scroll",
                            overflowX: "hidden"
                        }}>
                        {
                            RecommendedJobs.length > 0 ? RecommendedJobs.map((item) => {
                                return (<>
                                    <JobComponent2 key={item.id} data={item} setshowJobDescription={setshowJobDescription} />
                                </>)
                            })
                                : " There is no data present"
                        }
                    </Box>

                    <Box sx={{ width: "55%", padding: "0px 10px" }}>
                        <Typography component="h5" sx={{
                            fontWeight: "600",
                            color: "#2B1E44",
                            marginBottom: "10px"
                        }}>
                            job details
                        </Typography>
                        <Box sx={{ background: "#FFFFFF", minHeight: "100vh", borderTop: "4px solid #2B1E44" }}>
                            <Box sx={{
                                background: "#cadcef",
                                minHeight: "80px",
                                paddingLeft: "10px"
                            }}>
                                <Typography component="h5" sx={{
                                }}>
                                    &hearts; reasons you match this job
                                </Typography>
                                <FormGroup sx={{
                                    direction: "flex",
                                    flexDirection: "row", gap: "2px", padding: "0px 10px"
                                }}>
                                    <FormControlLabel control={<Checkbox size="small" />} label="availability" />
                                    <FormControlLabel control={<Checkbox size="small" />} label="license" />
                                    <FormControlLabel control={<Checkbox size="small" />} label="experience" />
                                    <FormControlLabel control={<Checkbox size="small" />} label="language" />
                                </FormGroup>
                            </Box>
                            <Stack direction="row" justifyContent="space-between" sx={{ padding: "20px" }}>
                                <Typography component="div" sx={{
                                    fontSize: "14px"
                                }}>
                                    job post expires in 21 day or 2 hr
                                </Typography>
                                <Button variant="contained" > Apply now </Button>
                            </Stack>

                            <Box sx={{ padding: "0px 20px" }}>
                                <Typography component="div" sx={{
                                    fontSize: "20px"
                                }}>
                                    Barback
                                </Typography>
                                <Typography component="div" sx={{
                                    fontSize: "14px"
                                }}>
                                    The Spot
                                </Typography>
                            </Box>

                            <Stack direction="row" sx={{ padding: "20px", width: "95%" }}>
                                <LocationOnIcon></LocationOnIcon>
                                <Typography component="div" sx={{
                                    fontSize: "14px",
                                    color: "#2B1E44",
                                    textTransform: "capitalize"
                                }}>
                                    jdklfjjkdjflksdjflksdjfklsjfkldsjflkj jdklfjjkdjflksdjflksdjfklsjfkldsjflkjkljlkj
                                    jdklfjjkdjflksdjflksdjfklsjfkldsjflkjkljlkj jdklfjjkdjflksdjflksdjfklsjfkldsjflkjkljlkj


                                </Typography>
                            </Stack>

                            <Stack direction="column" gap={2} sx={{ padding: "0px 20px" }}>
                                <Box>
                                    <Typography component="div" sx={{
                                        fontSize: "14px",
                                        color: "#2B1E44",
                                        textTransform: "capitalize"
                                    }}>
                                        responsibilites
                                    </Typography>
                                </Box>
                                <Stack direction="column" gap={1}>
                                    <Box> This is the tesst 1</Box>
                                    <Box> This is the tesst 1</Box>
                                    <Box> This is the tesst 1</Box>
                                    <Box> This is the tesst 1</Box>
                                </Stack>

                            </Stack>



                        </Box>
                    </Box>

                </Stack> */}

            </>)}




        </Stack>
    </>)
}

export default CandidateDashboard;