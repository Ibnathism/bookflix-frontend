import { Grid, Typography, Box } from "@material-ui/core";
import authors from "../../data/authors.json";
import constants from "../../data/constants.json";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: "248px",
    height: "188px",
    borderRadius: "8px",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      opacity: "0.8",
    },
  },
  text: {
    fontSize: "22px",
    padding: "32px",
  },
}));

const AuthorsOnboard = ({ setAuthorSelected }) => {
  const theme = useTheme();
  const classes = useStyles();
  const [authorData, setAuthorData] = useState([]);

  useEffect(() => {
    authors.forEach((item) => {
      item.selected = false;
    });
    setAuthorData(authors);
  }, []);

  const onClickHandler = (id) => {
    const newItems = [...authorData];
    var item = authorData.findIndex((obj) => obj.id === id);
    newItems[item].selected = !newItems[item].selected;
    setAuthorData(newItems);

    var myFav = authorData.filter((item) => item.selected);
    setAuthorSelected(myFav);
  };
  return (
    <>
      <Grid container spacing={3}>
        {authorData.map((item, id) => {
          return (
            <Grid item key={id} md={3} xs={6} className={classes.container}>
              <Box
                style={{
                  backgroundColor: item.selected
                    ? theme.palette.secondary.main
                    : theme.palette.primary.main,
                }}
                onClick={() => onClickHandler(item.id)}
                className={classes.box}
              >
                <Typography
                  style={{
                    color: item.selected
                      ? theme.palette.primary.dark
                      : theme.palette.primary.light,
                  }}
                  className={classes.text}
                >
                  {item.name.length >= constants.authorNameMaxLength
                    ? `${item.name}`.substr(0, constants.authorNameMaxLength) +
                      " ..."
                    : `${item.name}`}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default AuthorsOnboard;
