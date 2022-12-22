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
        fontSize: "14px",
        width: "60%",
        margin: " 0 auto",
        marginBottom: "10px",
        flexDirection: "row",
        gap: "10px"
    })

    const SubscriptionPlanMainHeading = styled(Box)({
        textAlign: "center",
        fontSize: "20px",
        marginBottom: "10px"
    })

    const PlanHeading = styled(Box)({
        marginLeft: "60px",
        textAlign: "center",
        margin: "30px 0px",
        textTransform: "capitalize",
        fontSize: "18px"
    })
    return (<>
        <Box>
            <Container sx={{ padding: "20px 0px" }}>
                {!subscriptionPlan && (<>
                    <Box>
                        <Box>
                            <Stack direction="row"
                                alignItems="center"
                                justifyContent="space-between">
                                <Box>
                                    <Typography component="div" sx={{ fontSize: "30px" }}>
                                        Plan & Subscriptions
                                    </Typography>
                                </Box>
                                <Box>
                                    <ButtonType2 ButtonText="Buy Premium Credits" ClickEvent={() => setSubscriptionPlan(true)}></ButtonType2>
                                </Box>
                            </Stack>
                        </Box>
                        <Stack gap={3} sx={{ marginTop: "50px", minHeight: "100px", background: "#FFFFFF", padding: "20px", borderRadius: "10px" }}>
                            <Stack direction="row" justifyContent="space-between">
                                <Box>
                                    <Typography component="div">
                                        1. Basic Plan
                                    </Typography></Box>
                                <Box>
                                    <Typography component="div">
                                        Unlimited
                                    </Typography> </Box>
                            </Stack>
                            <Box>
                                <Stack direction="row" justifyContent="space-between">
                                    <Box>
                                        <Typography component="div">
                                            2. Premium Plan
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Typography component="div">
                                            0 credits left
                                        </Typography>
                                    </Box>
                                </Stack>
                                <Typography component="div" sx={{
                                    marginLeft: "20px", color: "#445578", fontSize: "14px"
                                }}>
                                    Reach out to more candidates in less time with our premium postings
                                </Typography>

                                <Typography component="div" sx={{ marginLeft: "20px", color: "#445578", fontSize: "14px" }}>
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
                            sx={{ margin: "50px 0px" }}>
                            <CustomizeBox sx={{ width: "40%" }}>
                                <PlanHeading>basic</PlanHeading>
                                <PlanHeading sx={{ fontWeight: "600" }}>free</PlanHeading>

                                <SubscriptionPlanItem>
                                    <DoneIcon></DoneIcon> Normal Posting in Category, keywords, Search and related jobs.
                                </SubscriptionPlanItem>

                                <SubscriptionPlanItem>
                                    <DoneIcon></DoneIcon> Normal posting in daily newsletter that goes out to all registered candidates.
                                </SubscriptionPlanItem>


                            </CustomizeBox>
                            <CustomizeBox sx={{ width: "60%" }}>
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
        </Box>
    </>)
}
export default SubscriptionPlan;