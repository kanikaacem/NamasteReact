import { postRequest, getRequestWithToken } from "../utils/ApiRequests";
import { ApplyForJob, JobSavedUrl, JobLikedUrl } from "../utils/ApiUrls";
import parse from 'html-react-parser';

import { Box, Stack, Typography } from "@mui/material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { ThemeButtonType2 } from "../utils/Theme";

import { useState, useEffect } from "react";
import ThemeMessage from "./Common/ThemeMessage";
import { RWebShare } from "react-web-share";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import { useNavigate } from "react-router-dom";
const JobDescriptionComponent = ({ userType, data }) => {

    const navigate = useNavigate();

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [jobSaving, setJobSaving] = useState(false);
    const [jobLiking, setJobLiking] = useState(false);
    const [jobSavedMessage, setJobSavedMessage] = useState("");
    const [jobLikedMessage, setJobLikedMessage] = useState("");
    const [cannotApply, setCannotApply] = useState(false);
    const [jobApplied, setJobApplied] = useState(false);
    const [jobSaved, setJobSaved] = useState(false);
    const [jobLiked, setJobLiked] = useState(false);

    const JobApplied = async () => {
        if (window.location.pathname === '/candidate-dashboard') {
            navigate('/candidate-dashboard/job-description/' + data._id);
        }
        else {
            let formData = new FormData();
            formData = {
                jobid: data._id
            }
            let response = await postRequest(ApplyForJob, formData)
            if (response.status === '1') {
                setFormSubmitted(true)
                setJobApplied(true)
            }

            else {
                setCannotApply(true)
            }

        }

    }

    const JobSavedFunction = async (status) => {
        let formData = new FormData();
        formData = {
            jobid: data._id,
            status: status
        }
        let response = await postRequest(JobSavedUrl, formData);
        if (status)
            setJobSavedMessage("You have saved the job successfully.")

        else
            setJobSavedMessage("You have unsaved the job successfully.")


        setJobSaving(true)
        setJobSaved(status)


    }

    const JobLikedFunction = async (status) => {
        let formData = new FormData();
        formData = {
            jobid: data._id,
            status: status
        }
        let response = await postRequest(JobLikedUrl, formData);
        if (status)
            setJobLikedMessage("You have liked the job successfully.")

        else
            setJobLikedMessage("You have unliked the job successfully.")

        setJobLiking(true)
        setJobLiked(status)


    }


    useEffect(() => {
        setJobApplied(false);
        setJobLiked(false);
        setJobSaved(false);
        const JobDetailsLikeSaveApply = async () => {
            let response = await getRequestWithToken("https://backend.jobsyahan.com/api/job/details?jobid=" + data._id);
            if (response.status === "1") {
                if (Object.keys(response.data).length > 0) {
                    setJobApplied(response.data[0].jobapply)
                    setJobSaved(response.data[0].jobsave)
                    setJobLiked(response.data[0].joblike)
                }

            }

        }
        JobDetailsLikeSaveApply();

    }, [data._id])

    return (<>
        <ThemeMessage open={formSubmitted} setOpen={setFormSubmitted}
            message="You have successfully applied for this job." type="success" />

        <ThemeMessage open={jobSaving} setOpen={setJobSaving}
            message={jobSavedMessage} type="success" />

        <ThemeMessage open={jobLiking} setOpen={setJobLiking}
            message={jobLikedMessage} type="success" />

        <ThemeMessage open={cannotApply} setOpen={setCannotApply}
            message="You need 50 % profile completed to apply for this job" type="error" />

        <Stack
            direction="column"
            sx={{
                background: "#FFFFFF",
                border: " 1px solid #E1D4F2",
                borderRadius: "19px",
                padding: { "xs": "10px", "sm": "10px", "md": "20px", "lg": "20px", "xl": "20px" },
                gap: { "xs": "8px", "sm": "8px", "md": "24px", "lg": "24px", "xl": "24px" }
            }}>

            <Stack direction="row" gap={2}>
                <Box sx={{
                    width: { "xs": "12px", "sm": "12px", "md": "20px", "lg": "20px", "xl": "20px" },
                    height: { "xs": "12px", "sm": "12px", "md": "20px", "lg": "20px", "xl": "20px" }
                }}>
                    <img src={window.location.origin + "/assets/ActivelyHiring.png"} alt="Active Hiring" width="100%" height="100%" />
                </Box>
                <Typography component="box" sx={{
                    fontSize: { "xs": "12px", "sm": "12px", "md": "16px", "lg": "16px", "xl": "16px" },
                    fontFamily: "Montserrat",
                    color: "#4E3A67"
                }}>
                    Active Hiring
                </Typography>
            </Stack>

            <Stack direction="column" gap={1} sx={{ margin: { "xs": "10px 0px", "sm": "10px 0px", "md": "30px 0px", "lg": "30px 0px", "xl": "30px 0px" } }}>
                <Typography component="div" sx={{ fontSize: { "xs": "12px", "sm": "12px", "md": "26px", "lg": "26px", "xl": "26px" }, fontWeight: "600", color: "#4E3A67", textTransform: "capitalize" }}>
                    {data ? (data.job_title ? data.job_title : "Not Mentioned") : <Skeleton />}
                </Typography>

                <Typography component="div" sx={{ fontSize: { "xs": "12px", "sm": "12px", "md": "20px", "lg": "20px", "xl": "20px" }, fontWeight: "600", color: "#BDB5C7" }}>
                    {data ? (data.company_name ? data.company_name : "Not Mentioned") : <Skeleton />}
                </Typography>
            </Stack>


            <Stack direction="row" justifyContent="space-between" gap={2}>
                <Stack direction="row" gap={2} sx={{ flexWrap: "wrap" }} >
                    <Stack direction="row" sx={{
                        background: "#FFFFFF",
                        border: "1px solid #E2D7F0",
                        borderRadius: "11px",
                        padding: { "xs": "8px", "sm": "8px", "md": "15px", "lg": "15px", "xl": "15px" },
                        gap: "5px",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Box>
                            <img src={window.location.origin + "/assets/RJ.png"} alt="RJ"></img>
                        </Box>
                        <Typography component="div" sx={{ fontSize: { "xs": "12px", "sm": "12px", "md": "20px", "lg": "20px", "xl": "20px" }, fontWeight: "800px" }}>
                            {data ? (data.city ? data.city.toString() : " Not Mentioned") : <Skeleton />}
                        </Typography>
                    </Stack>
                    <Stack direction="row" sx={{
                        background: "#FFFFFF",
                        border: "1px solid #E2D7F0",
                        borderRadius: "11px",
                        padding: { "xs": "8px", "sm": "8px", "md": "15px", "lg": "15px", "xl": "15px" },
                        gap: "5px",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Box>
                            <img src={window.location.origin + "/assets/RJ1.png"} alt="RJ1"></img>
                        </Box>
                        <Typography component="div" sx={{ fontSize: { "xs": "12px", "sm": "12px", "md": "20px", "lg": "20px", "xl": "20px" }, fontWeight: "800px" }}>
                            {data ? (data.vacancy ? data.vacancy + " Openings" : "Not Mentioned") : <Skeleton />}
                        </Typography>
                    </Stack>
                    <Stack direction="row" sx={{
                        background: "#FFFFFF",
                        border: "1px solid #E2D7F0",
                        borderRadius: "11px",
                        padding: { "xs": "8px", "sm": "8px", "md": "15px", "lg": "15px", "xl": "15px" },
                        gap: "5px",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Box>
                            <img src={window.location.origin + "/assets/RJ2.png"} alt="RJ2"></img>
                        </Box>
                        <Typography component="div" sx={{ fontSize: { "xs": "12px", "sm": "12px", "md": "20px", "lg": "20px", "xl": "20px" }, fontWeight: "800px" }}>
                            {data ? (data.candidate_experience && data.candidate_experience.min_age ? "Min ." + data.candidate_experience.min_age + " Years" : "  Not Mentioned ") : <Skeleton />}
                        </Typography>
                    </Stack>
                    <Stack direction="row" sx={{
                        background: "#FFFFFF",
                        border: "1px solid #E2D7F0",
                        borderRadius: "11px",
                        padding: { "xs": "8px", "sm": "8px", "md": "15px", "lg": "15px", "xl": "15px" },
                        gap: "5px",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <Box>
                            <img src={window.location.origin + "/assets/RJ3.png"} alt="RJ3"></img>
                        </Box>
                        <Typography component="div" sx={{ fontSize: { "xs": "12px", "sm": "12px", "md": "20px", "lg": "20px", "xl": "20px" }, fontWeight: "800px" }}>
                            {data ? (data.prefered_degree ? data.prefered_degree.toString() : "Not Mentioned") : <Skeleton />}
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>


            <Stack direction="row" justifyContent="space-between" sx={{ margin: "20px 0px" }}>
                <Box>
                    <Typography component="div" sx={{ fontSize: { "xs": "12px", "sm": "12px", "md": "20px", "lg": "20px", "xl": "20px" }, fontWeight: "500", color: "#9589A4", margin: "10px 0px" }}>
                        {data ? (data.applied_count > 0 ? data.applied_count + " Applicants Applied" : '0  Applicants Applied') : <Skeleton />}
                    </Typography>
                </Box>
                {userType !== "employer" && <>
                    <Stack direction="row" gap={2} alignItems="center" justifyContent="center"
                        sx={{ cursor: "pointer" }}>
                        {jobSaved ? <BookmarkIcon sx={{ fill: "blue" }} onClick={() => {
                            JobSavedFunction(false)
                        }} /> : <BookmarkBorderIcon onClick={() => {
                            JobSavedFunction(true)
                        }} />}
                        {jobLiked ? <FavoriteIcon sx={{ fill: "red" }} onClick={
                            () => {
                                JobLikedFunction(false)
                            }
                        } /> : <FavoriteBorderIcon onClick={
                            () => {
                                JobLikedFunction(true)
                            }
                        } />}


                        <RWebShare
                            data={{
                                url: window.location.origin + "/job-description/" + data._id,
                            }}
                        >
                            <ShareIcon />
                        </RWebShare>

                    </Stack>
                </>}

            </Stack>

            <Typography component="div" sx={{ fontSize: { "xs": "12px", "sm": "12px", "md": "26px", "lg": "26px", "xl": "26px" }, fontWeight: "600", color: "#4E3A67" }}>
                {data ? (data.company_name ? data.company_name : "Not Mentioned") : <Skeleton />}
            </Typography>

            <Stack direction="row" gap={2} sx={{ color: "#EB6F4B" }} alignItems="center" >
                <Typography component="div" sx={{ fontSize: { "xs": "12px", "sm": "12px", "md": "20px", "lg": "20px", "xl": "20px" }, fontWeight: "800px" }}>
                    Website
                </Typography>
                <img src={window.location.origin + "/assets/Website.png"} height="20px" alt="Website" />
            </Stack>

            <Typography component="div" sx={{ fontSize: { "xs": "12px", "sm": "12px", "md": "20px", "lg": "20px", "xl": "20px" }, lineHeight: '1.5' }}>
                {data ? (data.short_description ? parse(data.short_description) :
                    "Not Mentioned") : <Skeleton />}
            </Typography>

            <Box sx={{
                background: "#E9DFF7",
                padding: "20px",
                borderRadius: "11px"
            }}>
                <Typography component="div" sx={{ fontSize: { "xs": "12px", "sm": "12px", "md": "20px", "lg": "20px", "xl": "20px" }, fontWeight: "600", color: "#4E3A67" }}>
                    Activity On JobsYahan
                </Typography>

                <Stack direction="row" justifyContent="space-between" >
                    <Stack direction="row" gap={2} alignItems="center">
                        <img src={window.location.origin + "/assets/Timeline.png"} height="20px" alt="Timeline" />
                        <Typography component="div" sx={{ fontSize: { "xs": "12px", "sm": "12px", "md": "20px", "lg": "20px", "xl": "20px" }, fontWeight: "600", color: "#4E3A67" }}>
                            Hiring since {" " + new Date(data.createdAt).toLocaleDateString()}
                        </Typography>
                    </Stack>


                </Stack>

            </Box>

            <Typography component="div" sx={{ fontSize: { "xs": "12px", "sm": "12px", "md": "26px", "lg": "26px", "xl": "26px" }, fontWeight: "600", color: "#4E3A67" }}>
                About the Job
            </Typography>

            <Typography component="div" sx={{ fontSize: { "xs": "12px", "sm": "12px", "md": "20px", "lg": "20px", "xl": "20px" }, lineHeight: '1.5' }}>
                {data ? (data.job_responsibilty ? data.job_responsibilty :
                    " Not Mentioned") : <Skeleton />}
            </Typography>

            <Typography component="div" sx={{ fontSize: { "xs": "16px", "sm": "16px", "md": "26px", "lg": "26px", "xl": "26px" }, fontWeight: "600", color: "#4E3A67" }}>
                Skill(s) Required
            </Typography>

            <Stack direction="row" gap={2} sx={{ flexWrap: "wrap" }}>

                {data ? data.skills && data.skills.map((item) => {
                    return (<>
                        <Stack direction="row" sx={{
                            background: "#FFFFFF",
                            border: "1px solid #E2D7F0",
                            borderRadius: "11px",
                            padding: { "xs": "8px", "sm": "8px", "md": "15px", "lg": "15px", "xl": "15px" },
                            gap: "5px",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>

                            <Typography component="div" sx={{ fontSize: { "xs": "12px", "sm": "12px", "md": "20px", "lg": "20px", "xl": "20px" }, fontWeight: "800px" }}>
                                {item}
                            </Typography>
                        </Stack>
                    </>)
                }) : <>
                    <Stack direction="row" sx={{
                        background: "#FFFFFF",
                        border: "1px solid #E2D7F0",
                        borderRadius: "11px",
                        padding: { "xs": "8px", "sm": "8px", "md": "15px", "lg": "15px", "xl": "15px" },
                        gap: "5px",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>

                        <Typography component="div" sx={{ fontSize: { "xs": "12px", "sm": "12px", "md": "20px", "lg": "20px", "xl": "20px" }, fontWeight: "800px" }}>
                            <Skeleton />
                        </Typography>
                    </Stack>
                </>}

            </Stack>

            {userType !== "employer" &&
                <ThemeButtonType2 className="ApplyButton" onClick={() => {
                    if (!jobApplied) {
                        JobApplied();
                    }
                }}> {jobApplied}
                    {jobApplied ? "Applied" : "Apply Now"} </ThemeButtonType2>}


        </Stack>
    </>)
}

export default JobDescriptionComponent;