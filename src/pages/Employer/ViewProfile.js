import { postRequest } from "../../utils/ApiRequests";
import { GetSpecificCandidateDetail } from "../../utils/ApiUrls";
import { useParams } from "react-router-dom";
import ProfileComponent from "../../ThemeComponent/Common/ProfileComponent";

import { useState, useEffect } from "react";
const ViewProfile = () => {
    const { id } = useParams();
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const getCandidateInformation = async () => {
            let response = await postRequest(GetSpecificCandidateDetail, {
                userid: id
            });
            if (response.status === '1')
                setUserData(response.data)
        }
        getCandidateInformation();
    }, []);


    return (<>
        <ProfileComponent userData={userData} userType="employer" />
    </>)
}
export default ViewProfile;