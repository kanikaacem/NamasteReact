import { PostImageRequest } from "../../utils/ApiRequests";
import { uploadFileURL } from "../../utils/ApiUrls";

import { Box, Stack, Typography } from "@mui/material";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import ButtonType3 from "../Common/ButtonType3";

import { ThemeButtonType2, } from "../../utils/Theme";

import { useState } from "react";

import ThemeMessage from "../Common/ThemeMessage";
const UploadResume = ({ setActiveStep }) => {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const uploadFile = async (event) => {
        let file = event.target.files[0];
        let formData = new FormData();
        formData.append('image', file);
        formData.append('ImageType', 'CandidateResume');
        let response = await PostImageRequest(uploadFileURL, formData);

        setFormSubmitted(true);



    }

    const goToDashboard = async () => {
        localStorage.setItem("action", "login");
        window.location.href = window.location.origin + "/candidate-dashboard";

    }

    return (<>
        <ThemeMessage open={formSubmitted} setOpen={setFormSubmitted} message="Your Resume is uploaded. User is registered Successfully." type="success" />

        <Box className="UploadResumePage"
            sx={{
                minHeight: "100vh",
                background: "#FFFFFF",
                backgroundRepeat: " no-repeat",
                backgroundPosition: "left 100px bottom 0px"
            }}>
            <Stack className="WorkHistorypageWrapper"
                sx=
                {{
                    padding: "20px 50px",
                    gap: "24px"
                }}>

                <Stack direction="row" gap={2} justifyContent="space-between" sx={{ position: "relative" }}>
                    <Box>
                        <Typography component="box" sx={{
                            fontSize: "64px",
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            color: "#4E3A67",
                            display: "block",
                        }}> Unlimited Job
                        </Typography>
                        <Typography component="box" sx={{
                            fontSize: "64px",
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            color: "#4E3A67",
                            display: "block",
                            width: "max-content"
                        }}>
                            Options

                        </Typography>
                        <img src={window.location.origin + "/assets/g54.png"} alt="g54" style={{ margin: "40px 20px" }} />

                    </Box>

                    <Stack direction="column">
                        <Box sx={{
                            width: "763px",
                            height: "153px",
                            background: "#F8F8F8",
                            border: "1px solid #EAEAEA",
                            boxShadow: "0px 4px 40px rgba(239, 239, 239, 0.3)",
                            borderRadius: "19px",
                            padding: "35px 50px"
                        }}>
                            <Typography component="box" sx={{
                                fontSize: "40px",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: "block",
                                marginTop: "20px"
                            }}>
                                Work History
                            </Typography>

                            <Stack direction="row" gap={1} sx={{ margin: "25px 0px" }}>
                                <Stack direction="row" gap={1} alignItems="center" justifyContent="center" sx={{ opacity: "0.5" }}>
                                    <Box sx={{
                                        width: "27px",
                                        height: "27px",
                                        background: "#FC9A7E",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>1</Box>
                                    <Typography component="box" sx={{
                                        fontSize: "16px",
                                        fontFamily: "Montserrat",
                                        fontWeight: "600",
                                        color: "#4E3A67",
                                        display: "block",
                                        width: "max-content"
                                    }}>
                                        Personal Details
                                    </Typography>
                                    <Box>
                                        <img width="10px" height="10px" src={window.location.origin + "/assets/FormRightArrow.png"} alt="right_arrow" />
                                    </Box>
                                </Stack>


                                <Stack direction="row" gap={1} alignItems="center" justifyContent="center" sx={{ opacity: "0.5" }}>
                                    <Box sx={{
                                        width: "27px",
                                        height: "27px",
                                        background: "#FC9A7E",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>2</Box>
                                    <Typography component="box" sx={{
                                        fontSize: "16px",
                                        fontFamily: "Montserrat",
                                        fontWeight: "600",
                                        color: "#4E3A67",
                                        display: "block",
                                        width: "max-content"

                                    }}>
                                        Professional Details
                                    </Typography>
                                    <Box>
                                        <img width="10px" height="10px" src={window.location.origin + "/assets/FormRightArrow.png"} alt="right_arrow" />
                                    </Box>
                                </Stack>


                                <Stack direction="row" gap={1} alignItems="center" justifyContent="center" sx={{ opacity: "0.5" }} >
                                    <Box sx={{
                                        width: "27px",
                                        height: "27px",
                                        background: "#FC9A7E",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>3</Box>
                                    <Typography component="box" sx={{
                                        fontSize: "16px",
                                        fontFamily: "Montserrat",
                                        fontWeight: "600",
                                        color: "#4E3A67",
                                        display: "block",
                                        width: "max-content"

                                    }}>
                                        Work History
                                    </Typography>
                                    <Box>
                                        <img width="10px" height="10px" src={window.location.origin + "/assets/FormRightArrow.png"} alt="right_arrow" />
                                    </Box>
                                </Stack>

                                <Stack direction="row" gap={1} alignItems="center" justifyContent="center" >
                                    <Box sx={{
                                        width: "27px",
                                        height: "27px",
                                        background: "#FC9A7E",
                                        borderRadius: "50%",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}>3</Box>
                                    <Typography component="box" sx={{
                                        fontSize: "16px",
                                        fontFamily: "Montserrat",
                                        fontWeight: "600",
                                        color: "#4E3A67",
                                        display: "block",
                                        width: "max-content"

                                    }}>
                                        Upload Resume
                                    </Typography>
                                    <Box>
                                        <img width="10px" height="10px" src={window.location.origin + "/assets/FormRightArrow.png"} alt="right_arrow" />
                                    </Box>
                                </Stack>

                            </Stack>

                        </Box>
                        <Box sx={{
                            boxSizing: "border-box",
                            width: "865px",
                            height: "647",
                            background: "#FFFFFF",
                            border: "1px solid #EDEDED",
                            borderRadius: "19px",
                            padding: "30px 50px",
                            paddingBottom: "100px"


                        }}>
                            <form>
                                <Box className="input-item">
                                    <ThemeLabel LableFor="upload_resume" LableText="Upload Resume" />
                                    <Box sx={{ margin: "20px 0px" }}>
                                        <input type="file" name="upload_resume" id="upload_resume" onChange={uploadFile} style={{ display: "none" }} />
                                        <ButtonType3 ButtonText="Upload File" imageURL="/assets/document.png" ClickEvent={() => document.getElementById("upload_resume").click()}></ButtonType3>

                                    </Box>
                                </Box>

                                <Stack sx={{ width: "100%", margin: "40px 0px", gap: "20px" }}>
                                    <ThemeButtonType2 variant="contained" type="button" sx={{ fontFamily: "Work Sans, sans-serif", fontWeight: "600" }}
                                        onClick={goToDashboard}>Go To Dashboard</ThemeButtonType2>

                                </Stack>

                            </form>



                        </Box>
                    </Stack>

                </Stack>
            </Stack>
        </Box>

    </>)
}

export default UploadResume;
