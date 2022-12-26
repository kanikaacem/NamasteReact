import { Box, Container, Stack, Typography, Snackbar, Alert, styled } from "@mui/material";

import ButtonType2 from "../../ThemeComponent/Common/ButtonType2";
const CandidateJobPerferences = () => {

    const PerferencesArray = [];
    const addPerferences = (event) => {
        let perferencesElement = event.target;
        perferencesElement.classList.remove("perferences")
        perferencesElement.classList.add("perferencesactive");
        PerferencesArray.push(perferencesElement.innerHTML);
    }
    return (<>
        <Box className="JobPerferencesPage"
            sx={{
                minHeight: "100vh",
                background: "#e8f0f9",
            }}>
            <Box sx={{ height: "100px", background: "#445578", margin: "0px 30px" }}>
                <Stack direction="row" alignItems="center">
                    {/* <Stack sx={{ width: "15%", height: "150px", background: "green" }}>
                    <img src={window.location.origin + "/assets/Setting.png"} height="100%" width="100%" alt="Setting" ></img>
                </Stack> */}
                    <Box sx={{ width: "50%", padding: "20px" }}>
                        <Typography component="div" sx={{ fontSize: "16px", color: "white" }}>
                            Create your own Job Feed
                        </Typography>
                        <Typography component="div" sx={{ fontWeight: "600", fontSize: "25px", color: "white" }}>
                            Get Started
                        </Typography>
                    </Box>
                </Stack>
            </Box>

            <Box sx={{
                display: "flex",
                flexDirection: "row",
                // background: "#FFFFFF",
                borderRadius: "10px",
                padding: "20px",
                gap: "20px",
                flexWrap: "wrap",
                padding: "20px 50px"

            }}>
                <Box className="perferences" onClick={addPerferences}> Demo Perferences1</Box>



            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}><ButtonType2 ClickEvent={() => console.log(PerferencesArray)} ButtonText="Save Perferences" /></Box>


        </Box>
    </>)
}

export default CandidateJobPerferences;