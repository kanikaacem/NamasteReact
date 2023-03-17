import { Box, Stack, Typography } from "@mui/material";
const JobComponent2 = ({ company, data, setshowJobDescription }) => {
    const user = localStorage.user && JSON.parse(localStorage.user);

    return (<>
        <Box className="jobItem"
            onClick={() => setshowJobDescription(data._id)}
            id={data && data._id}
            sx={{
                padding: "5px 10px",
                minHeight: "100px",
                background: "white",
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                cursor: "pointer",
                marginRight: "10px",
                alignItems: "flex-start"
            }}>

            <Box className="jobLogo"
                sx={{
                    width: "80px",

                }}>
                <img style={{ width: "100%", borderRadius: '10px' }} src={data && data.companyLogo ? data.companyLogo : './assets/companyLogo.png'} alt=""></img>
            </Box>
            <Stack direction="column" sx={{ width: '100%' }}>
                <Stack direction="row" justifyContent="space-between">
                    <Typography component="div" sx={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#2B1E44",
                        textTransform: "capitalize"
                    }}>
                        {data && data.title}
                    </Typography>

                    <Typography component="div" sx={{
                        fontSize: "14px",
                        fontWeight: "600",
                        color: "#2B1E44",
                        textTransform: "capitalize"
                    }}>
                        {data && data.salary ? data.salary : "$23/hr"}
                    </Typography>
                </Stack>

                <Stack direction="row" gap={1} alignItems="center">
                    <Typography component="span" sx={{
                        color: "#2B1E44",
                        fontSize: "14px !important",
                        textTransform: "capitalize"
                    }}>
                        {data && data.companyName ? data.companyName : "Company Name"}
                    </Typography>

                    <Typography component="span" sx={{
                        color: "#007FFF !important",
                        textTransform: "capitalize",
                        fontSize: "14px !important",
                        padding: "2px 10px !important",
                        background: "#cadcef",
                        borderRadius: "20px"
                    }}>
                        {data && data.role && data.role.replaceAll("_", " ")}
                    </Typography>
                </Stack>

                <Stack direction="row" justifyContent="space-between" sx={{ margin: "10px 0px" }}>
                    <Typography component="div" sx={{
                        fontSize: "14px",
                        color: "#2B1E44",
                    }}>
                        1.1 Km from here
                    </Typography>

                    <Typography component="div" sx={{
                        fontSize: "14px",
                        color: "#2B1E44",
                    }}>
                        Job expries in
                        <Typography component="div" sx={{
                            fontSize: "14px",
                            color: "#2B1E44",
                            textTransform: "capitalize"
                        }}>
                            12/3 hr
                        </Typography>
                    </Typography>
                </Stack>



            </Stack>
            {
                user && user.type == "employer" && <>
                    <span> <a href={`employer-dashboard/job/${data._id}/recommedations`} > View All Candidate</a></span>

                </>
            }


        </Box>
    </>
    )
}
export default JobComponent2;