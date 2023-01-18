import { Stack, Box, styled } from "@mui/material";
const AllJobCategories = () => {
    const CustomizeDiv = styled(Stack)({
        width: "300px"
    })
    const CategoryAlphabet = styled(Box)({
        background: "#FC9A7E",
        fontWeight: "600",
        padding: "0px 5px",
        fontSize: "24px"
    })
    return (<>
        {/* <span> Browse All Categories</span> */}
        <Stack direction="row"
            gap={3}
            sx={{ margin: "0 auto" }}>

            <CustomizeDiv gap={2} >
                <Stack gap={2}>
                    <CategoryAlphabet > A</CategoryAlphabet>
                    <Box> Accountant</Box>
                    <Box> Animation</Box>
                    <Box> Architect</Box>
                </Stack>

                <Stack gap={2}>
                    <CategoryAlphabet>B</CategoryAlphabet>
                    <Box> Bartender</Box>
                    <Box> Beautician</Box>
                    <Box> Business Analyst</Box>
                </Stack>
            </CustomizeDiv>

            <CustomizeDiv gap={2} >
                <Stack gap={2}>
                    <CategoryAlphabet > A</CategoryAlphabet>
                    <Box> Accountant</Box>
                    <Box> Animation</Box>
                    <Box> Architect</Box>
                </Stack>

                <Stack gap={2}>
                    <CategoryAlphabet>B</CategoryAlphabet>
                    <Box> Bartender</Box>
                    <Box> Beautician</Box>
                    <Box> Business Analyst</Box>
                </Stack>
            </CustomizeDiv>

            <CustomizeDiv gap={2} >
                <Stack gap={2}>
                    <CategoryAlphabet > A</CategoryAlphabet>
                    <Box> Accountant</Box>
                    <Box> Animation</Box>
                    <Box> Architect</Box>
                </Stack>

                <Stack gap={2}>
                    <CategoryAlphabet>B</CategoryAlphabet>
                    <Box> Bartender</Box>
                    <Box> Beautician</Box>
                    <Box> Business Analyst</Box>
                </Stack>
            </CustomizeDiv>

            <CustomizeDiv gap={2} >
                <Stack gap={2}>
                    <CategoryAlphabet > A</CategoryAlphabet>
                    <Box> Accountant</Box>
                    <Box> Animation</Box>
                    <Box> Architect</Box>
                </Stack>

                <Stack gap={2}>
                    <CategoryAlphabet>B</CategoryAlphabet>
                    <Box> Bartender</Box>
                    <Box> Beautician</Box>
                    <Box> Business Analyst</Box>
                </Stack>
            </CustomizeDiv>

        </Stack>


    </>)
}

export default AllJobCategories;