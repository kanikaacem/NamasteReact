import { Box, Button, Stack, Typography, Divider, Tabs, Tab, MenuItem, Select, Badge } from "@mui/material";
import ChatComponent from "../../ThemeComponent/Common/ChatComponent";
import SocialMedia from "../../ThemeComponent/Common/SocialMedia";
import { useState, useEffect } from "react"
const AppliedCandidate = () => {
    const [value, setValue] = useState(0)

    return (<>

        <Box className="AppliedCandidatePage"
            sx={{
                minHeight: "100vh"
            }}>
            <Stack direction="row" gap={2} className="AppliedCandidatePageWrapper" sx={{
                padding: {
                    "lg": "50px 20px", "md": "0px", "xs": "0px"
                }
            }}>
                <Box sx={{
                    width: {
                        "lg":
                            `calc(100vw - 451px)`, "md": "100%", "xs": "100%",
                        padding: "20px"
                    }
                }}>
                    <Stack direction="row" justifyContent="space-between">
                        <Box>
                            <Typography component="div" sx={{ fontSize: "26px", color: "#4E3A67", fontWeight: "700" }}>
                                Linux Solution Engineer
                            </Typography>
                            <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67" }}>
                                Noida   4-10 yrs |  Job Code: 1135573
                            </Typography>
                        </Box>
                    </Stack>

                    <Stack direction="row" gap={2}

                        sx={{
                            margin: "20px 0px"
                        }}>
                        <Typography component="div" sx={{ fontSize: "26px", color: "#4E3A67", fontWeight: "700" }}>
                            Recommended Candidates (10)
                        </Typography>
                        <Typography component="div" sx={{
                            fontSize: "26px", color: "#FC9A7E", fontWeight: "700"
                        }}>
                            Applications(10)
                        </Typography>
                    </Stack>

                    <Stack direction="row" gap={2}
                        justifyContent={{ "xl": "space-between" }}
                        sx={{
                            margin: "20px 0px",
                            flexWrap: "wrap"
                        }}>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67", fontWeight: "700" }}>
                            ALL (110)
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67", fontWeight: "700" }}>
                            UNREAD (4)
                        </Typography>
                        <Typography component="div" sx={{
                            fontSize: "20px", color: "#FC9A7E", fontWeight: "700"
                        }}>
                            REVIEWED (76)
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67", fontWeight: "700" }}>
                            SHORTLISTED (29)
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67", fontWeight: "700" }}>
                            REJECTED (0)
                        </Typography>
                        <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67", fontWeight: "700" }}>
                            SAVED (1)
                        </Typography>

                    </Stack>
                    <hr sx={{
                        border: "1px solid #E1D4F2"

                    }}></hr>

                    <Stack className="Candidates" direction="column" gap={2} >


                        <Box sx={{
                            background: " #FFFFFF",
                            border: "1px solid #E2D7F0",
                            borderRadius: "19px",
                            padding: "20px",
                            width: { "lg": "100%", "md": "96%", "xs": "96%" }
                        }}>
                            <Stack direction={{ "lg": "row", "md": "row", "xs": "column" }} gap={1} >
                                <Box sx={{ width: { "lg": "20%", "md": "20%", "xs": "100%" } }}>
                                    <Badge color="secondary" variant="dot" >
                                        <img src={window.location.origin + "/assets/Person1.png"} alt="Person1" />
                                    </Badge>

                                </Box>
                                <Stack direction="column" gap={2} sx={{
                                    width:
                                        { "lg": "30%", "md": "30%", "xs": "100%" }
                                }}>
                                    <Typography component="div" sx={{ fontSize: "24px", color: "#4E3A67", fontWeight: "700" }}>
                                        Gyanendra Chaudhary
                                    </Typography>
                                    <Stack direction="row" gap={2}>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                                            Experience:
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            2
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" gap={2}>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                                            Location:
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            Delhi
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" gap={2}>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                                            Applied on:
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            20-02-2023
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" gap={2}>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                                            Notice Period:
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            Immediately Available
                                        </Typography>
                                    </Stack>


                                </Stack>
                                <Stack direction="column" sx={{
                                    width: { "lg": "25%", "md": "25%", "xs": "100%" }
                                }} gap={2}>
                                    <Stack direction="column" gap={1}>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                                            Unnati
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            Android developer
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            Dec,2021 to Present
                                        </Typography>
                                    </Stack>

                                    <Stack direction="column" gap={1}>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                                            RakVin Technologies Pvt. Ltd.
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            Android developer
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            July, 2019 to Dec,2020
                                        </Typography>
                                    </Stack>
                                </Stack>

                                <Stack direction="column" sx={{
                                    width: { "lg": "25%", "md": "25%", "xs": "100%" }
                                }} gap={2}>
                                    <Stack direction="column" gap={1}>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                                            Greater Noida Institute of Technology
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            MCA ( Full Time)
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            2014 to 2018
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>

                            <Stack direction="row"
                                sx={{
                                    margin: "50px 0px",
                                    flexWrap: "wrap",
                                    rowGap: "15px",
                                    justifyContent: { "lg": "space-between", "md": "center", "xs": "center" }
                                }}>
                                <Stack direction="row" gap={2}>
                                    <Button type="button"
                                        sx={{
                                            background: " #FC9A7E",
                                            border: "1px solid #E2D7F0",
                                            borderRadius: "7px",
                                            color: " #4E3A67",
                                            padding: "10px",
                                            fontWeight: "700",
                                            minWidth: "225px",
                                            fontSize: "18px",
                                            "&:hover": {
                                                background: " #FC9A7E",
                                                border: "1px solid #E2D7F0",
                                                borderRadius: "7px",
                                                color: " #4E3A67",
                                                padding: "10px",
                                                fontWeight: "700",
                                                minWidth: "225px",
                                                fontSize: "18px",
                                            }
                                        }}> Shortlist</Button>
                                    <Button type="button"
                                        sx={{
                                            background: "#FFFFFF",
                                            border: " 1px solid #E2D7F0",
                                            borderRadius: "7px",
                                            color: " #4E3A67",
                                            padding: "10px",
                                            fontWeight: "700",
                                            minWidth: "225px",
                                            fontSize: "18px",

                                            "&:hover": {
                                                background: "#FFFFFF",
                                                border: " 1px solid #E2D7F0",
                                                borderRadius: "7px",
                                                color: " #4E3A67",
                                                padding: "10px",
                                                fontWeight: "700",
                                                minWidth: "225px",
                                                fontSize: "18px",
                                            }
                                        }}> Reject</Button>

                                </Stack>
                                <Stack direction="row" gap={2}>
                                    <Button type="button"
                                        sx={{
                                            background: "#FFFFFF",
                                            border: " 1px solid #E2D7F0",
                                            borderRadius: "7px",
                                            color: " #4E3A67",
                                            padding: "10px",
                                            fontWeight: "700",
                                            minWidth: "225px",
                                            fontSize: "18px",

                                            "&:hover": {
                                                background: "#FFFFFF",
                                                border: " 1px solid #E2D7F0",
                                                borderRadius: "7px",
                                                color: " #4E3A67",
                                                padding: "10px",
                                                fontWeight: "700",
                                                minWidth: "225px",
                                                fontSize: "18px",
                                            }
                                        }}>
                                        <Stack direction="row" gap={2} alignItems="center">
                                            <img src={window.location.origin + '/assets/Call.png'} alt="call" ></img>
                                            <Box> Call</Box>
                                        </Stack></Button>

                                    <Button type="button"
                                        sx={{
                                            background: "#FFFFFF",
                                            border: " 1px solid #E2D7F0",
                                            borderRadius: "7px",
                                            color: " #4E3A67",
                                            padding: "10px",
                                            fontWeight: "700",
                                            minWidth: "225px",
                                            fontSize: "18px",

                                            "&:hover": {
                                                background: "#FFFFFF",
                                                border: " 1px solid #E2D7F0",
                                                borderRadius: "7px",
                                                color: " #4E3A67",
                                                padding: "10px",
                                                fontWeight: "700",
                                                minWidth: "225px",
                                                fontSize: "18px",
                                            }
                                        }}>
                                        Other Actions
                                    </Button>
                                </Stack>
                            </Stack>
                        </Box>
                        <Box sx={{
                            background: " #FFFFFF",
                            border: "1px solid #E2D7F0",
                            borderRadius: "19px",
                            padding: "20px",
                            width: { "lg": "100%", "md": "96%", "xs": "96%" }
                        }}>
                            <Stack direction={{ "lg": "row", "md": "row", "xs": "column" }} gap={1} >
                                <Box sx={{ width: { "lg": "20%", "md": "20%", "xs": "100%" } }}>
                                    <Badge color="secondary" variant="dot" >
                                        <img src={window.location.origin + "/assets/Person1.png"} alt="Person1" />
                                    </Badge>

                                </Box>
                                <Stack direction="column" gap={2} sx={{
                                    width:
                                        { "lg": "30%", "md": "30%", "xs": "100%" }
                                }}>
                                    <Typography component="div" sx={{ fontSize: "24px", color: "#4E3A67", fontWeight: "700" }}>
                                        Gyanendra Chaudhary
                                    </Typography>
                                    <Stack direction="row" gap={2}>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                                            Experience:
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            2
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" gap={2}>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                                            Location:
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            Delhi
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" gap={2}>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                                            Applied on:
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            20-02-2023
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" gap={2}>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                                            Notice Period:
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            Immediately Available
                                        </Typography>
                                    </Stack>


                                </Stack>
                                <Stack direction="column" sx={{
                                    width: { "lg": "25%", "md": "25%", "xs": "100%" }
                                }} gap={2}>
                                    <Stack direction="column" gap={1}>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                                            Unnati
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            Android developer
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            Dec,2021 to Present
                                        </Typography>
                                    </Stack>

                                    <Stack direction="column" gap={1}>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                                            RakVin Technologies Pvt. Ltd.
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            Android developer
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            July, 2019 to Dec,2020
                                        </Typography>
                                    </Stack>
                                </Stack>

                                <Stack direction="column" sx={{
                                    width: { "lg": "25%", "md": "25%", "xs": "100%" }
                                }} gap={2}>
                                    <Stack direction="column" gap={1}>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                                            Greater Noida Institute of Technology
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            MCA ( Full Time)
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            2014 to 2018
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>

                            <Stack direction="row"
                                sx={{
                                    margin: "50px 0px",
                                    flexWrap: "wrap",
                                    rowGap: "15px",
                                    justifyContent: { "lg": "space-between", "md": "center", "xs": "center" }
                                }}>
                                <Stack direction="row" gap={2}>
                                    <Button type="button"
                                        sx={{
                                            background: " #FC9A7E",
                                            border: "1px solid #E2D7F0",
                                            borderRadius: "7px",
                                            color: " #4E3A67",
                                            padding: "10px",
                                            fontWeight: "700",
                                            minWidth: "225px",
                                            fontSize: "18px",
                                            "&:hover": {
                                                background: " #FC9A7E",
                                                border: "1px solid #E2D7F0",
                                                borderRadius: "7px",
                                                color: " #4E3A67",
                                                padding: "10px",
                                                fontWeight: "700",
                                                minWidth: "225px",
                                                fontSize: "18px",
                                            }
                                        }}> Shortlist</Button>
                                    <Button type="button"
                                        sx={{
                                            background: "#FFFFFF",
                                            border: " 1px solid #E2D7F0",
                                            borderRadius: "7px",
                                            color: " #4E3A67",
                                            padding: "10px",
                                            fontWeight: "700",
                                            minWidth: "225px",
                                            fontSize: "18px",

                                            "&:hover": {
                                                background: "#FFFFFF",
                                                border: " 1px solid #E2D7F0",
                                                borderRadius: "7px",
                                                color: " #4E3A67",
                                                padding: "10px",
                                                fontWeight: "700",
                                                minWidth: "225px",
                                                fontSize: "18px",
                                            }
                                        }}> Reject</Button>

                                </Stack>
                                <Stack direction="row" gap={2}>
                                    <Button type="button"
                                        sx={{
                                            background: "#FFFFFF",
                                            border: " 1px solid #E2D7F0",
                                            borderRadius: "7px",
                                            color: " #4E3A67",
                                            padding: "10px",
                                            fontWeight: "700",
                                            minWidth: "225px",
                                            fontSize: "18px",

                                            "&:hover": {
                                                background: "#FFFFFF",
                                                border: " 1px solid #E2D7F0",
                                                borderRadius: "7px",
                                                color: " #4E3A67",
                                                padding: "10px",
                                                fontWeight: "700",
                                                minWidth: "225px",
                                                fontSize: "18px",
                                            }
                                        }}>
                                        <Stack direction="row" gap={2} alignItems="center">
                                            <img src={window.location.origin + '/assets/Call.png'} alt="call" ></img>
                                            <Box> Call</Box>
                                        </Stack></Button>

                                    <Button type="button"
                                        sx={{
                                            background: "#FFFFFF",
                                            border: " 1px solid #E2D7F0",
                                            borderRadius: "7px",
                                            color: " #4E3A67",
                                            padding: "10px",
                                            fontWeight: "700",
                                            minWidth: "225px",
                                            fontSize: "18px",

                                            "&:hover": {
                                                background: "#FFFFFF",
                                                border: " 1px solid #E2D7F0",
                                                borderRadius: "7px",
                                                color: " #4E3A67",
                                                padding: "10px",
                                                fontWeight: "700",
                                                minWidth: "225px",
                                                fontSize: "18px",
                                            }
                                        }}>
                                        Other Actions
                                    </Button>
                                </Stack>
                            </Stack>
                        </Box>

                        <Box sx={{
                            background: " #FFFFFF",
                            border: "1px solid #E2D7F0",
                            borderRadius: "19px",
                            padding: "20px",
                            width: { "lg": "100%", "md": "96%", "xs": "96%" }
                        }}>
                            <Stack direction={{ "lg": "row", "md": "row", "xs": "column" }} gap={1} >
                                <Box sx={{ width: { "lg": "20%", "md": "20%", "xs": "100%" } }}>
                                    <Badge color="secondary" variant="dot" >
                                        <img src={window.location.origin + "/assets/Person1.png"} alt="Person1" />
                                    </Badge>

                                </Box>
                                <Stack direction="column" gap={2} sx={{
                                    width:
                                        { "lg": "30%", "md": "30%", "xs": "100%" }
                                }}>
                                    <Typography component="div" sx={{ fontSize: "24px", color: "#4E3A67", fontWeight: "700" }}>
                                        Gyanendra Chaudhary
                                    </Typography>
                                    <Stack direction="row" gap={2}>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                                            Experience:
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            2
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" gap={2}>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                                            Location:
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            Delhi
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" gap={2}>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                                            Applied on:
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            20-02-2023
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" gap={2}>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                                            Notice Period:
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            Immediately Available
                                        </Typography>
                                    </Stack>


                                </Stack>
                                <Stack direction="column" sx={{
                                    width: { "lg": "25%", "md": "25%", "xs": "100%" }
                                }} gap={2}>
                                    <Stack direction="column" gap={1}>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                                            Unnati
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            Android developer
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            Dec,2021 to Present
                                        </Typography>
                                    </Stack>

                                    <Stack direction="column" gap={1}>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                                            RakVin Technologies Pvt. Ltd.
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            Android developer
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            July, 2019 to Dec,2020
                                        </Typography>
                                    </Stack>
                                </Stack>

                                <Stack direction="column" sx={{
                                    width: { "lg": "25%", "md": "25%", "xs": "100%" }
                                }} gap={2}>
                                    <Stack direction="column" gap={1}>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#4E3A67", fontWeight: "700" }}>
                                            Greater Noida Institute of Technology
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            MCA ( Full Time)
                                        </Typography>
                                        <Typography component="div" sx={{ fontSize: "18px", color: "#806E96" }}>
                                            2014 to 2018
                                        </Typography>
                                    </Stack>
                                </Stack>
                            </Stack>

                            <Stack direction="row"
                                sx={{
                                    margin: "50px 0px",
                                    flexWrap: "wrap",
                                    rowGap: "15px",
                                    justifyContent: { "lg": "space-between", "md": "center", "xs": "center" }
                                }}>
                                <Stack direction="row" gap={2}>
                                    <Button type="button"
                                        sx={{
                                            background: " #FC9A7E",
                                            border: "1px solid #E2D7F0",
                                            borderRadius: "7px",
                                            color: " #4E3A67",
                                            padding: "10px",
                                            fontWeight: "700",
                                            minWidth: "225px",
                                            fontSize: "18px",
                                            "&:hover": {
                                                background: " #FC9A7E",
                                                border: "1px solid #E2D7F0",
                                                borderRadius: "7px",
                                                color: " #4E3A67",
                                                padding: "10px",
                                                fontWeight: "700",
                                                minWidth: "225px",
                                                fontSize: "18px",
                                            }
                                        }}> Shortlist</Button>
                                    <Button type="button"
                                        sx={{
                                            background: "#FFFFFF",
                                            border: " 1px solid #E2D7F0",
                                            borderRadius: "7px",
                                            color: " #4E3A67",
                                            padding: "10px",
                                            fontWeight: "700",
                                            minWidth: "225px",
                                            fontSize: "18px",

                                            "&:hover": {
                                                background: "#FFFFFF",
                                                border: " 1px solid #E2D7F0",
                                                borderRadius: "7px",
                                                color: " #4E3A67",
                                                padding: "10px",
                                                fontWeight: "700",
                                                minWidth: "225px",
                                                fontSize: "18px",
                                            }
                                        }}> Reject</Button>

                                </Stack>
                                <Stack direction="row" gap={2}>
                                    <Button type="button"
                                        sx={{
                                            background: "#FFFFFF",
                                            border: " 1px solid #E2D7F0",
                                            borderRadius: "7px",
                                            color: " #4E3A67",
                                            padding: "10px",
                                            fontWeight: "700",
                                            minWidth: "225px",
                                            fontSize: "18px",

                                            "&:hover": {
                                                background: "#FFFFFF",
                                                border: " 1px solid #E2D7F0",
                                                borderRadius: "7px",
                                                color: " #4E3A67",
                                                padding: "10px",
                                                fontWeight: "700",
                                                minWidth: "225px",
                                                fontSize: "18px",
                                            }
                                        }}>
                                        <Stack direction="row" gap={2} alignItems="center">
                                            <img src={window.location.origin + '/assets/Call.png'} alt="call" ></img>
                                            <Box> Call</Box>
                                        </Stack></Button>

                                    <Button type="button"
                                        sx={{
                                            background: "#FFFFFF",
                                            border: " 1px solid #E2D7F0",
                                            borderRadius: "7px",
                                            color: " #4E3A67",
                                            padding: "10px",
                                            fontWeight: "700",
                                            minWidth: "225px",
                                            fontSize: "18px",

                                            "&:hover": {
                                                background: "#FFFFFF",
                                                border: " 1px solid #E2D7F0",
                                                borderRadius: "7px",
                                                color: " #4E3A67",
                                                padding: "10px",
                                                fontWeight: "700",
                                                minWidth: "225px",
                                                fontSize: "18px",
                                            }
                                        }}>
                                        Other Actions
                                    </Button>
                                </Stack>
                            </Stack>
                        </Box>




                    </Stack>

                </Box>
                <Box

                    sx={{
                        padding: "20px",
                        // visibility: { "lg": "visible", "md": "hidden", "xs": "hidden" }
                        display: { "lg": "block", "md": "none", "xs": "none" }
                    }}>
                    <ChatComponent />

                    <Stack direction="column"
                        sx={{
                            minHeight: "396px",
                            background: "#FFFFFF",
                            border: " 1px solid #E1D4F2",
                            borderRadius: "19px",
                            width: "100%",
                            marginTop: "20px"
                        }}>
                        <Stack sx={{
                            padding: "15px",
                            height: "150px",
                            alignItems: "center",
                            justifyContent: "center"
                        }}>
                            <Typography component="div" sx={{ fontSize: "16px", color: "#4E3A67", fontWeight: "600" }}>
                                Become a JobsYahan certified Recruiter
                            </Typography>

                            <Box sx={{ cursor: "pointer" }}
                                onClick={() => window.location.href = window.location.origin}>
                                <Typography component="span"
                                    sx={{
                                        fontSize: "50px",
                                        fontWeight: "600",
                                        color: "#4E3A67",
                                        fontFamily: "Work Sans, sans-serif"
                                    }}>
                                    Jobs
                                </Typography>
                                <Typography component="span"
                                    sx={{
                                        fontSize: "50px",
                                        color: "#4E3A67",
                                        fontFamily: "Work Sans, sans-serif"
                                    }}>
                                    Yahan
                                </Typography>
                            </Box>

                            <Stack direction="row" alignItems="center" justifyContent="center">
                                <Typography component="div" sx={{
                                    fontSize: "16px", color: "#FC9A7E", fontWeight: "600"
                                }}>
                                    Read More
                                </Typography>
                                <img height="16px" src={window.location.origin + "/assets/RightArrow.png"} alt="RightArrow" />
                            </Stack>
                        </Stack>
                        <Stack
                            direction="column"
                            gap={2}
                            sx={{
                                minheight: "277px",
                                background: "#F7F0FF",
                                border: "1px solid #E1D4F2",
                                borderRadius: "0px 0px 14px 14px",
                                padding: "20px",
                                height: "200px",

                            }}>
                            <Box>
                                <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67", fontWeight: "600" }}>
                                    For Sales Enquiries
                                </Typography>

                                <Typography component="div" sx={{ fontSize: "16px", color: "#4E3A67" }}>
                                    Call On: 1800-103-7344
                                </Typography>
                                <Typography component="div" sx={{ fontSize: "16px", color: "#4E3A67" }}>
                                    ( Toll Free: 9:30 AM to 6:30 PM)
                                </Typography>
                            </Box>

                            <Box>
                                <Typography component="div" sx={{ fontSize: "20px", color: "#4E3A67", fontWeight: "600" }}>
                                    Socials
                                </Typography>

                                <Typography component="div" sx={{ fontSize: "16px", color: "#4E3A67" }}>
                                    jobsyahan@gmail.com
                                </Typography>

                                <Box sx={{ margin: "10px 0px" }}>
                                    <SocialMedia />
                                </Box>
                            </Box>

                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Box >
    </>)
}
export default AppliedCandidate;