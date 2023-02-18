import ButtonType3 from "./ButtonType3";

const UploadFile = ({element,uploadEvent}) =>{
    return (<>
        <input type="file" name={element} id={element} onChange={uploadEvent} style={{ display: "none" }} />
        <ButtonType3 ButtonText="Upload File" imageURL="/assets/document.png" ClickEvent={() => document.getElementById(element).click()}></ButtonType3>
    </>)
}
export default UploadFile;