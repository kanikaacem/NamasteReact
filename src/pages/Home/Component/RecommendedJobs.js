import { getRequest, postRequest } from "../../../utils/ApiRequests"
import { getAllJobs, JobDescriptionURL } from "../../../utils/ApiUrls";

import { Box, Stack, styled, Typography, Pagination, Button } from "@mui/material";

import { useState, useEffect } from "react";
import JobComponent from "../../../ThemeComponent/JobComponent";
import JobDescriptionComponent from "../../../ThemeComponent/JobDescriptionComponent";
const RecommendedJobs = ({ fixed }) => {
    const [data, setData] = useState([]);
    const [canJobDes, setCanJobDes] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let response = await getRequest(getAllJobs);

            if (response.status == 1) {
                // console.log(response.data)
                setData(response.data);
                setCanJobDes(response.data[0])
            }
        };

        getData(); // run it, run it
    }, []);

    const getJobDescription = async (data_id) => {
        console.log(data_id);
        let JobFormData = new FormData();
        JobFormData = {

            jobid: data_id

        }
        let response = await postRequest(JobDescriptionURL, JobFormData);
        if (response.status === '1') {
            setCanJobDes(response.data);
            window.scrollTo(0, 0);
        }
        // console.log(response);
    }
    return (<>
        <Stack direction="row" className="RecommendedJobs" gap={2}
        >
            <Stack direction="column" className="AllRecommendedJobs" gap={2}
                sx={{
                    width: { "lg": "40%", "md": "100%", "xs": "100%" },
                    padding: { "lg": "0px 10px", md: "0px", "xs": "0px" },
                    height: "90vh",
                    overflowX: "scroll"
                }}>
                {
                    data.length > 0 && data.map((item) => {
                        return (<>
                            <JobComponent key={item._id} data={item} data_id={item._id} userType="candidate" OnClickfun={() => {
                                getJobDescription(item._id)
                            }} />
                        </>)
                    })


                }


            </Stack>
            <Box sx={{ width: "60%", display: { "lg": "block", "md": "none", "xs": "none" } }}>
                <JobDescriptionComponent userType="Candidate" data={canJobDes} />
            </Box>
        </Stack>


    </>)
}
export default RecommendedJobs;