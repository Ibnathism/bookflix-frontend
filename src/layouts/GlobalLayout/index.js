import { Box, Container } from "@material-ui/core";
const GlobalLayout = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container>
        <Box>{children}</Box>
      </Container>
    </div>
  );
};

export default GlobalLayout;
