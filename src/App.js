import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyles from "./theme/global";
import HomeView from "./views/Home";
import LoginView from "./views/Login";
import MyListView from "./views/MyList";
import TestView from "./views/TestView";
function App() {
  return (
    <Router>
      <Route path="/" exact component={TestView} />
      <Route path="/login" exact component={LoginView} />
      <Route path="/home" exact component={HomeView} />
      <Route path="/list" exact component={MyListView} />
      <GlobalStyles />
    </Router>
  );
}

export default App;
