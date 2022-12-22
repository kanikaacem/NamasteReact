import { Input, styled, Box } from '@mui/material';
// import Error from "./Error";

const ThemeInput = ({ placeholder, type, name, error, onChange, value }) => {
    const CustInput = styled(Input)({
        width: "inherit !important",
    })
    return (<>
        <Box className="input-item">
            <CustInput placeholder={placeholder} type={type} name={name} onChange={onChange} value={value}></CustInput>
            {/* {error && <Error text={error}></Error>} */}
        </Box>

    </>)
}
export default ThemeInput;