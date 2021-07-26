import { Box, Typography, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { useHistory } from "react-router";
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
  const history = useHistory();
  const classes = useStyles();
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <>
      {isHovered ? (
        <Box
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={classes.hoveredRoot}
        >
          <img
            className={classes.upperContainerHovered}
            alt="book"
            src={imageUrl}
          />
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
              <IconButton onClick={() => history.push(`home/${id}/read`)}>
                <img alt="icon" src="/icons/read-icon.svg" />
              </IconButton>
              {isOnList ? (
                <IconButton onClick={() => history.push(`home/${id}/read`)}>
                  <img alt="icon" src="/icons/star-icon-enabled.svg" />
                </IconButton>
              ) : (
                <IconButton onClick={() => history.push(`home/${id}/read`)}>
                  <img alt="icon" src="/icons/star-icon.svg" />
                </IconButton>
              )}
              {isFav ? (
                <IconButton onClick={() => history.push(`home/${id}/read`)}>
                  <img alt="icon" src="/icons/like-icon-enabled.svg" />
                </IconButton>
              ) : (
                <IconButton onClick={() => history.push(`home/${id}/read`)}>
                  <img alt="icon" src="/icons/like-icon.svg" />
                </IconButton>
              )}
              {/* <img alt="icon" src="/icons/dislike-icon.svg" /> */}
            </div>
          </div>
        </Box>
      ) : (
        <Box
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
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
