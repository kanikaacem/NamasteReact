import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import CandidateHome from "./CandidateHome";

const CandidateDashboard = () => {
    const MenuSelected = useSelector(state => state.MenuSelected);

    return (<>
        <Stack direction="column" sx={{
            padding: "0px 10px"
        }}>
            {(MenuSelected === "candidate_dashboard" || MenuSelected === "candidate_login") && (<><CandidateHome /></>)}
        </Stack>
    </>)
}

export default CandidateDashboard;