import { Snackbar, Alert } from "@mui/material";


const ShowMessageToastr = ({ value, handleClose, message, messageType }) => {
    return (<>
        <Snackbar
            open={value}
            autoHideDuration={6000} onClose={handleClose}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
            <Alert onClose={handleClose} severity={messageType} sx={{ width: '100%' }}>
                {message}
            </Alert>

        </Snackbar></>)
}

export default ShowMessageToastr;