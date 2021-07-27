import { Box, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { SET_BOOK_TO_LIST, SET_FAV_BOOK } from "../../graphql/Mutations";
import { useMutation } from "@apollo/client";

const useStyles = makeStyles((theme) => ({
  hoveredRoot: {
    width: "212px",
    height: "375px",
    background: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    borderRadius: "8px 8px 8px 8px",
  },
  nonHoveredRoot: {
    width: "175px",
    height: "262px",
    background: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    borderRadius: "8px 8px 8px 8px",
  },
  upperContainerHovered: {
    width: "100%",
    height: "80%",
    borderRadius: "8px 8px 0px 0px",
  },
  upperContainerNonHovered: {
    width: "100%",
    height: "100%",
    borderRadius: "8px 8px 8px 8px",
  },
  lowerContainer: {
    width: "100%",
    height: "20%",
    background: theme.palette.secondary.main,
    borderRadius: "0px 0px 8px 8px",
  },
  genre: {
    padding: theme.spacing(1, 1, 0, 2),
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  genreName: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  icons: {
    padding: theme.spacing(0, 2, 2, 2),
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
}));
const BookCardA = ({ id, imageUrl, genreList, isFav, isOnList }) => {
  const classes = useStyles();
  const [isHovered, setIsHovered] = useState(false);
  const [onReadLater, setOnReadLater] = useState(isOnList);
  const [onFavList, setOnFavList] = useState(isFav);

  const [setBookToList] = useMutation(SET_BOOK_TO_LIST, {
    variables: {
      bookId: id,
      operation: onReadLater ? "remove" : "add",
    },
    onCompleted: () => {
      console.log("Book added/removed to your list");
    },
    onError: () => {
      console.log("Could not add/remove book to your list");
    },
  });

  const [setFavBooks] = useMutation(SET_FAV_BOOK, {
    variables: {
      bookIds: [id],
      operation: onFavList ? "remove" : "add",
    },
    onCompleted: () => {
      console.log("Successfully added/removed fav book");
    },
    onError: () => {
      console.log("Couldn't add/remove fav book");
    },
  });

  return (
    <>
      {isHovered ? (
        <Box
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className={classes.hoveredRoot}
        >
          <RouterLink
            to={`/home/${id}`}
            className={classes.upperContainerHovered}
          >
            <img alt="book" src={imageUrl} width="100%" height="100%" />
          </RouterLink>
          <div className={classes.lowerContainer}>
            <div className={classes.genre}>
              {genreList.slice(0, 1).map((item, id) => {
                return (
                  <div className={classes.genreName} key={id}>
                    <Typography variant="body1">{item.name}</Typography>
                  </div>
                );
              })}
            </div>
            <div className={classes.icons}>
              <RouterLink to={`/home/${id}/read`}>
                <IconButton>
                  <img alt="icon" src="/icons/read-icon.svg" />
                </IconButton>
              </RouterLink>
              <IconButton
                onClick={() => {
                  setOnReadLater(!onReadLater);
                  setBookToList();
                }}
              >
                {onReadLater ? (
                  <img alt="icon" src="/icons/star-icon-enabled.svg" />
                ) : (
                  <img alt="icon" src="/icons/star-icon.svg" />
                )}{" "}
              </IconButton>
              <IconButton
                onClick={() => {
                  setOnFavList(!onFavList);
                  setFavBooks();
                }}
              >
                {onFavList ? (
                  <img alt="icon" src="/icons/like-icon-enabled.svg" />
                ) : (
                  <img alt="icon" src="/icons/like-icon.svg" />
                )}
              </IconButton>
            </div>
          </div>
        </Box>
      ) : (
        <Box
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
          className={classes.nonHoveredRoot}
        >
          <img
            className={classes.upperContainerNonHovered}
            alt="book"
            src={imageUrl}
          />
        </Box>
      )}
    </>
  );
};

export default BookCardA;
