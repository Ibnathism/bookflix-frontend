import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyles from "./theme/global";
import LoginView from "./views/LoginView";
import TestView from "./views/TestView";
function App() {
  return (
    <Router>
      <Route path="/" exact component={TestView} />
      <Route path="/login" component={LoginView} />
      <GlobalStyles />
    </Router>
  );
}

export default App;
