import { Grid, Typography, Box, Container, Divider } from "@material-ui/core";
import constants from "../../data/constants.json";
import { makeStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { useTheme } from "@material-ui/styles";
import { GET_ALL_AUTHOR } from "../../graphql/Queries";
import { useLazyQuery } from "@apollo/client";
import LottieAnimation from "../../helpers/lottie";
import LoadAnimation from "../../animations/feed-loading.json";

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

  const [getAllAuthor, { data, loading, error }] = useLazyQuery(
    GET_ALL_AUTHOR,
    {
      onCompleted: () => {
        //console.log(data.authors.authors);
        var response = JSON.parse(JSON.stringify(data.authors));
        response.authors.forEach((item) => {
          item.selected = false;
        });
        //console.log(response);
        setAuthorData(response.authors);
      },
      onError: () => {
        setAuthorData([]);
        console.log(error);
      },
    }
  );

  useEffect(() => {
    getAllAuthor();
  }, [getAllAuthor]);

  const onClickHandler = (id) => {
    const newItems = [...authorData];
    var item = authorData.findIndex((obj) => obj.id === id);
    newItems[item].selected = !newItems[item].selected;
    setAuthorData(newItems);

    var myFav = authorData.filter((item) => item.selected);
    setAuthorSelected(myFav);
  };

  const getListItems = (separator, listname) => {
    let itemsInList = [];
    let id = separator;
    for (; id < authorData.length; id++) {
      let item = authorData[id];
      if (listname < item.name[0] && listname < authorData[id + 1]?.name[0]) {
        separator = id;
        break;
      }
      if (item.name.startsWith(listname)) {
        itemsInList.push(
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
      }
    }

    return itemsInList;
  };

  return (
    <Grid container spacing={3}>
      {loading || authorData.length === 0 ? (
        <Container>
          <LottieAnimation lotti={LoadAnimation} height={500} width={500} />
        </Container>
      ) : (
        <>
          {(() => {
            let allLists = [];
            let separator = 0;
            for (let i = 0; i < 26; i++) {
              let listname = (i + 10).toString(36).toUpperCase();
              allLists.push(
                <Grid item key={i} md={12} xs={12}>
                  {(() => {
                    const listItems = getListItems(separator, listname);
                    return (
                      <Grid container spacing={3}>
                        {listItems.length === 0 ? (
                          <></>
                        ) : (
                          <Grid item md={12} xs={12}>
                            <Grid container spacing={3}>
                              <Grid item md={12} xs={12}>
                                <Typography
                                  variant="h1"
                                  style={{ padding: "8px" }}
                                >
                                  {listname}
                                </Typography>
                                <Divider
                                  style={{
                                    backgroundColor:
                                      theme.palette.primary.light,
                                  }}
                                />
                              </Grid>
                              <Grid item md={12} xs={12}>
                                <Grid container spacing={3}>
                                  {listItems}
                                </Grid>
                              </Grid>
                            </Grid>
                          </Grid>
                        )}
                      </Grid>
                    );
                  })()}
                </Grid>
              );
            }
            return allLists;
          })()}
        </>
      )}
    </Grid>
  );
};

export default AuthorsOnboard;
