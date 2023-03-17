import { Box, Stack, Typography } from "@mui/material";
const Reviews = () => {
    return (<>
        <Box className="reviews"
            sx={{
                background: "#FAFAFA",
                padding: "100px 50px",
                display: window.innerWidth > 1790 ? "block" : "none"
            }}>
            <Typography component="span"
                sx={{
                    fontFamily: 'Work Sans',
                    fontWeight: "700",
                    fontSize: "80px",
                    textAlign: "center",
                    color: "#4E3A67",
                    display: "block"
                }}>
                What Customers Say about us!

            </Typography>

            <Box sx={{
                position: "relative",
                height: "1000px"
            }}>

                <Box
                    sx={{
                        position: "absolute",
                        top: "200px",
                        left: "100px",
                        zIndex: "5"
                    }}>
                    <Box sx={{ position: "relative" }}>
                        <img
                            src={window.location.origin + "/assets/Vector.png"} alt="Vector" />
                    </Box>
                    <Stack direction="row" gap={2} sx={{
                        position: "absolute",
                        top: "150px",
                        left: "200px",
                    }}>
                        <Box sx={{ width: "80px", height: "80px" }}>
                            <img src={window.location.origin + '/assets/Person1.png'} alt="Person1" />
                        </Box>
                        <Box>
                            <Typography component="span" sx={{ fontSize: "20px", fontWeight: "700", color: "#4E3A67", width: "400px" }}>
                                Atul Mishra /
                                <Typography component="span" sx={{ marginLeft: "10px", fontSize: "20px", width: "400px", color: "#FC9A7E" }}>
                                    Employer
                                </Typography>
                            </Typography>

                            <Typography component="div" sx={{ fontSize: "16px", width: "400px", color: "#4E3A67" }}>
                                JobsYahan helped us find candidates for all kinds of jobs.
                                Today, we have a robust workforce that accepts and overcomes challenges.
                                All thanks to JobsYahaan for the same. Keep up the good work!
                            </Typography>
                        </Box>

                    </Stack>
                </Box>


                <Box
                    sx={{
                        position: "absolute",
                        left: "700px",
                        top: "96px",
                        zIndex: "4"
                    }}>

                    <Box sx={{ position: "relative" }}>
                        <img src={window.location.origin + "/assets/Vector1.png"} alt="Vector1" />
                    </Box>
                    <Stack direction="column"
                        sx={{
                            position: "absolute",
                            top: "100px",
                            left: "147px"
                        }}>

                        <Box sx={{ width: "80px", height: "80px" }}>
                            <img src={window.location.origin + '/assets/Person2.png'} alt="Person2" />
                        </Box>
                        <Typography component="span" sx={{ fontSize: "20px", fontWeight: "700", color: "#4E3A67", width: "400px" }}>
                            Bonte /
                            <Typography component="span" sx={{ marginLeft: "10px", fontSize: "20px", width: "400px", color: "#FC9A7E" }}>
                                Employer
                            </Typography>
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "16px", width: "180px", color: "#4E3A67" }}>
                            We have successfully tracked candidates through JobsYahan, a job portal that
                            gives a seamless experience to the users. You get suitable candidates here in a few clicks.
                        </Typography>
                    </Stack>
                </Box>


                <Box
                    sx={{
                        position: "absolute",
                        left: "950px",
                        top: "150px",
                        zIndex: "3"
                    }}>
                    <Box sx={{
                        position: "relative"
                    }}>
                        <img src={window.location.origin + "/assets/Vector2.png"} alt="Vector2" />

                    </Box>
                    <Stack direction="row" gap={2}
                        sx={{
                            position: "absolute",
                            top: "133px",
                            left: "155px"
                        }}>
                        <Box sx={{ width: "80px", height: "80px" }}>
                            <img src={window.location.origin + '/assets/Person3.png'} alt="Person3" />
                        </Box>
                        <Box>
                            <Typography component="span" sx={{ fontSize: "20px", fontWeight: "700", color: "#4E3A67", width: "400px" }}>
                                Deelip Mehra /
                                <Typography component="span" sx={{ marginLeft: "10px", fontSize: "20px", width: "400px", color: "#FC9A7E" }}>
                                    Employees
                                </Typography>
                            </Typography>
                            <Typography component="div" sx={{ fontSize: "16px", width: "300px" }}>
                                I took a break from work for seven months. But little did I know that I had to wait for another five months to find
                                a new job. I was frustrated during my job search until I applied on JobsYahan. I got the job quickly.
                                Thanks guys for your support.
                            </Typography>
                        </Box>
                    </Stack>
                </Box>


                <Box
                    sx={{
                        position: "absolute",
                        top: "520px",
                        left: "207px",
                        zIndex: "3"
                    }}>
                    <Box sx={{
                        position: "relative"
                    }}>
                        <img src={window.location.origin + "/assets/Vector3.png"} alt="Vector3" />
                    </Box>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "114px",
                            left: "121px"
                        }}>

                        <Box sx={{ width: "80px", height: "80px" }}>
                            <img src={window.location.origin + '/assets/Person4.png'} alt="Person4" />
                        </Box>
                        <Typography component="span" sx={{ fontSize: "20px", fontWeight: "700", color: "#4E3A67", width: "400px" }}>
                            Rajat Kundra /
                            <Typography component="span" sx={{ fontSize: "20px", width: "400px", color: "#FC9A7E" }}>
                                Employees
                            </Typography>
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "15px", width: "220px", marginRight: "0px" }}>
                            I was searching for jobs but was not able to find one. One day I tried JobsYahan,
                            although with not much hope given my experience before that. But things changed as
                            I found the job I was looking for. Kudos to JobsYahan!
                        </Typography>
                    </Box>
                </Box>


                <Box
                    sx={{
                        position: "absolute",
                        left: "437px",
                        top: "434px"
                    }}>
                    <Box sx={{ position: "relative" }}>
                        <img src={window.location.origin + "/assets/Vector4.png"} alt="Vector4" />
                    </Box>
                    <Stack
                        direction="row" gap={2}
                        sx={{
                            position: "absolute",
                            top: "180px",
                            left: "110px"
                        }}>
                        <Box sx={{ width: "80px", height: "80px" }}>
                            <img src={window.location.origin + '/assets/Person5.png'} alt="Person5" />
                        </Box>
                        <Box>
                            <Typography component="span" sx={{ fontSize: "20px", fontWeight: "700", color: "#4E3A67", width: "400px" }}>
                                Neha Rai /
                                <Typography component="span" sx={{ marginLeft: "10px", fontSize: "20px", width: "400px", color: "#FC9A7E" }}>
                                    Employees
                                </Typography>
                            </Typography>
                            <Typography component="div" sx={{ fontSize: "16px", width: "300px" }}>
                                Interviewers were rejecting me as I didn’t have work experience.
                                It all changed when I applied on JobsYahan.
                                Not only have I got the job but have also got that flexibility
                                one wants in a job. Thanks JobsYahan for all your help.
                            </Typography>
                        </Box>
                    </Stack>
                </Box>


                <Box
                    sx={{
                        position: "absolute",
                        top: "386px",
                        left: "900px",
                        zIndex: "5"
                    }}>

                    <Box sx={{
                        position: "relative"
                    }}>
                        <img src={window.location.origin + "/assets/Vector5.png"} alt="Vector5" />
                    </Box>
                    <Stack direction='row' gap={2}
                        sx={{
                            position: "absolute",
                            top: "200px",
                            left: "200px"
                        }}>
                        <Box sx={{ width: "80px", height: "80px" }}>
                            <img src={window.location.origin + '/assets/Person6.png'} alt="Person6" />
                        </Box>
                        <Box>
                            <Typography component="span" sx={{ fontSize: "20px", fontWeight: "700", color: "#4E3A67", width: "400px" }}>
                                Shakshi Gupta /
                                <Typography component="span" sx={{ marginLeft: "10px", fontSize: "20px", width: "400px", color: "#FC9A7E" }}>
                                    Employer
                                </Typography>
                            </Typography>
                            <Typography component="div" sx={{ fontSize: "16px", width: "300px" }}>
                                We have successfully tracked candidates through JobsYahan,
                                a job portal that gives a seamless experience to the users.
                                You get suitable candidates here in a few clicks.
                            </Typography>
                        </Box>
                    </Stack>
                </Box>
            </Box>

        </Box>

    </>)
}

export default Reviews;