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
    const perferences = {
        border: " 1px solid #2B1E44",
        borderRadius: "10px",
        padding: "10px",
        cursor: "pointer"
    }
    const perferencesactive = {
        border: " 1px solid #2B1E44",
        borderRadius: "10px",
        padding: "10px",
        cursor: "pointer",
        background: "#2B1E44",
        color: "#FFFFFF"
    }
    return (<>
        <Box className="JobPerferencesPage"
            sx={{
                minHeight: "100vh",
                background: "#FFFFFF"
                // background: "#e8f0f9",
            }}>
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
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>

                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>

                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>


                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>


                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>


                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>


                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>
                <div className="JOBPERFERENCES" onClick={addPerferences}> Demo Perferences1</div>





            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}><ButtonType2 ClickEvent={() => console.log(PerferencesArray)} ButtonText="Save Perferences" /></Box>


        </Box>
    </>)
}

export default CandidateJobPerferences;