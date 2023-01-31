import { Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const BackButton = ({ GoBack }) => {
    return (<>
        <Box onClick={GoBack}
            sx={{
                cursor: "pointer"
            }}>
            <ArrowBackIosIcon></ArrowBackIosIcon>
        </Box>
    </>)
}
export default BackButton;