const ThemeLabel = ({ LableText, LableFor }) => {
    return (<>
        <label
            className="themeLabel" for={LableFor} style={{
                fontWeight: "500",
                fontFamily: "Montserrat"
            }}> {LableText}</label>
    </>)
}

export default ThemeLabel;