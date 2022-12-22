import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';

const UserProfile = () => {

    const user = localStorage.user && JSON.parse(localStorage.user);
    const EmployeeMenuSelected = useSelector(state => state.EmployeeMenuSelected);
    const CandidateMenuSelected = useSelector(state => state.CandidateMenuSelected);

    const dispatch = useDispatch();
    const EmployerMenus = [
        {
            id: 1,
            title: 'Posted Jobs',
            value: 'posted_jobs'
        },
        {
            id: 2,
            title: 'Subscription plan for company',
            value: 'subscription_plan_for_company'
        },
        {
            id: 3,
            title: 'Saved Candidate',
            value: 'saved_candidate'
        },
        {
            id: 4,
            title: 'Recommended Candidate',
            value: 'recommended_candidate'
        }
    ]

    const CandidateMenus = [
        {
            id: 1,
            title: 'Applied Jobs',
            value: 'applied_jobs'
        },
        {
            id: 2,
            title: 'Saved Jobs',
            value: 'saved_jobs'
        },

    ]
    return (<>
        <div className="employerProfile" >
            <div className="employerInformation" style={{ display: 'flex', gap: '10px', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
                <img src="./assets/Company.png" className="profileImage" style={{ borderRadius: '50%', width: '100px' }} />
                <div style={{ marginTop: '25PX' }}>
                    <div className="name"> {user.fullname}</div>
                    <div className="designation"> {user.type == 'employer' ? "HR Manager" : "Job Seeker"} </div>
                </div>
                {user && user.type == 'candidate' && <a href="/update-profile" > Update Profile</a>}
            </div>
        </div>
        <div className="menus" >
            {user && user.type == "employer" && EmployerMenus.map((item) => {
                return (<>
                    <div className={item.value == EmployeeMenuSelected ? "menuItem active" : 'menuItem'}
                        key={item.id}
                        onClick={() => dispatch({ type: "CHANGE_EMPLOYEE_MENU", payload: item.value })}
                    > {item.title}</div>
                </>)
            })}

            {user && user.type == "candidate" && CandidateMenus.map((item) => {
                return (<>
                    <div className={item.value == CandidateMenuSelected ? "menuItem active" : 'menuItem'}
                        key={item.id}
                        onClick={() => dispatch({ type: "CHANGE_CANDIDATE_MENU", payload: item.value })}
                    > {item.title}</div>
                </>)
            })}

            <Button variant="contained" type="submit" className="LogoutButton"
                style={{ borderRadius: '10px', background: '#2B1E44', display: 'block', margin: '0 auto' }}
                onClick={() => dispatch({ type: "LOGOUT" })}
            >Logout</Button>
        </div>

    </>)
}
export default UserProfile;
