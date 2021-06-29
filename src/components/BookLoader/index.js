import LoadAnimation from "../../animations/feed-loading.json";
import LottieAnimation from "../../helpers/lottie";
import { Container } from "@material-ui/core";
const BookLoader = () => {
  return (
    <Container>
      <LottieAnimation lotti={LoadAnimation} height={500} width={500} />
    </Container>
  );
};

export default BookLoader;
