const Error = ({ text }) => {
    return (<>
        <span className="error"
            style={{
                color: "#c72929",
                fontSize: "14px",
                fontWeight: "500",
                display: "block"
            }}> {text}</span></>)
}

export default Error;