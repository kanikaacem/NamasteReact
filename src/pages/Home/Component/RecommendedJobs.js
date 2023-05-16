import { getRequest, postRequest } from "../../../utils/ApiRequests"
import { getAllJobs, JobDescriptionURL } from "../../../utils/ApiUrls";

import { Box, Stack } from "@mui/material";

import { useState, useEffect } from "react";
import JobComponent from "../../../ThemeComponent/JobComponent";
import JobDescriptionComponent from "../../../ThemeComponent/JobDescriptionComponent";

import Template1 from "../../../ThemeComponent/LoadingTemplate/Template1";
const RecommendedJobs = () => {
    const [data, setData] = useState([]);
    const [canJobDes, setCanJobDes] = useState([]);
    const [dataLoaded, setDataLoaded] = useState(false);

    useEffect(() => {
        const getData = async () => {
            let response = await getRequest(getAllJobs);

            if (response.status === "1") {
                setData(response.data);
                setDataLoaded(true);
                setCanJobDes(response.data[0]);
            }
        };

        getData(); // run it, run it
    }, []);

    const getJobDescription = async (data_id) => {
        let response = await postRequest(JobDescriptionURL + "?jobid=" + data_id);
        if (response.status === '1') {
            setCanJobDes(response.data);
            window.scrollTo(0, 0);
        }
    }

    const RecommendedJobsTemplate = ({ JobComponent, JobDescriptionComponent }) => {
        return (<>
            <Stack direction="column" className="AllRecommendedJobs" gap={2}
                sx={{
                    width: { "lg": "40%", "md": "100%", "xs": "100%" },
                    padding: { "lg": "0px 10px", md: "0px", "xs": "0px" },
                    height: "90vh",
                    overflowY: "scroll"
                }}>
                {JobComponent}

            </Stack>

            <Box sx={{ width: "60%", display: { "lg": "block", "md": "none", "xs": "none" } }}>
                {JobDescriptionComponent}
            </Box>
        </>)
    }
    return (<>
        <Stack direction="row" className="RecommendedJobs" gap={2}
        >
            {
                !dataLoaded && <>
                    <RecommendedJobsTemplate JobComponent={<>{[1, 2, 3, 4].map((item) => {
                        return <Template1 />
                    })}</>}
                        JobDescriptionComponent={<Template1 SkeletonCount="25" />} />
                </>
            }
            {
                dataLoaded && data.length > 0 && <>
                    <RecommendedJobsTemplate JobComponent={<>{data.map((item) => {
                        return (<JobComponent key={item._id} data={item} data_id={item._id} userType="candidate"
                            OnClickfun={() => {
                                getJobDescription(item._id)
                            }} />)
                    })}</>}
                        JobDescriptionComponent={
                            <JobDescriptionComponent userType="Candidate" data={canJobDes} />
                        } />
                </>

            }

        </Stack>


    </>)
}
export default RecommendedJobs;