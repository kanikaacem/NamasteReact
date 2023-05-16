import { Box, Stack, Typography } from '@mui/material';

import { useState } from 'react';
const JobLocationItemDesktop = () => {
    const [showItemInfo, setShowItemInfo] = useState(false);
    const ShowItemInfoContainer = () => {
        setShowItemInfo(!showItemInfo);
    }
    return (<>
        {!showItemInfo &&
            <Stack direction="column" gap={3} alignItems="flex-start" justifyContent="center" sx={{
                padding: "15px",
                width: "352px",
                minheight: "153px",
                background: "#cacaff",
                borderRadius: "6px",
                boxSizing: "border-box",
                backgroundImage: `url("./assets/Buildings.png")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "bottom right"
            }}
                onClick={ShowItemInfoContainer}>

                <Stack direction="row" gap={1} alignItems="center">
                    <Box>
                        <img src={window.location.origin + "/assets/LocationMap.png"} alt="Location" />
                    </Box>
                    <Typography variant="h1" component="h2" sx={{
                        fontSize: "1rem",
                        fontFamily: "'Manrope',' sans- serif'",
                        fontWeight: "700",
                        color: "#FF671F",
                    }}>
                        Gurgoan
                    </Typography >
                </Stack>
                <Typography variant="h1" component="h2" sx={{
                    fontSize: "1rem",
                    fontFamily: "'Manrope',' sans- serif'",
                    fontWeight: "700",
                    color: "#ffffff",
                    width: "200px"
                }}>
                    GURGAON Post Office is located at GURGAON, HARYANA, 122001. NA Post Office
                </Typography >
                <Box className="JobCategoryImage">
                    {/* <img src={window.location.origin + categoryItem.categoryImage} alt={categoryItem.categoryName} /> */}
                </Box>
            </Stack >}
        {
            showItemInfo &&
            <Stack direction="column" gap={3} alignItems="center" justifyContent="center" sx={{
                width: "352px",
                minheight: "153px",
                background: "#FCFAFA",
                border: "1px solid #f6f1f1",
                borderRadius: "6px",
                boxSizing: "border-box"
            }}
                onClick={ShowItemInfoContainer}

            >
                <Typography variant="h1" component="h2" sx={{
                    fontSize: "1.2rem",
                    fontFamily: "'Manrope',' sans- serif'",
                    fontWeight: "700",
                    color: "#000000",
                    textAlign: "center"
                }}>
                    Noida
                </Typography >

                <Stack direction="row" gap={2}>
                    <Box>
                        <Typography variant="h1" component="h2" sx={{
                            fontSize: "1.2rem",
                            fontFamily: "'Manrope',' sans- serif'",
                            fontWeight: "700",
                            color: "#FF671F",
                            textAlign: "center"
                        }}>
                            50+
                        </Typography >
                        <Typography variant="h1" component="h2" sx={{
                            fontSize: "0.8rem",
                            fontFamily: "'Manrope',' sans- serif'",
                            color: "#000000",
                            textAlign: "center"
                        }}>
                            Active Jobs
                        </Typography >
                    </Box>
                    <Box>
                        <Typography variant="h1" component="h2" sx={{
                            fontSize: "1.2rem",
                            fontFamily: "'Manrope',' sans- serif'",
                            fontWeight: "700",
                            color: "#FF671F",
                            textAlign: "center"
                        }}>
                            50+
                        </Typography >
                        <Typography variant="h1" component="h2" sx={{
                            fontSize: "0.8rem",
                            fontFamily: "'Manrope',' sans- serif'",
                            color: "#000000",
                            textAlign: "center"
                        }}>
                            Active Candidates
                        </Typography >
                    </Box>
                </Stack>

            </Stack >
        }
    </>)

}

export default JobLocationItemDesktop;