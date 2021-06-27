import { Grid, Typography, Box } from "@material-ui/core";
import authors from "../../data/authors.json";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { useTheme } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "160px",
    height: "160px",
    background: theme.palette.primary.main,
    borderRadius: "8px",
    padding: "16px",
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      opacity: "0.8",
    },
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
    //console.log(authorData);
  }, []);

  const onClickHandler = (id) => {
    //console.log("clicked", id);
    const newItems = [...authorData];
    var item = authorData.findIndex((obj) => obj.id === id);
    newItems[item].selected = !newItems[item].selected;
    setAuthorData(newItems);

    var myFav = authorData.filter((item) => item.selected);
    setAuthorSelected(myFav);
    //console.log(authorData);
  };
  return (
    <>
      <Grid container spacing={3}>
        {authorData.map((item, id) => {
          return (
            <Grid
              item
              key={id}
              md={2}
              xs={6}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                style={{
                  backgroundColor: item.selected
                    ? theme.palette.secondary.main
                    : "#40916c",
                }}
                onClick={() => onClickHandler(item.id)}
                className={classes.root}
              >
                <Typography
                  style={{
                    color: "#030c08",
                    fontSize: "20px",
                  }}
                >
                  {item.name}
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
