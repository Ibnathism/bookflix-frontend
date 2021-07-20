import AppBar from "../../components/Navbar";

const CommonLayout = ({ children }) => {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  );
};

export default CommonLayout;
