import Heading from "../Component/Heading";
import UserReview from "./UserReview";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Reviews = () => {
    const reviews = [
        {
            id:0,
            reviews:"1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            image:"./assets/profile.png"
        },
        {
            id:1,
            reviews:"2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            image:"./assets/profile.png"
        },
        {
            id:2,
            reviews:"3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            image:"./assets/profile.png"
        },
        {
            id:3,
            reviews:"4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            image:"./assets/profile.png"
        },
        {
            id:4,
            reviews:"3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            image:"./assets/profile.png"
        },
        {
            id:5,
            reviews:"4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
            image:"./assets/profile.png"
        }
    ]
    const splitedReview = [];
    while (reviews.length > 0)
    splitedReview.push(reviews.splice(0, 4));
    
    
    return (<>
      {console.log(splitedReview)}
      <div className="reviews">
      <Heading text="Review!"/>
      <Carousel>
        {/* <UserReview></UserReview>
        <UserReview></UserReview> */}
         {splitedReview.map((reviews,index) => {
            return (<>
             <div className="reviewItem" key={index}>
                <UserReview reviews={reviews} />
             </div>
            </>)
        })}
      </Carousel>
     
      </div>
      
    </>)
}

export default Reviews;