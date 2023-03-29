import { Box } from "@mui/material";

import Skeleton from 'react-loading-skeleton'

const Template1 = () => {
    return (<>
        <Box sx={{
            border: " 1px solid #E1D4F2",
            borderRadius: "19px",
            cursor: "pointer", padding: "20px"
        }}>
            <Skeleton count={8} height={30} />

        </Box>
    </>)
}
export default Template1;