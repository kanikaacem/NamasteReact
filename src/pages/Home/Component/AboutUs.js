import Heading from "../Component/Heading";
import {aboutUS } from "../../../utils/Data";
import { CenterFocusStrong } from "@mui/icons-material";
const AboutUs = () => {
    return (<>
        <div className="aboutUsWrapper">
        <Heading text="About Us!" color="#ffffff" />
        <div className="aboutUsInWrapper">
            <div className="description">
            <h2 style={{margin:'0px'}}>We provide custom web designs</h2>
            <p style={{margin:'0px'}}>WE WORK DIRECTLY FOR OUR CLIENTS AND PUT CLIENT’S INTERESTS FIRST.</p>
            <p>Everything that can be necessary to create and manage new projects (startups) 
            in modern conditions. From development of concept, business plan and project management 
            plan, to marketing strategy and tactics, as well as the system of customer attraction via the Internet and sales system.</p>
            </div>
            <div className="secDesc">
                { aboutUS.map((item) => {
                 return (<>
                  <div className="secDescItem" key={item.id} 
                    style={{background:item.background , color:item.color ? item.color: '#00000'}}> 
                  <h2 style={{margin:'0px'}}>{item.per}</h2>
                  <span style={{textAlign:'center'}}>{item.description}</span>
                </div>
                </>)
               })}
            </div>
        </div>
        </div>
    </>)
}

export default AboutUs;