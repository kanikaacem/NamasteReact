import { Typography, Modal, Box, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

const HomePageLiteMessage = ({ value, setValue, message }) => {
    const { t } = useTranslation();
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "auto",
        minWidth: '200px',
        bgcolor: 'background.paper',
        borderRadius: '16px',
        boxShadow: 24,
        textAlign: 'center',
        p: 4,
    };
    return (
        <Modal
            open={value}
            onClose={() => setValue(!value)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h4" component="h2" sx={{ fontSize: "1.25rem", fontWeight:"600"}}>
                    {t('THANK_YOU')}
                </Typography>
                {message && <Typography id="modal-modal-description" sx={{ fontSize: "1rem", fontWeight:"400", mt: 2}}>
                    {message}
                </Typography>}
                <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ fontSize: "0.9rem", fontWeight:"400"}}>
                    {t('THANK_YOU_MESSAGE')}
                </Typography>
                <Button sx={{
                    marginTop: "12px",
                    backgroundColor: "#FF671F",
                    "&:hover": {
                        backgroundColor: "#FF671F"
                    }
                }} variant="contained" onClick={() => setValue(!value)}>
                    Okay
                </Button>
            </Box>
        </Modal>
    )
}
export default HomePageLiteMessage;