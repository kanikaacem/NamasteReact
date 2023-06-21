import { getRequestWithToken } from "../../utils/ApiRequests";
import { DataGrid } from '@mui/x-data-grid';

import {
    Box
} from "@mui/material";
import { replaceUnderscore } from "../../utils/function";
import { useState, useEffect } from "react";
const AppliedCandidate = () => {
    const [jobCanData, setJobCanData] = useState([]);

    useEffect(() => {
        const getCandidateOnJob = async () => {
            let api_url = `${process.env.REACT_APP_BASE_URL}/api/employer-candidates?value=applied`;
            let response = await getRequestWithToken(api_url);
            if (response.status === "1") {
                setJobCanData(response.data);
            }
        }
       getCandidateOnJob();
    }, [])

    function capitalize(str) {
        let lower = str.toLowerCase()
        return str.charAt(0).toUpperCase() + lower.slice(1)
    }

    const columns = [
        { field: 'id', headerName: 'Candidate Id', width: 120 },
        { field: 'job_department', headerName: 'Job Department', width: 220 },
        { field: 'job_role', headerName: 'Job Role', width: 220 },        
        { field: 'name', headerName: 'Name', width: 180 },
        { field: 'mobile_number', headerName: 'Mobile Number', width: 180 },
        { field: 'gender', headerName: 'Gender', width: 10, renderCell: (params) => <Box>{capitalize(params.value)}</Box> },
        {
            field: 'education', headerName: 'Education', width: 180,
            renderCell: (params) => <Box>{replaceUnderscore(params.value)}</Box>
        },
        { field: 'age_group', headerName: 'Age Group', width: 180 },
        { field: 'applied_on', headerName: 'Applied On', width: 180 }
    ];

    const rows = jobCanData.map((item, index) => {
        return {
            id: index,
            job_department: item.jobid.jobDepartment ?? '-',
            job_role: item.jobid.jobRole ?? '-',
            name: item.candidateid.fullname ?? '-',
            mobile_number: item.candidateid.mobile ?? '-',
            gender: item.candidateid.gender ?? '-',
            education: item.candidateid.education ?? '-',
            age_group: item.candidateid.ageGroup ?? '-',
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
export default AppliedCandidate;