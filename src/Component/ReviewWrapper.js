const reviewWrapper = ({review}) => {
    return (<>
        <div className="reviewWrapper" id={review.id}>
            <div className="borderDiv">
                <div className="reviewDiv">
                <div style={{width:'90px',height:'90px'}}> 
                 <img src="./assets/profile.png" alt="User" style={{borderRadius:'10px'}}></img></div>
                </div>
                <div style={{display:'flex',alignItems:'flex-end',fontSize:'12px'}}>
                    {review.reviews}
                </div>
            </div>
        </div>
    </>)
}
export default reviewWrapper;