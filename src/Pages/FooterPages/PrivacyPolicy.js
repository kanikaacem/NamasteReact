import { Box, Stack, Typography } from "@mui/material";
import Footer from "../../ThemeComponent/Common/Footer";
import FooterHeader from "./FooterHeader";
import FooterHeading from "./FooterHeading";
import FooterDescription from "./FooterDescription";
const PrivacyPolicy = () => {
    return (<Stack
        className="AboutUsPage"
        direction="column"
        sx={{
            background: "#FCFCFC"
        }}
    >
        <FooterHeader />

        <Box className="PrivacyPolicyContent"
            sx={{
                padding: { "xs": "20px", "sm": "20px", "md": "60px 40px", "lg": "60px 40px", "xl": "60px 40px" },
                boxSizing: "border-box"
            }}>
            <Box className="AboutUsContentTopSection" sx={{ position: "relative" }}>
                <Box>
                    <img src="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/about_us.png" alt="banner"
                        width="100%" height="100%" />
                </Box>
                <Stack className="PageHeading" gap={2} sx={{
                    position: "absolute",
                    top: "35%",
                    left: "40%",
                    display: "inline - flex"
                }}>
                    <Typography sx={{
                        fontSize: { "xs": "1.5rem", "sm": "1.5rem", "md": "1.5rem", "lg": "3rem", "xl": "3rem" },
                        fontWeight: "700",
                        color: "#ffffff",
                        lineHeight: "1.2",

                    }}>
                        Privacy
                    </Typography>
                    <Typography sx={{
                        fontSize: { "xs": "1.5rem", "sm": "1.5rem", "md": "1.5rem", "lg": "3rem", "xl": "3rem" },
                        fontWeight: "700",
                        color: "#FF671F",
                        display: "block",
                        lineHeight: "1.2"
                    }}>
                        Policy
                    </Typography>
                </Stack>

            </Box>
            <Box className="AboutUsPageContentDescriptions" sx={{ padding: "20px 0px" }}>
                <Box>
                    <FooterHeading headingText="Personal Identification Information" />
                    <Stack direction="column" gap={3}>
                        <FooterDescription Description="By using our service, 
                    you agree that your information can be used for privacy.
                     The personal data we gather /collect is used for improving the /our service. We will not use or disclose 
                    your information with outside parties, except as written in this Privacy Policy. " />
                        <FooterDescription Description="When you create your JobsYahan profile,
                     you provide personal information about yourself, such as your name,
                     location, gender, profile picture, education, and professional information 
                     such as your workplace / organisation / salary, etc. This information
                     is what we call a public profile. And we publish your public profile on JobsYahan."/>
                        <FooterDescription Description="We may collect personal data of users 
                    including the data available on networks such as Facebook, LinkedIn,
                    Twitter, etc. We collect this information in order to better understand 
                    and communicate with our users." />
                    </Stack>

                </Box>
                <Box>
                    <FooterHeading headingText="Web Browser Cookies" />
                    <Stack direction="column" gap={3}>
                        <FooterDescription Description="Cookies are small data that are frequently used as 
                        anonymous unique identifiers. These data are sent to your browser when you visit a
                         website and are stored in your device’s internal hard disk." />
                        <FooterDescription Description="JobsYahan may use cookies to improve user experience. 
                        You have the choice whether to accept or reject these cookies and can know when a cookie
                        is being sent. Note that, if you reject our cookies, some part of our website will not 
                        function properly." />

                    </Stack>
                </Box>

                <Box>
                    <FooterHeading headingText="Third-party Website" />
                    <FooterDescription Description="Users may get advertising or other content on our
                    website that connects to the website and service of our partners, advertisers, institutes,
                    sponsors and third parties. We have no control over the content or links that appear on these
                    websites, and we have no control over how these websites operate. Moreover, these websites and 
                    services, including their content and link, may continue to change. These websites and services 
                    may have set different privacy and policy and customer service policies for them. " />
                </Box>

                <Stack gap={2}>
                    <FooterHeading headingText="Third-party Website" />
                    <FooterDescription Description="Personal Information (PI) is any information about an identified
                     or identifiable natural person, including common identifiers like a name, an identification 
                     number, location information, an online identifier. JobsYahan looks for physical, physiological
                     , genetic, mental, economic, cultural, or social identity for a natural person as categorised 
                     by applicable laws.  " />
                    <FooterDescription Description="In order to offer better services, we gather information
                     about you and/or your usage." />
                    <FooterDescription Description="The personal information we collect from you and how we 
                    collect it, depends on how you communicate with us. 
                    We gather the following categories of personal data in the ways described below:" />

                    <Stack direction="column" gap={1}>
                        <FooterDescription Description="1. Name, mobile number, email address, password, gender, current location, city, contact number." />
                        <FooterDescription Description="2. Information that normally users use in their resume, such as name, contact details, email address, mobile number, date of birth, work experience, educational qualifications, data relating to your current
                         and previous employment and salary details, when one registers on JobsYahan." />
                        <FooterDescription Description="3. JobsYahan can SMS or WhatsApp you for services. Besides, if you refer a friend and share his/her contact details, we can communicate with the concerned individual via SMS or WhatsApp." />
                        <FooterDescription Description="4. JobsYahan may also collect your personal information like name, age, contact details, employment preferences, etc. at the time of survey and forms, if you agree to contribute to the survey" />
                        <FooterDescription Description="5. When you interact with JobsYahan or use this platform to interact with JobsYahan’s partners, we may take the information of interaction between both of you. " />
                        <FooterDescription Description="6. Using the device to access JobsYahan platform, we may collect technical or related information from the device as well as the device's location. " />
                        <FooterDescription Description="7. If you choose to access JobsYahan Platform using a third-party account such as Truecaller, Google, Facebook, etc. to connect the
                         platform, or if you connect your social media account with the Platform's services, you consent to our collection, storage and use of the data you provide to us through the third-party interface in accordance with this Privacy Policy. " />
                    </Stack>

                    <FooterDescription Description="For additional information on how your third party shares information when you opt to connect your account, please go to its privacy statement and support section." />
                </Stack>

                <Box>
                    <FooterHeading headingText="Security" />
                    <Stack direction="column" gap={3}>
                        <FooterDescription Description="JobsYahan places a high value on the security 
                        and confidentiality of your personal information, 
                        and we have significant investments for safeguarding your personal data. We 
                        demand external service providers follow the same security requirements as 
                        JobsYahan does whenever you engage with its services. We take all reasonable 
                        precautions to guarantee that your personal data is kept secure, regardless 
                        of where your Personal Information is transferred or stored." />
                        <FooterDescription Description="In order to protect and preserve your privacy, 
                        we work to guarantee compliance with the rules issued under the Information Technology 
                        Act, 2000. In accordance with the Indian law, we have implemented physical, electronic
                        and procedural precautions to protect your personal information. If you accept the terms
                        of this privacy policy, you agree that the measurements and security practices we use are reasonable and sufficient for the protection of your personal information.  " />

                    </Stack>
                </Box>

                <Box>
                    <FooterHeading headingText="How Do We Use Collected Information?" />
                    <Stack direction="row" >
                        <FooterHeading headingText="How Do We Use Collected Information?" />
                        <FooterDescription Description="We may use your data to comprehend how you use services and resources provided on our website." />
                    </Stack>
                    {/* <Stack direction="row" >
                        <FooterHeading headingText="To Enhance Our Website: " />
                        <FooterDescription Description="Your data assists us in effectively answering your queries and needs." />
                    </Stack>
                    <Stack direction="row" >
                        <FooterHeading headingText="To Improve Customer Service: " />
                        <FooterDescription Description="We may use your data to comprehend how you use services and resources provided on our website." />
                    </Stack>
                    <Stack direction="row" >
                        <FooterHeading headingText="To Process Transactions:" />
                        <FooterDescription Description="When a user places an order and the information they 
                        provide about themselves help us provide them with services. 
                        We never disclose  information with outside parties, except in the conditions 
                        that it is necessary to provide them for services." />
                    </Stack>
                    <Stack direction="row" >
                        <FooterHeading headingText="To Manage Content -" />
                        <FooterDescription Description="Promotions, surveys, or other features of the website: We may send information to users if they 
                        allow us to do so about the topics that we think may be interesting to them. "/> </Stack>
                    <Stack direction="row" >
                        <FooterHeading headingText="To Send Periodic Emails:" />
                        <FooterDescription Description="When a user registers with JobsYahan, we will send 
                        them order-related updates and information on their mentioned email ID. It could also 
                        be used to answer their questions and other requests. If users choose to stay in our 
                        mailing list, they will get messages 
                        that may include company news, updates, offers, related items or service information, etc. " />
                    </Stack> */}
                </Box>


            </Box>

        </Box>
        <Footer />
    </Stack >)
}

export default PrivacyPolicy;
