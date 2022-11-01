import {useParams} from "react-router-dom";
function About(){
    const {id} = useParams();
    return (<>
    This is the {id} About page </>)
}

export default About;