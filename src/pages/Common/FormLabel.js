const FormLabel = ({ LableText, LableFor }) => {
    return (<>
        <label
            className="themeLabel" htmlFor={LableFor} style={{
                fontSize: "0.8rem",
                fontWeight: "700",
                fontFamily: "Manrope"
            }}> {LableText}</label>
    </>)
}

export default FormLabel;