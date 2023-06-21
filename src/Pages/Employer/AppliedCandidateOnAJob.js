import { getRequestWithToken } from "../../utils/ApiRequests";
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
            let api_url = `${process.env.REACT_APP_BASE_URL}/api/employer-candidates?value=applied&`;
            id && (api_url = api_url + "&jobid=" + id);
            let response = await getRequestWithToken(api_url);
            if (response.status === "1") {
                setJobCanData(response.data);
            }
        }
        id !== undefined && (getCandidateOnJob());
    }, []);

    function capitalize(str) {
        let lower = str.toLowerCase()
        return str.charAt(0).toUpperCase() + lower.slice(1)
    }

    const columns = [
        { field: 'id', headerName: 'Candidate Id', width: 180 },
        { field: 'name', headerName: 'Name', width: 180 },
        { field: 'mobile_number', headerName: 'Mobile Number', width: 180 },
        { field: 'gender', headerName: 'Gender', width: 180, renderCell: (params) => <Box>{capitalize(params.value)}</Box> },
        {
            field: 'education', headerName: 'Education', width: 180,
            renderCell: (params) => <Box>{replaceUnderscore(params.value)}</Box>
        },
        { field: 'ageGroup', headerName: 'Age Group', width: 180 },
        { field: 'applied_on', headerName: 'Applied On', width: 180 }
    ];

    const rows = jobCanData.map((item, index) => {
        return {
            id: index,
            name: item.candidateid.fullname ?? '-',
            mobile_number: item.candidateid.mobile ?? '-',
            gender: item.candidateid.gender ?? '-',
            education: item.candidateid.education ?? '-',
            ageGroup: item.candidateid.ageGroup ?? '-',
            applied_on: item.time.CandidateAppliedAt ?? '-'
        }
    })

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