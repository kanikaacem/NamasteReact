import { postRequest } from "../../utils/ApiRequests";
import { GetCandidateOnParticularJob } from "../../utils/ApiUrls";
import { DataGrid } from '@mui/x-data-grid';

import {
    Box
} from "@mui/material";

import { useParams } from "react-router-dom";
import { getJobPostedTime, replaceUnderscore } from "../../utils/function";
import { useState, useEffect } from "react";
const AppliedCandidateOnAJob = () => {
    const [jobCanData, setJobCanData] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        const getCandidateOnJob = async () => {
            let response = await postRequest(GetCandidateOnParticularJob + id);
            if (response.status === "1") {
                setJobCanData(response.data);
                console.log(jobCanData)
            }

        }
        getCandidateOnJob();
        id !== undefined && (getCandidateOnJob());
    }, [id, jobCanData])

    const columns = [
        { field: 'id', headerName: 'Candidate Id', width: 180 },
        { field: 'name', headerName: 'Name', width: 180 },
        { field: 'mobile_number', headerName: 'Mobile Number', width: 180 },
        { field: 'location', headerName: 'Location', width: 180 },
        {
            field: 'education', headerName: 'Education', width: 180,
            renderCell: (params) => <Box>{replaceUnderscore(params.value)}</Box>
        },
        { field: 'experience', headerName: 'Experience', width: 180 },
        { field: 'vechicle_required', headerName: 'Vechicle', width: 180, renderCell: (params) => <Box>{replaceUnderscore(params.value)}</Box> },
        { field: 'language', headerName: 'Language', width: 180, renderCell: (params) => <Box>{replaceUnderscore(params.value)}</Box> },
        {
            field: 'applied_on', headerName: 'Applied On', width: 180,
            renderCell: (params) => <Box>{getJobPostedTime(params.value)}</Box>
        }
    ];

    const rows = [
        {
            id: 1,
            name: "Kanika",
            mobile_number: "123456789",
            location: "Faridabad",
            education: "10th_pass",
            experience: "2 - 5 years",
            vechicle_required: "3_wheeler",
            language: "thoda_english",
            applied_on: "348574897594"
        },


    ];

    return (<>
        <Box className="AppliedCandidatePage"
            sx={{
                minHeight: "100vh",
                padding: "20px",
                boxSizing: "border-box"
            }}>
            <Box className="AppliedCandidatePageInnerWrapper">
                <Box style={{ height: 300, width: '100%' }}>
                    <DataGrid rows={rows} columns={columns} />
                </Box>
            </Box>
        </Box >
    </>)
}
export default AppliedCandidateOnAJob;