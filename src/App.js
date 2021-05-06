//import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TestView from "./views/TestView/index";
import TestView2 from "./views/TestView2/index";
function App() {
  return (
    <Router>
      <Route path="/" exact component={TestView} />
      <Route path="/about" component={TestView2} />
    </Router>
  );
}

export default App;
