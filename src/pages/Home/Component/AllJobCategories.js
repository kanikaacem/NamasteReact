import { Stack, Box, styled } from "@mui/material";
const AllJobCategories = () => {

    const CategoryAlphabet = styled(Box)({
        background: "#FC9A7E",
        fontWeight: "600",
        padding: "0px 5px",
        fontSize: "24px"
    })
    return (<>
        {/* <span> Browse All Categories</span> */}
        <Stack direction={{ "lg": "row", "md": "column", "xs": "column" }}
            gap={3}
            sx={{ margin: "0 auto" }}>

            <Stack gap={2}
                sx={{
                    width: {
                        "lg": `300px`,
                        "md": "400px",
                        "xs": "378px"
                    }
                }}>
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
            </Stack>

            <Stack gap={2} sx={{
                width: {
                    "lg": `300px`,
                    "md": "400px",
                    "xs": "378px"
                }
            }}>
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
            </Stack>

            <Stack gap={2}
                sx={{
                    width: {
                        "lg": `300px`,
                        "md": "400px",
                        "xs": "378px"
                    }
                }} >
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
            </Stack>

            <Stack gap={2}
                sx={{
                    width: {
                        "lg": `300px`,
                        "md": "400px",
                        "xs": "378px"
                    }
                }} >
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
            </Stack>

        </Stack>


    </>)
}

export default AllJobCategories;