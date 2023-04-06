import { postRequest } from "../../utils/ApiRequests";
import { JobAppliedByCandidateUrl, LikedJobByCandidateUrl, SavedJobByCandidateUrl } from "../../utils/ApiUrls";

import { Box, Stack, Pagination, Container } from "@mui/material";
import { useState, useEffect } from "react";

import ErrorPage from "../ErrorPage";
import JobComponent from "../../ThemeComponent/JobComponent";

const CandidateAppliedSaveLikedJobs = ({ JobAction }) => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(10);
    const [isDataLoaded, setIsDataLoaded] = useState(true);
    const [errorMessage, setErroMessage] = useState("");
    //Pagination 
    const IndexOfLastData = currentPage * dataPerPage;
    const IndexOfFirstData = IndexOfLastData - dataPerPage;
    const jobs = data.length > 0 && data.slice(IndexOfFirstData, IndexOfLastData);

    useEffect(() => {
        let url = "";
        let error_message = "";

        const getCandidateAppliedJobs = async () => {
            switch (JobAction) {
                case 'Applied Jobs':
                    url = JobAppliedByCandidateUrl;
                    error_message = "You have not applied for any job.";
                    break;
                case 'Saved Jobs':
                    url = SavedJobByCandidateUrl;
                    error_message = "You have not saved  any job."
                    break;
                case 'Liked Jobs':
                    url = LikedJobByCandidateUrl;
                    error_message = "You have not liked any job."
                    break;
                default:
                    setErroMessage("");


            }
            let response = await postRequest(url, {});

            if (response.status === '1') {
                console.log(response.data);
                if (Object.keys(response.data).length > 0)
                    setData(response.data)
                else
                    setErroMessage(error_message);

            }

        }
        getCandidateAppliedJobs();
    }, [JobAction])
    return (<>

        <Stack className="CandidateAppliedSaveLikedJobsPage" direction="row" sx={{ padding: "20px" }} gap={2}>
            <Stack sx={{ width: { "lg": "100%", "md": "100%", "xs": "100%" } }} gap={1}>

                <Box sx={{ minHeight: 500, width: '100%' }}>
                    <Container>
                        <Stack direction="column" gap={2}>
                            {
                                isDataLoaded && data && data.length <= 0 &&

                                <ErrorPage errorMessage={errorMessage} />


                            }

                            {
                                isDataLoaded && data && data.length > 0 && jobs.map((item) => {
                                    return (<>
                                        <JobComponent key={item._id} data={item.jobsid} data_id={item.jobsid && item.jobsid._id} userType="candidate" />
                                    </>)
                                })
                            }
                        </Stack>
                        {data.length > 0 &&
                            <Box >
                                <Pagination count={data && Math.ceil(data.length / dataPerPage)} page={currentPage} onChange={(event, value) => setCurrentPage(value)} />
                            </Box>
                        }
                    </Container>
                </Box>
            </Stack>

        </Stack>

    </>)

}
export default CandidateAppliedSaveLikedJobs;