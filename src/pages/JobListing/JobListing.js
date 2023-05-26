import FormControl from '@mui/material/FormControl';
import { Box, Stack, Container, Select, MenuItem, Breadcrumbs, Link } from "@mui/material";
import { LinkStyles } from "../../utils/Styles";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import JobItem from "./JobItem";
import Footer from "../../ThemeComponent/Common/Footer";
import { useState } from "react";
import { useSelector } from 'react-redux';
const JobListing = () => {
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const postedJobs = [
        {
            id: 1, title: "Assistant Manager", company_name: "kutumbhcare",
            salary: "Rs 10,000 - Rs 20,999", location: "Noida", profession: "Nurse",
            education: "Graduate", description: "It is a long established fact that a reader will be distracted by the readable contentment."
        },
        {
            id: 2, title: "Assistant Manager", company_name: "kutumbhcare",
            salary: "Rs 10,000 - Rs 20,999", location: "Noida", profession: "Nurse",
            education: "Graduate", description: "It is a long established fact that a reader will be distracted by the readable contentment."
        },
        {
            id: 3, title: "Assistant Manager", company_name: "kutumbhcare",
            salary: "Rs 10,000 - Rs 20,999", location: "Noida", profession: "Nurse",
            education: "Graduate", description: "It is a long established fact that a reader will be distracted by the readable contentment."
        },
        {
            id: 4, title: "Assistant Manager", company_name: "kutumbhcare",
            salary: "Rs 10,000 - Rs 20,999", location: "Noida", profession: "Nurse",
            education: "Graduate", description: "It is a long established fact that a reader will be distracted by the readable contentment."
        },
        {
            id: 5, title: "Assistant Manager", company_name: "kutumbhcare",
            salary: "Rs 10,000 - Rs 20,999", location: "Noida", profession: "Nurse",
            education: "Graduate", description: "It is a long established fact that a reader will be distracted by the readable contentment."
        },
        {
            id: 6, title: "Assistant Manager", company_name: "kutumbhcare",
            salary: "Rs 10,000 - Rs 20,999", location: "Noida", profession: "Nurse",
            education: "Graduate", description: "It is a long established fact that a reader will be distracted by the readable contentment."
        }
    ];
    const mobileScreen = useSelector(state => state.screenType) === "mobile";

    // const [postedJobs, setPostedJobs] = useState([]);
    const breadcrumbs = [
        <Link underline="hover" sx={LinkStyles} key="1" color="inherit" href="/" >
            Home
        </Link>,
        <Link
            sx={LinkStyles}
            underline="hover"
            key="2"
            color="#FF671F"
            fontWeight="600"
        >
            Posted Job
        </Link>
    ];
    const SelectFilter = ({ value, setValue, data }) => {
        return (<FormControl sx={{ width: 150 }} size="small">
            <Select
                sx={{
                    fontSize: "12px",
                    background: "#ffffff",
                    borderRadius: "12px"
                }}
                value={value}
                onChange={(event) => setValue(event.target.value)}
                displayEmpty
                inputProps={{
                    MenuProps: {
                        MenuListProps: {
                            sx: {
                                fontSize: '12px'
                            }
                        }
                    }
                }}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>)
    }
    const goBack = () => {
        window.history.back();
    }
    return (
        <Box className="JobsListingPage" sx={{
            height: "100vh"
        }}>
            <Stack className="JobListingTopSection" direction="column" gap={2} sx={{
                padding: { "xs": "20px", "sm": "20px", "md": "20px 100px", "lg": "20px 100px", "xl": "20px 100px" },
                background: "#ffffff",
                webkitBoxShadow: "0px 6px 5px -3px rgba(208,208,208,1)",
                mozBoxShadow: "0px 6px 5px -3px rgba(208,208,208,1)",
                boxShadow: "0px 6px 5px -3px rgba(208,208,208,1)",
            }}>
                <ArrowBackIcon sx={{ cursor: "pointer" }} onClick={goBack} />
            </Stack>

            <Box className="WebsiteBreadcrumb" sx={{
                padding: {
                    "xs": "10px", "sm": "10px",
                    "md": "10px 100px", "lg": "10px 100px", "xl": "10px 100px"
                }
            }}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    {breadcrumbs}
                </Breadcrumbs>
            </Box>

            <Container sx={{ padding: "0px", maxWidth: '1800px' }} maxWidth={false}>
                <Stack className="JobListingContent" direction="column" gap={2}
                    sx={{
                        padding: "20px",
                        background: mobileScreen && "#EAEAEA"
                    }}>

                    <Stack direction="row" gap={2} sx={{
                        flexWrap: "wrap"
                    }}>
                        <SelectFilter value={category} setValue={setCategory} />
                        <SelectFilter value={location} setValue={setLocation} />
                    </Stack>

                    <Stack direction="column" gap={2} className="JobsSection" >
                        {postedJobs.map((jobInfo, index) => {
                            return <JobItem key={index}
                                id={jobInfo.id}
                                jobTitle={jobInfo.title}
                                companyName={jobInfo.company_name}
                                salary={jobInfo.salary}
                                location={jobInfo.location}
                                profession={jobInfo.profession}
                                education={jobInfo.education}
                                description={jobInfo.description} />
                        })}
                    </Stack>
                </Stack>
            </Container>
            <Footer />
        </Box >)
}
export default JobListing;