import Heading from "../Component/Heading";
const WhyJobYahan = () => {
    return (<>
        <div className="jobYahan" >
            <div className="jobYahanWrapper" style={{backgroundImage: `url("./assets/Questionmark.png")`}}>
                <Heading text="Why JobsYahan!"/>
                <div className="description">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum 
                    has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
                    took a galley of type and scrambled it to make a type specimen book.
                </div>
            </div>
        </div>
    </>
    )
}

export default WhyJobYahan;