import { Box } from "@mui/material";
import Heading from "../Component/Heading";
import UserReview from "./UserReview";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { reviews } from "../../../utils/Data";
import { useState, useEffect } from "react";

const Reviews = () => {

    const [item, setItem] = useState(reviews);

    const splitedReview = [];
    while (reviews.length > 0) {
        splitedReview.push(reviews.splice(0, 2));
    }

    useEffect(() => {
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        console.log(item);
        // if (!isMobile)
        //     // setItem(2);
    })


    return (<>
        <div className="reviews">
            <Box sx={{
                background: "#FAFAFA",
                padding: "20px 0px",
                color: "445578"
            }}>
                < Heading text="What Customers Say about us!" />

            </Box>
            <Carousel
                autoPlay="true"
                infiniteLoop="true"
            >
                {splitedReview.map((reviews, index) => {
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