import CommonLayout from "../../layouts/CommonLayout";
import HeroSection from "./hero";
import { Grid } from "@material-ui/core";
import Lists from "./lists";
const HomeView = () => {
  return (
    <CommonLayout>
      <Grid container direction="column">
        <Grid item>
          <HeroSection />
        </Grid>
        <Grid item>
          <Lists />
        </Grid>
      </Grid>
    </CommonLayout>
  );
};

export default HomeView;
