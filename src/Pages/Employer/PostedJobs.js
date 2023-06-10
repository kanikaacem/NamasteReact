import { getRequestWithToken } from "../../utils/ApiRequests";
import { Stack, Pagination, Typography, Button } from "@mui/material";
import { DashboardSectionDivStyles } from "../../utils/Styles";
import PostedJobItem from "./PostedJobItem";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
const PostedJobs = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const dataPerPage = 20;

    //Pagination 
    const IndexOfLastData = currentPage * dataPerPage;
    const IndexOfFirstData = IndexOfLastData - dataPerPage;
    const jobs = data.length > 0 && data.slice(IndexOfFirstData, IndexOfLastData);

    useEffect(() => {
        const getpostedJobs = async () => {
            let api_url = process.env.REACT_APP_EMPLOYER_POSTED_JOB;

            try {
                const data = await getRequestWithToken(api_url);
                if (data.status === '1')
                    setData(data.data)

            } catch (error) {
                // Handle the error
                console.error("Fetch error:", error);
            }

        };
        // const getpostedJobs = () => {
        //     setData([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55]);
        // }
        getpostedJobs();

    }, []);

    return (<>
        <Stack className="PostedJobPage" sx={{ padding: "40px" }} gap={2}>
            <Stack className="DashboardPostedJobsTopSection" direction="row" justifyContent="space-between" sx={DashboardSectionDivStyles}>
                <Typography component="div" sx={{
                    fontSize: "1.1rem",
                    color: "#262626", fontWeight: "600"
                }}>
                    Posted Job
                </Typography>
                <Button variant="contained"
                    onClick={() => navigate("/employer-dashboard/post-a-job")}
                    sx={{
                        background: "#FF671F",
                        borderRadius: "7px",
                        textTransform: "capitalize",
                        width: "230px",
                        fontSize: "0.8rem",
                        "&:hover": {
                            background: "#FF671F",
                        }
                    }
                    }> Post a Job</Button >

            </Stack>
            <Stack className="PostedJobMiddleSection" >
                <Stack className="postedJobsRow" direction="row" gap={3}>
                    <Stack className="PostedJobColumn" gap={3} sx={{ width: "50%" }}>
                        {jobs &&
                            jobs.map((item, index) => {
                                if (index % 2 === 0) {
                                    return <PostedJobItem item={item} key={index} />;
                                }
                                return null;
                            })}
                    </Stack>
                    <Stack className="PostedJobColumn" gap={2} sx={{ width: "50%" }}>
                        {jobs &&
                            jobs.map((item, index) => {
                                if (index % 2 === 1) {
                                    return <PostedJobItem item={item} key={index} />;
                                }
                                return null;
                            })}
                    </Stack>
                </Stack>
                <Stack className="PaginationDiv" alignItems="center" sx={{ padding: "40px" }}>
                    <Pagination
                        count={data && Math.ceil(data.length / dataPerPage)}
                        page={currentPage}
                        onChange={(event, value) => {
                            setCurrentPage(value);
                        }}
                        sx={{
                            "& .MuiPaginationItem-root": {
                                color: "#000000",
                            },
                            "& .Mui-selected": {
                                backgroundColor: "#FF671F !important",
                                color: "#ffffff !important"
                            },
                        }}
                    />
                </Stack>
            </Stack>
            {/* <Stack className="PostedJobMiddleSection">
                <Stack className="PostedJobs" gap={3} direction="column">
                    {jobs && jobs.map((item, index) => {
                        return <PostedJobItem item={item} key={index} />
                    })}

                </Stack>
                <Stack className="PaginationDiv" alignItems="center" sx={{ padding: "40px" }}>
                    <Pagination
                        count={data && Math.ceil(data.length / dataPerPage)}
                        page={currentPage}
                        onChange={(event, value) => {
                            setCurrentPage(value);
                        }}
                        sx={{
                            "& .MuiPaginationItem-root": {
                                color: "#000000", // Custom color for the pagination item text
                            },
                            "& .Mui-selected": {
                                backgroundColor: "#FF671F !important",
                                color: "#ffffff !important"// Custom background color for the selected page
                            },
                        }}
                    />
                </Stack>
            </Stack> */}
        </Stack>


    </>)
}

export default PostedJobs;