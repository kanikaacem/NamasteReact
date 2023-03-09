import ProfileComponent from "../../ThemeComponent/Common/ProfileComponent";
import { useOutletContext } from "react-router-dom";

const CandidateProfilePage = () => {
    const user = useOutletContext();

    return (<>
        <ProfileComponent userData={user} userType="candidate" />
    </>)
}
export default CandidateProfilePage;