import { Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CandidateHome from "./CandidateHome";

import { useEffect } from "react";
const CandidateDashboard = () => {
    const MenuSelected = useSelector(state => state.MenuSelected);
    const dispatch = useDispatch();

    useEffect(() => {
        const MenuSelect = () => {
            dispatch({ type: "CHANGE_SELECTED_MENU", payload: "candidate_dashboard" })
        }
        MenuSelect();
    }, [dispatch]);
    return (<>
        <Stack direction="column" sx={{
            padding: { "xs": "0px", "sm": "0px", "md": "0px 10px", "lg": "0px 10px", "xl": "0px 10px" }
        }}>
            {(MenuSelected === "candidate_dashboard") && (<><CandidateHome /></>)}
        </Stack>
    </>)
}

export default CandidateDashboard;