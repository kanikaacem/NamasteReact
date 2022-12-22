import { Stack } from "@mui/material";
const LogoType1 = () => {

    const CustomizeText = styled(Box)({
        fontSize: '50px',
        display: 'inline'
    })

    return (<>
        <Stack direction="row" gap={2} sx={{ margin: "10px", alignItems: "center" }}>
            <img src="./assets/companyLogo.png" width="70px" alt="companyLogo" />
            <CustomizeText sx={{ color: "#2B1E44", fontSize: "30px" }}> JobsYahan</CustomizeText>
        </Stack>

    </>)
}
export default LogoType1;