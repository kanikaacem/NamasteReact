import { PostImageRequest } from "../../utils/ApiRequests";
import { uploadFileURL } from "../../utils/ApiUrls";

import { Box, Stack, Typography } from "@mui/material";

import ThemeLabel from "../../ThemeComponent/ThemeForms/ThemeLabel";
import ButtonType3 from "../Common/ButtonType3";

import { ThemeButtonType2, } from "../../utils/Theme";

import { useState } from "react";

import ThemeMessage from "../Common/ThemeMessage";

import { data1 } from "../../utils/Data";
import FormMenu from "../Common/FormMenu";
import { useNavigate } from "react-router-dom";

const UploadResume = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const navigate = useNavigate();

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
        navigate("/candidate-dashboard/profile")
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
                    padding: { "xs": "15px", "sm": "15px", "md": "30px 50px", "lg": "30px 50px", "xl": "30px 50px" },
                    gap: { "xs": "0px", "sm": "0px", "md": "24px", "lg": "24px", "xl": "24px" }
                }}>

                <Stack direction="row" gap={2} justifyContent="space-between" sx={{ position: "relative" }}>
                    <Box sx={{
                        display: { "xs": "none", "sm": "none", "md": "block", "lg": "block", "xl": "block" },
                        margin: "0 auto"
                    }}>
                        <Typography component="box" sx={{
                            fontSize: { "xs": "26px", "sm": "26px", "md": "40px", "lg": "40px", "xl": "40px" },
                            fontFamily: "Montserrat",
                            fontWeight: "600",
                            color: "#4E3A67",
                            display: "block",
                        }}> Unlimited Job
                        </Typography>
                        <Typography component="box" sx={{
                            fontSize: { "xs": "26px", "sm": "26px", "md": "40px", "lg": "40px", "xl": "40px" },
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

                    <Stack direction="column" sx={{ width: { "xs": "100%", "sm": "100%", "md": "50%", "lg": "50%", "xl": "50%" } }}>
                        <Box sx={{
                            width: { "xs": "92%", "sm": "92%", "md": "763px", "lg": "763px", "xl": "763px" },
                            background: "#F8F8F8",
                            border: "1px solid #EAEAEA",
                            boxShadow: "0px 4px 40px rgba(239, 239, 239, 0.3)",
                            borderRadius: "19px",
                        }}>
                            <Box sx={{
                                padding: { "xs": "15px", "sm": "15px", "md": "30px 50px", "lg": "30px 50px", "xl": "30px 50px" }
                            }}>
                                <Typography component="box" sx={{
                                    fontSize: { "xs": "26px", "sm": "26px", "md": "40px", "lg": "40px", "xl": "40px" },
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    color: "#000000",
                                    display: "block",
                                    marginTop: "20px"
                                }}>
                                    Upload Resume
                                </Typography>

                                <Stack direction="row" gap={1} sx={{ margin: "25px 0px", flexWrap: "wrap" }}>
                                    {
                                        data1 && data1.map((item) => {
                                            return <FormMenu data={item} />
                                        })
                                    }
                                </Stack>
                            </Box>

                            <Box sx={{
                                boxSizing: "border-box",
                                background: "#FFFFFF",
                                border: "1px solid #EDEDED",
                                borderBottomLeftRadius: "19px",
                                borderBottomRightRadius: "19px",
                                padding: { "xs": "15px", "sm": "15px", "md": "30px 50px", "lg": "30px 50px", "xl": "30px 50px" },
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
                                            onClick={goToDashboard}>GO TO DASHBOARD</ThemeButtonType2>

                                    </Stack>

                                </form>



                            </Box>

                        </Box>

                    </Stack>

                </Stack>
            </Stack>
        </Box>

    </>)
}

export default UploadResume;
