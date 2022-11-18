import ReviewWrapper from "../../../Component/ReviewWrapper";
const UserReview = ({ reviews }) => {
  // {console.log(reviews)}
  return (<>
    <div className="reviewItem">
      {
        reviews.map((review, index) =>
          <ReviewWrapper key={index} review={review} ></ReviewWrapper>)
      }
    </div>
  </>)
}

export default UserReview;