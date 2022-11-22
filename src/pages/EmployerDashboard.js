import EmployerProfile from '../Component/EmployerProfile';
import Job from "./Home/Component/Job";
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const EmployerDashboard = () => {
    const [data, setdata] = useState([]);
    const [company, setcompany] = useState("");
    const user = localStorage.user && JSON.parse(localStorage.user);
    const EmployeeMenuSelected = useSelector(state => state.EmployeeMenuSelected);

    useEffect(() => {
        const getData = async () => {
            let data = await fetch("http://192.168.1.6:8000/api/job/getpostedjobs", {
                // Adding method type
                method: "POST",
                // Adding body or contents to send
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    userid: "6378a2dce9dad34d132a0e63"

                }),
            });
            if (data.ok) {
                data = await data.json();
                console.log(data.data);
                setdata(data.data);
                setcompany(data.companyinfo[0]);

            }
        };

        getData(); // run it, run it

    }, [EmployeeMenuSelected]);

    return (<>
        <div className="employer-dashboard">
            <div className="employer-left-Side">
                <EmployerProfile />
            </div>
            <div className="all-tab-information">
                {
                    data.length > 0 ? data.map((item) => {
                        return (<>
                            <Job key={item.id} data={item} company={company} />
                        </>)
                    }) : <h3> There is no data present</h3>
                }

            </div>


        </div>

    </>)
}

export default EmployerDashboard;