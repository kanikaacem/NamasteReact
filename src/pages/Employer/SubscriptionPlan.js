import { Box, Stack, Container, Typography, styled } from "@mui/material";
import ButtonType2 from "../../ThemeComponent/Common/ButtonType2";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DoneIcon from '@mui/icons-material/Done';

import { useState } from "react";
const SubscriptionPlan = () => {

    const [subscriptionPlan, setSubscriptionPlan] = useState(false);
    const CustomizeBox = styled(Box)({
        background: "#FFFFFF",
        borderRadius: "10px",
        minHeight: "100px",
        padding: "20px",
    })
    const SubscriptionPlanItem = styled(Stack)({
        fontSize: "0.8rem",
        width: "60%",
        margin: " 0 auto",
        marginBottom: "10px",
        flexDirection: "row",
        gap: "10px"
    })

    const SubscriptionPlanMainHeading = styled(Box)({
        textAlign: "center",
        fontSize: {"xs":"0.8rem","sm":"0.8rem","md":"1.25rem","lg":"1.25rem","xl":"1.25rem"},
        marginBottom: "10px"
    })

    const PlanHeading = styled(Box)({
        marginLeft: "60px",
        textAlign: "center",
        margin: "30px 0px",
        textTransform: "capitalize",
        fontSize: "1.1rem"
    })
    return (<>
        <Box>
            <Container sx={{
                padding: "20px"
            }}
            >
                {!subscriptionPlan && (<>
                    <Box>
                        <Box>
                            <Stack direction="row"
                                alignItems="center"
                                justifyContent="space-between">
                                <Box>
                                    <Typography component="div" sx={{ fontSize: {
                                        "xs":"1rem","sm":"1rem","md":"1rem","lg":"1.8rem","xl":"1.8rem"
                                    } }}>
                                        Plan & Subscriptions
                                    </Typography>
                                </Box>
                                <Box>
                                    <ButtonType2 ButtonText="Buy Premium Credits" ClickEvent={() => setSubscriptionPlan(true)}></ButtonType2>
                                </Box>
                            </Stack>
                        </Box>
                        <Stack gap={3} sx={{ marginTop: {"xs":"0px","sm":"0px","md":"50px","lg":"50px","xl":"50px"}, minHeight: "100px", background: "#FFFFFF", 
                        padding: {"xs":"10px","sm":"10px","md":"20px","lg":"20px","xl":"20px"}, borderRadius: "10px" }}>
                            <Stack direction="row" justifyContent="space-between">
                                <Box>
                                    <Typography component="div" sx={{
                                        fontSize: { "xs": "0.7rem", "sm": "0.7rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },

                                    }}>
                                        1. Basic Plan
                                    </Typography></Box>
                                <Box>
                                    <Typography component="div" sx={{
                                        fontSize: { "xs": "0.7rem", "sm": "0.7rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },

                                    }}>
                                        Unlimited
                                    </Typography> </Box>
                            </Stack>
                            <Box>
                                <Stack direction="row" justifyContent="space-between">
                                    <Box>
                                        <Typography component="div" sx={{
                                            fontSize: { "xs": "0.7rem", "sm": "0.7rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },

                                        }}>
                                            2. Premium Plan
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography component="div"
                                         sx={{
                                            fontSize: { "xs": "0.7rem", "sm": "0.7rem", "md": "1rem", "lg": "1rem", "xl": "1rem" },

                                         }}>
                                            0 credits left
                                        </Typography>
                                    </Box>
                                </Stack>
                                <Typography component="div" sx={{
                                    marginLeft: "20px", color: "#445578", fontSize: {
                                        "xs":"0.7rem","sm":"0.8rem","md":"0.8rem","lg":"0.8rem","xl":"0.8rem"
                                    }
                                }}>
                                    Reach out to more candidates in less time with our premium postings
                                </Typography>

                                <Typography component="div" sx={{ marginLeft: "20px", color: "#445578", 
                                fontSize:{
                                    "xs":"0.7rem","sm":"0.8rem","md":"0.8rem","lg":"0.8rem","xl":"0.8rem"

                                }}}>
                                    Buy More credits
                                </Typography>
                            </Box>

                        </Stack>
                    </Box></>)}

                {subscriptionPlan && (<>
                    <Box>
                        <Box sx={{ cursor: "pointer" }}> <ArrowBackIcon onClick={() => setSubscriptionPlan(false)} ></ArrowBackIcon> </Box>
                        <SubscriptionPlanMainHeading sx={{ fontWeight: "600" }}>Choose the right plan for you</SubscriptionPlanMainHeading>
                        <SubscriptionPlanMainHeading>Increase the visibility of your posting, create a listing that attracts the best candidates</SubscriptionPlanMainHeading>
                        <Stack direction="row" gap={2}
                            sx={{ margin: "50px 0px", flexWrap: "wrap" }}
                        >
                            <CustomizeBox sx={{ width: { "lg": "40%", "md": "100%", "xs": "100%" } }}>
                                <PlanHeading>basic</PlanHeading>
                                <PlanHeading sx={{ fontWeight: "600" }}>free</PlanHeading>

                                <SubscriptionPlanItem>
                                    <DoneIcon></DoneIcon> Normal Posting in Category, keywords, Search and related jobs.
                                </SubscriptionPlanItem>

                                <SubscriptionPlanItem>
                                    <DoneIcon></DoneIcon> Normal posting in daily newsletter that goes out to all registered candidates.
                                </SubscriptionPlanItem>


                            </CustomizeBox>
                            <CustomizeBox sx={{ width: { "lg": "60%", "md": "100%", "xs": "100%" } }}>
                                <PlanHeading>Signature Posting</PlanHeading>
                                <PlanHeading sx={{ fontWeight: "600" }}>Rs. 3,000</PlanHeading>

                                <SubscriptionPlanItem>
                                    <DoneIcon></DoneIcon>
                                    Special customized mail sent to all relevant candidates (highly targeted).
                                </SubscriptionPlanItem>

                                <SubscriptionPlanItem>
                                    <DoneIcon></DoneIcon>
                                    Posting stays on top of all the relevant category pages for 15 days.
                                </SubscriptionPlanItem>

                                <SubscriptionPlanItem>
                                    <DoneIcon></DoneIcon>
                                    Promoted in daily newsletters circulated among all registered job seekers.
                                </SubscriptionPlanItem>

                                <SubscriptionPlanItem>
                                    <DoneIcon></DoneIcon>
                                    Logo/branding in the posting.
                                </SubscriptionPlanItem>

                                <SubscriptionPlanItem>
                                    <DoneIcon></DoneIcon>
                                    A dedicated account manager will guide you to the best result possible.
                                </SubscriptionPlanItem>

                                <Box sx={{ textAlign: "center" }}>
                                    <ButtonType2 ButtonText="Buy Now" ></ButtonType2>
                                </Box>

                            </CustomizeBox>
                        </Stack>
                    </Box>
                </>)}


            </Container>
        </Box >
    </>)
}
export default SubscriptionPlan;