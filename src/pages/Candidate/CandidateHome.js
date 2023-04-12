import { Box, Stack } from "@mui/material";
import { useOutletContext } from "react-router-dom";

import RecommendedJobs from "../Home/Component/RecommendedJobs";
import Filter from "../../ThemeComponent/Filter";
import DashboardGreeting from "../../ThemeComponent/Common/DashboardGreeting";

const CandidateHome = () => {
    const user = useOutletContext();
    return (<>

        <Stack direction="column" gap={2}
            sx={{
                padding: { "xs": "10px", "sm": "10px", "md": "20px", "lg": "20px", "xl": "20px" }
            }}>

            <DashboardGreeting username={user && user.personalInfo && user.personalInfo.fullname !== undefined ? user.personalInfo.fullname : "Name not mentioned"} userProfileCompleted={user && user.profilecompleted} userType="candidate" />

            <Stack direction="column" >
                <Stack direction="row" gap={1} sx={{ minHeight: `calc(100vh-70px)` }}>

                    <Box sx={{ width: "20%", display: { "lg": "block", "md": "none", "xs": "none" } }}>
                        <Filter />
                    </Box>

                    <Box sx={{
                        width: { "lg": "80%", "md": "100%", "xs": "100%" },
                        minHeight: "100vh",

                    }}>
                        <RecommendedJobs ></RecommendedJobs>
                    </Box>
                </Stack>
            </Stack>
        </Stack>


    </>)
}

export default CandidateHome;