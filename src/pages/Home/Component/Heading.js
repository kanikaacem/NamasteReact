const Heading = ({ text, color }) => {
    return (<>
        <h1 className="title" style={{ color: color ? color : "black", textAlign: "center", margin: '0px' }}> {text}</h1>
    </>)
}

export default Heading;