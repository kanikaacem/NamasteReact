import { Box, Badge, Button, Stack, Typography } from "@mui/material";

import PhoneIcon from '@mui/icons-material/Phone';
import ChatIcon from '@mui/icons-material/Chat';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';

import Moment from 'react-moment';

const CandidateComponent = ({ item }) => {

    return (<>
        <Box sx={{
            background: " #FFFFFF",
            border: "1px solid #E2D7F0",
            borderRadius: "19px",
            padding: "20px",
            width: { "lg": "100%", "md": "96%", "xs": "96%" }
        }}>
            <Stack direction={{ "lg": "row", "md": "row", "xs": "column" }} gap={1} >
                <Box sx={{ width: { "lg": "8%", "md": "8%", "xs": "100%" } }}>
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


    </>)
}

export default CandidateComponent;