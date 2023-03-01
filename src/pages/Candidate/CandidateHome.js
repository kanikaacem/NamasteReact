import { Box, Stack } from "@mui/material";
import { useOutletContext } from "react-router-dom";

import RecommendedJobs from "../Home/Component/RecommendedJobs";
import Filter from "../../ThemeComponent/Filter";
import DashboardGreeting from "../../ThemeComponent/Common/DashboardGreeting";

import { useState, useEffect } from "react";
const CandidateHome = () => {
    const user = useOutletContext();
    const [fixedDiv, setFixedDiv] = useState(false);

    useEffect(() => {
        const handleScroll = (event) => {
            // console.log(window.scrollY);
            if (window.scrollY < 195)
                setFixedDiv(false)
            else
                setFixedDiv(true)
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (<>
        <Stack direction="column" gap={2}
            sx={{
                padding: "20px"
            }}>

            <DashboardGreeting username={user && user.personalInfo && user.personalInfo.fullname} userType="candidate" />
            <Stack direction="column" >
                <Stack direction="row" gap={1} sx={{ minHeight: `calc(100vh-70px)` }}>

                    <Box
                        // className={fixedDiv && "fixedDiv"}
                        sx={{ width: "20%", display: { "lg": "block", "md": "none", "xs": "none" } }}>
                        <Filter />
                    </Box>

                    <Box sx={{
                        width: { "lg": "80%", "md": "100%", "xs": "100%" },
                        minHeight: "100vh",
                        // marginLeft: fixedDiv && "396px"

                    }}>
                        <RecommendedJobs fixed={fixedDiv}></RecommendedJobs>
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    </>)
}

export default CandidateHome;