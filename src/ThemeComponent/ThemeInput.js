import { Input, styled, Box } from '@mui/material';

const ThemeInput = ({ placeholder, type, name, error, onChange, value }) => {
    const CustInput = styled(Input)({
        width: "inherit !important",
    })
    return (<>
        <Box className="input-item">
            <CustInput placeholder={placeholder} type={type} name={name} onChange={onChange} value={value}></CustInput>
        </Box>

    </>)
}
export default ThemeInput;