import { Link } from "react-router-dom";

const CustomizeLink = ({ to, LinkText }) => {
    return (<>
        <Link style={{ textDecoration: "none", color: "#0000000" }} to={to}>{LinkText}</Link>
    </>)
}
export default CustomizeLink;