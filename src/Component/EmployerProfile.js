import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';

const EmployerProfile = () => {

    const user = localStorage.user && JSON.parse(localStorage.user);
    const EmployeeMenuSelected = useSelector(state => state.EmployeeMenuSelected);
    const dispatch = useDispatch();
    const Menus = [
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
    return (<>
        <div className="employerProfile" >
            <div className="employerInformation">
                <img src="./assets/Company.png" style={{ borderRadius: '50%', width: '60px' }} />
                <div>
                    <div className="name"> {user.fullname}</div>
                    <div className="designation"> HR Manager</div>
                </div>
            </div>
        </div>
        <div className="menus" >
            {Menus.map((item) => {
                return (<>
                    <div className={item.value == EmployeeMenuSelected ? "menuItem active" : 'menuItem'}
                        key={item.id}
                        onClick={() => dispatch({ type: "CHANGE_EMPLOYEE_MENU", payload: item.value })}
                    > {item.title}</div>
                </>)
            })}
        </div>
        <Button variant="contained" type="submit" className="LogoutButton"
            style={{ borderRadius: '10px', background: '#2B1E44' }}
            onClick={() => dispatch({ type: "LOGOUT" })}
        >Logout</Button>
    </>)
}
export default EmployerProfile;
