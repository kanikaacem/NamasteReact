import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PlaceIcon from '@mui/icons-material/Place';
import NotesIcon from '@mui/icons-material/Notes';
import Checkbox from '@mui/material/Checkbox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import parse from 'html-react-parser';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import CloseIcon from '@mui/icons-material/Close';

import { useState } from 'react';
const Job = ({ company, data }) => {
    const [showJobDescription, setshowJobDescription] = useState();

    const deletePostedJob = (id) => {
        console.log(id);
    }
    const showDescription = (id) => {
        setshowJobDescription(id);
    }
    const closeDescription =
        () => {
            // console.log(data);
            // console.log(typeof (data))
            setshowJobDescription(0);
            // if (data == 'close') {
            //     setshowJobDescription(0);
            // }
        }
    return (<>
        {console.log(showJobDescription)}
        <div className="jobItem" id={data && data._id} onClick={() => showDescription(data._id)}>
            <Checkbox></Checkbox>
            <div className="jobLogo" >
                <img style={{ width: "100%", borderRadius: '10px' }} src={company && company.companyLogo} alt=""></img>
            </div>

            <div className="jobInformation">

                <h3> {company && company.companyName} - {data && data.title} - {data && data.role.replace("_", " ")}</h3>

                <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '30px' }}>
                    <span><WorkOutlineIcon></WorkOutlineIcon>{data && data.experience} Yrs </span>
                    <span><CurrencyRupeeIcon></CurrencyRupeeIcon> {data && data.salary}</span>
                    <span><PlaceIcon></PlaceIcon>{data && data.location}</span>
                </div>
                <span> <NotesIcon></NotesIcon> {data && data.shortdescription}</span>
                <div style={{ display: 'flex', gap: '10px', position: 'absolute', right: '10px' }}>
                    {/* <span><VisibilityIcon></VisibilityIcon></span> */}

                    <span><EditIcon onClick={() => deletePostedJob(data._id)}></EditIcon></span>
                    <span><DeleteIcon onClick={() => deletePostedJob(data._id)}></DeleteIcon></span>
                </div>
            </div>
        </div >

        <div className={data && data._id == showJobDescription ? "jobDescriptionPage active" : "jobDescriptionPage"} id={data && data._id}>
            {/* <ClickAwayListener onClickAway={() => closeDescription('close')}> */}

            <div className="jobDescriptionWrapper">
                <div className="closeButton" style={{ cursor: 'pointer' }} onClick={closeDescription}>
                    <CloseIcon style={{ float: 'right' }} />
                </div>
                <div className="items">
                    <h3> {company && company.companyName} - {data && data.title} - {data && data.role.replace("_", " ")}</h3>
                    <div className="jobDescriptionLogo" >
                        <img style={{ width: "100%", borderRadius: '10px' }} src={company && company.companyLogo} alt=""></img>
                    </div>
                    <div style={{ display: "flex", gap: '10px', flexDirection: 'column' }}>
                        <div style={{ display: "flex", gap: '10px' }}><WorkOutlineIcon></WorkOutlineIcon>{data && data.experience} Yrs </div>
                        <div style={{ display: "flex", gap: '10px' }}><CurrencyRupeeIcon></CurrencyRupeeIcon> {data && data.salary}</div>
                        <div style={{ display: "flex", gap: '10px' }}><PlaceIcon></PlaceIcon>{data && data.location}</div>
                    </div>
                </div>
                <div className="items">
                    <h5> Job Description</h5>
                    <div >{parse(data && data.description)} </div>
                    <h4> Skills</h4>
                    <div>
                        {
                            data && data.skills.split(',').map((item) => {
                                return (<>
                                    <span style={{
                                        border: '2px solid #838383',
                                        padding: '5px', borderRadius: '10px',
                                        marginRight: '20px',
                                        textTransform: 'capitalize'
                                    }} >
                                        {item.replace("_", " ")} </span></>)
                            })
                        }
                    </div>

                </div>
            </div>
            {/* </ClickAwayListener> */}
        </div>


    </>
    )
}
export default Job;