import { Box, Stack, Typography } from "@mui/material";

const FormTemplate = ({ FormComponent, Image1, Image2, backgroundColor }) => {
    return (<>
        <Box className="FormTemplate"
            sx={{
                minHeight: "100vh",
                background: backgroundColor,

            }}>
            <Stack className="FormTemplateWrapper"
                sx=
                {{
                    padding: "20px 50px",
                    gap: "24px"
                }}>

                <Stack direction={{ 'lg': "row", 'md': 'column', 'xs': 'column' }} sx={{ gap: "40px" }}>

                    <Box sx={{
                        width: { 'lg': "60%", 'md': '100%', 'xs': '100%' },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"

                    }}>
                        <Box
                            sx={{
                                width: `calc(60 % - 20px)`,

                            }}
                        >
                            <Typography component="box" sx={{
                                fontSize: "36px",
                                fontFamily: "Montserrat",
                                fontWeight: "600",
                                color: "#FFFFFF",
                                display: "block",
                                marginTop: "20px"
                            }}>
                                Direct Hiring App for
                            </Typography>

                            <Typography component="box" sx={{
                                fontSize: "64px",
                                fontFamily: "Work Sans, sans-serif",
                                fontWeight: "700",
                                color: "#FC9A7E",
                                display: "block",
                                lineHeight: "1.2"
                            }}>
                                Founders, Business

                                <Typography component="box" sx={{
                                    fontSize: "64px",
                                    fontFamily: "Work Sans, sans-serif",
                                    fontWeight: "700",
                                    color: "#FC9A7E",
                                    display: "block"
                                }}>
                                    Owners and HRs.
                                </Typography>
                            </Typography>

                        </Box>
                    </Box>
                    <Stack
                    >
                        <Stack gap={2} sx={{
                            width: { "lg": "449px", "md": "85%", "xs": "85%" },
                            height: "730px",
                            background: "#FBF8FF",
                            boxShadow: "0px 4px 40px rgba(252, 154, 126, 0.3)",
                            borderRadius: "19px",
                            padding: { 'lg': "50px 100px", 'md': '50px', 'xs': '50px' }

                        }}>



                        </Stack>
                    </Stack>


                </Stack>
            </Stack>
        </Box>
    </>)
}
export default FormTemplate;