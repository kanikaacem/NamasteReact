import { Box, Stack, Typography } from "@mui/material";
const Reviews = () => {

    // const [item, setItem] = useState(reviews);

    // const splitedReview = [];
    // while (reviews.length > 0) {
    //     splitedReview.push(reviews.splice(0, 2));
    // }

    // useEffect(() => {
    //     const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    //     console.log(item);
    //     // if (!isMobile)
    //     //     // setItem(2);
    // })


    return (<>
        <Box className="reviews"
            sx={{
                background: "#FAFAFA",
                padding: "100px 50px"
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
                        <Typography component="div" sx={{ fontSize: "20px", width: "300px" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                        </Typography>
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
                        <Typography component="div" sx={{ fontSize: "20px", width: "200px" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
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
                        <Typography component="div" sx={{ fontSize: "20px", width: "250px" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
                        </Typography>
                    </Stack>
                </Box>


                <Box
                    sx={{
                        position: "absolute",
                        top: "465px",
                        left: "223px",
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
                            top: "180px",
                            left: "150px"
                        }}>
                        <Box sx={{ width: "80px", height: "80px" }}>
                            <img src={window.location.origin + '/assets/Person4.png'} alt="Person4" />
                        </Box>
                        <Typography component="div" sx={{ fontSize: "20px", width: "200px" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Typography>
                    </Box>
                </Box>


                <Box
                    sx={{
                        position: "absolute",
                        left: "500px",
                        top: "400px"
                    }}>
                    <Box sx={{ position: "relative" }}>
                        <img src={window.location.origin + "/assets/Vector4.png"} alt="Vector4" />
                    </Box>
                    <Stack
                        direction="row" gap={2}
                        sx={{
                            position: "absolute",
                            top: "180px",
                            left: "150px"
                        }}>
                        <Box sx={{ width: "80px", height: "80px" }}>
                            <img src={window.location.origin + '/assets/Person5.png'} alt="Person5" />
                        </Box>
                        <Typography component="div" sx={{ fontSize: "20px", width: "200px" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Typography></Stack>
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
                        <Typography component="div" sx={{ fontSize: "20px", width: "200px" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </Typography>
                    </Stack>
                </Box>
            </Box>
            {/* <Box sx={{
                background: "#FAFAFA",
                padding: "20px 0px",
                color: "445578"
            }}>
                < Heading text="What Customers Say about us!" />

            </Box>
            <Carousel
                autoPlay="true"
                infiniteLoop="true"
            >
                {splitedReview.map((reviews, index) => {
                    return (<>
                        <div className="reviewItem" key={index}>
                            <UserReview reviews={reviews} />
                        </div>
                    </>)
                })}
            </Carousel> */}

        </Box>

    </>)
}

export default Reviews;