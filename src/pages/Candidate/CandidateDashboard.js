import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import CandidateHome from "./CandidateHome";

const CandidateDashboard = () => {
    const CandidateMenuSelected = useSelector(state => state.CandidateMenuSelected);

    return (<>
        <Stack direction="column" sx={{
            padding: "0px 10px"
        }}>

            {CandidateMenuSelected === "home" && (<><CandidateHome /></>)}
        </Stack>
    </>)
}

export default CandidateDashboard;