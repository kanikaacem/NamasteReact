import { postRequest } from "../../utils/ApiRequests";
import { GetSpecificCandidateDetail, GetCandidateOnParticularJob } from "../../utils/ApiUrls";
import { useParams } from "react-router-dom";
import ProfileComponent from "../../ThemeComponent/Common/ProfileComponent";

import { useState, useEffect } from "react";
const ViewProfile = () => {
    const { jobid, id } = useParams();

    const [userData, setUserData] = useState([]);

    useEffect(() => {

        const getCandidateInformation = async () => {
            let response = await postRequest(GetSpecificCandidateDetail, {
                userid: id,
                jobid: jobid
            });
            if (response.status === '1') {
                setUserData(response.data)

            }

        }
        getCandidateInformation();
    }, []);


    return (<>
        <ProfileComponent userData={userData && userData[0] && userData[0].candidate} userType="employer"
            userStatus={userData && userData[0] && userData[0].candidatestatus}
            jobsId={userData && userData[0] && userData[0].jobsid._id} />
    </>)
}
export default ViewProfile;