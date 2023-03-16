import { Box, Stack, Typography, TextField } from "@mui/material";

import HeaderSec from "../../ThemeComponent/Common/HeaderSec";
import Footer from "../../ThemeComponent/Common/Footer";
const AboutUs = () => {
    return (<>
        <Stack
            className="AboutUsPage"
            direction="column"
            gap={2}
            sx={{
                background: "#FAF7FE",

            }}>
            <Box className="Header" sx={{
                padding: "20px",
                background: "#FAFAFA",
                position: "sticky",
                top: 0,
                zIndex: "3387"
            }} >
                <HeaderSec
                    color="black"
                    border="2px solid #8E8E8E"
                    buttonText="Employer login" />
            </Box>
            <Box className="AboutUsContent"
                sx={{ padding: "20px" }}>
                <Box
                    sx={{
                        position: "absolute",
                        height: "320.38px",
                        left: "0px",
                        transform: " matrix(-1, 0, 0, 1, 0, 0)",
                        zIndex: "1"
                    }}>
                    <img src={window.location.origin + "/assets/About1.png"} alt="About1" />
                </Box>
                <Box sx={{
                    position: "absolute",
                    // width: " 403.7px",
                    height: "380px",
                    // left: "1632px",
                    top: "805px",
                    right: "0px",
                    zIndex: "1"
                }}>
                    <img src={window.location.origin + "/assets/About2.png"} alt="About2" />
                </Box>
                <Box
                    sx={{
                        position: "absolute",
                        // width: "344px",
                        height: "320.38px",
                        left: "0px",
                        top: " 1388px",
                        zIndex: "1"
                    }}>
                    <img src={window.location.origin + "/assets/About3.png"} alt="About3" />
                </Box>


                <Box sx={{
                    background: "#FFFFFF",
                    maxWidth: "1091px",
                    margin: "0 auto",
                    border: "1px solid #E1D4F2",
                    borderRadius: "19px",
                    // minHeight: "1663px",
                    padding: { "lg": "60px 120px", "md": "60px 120px", "xs": "20px" },
                    position: "relative",
                    zIndex: "2"
                }}>
                    <Typography component="box" sx={{
                        fontSize: { "lg": "96px", "md": "96px", "xs": "50px" },
                        fontFamily: "Work Sans, sans-serif",
                        fontWeight: "700",
                        color: "#2B1E44",
                        display: "block",
                        lineHeight: "1.2"
                    }}>
                        About Us!
                    </Typography>
                    <Stack direction="row" gap={2}
                        sx={{ margin: "10px 0px" }}
                        alignItems="center">
                        <img src={window.location.origin + "/assets/About4.png"} alt="About4" height="20px" />
                        <Typography component="box"
                            sx={{
                                fontSize: { "lg": "24px", "md": "24px", "xs": "18px" },
                                fontFamily: "Work Sans, sans-serif",
                                fontWeight: "600",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.2"
                            }}>
                            JobsYahaan - A Platform for Jobs and Self-employment
                        </Typography>
                    </Stack>

                    <Stack direction="column" gap={3}>
                        <Typography component="box"
                            sx={{
                                fontSize: { "lg": "24px", "md": "24px", "xs": "18px" },
                                fontWeight: "400",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.7"
                            }}>
                            A disruptor in job search and a strong contributor to India’s
                            growth define JobsYahaan. What sets us apart is that we offer
                            work opportunities to all including those unsung heroes who give
                            you gifts, deliver you food & groceries, make you beautiful, etc.
                        </Typography>

                        <Typography component="box"
                            sx={{
                                fontSize: { "lg": "24px", "md": "24px", "xs": "18px" },
                                fontWeight: "400",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.7"
                            }}>
                            JobsYahan will help employees and employers in fulfilling their
                            respective needs. Employees can get the work they look for, while
                            employers can get suitable candidates. Employers can post various
                            frontline jobs, such as sales executives, technicians, beauticians,
                            delivery executives, field executives, on our portal.

                        </Typography>

                        <Typography component="box"
                            sx={{
                                fontSize: { "lg": "24px", "md": "24px", "xs": "18px" },
                                fontWeight: "600",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.7"
                            }}>
                            Our Vision - Make Employment Simple and Accessible
                        </Typography>
                        <Typography component="box"
                            sx={{
                                fontSize: { "lg": "24px", "md": "24px", "xs": "18px" },
                                fontWeight: "400",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.7"
                            }}>

                            Jobs are plenty in the market but somehow not as simple and accessible as
                            employees would like. We thus step in by enabling people with suitable jobs.


                        </Typography>

                        <Typography component="box"
                            sx={{
                                fontSize: { "lg": "24px", "md": "24px", "xs": "18px" },
                                fontWeight: "600",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.7"
                            }}>
                            We Also Go Local with Jobs
                        </Typography>
                        <Typography component="box"
                            sx={{
                                fontSize: { "lg": "24px", "md": "24px", "xs": "18px" },
                                fontWeight: "400",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.7"
                            }}>
                            We have tied up with small retailers, kirana stores, and various other small
                            businesses looking for support staff such as accountants, goods handlers, maintenance
                            staff, etc. Both experienced and freshers can grab this wonderful opportunity.
                            <Typography component="box"
                                sx={{
                                    fontSize: { "lg": "24px", "md": "24px", "xs": "18px" },
                                    fontWeight: "600",
                                    color: "#2B1E44",
                                    display: "block",
                                    lineHeight: "1.7"
                                }}>
                                Our motto is not only to get you a job but also to make you happy.
                            </Typography>

                        </Typography>

                    </Stack>

                    <Typography component="box" sx={{
                        fontSize: { "lg": "32px", "md": "32px", "xs": "28px" },
                        fontFamily: "Work Sans, sans-serif",
                        fontWeight: "700",
                        color: "#2B1E44",
                        display: "block",
                        lineHeight: "1.2",
                        marginTop: "100px"
                    }}>
                        Our Vision
                    </Typography>

                    <Stack direction="row" gap={2}
                        sx={{ margin: "10px 0px" }}
                        alignItems="center">
                        <img src={window.location.origin + "/assets/About5.png"} alt="About5" height="20px" />
                        <Typography component="box"
                            sx={{
                                fontSize: { "lg": "24px", "md": "24px", "xs": "18px" },
                                fontFamily: "Work Sans, sans-serif",
                                fontWeight: "600",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.7"
                            }}>
                            Make Employment Simple and Accessible to All
                        </Typography>
                    </Stack>

                    <Stack direction="column" gap={3}>
                        <Typography component="box"
                            sx={{
                                fontSize: { "lg": "24px", "md": "24px", "xs": "18px" },
                                fontWeight: "400",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.7"
                            }}>
                            Jobs are plenty in the market but somehow not as simple and accessible
                            as employees would like. The lack of work experience, getting uninteresting
                            work, and the lack of flexibility, often lead to unemployment among people
                            despite jobs available in the market. That’s where we step in by enabling
                            the right work for all.
                        </Typography>

                        <Typography component="box"
                            sx={{
                                fontSize: { "lg": "24px", "md": "24px", "xs": "18px" },
                                fontWeight: "400",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.7"
                            }}>
                            But equally important is to know what constitutes the right work for employees.
                            Often people choose jobs in a haste and resign a few months after joining the
                            company. Some may do it intentionally, but most would do it because of a mismatch
                            between their interests and job requirements. This is where we make a difference!
                        </Typography>

                        <Typography component="box"
                            sx={{
                                fontSize: { "lg": "24px", "md": "24px", "xs": "18px" },
                                fontWeight: "400",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.7"
                            }}>
                            We profile candidates based on their interests, skills and experience.
                            So, the job recommendations prepared by us would suit you and bring out
                            your best, helping you climb new professional heights.
                        </Typography>
                    </Stack>

                    <Box sx={{
                        background: "#F7F0FF",
                        border: "1px solid #E9DFF7",
                        borderRadius: "7px",
                        padding: "20px",
                        margin: "50px 0px"
                    }}>

                        <Stack direction="row" gap={2}
                            sx={{ margin: "10px 0px" }}
                            alignItems="center">
                            <img src={window.location.origin + "/assets/About6.png"} alt="About6" height="20px" />
                            <Typography component="box"
                                sx={{
                                    fontSize: { "lg": "24px", "md": "24px", "xs": "18px" },
                                    fontFamily: "Work Sans, sans-serif",
                                    fontWeight: "600",
                                    color: "#2B1E44",
                                    display: "block",
                                    lineHeight: "1.7"
                                }}>
                                We Also Go Local with Jobs
                            </Typography>
                        </Stack>
                        <Typography component="box"
                            sx={{
                                fontSize: { "lg": "24px", "md": "24px", "xs": "18px" },
                                fontWeight: "400",
                                color: "#2B1E44",
                                display: "block",
                                lineHeight: "1.7"
                            }}>
                            We have tied up with small retailers, kirana stores,
                            and various other small businesses looking for support
                            staff such as accountants, goods handlers, maintenance staff, etc.
                            These people can get hired on a variable pay model and earn as much as
                            their salaried counterparts. Both experienced and freshers can tap into
                            this wonderful opportunity. Work doors are wide open for you with us! Our
                            motto is not only to get you a job but also to make you happy.

                        </Typography>


                    </Box>



                </Box>

            </Box>
            <Footer />
        </Stack></>)
}

export default AboutUs;
