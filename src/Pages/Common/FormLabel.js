const FormLabel = ({ LableText, LableFor }) => {
    return (<>
        <label
            className="themeLabel" htmlFor={LableFor} style={{
                fontSize: "0.8rem",
                fontWeight: "500",
                marginBottom: "10px",
                display: "block"
            }}> {LableText}</label>
    </>)
}

export default FormLabel;