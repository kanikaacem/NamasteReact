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

import ThemeMobileImage from "../Common/ThemeMobileImage";
import ThemeWebsiteImage from "../Common/ThemeWebsiteImage";

import { useTranslation } from "react-i18next";
const UploadResume = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const navigate = useNavigate();

    const { t } = useTranslation();

    const uploadFile = async (event) => {
        let file = event.target.files[0];
        let formData = new FormData();
        formData.append('image', file);
        formData.append('ImageType', 'CandidateResume');
        await PostImageRequest(uploadFileURL, formData);
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

                <Stack direction={{ "xs": "column", "sm": "column", "md": "column", "lg": "row", "xl": "row" }} gap={2} justifyContent="space-between" sx={{ position: "relative" }}>
                    <Stack sx={{
                        width: {
                            "xs": "100%", "sm": "100%", "md": "100%", "lg": "50%", "xl": "50%"
                        }, padding: { "xs": "0px", "sm": "0px", "md": "0px", "lg": "100px 0px", "xl": "100px 0px" },
                    }}>
                        <Box>
                            <Typography component="box" sx={{
                                fontSize: "64px",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                marginLeft: "60px",
                                display: { "xs": "none", "sm": "none", "md": "none", "xl": "block", "lg": "block" }
                            }}> {t('UNLIMITED_JOB')}
                                <Typography component="box" sx={{
                                    fontSize: "64px",
                                    fontFamily: "Montserrat",
                                    fontWeight: "600",
                                    color: "#4E3A67",
                                    display: "block",
                                    width: "max-content"
                                }}>
                                    {t('OPTIONS')}
                                </Typography>
                            </Typography>

                            <Typography component="box" sx={{
                                fontSize: { "xs": "1.6rem", "sm": "2rem", "md": "2rem", "xl": "4rem", "lg": "4rem" },
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#4E3A67",
                                display: { "xs": "block", "sm": "block", "md": "block", "xl": "none", "lg": "none" },
                                margin: "10px 0px"
                            }}> {t('UNLIMITED_JOB_OPTIONS')}
                            </Typography>


                            <ThemeMobileImage imageUrl="/assets/g54.png" />
                            <Box sx={{
                                position: "relative",
                                left: { 'xs': '0px', "sm": "0px", "md": "0px", "lg": "-170px", "xl": "-195px" },
                                marginTop: "30px",
                                zIndex: "100"
                            }}
                            >
                                <ThemeWebsiteImage imageUrl="/assets/g54.png" imageWidth="600px" />
                            </Box>
                        </Box>

                    </Stack >

                    <Stack direction="column" sx={{ width: { "xs": "100%", "sm": "100%", "md": "100%", "lg": "50%", "xl": "50%" } }}>
                        <Box sx={{
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
                                    {t('UPLOAD_RESUME')}
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
                                            onClick={goToDashboard}>{t('GO_TO_DASHBOARD')}</ThemeButtonType2>

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
