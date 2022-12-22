const ThemeLabel = ({ LableText, LableFor }) => {
    return (<>
        <label for={LableFor} style={{ color: "#445578", fontWeight: "500" }}> {LableText}</label>
    </>)
}

export default ThemeLabel;