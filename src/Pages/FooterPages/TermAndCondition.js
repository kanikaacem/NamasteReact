import { Box, Stack, Typography } from "@mui/material";
import Footer from "../../ThemeComponent/Common/Footer";
import FooterHeading from "./FooterHeading";
import FooterDescription from "./FooterDescription";
import Header from "../Common/Header";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
const TermAndCondition = () => {
    const currentLanguage = useSelector(state => state.currentLanguage);
    return (<>
        <Stack
            className="TermsAndConditionPage"
            direction="column"
            sx={{
                background: "#FCFCFC"
            }}
        >    <Helmet>
                <title>Check JobsYahan’s Terms & Conditions for Recruiters & Candidates</title>
                <meta name="description" content="Both recruiters and candidates can check terms & conditions stipulated for availing services of JobsYahan" />
                <meta property="og:type" content="Website" />
                <meta property="og:title" content="Check JobsYahan’s Terms & Conditions for Recruiters & Candidates" />
                <meta property="og:image" content="https://jobyahanp.s3.ap-south-1.amazonaws.com/images/logo/logo_og.png" />
                <meta property="og:url" content={`${window.location.origin}/${currentLanguage}/terms-and-conditions`} />
            </Helmet>
            <Header />

            <Box className="TermsAndConditionContent"
                sx={{
                    padding: { "xs": "20px", "sm": "20px", "md": "60px 40px", "lg": "60px 40px", "xl": "60px 40px" },
                    boxSizing: "border-box"
                }}>

                <Box className="PrivacyPolicyTopSection">
                    <Typography sx={{
                        fontSize: { "xs": "1.5rem", "sm": "1.5rem", "md": "1.5rem", "lg": "3rem", "xl": "3rem" },
                        fontWeight: "700",
                        lineHeight: "1.2",

                    }}>
                        Terms and Conditions
                    </Typography>
                </Box>
                <Box className="AboutUsPageContentDescriptions" sx={{ padding: "20px 0px" }}>
                    <Stack direction="column" gap={1}>
                        <FooterHeading headingText="1. Usage of JobsYahan" />
                        <FooterDescription Description="1. JobsYahan platform provides the space for any person with a verified account on it to view and apply for jobs, and access and participate in the service it provides. On JobsYahan, jobs are posted by third parties that may not be related to or affiliated with it. " />
                        <FooterDescription Description="2. A user accessing the JobsYahan platform shall be following these terms of service, and all other rules and regulations mentioned herein or provided by it in order to use any service provided by the platform. " />
                        <FooterDescription Description="3. JobsYahan has the sole right to change and modify these Terms of Service, rules, regulations and terms of use provided related to any services, at any time. If users are using the JobsYahan platform, they are believed to have accepted our modified terms of service, rules, regulations and terms of use mentioned herein or provided by it in order to use any service. If JobsYahan amends and changes any terms of service, rules, regulations and terms of use, users will get notification of it on their registered email address, user account and number, etc. On receiving these notifications, users may deny accepting these changes by clicking on the not-accepted link. If users do not click on not-accepted link within a given time, we will believe that they have accepted our modified terms of service, rules, regulations and terms of use provided by us." />
                        <FooterDescription Description="4. In case JobsYahan services require some additional rules and regulations to be updated, consequently, existing terms and conditions become inconsistent with the additional rules and regulations, the additional  rules and regulations shall prevail. " />
                        <FooterDescription Description="5. JobsYahan has the authority to:" />
                        <Stack direction="column" gap={1} sx={{ marginLeft: "30px" }}>
                            <FooterDescription Description="• Restrict, suspend, or terminate any user’s access to all or any part of the its platform or services" />
                            <FooterDescription Description="• Change, suspend, or discontinue all or any part of its platform or services " />
                            <FooterDescription Description="• We can reject, remove and move any material submitted by users" />
                            <FooterDescription Description="• Suspend or remove any content available on JobsYahan platform" />
                            <FooterDescription Description="• Delete or deactivate any user’s account and all related information on account" />
                            <FooterDescription Description="• Establish general practices and limits concerning use of JobsYahan Platform" />

                        </Stack>
                        <FooterDescription Description="6. In case any user breaches these Terms of Service or JobsYahan believes that the user has illegally or improperly used its platform or services, without prior notice to such user, JobsYahan has the right to restrict, suspend or terminate such user's account from its platform, and further, we can also take technical and legal steps, if deemed necessary.  " />
                        <FooterDescription Description="7. By accepting these terms of service, users are giving us permission to send them any news, message and advertisement from JobsYahan, any of its partners, licensors or associates. " />
                    </Stack>

                    <Stack direction="column" gap={1}>
                        <FooterHeading headingText="Participation" />
                        <FooterDescription Description="1. If users visit JobsYahan platform, they can see and apply for jobs posted by employers for their respective companies. "></FooterDescription>
                        <FooterDescription Description="2. For viewing or applying Jobs, users need to mention some information such as their education, qualifications, past experience and skills. Meanwhile, JobsYahan does not encourage any form of gender discrimination, but certain jobs can be gender-specific and may be only available for people from specific gender. We must clarify that gender-specific jobs are not mandated by JobsYahan, but job posters may put such conditions. " />
                        <FooterDescription Description="3. If users apply for jobs using JobsYahan platform, that means they agree that the information shared by them with it are accurate and not misleading. Users must understand and acknowledge that any false information or misrepresentation shared by them can negatively impact the reputation of JobsYahan platform and JobsYahan services. In this case, JobsYahan can delete or suspend user accounts without giving any prior notice. " />
                        <FooterDescription Description="4. Users agree that they shall always be following terms and conditions of JoysYahan platform while using its services. " />
                    </Stack>

                    <Stack direction="column" gap={1}>
                        <FooterHeading headingText="Intellectual Property" />
                        <FooterDescription Description="1. The intellectual property rights in all software related to JobsYahan and material published on the platform such as software, advertisements, content (whether written, audio and/or visual), photographs, graphics, images, illustrations, graphs, charts, marks, logos, audio or video clippings, animations, etc. is owned by JobsYahan, its affiliates, partners, licensors and/or associates. Users are not allowed to change/modify, publish, transmit, participate in the transfer or sale of, reproduce, create derivative works of, distribute, publicly perform, publicly display or exploit any material or content on JobsYahan without its permission.  "></FooterDescription>
                        <FooterDescription Description="2. Users are solely responsible for all material or content they upload post, e-mail, and transmit on JobsYahan platform. Each user represents and warrants that they own all rights of content, which does not infringe any third-party rights. Users agree that without permission from a third party, they will not display or use the names, logos, marks, labels, trademarks, copyrights or intellectual and proprietary rights of any third party on JobsYahan. In case users may have used any third-party intellectual property rights and such third-party complaints against them, users agree to compensate all costs under copyrights.  " />
                        <FooterDescription Description="3. All names, logos, marks, labels, trademarks, copyrights or intellectual and proprietary rights on JobsYahan belonging to any user, entity or third party are recognised as proprietary to the respective user and in case any controversy raised against these contents, the user will be solely responsible to the controversy. " />
                    </Stack>

                    <Stack direction="column" gap={1}>
                        <FooterHeading headingText="Third Party Sites, Services and Products" />
                        <FooterDescription Description="1. JobsYahan may provide some third-party links or sites on its platform. JobsYahan does not hold control over those links or sites except from its own platform so cannot be subjected to any content provided by those third party links or sites. JobsYahan providing the space for third-party links or sites does not mean that it endorses the same. "></FooterDescription>
                        <FooterDescription Description="2. If users transactions/offers, correspondence, provide information, payments and verify service to third parties, these activities are happening solely between users and third parties. User’ correspondence, transactions and use of the services/offers of such a third party will be subject to the terms and conditions and policies laid down by such third party. Users will be solely responsible for reviewing the same terms and conditions, policies before taking the service from a third party. If users get cheated or experience any fraud with third parties’ services, JobsYahan will not be responsible for such issues. Any complaints, questions or claims related to any third party products or services must be direct from such third parties.  " />
                        <FooterDescription Description="3. JobsYahan platform contains its own content and content provided by third parties. At the same time, it does not guarantee third parties' content accuracy, integrity or quality.  " />
                    </Stack>


                    <Stack direction="column" gap={1}>
                        <FooterHeading headingText="Privacy Policy" />
                        <FooterDescription Description="1. All information taken from users, like email addresses, mobile phone numbers, and government identity documentation, is subject to JobsYahan’s Privacy Policy.  " />
                        <FooterDescription Description="2. We do not share any information about our users with other companies/entities without taking permission from them. But we may share such information permitted by our privacy policy. " />
                        <FooterDescription Description="3. Once the personal information is shared with you, it's your responsibility to secure such information.  " />
                        <FooterDescription Description="4. You agree to not disclose or transfer personal information shared by us to any person without ensuring that this information is safe.  " />
                        <FooterDescription Description="5. You agree that you will only use shared information for the purpose of services. You will not use shared information for any personal or other business purpose. In case you are found misusing the shared information, we will delete your account and render you ineligible to use JobsYahan platform in the future. " />
                    </Stack>

                    <Stack direction="column" gap={1}>
                        <FooterHeading headingText="User Conduct" />
                        <FooterDescription Description="1. Users agree to follow JobsYahan’s terms and conditions and all other rules and regulations and terms of use. In case users don't follow these terms and conditions and all other rules and regulations, JobsYahan has sole and absolute authority to take necessary actions. These include restricting, suspending, or terminating the user's access to JobsYahan platform. " />
                        <FooterDescription Description="2. Users agree to give true, accurate, current and complete information at the time of registration and all other times (as required by JobsYahan). Users also agree to update their registration and other information. " />
                        <FooterDescription Description="3. A user agrees to not register or operate more than one user account with JobsYahan. " />
                        <FooterDescription Description="4. Users agree to receive all communication from JobsYahan by email, SMS, Whatsapp or any other mode of communication. In case the user does not read the message, JobsYahan will not be responsible for the same.  " />
                        <FooterDescription Description="5. If users experience any password issue by JobsYahan, they are not allowed to reveal this issue to anyone else. And users are not encouraged to use anyone else’s password. Users are solely responsible for keeping their account and password secretly. Users agree to immediately tell JobsYahan about any unauthorised person trying to use their password or account or any type of breach of security.  " />
                        <FooterDescription Description="6. Users agree to exit/log-out of their account after using it. If users fail to log out and any loss or damage takes place, JobsYahan will not be responsible for this. " />
                        <FooterDescription Description="7. Users shall comply with terms not to use cheats, exploits, automation, software, bots, hacks or any unauthorized third-party software designed to modify or interfere with JobsYahan services or help in such activity. " />
                        <FooterDescription Description="8. Users agree not to copy, modify, rent, lease, loan, sell, assign, distribute, reverse engineer, grant a security interest in, transfer any right to the technology underlying JobsYahan platform.  " />
                        <FooterDescription Description="9. Users agree that they shall not attempt to access other users’ accounts, servers, and networks connected to the JobsYahan platform.  " />
                        <FooterDescription Description="10. Users agree to not publish any content with the purpose to mislead or harass a person, entity or agency for financial gain or to cause any injury to any person. " />
                        <FooterDescription Description="11. Users shall not use JobsYahan for following purposes:" />

                        <Stack direction="column" gap={1} sx={{ marginLeft: "30px" }}>
                            <FooterDescription Description="• To engage in any obscene, offensive, indecent, racial, communal, anti-national, objectionable, defamatory or abusive action or communication." />
                            <FooterDescription Description="• To harass, stalk, threaten, or otherwise violate any legal rights of other individuals." />
                            <FooterDescription Description="• To publish, post, upload, e-mail, distribute, or disseminate any inappropriate, profane, defamatory, infringing, obscene, indecent, or unlawful content." />
                            <FooterDescription Description="• To transmit contents that have viruses, corrupted files and any other similar software that can harm JobYahan platform." />
                            <FooterDescription Description="• To advertise, offer or sell any goods or services for any commercial purpose on JobsYahan." />
                            <FooterDescription Description="• To download any file, recompile or disassemble that may affect our products that you know cannot be legally obtained in such manner." />
                            <FooterDescription Description="• To stop or restrict any user from using our public area within our sites. " />
                            <FooterDescription Description="• To collect or store personal information of any users." />
                            <FooterDescription Description="• To interfere with or disrupt JobsYahan platform/ services/ networks" />
                            <FooterDescription Description="• To take any action that imposes major load on JobsYahan platform." />
                            <FooterDescription Description="• To engage in any illegal activities." />
                        </Stack>

                        <FooterDescription Description="12. If users choose any username that is not appropriate, and decent, or a name which is an official team/league/franchise name and/or name of any sporting personality and that may drive JobsYahan to public disparagement or scorn, it can exercise powers to delete or restrict without giving prior notice. " />
                        <FooterDescription Description="13. Users agree to not visit JobsYahan platform except through the interface that is provided by it. Any unauthorised access to JobsYahan platform will be considered a breach of these terms and conditions and a violation of the law. " />
                        <FooterDescription Description="14. The use of JobsYahan platform is subject to existing laws and legal processes of governments. Everything that comes under the terms and conditions of JobsYahan will comply with the government's existing laws. " />
                        <FooterDescription Description="15. Users aged below 18 years are not allowed to use the JobsYahan platform. Users interested in using the JobsYahan platform will be asked to submit their age certificate at the time of registration with JobsYahan. If any user gives false information about his/her age, JobsYahan shall not be held responsible for any legal actions taken by the government against the concerned individual. " />
                        <FooterDescription Description="16.  JobsYahan shall not be responsible for any content posted by users on its platform. " />
                    </Stack>

                    <Stack direction="column" gap={1}>
                        <FooterHeading headingText=" Eligibility" />
                        <FooterDescription Description="1. People above 18 years are eligible to register on JobsYahan platform. " />
                        <FooterDescription Description="2. People must have valid email id and mobile number to register themselves on JobsYahan platform. " />
                        <FooterDescription Description="3. Users who have successfully registered can see job posts and apply for jobs on JobsYahan platform." />
                    </Stack>

                    <Stack direction="column" gap={1}>
                        <FooterHeading headingText="Dispute and Dispute Resolution" />
                        <FooterDescription Description="1. If any dispute takes place between users and JobsYahan due to service provided by JobsYahan platform, both parties must try to settle such disputes amicably. " />
                    </Stack>

                    <Stack direction="column" gap={1}>
                        <FooterHeading headingText="Release and Limitations of Liability" />
                        <FooterDescription Description="1. Users agree to access the service provided by JobsYahan at their own risk. If their account under any circumstances is lost or damaged during access to service, JobsYahan will not be held responsible for it. " />
                        <FooterDescription Description="2. Users agree to indemnify JobsYahan platform while using its services against all liability, cost, loss or expense arising out of their access to JobsYahan platform. " />
                        <FooterDescription Description="3. JobsYahan shall not be responsible for any errors or omissions of information posted on its platform by itself or third parties." />
                        <FooterDescription Description="4. Users shall be solely responsible for any issue occurred due to their illegal act or not following terms and conditions of JobsYahan. Meanwhile, users agree to indemnify JobsYahan on the occurrence of such incidents. " />

                    </Stack>

                    <Stack direction="column" gap={1}>
                        <FooterHeading headingText="Disclaimers" />
                        <FooterDescription Description="1. JobsYahan and its third parties shall not be responsible for the deletion, the failure to store, the mis-delivery, or the untimely delivery of any information or material as suggested under law. " />
                        <FooterDescription Description="2. JobsYahan shall not be responsible for any harm users endure by downloading, accessing any information or material from JobsYahan platform. " />
                        <FooterDescription Description="3. Users shall be solely responsible for any potential damage or loss of data their computer or mobile experience while accessing or downloading material from JobsYahan platform. " />
                        <FooterDescription Description="4. JobsYahan tries to ensure that its platform remain error-free and secured, however, JobsYahan and its partners cannot guarantee the following:" />

                        <Stack direction="column" gap={1} sx={{ marginLeft: "30px" }}>
                            <FooterDescription Description="• JobsYahan will meet users expectations" />
                            <FooterDescription Description="• JobsYahan shall be uninterrupted, timely, secure, or error free" />
                            <FooterDescription Description="• The results users get from the use of JobsYahan platform will be accurate or reliable" />

                        </Stack>

                        <FooterDescription Description="5. Only JobsYahan has the right to rectify the error if found.  " />
                        <FooterDescription Description="6. If the users are using JobsYahan’s platform, and some damages occurred out of their inability to operate it. Neither jobsYahan nor its partners or affiliates shall be responsible for it. Even if JobsYahan has been advised of such damages in advance.  " />
                    </Stack>

                    <Stack direction="column" gap={1}>
                        <FooterHeading headingText="Grievance Redressal Mechanism" />
                        <FooterDescription Description="1. If a user has any complaints or grievances such as the user believes certain content violates the JobsYahan’s terms and conditions, etc., please register your complaint to this contactus@jobsyahan.com " />
                        <FooterDescription Description="2. If users want to register their complaints regarding any violation of JobsYahan’s terms and conditions, they must include the following information in their complaint. " />
                        <Stack direction="column" gap={1} sx={{ marginLeft: "30px" }}>
                            <FooterDescription Description="• Name, address, contact number and email address" />
                            <FooterDescription Description="• Details of the complaints regarding content that indicate the violation of JobsYahan’s terms and conditions." />
                        </Stack>
                        <FooterDescription Description="3. JobsYahan respects the Intellectual Property Rights of others. All names, logos, marks, labels, trademarks, copyrights or intellectual and proprietary rights on the JobsYahan Platform associated with any person, entity or third party are deemed as proprietary to the respective owners. If any user believes that their intellectual property is being used by others, they can send complaints to us." />
                        <FooterDescription Description="4. If JobsYahan receives such complaints, JobsYahan can investigate the issue and take action it deems appropriate. Further, JobsYahan can help the user seek assistance with the investigation or verify the statements made in the complaint. And users agree to help in such circumstances." />
                        <FooterDescription Description="5. For grievance redressal, please contact on -" />
                        <Stack direction="column" gap={1} sx={{ marginLeft: "30px" }}>
                            <FooterDescription Description="• Email: contactus@jobsyahan.com" />
                            <FooterDescription Description="• Address: B-154, B Block, Sector 63, Noida, Uttar Pradesh-201301 " />

                        </Stack>

                    </Stack>


                </Box>

            </Box>
            <Footer />
        </Stack ></>)
}

export default TermAndCondition;
