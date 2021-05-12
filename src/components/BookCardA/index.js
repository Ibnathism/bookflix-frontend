import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "212px",
    height: "375px",
    background: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "flex-start",
    borderRadius: "8px 8px 8px 8px",
  },
  upperContainer: {
    width: "100%",
    height: "80%",
    borderRadius: "8px 8px 0px 0px",
  },
  lowerContainer: {
    width: "100%",
    height: "20%",
    background: theme.palette.secondary.main,
    borderRadius: "0px 0px 8px 8px",
  },
  genre: {
    padding: theme.spacing(1),
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
    padding: theme.spacing(0, 1, 2, 1),
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
}));
const BookCardA = ({ imageUrl, genreList }) => {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.root}>
        <img className={classes.upperContainer} alt="book" src={imageUrl} />
        <div className={classes.lowerContainer}>
          <div className={classes.genre}>
            {genreList.slice(0, 3).map((item, id) => {
              return (
                <div className={classes.genreName}>
                  <Typography variant="body1">{item.name}</Typography>
                  {id !== 2 ? (
                    <svg height="18" width="18">
                      <circle cx="9" cy="9" r="3" fill="black" />
                    </svg>
                  ) : null}
                </div>
              );
            })}
          </div>
          <div className={classes.icons}>
            <img alt="icon" src="/icons/read-icon.svg" />
            <img alt="icon" src="/icons/star-icon.svg" />
            <img alt="icon" src="/icons/like-icon.svg" />
            <img alt="icon" src="/icons/dislike-icon.svg" />
          </div>
        </div>
      </Box>
    </>
  );
};

export default BookCardA;
