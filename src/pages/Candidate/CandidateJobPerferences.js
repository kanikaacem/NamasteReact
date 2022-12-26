import { Box, Container, Stack, Typography, Snackbar, Alert, styled } from "@mui/material";

import { JobCategories } from "../../utils/Data";
import ButtonType2 from "../../ThemeComponent/Common/ButtonType2";

import { useState } from "react";
import { gridColumnsTotalWidthSelector } from "@mui/x-data-grid";
const CandidateJobPerferences = () => {
    const [perference, setPerference] = useState(false);
    const PerferencesArray = [];
    const addPerferences = (event) => {
        let perferencesElement = event.currentTarget;
        // console.log(perferencesElement)
        if (perferencesElement.classList.contains('perferences')) {
            perferencesElement.classList.remove("perferences")
            perferencesElement.classList.add("perferencesactive");
        } else {
            perferencesElement.classList.add("perferences")
            perferencesElement.classList.remove("perferencesactive");
        }
        // PerferencesArray.push(perferencesElement.innerHTML);
    }
    const SubmitPerferences = async () => {
        // document.querySelectorAll(".perferencesactive").forEach((item) => 
        // );
        // console.log(PerferencesArray)
        setPerference(true);
    }


    return (<>
        <Box className="JobPerferencesPage"
            sx={{
                minHeight: "100vh",
                background: "#FFFFFF"
            }}>

            <Snackbar
                open={perference}
                autoHideDuration={6000} onClose={
                    () => setPerference(false)
                }
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert onClose={
                    () => setPerference(false)
                } severity="success" sx={{ width: '100%' }}>
                    Your Perferences is successfully submitted.
                </Alert>

            </Snackbar>

            <Box sx={{
                height: "100px",
                background: "#445578",
                margin: "0px 30px"
            }}>
                <Stack direction="row" alignItems="center">

                    <Box sx={{ width: "50%", padding: "20px" }}>
                        <Typography component="span" sx={{ fontSize: "30px", color: "white" }}>
                            Create your own Job Feed,
                            <Typography component="span" sx={{ fontWeight: "600", fontSize: "30px", color: "white", marginLeft: "10px" }}>
                                Let Get Started !!!
                            </Typography>
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
                {JobCategories.map((item) => {
                    return (<>
                        <Stack direction="row" gap={1} className="JOBPERFERENCES" key={item.id} onClick={addPerferences} alignItems="center" justifyContent="center">
                            <Box sx={{ width: "25px" }}>
                                <img src={item.logo} alt={item.title} width="100%" />
                            </Box>
                            <Box>
                                {item.title}
                            </Box>
                        </Stack>
                    </>)
                })}


            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}><ButtonType2 ClickEvent={SubmitPerferences} ButtonText="Save Perferences" /></Box>


        </Box>
    </>)
}

export default CandidateJobPerferences;