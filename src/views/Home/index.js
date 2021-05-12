import CommonLayout from "../../layouts/CommonLayout";
import HeroSection from "./hero";
import { Container, Grid } from "@material-ui/core";
const HomeView = () => {
  return (
    <CommonLayout>
      <Container>
        <Grid container direction="column">
          <Grid item>
            <HeroSection />
          </Grid>
        </Grid>
      </Container>
    </CommonLayout>
  );
};

export default HomeView;
