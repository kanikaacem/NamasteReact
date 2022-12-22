import { Container, Stack } from "@mui/material";
import ReviewWrapper from "../../../ThemeComponent/ReviewWrapper";
const UserReview = ({ reviews }) => {

  return (<>
    <Container sx={{ background: "#FAFAFA" }} >
      <Stack direction="row" gap={10}>
        {
          reviews.map((review, index) =>
            <ReviewWrapper key={index} review={review} ></ReviewWrapper>)
        }
      </Stack>

    </Container>
  </>)
}

export default UserReview;