import { getRequest } from "../../utils/ApiRequests"
import FormControl from '@mui/material/FormControl';
import { Box, Button, Stack, Container, Select, MenuItem, Breadcrumbs, Link } from "@mui/material";
import { LinkStyles } from "../../utils/Styles";
import PageTopSection from '../Common/PageTopSection';
import JobItem from "./JobItem";
import Footer from "../../ThemeComponent/Common/Footer";

import { useTranslation } from 'react-i18next';
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const JobListing = () => {
    // const [category, setCategory] = useState('');
    const { t } = useTranslation();
    const [location, setLocation] = useState('');
    const [loadJobs, setLoadJobs] = useState({ page: 2, limit: 20 });

    const mobileScreen = useSelector(state => state.screenType) === "mobile";

    const [postedJobs, setPostedJobs] = useState([]);
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
    const LocationFilter = [
        { id: 1, text: "Paas (0-50Km)" },
        { id: 2, text: "Thodi Door (50-200Km)" },
        { id: 3, text: "Zayada Door (more than 200Km)" }

    ]
    const SelectFilter = ({ value, setValue, placeholder, data }) => {
        const navigate = useNavigate();
        const handleValueChange = (event) => {
            setValue(event.target.value);
            const searchParams = new URLSearchParams(location.search);
            searchParams.set("key", event.target.value);

            const searchString = searchParams.toString();
            navigate(`?${searchString}`);
        };
        return (<FormControl sx={{ width: 150 }} size="small">
            <Select
                sx={{
                    fontSize: "12px",
                    background: "#ffffff",
                    borderRadius: "12px"
                }}
                value={value}
                onChange={handleValueChange}
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
                    <em>{placeholder}</em>
                </MenuItem>
                {data && data.map((item, index) => {
                    return (<MenuItem key={index}
                        sx={{
                            fontSize: "12px"
                        }}
                        value={item.id}> {item.text}</MenuItem>)
                })}

            </Select>
        </FormControl>)
    }


    const handleLoadMore = async () => {
        // Increase the load range by the desired increment
        setLoadJobs((prevRange) => ({
            page: prevRange.page + 1,
            limit: prevRange.limit
        }));

        try {
            const api_url = process.env.REACT_APP_GET_JOB_ITEMS + "?page=" + loadJobs.page; // Replace with your .env variable name
            const data = await getRequest(api_url);
            if (Array.isArray(data.data)) {
                setPostedJobs((prevJobs) => [...prevJobs, ...data.data]);

            } else {
                // Handle the case when data.data is not iterable
                console.error("Data is not iterable:", data.data);
            }

        } catch (error) {
            // Handle the error
            console.error("Fetch error:", error);
        }


    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const api_url = process.env.REACT_APP_GET_JOB_ITEMS; // Replace with your .env variable name
                const data = await getRequest(api_url);
                // Handle the fetched data
                setPostedJobs(data.data)

            } catch (error) {
                // Handle the error
                console.error("Fetch error:", error);
            }
        };
        fetchData();
    }, [])

    return (
        <Box className="JobsListingPage" sx={{
            height: "100vh"
        }}>
            <PageTopSection />

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
                        {/* <SelectFilter value={category} setValue={setCategory} placeholder="Select Location" data={LocationFilter} /> */}
                        <SelectFilter value={location} setValue={setLocation} placeholder="Select Location" data={LocationFilter} />
                    </Stack>

                    <Stack direction="column" gap={2} className="JobsSection" >
                        {postedJobs && postedJobs.map((jobInfo, index) => {
                            return <JobItem key={index}
                                id={jobInfo._id}
                                jobTitle={jobInfo.jobTitle}
                                companyName={jobInfo.company_name}
                                salary={jobInfo.montlySalary}
                                location={jobInfo.jobLocation}
                                profession={jobInfo.designation}
                                education={jobInfo.educationalQualification}
                                description={jobInfo.jobDescription}
                                jobTag={jobInfo.gender} />
                        })}
                    </Stack>
                    <Button variant="contained"
                        onClick={handleLoadMore}
                        sx={{
                            width: "300px",
                            background: "#FF671F",
                            borderRadius: "33px",
                            textTransform: "capitalize",
                            fontSize: { "xs": "0.8rem", "sm": "0.8rem", "md": "1.5rem", "lg": "1.5rem", "xl": "1.5rem" },
                            margin: "0 auto",
                            "&:hover": {
                                background: "#FF671F",
                            }
                        }
                        }> {t('LOAD_MORE')}</Button >
                </Stack>
            </Container>
            <Footer />
        </Box >)
}
export default JobListing;