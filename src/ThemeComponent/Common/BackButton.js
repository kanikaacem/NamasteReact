import { Box } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const BackButton = ({ GoBack }) => {
    return (<>
        <Box onClick={GoBack}
            sx={{
                cursor: "pointer",
                fontSize: { "xs": "15px", "sm": "15px", "md": "50px", "xl": "50px", "lg": "50px" }
            }}>
            <ArrowBackIosIcon></ArrowBackIosIcon>
        </Box>
    </>)
}
export default BackButton;