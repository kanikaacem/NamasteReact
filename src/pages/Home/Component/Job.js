import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PlaceIcon from '@mui/icons-material/Place';
import NotesIcon from '@mui/icons-material/Notes';
const Jobs = () => {
    return (<>
        <div className="jobs">
           <h3> Advertising Firm - Emerging India Analytics - Graphic Designer</h3>
           <div style={{display:'flex',justifyContent:'flex-start',gap:'30px'}}> 
            <span><WorkOutlineIcon></WorkOutlineIcon> 0 - 2 Yrs </span>
            <span><CurrencyRupeeIcon></CurrencyRupeeIcon> Not disclosed</span>
            <span><PlaceIcon></PlaceIcon> Temp. WFH-Noida</span>
           </div>
           <span> <NotesIcon></NotesIcon> We at Emerging India Analytics are hiring for the position of Graphic Designer for Nodia location (Work from Home)</span>
        </div>
    </>
    )
}
export default Jobs