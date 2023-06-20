import { getRequest } from "../../utils/ApiRequests"
import FormControl from '@mui/material/FormControl';
import { Box, Button, Stack, Container, Select, MenuItem, Breadcrumbs, Link, Autocomplete, TextField, Typography } from "@mui/material";
import { LinkStyles } from "../../utils/Styles";
import PageTopSection from '../Common/PageTopSection';
import JobItem from "./JobItem";
import Footer from "../../ThemeComponent/Common/Footer";
import { useTranslation } from 'react-i18next';
import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const JobListing = () => {
    // const [category, setCategory] = useState('');
    const { t } = useTranslation();

    const [location, setLocation] = useState('');
    const [loadJobs, setLoadJobs] = useState({ page: 1, limit: 20 });

    const mobileScreen = useSelector(state => state.screenType) === "mobile";
    const [postedJobs, setPostedJobs] = useState([]);
    const [jobRoleFilterData, setJobRoleFilterData] = useState([]);
    const [activeJobs, setActiveJobs] = useState(0);

    const breadcrumbs = [
        <Link underline="hover" sx={LinkStyles} key="1" color="inherit" href="/" >
            {t('HOME')}
        </Link>,
        <Link
            sx={LinkStyles}
            underline="hover"
            key="2"
            color="#FF671F"
            fontWeight="600"
        >
            {t('POSTED_JOBS')}
        </Link>
    ];

    const SelectFilter = ({ value, setValue, placeholder }) => {
        const navigate = useNavigate();
        const LocationFilter = [
            { id: '', text: placeholder },
            { id: 'one', text: "Paas (0-50Km)" },
            { id: 'two', text: "Thodi Door (50-200Km)" },
            { id: 'three', text: "Zayada Door (more than 200Km)" }
        ]
        const handleValueChange = (event) => {
            setValue(event.target.value);
            const searchParams = new URLSearchParams(location.search);
            searchParams.set("key", event.target.value);

            const searchString = searchParams.toString();
            navigate(`?${searchString}`);
        };
        return (<FormControl sx={{ width: 250, height: 28 }} size="small">
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

                {/* <MenuItem value="">
                    <em>{placeholder}</em>
                </MenuItem> */}
                {LocationFilter && LocationFilter.map((item, index) => {
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
        let api_url = process.env.REACT_APP_GET_JOB_ITEMS;
        setLoadJobs((prevRange) => ({
            page: prevRange.page + 1,
            limit: prevRange.limit
        }));

        api_url = api_url + "?page=" + (loadJobs.page + 1);
        if (location) {
            api_url = api_url + "&keyrange=" + location;

        }
        try {
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

    const FilterDataBasedOnJobRole = async (jobRole) => {
        let api_url = process.env.REACT_APP_GET_JOB_ITEMS + "?rolefilter=" + jobRole;
        try {
            const data = await getRequest(api_url);
            if (Array.isArray(data.data)) {
                setPostedJobs(data.data);


            } else {
                // Handle the case when data.data is not iterable
                console.error("Data is not iterable:", data.data);
            }

        } catch (error) {
            // Handle the error
            console.error("Fetch error:", error);
        }



    }

    useEffect(() => {
        let coords = JSON.parse(localStorage.getItem("coordinates"));
        let api_url = process.env.REACT_APP_GET_JOB_ITEMS; // Replace with your .env variable name
        location && (api_url = api_url + "?keyrange=" + location + "&lat=" + coords.lat + "&lng=" + coords.lng);

        const fetchData = async () => {
            try {
                const data = await getRequest(api_url);
                setActiveJobs(data.acitvejob)
                setPostedJobs(data.data.reverse());

            } catch (error) {
                // Handle the error
                console.error("Fetch error:", error);
            }
        };
        const fetchJobRole = async () => {
            try {
                const data = await getRequest(process.env.REACT_APP_JOB_CATEGORY_FILTER);
                // Handle the fetched data
                setJobRoleFilterData(data.data);

            } catch (error) {
                // Handle the error
                console.error("Fetch error:", error);
            }

        }
        fetchData();
        fetchJobRole();
    }, [location]);

    return (
        <Box className="JobsListingPage" sx={{
            minHeight: "100vh"
        }}>

            <PageTopSection showBackButton={true} />
            <Container sx={{ padding: "0px", maxWidth: '1800px' }} maxWidth={false}>
                <Stack className="JobListingContent" direction="column" gap={2}
                    sx={{
                        padding: "20px",
                        background: mobileScreen && "#FEF5F1"
                    }}>
                    <Typography variant="h5" gutterBottom>
                        {`${activeJobs} Active Jobs`}
                    </Typography>
                    <Stack direction="row" gap={2} sx={{
                        flexWrap: "wrap"
                    }}>
                        <Autocomplete
                            size="small"
                            disablePortal
                            options={jobRoleFilterData}
                            onChange={(event, value) => {
                                if (value === null) window.location.reload()
                                else FilterDataBasedOnJobRole(value?.key)
                            }}

                            getOptionLabel={(option) => option.key}
                            sx={{ width: "300px", margin: '0px' }}
                            renderInput={(params) => <TextField {...params}
                                placeholder={t("SELCET_CATEGORY")}
                                InputLabelProps={{
                                    shrink: true,
                                    style: {
                                        fontSize: "12px", // Set the desired fontSize for the placeholder
                                    },
                                }}
                                sx={{
                                    fontSize: "12px",
                                    padding: "3px !important" // Set the desired fontSize for the TextField
                                }}
                            />
                            }
                        />
                        <SelectFilter value={location} setValue={setLocation} placeholder={t("SELECT_LOCATION")} />
                    </Stack>

                    <Stack direction="column" gap={2} className="JobsSection" >
                        {postedJobs && postedJobs.filter(job => job.jobId).map((item, index) => {
                            return <React.Fragment key={index + item.jobId}><JobItem key={index} item={item} /></React.Fragment>
                        })}

                    </Stack>
                    {postedJobs && postedJobs.length > 10 && <Button variant="contained"
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
                        }> {t('LOAD_MORE')}</Button >}
                </Stack>
            </Container>
            <Footer />
        </Box >)
}
export default JobListing;