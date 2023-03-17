import { TextField } from '@mui/material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const TimePickerComponent = ({ value, setValue }) => {
    return (<>
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <TimePicker
                    variant="inline"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </div>

    </>)
}

export default TimePickerComponent;