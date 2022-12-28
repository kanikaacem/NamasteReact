import { Box, Stack } from "@mui/material";

import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PlaceIcon from '@mui/icons-material/Place';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import Moment from 'react-moment';

import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

const JobComponent = ({ company, data }) => {
    const [showJobDescription, setshowJobDescription] = useState();
    const user = localStorage.user && JSON.parse(localStorage.user);
    const api_url = useSelector(state => state.api_url);
    const deletePostedJob = (id) => {
        console.log(id);
    }
    const showDescription = (id) => {
        // console.log(id);
        // setshowJobDescription(id);
        window.location.href = "/job-description/" + id;
        // dispatch({ type: 'JOB_DESCRIPTION', payload: id });

    }
    const closeDescription =
        () => {
            setshowJobDescription(0);
        }


    const JobAction = async (jobId, jobAction) => {
        let url = "";
        if (jobAction == "apply") url = api_url + "/api/job/applyforjob";
        else if (jobAction == "save") url = api_url + "/api/job/savejob";

        let response = await fetch(url, {
            method: "POST",
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json; charset=UTF-8'
            },
            body: JSON.stringify({
                userid: "637e078a29dc3fa6c141e534",
                jobsid: jobId

            }),
        })
        if (response.ok) {
            response = await response.json();
            console.log(response);

        }

    }
    return (<>
        <Stack>
            <Box className="jobItem" id={data && data._id} onClick={() => showDescription(data._id)}>
                <Box className="jobLogo"
                    sx={{
                        borderRadius: "10px",
                        position: "absolute",
                        left: "5%",
                        top: "14%",
                        width: "60px",
                        height: "60px",
                        background: "#FFFFFF"
                    }}>
                    <img style={{ width: "100%", borderRadius: '10px' }} src={data && data.companyLogo ? data.companyLogo : './assets/companyLogo.png'} alt=""></img>
                </Box>


                <Box className="jobInformation">

                    <h3> {data && data.companyName ? data.companyName : "Company Name"} - {data && data.title} - {data && data.role.replaceAll("_", " ")}</h3>

                    <Stack direction="row" gap={5}>
                        <span><WorkOutlineIcon></WorkOutlineIcon>{data && data.experience} Yrs  </span>
                        <span><CurrencyRupeeIcon></CurrencyRupeeIcon> {data && data.salary}</span>
                        <span><PlaceIcon></PlaceIcon>{data && data.location}</span>
                        <span><Moment format="DD/MM/YYYY">
                            {data && data.createdat}
                        </Moment></span>

                    </Stack>

                    {
                        user.type == "employer" && <>
                            <span> <a href={`employer-dashboard/job/${data._id}/recommedations`} > View All Candidate</a></span>

                        </>
                    }

                    {/* <div style={{ display: 'flex', gap: '10px', position: 'absolute', right: '10px' }}>
                        {user.type == 'employer' && <>
                            <span><EditIcon onClick={() => deletePostedJob(data._id)}></EditIcon></span>
                            <span><DeleteIcon onClick={() => deletePostedJob(data._id)}></DeleteIcon></span>
                        </>}

                    </div> */}
                </Box>
            </Box >
        </Stack>
    </>
    )
}
export default JobComponent;