import { Box, Stack, Container, Typography, Divider, Pagination, TextField, AvatarGroup, Avatar, Button } from "@mui/material";

import MessageIcon from '@mui/icons-material/Message';
import SearchIcon from '@mui/icons-material/Search';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { Carousel } from 'react-responsive-carousel';

import ButtonType2 from "../../ThemeComponent/Common/ButtonType2";

import { Link, useOutletContext } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import JobComponent from "../../ThemeComponent/JobComponent";

import { Chart as ChartJS, registerables } from 'chart.js';
import { Bar } from 'react-chartjs-2'
ChartJS.register(...registerables);

const EmployerDashboard = () => {

    const user = useOutletContext();
    const api_url = useSelector(state => state.api_url);

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage, setDataPerPage] = useState(2);
    const [dayMessage, setDayMessage] = useState("");
    const DashboardValues = [
        {
            id: 1,
            count: 1,
            name: "Active Jobs",
            logo: ""
        },

        {
            id: 2,
            count: 10,
            name: "Shortlisted Candidate to be reviewed",
            logo: ""
        },
        {
            id: 3,
            count: 0,
            name: "Interview schedule for Today",
            logo: ""
        }
    ]
    const date = new Date();
    const showTime = date.getHours();

    const state = {
        labels: ['All Job', 'Published Job', 'Unpublished Job',
            'Under Review', 'Rejected'],
        datasets: [
            {
                label: 'Job',
                backgroundColor: '#2B1E44',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                data: [65, 59, 80, 81, 56]
            }
        ]
    }


    useEffect(() => {
        const getpostedjobs = async () => {
            let data = await fetch(api_url + "/api/job/getpostedjobs", {
                method: "POST",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    userid: user._id

                }),
            });
            if (data.ok) {
                data = await data.json();
                console.log(data)
                setData(data.data)

            }
        };
        getpostedjobs();

    }, []);

    useEffect(() => {
        if (showTime <= 12) setDayMessage("Good Morning")
        else if (showTime >= 12 && showTime < 18) setDayMessage("Good AfterNoon")
        else setDayMessage("Good Evening")
    }, [showTime]);

    //Pagination 
    const IndexOfLastData = currentPage * dataPerPage;
    const IndexOfFirstData = IndexOfLastData - dataPerPage;
    const jobs = data.slice(IndexOfFirstData, IndexOfLastData);

    return (<>
        {console.log(user)}
        <Stack direction="row" gap={4} sx={{ padding: "50px" }}>

            <Stack direction="column" gap={3} sx={{ width: "80%" }}>
                <Stack direction="column" gap={4} sx={{ width: "98%", background: "#FFFFFF", borderRadius: "10px", padding: "10px" }}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between">
                        <Box>
                            <Typography component="div" sx={{ fontSize: "18px", fontWeight: "600" }}>
                                Connect Your Account With Linkedin
                            </Typography>
                            <Typography component="div" sx={{ fontSize: "14px" }}>
                                Connect your linkedin account and automatically promote your jobs in your network
                            </Typography>
                        </Box>
                        <Stack direction="row" gap={2} sx={{ alignItems: "center", justifyContent: "center" }}>
                            <Box width="40px" sx={{ borderRadius: "50%" }}>
                                <img src="./assets/LinkedIn.png" width="100%" style={{
                                    borderRadius: "50%",
                                    objectFit: "cover"
                                }}></img>
                            </Box>
                            <Typography component="div" sx={{ fontSize: "14px" }}>
                                Connect with LinkedIn
                            </Typography>
                        </Stack>

                    </Stack>
                </Stack>
                <Stack sx={{ width: "100%", background: "#FFFFFF", minHeight: "200px", borderRadius: "10px" }}>
                    <Container sx={{ height: "70px" }}>
                        <Stack direction="row" alignItems="center" justifyContent="space-between">
                            <Box>
                                <Typography component="span" sx={{ fontSize: "30px" }}>
                                    {dayMessage}, {user && user.employername}
                                </Typography>
                            </Box>
                            <Box>
                                <ButtonType2 ButtonText="Post a Job" ClickEvent={() => window.location.href = window.location.href + "/post-a-job"}></ButtonType2>
                            </Box>

                        </Stack>
                    </Container>

                    <Stack gap={4} direction="row" divider={<Divider orientation="vertical" flexItem />}
                        sx={{ background: "#f3fbfb", height: "130px", borderRadius: "10px", padding: "20px" }}>

                        <Stack gap={1} sx={{ minWidth: "100px" }}>
                            <Typography component="div" sx={{ fontSize: "14px" }}>
                                0
                            </Typography>
                            <Typography component="div" sx={{ fontSize: "14px" }}>
                                Posted Jobs
                            </Typography>
                        </Stack>

                        <Stack gap={1} sx={{ minWidth: "100px" }}>
                            <Typography component="div" sx={{ fontSize: "14px" }}>
                                3
                            </Typography>
                            <Typography component="div" sx={{ fontSize: "14px" }}>
                                Saved Candidate
                            </Typography>
                        </Stack>

                        {DashboardValues.map((item) => {
                            return (<Stack gap={1} sx={{ minWidth: "100px" }}>
                                <Typography component="div" sx={{ fontSize: "14px" }}>
                                    {item.count}
                                </Typography>
                                <Typography component="div" sx={{ fontSize: "14px" }}>
                                    {item.name}
                                </Typography>
                            </Stack>)
                        })}

                    </Stack>
                </Stack>

                <Stack direction="row">
                    <Box sx={{ width: "70%", padding: "20px" }}>
                        <Bar
                            data={state}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Average Rainfall per month',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'right'
                                }
                            }}
                        />
                    </Box>
                    <Box sx={{
                        width: "30%",
                        background: "#FFFFFF",
                        borderRadius: "10px"
                    }}>
                        <Box sx={{
                            background: "#f3fbfb", padding: "10px",
                        }}>
                            <Typography component="div" sx={{ fontSize: "18px", fontWeight: "600" }}>
                                0 interviews scheduled
                            </Typography>
                            <Typography component="div" sx={{ fontSize: "14px" }}>
                                <Link to="/">See Demo</Link>  on how to scheduled Video Interviews
                            </Typography>
                        </Box>

                        <Stack sx={{ padding: "10px" }} gap={2}>
                            <Typography component="div" sx={{ fontSize: "16px", fontWeight: "600" }}>
                                Start Interviewing Today
                            </Typography>
                            <Typography component="div" sx={{ fontSize: "14px" }}>
                                Andriod Developer -Kotlin/Java (4-10 yrs)
                            </Typography>

                            <Typography component="div" sx={{ fontSize: "14px", fontWeight: "600" }}>
                                Shortlisted Candidate
                            </Typography>

                            <Stack alignItems="flex-start">
                                <AvatarGroup max={4} alignItems="flex-start">
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                                </AvatarGroup>
                            </Stack>

                            <Link to="/">
                                <Typography component="div" sx={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    textAlign: "center",
                                    fontStyle: "none"
                                }}>
                                    View All
                                </Typography></Link>

                        </Stack>
                    </Box>
                </Stack>


                <Stack gap={2} direction="row" sx={{ minHeight: "600px" }}>
                    <Stack direction="column" gap={2} sx={{ width: "60%", height: "300px" }}>
                        <Box>
                            <Typography component="span" sx={{ fontSize: "18px", fontWeight: "600" }}>
                                Recent Jobs
                            </Typography>
                            <Box sx={{ height: "200px" }}>
                                {
                                    jobs.length > 0 ? jobs.map((item) => {
                                        return (<>
                                            <JobComponent key={item.id} data={item} />
                                        </>)
                                    })
                                        : " There is no data present"
                                }
                            </Box>
                            <Box >
                                <Pagination count={Math.ceil(data.length / dataPerPage)} page={currentPage} onChange={(event, value) => setCurrentPage(value)} />
                            </Box>
                        </Box>

                        <Box >
                            <Typography component="span" sx={{ fontSize: "18px", fontWeight: "600" }}>
                                Hiring for other roles
                            </Typography>
                            <Stack direction="column" gap={2} sx={{ background: "#FFFFFF", height: "200px", padding: "10px" }}>
                                <Box> Hello 1</Box>
                                <Box> Hello 1</Box>
                                <Box> Hello 1</Box>

                            </Stack>
                        </Box>
                    </Stack>

                    <Box sx={{ width: "40%", borderRadius: "10px" }}>
                        <Typography component="span" sx={{ fontSize: "18px", fontWeight: "600" }}>
                            Explore
                        </Typography>
                        <Box sx={{
                            background: "#f3fbfb", padding: "10px",
                        }}>
                            <Typography component="div" sx={{ fontSize: "18px", fontWeight: "600" }}>
                                <Link to="">
                                    Calculas
                                </Link>
                            </Typography>
                            <Typography component="div" sx={{ fontSize: "14px" }}>
                                Talent Mapping & Intelligence Tool
                            </Typography>
                        </Box>
                        <Box sx={{
                            background: "#FFFFFF", padding: "10px"
                        }}>
                            <Carousel
                                autoPlay="true"
                                infiniteLoop="true"
                                showIndicators={false}
                            >

                                <Stack direction="column" gap={2} alignItems="center" sx={{ height: "300px", padding: "20px" }}
                                >
                                    <Typography component="div" sx={{ fontSize: "14px", fontWeight: "600" }}>
                                        Demo 1
                                    </Typography>

                                    <Box sx={{ width: "100px" }} >
                                        <img src="./assets/companyLogo.png" width="100%" alt="roboLogo"></img>
                                    </Box>
                                    <Typography component="div" sx={{ fontSize: "14px" }}>
                                        Loreum epsum jkldjflskdjflksj
                                        jkldfjlksdjflksdjf
                                        jkljlkjdflksdjflsdf
                                        epsum jkldjflskdjflksj
                                        jkldfjlksdjflksdjf
                                        jkljlkjdflksdjflsdf
                                    </Typography>

                                </Stack>

                                <Stack direction="column" gap={2} alignItems="center" sx={{ height: "300px", padding: "20px" }}
                                >
                                    <Typography component="div" sx={{ fontSize: "14px", fontWeight: "600" }}>
                                        Demo 1
                                    </Typography>

                                    <Box sx={{ width: "100px" }} >
                                        <img src="./assets/companyLogo.png" width="100%" alt="roboLogo"></img>
                                    </Box>
                                    <Typography component="div" sx={{ fontSize: "14px" }}>
                                        Loreum epsum jkldjflskdjflksj
                                        jkldfjlksdjflksdjf
                                        jkljlkjdflksdjflsdf Loreum epsum jkldjflskdjflksj
                                        jkldfjlksdjflksdjf
                                        jkljlkjdflksdjflsdf
                                    </Typography>

                                </Stack>





                            </Carousel>

                            <Box sx={{ textAlign: "center" }}>
                                <Button variant="outlined">Know More</Button>
                            </Box>
                        </Box>

                    </Box>

                </Stack>


            </Stack>

            <Stack direction="column" gap={3} sx={{ width: "20%" }}>
                <Stack direction="row" gap={2} alignItems="center" justifyContent="center"
                    sx={{
                        // background: "white",
                        padding: "10px",
                        borderRadius: "10px",
                        borderBottom: "1px solid #d9d9d9"

                    }}>
                    <MessageIcon></MessageIcon>
                    <TextField placeholder="Your Chats" variant="standard" InputProps={{
                        disableUnderline: true,
                    }} />
                    <SearchIcon></SearchIcon>
                </Stack>

                <Stack direction="row" gap={2} alignItems="center"
                    sx={{
                        // background: "white",
                        padding: "10px",
                        borderRadius: "10px",
                        borderBottom: "1px solid #d9d9d9"

                    }}>
                    <Box sx={{ width: "30px" }} >
                        <img src="./assets/companyLogo.png" width="100%" alt="roboLogo"></img>
                    </Box>
                    <Stack direction="column" alignItems="center" >
                        <Typography component="div" >
                            JobYahan ibot
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "12px" }}>
                            Your Personal Assistant
                        </Typography>
                    </Stack>

                </Stack>

                <Stack direction="column" gap={2} alignItems="center"
                    sx={{
                        // background: "white",
                        padding: "10px",
                        borderRadius: "10px",
                        borderBottom: "1px solid #d9d9d9"

                    }}>
                    <Typography component="div" sx={{ fontSize: "25px" }}>
                        Become a Jobyahan certified Recuriter
                    </Typography>

                    <Box sx={{ width: "100px" }} >
                        <img src="./assets/companyLogo.png" width="100%" alt="roboLogo"></img>
                    </Box>

                    <Link to="/">
                        <Stack direction="row" alignItems="center">

                            <Typography component="div">
                                Read More
                            </Typography>
                            <ChevronRightIcon></ChevronRightIcon>
                        </Stack>

                    </Link>



                </Stack>

                <Box sx={{
                    // background: "white",
                    padding: "10px",
                    borderRadius: "10px",
                    borderBottom: "1px solid #d9d9d9"

                }}>
                    <Typography component="div" sx={{ fontSize: "20px" }}>
                        For Sales Enquiries
                    </Typography>

                </Box>

                <Box sx={{
                    // background: "white",
                    padding: "10px",
                    borderRadius: "10px",
                    borderBottom: "1px solid #d9d9d9"

                }}>
                    <Typography component="div">
                        Call on: 1800-103-7344
                    </Typography>
                    <Typography component="div">
                        (Toll Free: 9:30 AM to 6:30 PM)
                    </Typography>

                </Box>
            </Stack>
        </Stack>

    </>)
}

export default EmployerDashboard;