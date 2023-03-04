import { Box, Stack, Typography } from '@mui/material';
import SearchBar from "../../../ThemeComponent/SearchBar";
import {useState} from "react";
const HomeSection = () => {
    const [activeCategory,setActiveCategory] = useState(0);
    return (<>
        <Box
            className="home-banner-section"
            sx={{
                position: "relative",
                paddingTop: "50px",
                paddingBottom: "20px",
                // padding: "100px 0px",
                position: "relative",
                background: "#FAFAFA"
            }}

        >
            <Stack alignItems="center" justifyContent="center">
                <Typography variant="h1"
                    sx={{
                        color: "#2B1E44",
                        textAlign: "center",
                        fontWeight: "700",
                        fontSize: { "lg": '70px', "md": "70px", "xs": "40px" },
                        maxWidth: "1300px",
                        lineHeight: "1.0",
                        zIndex: "1",
                        marginBottom: "20px"
                    }}>
                    Find Suitable Jobs & Candidates Here! (Launching Soon)

                </Typography>

                <Typography component="span" sx={{
                    textAlign: "center",
                    display: "block",
                    margin: "3px 0px",
                    fontWeight: "500",
                    fontSize: { "lg": "23px", "md": "23px", "xs": "20px" },
                    maxWidth: "1069px"
                }}>
                    JobsYahan is where employers can get suitable candidates for frontline jobs
                </Typography>

            </Stack>

            <Box
                sx={{
                    position: "absolute",
                    top: "134px",
                    display: { "lg": "block", "md": "block", "xs": "none" }
                }}>
                <img src={window.location.origin + "/assets/Mg1.png"} alt="Mg1" />
            </Box>
            <Box
                sx={{
                    position: "absolute",
                    right: "0px",
                    top: "134px"
                }}>
                <img src={window.location.origin + "/assets/Mg2.png"} alt="Mg2" />
            </Box>

            <Box sx={{ margin: { "lg": "100px 0px", "md": "0px", "xs": "0px" } }}>
                <SearchBar></SearchBar>
            </Box>

            <Stack direction="row" gap={1} alignItems="center" justifyContent="center">
                <Typography component="span" sx={{
                    fontSize: "20px",
                }}>
                    Scroll
                </Typography>
                <img src={window.location.origin + "/assets/g3.png"} alt="g3" />
            </Stack>

            <Stack 
                alignItems="center"
                justifyContent="space-between"
                sx={{
                    background: "#FFFFFF",
                    boxShadow: "20px 5px 11px rgba(214, 214, 214, 0.25)",
                    minHeight:"211px",
                    padding:"30px",
                    flexWrap:"wrap"
                }}>

                </Stack>



        </Box>

    </>)
}

export default HomeSection;