const ThemeLabel = ({ LableText, LableFor }) => {
    return (<>
        <label for={LableFor} style={{
            fontWeight: "500",
            fontSize: "24px",
            fontFamily: "Montserrat"
        }}> {LableText}</label>
    </>)
}

export default ThemeLabel;