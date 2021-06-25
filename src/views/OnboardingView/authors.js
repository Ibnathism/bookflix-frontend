import { Grid, Typography, Card } from "@material-ui/core";
import onboardings from "../../data/onboarding.json";
import BookSelectCard from "../../components/BookSelectCard";

const AuthorsOnboard = () => {
  return (
    <>
      <Typography variant="h2">Authors</Typography>
      <Grid container spacing={3}>
        {onboardings.map((item, id) => {
          return (
            <Grid
              item
              md={2}
              xs={6}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <BookSelectCard imageUrl={item.imageUrl} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default AuthorsOnboard;
