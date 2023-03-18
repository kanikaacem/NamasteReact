

import { Box, Stack,  Pagination } from "@mui/material";
import {useState, useEffect} from "react";

import ErrorPage from "../ErrorPage";
import JobComponent from "../../ThemeComponent/JobComponent";
import { isSameDateError } from "@mui/x-date-pickers/internals/hooks/validation/useDateValidation";
const CandidateAppliedSaveLikedJobs = ({JobAction}) =>{
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(10);
    const [isDataLoaded, setIsDataLoaded] = useState(true);
    const [errorMessage ,setErroMessage] = useState("");
     //Pagination 
     const IndexOfLastData = currentPage * dataPerPage;
     const IndexOfFirstData = IndexOfLastData - dataPerPage;
     const jobs = data.length > 0 && data.slice(IndexOfFirstData, IndexOfLastData);

     useEffect(() =>{
        switch(JobAction) {
            case 'Applied Jobs':
                setErroMessage("You have not applied for any job.");
                break;
            case 'Saved Jobs':
                setErroMessage("You have not saved any job.");
                break;
            case 'Liked Jobs':
                setErroMessage("You have not liked any job.");
                break;
            default:
                setErroMessage("");
        }
     },[JobAction])
    return (<>

        <Stack className="CandidateAppliedSaveLikedJobsPage" direction="row" sx={{ padding: "20px" }}  gap={2}>
            <Stack sx={{ width: { "lg": "100%", "md": "100%", "xs": "100%" } }} gap={1}>
                
                <Box sx={{ minHeight: 500, width: '100%' }}>
                    <Stack direction="column" gap={2}>
                        {
                            isDataLoaded && data && data.length <= 0 &&

                            <ErrorPage errorMessage={errorMessage} />


                        }

                        {
                            isDataLoaded && data && data.length > 0 && jobs.map((item) => {
                                return (<>
                                    <JobComponent key={item._id} data={item} data_id={item._id} userType="employer" />
                                </>)
                            })
                        }
                    </Stack>
                    {data.length > 0 &&
                        <Box >
                            <Pagination count={data && Math.ceil(data.length / dataPerPage)} page={currentPage} onChange={(event, value) => setCurrentPage(value)} />
                        </Box>
                    }

                </Box>
            </Stack>
           
</Stack>

  </>)

}
export default CandidateAppliedSaveLikedJobs;