import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginView from "./views/LoginView";
import TestView from "./views/TestView";
function App() {
  return (
    <Router>
      <Route path="/" exact component={TestView} />
      <Route path="/login" component={LoginView} />
    </Router>
  );
}

export default App;
